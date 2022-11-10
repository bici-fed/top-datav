function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import { Store } from '@top-datav/store-utils';
import { PenType } from './models/pen';
import { Node } from './models/node';
import { Line } from './models/line';
import { Layer } from './layer';
import { s8 } from './utils';
import { find } from './utils/canvas';
export var AnimateLayer = /*#__PURE__*/function (_Layer) {
  _inherits(AnimateLayer, _Layer);

  var _super = _createSuper(AnimateLayer);

  function AnimateLayer() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var TID = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, AnimateLayer);

    _this = _super.call(this, TID);
    _this.options = void 0;
    _this.data = void 0;
    _this.pens = new Map();
    _this.timer = void 0;
    _this.lastNow = 0;
    _this.subscribeUpdate = void 0;
    _this.subscribePlay = void 0;
    _this.options = options;
    _this.data = Store.get(_this.generateStoreKey('topology-data'));
    Store.set(_this.generateStoreKey('LT:AnimateLayer'), _assertThisInitialized(_this));

    if (!_this.options.animateColor) {
      _this.options.animateColor = '#ff6600';
    }

    _this.subscribeUpdate = Store.subscribe(_this.generateStoreKey('LT:updateLines'), function (lines) {
      _this.updateLines(lines);
    });
    _this.subscribePlay = Store.subscribe(_this.generateStoreKey('LT:AnimatePlay'), function (params) {
      if (params.stop) {
        if (params.tag) {
          var pen = find(params.tag, _this.data.pens);

          if (pen && pen.id) {
            if (_this.pens.has(pen.id)) {
              _this.pens.get(pen.id).animateStart = 0;
            }
          } else if (pen) {
            pen.forEach(function (item) {
              if (_this.pens.has(item.id)) {
                _this.pens.get(item.id).animateStart = 0;
              }
            });
          }
        }

        if (params.pen && _this.pens.has(params.pen.id)) {
          _this.pens.get(params.pen.id).animateStart = 0;
        }
      } else {
        if (params.pen) {
          if (_this.pens.has(params.pen.id)) {
            _this.pens.get(params.pen.id).animateStart = Date.now();
          } else {
            if (params.pen.type) {
              _this.pens.set(params.pen.id, _this.getAnimateLine(params.pen));
            } else {
              _this.pens.set(params.pen.id, params.pen);
            }
          }
        }

        if (params.tag) {
          _this.readyPlay(params.tag, false);
        }
      }

      _this.animate();
    });
    return _this;
  }

  _createClass(AnimateLayer, [{
    key: "getAnimateLine",
    value: function getAnimateLine(item) {
      var l = new Line(item);
      l.data = l.id;
      l.id = s8();
      l.setTID(this.TID);
      l.isAnimate = true;
      l.toArrow = '';

      if (l.fromArrow && l.fromArrow.indexOf('line') < 0) {
        l.animateFromSize = l.fromArrowSize + l.lineWidth * 5;
      }

      if (l.toArrow && l.toArrow.indexOf('line') < 0) {
        l.animateToSize = l.toArrowSize + l.lineWidth * 5;
      }

      l.animateStart = item.animateStart;
      l.lineCap = 'round';
      l.fillStyle = '#fff';
      l.strokeStyle = l.animateColor || this.options.animateColor;
      l.length = l.getLen();

      if (!l.fromArrowColor) {
        l.fromArrowColor = l.strokeStyle || Store.get(this.generateStoreKey('LT:color'));
      }

      if (!l.toArrowColor) {
        l.toArrowColor = l.strokeStyle || Store.get(this.generateStoreKey('LT:color'));
      }

      return l;
    }
  }, {
    key: "findLine",
    value: function findLine(pen) {
      var _iterator = _createForOfIteratorHelper(this.data.pens),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;

          if (item.id === pen.data) {
            return item;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "readyPlay",
    value: function readyPlay(tag, auto, pens) {
      var _this2 = this;

      var readyPens = new Map();

      if (!pens) {
        pens = this.data.pens;
      }

      pens.forEach(function (pen) {
        pen.setTID(_this2.TID);

        if (!pen.visible || readyPens.get(pen.id)) {
          return;
        }

        if (auto && pen.animatePlay || tag && pen.tags.indexOf(tag) > -1) {
          if (!pen.animateStart || pen.animateStart < 1) {
            pen.animateStart = Date.now();
          }
        }

        if (pen instanceof Node) {
          if (pen.animateStart > 0) {
            if (!pen.animateReady) {
              pen.initAnimate();
            }

            readyPens.set(pen.id, pen);
          }

          if (pen.children && pen.children.length) {
            _this2.readyPlay(tag, auto, pen.children);
          }
        } else {
          if (pen.animateStart > 0) {
            readyPens.set(pen.id, _this2.getAnimateLine(pen));
          } else if (_this2.pens.has(pen.id)) {
            _this2.pens.get(pen.id).animateStart = 0;
          }
        }
      });
      readyPens.forEach(function (pen) {
        if (pen.type) {
          _this2.pens.set(pen.data, pen);
        } else {
          _this2.pens.set(pen.id, pen);
        }
      });
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this3 = this;

      if (this.timer) {
        cancelAnimationFrame(this.timer);
      }

      this.timer = requestAnimationFrame(function () {
        var now = Date.now();

        if (now - _this3.lastNow < _this3.options.refresh) {
          _this3.animate();

          return;
        }

        _this3.lastNow = now;
        var animated = false;

        _this3.pens.forEach(function (pen) {
          if (!pen.animateStart || pen.animateStart < 1) {
            if (pen.type) {
              _this3.pens.delete(pen.data);

              var line = _this3.findLine(pen);

              if (line) {
                line.animateStart = 0;
                line.animatePos = pen.animatePos;
              }
            } else {
              _this3.pens.delete(pen.id);
            }

            return;
          }

          if (pen.animateStart > now) {
            return;
          }

          if (pen.animateFn) {
            if (typeof pen.animateFn === 'function') {
              pen.animateFn();
            } else if (window[pen.animateFn]) {
              window[pen.animateFn]();
            } else {// pen.render();
            }
          } else {
            pen.animate(now);
          }

          if (pen.animateStart < 1) {
            if (pen.type) {
              _this3.pens.delete(pen.data);
            } else {
              _this3.pens.delete(pen.id);
            }

            if (pen.type === PenType.Line) {
              var _line = _this3.findLine(pen);

              if (_line) {
                _line.animateStart = 0;
                _line.animatePos = pen.animatePos;
              }
            }

            if (pen.nextAnimate) {
              _this3.readyPlay(pen.nextAnimate, false);
            }
          }

          animated = true;
        });

        if (animated) {
          Store.set(_this3.generateStoreKey('LT:render'), true);

          _this3.animate();
        }
      });
    }
  }, {
    key: "updateLines",
    value: function updateLines(lines) {
      this.pens.forEach(function (line, key) {
        if (!(line instanceof Line)) {
          return;
        }

        var _iterator2 = _createForOfIteratorHelper(lines),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;

            if (line.data === item.id) {
              line.from = item.from;
              line.to = item.to;
              line.controlPoints = item.controlPoints;
              line.length = line.getLen();
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      });
    }
  }, {
    key: "render",
    value: function render(ctx) {
      var _this4 = this;

      this.pens.forEach(function (line, key) {
        if (line.visible && line instanceof Line) {
          if (!line.getTID()) {
            line.setTID(_this4.TID);
          }

          line.render(ctx);
        }
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      this.pens.clear();

      if (this.timer) {
        cancelAnimationFrame(this.timer);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.stop();
      this.subscribeUpdate.unsubscribe();
      this.subscribePlay.unsubscribe();
    }
  }]);

  return AnimateLayer;
}(Layer);