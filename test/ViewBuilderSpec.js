var ViewBuilder = require('./../app/builders/ViewBuilder.js');
var should = require('should');

describe('ViewBuilder', function() {
  it('_generateFields() should return input type text if framework style is 1', function() {
    var properties = [
      {
        name: 'name',
        type: 'string',
        value: 'sergio',
        track: null
      }
    ];
    var viewBuilder = new ViewBuilder('template', properties, 1);
    var result = viewBuilder._generateFields(properties, 1);
    result.should.equal(`
<input type="text" ng-model="name">`);
  });

  it('_generateFields() should return input type number if framework style is 1', function() {
    var properties = [
      {
        name: 'age',
        type: 'number',
        value: 23,
        track: null
      }
    ];
    var viewBuilder = new ViewBuilder('template', properties, 1);
    var result = viewBuilder._generateFields(properties, 1);
    result.should.equal(`
<input type="number" ng-model="age">`);
  });

  it('_generateFields() should return input type checkbox if framework style is 1', function() {
    var properties = [
      {
        name: 'married',
        type: 'boolean',
        value: false,
        track: null
      }
    ];
    var viewBuilder = new ViewBuilder('template', properties, 1);
    var result = viewBuilder._generateFields(properties, 1);
    result.should.equal(`
<input type="checkbox" ng-model="married"> married`);
  });

  it('_generateFields() should return select if framework style is 1', function() {
    var properties = [
      {
        name: 'hobbies',
        type: 'array',
        value: ['football', 'basket', 'music', 'games'],
        track: null
      }
    ];
    var viewBuilder = new ViewBuilder('template', properties, 1);
    var result = viewBuilder._generateFields(properties, 1);
    result.should.equal(`
<select ng-model="selectedhobbies" ng-options="auxhobbies for auxhobbies in hobbies"></select>`);
  });

  it('_generateFields() should return input type checkbox, text, number and select if framework style is 1', function() {
    var properties = [
      {
        name: 'married',
        type: 'boolean',
        value: false,
        track: null
      },
      {
        name: 'name',
        type: 'string',
        value: 'sergio',
        track: null
      },
      {
        name: 'age',
        type: 'number',
        value: 23,
        track: null
      },
      {
        name: 'hobbies',
        type: 'array',
        value: ['football', 'basket', 'music', 'games'],
        track: null
      }
    ];
    var viewBuilder = new ViewBuilder('template', properties, 1);
    var result = viewBuilder._generateFields(properties, 1);
    result.should.equal(`
<input type="checkbox" ng-model="married"> married
<input type="text" ng-model="name">
<input type="number" ng-model="age">
<select ng-model="selectedhobbies" ng-options="auxhobbies for auxhobbies in hobbies"></select>`);
  });

  it('_generateFields() should return input type text with bootstrap style if framework style is 2', function() {
    var properties = [
      {
        name: 'name',
        type: 'string',
        value: 'sergio',
        track: null
      }
    ];
    var viewBuilder = new ViewBuilder('template', properties, 2);
    var result = viewBuilder._generateFields(properties, 2);
    result.should.equal(`
<div class="col-md-2">
  <div class="input-group">
    <span class="input-group-addon">Name</span>
    <input type="text" ng-model="name" class="form-control" aria-describedby="basic-addon1">
  </div>
</div>`);
  });

  it('_generateFields() should return input type number with bootstrap style if framework style is 2', function() {
    var properties = [
      {
        name: 'age',
        type: 'number',
        value: '13',
        track: null
      }
    ];
    var viewBuilder = new ViewBuilder('template', properties, 2);
    var result = viewBuilder._generateFields(properties, 2);
    result.should.equal(`
<div class="col-md-2">
  <div class="input-group">
    <span class="input-group-addon">Age</span>
    <input type="number" ng-model="age" class="form-control" aria-describedby="basic-addon1">
  </div>
</div>`);
  });

  it('_generateFields() should return input type checkbox with bootstrap style if framework style is 2', function() {
    var properties = [
      {
        name: 'married',
        type: 'boolean',
        value: false,
        track: null
      }
    ];
    var viewBuilder = new ViewBuilder('template', properties, 2);
    var result = viewBuilder._generateFields(properties, 2);
    result.should.equal(`
<div class="col-md-2">
  <div class="input-group">
    <span class="input-group-addon">
      <input type="checkbox" ng-model="married">
    </span>
    <span class="form-control">Married</span>
  </div>
</div>`);
  });

  it('_generateFields() should return select with bootstrap style if framework style is 2', function() {
    var properties = [
      {
        name: 'hobbies',
        type: 'array',
        value: ['football', 'basket', 'music', 'games'],
        track: null
      }
    ];
    var viewBuilder = new ViewBuilder('template', properties, 2);
    var result = viewBuilder._generateFields(properties, 2);
    result.should.equal(`
<div class="col-md-2">
  <div class="input-group">
    <span class="input-group-addon">Hobbies</span>
    <select ng-model="selectedhobbies" class="form-control" ng-options="auxhobbies for auxhobbies in hobbies"></select>
  </div>
</div>`);
  });

  it('_generateFields() should return input type checkbox, text, number and select with bootstrap styles if framework style is 2', function() {
    var properties = [
      {
        name: 'married',
        type: 'boolean',
        value: false,
        track: null
      },
      {
        name: 'name',
        type: 'string',
        value: 'sergio',
        track: null
      },
      {
        name: 'age',
        type: 'number',
        value: 23,
        track: null
      },
      {
        name: 'hobbies',
        type: 'array',
        value: ['football', 'basket', 'music', 'games'],
        track: null
      }
    ];
    var viewBuilder = new ViewBuilder('template', properties, 2);
    var result = viewBuilder._generateFields(properties, 2);
    result.should.equal(`
<div class="col-md-2">
  <div class="input-group">
    <span class="input-group-addon">
      <input type="checkbox" ng-model="married">
    </span>
    <span class="form-control">Married</span>
  </div>
</div>
<div class="col-md-2">
  <div class="input-group">
    <span class="input-group-addon">Name</span>
    <input type="text" ng-model="name" class="form-control" aria-describedby="basic-addon1">
  </div>
</div>
<div class="col-md-2">
  <div class="input-group">
    <span class="input-group-addon">Age</span>
    <input type="number" ng-model="age" class="form-control" aria-describedby="basic-addon1">
  </div>
</div>
<div class="col-md-2">
  <div class="input-group">
    <span class="input-group-addon">Hobbies</span>
    <select ng-model="selectedhobbies" class="form-control" ng-options="auxhobbies for auxhobbies in hobbies"></select>
  </div>
</div>`);
  });

  it('_generateFields() should return input type text with angular material style if framework style is 3', function() {
    var properties = [
      {
        name: 'name',
        type: 'string',
        value: 'sergio',
        track: null
      }
    ];
    var viewBuilder = new ViewBuilder('template', properties, 3);
    var result = viewBuilder._generateFields(properties, 3);
    result.should.equal(`
<md-input-container>
  <label>Name</label>
  <input type="text" ng-model="name">
</md-input-container>`);
  });

  it('_generateFields() should return input type number with angular material style if framework style is 3', function() {
    var properties = [
      {
        name: 'age',
        type: 'number',
        value: '13',
        track: null
      }
    ];
    var viewBuilder = new ViewBuilder('template', properties, 3);
    var result = viewBuilder._generateFields(properties, 3);
    result.should.equal(`
<md-input-container>
  <label>Age</label>
  <input type="number" ng-model="age">
</md-input-container>`);
  });

  it('_generateFields() should return input type checkbox with angular material style if framework style is 3', function() {
    var properties = [
      {
        name: 'married',
        type: 'boolean',
        value: false,
        track: null
      }
    ];
    var viewBuilder = new ViewBuilder('template', properties, 3);
    var result = viewBuilder._generateFields(properties, 3);
    result.should.equal(`
<md-checkbox ng-model="married">
  Married
</md-checkbox>`);
  });

  it('_generateFields() should return select with angular material style if framework style is 3', function() {
    var properties = [
      {
        name: 'hobbies',
        type: 'array',
        value: ['football', 'basket', 'music', 'games'],
        track: null
      }
    ];
    var viewBuilder = new ViewBuilder('template', properties, 3);
    var result = viewBuilder._generateFields(properties, 3);
    result.should.equal(`
<md-input-container>
  <label>Hobbies</label>
  <md-select ng-model="selectedhobbies">
    <md-option ng-repeat="auxhobbies in hobbies" value="{{auxhobbies}}">
      {{auxhobbies}}
    </md-option>
  </md-select>
</md-input-container>`);
  });

  it('_generateFields() should return input type checkbox, text, number and select with bootstrap styles if framework style is 2', function() {
    var properties = [
      {
        name: 'married',
        type: 'boolean',
        value: false,
        track: null
      },
      {
        name: 'name',
        type: 'string',
        value: 'sergio',
        track: null
      },
      {
        name: 'age',
        type: 'number',
        value: 23,
        track: null
      },
      {
        name: 'hobbies',
        type: 'array',
        value: ['football', 'basket', 'music', 'games'],
        track: null
      }
    ];
    var viewBuilder = new ViewBuilder('template', properties, 3);
    var result = viewBuilder._generateFields(properties, 3);
    result.should.equal(`
<md-checkbox ng-model="married">
  Married
</md-checkbox>
<md-input-container>
  <label>Name</label>
  <input type="text" ng-model="name">
</md-input-container>
<md-input-container>
  <label>Age</label>
  <input type="number" ng-model="age">
</md-input-container>
<md-input-container>
  <label>Hobbies</label>
  <md-select ng-model="selectedhobbies">
    <md-option ng-repeat="auxhobbies in hobbies" value="{{auxhobbies}}">
      {{auxhobbies}}
    </md-option>
  </md-select>
</md-input-container>`);
  });

});
