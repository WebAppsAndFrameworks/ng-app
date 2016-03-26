'use strict';

describe('ngApp.config module', function() {
  beforeEach(module('ngApp.config'));

  describe('interpolate filter', function() {
    beforeEach(module(function($provide) {
      $provide.value('config', 'TEST_URL');
    }));

    it('should replace base_url', inject(function(interpolateFilter) {
      expect(interpolateFilter('before %BASE_URL% after')).toEqual('before TEST_URL after');
    }));
  });
});
