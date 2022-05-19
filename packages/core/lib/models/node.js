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
exports.images = exports.Node = void 0;

var _pen = require('./pen');

var _rect = require('./rect');

var _point = require('./point');

var _line = require('./line');

var _middles = require('../middles');

var _default = require('../middles/default.anchor');

var _default2 = require('../middles/default.rect');

var _text = require('../middles/nodes/text');

var _storeUtils = require('@top-datav/store-utils');

var _math = require('../utils/math');

var _uuid = require('../utils/uuid');

var _ = _interopRequireWildcard(require('lodash'));

var _utils = require('../utils');

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

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

var images = {};
exports.images = images;

var Node = /*#__PURE__*/ (function (_Pen) {
  _inherits(Node, _Pen);

  var _super = _createSuper(Node);

  // 0 -1 之间的小数
  // icon
  // 0 - 纯色；1 - 线性渐变；2 - 径向渐变
  // nodes移动时，停靠点的参考位置
  // 0 - 人工播放；1 - auto自动播放；2 - animate play
  // 和节点绑定的（多是临时生成）的dom元素
  // 外部dom是否完成初始化（用于第三方库辅助变量）
  // 外部dom是否已经渲染。当需要重绘时，设置为false（用于第三方库辅助变量）
  // 自定义属性
  // 节点在画布是否可以被编辑
  function Node(json) {
    var _this;

    var noChild = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, Node);

    _this = _super.call(this, json);
    _this.is3D = false;
    _this.z = void 0;
    _this.zRotate = 0;
    _this.borderRadius = void 0;
    _this.icon = void 0;
    _this.iconFamily = void 0;
    _this.iconSize = void 0;
    _this.iconColor = void 0;
    _this.image = void 0;
    _this.lastImage = void 0;
    _this.imgNaturalWidth = void 0;
    _this.imgNaturalHeight = void 0;
    _this.imageWidth = void 0;
    _this.imageHeight = void 0;
    _this.imageRatio = true;
    _this.imageAlign = void 0;
    _this.img = void 0;
    _this.bkType = void 0;
    _this.gradientFromColor = void 0;
    _this.gradientToColor = void 0;
    _this.gradientAngle = void 0;
    _this.gradientRadius = void 0;
    _this.paddingTop = void 0;
    _this.paddingBottom = void 0;
    _this.paddingLeft = void 0;
    _this.paddingRight = void 0;
    _this.onlySizeX = void 0;
    _this.onlySizeY = void 0;
    _this.iconRect = void 0;
    _this.fullIconRect = void 0;
    _this.anchors = [];
    _this.rotatedAnchors = [];
    _this.children = void 0;
    _this.dockWatchers = void 0;
    _this.animateDuration = 0;
    _this.animateFrames = [];
    _this.animateAlone = void 0;
    _this.animateReady = void 0;
    _this.animateFrame = 0;
    _this._animateFrame = void 0;
    _this._animatePos = void 0;
    _this.gif = void 0;
    _this.video = void 0;
    _this.audio = void 0;
    _this.play = void 0;
    _this.playLoop = void 0;
    _this.nextPlay = void 0;
    _this.iframe = void 0;
    _this.elementId = void 0;
    _this.elementLoaded = void 0;
    _this.elementRendered = void 0;
    _this.property = void 0;
    _this.isEditable = void 0;
    _this.type = _pen.PenType.Node;
    _this.is3D = json.is3D;
    _this.z = json.z;
    _this.zRotate = json.zRotate || 0;
    _this.borderRadius = +json.borderRadius || 0;
    _this.icon = json.icon;
    _this.iconFamily = json.iconFamily;
    _this.iconSize = +json.iconSize;
    _this.iconColor = json.iconColor;
    _this.property = json.property;
    _this.image = json.image;

    if (json.imgNaturalWidth) {
      _this.imgNaturalWidth = json.imgNaturalWidth;
    }

    if (json.imgNaturalHeight) {
      _this.imgNaturalHeight = json.imgNaturalHeight;
    }

    if (json.imageWidth) {
      _this.imageWidth = json.imageWidth;
    }

    if (json.imageHeight) {
      _this.imageHeight = json.imageHeight;
    }

    _this.imageRatio = json.imageRatio;
    _this.imageAlign = json.imageAlign || 'center';
    _this.bkType = json.bkType;
    _this.gradientFromColor = json.gradientFromColor;
    _this.gradientToColor = json.gradientToColor;
    _this.gradientAngle = json.gradientAngle || 0;
    _this.gradientRadius = json.gradientRadius || 0.01;
    _this.paddingTop = json.paddingTop || 0;
    _this.paddingBottom = json.paddingBottom || 0;
    _this.paddingLeft = json.paddingLeft || 0;
    _this.paddingRight = json.paddingRight || 0;
    _this.onlySizeX = json.onlySizeX;
    _this.onlySizeY = json.onlySizeY; // 兼容老数据

    if (json.children && json.children[0] && json.children[0].parentRect) {
      _this.paddingLeft = json.children[0].parentRect.offsetX;
      _this.paddingRight = 0;
      _this.paddingTop = json.children[0].parentRect.offsetY;
      _this.paddingBottom = 0;
    }

    if (json.parentRect) {
      _this.rectInParent = {
        x: json.parentRect.x * 100 + '%',
        y: json.parentRect.y * 100 + '%',
        width: json.parentRect.width * 100 + '%',
        height: json.parentRect.height * 100 + '%',
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        rotate: json.parentRect.rotate,
      };
      _this.paddingTop = json.parentRect.marginY;
      _this.paddingBottom = json.parentRect.marginY;
      _this.paddingLeft = json.parentRect.marginX;
      _this.paddingRight = json.parentRect.marginX;
    } // 兼容老数据 end

    if (json.animateFrames) {
      _this.animateFrames = json.animateFrames;

      var _iterator = _createForOfIteratorHelper(_this.animateFrames),
        _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var item = _step.value;

          if (!item.state.init) {
            item.state = new Node(item.state, true);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    if (json.animateDuration) {
      _this.animateDuration = json.animateDuration;
    }

    _this.animateFrame = json.animateFrame || 0;
    _this.animateType = json.animateType ? json.animateType : json.animateDuration ? 'custom' : '';
    _this.animateAlone = json.animateAlone;
    _this.iframe = json.iframe;
    _this.elementId = json.elementId;
    _this.audio = json.audio;
    _this.video = json.video;
    _this.play = json.play;
    _this.nextPlay = json.nextPlay;
    _this.isEditable = json.isEditable; // if (json.elementLoaded !== undefined) {
    //   this.elementId = null;
    //   this.elementLoaded = false;
    // }

    _this.init();

    if (!noChild) {
      _this.setChild(json.children);
    } else {
      _this.children = null;
    }

    return _this;
  }

  _createClass(
    Node,
    [
      {
        key: 'restore',
        value: function restore(state) {
          if (!state) {
            state = this.animateReady;
          }

          if (!state) {
            return;
          }

          for (var key in this) {
            if (key.indexOf('animate') < 0) {
              this[key] = state[key];
            }
          }

          this.init();
        },
      },
      {
        key: 'init',
        value: function init() {
          this.calcAbsPadding(); // Calc rect of text.

          if (_middles.textRectFns[this.name]) {
            _middles.textRectFns[this.name](this);
          } else {
            (0, _default2.defaultTextRect)(this);
          } // Calc rect of icon.

          if (_middles.iconRectFns[this.name]) {
            _middles.iconRectFns[this.name](this);
          } else {
            (0, _default2.defaultIconRect)(this);
          }

          this.calcAnchors();
          this.elementRendered = false;
          this.addToDiv();
        },
      },
      {
        key: 'addToDiv',
        value: function addToDiv() {
          if (this.audio || this.video || this.iframe || this.elementId || this.hasGif()) {
            _storeUtils.Store.set(this.generateStoreKey('LT:addDiv'), this);
          }
        },
      },
      {
        key: 'hasGif',
        value: function hasGif() {
          if (this.gif) {
            return true;
          }

          if (this.children) {
            var _iterator2 = _createForOfIteratorHelper(this.children),
              _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var item = _step2.value;

                if (item.type === _pen.PenType.Node && item.hasGif()) {
                  return true;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }

          return false;
        },
      },
      {
        key: 'calcAbsPadding',
        value: function calcAbsPadding() {
          this.paddingLeftNum = (0, _math.abs)(this.rect.width, this.paddingLeft);
          this.paddingRightNum = (0, _math.abs)(this.rect.width, this.paddingRight);
          this.paddingTopNum = (0, _math.abs)(this.rect.height, this.paddingTop);
          this.paddingBottomNum = (0, _math.abs)(this.rect.height, this.paddingBottom);
        },
      },
      {
        key: 'setChild',
        value: function setChild(children) {
          if (!children) {
            return;
          }

          this.children = [];

          var _iterator3 = _createForOfIteratorHelper(children),
            _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var item = _step3.value;
              var child = void 0;

              switch (item.type) {
                case _pen.PenType.Line:
                  child = new _line.Line(item);
                  child.calcRectByParent(this);
                  break;

                default:
                  child = new Node(item);
                  child.parentId = this.id;
                  child.calcRectByParent(this);
                  child.init();
                  child.setChild(item.children);
                  break;
              }

              this.children.push(child);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        },
      },
      {
        key: 'setTID',
        value: function setTID(id) {
          this.TID = id;

          if (!this.children) {
            return;
          }

          var _iterator4 = _createForOfIteratorHelper(this.children),
            _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              var item = _step4.value;
              this.TID = id;

              switch (item.type) {
                case _pen.PenType.Node:
                  item.setTID(id);
                  break;
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          return this;
        },
      },
      {
        key: 'setChildrenIds',
        value: function setChildrenIds() {
          if (!this.children) {
            return;
          }

          var _iterator5 = _createForOfIteratorHelper(this.children),
            _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
              var item = _step5.value;
              item.id = (0, _uuid.s8)();

              switch (item.type) {
                case _pen.PenType.Node:
                  item.setChildrenIds();
                  break;
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        },
      },
      {
        key: 'draw',
        value: function draw(ctx) {
          if (!_middles.drawNodeFns[this.name]) {
            return;
          } // DrawBk

          switch (this.bkType) {
            case 1:
              this.drawBkLinearGradient(ctx);
              break;

            case 2:
              this.drawBkRadialGradient(ctx);
              break;
          } // Draw shape.

          _middles.drawNodeFns[this.name](ctx, this); // Draw text.

          if (this.name !== 'text' && this.text) {
            (0, _text.text)(ctx, this);
          } // Draw image.

          if (this.image) {
            try {
              this.drawImg(ctx);
              return;
            } catch (e) {}
          } // Draw icon

          if (this.icon) {
            ctx.save();
            ctx.shadowColor = '';
            ctx.shadowBlur = 0;
            (0, _text.iconfont)(ctx, this);
            ctx.restore();
          }
        },
      },
      {
        key: 'drawBkLinearGradient',
        value: function drawBkLinearGradient(ctx) {
          var from = new _point.Point(this.rect.x, this.rect.center.y);
          var to = new _point.Point(this.rect.ex, this.rect.center.y);

          if (this.gradientAngle % 90 === 0 && this.gradientAngle % 180) {
            if (this.gradientAngle % 270) {
              from.x = this.rect.center.x;
              from.y = this.rect.y;
              to.x = this.rect.center.x;
              to.y = this.rect.ey;
            } else {
              from.x = this.rect.center.x;
              from.y = this.rect.ey;
              to.x = this.rect.center.x;
              to.y = this.rect.y;
            }
          } else if (this.gradientAngle) {
            from.rotate(this.gradientAngle, this.rect.center);
            to.rotate(this.gradientAngle, this.rect.center);
          } // contributor: https://github.com/sunnyguohua/topology

          var grd = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
          grd.addColorStop(0, this.gradientFromColor);
          grd.addColorStop(1, this.gradientToColor);
          ctx.fillStyle = grd;
        },
      },
      {
        key: 'drawBkRadialGradient',
        value: function drawBkRadialGradient(ctx) {
          var r = this.rect.width;

          if (r < this.rect.height) {
            r = this.rect.height;
          }

          r *= 0.5;
          var grd = ctx.createRadialGradient(
            this.rect.center.x,
            this.rect.center.y,
            r * this.gradientRadius,
            this.rect.center.x,
            this.rect.center.y,
            r,
          );
          grd.addColorStop(0, this.gradientFromColor);
          grd.addColorStop(1, this.gradientToColor);
          ctx.fillStyle = grd;
        },
      },
      {
        key: 'drawImg',
        value: function drawImg(ctx) {
          var _this2 = this;

          if (this.lastImage !== this.image) {
            this.img = null;

            if (this.lastImage && this.lastImage.indexOf('.gif') > 0) {
              _storeUtils.Store.set(this.generateStoreKey('LT:addDiv'), this);
            }
          }

          var gif = this.image.indexOf('.gif') > 0;

          if (!gif && this.img) {
            ctx.save();
            ctx.shadowColor = '';
            ctx.shadowBlur = 0;
            var rect = this.getIconRect();
            var x = rect.x;
            var y = rect.y;
            var w = rect.width;
            var h = rect.height;

            if (this.imageWidth) {
              w = this.imageWidth;
            }

            if (this.imageHeight) {
              h = this.imageHeight;
            }

            if (this.imageRatio) {
              if (this.imageWidth) {
                h = (this.imgNaturalHeight / this.imgNaturalWidth) * w;
              } else {
                w = (this.imgNaturalWidth / this.imgNaturalHeight) * h;
              }
            }

            if (this.name !== 'image') {
              x += (rect.width - w) / 2;
              y += (rect.height - h) / 2;
            }

            switch (this.imageAlign) {
              case 'top':
                y = rect.y;
                break;

              case 'bottom':
                y = rect.ey - h;
                break;

              case 'left':
                x = rect.x;
                break;

              case 'right':
                x = rect.ex - w;
                break;

              case 'left-top':
                x = rect.x;
                y = rect.y;
                break;

              case 'right-top':
                x = rect.ex - w;
                y = rect.y;
                break;

              case 'left-bottom':
                x = rect.x;
                y = rect.ey - h;
                break;

              case 'right-bottom':
                x = rect.ex - w;
                y = rect.ey - h;
                break;
            }

            ctx.drawImage(this.img, x, y, w, h);
            ctx.restore();
            return;
          } // Load image and draw it.

          if (!gif && images[this.image]) {
            this.img = images[this.image].img;
            ++images[this.image].cnt;
            this.lastImage = this.image;
            this.imgNaturalWidth = this.img.naturalWidth;
            this.imgNaturalHeight = this.img.naturalHeight;
            this.drawImg(ctx);
            return;
          }

          var img = new Image(); // 不加这行代码还可以，加了还不出现跨域的问题
          // img.crossOrigin = 'anonymous';

          img.src = this.image;

          img.onload = function () {
            _this2.lastImage = _this2.image;
            _this2.imgNaturalWidth = img.naturalWidth;
            _this2.imgNaturalHeight = img.naturalHeight;
            _this2.img = img;
            images[_this2.image] = {
              img: img,
              cnt: 1,
            };

            _storeUtils.Store.set(_this2.generateStoreKey('LT:imageLoaded'), true);

            if (!_this2.gif && gif) {
              _this2.gif = true;

              _storeUtils.Store.set(_this2.generateStoreKey('LT:addDiv'), _this2);
            }
          };
        },
      },
      {
        key: 'calcAnchors',
        value: function calcAnchors() {
          this.anchors = [];

          if (_middles.anchorsFns[this.name]) {
            _middles.anchorsFns[this.name](this);
          } else {
            (0, _default.defaultAnchors)(this);
          }

          this.calcRotateAnchors();
        },
      },
      {
        key: 'calcRotateAnchors',
        value: function calcRotateAnchors(angle) {
          if (angle === undefined) {
            angle = this.rotate;
          }

          this.rotatedAnchors = [];

          var _iterator6 = _createForOfIteratorHelper(this.anchors),
            _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
              var item = _step6.value;
              this.rotatedAnchors.push(item.clone().rotate(angle, this.rect.center));
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        },
      },
      {
        key: 'getTextRect',
        value: function getTextRect() {
          var textRect = this.textRect;

          if (!this.icon && !this.image) {
            textRect = this.fullTextRect;
          }

          return textRect;
        },
      },
      {
        key: 'getIconRect',
        value: function getIconRect() {
          var rect = this.iconRect;

          if (!this.text) {
            rect = this.fullIconRect || this.fullTextRect || this.rect;
          }

          return rect;
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
          var w = (0, _math.abs)(parentW, this.rectInParent.width);
          var h = (0, _math.abs)(parentH, this.rectInParent.height);

          if (this.rectInParent.marginLeft === undefined && this.rectInParent.marginRight) {
            x -= (0, _math.abs)(parentW, this.rectInParent.marginRight);
          }

          if (this.rectInParent.marginTop === undefined && this.rectInParent.marginBottom) {
            y -= (0, _math.abs)(parentW, this.rectInParent.marginBottom);
          }

          this.rect = new _rect.Rect(x, y, w, h);

          if (!this.rectInParent.rotate) {
            this.rectInParent.rotate = 0;
          }

          var offsetR = parent.rotate + parent.offsetRotate;
          this.rotate = this.rectInParent.rotate + offsetR;

          if (!this.rectInParent.rect) {
            this.rectInParent.rect = this.rect.clone();
          }
        },
      },
      {
        key: 'calcChildrenRect',
        value: function calcChildrenRect() {
          if (!this.children) {
            return;
          }

          var _iterator7 = _createForOfIteratorHelper(this.children),
            _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
              var item = _step7.value;
              item.calcRectByParent(this);

              if (item.type === _pen.PenType.Node) {
                item.init();
                item.calcChildrenRect();
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        },
      },
      {
        key: 'calcRectInParent',
        value: function calcRectInParent(parent) {
          var parentW = parent.rect.width - parent.paddingLeftNum - parent.paddingRightNum;
          var parentH = parent.rect.height - parent.paddingTopNum - parent.paddingBottomNum;
          this.rectInParent = {
            x: ((this.rect.x - parent.rect.x - parent.paddingLeftNum) * 100) / parentW + '%',
            y: ((this.rect.y - parent.rect.y - parent.paddingTopNum) * 100) / parentH + '%',
            width: (this.rect.width * 100) / parentW + '%',
            height: (this.rect.height * 100) / parentH + '%',
            rotate: this.rectInParent ? this.rectInParent.rotate || 0 : this.rotate || 0,
            rect: this.rect.clone(),
          };
        },
      },
      {
        key: 'getDockWatchers',
        value: function getDockWatchers() {
          this.dockWatchers = this.rect.toPoints();
          this.dockWatchers.unshift(this.rect.center);
        },
      },
      {
        key: 'initAnimate',
        value: function initAnimate() {
          var passed = 0;

          for (var i = 0; i < this.animateFrames.length; ++i) {
            this.animateFrames[i].start = passed;
            passed += this.animateFrames[i].duration;
            this.animateFrames[i].end = passed;
            this.animateFrames[i].initState = Node.cloneState(
              i ? this.animateFrames[i - 1].state : this,
            );
          }

          this.animateDuration = passed;
          this.animateReady = Node.cloneState(this);
          this.animatePos = 0;
          this.animateFrame = 0;
        },
      },
      {
        key: 'pauseAnimate',
        value: function pauseAnimate() {
          this.animateFrame = this._animateFrame;
          this.animatePos = this._animatePos;

          _storeUtils.Store.set(this.generateStoreKey('LT:AnimatePlay'), {
            pen: this,
            stop: true,
          });
        },
      },
      {
        key: 'stopAnimate',
        value: function stopAnimate() {
          this.restore();
          this.initAnimate();

          _storeUtils.Store.set(this.generateStoreKey('LT:AnimatePlay'), {
            pen: this,
            stop: true,
          });

          _storeUtils.Store.set(this.generateStoreKey('LT:render'), {
            pen: this,
            stop: true,
          });
        },
      },
      {
        key: 'animate',
        value: function animate(now) {
          var _this3 = this;

          var timeline = now - this.animateStart;

          if (this.animateFrame > 0) {
            this.animateFrames.forEach(function (item, index) {
              if (_this3.animateFrame < index + 1) {
                timeline += item.duration;
              }
            });
            timeline += this.animatePos;
          } // Finished on animate.

          if (timeline > this.animateDuration) {
            this.animatePos = 0;
            this.animateFrame = 0;

            if (++this.animateCycleIndex >= this.animateCycle && this.animateCycle > 0) {
              this.animateStart = 0;
              this.animateCycleIndex = 0;
              var item = this.animateFrames[this.animateFrames.length - 1];

              if (item) {
                this.restore(item.state);
              }

              _storeUtils.Store.set(this.generateStoreKey('animateEnd'), {
                type: 'node',
                data: this,
              });

              return;
            }

            this.animateStart = now;
            timeline = 0;
          }

          var rectChanged = false;

          for (var i = 0; i < this.animateFrames.length; ++i) {
            var _item = this.animateFrames[i];

            if (timeline >= _item.start && timeline < _item.end) {
              this.dash = _item.state.dash;
              this.strokeStyle = _item.state.strokeStyle;
              this.fillStyle = _item.state.fillStyle;
              this.text = _item.state.text;
              this.font = _item.state.font;
              this.iconFamily = _item.state.iconFamily;
              this.icon = _item.state.icon;
              this.iconSize = _item.state.iconSize;
              this.iconColor = _item.state.iconColor;
              this.visible = _item.state.visible;
              this._animateFrame = i + 1;

              if (this._animateFrame > this.animateFrame) {
                this.animateFrame = 0;
                this.animatePos = 0;
              }

              this._animatePos = timeline - _item.start;
              var rate = this._animatePos / _item.duration;

              if (_item.linear) {
                if (_item.state.rect.x !== _item.initState.rect.x) {
                  this.rect.x =
                    _item.initState.rect.x + (_item.state.rect.x - _item.initState.rect.x) * rate;
                  rectChanged = true;
                }

                if (_item.state.rect.y !== _item.initState.rect.y) {
                  this.rect.y =
                    _item.initState.rect.y + (_item.state.rect.y - _item.initState.rect.y) * rate;
                  rectChanged = true;
                }

                if (_item.state.rect.width !== _item.initState.rect.width) {
                  this.rect.width =
                    _item.initState.rect.width +
                    (_item.state.rect.width - _item.initState.rect.width) * rate;
                  rectChanged = true;
                }

                if (_item.state.rect.height !== _item.initState.rect.height) {
                  this.rect.height =
                    _item.initState.rect.height +
                    (_item.state.rect.height - _item.initState.rect.height) * rate;
                  rectChanged = true;
                }

                this.rect.ex = this.rect.x + this.rect.width;
                this.rect.ey = this.rect.y + this.rect.height;
                this.rect.calcCenter();

                if (_item.initState.z !== undefined && _item.state.z !== _item.initState.z) {
                  this.z = _item.initState.z + (_item.state.z - _item.initState.z) * rate;
                  rectChanged = true;
                }

                if (_item.state.borderRadius !== _item.initState.borderRadius) {
                  this.borderRadius =
                    _item.initState.borderRadius +
                    (_item.state.borderRadius - _item.initState.borderRadius) * rate;
                }

                if (_item.state.lineWidth !== _item.initState.lineWidth) {
                  this.lineWidth =
                    _item.initState.lineWidth +
                    (_item.state.lineWidth - _item.initState.lineWidth) * rate;
                }

                if (_item.state.rotate !== _item.initState.rotate) {
                  this.rotate =
                    _item.initState.rotate + (_item.state.rotate - _item.initState.rotate) * rate;
                  rectChanged = true;
                }

                if (_item.state.globalAlpha !== _item.initState.globalAlpha) {
                  this.globalAlpha =
                    _item.initState.globalAlpha +
                    (_item.state.globalAlpha - _item.initState.globalAlpha) * rate;
                }

                if (_item.state.lineDashOffset) {
                  if (!this.lineDashOffset) {
                    this.lineDashOffset = _item.state.lineDashOffset;
                  } else {
                    this.lineDashOffset += _item.state.lineDashOffset;
                  }
                }

                if (_item.state.value !== _item.initState.value) {
                  this.value =
                    (_item.initState.value || 0) +
                    ((_item.state.value || 0) - (_item.initState.value || 0)) * rate;
                }
              } else {
                this.rect = _item.state.rect;
                this.lineWidth = _item.state.lineWidth;
                this.rotate = _item.state.rotate;
                this.globalAlpha = _item.state.globalAlpha;
                this.lineDashOffset = _item.state.lineDashOffset;
              }
            }
          }

          if (rectChanged) {
            this.init();

            if (!this.animateAlone) {
              _storeUtils.Store.set(this.generateStoreKey('LT:rectChanged'), this);
            }
          }
        },
      },
      {
        key: 'scale',
        value: function scale(_scale, center) {
          if (!center) {
            center = this.rect.center;
          }

          this.rect.x = center.x - (center.x - this.rect.x) * _scale;
          this.rect.y = center.y - (center.y - this.rect.y) * _scale;
          this.z *= _scale;
          this.rect.width *= _scale;
          this.rect.height *= _scale;
          this.rect.ex = this.rect.x + this.rect.width;
          this.rect.ey = this.rect.y + this.rect.height;

          if (this.imageWidth) {
            this.imageWidth *= _scale;
          }

          if (this.imageHeight) {
            this.imageHeight *= _scale;
          }

          this.lastImage = null;
          this.font.fontSize *= _scale;
          this.iconSize *= _scale;

          if (typeof this.paddingLeft === 'number') {
            this.paddingLeft *= _scale;
          }

          if (typeof this.paddingTop === 'number') {
            this.paddingTop *= _scale;
          }

          if (typeof this.paddingRight === 'number') {
            this.paddingRight *= _scale;
          }

          if (typeof this.paddingBottom === 'number') {
            this.paddingBottom *= _scale;
          }

          if (this.rectInParent) {
            if (typeof this.rectInParent.x === 'number') {
              this.rectInParent.x *= _scale;
            }

            if (typeof this.rectInParent.y === 'number') {
              this.rectInParent.y *= _scale;
            }

            if (typeof this.rectInParent.width === 'number') {
              this.rectInParent.width *= _scale;
            }

            if (typeof this.rectInParent.height === 'number') {
              this.rectInParent.height *= _scale;
            }

            if (typeof this.rectInParent.marginLeft === 'number') {
              this.rectInParent.marginLeft *= _scale;
            }

            if (typeof this.rectInParent.marginTop === 'number') {
              this.rectInParent.marginTop *= _scale;
            }

            if (typeof this.rectInParent.marginRight === 'number') {
              this.rectInParent.marginRight *= _scale;
            }

            if (typeof this.rectInParent.marginBottom === 'number') {
              this.rectInParent.marginBottom *= _scale;
            }
          }

          this.rect.calcCenter();

          if (this.animateFrames && this.animateFrames.length) {
            var _iterator8 = _createForOfIteratorHelper(this.animateFrames),
              _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
                var item = _step8.value;

                if (item.initState) {
                  if (!item.initState.scale) {
                    item.initState = new Node(item.initState);
                  }

                  item.initState.scale(_scale, center);
                }

                if (item.state) {
                  if (!item.state.scale) {
                    item.state = new Node(item.state);
                  }

                  item.state.scale(_scale, center);
                } // fix bug

                item.state.font.fontSize = item.initState.font.fontSize;
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }

          this.elementRendered = false;
          this.init();

          if (this.children) {
            var _iterator9 = _createForOfIteratorHelper(this.children),
              _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
                var _item2 = _step9.value;

                _item2.scale(_scale, center);
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          }

          if (this.animateReady) {
            this.animateReady.scale(_scale, center);
          }
        },
      },
      {
        key: 'translate',
        value: function translate(x, y) {
          this.rect.x += x;
          this.rect.y += y;
          this.rect.ex = this.rect.x + this.rect.width;
          this.rect.ey = this.rect.y + this.rect.height;
          this.rect.calcCenter();

          if (this.animateFrames && this.animateFrames.length) {
            var _iterator10 = _createForOfIteratorHelper(this.animateFrames),
              _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
                var frame = _step10.value;
                var initState = frame.initState,
                  state = frame.state;

                if (initState && initState.translate) {
                  initState.translate(x, y);
                }

                if (state && state.translate) {
                  state.translate(x, y);
                }
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          }

          this.init();

          if (this.children) {
            var _iterator11 = _createForOfIteratorHelper(this.children),
              _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
                var item = _step11.value;
                item.translate(x, y);
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }
          }

          if (this.animateReady) {
            this.animateReady.translate(x, y);
          }
        },
      },
      {
        key: 'initRect',
        value: function initRect() {
          this.rect.init();

          if (this.children) {
            this.calcChildrenRect();

            var _iterator12 = _createForOfIteratorHelper(this.children),
              _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
                var item = _step12.value;

                if (item instanceof Node) {
                  item.initRect();
                }
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }
          }
        },
      },
      {
        key: 'nearestAnchor',
        value: function nearestAnchor(pt) {
          var dis = 99999;
          var index = 0;

          for (var i = 0; i < this.rotatedAnchors.length; ++i) {
            var d = (0, _math.distance)(pt, this.rotatedAnchors[i]);

            if (dis > d) {
              dis = d;
              index = i;
            }
          }

          return {
            index: index,
            direction: this.rotatedAnchors[index].direction,
          };
        },
      },
      {
        key: 'hitInSelf',
        value: function hitInSelf(point) {
          var padding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          if (this.rotate % 360 === 0) {
            return this.rect.hit(point, padding);
          }

          var pts = this.rect.toPoints();

          var _iterator13 = _createForOfIteratorHelper(pts),
            _step13;

          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
              var pt = _step13.value;
              pt.rotate(this.rotate, this.rect.center);
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }

          return (0, _utils.pointInRect)(point, pts);
        },
      },
      {
        key: 'hit',
        value: function hit(pt) {
          var padding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var node;

          if (this.hitInSelf(pt, padding)) {
            node = this;
          }

          if (this.children) {
            var len = this.children.length;

            for (var i = len - 1; i > -1; --i) {
              var pen = this.children[i];
              var p = pen.hit(pt, padding);

              if (p) {
                node = p;
                break;
              }
            }
          }

          return node;
        },
      },
      {
        key: 'round',
        value: function round() {
          this.rect.round();

          if (this.children) {
            var _iterator14 = _createForOfIteratorHelper(this.children),
              _step14;

            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done; ) {
                var item = _step14.value;
                item.rect.round();
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }
          }
        },
      },
      {
        key: 'clone',
        value: function clone() {
          var n = new Node(this);
          n.setTID(this.TID);

          var newNode = _.cloneDeep(n);

          newNode.setChildrenIds();
          return newNode;
        },
      },
    ],
    [
      {
        key: 'cloneState',
        value: function cloneState(json) {
          var n = new Node(json);
          delete n.animateFrames;
          return n;
        },
      },
    ],
  );

  return Node;
})(_pen.Pen);

exports.Node = Node;
