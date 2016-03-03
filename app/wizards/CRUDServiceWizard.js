'use strict';
let prompt = require('prompt');
let colors = require("colors/safe");
let ServiceBuilder = require('./../builders/ServiceBuilder');

class CRUDServiceWizard {
  constructor() {

  }

  init() {
    let schema = {
      properties: {
          name: {
            description: colors.green('Entity name'),
            required: true,
            message: colors.red('Entity name is required')
          },
          urlService: {
            description: colors.green('Url'),
            required: true,
            message: colors.red('Url name is required')
          }
      }
    };

    prompt.start();
    prompt.get(schema, (err, result) => {
      if (err) console.log(err);
      let service = new ServiceBuilder(result.name, result.urlService, result.crudType);
      service.createTemplate();
    });
  }
}

module.exports = new CRUDServiceWizard();
