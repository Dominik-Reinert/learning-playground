#!/usr/bin/env node

import { exec } from "child_process";
import { backendPath, frontendPath } from "./common_path";

export function execAndLog(command: string) {
  const com = exec(command);
  com.stderr?.on("data", function (data) {
    console.error(data.toString());
  });
}

function startDb() {
  console.log("Starting database");

  const command = `sudo service mysql start`;
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

  if (arrayArgs.includes("database")) {
    startDb();
  }
  if (arrayArgs.includes("backend")) {
    startBackend();
  }
  if (arrayArgs.includes("frontend")) {
    startFrontend();
  }

  if (arrayArgs.includes("all")) {
    startDb();
    startBackend();
    startFrontend();
  }
})();
