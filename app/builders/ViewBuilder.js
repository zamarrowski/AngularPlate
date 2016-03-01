'use strict';
let writer = require('./../common/Writer.js');
let JavaScriptGenerator = require('./../common/JavaScriptGenerator.js');

class ViewBuilder {
  constructor(name, properties, frameworkStyle) {
    this.name = name;
    this.properties = properties;
    this.frameworkStyle = frameworkStyle;
  }

  createTemplate() {
    writer.writeTemplate(`${this.name}.html`, this._getTemplate());
  }

  _getTemplate() {
    return this._generateFields(this.properties, this.frameworkStyle);
  }

  _generateFields(properties, frameworkStyle) {
    if (frameworkStyle == 1) {
      return this._getNoneStyleInputFields(properties);
    } else if (frameworkStyle == 2) {
      return this._getBootstrapInputFields(properties);
    }
  }

  _getNoneStyleInputFields(properties) {
    let template = '';
    properties.map((property) => {
      if (property.type == 'string' || property.type == 'number') {
        template+= `
<input type="${property.type == 'string' ? 'text' : 'number'}" ng-model="${property.name}">`;
      }
      else if (property.type == 'boolean') {
        template+= `
<input type="checkbox" ng-model="${property.name}"> ${property.name}`;
      }
      else if (property.type == 'array') {
        template+= `
<select ng-model="selected${property.name}" ng-options="aux${property.name} for aux${property.name} in ${property.name}"></select>`;
      }
    });

    return template;
  }

  _getBootstrapInputFields(properties) {
    let template = '';
    properties.map((property) => {
      if (property.type == 'string' || property.type == 'number') {
        template+= `
<div class="col-md-2">
  <div class="input-group">
    <span class="input-group-addon">${JavaScriptGenerator.getPascalCamelCaseName(property.name)}</span>
    <input type="${property.type == 'string' ? 'text' : 'number'}" ng-model="${property.name}" class="form-control" aria-describedby="basic-addon1">
  </div>
</div>`;
      }
      else if (property.type == 'boolean') {
        template+= `
<div class="col-md-2">
  <div class="input-group">
    <span class="input-group-addon">
      <input type="checkbox" ng-model="${property.name}">
    </span>
    <span class="form-control">${JavaScriptGenerator.getPascalCamelCaseName(property.name)}</span>
  </div>
</div>`;
      }
      else if (property.type == 'array') {
        template+= `
<div class="col-md-2">
  <div class="input-group">
    <span class="input-group-addon">${JavaScriptGenerator.getPascalCamelCaseName(property.name)}</span>
    <select ng-model="selected${property.name}" class="form-control" ng-options="aux${property.name} for aux${property.name} in ${property.name}"></select>
  </div>
</div>`;
      }
    });

    return template;
  }

}

module.exports = ViewBuilder;
