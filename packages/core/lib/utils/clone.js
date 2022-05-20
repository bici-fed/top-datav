'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.deepClone = deepClone;

var _typeof2 = _interopRequireDefault(require('@babel/runtime/helpers/typeof'));

function deepClone(o) {
  if (Array.isArray(o)) {
    var arr = [];
    o.forEach(function (item) {
      arr.push(deepClone(item));
    });
    return arr;
  } else if ((0, _typeof2.default)(o) === 'object') {
    if (o === null) {
      return null;
    } else if (o.constructor === RegExp) {
      return o;
    }

    var _o = {};

    for (var key in o) {
      _o[key] = deepClone(o[key]);
    }

    return _o;
  }

  return o;
}
