'use strict';

let prompt = require('prompt');
let colors = require("colors/safe");
let FactoryWizard = require('./app/wizards/FactoryWizard.js');
let ControllerWizard = require('./app/wizards/ControllerWizard.js');
let CRUDServiceWizard = require('./app/wizards/CRUDServiceWizard.js');
let CompleteCRUDWizard = require('./app/wizards/CompleteCRUDWizard.js');

let schema = {
  properties: {
    create: {
      description: colors.red('\nWelcome to Angularplate:\n') + colors.green('What do you create? \n'
      +' 1. Factory \n 2. Controller + View \n 3. CRUD Service \n 4. Complete CRUD (Controller + View + Service) \n 0. Exit'),
      required: true
    }
  }
}
prompt.message = colors.white("AngularPlate!")
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
  else if (result.create == 4) {
    CompleteCRUDWizard.init();
  }
  else if (result.create == 0) {
    console.log('Bye!');
    process.exit();
  }

});
