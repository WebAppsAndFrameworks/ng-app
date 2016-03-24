'use strict';

angular.module('ngApp.config.config-directive', [])

.directive('appConfig', ['config', function(base_url) {
  return function(scope, elm, attrs) {
    elm.text(base_url);
  };
}]);
