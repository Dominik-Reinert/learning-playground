#!/usr/bin/env node
const path = require("path");
const fs = require("fs");
const { exec } = require("child_process");
const { frontendPath, backendPath } = require("./common_path");

const logCallback = (err, stdout, stderr) => {
  console.error(stderr);
  console.log(stdout);
};

function startDb() {
  console.log("Starting database");
  const databaseDirPath = path.resolve("");
  const databaseConfigName = "mongod.conf";
  const databaseConfigPath = path.resolve(`./database/${databaseConfigName}`);

  const command = `cd ${databaseDirPath}; mongod --config ${databaseConfigPath}; cd -`;
  console.log(`Executing: '${command}'`);

  exec(command);
}

function startBackend() {
  console.info("Starting backend server");
  exec(`cd ${backendPath}; npm run-script start:dev; cd -`, logCallback);
}

function startFrontend() {
  console.info("Starting frontend server");
  exec(`cd ${frontendPath}; yarn start; cd -`, logCallback);
}

(function start() {
  const [execEnv, scriptPath, serverType] = process.argv;
  startDb();
  console.info(`Given server type to start: ${serverType}`);
  switch (serverType) {
    case "backend":
      startBackend();
      break;
    case "frontend":
      startFrontend();
      break;
    default:
      startBackend();
      startFrontend();
  }
})();
