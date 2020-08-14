#!/usr/bin/env node
const path = require("path");
const fs = require("fs");
const { exec } = require("child_process");

const logCallback = (err, stdout, stderr) => {
  console.error(stderr);
  console.log(stdout);
};

function startDb() {
  console.log("Starting database");
  const databaseDirPath = path.resolve("./database");
  const databaseConfigName = "mongod.conf";
  const databaseConfigPath = path.resolve(
    databaseDirPath.concat(`/${databaseConfigName}`)
  );

  console.log("Check if database dir exists");
  if (fs.existsSync(databaseDirPath)) {
    console.log("database dir gets created");
    fs.mkdirSync(databaseDirPath);
  }

  console.log("Check if database config exists");
  if (fs.existsSync(databaseConfigPath)) {
    console.log("database config gets created");
    fs.writeFileSync(
      databaseConfigName,
      `
systemLog:
    destination: file
    path: "./log/mongod.log"
    logAppend: true
 storage:
    journal:
       enabled: true
 processManagement:
    fork: true
 net:
    bindIp: 127.0.0.1
    port: 27017
 setParameter:
    enableLocalhostAuthBypass: true
    `
    );
  }

  exec(`cd ${databaseDirPath}; mongod --config ${databaseConfigPath}`);
}

function startBackend() {
  console.info("Starting backend server");
  const backendPath = path.resolve("./backend");
  exec(`cd ${backendPath}; npm run-script start:dev; cd -`, logCallback);
}

function startFrontend() {
  console.info("Starting frontend server");
  const frontendPath = path.resolve("./cv");
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
