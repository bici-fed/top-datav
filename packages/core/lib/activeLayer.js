'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.ActiveLayer = void 0;

var _storeUtils = require('@top-datav/store-utils');

var _pen = require('./models/pen');

var _node = require('./models/node');

var _line = require('./models/line');

var _rect = require('./models/rect');

var _point = require('./models/point');

var _status = require('./models/status');

var _middles = require('./middles');

var _curve = require('./middles/lines/curve');

var _layer = require('./layer');

var _utils = require('./utils');

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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', { writable: false });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  Object.defineProperty(subClass, 'prototype', { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError('Derived constructors may only return object or undefined');
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

var ActiveLayer = /*#__PURE__*/ (function (_Layer) {
  _inherits(ActiveLayer, _Layer);

  var _super = _createSuper(ActiveLayer);

  // 备份初始位置，方便移动事件处理
  // nodes移动时，停靠点的参考位置
  function ActiveLayer() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var TID = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, ActiveLayer);

    _this = _super.call(this, TID);
    _this.options = void 0;
    _this.data = void 0;
    _this.rotateCPs = [];
    _this.sizeCPs = [];
    _this.rect = void 0;
    _this.pens = [];
    _this.rotate = 0;
    _this.initialSizeCPs = [];
    _this.nodeRects = [];
    _this.childrenRects = {};
    _this.childrenRotate = {};
    _this.dockWatchers = [];
    _this.topology = void 0;
    _this.rotating = false;
    _this.options = options;
    _this.data = _storeUtils.Store.get(_this.generateStoreKey('topology-data'));

    _storeUtils.Store.set(_this.generateStoreKey('LT:ActiveLayer'), _assertThisInitialized(_this));

    return _this;
  }

  _createClass(ActiveLayer, [
    {
      key: 'calcControlPoints',
      value: function calcControlPoints() {
        if (this.pens.length === 1 && this.pens[0] instanceof _node.Node) {
          this.rect = this.pens[0].rect;
          this.sizeCPs = this.pens[0].rect.toPoints();
          this.rotateCPs = [
            new _point.Point(
              this.pens[0].rect.x + this.pens[0].rect.width / 2,
              this.pens[0].rect.y - 35,
            ),
            new _point.Point(
              this.pens[0].rect.x + this.pens[0].rect.width / 2,
              this.pens[0].rect.y,
            ),
          ];

          if (this.rotate || this.pens[0].rotate) {
            var _iterator = _createForOfIteratorHelper(this.sizeCPs),
              _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var pt = _step.value;

                if (this.pens[0].rotate) {
                  pt.rotate(this.pens[0].rotate, this.pens[0].rect.center);
                }

                if (this.rotate) {
                  pt.rotate(this.rotate, this.rect.center);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var _iterator2 = _createForOfIteratorHelper(this.rotateCPs),
              _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var _pt = _step2.value;

                if (this.pens[0].rotate) {
                  _pt.rotate(this.pens[0].rotate, this.pens[0].rect.center);
                }

                if (this.rotate) {
                  _pt.rotate(this.rotate, this.rect.center);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }

          if (this.options.hideRotateCP || this.pens[0].hideRotateCP) {
            this.rotateCPs = [new _point.Point(-1000, -1000), new _point.Point(-1000, -1000)];
          }

          return;
        }

        var _getBboxOfPoints = (0, _utils.getBboxOfPoints)(this.getPoints()),
          x1 = _getBboxOfPoints.x1,
          y1 = _getBboxOfPoints.y1,
          x2 = _getBboxOfPoints.x2,
          y2 = _getBboxOfPoints.y2;

        this.rect = new _rect.Rect(x1, y1, x2 - x1, y2 - y1);
        this.sizeCPs = [
          new _point.Point(x1, y1),
          new _point.Point(x2, y1),
          new _point.Point(x2, y2),
          new _point.Point(x1, y2),
        ];
        this.rotateCPs = [
          new _point.Point(x1 + (x2 - x1) / 2, y1 - 35),
          new _point.Point(x1 + (x2 - x1) / 2, y1),
        ];

        if (this.options.hideRotateCP) {
          this.rotateCPs = [new _point.Point(-1000, -1000), new _point.Point(-1000, -1000)];
        }
      },
    },
    {
      key: 'locked',
      value: function locked() {
        var _iterator3 = _createForOfIteratorHelper(this.pens),
          _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var item = _step3.value;

            if (!item.locked) {
              return false;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        return true;
      },
    },
    {
      key: 'getPoints',
      value: function getPoints() {
        var points = [];

        var _iterator4 = _createForOfIteratorHelper(this.pens),
          _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var item = _step4.value;

            if (item.type === _pen.PenType.Node) {
              var pts = item.rect.toPoints();

              if (item.rotate) {
                var _iterator5 = _createForOfIteratorHelper(pts),
                  _step5;

                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                    var pt = _step5.value;
                    pt.rotate(item.rotate, item.rect.center);
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
              }

              points.push.apply(points, pts);
            } else if (item instanceof _line.Line) {
              points.push(item.from);
              points.push(item.to);

              if (item.name === 'curve') {
                for (var i = 0.01; i < 1; i += 0.02) {
                  points.push(
                    (0, _curve.getBezierPoint)(
                      i,
                      item.from,
                      item.controlPoints[0],
                      item.controlPoints[1],
                      item.to,
                    ),
                  );
                }
              }
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        return points;
      },
    },
    {
      key: 'clear',
      value: function clear() {
        this.pens = [];
        this.sizeCPs = [];
        this.rotateCPs = [];

        _storeUtils.Store.set(this.generateStoreKey('LT:activeNode'), null);
      }, // 即将缩放选中的nodes，备份nodes最初大小，方便缩放比例计算
    },
    {
      key: 'saveNodeRects',
      value: function saveNodeRects() {
        this.nodeRects = [];
        this.childrenRects = {};

        var _iterator6 = _createForOfIteratorHelper(this.pens),
          _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            var item = _step6.value;

            if (item.type) {
              this.nodeRects.push(
                new _rect.Rect(item.from.x, item.from.y, item.rect.width, item.rect.height),
              );
            } else {
              this.nodeRects.push(
                new _rect.Rect(item.rect.x, item.rect.y, item.rect.width, item.rect.height),
              );
            }

            this.saveChildrenRects(item);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }

        this.initialSizeCPs = [];

        var _iterator7 = _createForOfIteratorHelper(this.sizeCPs),
          _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
            var _item = _step7.value;
            this.initialSizeCPs.push(_item.clone());
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }

        this.getDockWatchers();
      },
    },
    {
      key: 'saveChildrenRects',
      value: function saveChildrenRects(node) {
        if (node.type || !node.children) {
          return;
        }

        var _iterator8 = _createForOfIteratorHelper(node.children),
          _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
            var item = _step8.value;
            this.childrenRects[item.id] = new _rect.Rect(
              item.rect.x,
              item.rect.y,
              item.rect.width,
              item.rect.height,
            );
            this.childrenRotate[item.id] = item.rotate;
            this.saveChildrenRects(item);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }, // pt1 - the point of mouse down.
      // pt2 - the point of mouse move.
    },
    {
      key: 'resize',
      value: function resize(type, pt1, pt2) {
        var p1 = new _point.Point(pt1.x, pt1.y);
        var p2 = new _point.Point(pt2.x, pt2.y);

        if (this.pens.length === 1 && this.pens[0].rotate % 360) {
          p1.rotate(-this.pens[0].rotate, this.nodeRects[0].center);
          p2.rotate(-this.pens[0].rotate, this.nodeRects[0].center);
        }

        var offsetX = p2.x - p1.x;
        var offsetY = p2.y - p1.y;

        if (this.options.onlySizeX) {
          offsetY = 0;
        }

        if (this.options.onlySizeY) {
          offsetX = 0;
        }

        var lines = [];

        switch (type) {
          case 0:
            offsetX = -offsetX;
            offsetY = -offsetY;
            break;

          case 1:
            offsetY = -offsetY;
            break;

          case 3:
            offsetX = -offsetX;
            break;
        }

        var i = 0;

        var _iterator9 = _createForOfIteratorHelper(this.pens),
          _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
            var item = _step9.value;

            if (item.locked) {
              continue;
            }

            switch (item.type) {
              case _pen.PenType.Line:
                break;

              default:
                if (!item.onlySizeX) {
                  item.rect.width = this.nodeRects[i].width + offsetX;
                }

                if (!item.onlySizeY) {
                  item.rect.height = this.nodeRects[i].height + offsetY;
                }

                if (item.rect.width < 10) {
                  item.rect.width = 10;
                }

                if (item.rect.height < 10) {
                  item.rect.height = 10;
                }

                switch (type) {
                  case 0:
                    item.rect.x = item.rect.ex - item.rect.width;
                    item.rect.y = item.rect.ey - item.rect.height;
                    break;

                  case 1:
                    item.rect.ex = item.rect.x + item.rect.width;
                    item.rect.y = item.rect.ey - item.rect.height;
                    break;

                  case 2:
                    item.rect.ex = item.rect.x + item.rect.width;
                    item.rect.ey = item.rect.y + item.rect.height;
                    break;

                  case 3:
                    item.rect.x = item.rect.ex - item.rect.width;
                    item.rect.ey = item.rect.y + item.rect.height;
                    break;
                }

                item.rect.calcCenter();
                item.init();
                item.calcChildrenRect();
                break;
            }

            ++i;
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }

        this.updateLines();
      },
    },
    {
      key: 'move',
      value: function move(x, y) {
        if (this.nodeRects.length !== this.pens.length) {
          return;
        }

        var i = 0;

        var _iterator10 = _createForOfIteratorHelper(this.pens),
          _step10;

        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
            var item = _step10.value;

            if (item.locked) {
              continue;
            }

            if (item instanceof _node.Node) {
              var offsetX = this.nodeRects[i].x + x - item.rect.x;
              var offsetY = this.nodeRects[i].y + y - item.rect.y;
              item.translate(offsetX, offsetY);
              var lines = this.getLinesOfNode(item);

              var _iterator11 = _createForOfIteratorHelper(lines),
                _step11;

              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
                  var line = _step11.value;
                  line.translate(offsetX, offsetY);
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }

              item.calcChildrenRect();

              if (item.parentId && !item.locked) {
                var parent = void 0;

                var _iterator12 = _createForOfIteratorHelper(this.data.pens),
                  _step12;

                try {
                  for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
                    var n = _step12.value;

                    if (n.id === item.parentId) {
                      parent = n;
                      item.calcRectInParent(parent);
                      break;
                    }
                  }
                } catch (err) {
                  _iterator12.e(err);
                } finally {
                  _iterator12.f();
                }
              }
            }

            if (item instanceof _line.Line) {
              var _offsetX = this.nodeRects[i].x + x - item.from.x;

              var _offsetY = this.nodeRects[i].y + y - item.from.y;

              item.translate(_offsetX, _offsetY);
            }

            ++i;
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }

        this.updateLines();
        this.topology.dispatch('move', this.pens);
      },
    },
    {
      key: 'getLinesOfNode',
      value: function getLinesOfNode(node) {
        var result = [];
        var nodesLines = (0, _utils.flatNodes)([node]);

        var _iterator13 = _createForOfIteratorHelper(this.data.pens),
          _step13;

        try {
          for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
            var pen = _step13.value;

            if (!(pen instanceof _line.Line)) {
              continue;
            }

            var line = pen;
            var fromIn = false;
            var toIn = false;

            var _iterator14 = _createForOfIteratorHelper(nodesLines.nodes),
              _step14;

            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done; ) {
                var item = _step14.value;

                if (line.from.id === item.id) {
                  fromIn = true;
                }

                if (line.to.id === item.id) {
                  toIn = true;
                }
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }

            if (fromIn && toIn) {
              result.push(line);
            }
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }

        return result;
      },
    },
    {
      key: 'updateLines',
      value: function updateLines(pens) {
        if (!pens) {
          pens = this.pens;
        }

        var nodesLines = (0, _utils.flatNodes)(pens);
        var allLines = (0, _utils.flatNodes)(this.data.pens);
        var lines = [];
        var allNodes = (0, _utils.flatNodes)(this.data.pens).nodes;

        var _iterator15 = _createForOfIteratorHelper(allLines.lines),
          _step15;

        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done; ) {
            var line = _step15.value;
            var nodes = nodesLines.nodes;

            if (this.options.autoAnchor) {
              nodes = allNodes;
            }

            var _iterator16 = _createForOfIteratorHelper(nodes),
              _step16;

            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done; ) {
                var item = _step16.value;
                var cnt = 0;

                if (line.from.id === item.id) {
                  if (line.from.autoAnchor) {
                    var autoAnchor = item.nearestAnchor(line.to);

                    if (autoAnchor.index > -1) {
                      line.from.anchorIndex = autoAnchor.index;
                      line.from.direction = autoAnchor.direction;
                    }
                  }

                  if (line.from.anchorIndex >= 0) {
                    line.from.x = item.rotatedAnchors[line.from.anchorIndex].x;
                    line.from.y = item.rotatedAnchors[line.from.anchorIndex].y;
                    ++cnt;
                  }
                }

                if (line.to.id === item.id) {
                  if (line.to.autoAnchor) {
                    var _autoAnchor = item.nearestAnchor(line.from);

                    if (_autoAnchor.index > -1) {
                      line.to.anchorIndex = _autoAnchor.index;
                      line.to.direction = _autoAnchor.direction;
                    }
                  }

                  if (line.to.anchorIndex >= 0) {
                    line.to.x = item.rotatedAnchors[line.to.anchorIndex].x;
                    line.to.y = item.rotatedAnchors[line.to.anchorIndex].y;
                    ++cnt;
                  }
                }

                if (cnt && !this.data.manualCps) {
                  line.calcControlPoints();
                }

                line.textRect = null;

                _storeUtils.Store.set(this.generateStoreKey('pts-') + line.id, null);

                lines.push(line);
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }

        _storeUtils.Store.set(this.generateStoreKey('LT:updateLines'), lines);
      },
    },
    {
      key: 'offsetRotate',
      value: function offsetRotate(angle) {
        this.rotating = true;
        var i = 0;

        var _iterator17 = _createForOfIteratorHelper(this.pens),
          _step17;

        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done; ) {
            var item = _step17.value;

            if (!(item instanceof _node.Node)) {
              continue;
            }

            var center = this.nodeRects[i].center.clone(); // 初始的矩形的坐标
            // const startPoint = new Point(this.nodeRects[i].x,this.nodeRects[i].y)
            // const endPoint = new Point(this.nodeRects[i].ex,this.nodeRects[i].ey)
            //
            // console.log(startPoint)
            // console.log(endPoint)

            if (this.pens.length > 1) {
              center.rotate(angle, this.rect.center);
            }

            item.rect.x = center.x - item.rect.width / 2;
            item.rect.y = center.y - item.rect.height / 2;
            item.rect.ex = item.rect.x + item.rect.width;
            item.rect.ey = item.rect.y + item.rect.height;
            item.rect.calcCenter();
            item.init();
            item.offsetRotate = angle;
            item.calcRotateAnchors(item.rotate + item.offsetRotate);
            this.rotateChildren(item); // console.log("center",center)

            ++i;
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }

        this.rotate = angle;
        this.topology.dispatch('rotated', this.pens);
      },
    },
    {
      key: 'rotateChildren',
      value: function rotateChildren(node) {
        if (node.type !== _pen.PenType.Node || !node.children) {
          return;
        }

        var _iterator18 = _createForOfIteratorHelper(node.children),
          _step18;

        try {
          for (_iterator18.s(); !(_step18 = _iterator18.n()).done; ) {
            var item = _step18.value;

            if (item.type !== _pen.PenType.Node) {
              continue;
            }

            var oldCenter = this.childrenRects[item.id].center.clone();
            var newCenter = this.childrenRects[item.id].center
              .clone()
              .rotate(this.rotate, this.rect.center);
            var rect = this.childrenRects[item.id].clone();
            rect.translate(newCenter.x - oldCenter.x, newCenter.y - oldCenter.y);
            item.rect = rect;
            item.rotate = this.childrenRotate[item.id] + this.rotate;
            item.init();
            this.rotateChildren(item);
          }
        } catch (err) {
          _iterator18.e(err);
        } finally {
          _iterator18.f();
        }
      },
    },
    {
      key: 'updateRotate',
      value: function updateRotate() {
        var _iterator19 = _createForOfIteratorHelper(this.pens),
          _step19;

        try {
          for (_iterator19.s(); !(_step19 = _iterator19.n()).done; ) {
            var item = _step19.value;
            item.rotate += item.offsetRotate;

            if (item.type === _pen.PenType.Node && item.rectInParent) {
              item.rectInParent.rotate += item.offsetRotate;
            }

            item.offsetRotate = 0;
          }
        } catch (err) {
          _iterator19.e(err);
        } finally {
          _iterator19.f();
        }

        this.rotate = 0;
        this.rotating = false;
      },
    },
    {
      key: 'add',
      value: function add(pen) {
        if (this.has(pen)) {
          return;
        }

        this.pens.push(pen);

        if (pen instanceof _node.Node) {
          _storeUtils.Store.set(this.generateStoreKey('LT:activeNode'), pen);
        }
      },
    },
    {
      key: 'setPens',
      value: function setPens(pens) {
        this.pens = pens;

        if (this.pens.length === 1 && this.pens[0] instanceof _node.Node) {
          _storeUtils.Store.set(this.generateStoreKey('LT:activeNode'), this.pens[0]);
        }
      },
    },
    {
      key: 'has',
      value: function has(pen) {
        var _iterator20 = _createForOfIteratorHelper(this.pens),
          _step20;

        try {
          for (_iterator20.s(); !(_step20 = _iterator20.n()).done; ) {
            var item = _step20.value;

            if (item.id === pen.id) {
              return true;
            }
          }
        } catch (err) {
          _iterator20.e(err);
        } finally {
          _iterator20.f();
        }
      },
    },
    {
      key: 'hasInAll',
      value: function hasInAll(pen, pens) {
        if (!pens) {
          pens = this.pens;
        }

        var _iterator21 = _createForOfIteratorHelper(pens),
          _step21;

        try {
          for (_iterator21.s(); !(_step21 = _iterator21.n()).done; ) {
            var item = _step21.value;

            if (item.id === pen.id) {
              return true;
            }

            if (item.children) {
              var has = this.hasInAll(pen, item.children);

              if (has) {
                return true;
              }
            }
          }
        } catch (err) {
          _iterator21.e(err);
        } finally {
          _iterator21.f();
        }
      },
    },
    {
      key: 'render',
      value: function render(ctx) {
        var _this2 = this;

        if (
          this.data.locked > _status.Lock.Readonly ||
          this.options.activeColor === 'transparent'
        ) {
          return;
        }

        if (!this.pens.length) {
          return;
        }

        this.pens.forEach(function (pen) {
          if (!pen.getTID()) {
            pen.setTID(_this2.TID);
          }
        });

        if (this.pens.length === 1 || !this.rotating) {
          this.calcControlPoints();
        }

        ctx.save();
        ctx.strokeStyle = this.options.activeColor;
        ctx.fillStyle = '#fff';
        ctx.lineWidth = 1;
        var TID = this.TID;

        var _iterator22 = _createForOfIteratorHelper(this.pens),
          _step22;

        try {
          for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
            var _item2 = _step22.value;

            if (_item2 instanceof _node.Node) {
              var tmp = new _node.Node(_item2, true);
              tmp.setTID(TID);
              tmp.data = null; // tmp.data = item.data;源码是这样，出现echarts不更新的问题，并且会不断加div

              tmp.fillStyle = null;
              tmp.bkType = 0;
              tmp.icon = '';
              tmp.image = '';
              tmp.text = '';

              if (tmp.strokeStyle !== 'transparent') {
                tmp.strokeStyle = '#ffffff';
                tmp.lineWidth += 2;
                tmp.render(ctx);
                tmp.strokeStyle = this.options.activeColor;
                tmp.lineWidth -= 2;
              }

              tmp.render(ctx);
            }

            if (_item2 instanceof _line.Line) {
              var _tmp = new _line.Line(_item2);

              _tmp.setTID(TID);

              if (_tmp.lineWidth < 3) {
                var bk = new _line.Line(_item2);
                bk.setTID(TID);
                bk.strokeStyle = '#ffffff';
                bk.render(ctx);
              }

              _tmp.strokeStyle = this.options.activeColor;
              _tmp.fromArrowColor = this.options.activeColor;
              _tmp.toArrowColor = this.options.activeColor;

              _tmp.render(ctx);

              if (!this.data.locked && !_item2.locked) {
                _middles.drawLineFns[_item2.name].drawControlPointsFn(ctx, _item2);
              }
            }
          }
        } catch (err) {
          _iterator22.e(err);
        } finally {
          _iterator22.f();
        }

        if (this.pens.length === 1 && this.pens[0].type === _pen.PenType.Line) {
          return;
        } // This is diffence between single node and more.

        if (this.rotate && this.pens.length > 1) {
          ctx.translate(this.rect.center.x, this.rect.center.y);
          ctx.rotate((this.rotate * Math.PI) / 180);
          ctx.translate(-this.rect.center.x, -this.rect.center.y);
        }

        if (this.data.locked || this.locked()) {
          ctx.restore();
          return;
        } // Occupied territory.

        ctx.save();
        ctx.globalAlpha = 0.3;
        ctx.translate(0.5, 0.5);
        ctx.beginPath();
        ctx.moveTo(this.sizeCPs[0].x, this.sizeCPs[0].y);
        ctx.lineTo(this.sizeCPs[1].x, this.sizeCPs[1].y);
        ctx.lineTo(this.sizeCPs[2].x, this.sizeCPs[2].y);
        ctx.lineTo(this.sizeCPs[3].x, this.sizeCPs[3].y);
        ctx.closePath();
        ctx.stroke();
        ctx.restore(); // Draw rotate control point.

        ctx.beginPath();
        ctx.moveTo(this.rotateCPs[0].x, this.rotateCPs[0].y);
        ctx.lineTo(this.rotateCPs[1].x, this.rotateCPs[1].y);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.rotateCPs[0].x, this.rotateCPs[0].y, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke(); // Draw size control points.

        if (!this.options.hideSizeCP && (this.pens.length > 1 || !this.pens[0].hideSizeCP)) {
          ctx.lineWidth = 1;

          var _iterator23 = _createForOfIteratorHelper(this.sizeCPs),
            _step23;

          try {
            for (_iterator23.s(); !(_step23 = _iterator23.n()).done; ) {
              var item = _step23.value;
              ctx.save();
              ctx.beginPath();

              if (this.pens.length === 1 && (this.pens[0].rotate || this.rotate)) {
                ctx.translate(item.x, item.y);
                ctx.rotate(((this.pens[0].rotate + this.rotate) * Math.PI) / 180);
                ctx.translate(-item.x, -item.y);
              }

              ctx.fillRect(item.x - 4.5, item.y - 4.5, 8, 8);
              ctx.strokeRect(item.x - 5.5, item.y - 5.5, 10, 10);
              ctx.restore();
            }
          } catch (err) {
            _iterator23.e(err);
          } finally {
            _iterator23.f();
          }
        }

        ctx.restore();
      },
    },
    {
      key: 'getDockWatchers',
      value: function getDockWatchers() {
        if (this.pens.length === 1) {
          this.dockWatchers = this.nodeRects[0].toPoints();
          this.dockWatchers.unshift(this.nodeRects[0].center);
          return;
        }

        if (!this.rect) {
          return;
        }

        this.dockWatchers = this.rect.toPoints();
        this.dockWatchers.unshift(this.rect.center);
      },
    },
  ]);

  return ActiveLayer;
})(_layer.Layer);

exports.ActiveLayer = ActiveLayer;
