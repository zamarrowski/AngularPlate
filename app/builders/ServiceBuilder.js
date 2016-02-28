'use strict';
let writer = require('./../common/Writer.js');
let JavaScriptGenerator = require('./../common/JavaScriptGenerator.js');

class ServiceBuilder {
  constructor(name, url, crudType) {
    this.name = name;
    this.url = url;
  }

  createTemplate() {
    writer.writeTemplate(`${this.name}Service.js`, this._getTemplate());
  }

  _getTemplate() {
    let template = `(function() {
  app.factory('${JavaScriptGenerator.getFactorPascalCamelCaseName(this.name)}Services', ${this.name}Services);
  ${this.name}Services.$inject = ['$http', '$q'];
  function ${this.name}Services($http, $q) {
    var self = {};

    self.get${JavaScriptGenerator.getFactorPascalCamelCaseName(this.name)} = function(id) {
      var deferred = $q.defer();
      var url = '${this.url}/' + id;

      $http.get(url)
        .success(deferred.resolve)
        .error(deferred.reject);

      return deferred.promise;
    };

    self.create${JavaScriptGenerator.getFactorPascalCamelCaseName(this.name)} = function(${this.name}) {
      var deferred = $q.defer();
      var url = '${this.url}';

      $http.post(url, ${this.name})
        .success(deferred.resolve)
        .error(deferred.reject);

      return deferred.promise;
    };

    self.update${JavaScriptGenerator.getFactorPascalCamelCaseName(this.name)} = function(${this.name}) {
      var deferred = $q.defer();
      var url = '${this.url}';

      $http.put(url, ${this.name})
        .success(deferred.resolve)
        .error(deferred.reject);

      return deferred.promise;
    };

    self.delete${JavaScriptGenerator.getFactorPascalCamelCaseName(this.name)} = function(id) {
      var deferred = $q.defer();
      var url = '${this.url}' + id;

      $http.delete(url)
        .success(deferred.resolve)
        .error(deferred.reject);

      return deferred.promise;
    };

    return self;
 }
})();`;

    return template;
  }


}

module.exports = ServiceBuilder;
