const path = require("path");

export const globalPath: string = path.resolve("./");

export const backendPath: string = path.resolve("./backend");
export const frontendPath: string = path.resolve("./cv");
export const scriptsPath: string = path.resolve("scripts");
export const scriptsSrcPath: string = path.resolve(`${scriptsPath}/src`);
export const scriptsDistPath: string = path.resolve(`${scriptsPath}/dist`);

export const frontendEndpointOutputDir = path.resolve(
  `${frontendPath}/src/generated/endpoints`
);
export const backendRouterOutputDir = path.resolve(
  `${backendPath}/src/generated/router`
);
export const backendValidatorOutputDir = path.resolve(
  `${backendPath}/src/generated/validator`
);
export const backendHandlerOutputDir = path.resolve(
  `${backendPath}/src/generated/handler`
);

export const generatorInputPath: string = path.resolve(
  `${exports.globalPath}/generator_input`
);
export const routerGeneratorInputPath: string = path.resolve(
  `${exports.generatorInputPath}/router`
);
export const routerGeneratorTemplatePath: string = path.resolve(
  `${scriptsPath}/src/templates`
);
