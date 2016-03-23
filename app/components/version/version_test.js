'use strict';

describe('ngApp.version module', function() {
  beforeEach(module('ngApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
