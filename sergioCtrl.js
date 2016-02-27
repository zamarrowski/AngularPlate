(function() {
  app.controller('SergioCtrl', sergioCtrl);
  sergioCtrl.$inject = ['$scope'];
  function sergioCtrl($scope) {
    $scope.name = 'Sergio';
    $scope.firstName = 'Zamarro';
    $scope.age = 24;
    $scope.married = true;
  }
})();
