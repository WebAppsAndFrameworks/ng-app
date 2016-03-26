'use strict';

angular.module('ngApp.config.interpolate-filter', [])

.filter('interpolate', ['config', function(base_url) {
  return function(text) {
    return String(text).replace(/\%BASE_URL\%/mg, base_url);
  };
}]);
