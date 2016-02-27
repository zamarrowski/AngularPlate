var JavaScriptGenerator = require('./../common/JavaScriptGenerator.js');

describe('JavaScriptGenerator', function() {

  describe('_getProperties()', function() {

    it('Should generate "" if factory don´t have properties', function() {
      var properties = [];
      var result = JavaScriptGenerator.getProperties(properties);
      result.should.equal("");
    });

    it('Should generate this attributes: "name:null,\\n"', function() {
      var properties = [
        {
          name: 'name',
          value: null
        }
      ];
      var result = JavaScriptGenerator.getProperties(properties);
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
      var result = JavaScriptGenerator.getProperties(properties);
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
      var result = JavaScriptGenerator.getProperties(properties);
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
      var result = JavaScriptGenerator.getProperties(properties);
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
      var result = JavaScriptGenerator.getProperties(properties);
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
      var result = JavaScriptGenerator.getProperties(properties);
      result.should.equal(`name: 'sergio',
      firstName: 'zamarro',
      married: false,
      hobbies: ['football', 'hobbies'],`);
    });

  });

  describe('_getQuotedDependencies()', function() {

    it('Should return "$scope, $http"', function() {
      var dependencies = ['$scope', '$http'];
      var result = JavaScriptGenerator.getQuotedDependencies(dependencies);
      result.should.equal("'$scope', '$http'");
    });

    it('Should return "" if factory don´t have dependencies', function() {
      var dependencies = [];
      var result = JavaScriptGenerator.getQuotedDependencies(dependencies);
      result.should.equal("");
    });

  });

  describe('getDependencies()', function() {

    it('Should return $scope, $http', function() {
      var dependencies = ['$scope', '$http'];
      var result = JavaScriptGenerator.getDependencies(dependencies);
      result.should.equal("$scope, $http");
    });

    it('Should return "" if factory don´t have dependencies', function() {
      var dependencies = [];
      var result = JavaScriptGenerator.getDependencies(dependencies);
      result.should.equal("");
    });

  });
});
