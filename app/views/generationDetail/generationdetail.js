'use strict';

angular.module('ngApp.generationDetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/generationDetail', {
      templateUrl: 'views/generationDetail/generationDetail.html',
      controller: 'GenerationDetailCtrl'
    });
}])

.controller('GenerationDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  $scope.name = 'Generations';

  console.log($routeParams);
  // todo: validate url!!
  $http.get($routeParams.url).success(function(data) {
      $scope.species = data;
  });
}]);;