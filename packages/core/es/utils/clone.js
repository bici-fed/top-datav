function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

export function deepClone(o) {
  if (Array.isArray(o)) {
    var arr = [];
    o.forEach(function (item) {
      arr.push(deepClone(item));
    });
    return arr;
  } else if (_typeof(o) === 'object') {
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