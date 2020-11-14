#!/usr/bin/env node
import { readFileSync, writeFileSync } from "fs";
import { backendPath, frontendPath, globalPath } from "./common_path";
import { rebuildAndRestartIfNeeded } from "./needs_rebuild";

function addPackage(commonPackage: any, path: string) {
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

function addPackageGlobal(commonPackage: any) {
  console.info("Adding package update to global");
  const globalPackageJsonPath = `${globalPath}/package.json`;
  addPackage(commonPackage, globalPackageJsonPath);
}

function addPackageBackend(commonPackage: any) {
  console.info("Adding package update to backend");
  const backendPackageJsonPath = `${backendPath}/package.json`;
  addPackage(commonPackage, backendPackageJsonPath);
}

function addPackageFrontend(commonPackage: any) {
  console.info("Adding package update to frontend");
  const frontendPackageJsonPath = `${frontendPath}/package.json`;
  addPackage(commonPackage, frontendPackageJsonPath);
}

(function start() {
  const [execEnv, scriptPath, stringArgs] = process.argv;
  const arrayArgs = stringArgs ? stringArgs.split(" ") : [];
  const force: boolean = arrayArgs.includes("-f");
  rebuildAndRestartIfNeeded(force);

  console.log(`sharing package.json update`);

  console.log(`reading common package.json file`);
  const commonPackageJson = JSON.parse(
    readFileSync("./scripts/common_package.json", "utf8")
  );
  console.log(`Read common package json`, commonPackageJson);

  addPackageGlobal(commonPackageJson);
  addPackageBackend(commonPackageJson);
  addPackageFrontend(commonPackageJson);
})();
