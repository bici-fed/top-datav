function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

import { Store } from '@top-datav/store-utils';
import { s8 } from '../utils/uuid';
import { Rect } from './rect';
import { EventType, EventAction } from './event';
export var PenType;

(function (PenType) {
  PenType[PenType["Node"] = 0] = "Node";
  PenType[PenType["Line"] = 1] = "Line";
})(PenType || (PenType = {}));

export var Pen = /*#__PURE__*/function () {
  // animateType仅仅是辅助标识
  // Date.getTime
  // Cycle count. Infinite if <= 0.
  // Auto-play
  // 作为子节点，是否可以直接点击选中
  // 外部用于提示的dom id
  // User data.
  function Pen(json) {
    _classCallCheck(this, Pen);

    this.TID = void 0;
    this.id = void 0;
    this.type = PenType.Node;
    this.name = void 0;
    this.tags = void 0;
    this.rect = new Rect(0, 0, 0, 0);
    this.lineWidth = 1;
    this.rotate = 0;
    this.offsetRotate = 0;
    this.globalAlpha = 1;
    this.dash = 0;
    this.lineDash = void 0;
    this.lineDashOffset = void 0;
    this.strokeStyle = '';
    this.fillStyle = '';
    this.lineCap = void 0;
    this.font = {
      color: '',
      fontFamily: '"Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial',
      fontSize: 12,
      lineHeight: 1.5,
      fontStyle: 'normal',
      fontWeight: 'normal',
      textAlign: 'center',
      textBaseline: 'middle',
      background: ''
    };
    this.text = void 0;
    this.textMaxLine = void 0;
    this.whiteSpace = void 0;
    this.autoRect = void 0;
    this.textRect = void 0;
    this.fullTextRect = void 0;
    this.textOffsetX = void 0;
    this.textOffsetY = void 0;
    this.shadowColor = void 0;
    this.shadowBlur = void 0;
    this.shadowOffsetX = void 0;
    this.shadowOffsetY = void 0;
    this.animateFn = void 0;
    this.animateType = void 0;
    this.animateStart = void 0;
    this.animateCycle = void 0;
    this.animateCycleIndex = 0;
    this.nextAnimate = void 0;
    this.animatePlay = void 0;
    this.animatePos = 0;
    this.locked = void 0;
    this.stand = void 0;
    this.hideInput = void 0;
    this.hideRotateCP = void 0;
    this.hideSizeCP = void 0;
    this.hideAnchor = void 0;
    this.markdown = void 0;
    this.tipId = void 0;
    this.title = void 0;
    this.events = [];
    this.eventFns = ['link', 'doStartAnimate', 'doFn', 'doWindowFn', '', 'doPauseAnimate', 'doStopAnimate'];
    this.parentId = void 0;
    this.rectInParent = void 0;
    this.paddingTopNum = void 0;
    this.paddingBottomNum = void 0;
    this.paddingLeftNum = void 0;
    this.paddingRightNum = void 0;
    this.visible = void 0;
    this.data = void 0;
    this.value = void 0;

    if (json) {
      this.TID = json.TID;
      this.id = json.id || s8();
      this.name = json.name || '';
      this.value = json.value;
      this.tags = Object.assign([], json.tags);

      if (json.rect) {
        this.rect = new Rect(json.rect.x, json.rect.y, json.rect.width, json.rect.height);
      }

      this.dash = json.dash || 0;
      this.lineDash = json.lineDash;
      this.lineDashOffset = json.lineDashOffset || 0;
      this.lineWidth = json.lineWidth || 1;
      this.strokeStyle = json.strokeStyle || '';
      this.fillStyle = json.fillStyle || '';
      this.lineCap = json.lineCap;
      this.globalAlpha = json.globalAlpha || 1;
      this.rotate = json.rotate || 0;
      this.offsetRotate = json.offsetRotate || 0;

      if (json.font) {
        Object.assign(this.font, json.font);
      }

      this.text = json.text;

      if (json.textMaxLine) {
        this.textMaxLine = +json.textMaxLine || 0;
      }

      this.whiteSpace = json.whiteSpace;
      this.autoRect = json.autoRect;
      this.textOffsetX = json.textOffsetX || 0;
      this.textOffsetY = json.textOffsetY || 0;
      this.shadowColor = json.shadowColor;
      this.shadowBlur = json.shadowBlur;
      this.shadowOffsetX = json.shadowOffsetX;
      this.shadowOffsetY = json.shadowOffsetY;
      this.animateType = json.animateType;
      this.animateCycle = json.animateCycle;
      this.nextAnimate = json.nextAnimate;
      this.animatePlay = json.animatePlay;
      this.animatePos = json.animatePos || 0;
      this.locked = json.locked;
      this.stand = json.stand;
      this.hideInput = json.hideInput;
      this.hideRotateCP = json.hideRotateCP;
      this.hideSizeCP = json.hideSizeCP;
      this.hideAnchor = json.hideAnchor;

      if (json.events) {
        this.events = JSON.parse(JSON.stringify(json.events));
      } else {
        this.events = [];
      }

      this.markdown = json.markdown;
      this.tipId = json.tipId;
      this.title = json.title;
      this.visible = json.visible !== false;

      if (json.rectInParent) {
        this.rectInParent = json.rectInParent;
      }

      if (_typeof(json.data) === 'object') {
        this.data = JSON.parse(JSON.stringify(json.data));
      } else {
        this.data = json.data || '';
      }
    } else {
      this.id = s8();
      this.textOffsetX = 0;
      this.textOffsetY = 0;
    }
  }

  _createClass(Pen, [{
    key: "render",
    value: function render(ctx) {
      if (!this.visible) {
        return;
      }

      if (this.from && !this.to) {
        return;
      }

      ctx.save(); // for canvas2svg

      if (ctx.setAttrs) {
        ctx.setAttrs(this);
      }

      if (this.rotate || this.offsetRotate) {
        ctx.translate(this.rect.center.x, this.rect.center.y);
        ctx.rotate((this.rotate + this.offsetRotate) * Math.PI / 180);
        ctx.translate(-this.rect.center.x, -this.rect.center.y);
      }

      if (this.lineWidth > 1) {
        ctx.lineWidth = this.lineWidth;
      }

      ctx.strokeStyle = this.strokeStyle || Store.get(this.generateStoreKey('LT:color'));
      this.fillStyle && (ctx.fillStyle = this.fillStyle);

      if (this.lineCap) {
        ctx.lineCap = this.lineCap;
      } else if (this.type === PenType.Line) {
        ctx.lineCap = 'round';
      }

      if (this.globalAlpha < 1) {
        ctx.globalAlpha = this.globalAlpha;
      }

      if (this.lineDash) {
        ctx.setLineDash(this.lineDash);
      } else {
        switch (this.dash) {
          case 1:
            ctx.setLineDash([5, 5]);
            break;

          case 2:
            ctx.setLineDash([10, 10]);
            break;

          case 3:
            ctx.setLineDash([10, 10, 2, 10]);
            break;
        }
      }

      if (this.lineDashOffset) {
        ctx.lineDashOffset = this.lineDashOffset;
      }

      if (this.shadowColor) {
        ctx.shadowColor = this.shadowColor;
        ctx.shadowOffsetX = this.shadowOffsetX;
        ctx.shadowOffsetY = this.shadowOffsetY;
        ctx.shadowBlur = this.shadowBlur;
      }

      this.draw(ctx);
      ctx.restore();

      if (this.children) {
        var _iterator = _createForOfIteratorHelper(this.children),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            item.render(ctx);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }, {
    key: "click",
    value: function click() {
      if (!this.events) {
        return;
      }

      var _iterator2 = _createForOfIteratorHelper(this.events),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;

          if (item.type !== EventType.Click) {
            continue;
          }

          this[this.eventFns[item.action]] && this[this.eventFns[item.action]](item.value, item.params);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "dblclick",
    value: function dblclick() {
      if (!this.events) {
        return;
      }

      var _iterator3 = _createForOfIteratorHelper(this.events),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var item = _step3.value;

          if (item.type !== EventType.DblClick) {
            continue;
          }

          this[this.eventFns[item.action]] && this[this.eventFns[item.action]](item.value, item.params);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "doSocketMqtt",
    value: function doSocketMqtt(item, msg, client) {
      if (item.action < EventAction.Function || item.action === EventAction.StopAnimate) {
        this[this.eventFns[item.action]](msg.value || msg || item.value, msg.params || item.params, client);
      } else if (item.action < EventAction.SetProps) {
        this[this.eventFns[item.action]](item.value, msg || item.params, client);
      } else if (item.action === EventAction.SetProps) {
        var props = [];
        var data = msg;

        if (typeof msg === 'string') {
          try {
            data = JSON.parse(msg);
          } catch (error) {}
        }

        if (Array.isArray(data)) {
          props = data;
        }

        var _iterator4 = _createForOfIteratorHelper(props),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var prop = _step4.value;

            if (prop.key) {
              var keys = prop.key.split('.');

              if (_typeof(prop.value) === 'object') {
                if (keys[1]) {
                  this[keys[0]][keys[1]] = Object.assign(this[prop.key], prop.value);
                } else {
                  this[keys[0]] = Object.assign(this[prop.key], prop.value);
                }
              } else {
                if (keys[1]) {
                  this[keys[0]][keys[1]] = prop.value;
                } else {
                  this[keys[0]] = prop.value;
                }
              }
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        if (this.type === PenType.Node) {
          this['elementRendered'] = false;
        }

        if (item.params || item.params === undefined) {
          Store.set(this.generateStoreKey('LT:render'), true);
        }
      }
    }
  }, {
    key: "show",
    value: function show() {
      this.visible = true;
      return this;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.visible = false;
      return this;
    }
  }, {
    key: "isVisible",
    value: function isVisible() {
      return this.visible;
    }
  }, {
    key: "getTID",
    value: function getTID() {
      return this.TID;
    }
  }, {
    key: "setTID",
    value: function setTID(id) {
      this.TID = id;
      return this;
    }
  }, {
    key: "startAnimate",
    value: function startAnimate() {
      this.animateStart = Date.now();

      if (this.type === PenType.Node && !this['animateReady']) {
        this['initAnimate']();
      }

      Store.set(this.generateStoreKey('LT:AnimatePlay'), {
        pen: this
      });
    }
  }, {
    key: "link",
    value: function link(url, params) {
      window.open(url, params === undefined ? '_blank' : params);
    }
  }, {
    key: "doStartAnimate",
    value: function doStartAnimate(tag, params) {
      if (tag) {
        Store.set(this.generateStoreKey('LT:AnimatePlay'), {
          tag: tag
        });
      } else {
        this.startAnimate();
      }
    }
  }, {
    key: "doPauseAnimate",
    value: function doPauseAnimate(tag, params) {
      if (tag) {
        Store.set(this.generateStoreKey('LT:AnimatePlay'), {
          tag: tag,
          stop: true
        });
      } else {
        this.pauseAnimate();
      }
    }
  }, {
    key: "doStopAnimate",
    value: function doStopAnimate(tag, params) {
      if (tag) {
        Store.set(this.generateStoreKey('LT:AnimatePlay'), {
          tag: tag,
          stop: true
        });
      } else {
        this.stopAnimate();
      }
    }
  }, {
    key: "doFn",
    value: function doFn(fn, params, client) {
      var func;

      if (client) {
        func = new Function('pen', 'params', 'client', fn);
      } else {
        func = new Function('pen', 'params', fn);
      }

      func(this, params, client);
    }
  }, {
    key: "doWindowFn",
    value: function doWindowFn(fn, params, client) {
      window[fn](this, params, client);
    }
  }, {
    key: "generateStoreKey",
    value: function generateStoreKey(key) {
      return "".concat(this.TID, "-").concat(key);
    }
  }]);

  return Pen;
}();