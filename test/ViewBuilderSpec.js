var ViewBuilder = require('./../app/builders/ViewBuilder.js');
var should = require('should');

describe('ViewBuilder', function() {
  it('_generateFields() should return input type text', function() {
    var properties = [
      {
        name: 'name',
        type: 'string',
        value: 'sergio',
        track: null
      }
    ];
    var viewBuilder = new ViewBuilder('template', properties);
    var result = viewBuilder._generateFields(properties);
    result.should.equal(`
<input type="text" ng-model="name">`);
  });

  it('_generateFields() should return input type number', function() {
    var properties = [
      {
        name: 'age',
        type: 'number',
        value: 23,
        track: null
      }
    ];
    var viewBuilder = new ViewBuilder('template', properties);
    var result = viewBuilder._generateFields(properties);
    result.should.equal(`
<input type="number" ng-model="age">`);
  });

  it('_generateFields() should return input type checkbox', function() {
    var properties = [
      {
        name: 'married',
        type: 'boolean',
        value: false,
        track: null
      }
    ];
    var viewBuilder = new ViewBuilder('template', properties);
    var result = viewBuilder._generateFields(properties);
    result.should.equal(`
<input type="checkbox" ng-model="married"> married`);
  });

  it('_generateFields() should return select', function() {
    var properties = [
      {
        name: 'hobbies',
        type: 'array',
        value: ['football', 'basket', 'music', 'games'],
        track: null
      }
    ];
    var viewBuilder = new ViewBuilder('template', properties);
    var result = viewBuilder._generateFields(properties);
    result.should.equal(`
<select ng-model="selectedhobbies" ng-options="auxhobbies for auxhobbies in hobbies"></select>`);
  });

  it('_generateFields() should return input type checkbox, text, number and select', function() {
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
    var viewBuilder = new ViewBuilder('template', properties);
    var result = viewBuilder._generateFields(properties);
    result.should.equal(`
<input type="checkbox" ng-model="married"> married
<input type="text" ng-model="name">
<input type="number" ng-model="age">
<select ng-model="selectedhobbies" ng-options="auxhobbies for auxhobbies in hobbies"></select>`);
  });
});
