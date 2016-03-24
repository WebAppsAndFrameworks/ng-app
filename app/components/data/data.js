'use strict';

angular.module('ngApp').factory('data', function(){
  var data = new Map;

  data.set('baseURL', 'http://pokeapi.co/api/v2/');
  return data;
});
