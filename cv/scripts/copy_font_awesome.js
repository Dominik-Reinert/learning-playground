#!/usr/bin/env node
const BaseUrls = require("./base_url");
const fs = require("fs");
const path = require("path");

(function copyFontAwesome() {
  const sourcePath = path.resolve(
    "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
  );
  console.log(`source: ${sourcePath}`);

  const targetPath = path.resolve(`../public/font-awesome.css`);
  console.log(`Copy fontawesome css to ${targetPath}`);
  fs.createReadStream(sourcePath).pipe(fs.createWriteStream(targetPath));
})();
