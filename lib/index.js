var nodefn = require('when/node');
var _      = require('lodash');
var needle = require('needle');

var archer = needle;

var methodsToWrap = ['head', 'get', 'put', 'post', 'delete', 'request'];
_.each(methodsToWrap, function (method) {
  archer[method] = nodefn.lift(needle[method]);
});

module.exports = archer;

