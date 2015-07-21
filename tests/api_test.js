var assert = require('assert');
var archer = require('../');


describe.skip('Api', function () {

  it('should return a promise for all methods', function () {

    assert(_.isFunction(archer.get))

  });

});