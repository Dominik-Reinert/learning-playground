#!/usr/bin/env node

const { routerGeneratorInputPath, globalPath } = require("./common_path");
const { readFileSync, writeFileSync  } = require("fs");
const Handlebars = require("handlebars");

(function start() {
    const testRoute = readFileSync(`${routerGeneratorInputPath}/routes/test_router.json`, 'utf-8');
    console.log(`read file content: ${testRoute}`)
    const backendTemplate = readFileSync(`${routerGeneratorInputPath}/templates/backend_router.handlebars`, 'utf-8');
    console.log(`read file content: ${backendTemplate}`)
    Handlebars.registerHelper("uppercase", input => input[0].toUpperCase().concat(input.slice(1)))
    const compiledBeTemplate = Handlebars.compile(backendTemplate);
    const endpointCode = compiledBeTemplate(JSON.parse(testRoute));
    console.log(`First try backend router: ${endpointCode}`)

    
  console.log(`Overwriting current endpoint`);
  writeFileSync(`${globalPath}/scripts/backend_test_route.ts`, endpointCode, {
    encoding: "utf-8",
  });
})();