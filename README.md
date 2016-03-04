[![Build Status](https://travis-ci.org/zamarrowski/AngularPlate.svg?branch=master)](https://travis-ci.org/zamarrowski/AngularPlate)
# AngularPlate
Scaffolding for AngularJS. Create Controllers, Factories and Views from command line.

## Install:
```
npm install angularplate
```

# Install dependencies
```
npm install
```
# Run:
```
node app.js
```
# Test
```
npm test
```

# How to use:

Now you can create:

### 1. Factories:

 * Factory Name (Required)
 * Attributes: separated by # (name:type:value). Value is optional. Data types allowed: String, Number, Boolean and Array. Example: firstName:string:sergio#age:number:23#hobbies:array:[football,basket]
 * Dependencies: separated by commas. Example: $http,$q

### 1.1 Example:
 ```
 AngularPlate!: Enter a name for your factory:  WineFactory

 AngularPlate!: Write properties for your factory separated by # (name:type:value) :  name:string#price:number

 AngularPlate!: Write dependencies for your factory separated by , :  AnotherService
```
  This generate a .js named WineFactory.js:
```
  (function() {
    app.factory('WineFactory', WineFactory);
    WineFactory.$inject = ['AnotherService'];
    function WineFactory(AnotherService) {
      var WineFactory = {
        name: null,
        price: null,
      };

      return WineFactory;
    }
  })();
 ```

### 2. Controller + View

 * Controller name (Required)
 * Attributes: separated by # (name:type:value). Value is optional. Data types allowed: String, Number, Boolean and Array. Example: firstName:string:sergio#age:number:23#hobbies:array:[football,basket].
 * Dependencies: separated by commas. Example: $http,$q, ($scope already added).
 * Name of view (Required)
### 2.1 Example
```
AngularPlate!: Enter a name for your controller:  WineController

AngularPlate!: Write properties for your controller separated by # (name:type:value) : name:string#price:number

AngularPlate!: Write dependencies for your controller separated by , ($scope already added): AnotherService

AngularPlate!: Name for view: :  WineView
```
This generate a .js and .html:
```
//WineController.js
(function() {
  app.controller('WineController', WineController);
  WineController.$inject = ['AnotherService', '$scope'];
  function WineController(AnotherService, $scope) {
    $scope.name = null;
    $scope.price = null;
  }
})();

//WineView.html
<input type="text" ng-model="name">
<input type="number" ng-model="price">
```

### 3. Services

 * Service name
 * Services url

### 3.1 Example
```
AngularPlate!: Entity name: wine

AngularPlate!: Url:  http://www.mydomain.com/api/wine
```
This generate a .js file:
```
//wineService.js
(function() {
  app.service('WineServices', wineServices);
  wineServices.$inject = ['$http', '$q'];
  function wineServices($http, $q) {

    this.getWine = function(id) {
      var deferred = $q.defer();
      var url = 'http://www.mydomain.com/api/wine/' + id;

      $http.get(url)
        .success(deferred.resolve)
        .error(deferred.reject);

      return deferred.promise;
    };

    this.createWine = function(wine) {
      var deferred = $q.defer();
      var url = 'http://www.mydomain.com/api/wine';

      $http.post(url, wine)
        .success(deferred.resolve)
        .error(deferred.reject);

      return deferred.promise;
    };

    this.updateWine = function(wine) {
      var deferred = $q.defer();
      var url = 'http://www.mydomain.com/api/wine';

      $http.put(url, wine)
        .success(deferred.resolve)
        .error(deferred.reject);

      return deferred.promise;
    };

    this.deleteWine = function(id) {
      var deferred = $q.defer();
      var url = 'http://www.mydomain.com/api/wine' + id;

      $http.delete(url)
        .success(deferred.resolve)
        .error(deferred.reject);

      return deferred.promise;
    };


 }
})();
```
