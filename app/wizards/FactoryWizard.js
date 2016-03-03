'use strict';
let prompt = require('prompt');
let colors = require("colors/safe");
let FactoryBuilder = require('./../builders/FactoryBuilder');
let WizardParser = require('./../common/WizardParser.js');

class FactoryWizard {
  constructor() {}

  init () {
    let schema = {
      properties: {
        name: {
          description: colors.green('Enter a name for your factory'),
          message: colors.green('Name of factory is required'),
          required: true
        },
        properties: {
          description: colors.green('Write properties for your factory separated by # (name:type:value) \n')
        },
        dependencies: {
          description: colors.green('Write dependencies for your factory separated by ,\n')
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
