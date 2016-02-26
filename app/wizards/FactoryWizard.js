'use strict';
let prompt = require('prompt');
let FactoryBuilder = require('./../builders/FactoryBuilder');

class FactoryWizard {
  constructor() {}

  init () {
    let schema = {
      properties: {
        name: {
          description: 'Enter a name for your factory',
          message: 'Name of factory is required',
          required: true
        },
        properties: {
          description: 'Write properties for your factory separated by # (name:type:value) \n'
        }
      }
    };
    prompt.start();
    prompt.get(schema, (err, result) => {
      if (err) console.log(err);

      let properties = this._getProperties(result.properties);
      let factory = new FactoryBuilder(result.name, properties);
      factory.createTemplate();
    });

  }

  _getProperties(stringProperties) {
    let properties = stringProperties.split('#');
    let newsProperties = [];
    properties.map((propertyString) => {
      let property = propertyString.split(':');
      newsProperties.push(
        {
          name: property[0],
          value: this._getPropertyValue(property[1], property[2]),
          type: property[1]
        }
      );
    });

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


}

module.exports = new FactoryWizard();
