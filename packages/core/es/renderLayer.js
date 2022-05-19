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

import { Store } from '@top-datav/store-utils';
import { Canvas } from './canvas';
import { rgba } from './utils/math';
export var RenderLayer = /*#__PURE__*/ (function (_Canvas) {
  _inherits(RenderLayer, _Canvas);

  var _super = _createSuper(RenderLayer);

  function RenderLayer(parentElem) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var TID = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, RenderLayer);

    _this = _super.call(this, parentElem, options, TID);
    _this.parentElem = void 0;
    _this.options = void 0;
    _this.offscreen = void 0;
    _this.data = null;
    _this.bkImg = void 0;
    _this.bkImgRect = void 0;

    _this.render = function () {
      if (_this.data && _this.data.bkImage && !_this.bkImgRect) {
        _this.loadBkImg(_this.render);

        return;
      }

      if (!_this.width || !_this.height || !_this.offscreen) {
        return;
      }

      var ctx = _this.canvas.getContext('2d');

      ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);

      if (_this.data.bkColor || _this.options.bkColor) {
        ctx.fillStyle = _this.data.bkColor || _this.options.bkColor;
        ctx.fillRect(0, 0, _this.width, _this.height);
      }

      if (_this.bkImg && _this.bkImgRect) {
        ctx.drawImage(_this.bkImg, 0, 0, _this.width, _this.height);
      }

      if (_this.data.grid || _this.options.grid) {
        _this.grid();
      }

      if (_this.data.rule || _this.options.rule) {
        _this.rule();
      }

      ctx.drawImage(_this.offscreen, 0, 0, _this.width, _this.height);
    };

    _this.parentElem = parentElem;
    _this.options = options;
    _this.offscreen = Store.get(_this.generateStoreKey('LT:offscreen'));

    _this.parentElem.appendChild(_this.canvas);

    _this.data = Store.get(_this.generateStoreKey('topology-data'));
    return _this;
  }

  _createClass(RenderLayer, [
    {
      key: 'loadBkImg',
      value: function loadBkImg(cb) {
        var _this2 = this;

        if (!this.data.bkImage) {
          return;
        }

        this.bkImg = new Image(); // this.bkImg.crossOrigin = 'anonymous';

        this.bkImg.src = this.data.bkImage;

        this.bkImg.onload = function () {
          _this2.bkImgRect = _this2.coverRect(
            _this2.canvas.width,
            _this2.canvas.height,
            _this2.bkImg.width,
            _this2.bkImg.height,
          );

          if (cb) {
            cb();
          }
        };
      },
    },
    {
      key: 'clearBkImg',
      value: function clearBkImg() {
        this.bkImgRect = null;
      },
    },
    {
      key: 'rule',
      value: function rule() {
        var ctx = this.canvas.getContext('2d');
        ctx.save();
        ctx.lineWidth = 1;
        ctx.strokeStyle = rgba(0.7, this.data.ruleColor || this.options.ruleColor || '#888');
        ctx.beginPath();

        for (var i = 10; i < this.width; i += 10) {
          ctx.moveTo(i, 0);
          ctx.lineTo(i, 5);
        }

        for (var _i = 10; _i < this.height; _i += 10) {
          ctx.moveTo(0, _i);
          ctx.lineTo(5, _i);
        }

        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = this.data.ruleColor || this.options.ruleColor || '#888';
        ctx.fillStyle = ctx.strokeStyle;

        for (var _i2 = 100; _i2 < this.width; _i2 += 100) {
          ctx.moveTo(_i2, 0);
          ctx.lineTo(_i2, 10);
          ctx.fillText(_i2.toString(), _i2 + 4, 16);
        }

        for (var _i3 = 100; _i3 < this.height; _i3 += 100) {
          ctx.moveTo(0, _i3);
          ctx.lineTo(10, _i3);
        }

        ctx.stroke();

        for (var _i4 = 100; _i4 < this.height; _i4 += 100) {
          ctx.save();
          ctx.beginPath();
          ctx.translate(16, _i4 - 4);
          ctx.rotate((270 * Math.PI) / 180);
          ctx.fillText(_i4.toString(), 0, 0);
          ctx.restore();
        }

        ctx.restore();
      },
    },
    {
      key: 'grid',
      value: function grid() {
        var ctx = this.canvas.getContext('2d');
        ctx.save();
        ctx.lineWidth = 1;
        ctx.strokeStyle = this.data.gridColor || this.options.gridColor || '#f3f3f3';
        ctx.beginPath();
        var size = this.data.gridSize || this.options.gridSize;

        for (var i = size; i < this.width; i += size) {
          ctx.moveTo(i, 0);
          ctx.lineTo(i, this.height);
        }

        for (var _i5 = size; _i5 < this.height; _i5 += size) {
          ctx.moveTo(0, _i5);
          ctx.lineTo(this.width, _i5);
        }

        ctx.stroke();
        ctx.restore();
      },
    },
    {
      key: 'coverRect',
      value: function coverRect(canvasWidth, canvasHeight, imgWidth, imgHeight) {
        var x = 0;
        var y = 0;
        var width = imgWidth;
        var height = imgHeight;

        if (imgWidth > imgHeight || (imgWidth === imgHeight && canvasWidth < canvasHeight)) {
          width = (canvasWidth * height) / canvasHeight;
          x = (imgWidth - width) / 2;
        } else if (imgWidth < imgHeight || (imgWidth === imgHeight && canvasWidth > canvasHeight)) {
          height = (canvasHeight * width) / canvasWidth;
          y = (imgHeight - height) / 2;
        }

        return {
          x: x,
          y: y,
          width: width,
          height: height,
        };
      },
    },
  ]);

  return RenderLayer;
})(Canvas);
