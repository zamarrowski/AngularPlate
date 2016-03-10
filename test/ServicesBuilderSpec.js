var ServiceBuilder = require('./../app/builders/ServiceBuilder.js');
var should = require('should');

describe('ServiceBuilder', function() {
  describe('_getTemplate()', function() {
    it('Should return CRUD template if crudType == 1', function() {
      var config = {
        name: 'wine',
        url: 'http://localhost:8090/api/wine'
      };
      var service = new ServiceBuilder(config.name, config.url, config.crudType);
      var result = service._getTemplate();
      result.should.equal(`(function() {
  app.service('WineServices', wineServices);
  wineServices.$inject = ['$http', '$q'];
  function wineServices($http, $q) {

    this.getWine = function(id) {
      var deferred = $q.defer();
      var url = 'http://localhost:8090/api/wine/' + id;

      $http.get(url)
        .success(deferred.resolve)
        .error(deferred.reject);

      return deferred.promise;
    };

    this.createWine = function(wine) {
      var deferred = $q.defer();
      var url = 'http://localhost:8090/api/wine';

      $http.post(url, wine)
        .success(deferred.resolve)
        .error(deferred.reject);

      return deferred.promise;
    };

    this.updateWine = function(wine) {
      var deferred = $q.defer();
      var url = 'http://localhost:8090/api/wine';

      $http.put(url, wine)
        .success(deferred.resolve)
        .error(deferred.reject);

      return deferred.promise;
    };

    this.deleteWine = function(id) {
      var deferred = $q.defer();
      var url = 'http://localhost:8090/api/wine' + id;

      $http.delete(url)
        .success(deferred.resolve)
        .error(deferred.reject);

      return deferred.promise;
    };
    
 }
})();`);
    });
  });
});
