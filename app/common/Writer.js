'use strict';
var fs = require('fs');

class Writer {
  constructor() {

  }

  writeTemplate(fileName, template) {

    if (!fs.existsSync('files')) {
      fs.mkdirSync('files');
    }
    fs.writeFile(`./files/${fileName}`, template, function (err) {
      if (err) return console.log(err);
      console.log(`files/${fileName} created!`);
      return true;
    });
  }
}

module.exports = new Writer();
