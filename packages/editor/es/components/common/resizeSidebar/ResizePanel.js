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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

// @ts-nocheck
import React from 'react';
import { DraggableCore } from 'react-draggable';
import debounce from 'lodash.debounce';
import $ from 'cash-dom';
import classNames from 'classnames/bind';
import style from './ResizePanel.module.css';
var cx = classNames.bind(style);

var ResizePanelProps = /*#__PURE__*/ _createClass(function ResizePanelProps() {
  _classCallCheck(this, ResizePanelProps);

  this.direction = void 0;
  this.containerClass = void 0;
  this.style = void 0;
  this.handleClass = void 0;
  this.borderClass = void 0;
  this.children = void 0;
});

var ResizePanelState = /*#__PURE__*/ _createClass(function ResizePanelState() {
  _classCallCheck(this, ResizePanelState);

  this.size = void 0;
});

var ResizePanel = /*#__PURE__*/ (function (_React$Component) {
  _inherits(ResizePanel, _React$Component);

  var _super = _createSuper(ResizePanel);

  function ResizePanel(props) {
    var _this;

    _classCallCheck(this, ResizePanel);

    _this = _super.call(this, props);
    _this.contentRef = void 0;
    _this.wrapperRef = void 0;

    _this.isHorizontal = function () {
      return _this.props.direction === 'w' || _this.props.direction === 'e';
    };

    _this.handleDrag = function (e, ui) {
      var direction = _this.props.direction;
      var factor = direction === 'e' || direction === 's' ? -1 : 1; // modify the size based on the drag delta

      var delta = _this.isHorizontal() ? ui.deltaX : ui.deltaY;

      _this.setState(function (s, p) {
        return {
          size: Math.max(10, s.size - delta * factor),
        };
      });
    };

    _this.handleDragEnd = function (e, ui) {
      _this.validateSize();
    };

    _this.state = {
      size: 0,
    };
    _this.contentRef = /*#__PURE__*/ React.createRef();
    _this.wrapperRef = /*#__PURE__*/ React.createRef();
    _this.validateSize = debounce(_this.validateSize, 100).bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ResizePanel, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var content = this.contentRef.current;
        var actualContent = content.children[0];
        var initialSize = this.isHorizontal()
          ? $(actualContent).outerWidth(true)
          : $(actualContent).outerHeight(true); // Initialize the size value based on the content's current size

        this.setState({
          size: initialSize,
        });
        this.validateSize();
      },
    },
    {
      key: 'validateSize',
      value: function validateSize() {
        var isHorizontal = this.isHorizontal();
        var content = this.contentRef.current;
        var wrapper = this.wrapperRef.current;
        var actualContent = content.children[0];
        var containerParent = wrapper.parentElement; //
        // Or if our size doesn't equal the actual content size, then we
        // must have pushed past the min size of the content, so resize back
        //let minSize = isHorizontal ? $(actualContent).outerWidth(true) : $(actualContent).outerHeight(true);

        var minSize = isHorizontal ? actualContent.scrollWidth : actualContent.scrollHeight;
        var margins = isHorizontal
          ? $(actualContent).outerWidth(true) - $(actualContent).outerWidth()
          : $(actualContent).outerHeight(true) - $(actualContent).outerHeight();
        minSize += margins;

        if (this.state.size !== minSize) {
          this.setState(
            _objectSpread(
              _objectSpread({}, this.state),
              {},
              {
                size: minSize,
              },
            ),
          );
        } else {
          // If our resizing has left the parent container's content overflowing
          // then we need to shrink back down to fit
          var overflow = isHorizontal
            ? containerParent.scrollWidth - containerParent.clientWidth
            : containerParent.scrollHeight - containerParent.clientHeight;

          if (overflow) {
            this.setState(
              _objectSpread(
                _objectSpread({}, this.state),
                {},
                {
                  size: isHorizontal
                    ? actualContent.clientWidth - overflow
                    : actualContent.clientHeight - overflow,
                },
              ),
            );
          }
        }
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var dragHandlers = {
          onDrag: this.handleDrag,
          onStop: this.handleDragEnd,
        };
        var direction = this.props.direction;
        var isHorizontal = this.isHorizontal();
        var containerClass = cx({
          ContainerHorizontal: isHorizontal,
          ContainerVertical: !isHorizontal,
        });

        if (this.props.containerClass) {
          containerClass += ' '.concat(this.props.containerClass);
        }

        var containerStyle = _objectSpread({}, this.props.style) || {};

        if (this.state.size !== 0) {
          containerStyle.flexGrow = 0;
          containerStyle[isHorizontal ? 'width' : 'height'] = 'auto';
        }

        var handleClasses =
          this.props.handleClass ||
          cx({
            ResizeHandleHorizontal: isHorizontal,
            ResizeHandleVertical: !isHorizontal,
          });
        var resizeBarClasses =
          this.props.borderClass ||
          cx({
            ResizeBarHorizontal: isHorizontal,
            ResizeBarVertical: !isHorizontal,
          });
        var contentStyle = isHorizontal
          ? {
              width: this.state.size + 'px',
            }
          : {
              height: this.state.size + 'px',
            };
        var contentClassName = cx('ResizeContent', {
          ResizeContentHorizontal: isHorizontal,
          ResizeContentVertical: !isHorizontal,
        });
        var content = [
          /*#__PURE__*/ React.createElement(
            'div',
            {
              key: 'content',
              ref: this.contentRef,
              className: contentClassName,
              style: contentStyle,
            },
            React.Children.only(this.props.children),
          ),
        ];

        var handleClick = function handleClick() {
          _this2.setState({
            size: 0,
          });
        };

        var handle = /*#__PURE__*/ React.createElement(
          DraggableCore,
          _objectSpread(
            _objectSpread(
              {
                key: 'handle',
              },
              dragHandlers,
            ),
            {},
            {
              allowAnyClick: true,
            },
          ),
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: resizeBarClasses,
            },
            /*#__PURE__*/ React.createElement(
              'div',
              {
                className: handleClasses,
                onClick: handleClick,
              },
              /*#__PURE__*/ React.createElement('span', null),
            ),
          ),
        ); // Insert the handle at the beginning of the content if our directio is west or north

        if (direction === 'w' || direction === 'n') {
          content.unshift(handle);
        } else {
          content.push(handle);
        }

        return /*#__PURE__*/ React.createElement(
          'div',
          {
            ref: this.wrapperRef,
            className: containerClass,
            style: containerStyle,
          },
          content,
        );
      },
    },
  ]);

  return ResizePanel;
})(React.Component);

export default ResizePanel;
