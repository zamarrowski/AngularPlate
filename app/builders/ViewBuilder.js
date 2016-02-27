'use strict';
let writer = require('./../common/Writer.js');

class ViewBuilder {
  constructor(name, properties) {
    this.name = name;
    this.properties = properties;
  }

  createTemplate() {
    writer.writeTemplate(`${this.name}.html`, this._getTemplate());
  }

  _getTemplate() {
    return this._generateFields(this.properties);
  }

  _generateFields(properties) {
    var template = '';
    properties.map((property) => {
      if (property.type == 'string' || property.type == 'number') {
        template+= `
<input type="${property.type == 'string' ? 'text' : 'number'}" ng-model="${property.name}">`;
      }
      else if (property.type == 'boolean') {
        template+= `
<input type="checkbox" ng-model="${property.name}"> ${property.name}`;
      }
    });

    return template;
  }

}

module.exports = ViewBuilder;
