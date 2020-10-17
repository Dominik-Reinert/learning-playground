#!/usr/bin/env node

const { routerGeneratorInputPath, globalPath, routerGeneratorBackendRouterTemplatePath,routerGeneratorBackendHandlerTemplatePath, routerGeneratorBackendValidationTemplatePath } = require("./common_path");
const { readFileSync, writeFileSync  } = require("fs");
const Handlebars = require("handlebars");

function toUpperCase(name) {
    return name[0].concat(name.slice(1));
}

function addFunctionAndInterfaceNames (routeName, context, options) {
    context.interfaceName = `${toUpperCase(routeName)}${toUpperCase(context.eName)}RequestParams`
    return options.fn(context);
}

function registerHelpers() {
    Handlebars.registerHelper("addFunctionAndInterfaceNames", function(routeName, context, options) {return addFunctionAndInterfaceNames(routeName, context, options)})
}

const outputPath = `${globalPath}/scripts`

function generateBackendRouter(route) {
  const backendRouterTemplate = readFileSync(`${routerGeneratorBackendRouterTemplatePath}`, 'utf-8');
  const compiledBeTemplate = Handlebars.compile(backendRouterTemplate);
  const endpointCode = compiledBeTemplate(JSON.parse(route));
  console.log(`Overwriting current endpoint`);
  writeFileSync(`${outputPath}/backend_test_route.ts`, endpointCode, {
    encoding: "utf-8",
  });
}

function generateBackendHandler(route) {
  const backendHandlerTemplate = readFileSync(`${routerGeneratorBackendHandlerTemplatePath}`, 'utf-8');
  const compiledBeTemplate = Handlebars.compile(backendHandlerTemplate);
  const parsedRoute = JSON.parse(route);
  parsedRoute.endpoints.forEach(endpoint => {
    const endpointCode = compiledBeTemplate({name: parsedRoute.name, endpoint});
    console.log(`Overwriting current endpoint`);
    writeFileSync(`${outputPath}/${endpoint.path}`, endpointCode, {
      encoding: "utf-8",
    });

  })

}

function generateBackendValidator(route) {
  const backendValidatorTemplate = readFileSync(`${routerGeneratorBackendValidationTemplatePath}`, 'utf-8');
  const compiledBeTemplate = Handlebars.compile(backendValidatorTemplate);
  const parsedRoute = JSON.parse(route);
  parsedRoute.endpoints.forEach(endpoint => {
    const endpointCode = compiledBeTemplate({name: parsedRoute.name, endpoint});
    console.log(`Overwriting current endpoint`);
    writeFileSync(`${outputPath}/${endpoint.path}`, endpointCode, {
      encoding: "utf-8",
    });
  })
}

(function start() {
    const testRoute = readFileSync(`${routerGeneratorInputPath}/routes/test_router.json`, 'utf-8');
    console.log(`read file content: ${testRoute}`)
    registerHelpers()
    generateBackendRouter(testRoute)
    generateBackendHandler(testRoute)
    generateBackendValidator(testRoute)
})();