'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Line = void 0;

var _createForOfIteratorHelper2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createForOfIteratorHelper'),
);

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _createSuper2 = _interopRequireDefault(require('@babel/runtime/helpers/createSuper'));

var _pen = require('./pen');

var _point = require('./point');

var _middles = require('../middles');

var _curve = require('../middles/lines/curve');

var _storeUtils = require('@top-datav/store-utils');

var _canvas = require('../utils/canvas');

var _text = require('../middles/nodes/text');

var _rect = require('./rect');

var _math = require('../utils/math');

var Line = /*#__PURE__*/ (function (_Pen) {
  (0, _inherits2.default)(Line, _Pen);

  var _super = (0, _createSuper2.default)(Line);

  function Line(json) {
    var _this;

    (0, _classCallCheck2.default)(this, Line);
    _this = _super.call(this, json);
    _this.from = void 0;
    _this.to = void 0;
    _this.controlPoints = [];
    _this.fromArrow = void 0;
    _this.toArrow = void 0;
    _this.fromArrowSize = 5;
    _this.toArrowSize = 5;
    _this.fromArrowColor = void 0;
    _this.toArrowColor = void 0;
    _this.length = void 0;
    _this.borderWidth = 0;
    _this.borderColor = '#000000';
    _this.animateColor = '';
    _this.animateSpan = 1;
    _this.animateLineDash = void 0;
    _this.isAnimate = false;
    _this.animateFromSize = 0;
    _this.animateToSize = 0;
    _this.animatePos = 0;
    _this.animateDot = void 0;
    _this.animateDotSize = 3;
    _this.lineJoin = void 0;
    _this.manualCps = void 0;
    _this.disableEmptyLine = void 0;
    _this.type = _pen.PenType.Line;

    if (json) {
      if (json.from) {
        _this.from = new _point.Point(
          json.from.x,
          json.from.y,
          json.from.direction,
          json.from.anchorIndex,
          json.from.id,
          json.autoAnchor,
        );
      }

      if (json.to) {
        _this.to = new _point.Point(
          json.to.x,
          json.to.y,
          json.to.direction,
          json.to.anchorIndex,
          json.to.id,
          json.autoAnchor,
        );
      }

      _this.fromArrow = json.fromArrow || '';
      _this.toArrow = json.toArrow || '';
      _this.fromArrowSize = json.fromArrowSize || 5;
      _this.toArrowSize = json.toArrowSize || 5;
      _this.fromArrowColor = json.fromArrowColor;
      _this.toArrowColor = json.toArrowColor;

      if (json.animateColor) {
        _this.animateColor = json.animateColor;
      }

      if (json.animateSpan) {
        _this.animateSpan = json.animateSpan;
      }

      if (json.animateLineDash) {
        _this.animateLineDash = json.animateLineDash;
      }

      if (json.animatePlay) {
        _this.animatePlay = json.animatePlay;
      }

      if (json.animateStart) {
        _this.animateStart = json.animateStart;
      }

      if (json.length) {
        _this.length = json.length;
      }

      if (json.borderWidth) {
        _this.borderColor = json.borderColor;
        _this.borderWidth = json.borderWidth;
      }

      _this.animateDotSize = json.animateDotSize || 3;
      _this.manualCps = json.manualCps;
      _this.disableEmptyLine = json.disableEmptyLine;

      if (json.lineJoin) {
        _this.lineJoin = json.lineJoin;
      }
    } else {
      _this.name = 'polyline';
      _this.fromArrow = 'triangleSolid';
    }

    if (!_this.font.background) {
      _this.font.background = '#fff';
    } // 暂时兼容老数据

    if (json.name === 'mind' && json.controlPoints && json.controlPoints.length < 3) {
      json.controlPoints = null;

      _this.calcControlPoints();
    } //

    if (json.controlPoints) {
      var _iterator = (0, _createForOfIteratorHelper2.default)(json.controlPoints),
        _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var item = _step.value;

          _this.controlPoints.push(
            new _point.Point(item.x, item.y, item.direction, item.anchorIndex, item.id),
          );
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    return _this;
  }

  (0, _createClass2.default)(Line, [
    {
      key: 'setFrom',
      value: function setFrom(from) {
        var fromArrow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        this.from = from;
        this.fromArrow = fromArrow;
        this.textRect = null;
      },
    },
    {
      key: 'setTo',
      value: function setTo(to) {
        var toArrow =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'triangleSolid';
        this.to = to;
        this.toArrow = toArrow;
        this.textRect = null;
      },
    },
    {
      key: 'calcControlPoints',
      value: function calcControlPoints(force) {
        if (this.manualCps && !force) {
          return;
        }

        this.textRect = null;

        if (this.from && this.to && _middles.drawLineFns[this.name]) {
          _middles.drawLineFns[this.name].controlPointsFn(this);
        }
      },
    },
    {
      key: 'draw',
      value: function draw(ctx) {
        if (this.animateDot) {
          ctx.fillStyle = this.strokeStyle;

          if (this.animateType === 'dot') {
            ctx.beginPath();
            ctx.arc(
              this.animateDot.x,
              this.animateDot.y,
              this.animateDotSize,
              0,
              2 * Math.PI,
              false,
            );
            ctx.fill();
            return;
          } else if (this.animateType === 'comet') {
            var bulles = this.getBubbles();
            ctx.save();

            var _iterator2 = (0, _createForOfIteratorHelper2.default)(bulles),
              _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var item = _step2.value;
                ctx.globalAlpha = item.a;
                ctx.beginPath();
                ctx.arc(item.pos.x, item.pos.y, item.r, 0, 2 * Math.PI, false);
                ctx.fill();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            ctx.restore();
          }
        }

        if (!this.isAnimate && this.borderWidth > 0 && this.borderColor) {
          ctx.save();

          if (this.lineJoin) {
            ctx.lineJoin = this.lineJoin;
          }

          ctx.lineWidth = this.lineWidth + this.borderWidth;
          ctx.strokeStyle = this.borderColor;

          if (_middles.drawLineFns[this.name]) {
            _middles.drawLineFns[this.name].drawFn(ctx, this);
          }

          ctx.restore();
        }

        if ((!this.isAnimate || this.animateType !== 'comet') && _middles.drawLineFns[this.name]) {
          if (this.lineJoin) {
            ctx.lineJoin = this.lineJoin;
          }

          _middles.drawLineFns[this.name].drawFn(ctx, this);
        }

        var scale = _storeUtils.Store.get(this.generateStoreKey('LT:scale')) || 1;

        if (this.fromArrow && _middles.drawArrowFns[this.fromArrow]) {
          ctx.save();
          ctx.beginPath();
          ctx.lineDashOffset = 0;
          ctx.setLineDash([]);
          ctx.fillStyle = this.fromArrowColor || this.strokeStyle || ctx.strokeStyle;
          ctx.strokeStyle = ctx.fillStyle;
          var f = this.to;

          if (this.name === 'curve') {
            f = (0, _curve.getBezierPoint)(
              0.95 - this.lineWidth / 100,
              this.to,
              this.controlPoints[1],
              this.controlPoints[0],
              this.from,
            );
          } else if (this.name !== 'line' && this.controlPoints.length) {
            f = this.controlPoints[0];
          }

          _middles.drawArrowFns[this.fromArrow](ctx, f, this.from, this.fromArrowSize * scale);

          ctx.restore();
        }

        if (this.toArrow && _middles.drawArrowFns[this.toArrow]) {
          ctx.save();
          ctx.beginPath();
          ctx.lineDashOffset = 0;
          ctx.setLineDash([]);
          ctx.fillStyle = this.toArrowColor || this.strokeStyle || ctx.strokeStyle;
          ctx.strokeStyle = ctx.fillStyle;
          var _f = this.from;

          if (this.name === 'curve') {
            _f = (0, _curve.getBezierPoint)(
              0.95 - this.lineWidth / 100,
              this.from,
              this.controlPoints[0],
              this.controlPoints[1],
              this.to,
            );
          } else if (this.name === 'mind') {
            _f = (0, _curve.getBezierPoint)(
              0.96 - this.lineWidth / 100,
              this.from,
              this.controlPoints[0],
              this.controlPoints[1],
              this.controlPoints[2],
            );
          } else if (this.name !== 'line' && this.controlPoints.length) {
            _f = this.controlPoints[this.controlPoints.length - 1];
          }

          _middles.drawArrowFns[this.toArrow](ctx, _f, this.to, this.toArrowSize * scale);

          ctx.restore();
        }

        if (this.text && !this.isAnimate) {
          if (!this.textRect) {
            this.calcTextRect();
          }

          (0, _text.text)(ctx, this);
        }
      },
    },
    {
      key: 'pointIn',
      value: function pointIn(pt) {
        return _middles.drawLineFns[this.name].pointIn(pt, this);
      },
    },
    {
      key: 'getLen',
      value: function getLen() {
        switch (this.name) {
          case 'line':
            return (0, _canvas.lineLen)(this.from, this.to);

          case 'polyline':
            if (!this.controlPoints || !this.controlPoints.length) {
              return (0, _canvas.lineLen)(this.from, this.to);
            }

            var len = 0;
            var curPt = this.from;

            var _iterator3 = (0, _createForOfIteratorHelper2.default)(this.controlPoints),
              _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                var pt = _step3.value;
                len += (0, _canvas.lineLen)(curPt, pt);
                curPt = pt;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            len += (0, _canvas.lineLen)(curPt, this.to);
            return len | 0;

          case 'curve':
            return (0, _canvas.curveLen)(
              this.from,
              this.controlPoints[0],
              this.controlPoints[1],
              this.to,
            );
        }

        return 0;
      },
    },
    {
      key: 'calcTextRect',
      value: function calcTextRect() {
        var center = this.getCenter();
        var width = Math.abs(this.from.x - this.to.x);

        if (width < 100) {
          width = 100;
        }

        var height =
          this.font.lineHeight *
          this.font.fontSize *
          (this.textMaxLine || (this.text && this.text.split('\n').length) || 1);
        this.textRect = new _rect.Rect(center.x - width / 2, center.y - height / 2, width, height);
      },
    },
    {
      key: 'getTextRect',
      value: function getTextRect() {
        // calc every time just in case text line is changed.
        this.calcTextRect();
        return this.textRect;
      },
    },
    {
      key: 'getCenter',
      value: function getCenter() {
        var center = new _point.Point(this.from.x, this.from.y);

        switch (this.name) {
          case 'line':
            center = this.getLineCenter(this.from, this.to);
            break;

          case 'polyline':
            var i = Math.round(this.controlPoints.length / 2);
            center = this.getLineCenter(
              this.controlPoints[i - 1] || this.from,
              this.controlPoints[i] || this.to,
            );
            break;

          case 'curve':
            center = (0, _curve.getBezierPoint)(
              0.5,
              this.to,
              this.controlPoints[1],
              this.controlPoints[0],
              this.from,
            );
        }

        return center;
      },
    },
    {
      key: 'getLineCenter',
      value: function getLineCenter(from, to) {
        return new _point.Point((from.x + to.x) / 2, (from.y + to.y) / 2);
      },
    },
    {
      key: 'getPointByPos',
      value: function getPointByPos(pos) {
        if (pos <= 0) {
          return this.from;
        }

        switch (this.name) {
          case 'line':
            return this.getLinePtByPos(this.from, this.to, pos);

          case 'polyline':
            if (!this.controlPoints || !this.controlPoints.length) {
              return this.getLinePtByPos(this.from, this.to, pos);
            } else {
              var points = [].concat(this.controlPoints, this.to);
              var curPt = this.from;

              var _iterator4 = (0, _createForOfIteratorHelper2.default)(points),
                _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                  var pt = _step4.value;
                  var l = (0, _canvas.lineLen)(curPt, pt);

                  if (pos > l) {
                    pos -= l;
                    curPt = pt;
                  } else {
                    return this.getLinePtByPos(curPt, pt, pos);
                  }
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              return this.to;
            }

          case 'curve':
            return (0, _curve.getBezierPoint)(
              pos / this.getLen(),
              this.from,
              this.controlPoints[0],
              this.controlPoints[1],
              this.to,
            );
        }

        return null;
      },
    },
    {
      key: 'getLinePtByPos',
      value: function getLinePtByPos(from, to, pos) {
        var length = (0, _canvas.lineLen)(from, to);

        if (pos <= 0) {
          return from;
        }

        if (pos >= length) {
          return to;
        }

        var x, y;
        x = from.x + (to.x - from.x) * (pos / length);
        y = from.y + (to.y - from.y) * (pos / length);
        return new _point.Point(x, y);
      },
    },
    {
      key: 'calcRectInParent',
      value: function calcRectInParent(parent) {
        var parentW = parent.rect.width - parent.paddingLeftNum - parent.paddingRightNum;
        var parentH = parent.rect.height - parent.paddingTopNum - parent.paddingBottomNum;
        this.rectInParent = {
          x: ((this.from.x - parent.rect.x - parent.paddingLeftNum) * 100) / parentW + '%',
          y: ((this.from.y - parent.rect.y - parent.paddingTopNum) * 100) / parentH + '%',
          width: 0,
          height: 0,
          rotate: 0,
        };
      }, // 根据父节点rect计算自己（子节点）的rect
    },
    {
      key: 'calcRectByParent',
      value: function calcRectByParent(parent) {
        if (!this.rectInParent) {
          return;
        }

        var parentW = parent.rect.width - parent.paddingLeftNum - parent.paddingRightNum;
        var parentH = parent.rect.height - parent.paddingTopNum - parent.paddingBottomNum;
        var x =
          parent.rect.x +
          parent.paddingLeftNum +
          (0, _math.abs)(parentW, this.rectInParent.x) +
          (0, _math.abs)(parentW, this.rectInParent.marginLeft);
        var y =
          parent.rect.y +
          parent.paddingTopNum +
          (0, _math.abs)(parentH, this.rectInParent.y) +
          (0, _math.abs)(parentW, this.rectInParent.marginTop);

        if (this.rectInParent.marginLeft === undefined && this.rectInParent.marginRight) {
          x -= (0, _math.abs)(parentW, this.rectInParent.marginRight);
        }

        if (this.rectInParent.marginTop === undefined && this.rectInParent.marginBottom) {
          y -= (0, _math.abs)(parentW, this.rectInParent.marginBottom);
        }

        this.translate(x - this.from.x, y - this.from.y);
      },
    },
    {
      key: 'initAnimate',
      value: function initAnimate() {
        this.animatePos = 0;
      },
    },
    {
      key: 'pauseAnimate',
      value: function pauseAnimate() {
        _storeUtils.Store.set(this.generateStoreKey('LT:AnimatePlay'), {
          pen: this,
          stop: true,
        });
      },
    },
    {
      key: 'stopAnimate',
      value: function stopAnimate() {
        this.pauseAnimate();
        this.initAnimate();
      },
    },
    {
      key: 'animate',
      value: function animate(now) {
        if (this.animateFromSize) {
          this.lineDashOffset = -this.animateFromSize;
        }

        this.animatePos += this.animateSpan;
        this.animateDot = null;

        switch (this.animateType) {
          case 'beads':
            this.lineDashOffset = -this.animatePos;
            var len = this.lineWidth;

            if (len < 5) {
              len = 5;
            }

            if (this.animateLineDash) {
              this.lineDash = this.animateLineDash;
            } else {
              this.lineDash = [len, len * 2];
            }

            break;

          case 'dot':
          case 'comet':
            this.lineDash = null;
            this.animateDot = this.getPointByPos(this.animatePos + this.animateFromSize);
            break;

          default:
            this.lineDash = [this.animatePos, this.length - this.animatePos + 1];
            break;
        }

        if (
          this.animatePos >
          this.length + this.animateSpan - this.animateFromSize - this.animateToSize
        ) {
          if (++this.animateCycleIndex >= this.animateCycle && this.animateCycle > 0) {
            this.animateStart = 0;
            this.animatePos = 0;

            _storeUtils.Store.set(this.generateStoreKey('animateEnd'), {
              type: 'line',
              data: this,
            });

            return;
          }

          this.animatePos = this.animateSpan;
        }
      },
    },
    {
      key: 'getBubbles',
      value: function getBubbles() {
        var bubbles = [];

        for (var i = 0; i < 30 && this.animatePos - i > 0; ++i) {
          bubbles.push({
            pos: this.getPointByPos(this.animatePos - i * 2 + this.animateFromSize),
            a: 1 - i * 0.03,
            r: this.lineWidth - i * 0.01,
          });
        }

        return bubbles;
      },
    },
    {
      key: 'round',
      value: function round() {
        this.from.round();
        this.to.round();
      },
    },
    {
      key: 'translate',
      value: function translate(x, y) {
        this.from.x += x;
        this.from.y += y;
        this.to.x += x;
        this.to.y += y;

        if (this.text) {
          this.textRect = null;
        }

        var _iterator5 = (0, _createForOfIteratorHelper2.default)(this.controlPoints),
          _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            var pt = _step5.value;
            pt.x += x;
            pt.y += y;
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        _storeUtils.Store.set(this.generateStoreKey('pts-') + this.id, null);
      },
    },
    {
      key: 'scale',
      value: function scale(_scale, center) {
        this.from.x = center.x - (center.x - this.from.x) * _scale;
        this.from.y = center.y - (center.y - this.from.y) * _scale;
        this.to.x = center.x - (center.x - this.to.x) * _scale;
        this.to.y = center.y - (center.y - this.to.y) * _scale;
        this.lineWidth *= _scale;
        this.borderWidth *= _scale;
        this.font.fontSize *= _scale;

        if (this.text) {
          this.textRect = null;
        }

        var _iterator6 = (0, _createForOfIteratorHelper2.default)(this.controlPoints),
          _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            var pt = _step6.value;
            pt.x = center.x - (center.x - pt.x) * _scale;
            pt.y = center.y - (center.y - pt.y) * _scale;
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }

        _storeUtils.Store.set(this.generateStoreKey('pts-') + this.id, null);
      },
    },
    {
      key: 'hit',
      value: function hit(pt) {
        var padding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        if (this.from.hit(pt, padding) || this.to.hit(pt, padding)) {
          return this;
        }
      },
    },
    {
      key: 'clone',
      value: function clone() {
        return new Line(this);
      },
    },
  ]);
  return Line;
})(_pen.Pen);

exports.Line = Line;
