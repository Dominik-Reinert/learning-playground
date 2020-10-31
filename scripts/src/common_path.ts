import { execSync, spawnSync } from "child_process";

const path = require("path");

export const backendPath: string = path.resolve("./backend");
export const frontendPath: string = path.resolve("./cv");
export const globalPath: string = path.resolve("./");
export const generatorInputPath: string = path.resolve(
  `${exports.globalPath}/generator_input`
);
export const routerGeneratorInputPath: string = path.resolve(
  `${exports.generatorInputPath}/router`
);
export const routerGeneratorTemplatePath: string = path.resolve(
  `${exports.routerGeneratorInputPath}/templates`
);
export const routerGeneratorBackendRouterTemplatePath: string = path.resolve(
  `${exports.routerGeneratorTemplatePath}/backend_router.handlebars`
);
export const routerGeneratorBackendValidationTemplatePath: string = path.resolve(
  `${exports.routerGeneratorTemplatePath}/backend_validator.handlebars`
);
export const routerGeneratorBackendHandlerTemplatePath: string = path.resolve(
  `${exports.routerGeneratorTemplatePath}/backend_handler.handlebars`
);
export const routerGeneratorFrontendFetcherTemplatePath: string = path.resolve(
  `${exports.routerGeneratorTemplatePath}/frontend_fetch.handlebars`
);

