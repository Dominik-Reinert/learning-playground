#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import * as Handlebars from "handlebars";
import {
  backendHandlerOutputDir,
  backendRouterOutputDir,
  backendValidatorOutputDir,
  frontendEndpointOutputDir,
  routerGeneratorBackendHandlerTemplatePath,
  routerGeneratorBackendRouterTemplatePath,
  routerGeneratorBackendValidationTemplatePath,
  routerGeneratorFrontendFetcherTemplatePath,
  routerGeneratorInputPath,
} from "./common_path";
import { Route, RouteEndpoint } from "./route";

function createGeneratedDirectories(): void {
  [
    backendHandlerOutputDir,
    backendRouterOutputDir,
    backendValidatorOutputDir,
    frontendEndpointOutputDir,
  ].forEach((path) => {
    if (!existsSync(path)) {
      mkdirSync(path, { recursive: true });
    }
  });
}

function toUpperCase(name: string) {
  return name[0].toUpperCase().concat(name.slice(1));
}

function camelCaseToSnakeCase(name: string) {
  return name.replace(/([a-z])([A-Z])/g, "$1_$2").toLocaleLowerCase();
}

function addInterfaceNamesToEndpoints(parsedRoute: Route): Route {
  return {
    ...parsedRoute,
    endpoints: parsedRoute.endpoints.map((endpoint) => {
      return {
        ...endpoint,
        interfaceName: `${toUpperCase(parsedRoute.name)}${toUpperCase(
          endpoint.eName
        )}`,
      };
    }),
  };
}

function addImportPathsToEndpoints(parsedRoute: Route): Route {
  return {
    ...parsedRoute,
    path: `${camelCaseToSnakeCase(parsedRoute.name)}_router`,
    endpoints: parsedRoute.endpoints.map((endpoint) => {
      const endpointNameSnakeCase: string = camelCaseToSnakeCase(
        endpoint.eName
      );
      return {
        ...endpoint,
        handler: {
          ...endpoint.handler,
          path: endpointNameSnakeCase,
          validation: {
            ...endpoint.handler.validation,
            path: `${endpointNameSnakeCase}_validation`,
          },
          request: {
            ...endpoint.handler.request,
            path: `${endpointNameSnakeCase}_handler`,
          },
        },
      };
    }),
  };
}

function generateBackendRouter(parsedRoute: Route) {
  const backendRouterTemplate = readFileSync(
    `${routerGeneratorBackendRouterTemplatePath}`,
    "utf-8"
  );
  const compiledBeTemplate = Handlebars.compile(backendRouterTemplate);
  const endpointCode = compiledBeTemplate(parsedRoute);
  console.log(`Overwriting current endpoint`);
  writeFileSync(
    `${backendRouterOutputDir}/${camelCaseToSnakeCase(
      parsedRoute.name
    )}_router.ts`,
    endpointCode,
    {
      encoding: "utf-8",
    }
  );
}

function generateBackendHandler(parsedRoute: Route) {
  const backendHandlerTemplate = readFileSync(
    `${routerGeneratorBackendHandlerTemplatePath}`,
    "utf-8"
  );
  const compiledBeTemplate = Handlebars.compile(backendHandlerTemplate);
  parsedRoute.endpoints.forEach((endpoint: RouteEndpoint) => {
    const filePath = `${backendHandlerOutputDir}/${camelCaseToSnakeCase(
      endpoint.eName
    )}_handler.ts`;
    if (!existsSync(filePath)) {
      const endpointCode = compiledBeTemplate({
        routePath: parsedRoute.path,
        endpoint,
      });
      console.log(`Overwriting current endpoint`);
      writeFileSync(filePath, endpointCode, {
        encoding: "utf-8",
      });
    } else {
      console.log(`handler for ${endpoint.eName} already exists`);
    }
  });
}

function generateBackendValidator(parsedRoute: Route) {
  const backendValidatorTemplate = readFileSync(
    `${routerGeneratorBackendValidationTemplatePath}`,
    "utf-8"
  );
  const compiledBeTemplate = Handlebars.compile(backendValidatorTemplate);
  parsedRoute.endpoints.forEach((endpoint: RouteEndpoint) => {
    const filePath = `${backendValidatorOutputDir}/${camelCaseToSnakeCase(
      endpoint.eName
    )}_validation.ts`;
    if (!existsSync(filePath)) {
      const endpointCode = compiledBeTemplate({
        routePath: parsedRoute.path,
        endpoint,
      });
      console.log(`Overwriting current validation`);
      writeFileSync(filePath, endpointCode, {
        encoding: "utf-8",
      });
    } else {
      console.log(`validator for ${endpoint.eName} already exists`);
    }
  });
}

function generateFrontendfetch(parsedRoute: Route) {
  const frontendfetchTemplate = readFileSync(
    `${routerGeneratorFrontendFetcherTemplatePath}`,
    "utf-8"
  );
  const compiledFefetchTemplate = Handlebars.compile(frontendfetchTemplate);
  parsedRoute.endpoints.forEach((endpoint: RouteEndpoint) => {
    const endpointCode = compiledFefetchTemplate({
      routePath: parsedRoute.path,
      endpoint,
    });
    console.log(`Overwriting current fetch`);
    writeFileSync(
      `${frontendEndpointOutputDir}/${camelCaseToSnakeCase(
        endpoint.eName
      )}_fetch.ts`,
      endpointCode,
      {
        encoding: "utf-8",
      }
    );
  });
}

(function start() {
  const testRoute = readFileSync(
    `${routerGeneratorInputPath}/routes/test_router.json`,
    "utf-8"
  );
  let parsedRoute: Route = JSON.parse(testRoute);
  createGeneratedDirectories();
  parsedRoute = addInterfaceNamesToEndpoints(parsedRoute);
  parsedRoute = addImportPathsToEndpoints(parsedRoute);
  generateBackendRouter(parsedRoute);
  generateBackendHandler(parsedRoute);
  generateBackendValidator(parsedRoute);
  generateFrontendfetch(parsedRoute);
})();
