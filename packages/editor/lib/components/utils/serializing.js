'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.reviver = exports.replacer = void 0;

var reviver = function reviver(key, value) {
  if (typeof value === 'string' && value.indexOf('function') !== -1) {
    var functionTemplate = '('.concat(value, ')');
    return eval(functionTemplate);
  }

  return value;
};

exports.reviver = reviver;

var replacer = function replacer(key, value) {
  // if we get a function, give us the code for that function
  if (typeof value === 'function') {
    return value.toString();
  }

  return value;
};

exports.replacer = replacer;
