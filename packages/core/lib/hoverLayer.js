'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.HoverLayer = void 0;

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

var _point = require('./models/point');

var _node = require('./models/node');

var _pen = require('./models/pen');

var _storeUtils = require('@top-datav/store-utils');

var _status = require('./models/status');

var _layer = require('./layer');

var _math = require('./utils/math');

var HoverLayer = /*#__PURE__*/ (function (_Layer) {
  (0, _inherits2.default)(HoverLayer, _Layer);

  var _super = (0, _createSuper2.default)(HoverLayer);

  // for move line.
  // The dock of to point of line.
  function HoverLayer() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var TID = arguments.length > 1 ? arguments[1] : undefined;
    (0, _classCallCheck2.default)(this, HoverLayer);
    _this = _super.call(this, TID);
    _this.options = void 0;
    _this.data = void 0;
    _this.line = void 0;
    _this.initLine = void 0;
    _this.node = void 0;
    _this.hoverLineCP = void 0;
    _this.lasthoverLineCP = void 0;
    _this.dockAnchor = void 0;
    _this.hoverAnchorIndex = -1;
    _this.dockLineX = 0;
    _this.dockLineY = 0;
    _this.root = void 0;
    _this.dragRect = void 0;
    _this.options = options;
    _this.data = _storeUtils.Store.get(_this.generateStoreKey('topology-data'));

    _storeUtils.Store.set(
      _this.generateStoreKey('LT:HoverLayer'),
      (0, _assertThisInitialized2.default)(_this),
    );

    return _this;
  }

  (0, _createClass2.default)(HoverLayer, [
    {
      key: 'lineTo',
      value: function lineTo(to) {
        var toArrow =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'triangleSolid';

        if (!this.line || this.line.locked) {
          return;
        }

        this.line.setTo(to, toArrow);

        if (this.line.from.id || this.line.to.id) {
          this.line.calcControlPoints();
        }

        _storeUtils.Store.set(this.generateStoreKey('pts-') + this.line.id, null);

        _storeUtils.Store.set(this.generateStoreKey('LT:updateLines'), [this.line]);
      },
    },
    {
      key: 'lineFrom',
      value: function lineFrom(from) {
        if (this.line.locked) {
          return;
        }

        this.line.setFrom(from, this.line.fromArrow);

        if (this.line.from.id || this.line.to.id) {
          this.line.calcControlPoints();
        }

        _storeUtils.Store.set(this.generateStoreKey('pts-') + this.line.id, null);

        _storeUtils.Store.set(this.generateStoreKey('LT:updateLines'), [this.line]);
      },
    },
    {
      key: 'lineMove',
      value: function lineMove(pt, initPos) {
        if (this.line.locked) {
          return;
        }

        var x = pt.x - initPos.x;
        var y = pt.y - initPos.y;
        this.line.setTo(
          new _point.Point(this.initLine.to.x + x, this.initLine.to.y + y),
          this.line.toArrow,
        );
        this.line.setFrom(
          new _point.Point(this.initLine.from.x + x, this.initLine.from.y + y),
          this.line.fromArrow,
        );

        for (var i = 0; i < this.initLine.controlPoints.length; ++i) {
          this.line.controlPoints[i].x = this.initLine.controlPoints[i].x + x;
          this.line.controlPoints[i].y = this.initLine.controlPoints[i].y + y;
        }

        _storeUtils.Store.set(this.generateStoreKey('pts-') + this.line.id, null);

        _storeUtils.Store.set(this.generateStoreKey('LT:updateLines'), [this.line]);
      },
    },
    {
      key: 'render',
      value: function render(ctx) {
        var _this2 = this;

        if (
          this.data.locked === _status.Lock.NoEvent ||
          this.options.hoverColor === 'transparent'
        ) {
          return;
        }

        ctx.fillStyle = this.options.hoverColor;
        ctx.save(); // anchors

        if (this.options.alwaysAnchor) {
          this.data.pens.forEach(function (pen) {
            if (pen.type === _pen.PenType.Line) {
              return;
            }

            if (pen.hideAnchor) {
              return;
            }

            var _iterator = (0, _createForOfIteratorHelper2.default)(pen.rotatedAnchors),
              _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var anchor = _step.value;

                if (anchor.hidden) {
                  continue;
                }

                ctx.beginPath();
                ctx.arc(
                  anchor.x,
                  anchor.y,
                  anchor.radius || _this2.options.anchorRadius,
                  0,
                  Math.PI * 2,
                );
                ctx.strokeStyle = anchor.strokeStyle || _this2.options.hoverColor;
                ctx.fillStyle = anchor.fillStyle || _this2.options.anchorFillStyle;
                ctx.fill();
                ctx.stroke();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (_this2.options.autoAnchor) {
              ctx.beginPath();
              ctx.arc(
                pen.rect.center.x,
                pen.rect.center.y,
                pen.rect.center.radius || _this2.options.anchorRadius,
                0,
                Math.PI * 2,
              );
              ctx.strokeStyle = _this2.options.hoverColor;
              ctx.fillStyle = _this2.options.anchorFillStyle;
              ctx.fill();
              ctx.stroke();
            }
          });
        }

        ctx.restore();

        if (this.node && !this.data.locked) {
          if (!this.node.getTID()) {
            this.node.setTID(this.TID);
          }

          this.root = this.getRoot(this.node) || this.node;

          if (this.root) {
            ctx.save();
            ctx.strokeStyle = this.options.dragColor;
            ctx.globalAlpha = 0.2;

            if (this.root.rotate) {
              ctx.translate(this.root.rect.center.x, this.root.rect.center.y);
              ctx.rotate(((this.root.rotate + this.root.offsetRotate) * Math.PI) / 180);
              ctx.translate(-this.root.rect.center.x, -this.root.rect.center.y);
            }

            ctx.beginPath();
            ctx.strokeRect(
              this.root.rect.x,
              this.root.rect.y,
              this.root.rect.width,
              this.root.rect.height,
            );
            ctx.restore();
          }

          if (!this.options.hideAnchor) {
            for (var i = 0; i < this.node.rotatedAnchors.length; ++i) {
              if (
                this.node.locked ||
                this.node.hideAnchor ||
                (this.node.rotatedAnchors[i].hidden && this.hoverAnchorIndex !== i)
              ) {
                continue;
              }

              ctx.beginPath();
              ctx.arc(
                this.node.rotatedAnchors[i].x,
                this.node.rotatedAnchors[i].y,
                this.node.rotatedAnchors[i].radius || this.options.anchorRadius,
                0,
                Math.PI * 2,
              );
              ctx.strokeStyle = this.node.rotatedAnchors[i].strokeStyle || this.options.hoverColor;
              ctx.fillStyle = this.node.rotatedAnchors[i].fillStyle || this.options.anchorFillStyle;
              ctx.fill();
              ctx.stroke();
            }
          }

          if (this.options.autoAnchor) {
            ctx.beginPath();
            ctx.arc(
              this.node.rect.center.x,
              this.node.rect.center.y,
              this.node.rect.center.radius || this.options.anchorRadius,
              0,
              Math.PI * 2,
            );
            ctx.strokeStyle = this.options.hoverColor;
            ctx.fillStyle = this.options.anchorFillStyle;
            ctx.fill();
            ctx.stroke();
          }
        }

        if (this.dockAnchor) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(
            this.dockAnchor.x,
            this.dockAnchor.y,
            this.dockAnchor.radius || this.options.anchorRadius,
            0,
            Math.PI * 2,
          );
          ctx.strokeStyle = this.options.dockStrokeStyle;
          ctx.fillStyle = this.options.dockFillStyle;
          ctx.fill();
          ctx.stroke();
          ctx.restore();
        }

        if (this.hoverLineCP) {
          ctx.beginPath();
          ctx.arc(this.hoverLineCP.x, this.hoverLineCP.y, 5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.strokeStyle = (0, _math.rgba)(0.5, this.options.hoverColor);
        ctx.lineWidth = 1;

        if (this.dockLineX > 0) {
          var size = _storeUtils.Store.get(this.generateStoreKey('LT:size'));

          ctx.beginPath();
          ctx.moveTo(this.dockLineX, 0);
          ctx.lineTo(this.dockLineX, size.height);
          ctx.stroke();
        }

        if (this.dockLineY > 0) {
          var _size = _storeUtils.Store.get(this.generateStoreKey('LT:size'));

          ctx.beginPath();
          ctx.moveTo(0, this.dockLineY);
          ctx.lineTo(_size.width, this.dockLineY);
          ctx.stroke();
        } // Select nodes by drag.

        if (this.dragRect) {
          ctx.fillStyle = (0, _math.rgba)(0.2, this.options.dragColor);
          ctx.strokeStyle = this.options.dragColor;
          ctx.beginPath();
          ctx.strokeRect(
            this.dragRect.x,
            this.dragRect.y,
            this.dragRect.width,
            this.dragRect.height,
          );
          ctx.fillRect(this.dragRect.x, this.dragRect.y, this.dragRect.width, this.dragRect.height);
        }
      },
    },
    {
      key: 'getRoot',
      value: function getRoot(node) {
        if (!node.parentId) {
          return null;
        }

        var _iterator2 = (0, _createForOfIteratorHelper2.default)(this.data.pens),
          _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var item = _step2.value;

            if (item instanceof _node.Node && item.id === node.parentId) {
              var n = this.getRoot(item);
              return n ? n : item;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return null;
      },
    },
    {
      key: 'clear',
      value: function clear() {
        this.node = null;
        this.line = null;
      },
    },
  ]);
  return HoverLayer;
})(_layer.Layer);

exports.HoverLayer = HoverLayer;
