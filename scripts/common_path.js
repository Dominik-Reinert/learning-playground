const path = require("path");

exports.backendPath = path.resolve("./backend");
exports.frontendPath = path.resolve("./cv");
exports.globalPath = path.resolve("./");
exports.generatorInputPath = path.resolve(`${exports.globalPath}/generator_input`);
exports.routerGeneratorInputPath = path.resolve(`${exports.generatorInputPath}/router`);
exports.routerGeneratorTemplatePath = path.resolve(`${exports.routerGeneratorInputPath}/templates`);
exports.routerGeneratorBackendRouterTemplatePath = path.resolve(`${exports.routerGeneratorTemplatePath}/backend_router.handlebars`);
exports.routerGeneratorBackendValidationTemplatePath = path.resolve(`${exports.routerGeneratorTemplatePath}/backend_validator.handlebars`);
exports.routerGeneratorBackendHandlerTemplatePath = path.resolve(`${exports.routerGeneratorTemplatePath}/backend_handler.handlebars`);
