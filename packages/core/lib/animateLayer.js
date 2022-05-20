'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.AnimateLayer = void 0;

var _createForOfIteratorHelper2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createForOfIteratorHelper'),
);

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized'),
);

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _createSuper2 = _interopRequireDefault(require('@babel/runtime/helpers/createSuper'));

var _storeUtils = require('@top-datav/store-utils');

var _pen = require('./models/pen');

var _node = require('./models/node');

var _line2 = require('./models/line');

var _layer = require('./layer');

var _utils = require('./utils');

var _canvas = require('./utils/canvas');

var AnimateLayer = /*#__PURE__*/ (function (_Layer) {
  (0, _inherits2.default)(AnimateLayer, _Layer);

  var _super = (0, _createSuper2.default)(AnimateLayer);

  function AnimateLayer() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var TID = arguments.length > 1 ? arguments[1] : undefined;
    (0, _classCallCheck2.default)(this, AnimateLayer);
    _this = _super.call(this, TID);
    _this.options = void 0;
    _this.data = void 0;
    _this.pens = new Map();
    _this.timer = void 0;
    _this.lastNow = 0;
    _this.subscribeUpdate = void 0;
    _this.subscribePlay = void 0;
    _this.options = options;
    _this.data = _storeUtils.Store.get(_this.generateStoreKey('topology-data'));

    _storeUtils.Store.set(
      _this.generateStoreKey('LT:AnimateLayer'),
      (0, _assertThisInitialized2.default)(_this),
    );

    if (!_this.options.animateColor) {
      _this.options.animateColor = '#ff6600';
    }

    _this.subscribeUpdate = _storeUtils.Store.subscribe(
      _this.generateStoreKey('LT:updateLines'),
      function (lines) {
        _this.updateLines(lines);
      },
    );
    _this.subscribePlay = _storeUtils.Store.subscribe(
      _this.generateStoreKey('LT:AnimatePlay'),
      function (params) {
        if (params.stop) {
          if (params.tag) {
            var pen = (0, _canvas.find)(params.tag, _this.data.pens);

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
      },
    );
    return _this;
  }

  (0, _createClass2.default)(AnimateLayer, [
    {
      key: 'getAnimateLine',
      value: function getAnimateLine(item) {
        var l = new _line2.Line(item);
        l.data = l.id;
        l.id = (0, _utils.s8)();
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
          l.fromArrowColor =
            l.strokeStyle || _storeUtils.Store.get(this.generateStoreKey('LT:color'));
        }

        if (!l.toArrowColor) {
          l.toArrowColor =
            l.strokeStyle || _storeUtils.Store.get(this.generateStoreKey('LT:color'));
        }

        return l;
      },
    },
    {
      key: 'findLine',
      value: function findLine(pen) {
        var _iterator = (0, _createForOfIteratorHelper2.default)(this.data.pens),
          _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
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
      },
    },
    {
      key: 'readyPlay',
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

          if ((auto && pen.animatePlay) || (tag && pen.tags.indexOf(tag) > -1)) {
            if (!pen.animateStart || pen.animateStart < 1) {
              pen.animateStart = Date.now();
            }
          }

          if (pen instanceof _node.Node) {
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
      },
    },
    {
      key: 'animate',
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
              } else {
                // pen.render();
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

              if (pen.type === _pen.PenType.Line) {
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
            _storeUtils.Store.set(_this3.generateStoreKey('LT:render'), true);

            _this3.animate();
          }
        });
      },
    },
    {
      key: 'updateLines',
      value: function updateLines(lines) {
        this.pens.forEach(function (line, key) {
          if (!(line instanceof _line2.Line)) {
            return;
          }

          var _iterator2 = (0, _createForOfIteratorHelper2.default)(lines),
            _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
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
      },
    },
    {
      key: 'render',
      value: function render(ctx) {
        var _this4 = this;

        this.pens.forEach(function (line, key) {
          if (line.visible && line instanceof _line2.Line) {
            if (!line.getTID()) {
              line.setTID(_this4.TID);
            }

            line.render(ctx);
          }
        });
      },
    },
    {
      key: 'stop',
      value: function stop() {
        this.pens.clear();

        if (this.timer) {
          cancelAnimationFrame(this.timer);
        }
      },
    },
    {
      key: 'destroy',
      value: function destroy() {
        this.stop();
        this.subscribeUpdate.unsubscribe();
        this.subscribePlay.unsubscribe();
      },
    },
  ]);
  return AnimateLayer;
})(_layer.Layer);

exports.AnimateLayer = AnimateLayer;
