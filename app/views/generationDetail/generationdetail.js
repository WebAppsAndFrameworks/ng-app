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
  $scope.name = 'Generation Detail';

  // todo: don't pass the full url in the params, just the id and build the url here 
  // from the base_url config constant
  $http.get($routeParams.url).success(function(data) {
      $scope.species = data;
  });
}]);;