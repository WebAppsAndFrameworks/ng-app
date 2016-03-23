'use strict';

angular.module('ngApp.generations', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/generations', {
      templateUrl: 'views/generations/generations.html',
      controller: 'GenerationsCtrl'
    });
}])

.controller('GenerationsCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  $scope.name = 'Generations';
  
  $http.get('http://pokeapi.co/api/v2/generation/').success(function(data) {
      $scope.generations = data;
      
      for (var i = 0; i < $scope.generations.results.length; i++) {
        $scope.generations.results[i].encodedUrl = encodeURIComponent($scope.generations.results[i].url);
      }
  });
}]);