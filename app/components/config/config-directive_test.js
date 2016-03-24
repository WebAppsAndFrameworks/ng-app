'use strict';

describe('ngApp.config module', function() {
  beforeEach(module('ngApp.config'));

  describe('app-config directive', function() {
    it('should print base api url', function() {
      module(function($provide) {
        $provide.value('config', 'TEST_URL');
      });
      inject(function($compile, $rootScope) {
        var element = $compile('<span app-config></span>')($rootScope);
        expect(element.text()).toEqual('TEST_URL');
      });
    });
  });
});
