'use strict';

let prompt = require('prompt');
let FactoryWizard = require('./app/wizards/FactoryWizard.js');

let schema = {
  properties: {
    create: {
      description: 'Create: \n 1. Factory \n',
      required: true
    }
  }
}
prompt.start();

prompt.get(schema, function (err, result) {
  if (err) console.log(err);

  if (result.create == 1) {
    FactoryWizard.init();
  }
});
