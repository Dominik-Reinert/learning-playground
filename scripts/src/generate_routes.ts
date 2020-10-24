#!/usr/bin/env node

import { readFileSync, writeFileSync } from "fs";
import * as Handlebars from "handlebars";
import {
  globalPath,
  routerGeneratorBackendHandlerTemplatePath,
  routerGeneratorBackendRouterTemplatePath,
  routerGeneratorBackendValidationTemplatePath,
  routerGeneratorInputPath,
} from "./common_path";
import { RouteEndpoint } from "./route";

function toUpperCase(name: string) {
  return name[0].toUpperCase().concat(name.slice(1));
}

function addFunctionAndInterfaceNames(
  routeName: string,
  context: any,
  options: any
) {
  context.interfaceName = `${toUpperCase(routeName)}${toUpperCase(
    context.eName
  )}`;
  return options.fn(context);
}

function registerHelpers() {
  Handlebars.registerHelper("addFunctionAndInterfaceNames", function (
    routeName: string,
    context: any,
    options: any
  ) {
    return addFunctionAndInterfaceNames(routeName, context, options);
  });
}

const outputPath = `${globalPath}/scripts`;

function generateBackendRouter(route: string) {
  const backendRouterTemplate = readFileSync(
    `${routerGeneratorBackendRouterTemplatePath}`,
    "utf-8"
  );
  const compiledBeTemplate = Handlebars.compile(backendRouterTemplate);
  const endpointCode = compiledBeTemplate(JSON.parse(route));
  console.log(`Overwriting current endpoint`);
  writeFileSync(`${outputPath}/backend_test_route.ts`, endpointCode, {
    encoding: "utf-8",
  });
}

function generateBackendHandler(route: string) {
  const backendHandlerTemplate = readFileSync(
    `${routerGeneratorBackendHandlerTemplatePath}`,
    "utf-8"
  );
  const compiledBeTemplate = Handlebars.compile(backendHandlerTemplate);
  const parsedRoute = JSON.parse(route);
  parsedRoute.endpoints.forEach((endpoint: RouteEndpoint) => {
    const endpointCode = compiledBeTemplate({
      name: parsedRoute.name,
      endpoint,
    });
    console.log(`Overwriting current endpoint`);
    writeFileSync(
      `${outputPath}/${endpoint.handler.request.path}`,
      endpointCode,
      {
        encoding: "utf-8",
      }
    );
  });
}

function generateBackendValidator(route: string) {
  const backendValidatorTemplate = readFileSync(
    `${routerGeneratorBackendValidationTemplatePath}`,
    "utf-8"
  );
  const compiledBeTemplate = Handlebars.compile(backendValidatorTemplate);
  const parsedRoute = JSON.parse(route);
  parsedRoute.endpoints.forEach((endpoint: RouteEndpoint) => {
    const endpointCode = compiledBeTemplate({
      name: parsedRoute.name,
      endpoint,
    });
    console.log(`Overwriting current endpoint`);
    writeFileSync(
      `${outputPath}/${endpoint.handler.validation.path}`,
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
  registerHelpers();
  generateBackendRouter(testRoute);
  generateBackendHandler(testRoute);
  generateBackendValidator(testRoute);
})();
