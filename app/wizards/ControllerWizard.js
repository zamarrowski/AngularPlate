'use strict';
let prompt = require('prompt');
let ControllerBuilder = require('./../builders/ControllerBuilder');
let WizardParser = require('./../common/WizardParser.js');

class ControllerWizard {
  constructor() {}

  init () {
    let schema = {
      properties: {
        name: {
          description: 'Enter a name for your controller',
          message: 'Name of controller is required',
          required: true
        },
        properties: {
          description: 'Write properties for your controller separated by # (name:type:value:track) \n'
        },
        dependencies: {
          description: 'Write dependencies for your controller separated by , : ($scope already added) \n'
        }
      }
    };
    prompt.start();
    prompt.get(schema, (err, result) => {
      if (err) console.log(err);
      let properties = WizardParser.getProperties(result.properties);
      let dependencies = WizardParser.getDependencies(result.dependencies);
      let controller = new ControllerBuilder(result.name, properties, dependencies);
      controller.createTemplate();
    });
  }
}

module.exports = new ControllerWizard();
