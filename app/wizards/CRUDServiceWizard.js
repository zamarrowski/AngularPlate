'use strict';
let prompt = require('prompt');
let ServiceBuilder = require('./../builders/ServiceBuilder');

class CRUDServiceWizard {
  constructor() {

  }

  init() {
    let schema = {
      properties: {
          name: {
            description: 'Entity name',
            required: true
          },
          urlService: {
            description: 'Url',
            required: true
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
