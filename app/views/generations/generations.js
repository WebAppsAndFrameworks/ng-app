'use strict';

angular.module('ngApp.generations', ['ngRoute', 'ngApp.config'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/generations', {
      templateUrl: 'views/generations/generations.html',
      controller: 'GenerationsCtrl'
    });
}])

.controller('GenerationsCtrl', ['$scope', '$http', 'base_url', function($scope, $http, $base_url) {

  var generationId = undefined;
  var validIdTest = /^\d+$/; // validate the ID string is only digits
  var idRegex = /(\d+)\/$/; // grab the last number in the url string

  var url = $base_url + '/generation';
  $http.get(url).success(function(data) {
      $scope.generations = data;
      for (var i = 0; i < $scope.generations.results.length; i++) {
        var id = idRegex.exec($scope.generations.results[i].url)[1];
        $scope.generations.results[i].generationId = id;
      }
  });
  
  $scope.getGeneration = function getGeneration(id) {
    var idIsValid = validIdTest.test(id);

    if (idIsValid) {
      generationId = id;
      $scope.generationName = 'Generation ' + id;

      var url = $base_url + '/generation/' + id;
      $http.get(url).success(function(data) {
        $scope.species = data;
        
        var species = data.pokemon_species,
            length = species.length;
  
        for (var i = 0; i < length; i++) {
          var id = idRegex.exec(species[i].url)[1];
          species[i].pokemonId = id;
        }
      });
    }
  };
  
  $scope.getPokemon = function getPokemon(id) {
    var idIsValid = validIdTest.test(id);

    if (idIsValid) {
      var url = $base_url + '/pokemon-species/' + id;
  
      $http.get(url).success(function(data) {
        $scope.pokemon = data;
        var imgType = generationId == 6 ? 'x-y' : 'black-white';
        $scope.pokemonImgUrl = 'http://img.pokemondb.net/sprites/' + imgType + '/normal/' + $scope.pokemon.name + '.png'
      });
    }
  };
}]);