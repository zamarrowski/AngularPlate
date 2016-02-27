'use strict';
let prompt = require('prompt');
let FactoryBuilder = require('./../builders/FactoryBuilder');
let WizardParser = require('./../common/WizardParser.js');

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
        },
        dependencies: {
          description: 'Write dependencies for your factory separated by ,\n'
        }
      }
    };
    prompt.start();
    prompt.get(schema, (err, result) => {
      if (err) console.log(err);
      let properties = WizardParser.getProperties(result.properties);
      let dependencies = WizardParser.getDependencies(result.dependencies);
      let factory = new FactoryBuilder(result.name, properties, dependencies);
      factory.createTemplate();
    });
  }
}

module.exports = new FactoryWizard();
