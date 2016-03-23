'use strict';

angular.module('myApp.generations', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/generations', {
    templateUrl: 'generations/generations.html',
    controller: 'GenerationsCtrl'
  });
}])

.controller('GenerationsCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  $scope.name = 'Generations';
  
  $http.get('http://pokeapi.co/api/v2/generation/').success(function(data) {
      $scope.generations = data;
  });
}]);