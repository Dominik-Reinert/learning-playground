#!/usr/bin/env node
const BaseUrls = require("./base_url");
const fs = require("fs");
const path = require("path");

(function copyFontAwesome() {
  const sourcePath = path.resolve(
    `${BaseUrls.getGitRoot()}/cv/node_modules/@fortawesome/fontawesome-free/css/all.css`
  );
  const targetPath = path.resolve(
    `${BaseUrls.getGitRoot()}/cv/public/font-awesome.css`
  );
  console.log(`Copy fontawesome css to ${targetPath}`);
  fs.createReadStream(sourcePath).pipe(fs.createWriteStream(targetPath));
})();
