#!/usr/bin/env node

import { readFileSync, writeFileSync } from "fs";
import * as Handlebars from "handlebars";
import {
  globalPath,
  routerGeneratorBackendHandlerTemplatePath,
  routerGeneratorBackendRouterTemplatePath,
  routerGeneratorBackendValidationTemplatePath,
  routerGeneratorFrontendFetcherTemplatePath,
  routerGeneratorInputPath,
} from "./common_path";
import { Route, RouteEndpoint } from "./route";

function toUpperCase(name: string) {
  return name[0].toUpperCase().concat(name.slice(1));
}

function camelCaseToSnakeCase(name: string) {
  return name.replace(/([a-z])([A-Z])/g, "$1_$2").toLocaleLowerCase();
}

function addHandlerImportPaths(context: any, options: any): void {
  const contextNameSnakeCase: string = camelCaseToSnakeCase(context.eName);
  context.importPathRoute = `${contextNameSnakeCase}`;
  context.importPathValidation = `${contextNameSnakeCase}_validation`;
  context.importPathHandler = `${contextNameSnakeCase}_handler`;
  return options.fn(context);
}

function registerHelpers() {
  Handlebars.registerHelper("addImportPaths", function (
    context: any,
    options: any
  ) {
    return addHandlerImportPaths(context, options);
  });
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

const outputPath = `${globalPath}/scripts`;

function generateBackendRouter(parsedRoute: Route) {
  const backendRouterTemplate = readFileSync(
    `${routerGeneratorBackendRouterTemplatePath}`,
    "utf-8"
  );
  const compiledBeTemplate = Handlebars.compile(backendRouterTemplate);
  const endpointCode = compiledBeTemplate(parsedRoute);
  console.log(`Overwriting current endpoint`);
  writeFileSync(
    `${outputPath}/${camelCaseToSnakeCase(parsedRoute.name)}_router.ts`,
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
    const endpointCode = compiledBeTemplate({
      routePath: parsedRoute.path,
      endpoint,
    });
    console.log(`Overwriting current endpoint`);
    writeFileSync(
      `${outputPath}/${camelCaseToSnakeCase(endpoint.eName)}_handler.ts`,
      endpointCode,
      {
        encoding: "utf-8",
      }
    );
  });
}

function generateBackendValidator(parsedRoute: Route) {
  const backendValidatorTemplate = readFileSync(
    `${routerGeneratorBackendValidationTemplatePath}`,
    "utf-8"
  );
  const compiledBeTemplate = Handlebars.compile(backendValidatorTemplate);
  parsedRoute.endpoints.forEach((endpoint: RouteEndpoint) => {
    const endpointCode = compiledBeTemplate({
      routePath: parsedRoute.path,
      endpoint,
    });
    console.log(`Overwriting current validation`);
    writeFileSync(
      `${outputPath}/${camelCaseToSnakeCase(endpoint.eName)}_validation.ts`,
      endpointCode,
      {
        encoding: "utf-8",
      }
    );
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
      `${outputPath}/${camelCaseToSnakeCase(endpoint.eName)}_fetch.ts`,
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
  console.debug(`read file content: ${testRoute}`);
  let parsedRoute: Route = JSON.parse(testRoute);
  parsedRoute = addInterfaceNamesToEndpoints(parsedRoute);
  parsedRoute = addImportPathsToEndpoints(parsedRoute);
  generateBackendRouter(parsedRoute);
  generateBackendHandler(parsedRoute);
  generateBackendValidator(parsedRoute);
  generateFrontendfetch(parsedRoute);
})();
