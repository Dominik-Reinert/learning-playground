const path = require("path");

exports.backendPath = path.resolve("./backend");
exports.frontendPath = path.resolve("./cv");
exports.globalPath = path.resolve("./");
exports.generatorInputPath = path.resolve(`${exports.globalPath}/generator_input`);
exports.routerGeneratorInputPath = path.resolve(`${exports.generatorInputPath}/router`);
