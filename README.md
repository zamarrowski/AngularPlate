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
### 4. Complete CRUD (Controller + View + Service):
* Entity mame
* Properties for controller (separated by commas)
* Dependencies (separated by commas)
* Framework style
* API URL

### 4.1 Example:
```
AngularPlate!:
Welcome to Angularplate:
What do you create?
 1. Factory
 2. Controller + View
 3. CRUD Service
 4. Complete CRUD (Controller + View + Service)
 0. Exit:  4
AngularPlate!: Enter entity name:  wine
AngularPlate!: Write properties for your controller separated by # (name:type:value)
:  name:string#age:number
AngularPlate!: Write dependencies for your controller separated by , : ($scope already added)
:
AngularPlate!: Framework style:
 1. None 2. Bootstrap 3. Angular Material:  2
AngularPlate!: API URL (example: http://localhost/api/entity):  http://localhost:8090/api/wine
wineView.html created!
wineService.js created!
wineCtrl.js created!
```
This generate 3 files:
* wineView.html:
```
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
```
* wineServices.js:
```
(function() {
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
})();
```
* wineCtrl.js:
```
(function() {
  app.controller('WineCtrl', wineCtrl);
  wineCtrl.$inject = ['WineServices', '$scope'];
  function wineCtrl(WineServices, $scope) {
    $scope.name = null;
    $scope.age = null;
  }
})();

```
