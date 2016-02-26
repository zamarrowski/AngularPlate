var FactoryBuilder = require('./../builders/FactoryBuilder.js');
var should = require('should');

describe('FactoryBuilder', function() {
  describe('_getProperties()', function() {

    it('Should generate this attributes: "name:null,\\n"', function() {
      var properties = [
        {
          name: 'name',
          value: null
        }
      ];
      var factory = new FactoryBuilder('pruebaFactory', properties);
      var result = factory._getProperties();
      result.should.equal(`name: null,`);
    });

    it('Should generate this attributes: name:"sergio",\\n', function() {
      var properties = [
        {
          name: 'name',
          value: 'sergio',
          type: 'string'
        }
      ];
      var factory = new FactoryBuilder('pruebaFactory', properties);
      var result = factory._getProperties();
      result.should.equal(`name: 'sergio',`);
    });

    it('Should generate this attributes: age:24,\\n', function() {
      var properties = [
        {
          name: 'age',
          value: 24,
          type: 'number'
        }
      ];
      var factory = new FactoryBuilder('pruebaFactory', properties);
      var result = factory._getProperties();
      result.should.equal(`age: 24,`);
    });

    it('Should generate this attributes: married:false,\\n', function() {
      var properties = [
        {
          name: 'married',
          value: false,
          type: 'boolean'
        }
      ];
      var factory = new FactoryBuilder('pruebaFactory', properties);
      var result = factory._getProperties();
      result.should.equal(`married: false,`);
    });

    it('Should generate this attributes: hobbies:["football", "basket"],\\n', function() {
      var properties = [
        {
          name: 'hobbies',
          value: ['football', 'hobbies'],
          type: 'array'
        }
      ];
      var factory = new FactoryBuilder('pruebaFactory', properties);
      var result = factory._getProperties();
      result.should.equal(`hobbies: ['football', 'hobbies'],`);
    });

    it('Should generate this attributes: name:"sergio",\\n firstName:"zamarro",\\n hobbies:["football", "basket"],\\n', function() {
      var properties = [
        {
          name: 'name',
          value: 'sergio',
          type: 'string'
        },
        {
          name: 'firstName',
          value: 'zamarro',
          type: 'string'
        },
        {
          name: 'married',
          value: false,
          type: 'boolean'
        },
        {
          name: 'hobbies',
          value: ['football', 'hobbies'],
          type: 'array'
        }
      ];
      var factory = new FactoryBuilder('pruebaFactory', properties);
      var result = factory._getProperties();
      result.should.equal(`name: 'sergio',
      firstName: 'zamarro',
      married: false,
      hobbies: ['football', 'hobbies'],`);
    });

  });
});
