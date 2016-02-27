var ControllerBuilder = require('./../builders/ControllerBuilder.js');

describe('ControllerBuilder', function() {
  describe('_getProperties()', function() {

    it('Should return "" if don´t have properties', function() {
      var properties = [];
      var controller = new ControllerBuilder('controller', properties, []);
      var result = controller._getProperties(properties);
      result.should.equal("");
    });

    it('Should return $scope.name = null', function() {
      var properties = [
        {
          name: 'name',
          value: null,
          type: 'string',
          track: null
        }
      ];
      var controller = new ControllerBuilder('controller', properties, []);
      var result = controller._getProperties(properties);
      result.should.equal(`$scope.name = null;`);
    });

    it('Should return $scope.name = "sergio"', function() {
      var properties = [
        {
          name: 'name',
          value: 'sergio',
          type: 'string',
          track: null
        }
      ];
      var controller = new ControllerBuilder('controller', properties, []);
      var result = controller._getProperties(properties);
      result.should.equal(`$scope.name = 'sergio';`);
    });

    it('Should return $scope.age = 24', function() {
      var properties = [
        {
          name: 'age',
          value: 24,
          type: 'number',
          track: null
        }

      ];
      var controller = new ControllerBuilder('controller', properties, []);
      var result = controller._getProperties(properties);
      result.should.equal(`$scope.age = 24;`);
    });

    it('Should return $scope.married = true', function() {
      var properties = [
        {
          name: 'married',
          value: true,
          type: 'boolean',
          track: null
        }

      ];
      var controller = new ControllerBuilder('controller', properties, []);
      var result = controller._getProperties(properties);
      result.should.equal(`$scope.married = true;`);
    });

    it('Should return $scope.hobbies = ["football", "basket"]', function() {
      var properties = [
        {
          name: 'hobbies',
          value: ['football', 'basket'],
          type: 'array',
          track: null
        }

      ];
      var controller = new ControllerBuilder('controller', properties, []);
      var result = controller._getProperties(properties);
      result.should.equal(`$scope.hobbies = ['football', 'basket'];
    $scope.selectedhobbies = $scope.hobbies[0];`);
    });

    it('Should return $scope.hola $scope.name $scope.age $scope.married $scope.hobbies = ["football", "basket"] $scope.selectedhobbies = $scope.hobbies[0];', function() {
      var properties = [
        {
          name: 'hola',
          value: null,
          type: 'string',
          track: null
        },
        {
          name: 'name',
          value: 'sergio',
          type: 'string',
          track: null
        },
        {
          name: 'age',
          value: 24,
          type: 'number',
          track: null
        },
        {
          name: 'married',
          value: true,
          type: 'boolean',
          track: null
        },
        {
          name: 'hobbies',
          value: ['football', 'basket'],
          type: 'array',
          track: null
        }
      ];
      var controller = new ControllerBuilder('controller', properties, []);
      var result = controller._getProperties(properties);
      result.should.equal(`$scope.hola = null;
    $scope.name = 'sergio';
    $scope.age = 24;
    $scope.married = true;
    $scope.hobbies = ['football', 'basket'];
    $scope.selectedhobbies = $scope.hobbies[0];`);
    });

  });
});
