#!/usr/bin/env node
var fs = require("fs");
var path = require("path");

(function copyFontAwesome() {
  const sourcePath = path.resolve(
    "../node_modules/@fortawesome/fontawesome-free/css/all.css"
  );
  const targetPath = path.resolve("../public/font-awesome.css");
  console.log(
    `Attempting to copy fontawesome css from ${sourcePath} to ${targetPath}`
  );
  fs.createReadStream(sourcePath).pipe(fs.createWriteStream(targetPath));
})();
