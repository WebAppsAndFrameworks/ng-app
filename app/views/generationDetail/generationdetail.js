'use strict';

angular.module('ngApp.generationDetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/generationDetail', {
      templateUrl: 'views/generationDetail/generationDetail.html',
      controller: 'GenerationDetailCtrl'
    });
}])

.controller('GenerationDetailCtrl', ['$scope', '$routeParams', '$http', 'data', function($scope, $routeParams, $http, data) {
  $scope.name = 'Generations';

  var url = data.get('baseURL') + 'generation/' + $routeParams.url + '/';

  $http.get(url).success(function(data) {
      $scope.species = data;
  });
}]);;
