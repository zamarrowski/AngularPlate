var FactoryWizard = require('./../wizards/FactoryWizard.js');
var should = require('should');

describe('FactoryWizard', function() {

  describe('_getPropertyValue()', function() {

    it('Should return string if type is string and value "sergio"', function() {
      var result = FactoryWizard._getPropertyValue('string', 'sergio');
      (typeof result).should.equal('string');
    });

    it('Should return number if type is number and value "1"', function() {
      var result = FactoryWizard._getPropertyValue('number', '1');
      (typeof result).should.equal('number');
    });

    it('Should return boolean if type is boolean and value "true"', function() {
      var result = FactoryWizard._getPropertyValue('boolean', 'true');
      (typeof result).should.equal('boolean');
    });

    it('Should return array if type is array and value "[1, 2, 3, 4]"', function() {
      var result = FactoryWizard._getPropertyValue('array', '[1,2,3,4,5]');
      (typeof result).should.equal('object');
      result[0].should.equal('1');
      result[1].should.equal('2');
      result[2].should.equal('3');
      result[3].should.equal('4');
      result[4].should.equal('5');
    });

    it('Should assign null if value is not defined', function() {
      var result = FactoryWizard._getPropertyValue('string', undefined);
      should.equal(result, null);
      result = FactoryWizard._getPropertyValue('number', undefined);
      should.equal(result, null);
      result = FactoryWizard._getPropertyValue('boolean', undefined);
      should.equal(result, null);
      result = FactoryWizard._getPropertyValue('array', undefined);
      should.equal(result, null);
    });

  });

  describe('_getProperties()', function() {
    it('Should return array with this properties {name: null, firstName: null}', function() {
      var propertiesInput = 'name:string#firstName:string';
      var result = FactoryWizard._getProperties(propertiesInput);
      result[0].name.should.equal('name');
      result[1].name.should.equal('firstName');
      should.equal(result[0].value, null);
      should.equal(result[1].value, null);
    });

    it('Should return object with this properties {name: "sergio", firstName: "zamarro"}', function() {
      var propertiesInput = 'name:string:sergio#firstName:string:zamarro';
      var result = FactoryWizard._getProperties(propertiesInput);
      result[0].name.should.equal('name');
      result[1].name.should.equal('firstName');
      should.equal(result[0].value, 'sergio');
      should.equal(result[1].value, 'zamarro');
    });

    it('Should return object with this properties {name: "sergio", firstName: "zamarro", age:24}', function() {
      var propertiesInput = 'name:string:sergio#firstName:string:zamarro#age:number:24';
      var result = FactoryWizard._getProperties(propertiesInput);
      result[0].name.should.equal('name');
      result[1].name.should.equal('firstName');
      result[2].name.should.equal('age');
      should.equal(result[0].value, 'sergio');
      should.equal(result[1].value, 'zamarro');
      should.equal(result[2].value, 24);
    });

    it('Should return object with this properties {name: "sergio", firstName: "zamarro", age:24, married: false}', function() {
      var propertiesInput = 'name:string:sergio#firstName:string:zamarro#age:number:24#married:boolean:false';
      var result = FactoryWizard._getProperties(propertiesInput);
      result[0].name.should.equal('name');
      result[1].name.should.equal('firstName');
      result[2].name.should.equal('age');
      result[3].name.should.equal('married');
      should.equal(result[0].value, 'sergio');
      should.equal(result[1].value, 'zamarro');
      should.equal(result[2].value, 24);
      should.equal(result[3].value, false);
    });

    it('Should return object with this properties {name: "sergio", firstName: "zamarro", hobbies: ["football", "basket"]}', function() {
      var propertiesInput = 'name:string:sergio#firstName:string:zamarro#hobbies:array:[football,basket]';
      var result = FactoryWizard._getProperties(propertiesInput);
      result[0].name.should.equal('name');
      result[1].name.should.equal('firstName');
      result[2].name.should.equal('hobbies');
      should.equal(result[0].value, 'sergio');
      should.equal(result[1].value, 'zamarro');
      should.equal(result[2].value[0], 'football');
      should.equal(result[2].value[1], 'basket');
    });

  });

});
