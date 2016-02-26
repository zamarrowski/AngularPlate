'use strict';
let writer = require('./../common/Writer.js');

class FactoryBuilder {
  constructor(factoryName, properties, dependencies) {
    this.factoryName = factoryName;
    this.properties = properties;
    this.dependencies = dependencies;
  }

  createTemplate() {
    writer.writeTemplate(`${this.factoryName}.js`, this._getTemplate());
  }

  _getTemplate() {
    let template = `(function() {
  app.factory('${this._getFactorPascalCamelCaseName(this.factoryName)}', ${this.factoryName});
  ${this.factoryName}.$inject = [];
  function ${this.factoryName}() {
    let ${this.factoryName} = {
      ${this._getProperties()}
    };

    return ${this.factoryName};
  }
})();
`;

    return template;
  }

  _getProperties() {
    let properties = '';
    let iterations = 0;
    this.properties.map((property) => {
      if (!property.value || property.type == 'number' || property.type == 'boolean') {
        if (iterations > 0) {
          properties += `
      ${property.name}: ${property.value},`;
        } else {
          properties += `${property.name}: ${property.value},`;
        }
      }
      else if(property.type == 'string') {
        if (iterations > 0) {
          properties += `
      ${property.name}: '${property.value}',`;
        } else {
          properties += `${property.name}: '${property.value}',`;
        }
      }
      else if(property.type == 'array') {
        if (iterations > 0) {
          properties += `
      ${property.name}: [${this._getQuotedPropertiesFromArray(property.value)}],`;
        } else {
          properties += `${property.name}: [${this._getQuotedPropertiesFromArray(property.value)}],`;
        }
      }
      iterations++;
    });
    return properties;
  }

  _getQuotedPropertiesFromArray(properties) {
    let quotedProperties = '';
    for (let i = 0; i < properties.length; i++) {
      let property = properties[i];
      if (i != properties.length - 1) {
        quotedProperties+= `'${property}', `;
      } else {
        quotedProperties+= `'${property}'`;
      }
    }
    return quotedProperties;
  }

  _getFactorPascalCamelCaseName(name) {
      return name[0].toUpperCase() + name.substr(1);
  }

}


module.exports = FactoryBuilder;
