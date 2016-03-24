'use strict';

angular.module('ngApp.generations', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/generations', {
      templateUrl: 'views/generations/generations.html',
      controller: 'GenerationsCtrl'
    });
}])

.controller('GenerationsCtrl', ['$scope', '$routeParams', '$http', 'data', function($scope, $routeParams, $http, data) {
  $scope.name = 'Generations';

  var url = data.get('baseURL') + 'generation/';

  $http.get(url).success(function(data) {
      $scope.generations = data;

      for (var i = 0; i < $scope.generations.results.length; i++) {
        var genNum = /(\d+)\/$/.exec($scope.generations.results[i].url)[1];
        $scope.generations.results[i].encodedUrl = genNum;
      }
  });
}]);
