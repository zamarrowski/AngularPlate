'use strict';
class WizardParser {
  constructor() {}

  getProperties(stringProperties) {
    stringProperties = stringProperties.trim();
    let newsProperties = [];

    if (stringProperties) {
      let properties = stringProperties.split('#');
      properties.map((propertyString) => {
        let property = propertyString.split(':');
        newsProperties.push(
          {
            name: property[0],
            value: this._getPropertyValue(property[1], property[2]),
            type: property[1],
            trackBy: property[3]
          }
        );
      });
    }
    return newsProperties;
  }

  _getPropertyValue(type, value) {

    if (value) {
      if (type == 'string') {
        return String(value);
      } else if (type == 'number') { 
        return Number(value);
      } else if (type == 'boolean') {
        let result = value === 'true';
        return result;
      } else if(type == 'array') { 
        return this._getArray(value);
      }
    }

    return null;
  }

  _getArray(value) {
    let array = value.substring(1, value.length - 1 );
    return array.split(',');
  }

  getDependencies(dependenciesString) { 
    dependenciesString = dependenciesString.trim();
    let dependencies = [];
    if (dependenciesString) {
      dependencies = dependenciesString.split(',');
      dependencies.map(dependency => dependency.trim());
    }
    return dependencies;
  }
}

module.exports = new WizardParser();
