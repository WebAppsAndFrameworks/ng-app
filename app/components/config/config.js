'use strict';

angular.module('ngApp.config', [
  'ngApp.config.interpolate-filter',
  'ngApp.config.config-directive'
])

.constant('version', '0.2')
.constant('base_url', 'http://pokeapi.co/api/v2');
// we probably don't need the filter or directive for the config module. leaving it in for now for reference