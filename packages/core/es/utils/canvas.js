function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = (typeof Symbol !== 'undefined' && o[Symbol.iterator]) || o['@@iterator'];
  if (!it) {
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === 'number')
    ) {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F,
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    },
  };
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

import { Point } from '../models/point';
export function flatNodes(nodes) {
  var result = {
    nodes: [],
    lines: [],
  };

  var _iterator = _createForOfIteratorHelper(nodes),
    _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var item = _step.value;

      if (item.type) {
        result.lines.push(item);
        continue;
      }

      result.nodes.push(item);

      if (item.children) {
        result.nodes.push.apply(result.nodes, flatNodes(item.children).nodes);
        result.lines.push.apply(result.lines, flatNodes(item.children).lines);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}
export function find(idOrTag, pens) {
  var result = [];
  pens.forEach(function (item) {
    if (item.id === idOrTag || item.tags.indexOf(idOrTag) > -1) {
      result.push(item);
    }

    if (item.children) {
      var children = find(idOrTag, item.children);

      if (children && children.length > 1) {
        result.push.apply(result, children);
      } else if (children) {
        result.push(children);
      }
    }
  });

  if (result.length === 0) {
    return;
  } else if (result.length === 1) {
    return result[0];
  }

  return result;
}
export function del(idOrTag, pens) {
  var deleted = [];

  for (var i = 0; i < pens.length; i++) {
    if (pens[i].id === idOrTag || pens[i].tags.indexOf(idOrTag) > -1) {
      deleted.push(pens[i]);
      pens.splice(i, 1);
      --i;
    } else if (pens[i].children) {
      deleted.push.apply(deleted, del(idOrTag, pens[i].children));
    }
  }

  return deleted;
}
export function getParent(pens, child) {
  var parent;

  var _iterator2 = _createForOfIteratorHelper(pens),
    _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var item = _step2.value;

      if (item.type) {
        continue;
      }

      if (!item.children) {
        continue;
      }

      var _iterator3 = _createForOfIteratorHelper(item.children),
        _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var subItem = _step3.value;

          if (subItem.id === child.id) {
            return item;
          }

          if (subItem.type) {
            continue;
          }

          if (subItem.children) {
            parent = getParent(subItem.children, child);

            if (parent) {
              return parent;
            }
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return parent;
}
export function pointInRect(point, vertices) {
  if (vertices.length < 3) {
    return false;
  }

  var isIn = false;
  var last = vertices[vertices.length - 1];

  var _iterator4 = _createForOfIteratorHelper(vertices),
    _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var item = _step4.value;

      if ((item.y < point.y && last.y >= point.y) || (item.y >= point.y && last.y < point.y)) {
        if (item.x + ((point.y - item.y) * (last.x - item.x)) / (last.y - item.y) > point.x) {
          isIn = !isIn;
        }
      }

      last = item;
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  return isIn;
}
export function pointInLine(point, from, to) {
  var points = [
    new Point(from.x - 8, from.y - 8),
    new Point(to.x - 8, to.y - 8),
    new Point(to.x + 8, to.y + 8),
    new Point(from.x + 8, from.y + 8),
  ];
  return pointInRect(point, points);
}
export function lineLen(from, to) {
  var len = Math.sqrt(Math.pow(Math.abs(from.x - to.x), 2) + Math.pow(Math.abs(from.y - to.y), 2));
  return len | 0;
}
export function curveLen(from, cp1, cp2, to) {
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute(
    'd',
    'M'
      .concat(from.x, ' ')
      .concat(from.y, ' C')
      .concat(cp1.x, ' ')
      .concat(cp1.y, ' ')
      .concat(cp2.x, ' ')
      .concat(cp2.y, ' ')
      .concat(to.x, ' ')
      .concat(to.y),
  );
  return path.getTotalLength() | 0;
}
