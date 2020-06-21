#!/usr/bin/env node
const BaseUrls = require("./base_url");
const fs = require("fs");
const path = require("path");

(function copyFontAwesome() {
  const sourcePath = path.resolve(
    "./node_modules/@fortawesome/fontawesome-free/css/all.min.css"
  );
  console.log(`source: ${sourcePath}`);
  fs.access(sourcePath, fs.F_OK, (err) => {
    if (err) {
      console.log(`source file does not exist!`);
      console.error(err);
      return;
    }

    const targetPath = path.resolve(`./public/font-awesome.css`);
    console.log(`Copy fontawesome css to ${targetPath}`);

    fs.access(targetPath, fs.F_OK, (err) => {
      if (err) {
        console.log(`target file/path does not exist. Creating it`);

        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
        }
      }

      fs.createReadStream(sourcePath).pipe(fs.createWriteStream(targetPath));
    });
  });
})();
