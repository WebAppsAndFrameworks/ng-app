'use strict';

angular.module('ngApp.version', [
  'ngApp.version.interpolate-filter',
  'ngApp.version.version-directive'
])

.value('version', '0.1');
