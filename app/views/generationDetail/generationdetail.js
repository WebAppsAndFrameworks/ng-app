'use strict';

angular.module('ngApp.generationDetail', ['ngRoute', 'ngApp.config'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/generationDetail', {
      templateUrl: 'views/generationDetail/generationDetail.html',
      controller: 'GenerationDetailCtrl'
    });
}])

.controller('GenerationDetailCtrl', ['$scope', '$routeParams', '$http', 'base_url', function($scope, $routeParams, $http, $base_url) {
  // Validate that the id param is only digits.
  var validIdTest = /^\d+$/;
  var idIsValid = validIdTest.test($routeParams.id);

  if (idIsValid) {
    var url = $base_url + '/generation/' + $routeParams.id;

    $http.get(url).success(function(data) {
      $scope.species = data;

      var species = data.pokemon_species,
          length = species.length;

      for (var i = 0; i < length; i++) {
        // Get the last number from the string in the url member.
        var id = /(\d+)\/$/.exec(species[i].url)[1];
        species[i].pokemonId = id;
      }
    });
  }
  else {
    $scope.error = 'invalid generation id';
  }
}]);
