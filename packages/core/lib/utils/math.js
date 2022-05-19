'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.abs = abs;
exports.distance = distance;
exports.pSBC = pSBC;
exports.pSBCr = pSBCr;
exports.rgba = rgba;

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

// pSBC - Shade Blend Convert - Version 4.0 - 02/18/2019
// https://github.com/PimpTrizkit/PJs/edit/master/pSBC.js
function pSBCr(d) {
  var i = parseInt,
    m = Math.round;
  var n = d.length,
    x = {};

  if (n > 9) {
    var _d = (d = d.split(',')),
      _d2 = _slicedToArray(_d, 4),
      r = _d2[0],
      g = _d2[1],
      b = _d2[2],
      a = _d2[3];

    n = d.length;
    if (n < 3 || n > 4) return null;
    (x.r = i(r[3] == 'a' ? r.slice(5) : r.slice(4))),
      (x.g = i(g)),
      (x.b = i(b)),
      (x.a = a ? parseFloat(a) : -1);
  } else {
    if (n == 8 || n == 6 || n < 4) return null;
    if (n < 6) d = '#' + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (n > 4 ? d[4] + d[4] : '');
    d = i(d.slice(1), 16);
    if (n == 9 || n == 5)
      (x.r = (d >> 24) & 255),
        (x.g = (d >> 16) & 255),
        (x.b = (d >> 8) & 255),
        (x.a = m((d & 255) / 0.255) / 1000);
    else (x.r = d >> 16), (x.g = (d >> 8) & 255), (x.b = d & 255), (x.a = -1);
  }

  return x;
}

function pSBC(p, c0, c1, l) {
  var r,
    g,
    b,
    P,
    f,
    t,
    h,
    m = Math.round,
    a = typeof c1 == 'string';
  if (
    typeof p != 'number' ||
    p < -1 ||
    p > 1 ||
    typeof c0 != 'string' ||
    (c0[0] != 'r' && c0[0] != '#') ||
    (c1 && !a)
  )
    return null;
  (h = c0.length > 9),
    (h = a ? (c1.length > 9 ? true : c1 == 'c' ? !h : false) : h),
    (f = pSBCr(c0)),
    (P = p < 0),
    (t =
      c1 && c1 != 'c'
        ? pSBCr(c1)
        : P
        ? {
            r: 0,
            g: 0,
            b: 0,
            a: -1,
          }
        : {
            r: 255,
            g: 255,
            b: 255,
            a: -1,
          }),
    (p = P ? p * -1 : p),
    (P = 1 - p);
  if (!f || !t) return null;
  if (l) (r = m(P * f.r + p * t.r)), (g = m(P * f.g + p * t.g)), (b = m(P * f.b + p * t.b));
  else
    (r = m(Math.pow(P * Math.pow(f.r, 2) + p * Math.pow(t.r, 2), 0.5))),
      (g = m(Math.pow(P * Math.pow(f.g, 2) + p * Math.pow(t.g, 2), 0.5))),
      (b = m(Math.pow(P * Math.pow(f.b, 2) + p * Math.pow(t.b, 2), 0.5)));
  (a = f.a),
    (t = t.a),
    (f = a >= 0 || t >= 0),
    (a = f ? (a < 0 ? t : t < 0 ? a : a * P + t * p) : 0);
  if (h)
    return (
      'rgb' + (f ? 'a(' : '(') + r + ',' + g + ',' + b + (f ? ',' + m(a * 1000) / 1000 : '') + ')'
    );
  else
    return (
      '#' +
      (4294967296 + r * 16777216 + g * 65536 + b * 256 + (f ? m(a * 255) : 0))
        .toString(16)
        .slice(1, f ? undefined : -2)
    );
}

function rgba(p, c) {
  var f = pSBCr(c) || {
    r: 0,
    g: 0,
    b: 0,
  };

  if (f.a < 0) {
    return 'rgba('.concat(f.r, ',').concat(f.g, ',').concat(f.b, ',').concat(p, ')');
  }

  return 'rgba('
    .concat(f.r, ',')
    .concat(f.g, ',')
    .concat(f.b, ',')
    .concat(p + f.a, ')');
}

function abs(num, percent) {
  if (+percent) {
    return +percent;
  }

  if (!percent || percent[percent.length - 1] !== '%') {
    return 0;
  }

  percent = percent.substr(0, percent.length - 1);
  return (num * +percent) / 100;
}

function distance(pt1, pt2) {
  var x = pt1.x - pt2.x;
  var y = pt1.y - pt2.y;
  return Math.sqrt(x * x + y * y);
}
