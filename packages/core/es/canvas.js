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
import { Layer } from './layer';
export var Canvas = /*#__PURE__*/ (function (_Layer) {
  _inherits(Canvas, _Layer);

  var _super = _createSuper(Canvas);

  function Canvas(parentElem) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var TID = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, Canvas);

    _this = _super.call(this, TID);
    _this.parentElem = void 0;
    _this.options = void 0;
    _this.data = void 0;
    _this.canvas = document.createElement('canvas');
    _this.width = 0;
    _this.height = 0;
    _this.parentElem = parentElem;
    _this.options = options;
    _this.data = Store.get(_this.generateStoreKey('topology-data'));
    _this.canvas.style.position = 'absolute';
    _this.canvas.style.left = '0';
    _this.canvas.style.top = '0';
    _this.canvas.style.outline = 'none';

    if (!Canvas.dpiRatio) {
      if (!options.extDpiRatio && options.extDpiRatio !== 0) {
        if (window.devicePixelRatio > 1) {
          options.extDpiRatio = 0.25;
        } else {
          options.extDpiRatio = 0;
        }
      }

      Canvas.dpiRatio = window.devicePixelRatio + options.extDpiRatio;

      if (Canvas.dpiRatio < 1) {
        Canvas.dpiRatio = 1;
      }
    }

    return _this;
  }

  _createClass(Canvas, [
    {
      key: 'resize',
      value: function resize(size) {
        if (size) {
          this.width = size.width | 0;
          this.height = size.height | 0;
        } else {
          if (this.options.width && this.options.width !== 'auto') {
            this.width = +this.options.width;
          } else {
            this.width = this.parentElem.clientWidth;
          }

          if (this.options.height && this.options.height !== 'auto') {
            this.height = +this.options.height;
          } else {
            this.height = this.parentElem.clientHeight;
          }
        }

        this.canvas.style.width = this.width + 'px';
        this.canvas.style.height = this.height + 'px';
        this.canvas.width = (this.width * Canvas.dpiRatio) | 0;
        this.canvas.height = (this.height * Canvas.dpiRatio) | 0;
        this.canvas.getContext('2d').scale(Canvas.dpiRatio, Canvas.dpiRatio);
        Store.set(this.generateStoreKey('LT:size'), {
          width: this.canvas.width,
          height: this.canvas.height,
        });
      },
    },
    {
      key: 'render',
      value: function render() {
        var ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      },
    },
    {
      key: 'getDpiRatio',
      value: function getDpiRatio() {
        return Canvas.dpiRatio;
      },
    },
  ]);

  return Canvas;
})(Layer);
Canvas.dpiRatio = 0;
