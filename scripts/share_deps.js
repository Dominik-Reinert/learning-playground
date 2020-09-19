#!/usr/bin/env node
const { readFileSync, writeFileSync } = require("fs");
const { globalPath, backendPath, frontendPath } = require("./common_path");

function addPackage(commonPackage, path) {
  console.info(`adding package at path ${path}`);
  const packageJson = JSON.parse(readFileSync(path, "utf8"));

  console.log(
    `Merging dependencies in common package.json (${JSON.stringify(
      commonPackage.dependencies
    )}) with dependencies of package.json (${JSON.stringify(
      packageJson.dependencies
    )})`
  );
  const updatedPackageJson = {
    ...packageJson,
    dependencies: {
      ...packageJson.dependencies,
      ...commonPackage.dependencies,
    },
    devDependencies: {
      ...packageJson.devDependencies,
      ...commonPackage.devDependencies,
    },
  };

  console.log(
    `Merged dependencies: ${JSON.stringify(updatedPackageJson.dependencies)}`
  );

  console.log(`Overwriting exising package.json`);
  writeFileSync(path, JSON.stringify(updatedPackageJson), {
    encoding: "utf-8",
  });
}

function addPackageGlobal(commonPackage) {
    console.info("Adding package update to global");
    const globalPackageJsonPath = `${globalPath}/package.json`;
    addPackage(commonPackage, globalPackageJsonPath);
  }

function addPackageBackend(commonPackage) {
  console.info("Adding package update to backend");
  const backendPackageJsonPath = `${backendPath}/package.json`;
  addPackage(commonPackage, backendPackageJsonPath);
}

function addPackageFrontend(commonPackage) {
  console.info("Adding package update to frontend");
  const frontendPackageJsonPath = `${frontendPath}/package.json`;
  addPackage(commonPackage, frontendPackageJsonPath);
}

(function start() {
  const [execEnv, scriptPath, serverType] = process.argv;
  console.log(`sharing package.json update`);

  console.log(`reading common package.json file`);
  const commonPackageJson = JSON.parse(
    readFileSync("./scripts/common_package.json", "utf8")
  );
  console.log(`Read common package json`, commonPackageJson);

  addPackageGlobal(commonPackageJson)
  addPackageBackend(commonPackageJson);
  addPackageFrontend(commonPackageJson);
})();
