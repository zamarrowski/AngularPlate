'use strict';

let prompt = require('prompt');
let FactoryWizard = require('./app/wizards/FactoryWizard.js');
let ControllerWizard = require('./app/wizards/ControllerWizard.js');
let CRUDServiceWizard = require('./app/wizards/CRUDServiceWizard.js');

let schema = {
  properties: {
    create: {
      description: 'Create: \n 1. Factory \n 2. Controller + View \n 3. CRUD Service',
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
  else if (result.create == 2) {
    ControllerWizard.init();
  }
  else if (result.create == 3) {
    CRUDServiceWizard.init();
  }
});
