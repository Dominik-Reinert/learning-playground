var fs = require("fs");

exports.copyFontAwesome = function() {
  fs.createReadStream("../@fortawesome/css/all.css").pipe(
    fs.createWriteStream("../public/font-awesome.css")
  );
};
