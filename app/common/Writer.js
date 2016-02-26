'use strict';
var fs = require('fs');

class Writer {
  constructor() {

  }

  writeTemplate(fileName, template) {
    fs.writeFile(`${fileName}`, template, function (err) {
      if (err) return console.log(err);
      return true;
    });
  }
}

module.exports = new Writer();
