'use strict';

describe('ngApp.config module', function() {
  beforeEach(module('ngApp.config'));

  describe('config service', function() {
    it('should return base api url', inject(function(base_url) {
      expect(base_url).toEqual('http://pokeapi.co/api/v2');
    }));
  });
});
