var fs = require('fs');
var glob = require("glob");
var geojsonhint = require('geojsonhint');

exports.run = function (callback) {
  glob("**/*.geojson", function (er, files) {
    if (er) {
      console.error(er);
      callback(false);
      return;
    }

    files.forEach(function (file) {
      fs.readFile(file, {}, function (err,data) {
        if (err) {
          allValid = false;
          console.error(err);
          callback(false);
          return;
        }

        var errors = geojsonhint.hint(data.toString());

        if (errors.length) {
          console.error(errors);
          callback(false);
        }

      });
    });
  })
};
