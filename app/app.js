'use strict';

// Declare app level module which depends on views, and components
angular.module('ngApp', [
  'ngRoute',
  'ngApp.generations',
  'ngApp.generationDetail',
  'ngApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/generations'});
}]);
