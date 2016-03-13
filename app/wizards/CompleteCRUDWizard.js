'use strict';
let prompt = require('prompt');
let colors = require('colors');
let ControllerBuilder = require('./../builders/ControllerBuilder');
let WizardParser = require('./../common/WizardParser.js');
let ViewBuilder = require('./../builders/ViewBuilder.js');
let ServiceBuilder = require('./../builders/ServiceBuilder');
let JavaScriptGenerator = require('./../common/JavaScriptGenerator.js');

class CompleteCRUDWizard {
  constructor() {}

  init() {
    let schema = {
      properties: {
        entityName: {
          description: colors.green('Enter entity name'),
          message: colors.red('Name of entity is required'),
          required: true
        },
        properties: {
          description: colors.green('Write properties for your controller separated by # (name:type:value) \n')
        },
        dependencies: {
          description: colors.green('Write dependencies for your controller separated by , : ($scope already added) \n')
        },
        frameworkStyle: {
          description: colors.green('Framework style: \n 1. None 2. Bootstrap 3. Angular Material')
        },
        urlService: {
          description: colors.green('API URL (example: http://localhost/api/entity)'),
          required: true,
          message: colors.red('Url name is required')
        }
      }
    };
    prompt.start();
    prompt.get(schema, (err, result) => {
      if (err) console.log(err);
      let properties = WizardParser.getProperties(result.properties);
      let dependencies = WizardParser.getDependencies(result.dependencies);
      let serviceName = JavaScriptGenerator.getPascalCamelCaseName(result.entityName) + 'Services';
      dependencies.push(serviceName);
      let controller = new ControllerBuilder(`${result.entityName}Ctrl`, properties, dependencies, result.entityName);
      controller.createTemplate();
      let view = new ViewBuilder(`${result.entityName}View`, properties, result.frameworkStyle);
      view.createTemplate();
      let service = new ServiceBuilder(result.entityName, result.urlService, result.crudType);
      service.createTemplate();
    });
  }
}

module.exports = new CompleteCRUDWizard();
