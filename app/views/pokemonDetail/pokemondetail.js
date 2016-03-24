'use strict';

angular.module('ngApp.pokemonDetail', ['ngRoute', 'ngApp.config'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/pokemonDetail', {
      templateUrl: 'views/pokemonDetail/pokemonDetail.html',
      controller: 'PokemonDetailCtrl'
    });
}])

.controller('PokemonDetailCtrl', ['$scope', '$routeParams', '$http', 'base_url', function($scope, $routeParams, $http, $base_url) {
  // Validate that the id param is only digits.
  var validIdTest = /^\d+$/;
  var idIsValid = validIdTest.test($routeParams.id);

  if (idIsValid) {
    var url = $base_url + '/pokemon-species/' + $routeParams.id;

    $http.get(url).success(function(data) {
      $scope.pokemon = data;
    });
  }
  else {
    $scope.error = 'invalid pokemon-species id';
  }
}]);
