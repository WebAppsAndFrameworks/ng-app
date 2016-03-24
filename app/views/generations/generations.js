'use strict';

angular.module('ngApp.generations', ['ngRoute', 'ngApp.config'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/generations', {
      templateUrl: 'views/generations/generations.html',
      controller: 'GenerationsCtrl'
    });
}])

.controller('GenerationsCtrl', ['$scope', '$routeParams', '$http', 'base_url', function($scope, $routeParams, $http, $base_url) {
  $scope.name = 'Generations';

  var url = $base_url + '/generation';

  $http.get(url).success(function(data) {
      $scope.generations = data;
      for (var i = 0; i < $scope.generations.results.length; i++) {
        $scope.generations.results[i].encodedUrl = encodeURIComponent($scope.generations.results[i].url);
      }
  });
}]);