#!/usr/bin/env node

import { exec } from "child_process";
import * as path from "path";
import { backendPath, frontendPath } from "./common_path";

export function execAndLog(command: string) {
  const com = exec(command);
  com.stderr?.on("data", function (data) {
    console.error(data.toString());
  });
}

function startDb() {
  console.log("Starting database");
  const databaseDirPath = path.resolve("");
  const databaseConfigName = "mongod.conf";
  const databaseConfigPath = path.resolve(`./database/${databaseConfigName}`);

  const command = `cd ${databaseDirPath}; mongod --config ${databaseConfigPath}; cd -`;
  console.log(`Executing: '${command}'`);

  execAndLog(command);
}

function startBackend() {
  console.info("Starting backend server");
  execAndLog(`cd ${backendPath}; npm run-script start:dev; cd -`);
}

function startFrontend() {
  console.info("Starting frontend server");
  execAndLog(`cd ${frontendPath}; yarn start; cd -`);
}

(function start() {
  const [execEnv, scriptPath, stringArgs] = process.argv;
  const arrayArgs = stringArgs ? stringArgs.split(" ") : [];

  console.info(`start script called with args: [${arrayArgs}]`);

  if (!arrayArgs.includes("--no-db")) {
    startDb();
  }
  if (arrayArgs.includes("backend")) {
    startBackend();
  } else if (arrayArgs.includes("frontend")) {
    startFrontend();
  } else {
    startBackend();
    startFrontend();
  }
})();
