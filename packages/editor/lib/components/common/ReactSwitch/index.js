'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread2'));

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties'),
);

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized'),
);

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _createSuper2 = _interopRequireDefault(require('@babel/runtime/helpers/createSuper'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _icons = require('./icons');

var _getBackgroundColor = _interopRequireDefault(require('./getBackgroundColor'));

var _hexColorPropType = _interopRequireDefault(require('./hexColorPropType'));

var _excluded = [
  'disabled',
  'className',
  'offColor',
  'onColor',
  'offHandleColor',
  'onHandleColor',
  'checkedIcon',
  'uncheckedIcon',
  'boxShadow',
  'activeBoxShadow',
  'height',
  'width',
  'handleDiameter',
];

var ReactSwitch = /*#__PURE__*/ (function (_Component) {
  (0, _inherits2.default)(ReactSwitch, _Component);

  var _super = (0, _createSuper2.default)(ReactSwitch);

  function ReactSwitch(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ReactSwitch);
    _this = _super.call(this, props);
    var height = props.height,
      width = props.width,
      handleDiameter = props.handleDiameter,
      checked = props.checked;
    _this.$handleDiameter = handleDiameter || height - 2;
    _this.$checkedPos = Math.max(width - height, width - (height + _this.$handleDiameter) / 2);
    _this.$uncheckedPos = Math.max(0, (height - _this.$handleDiameter) / 2);
    _this.state = {
      $pos: checked ? _this.$checkedPos : _this.$uncheckedPos,
    };
    _this.$lastDragAt = 0;
    _this.$lastKeyUpAt = 0;
    _this.$onMouseDown = _this.$onMouseDown.bind((0, _assertThisInitialized2.default)(_this));
    _this.$onMouseMove = _this.$onMouseMove.bind((0, _assertThisInitialized2.default)(_this));
    _this.$onMouseUp = _this.$onMouseUp.bind((0, _assertThisInitialized2.default)(_this));
    _this.$onTouchStart = _this.$onTouchStart.bind((0, _assertThisInitialized2.default)(_this));
    _this.$onTouchMove = _this.$onTouchMove.bind((0, _assertThisInitialized2.default)(_this));
    _this.$onTouchEnd = _this.$onTouchEnd.bind((0, _assertThisInitialized2.default)(_this));
    _this.$onClick = _this.$onClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.$onInputChange = _this.$onInputChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.$onKeyUp = _this.$onKeyUp.bind((0, _assertThisInitialized2.default)(_this));
    _this.$setHasOutline = _this.$setHasOutline.bind((0, _assertThisInitialized2.default)(_this));
    _this.$unsetHasOutline = _this.$unsetHasOutline.bind(
      (0, _assertThisInitialized2.default)(_this),
    );
    _this.$getInputRef = _this.$getInputRef.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(ReactSwitch, [
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (prevProps.checked === this.props.checked) {
          return;
        }

        var $pos = this.props.checked ? this.$checkedPos : this.$uncheckedPos;
        this.setState({
          $pos: $pos,
        });
      },
    },
    {
      key: '$onDragStart',
      value: function $onDragStart(clientX) {
        this.$inputRef.focus();
        this.setState({
          $startX: clientX,
          $hasOutline: true,
          $dragStartingTime: Date.now(),
        });
      },
    },
    {
      key: '$onDrag',
      value: function $onDrag(clientX) {
        var _this$state = this.state,
          $startX = _this$state.$startX,
          $isDragging = _this$state.$isDragging,
          $pos = _this$state.$pos;
        var checked = this.props.checked;
        var startPos = checked ? this.$checkedPos : this.$uncheckedPos;
        var mousePos = startPos + clientX - $startX; // We need this check to fix a windows glitch where onDrag is triggered onMouseDown in some cases

        if (!$isDragging && clientX !== $startX) {
          this.setState({
            $isDragging: true,
          });
        }

        var newPos = Math.min(this.$checkedPos, Math.max(this.$uncheckedPos, mousePos)); // Prevent unnecessary rerenders

        if (newPos !== $pos) {
          this.setState({
            $pos: newPos,
          });
        }
      },
    },
    {
      key: '$onDragStop',
      value: function $onDragStop(event) {
        var _this$state2 = this.state,
          $pos = _this$state2.$pos,
          $isDragging = _this$state2.$isDragging,
          $dragStartingTime = _this$state2.$dragStartingTime;
        var checked = this.props.checked;
        var halfwayCheckpoint = (this.$checkedPos + this.$uncheckedPos) / 2; // Simulate clicking the handle

        var timeSinceStart = Date.now() - $dragStartingTime;

        if (!$isDragging || timeSinceStart < 250) {
          this.$onChange(event); // Handle dragging from checked position
        } else if (checked) {
          if ($pos > halfwayCheckpoint) {
            this.setState({
              $pos: this.$checkedPos,
            });
          } else {
            this.$onChange(event);
          } // Handle dragging from unchecked position
        } else if ($pos < halfwayCheckpoint) {
          this.setState({
            $pos: this.$uncheckedPos,
          });
        } else {
          this.$onChange(event);
        }

        this.setState({
          $isDragging: false,
          $hasOutline: false,
        });
        this.$lastDragAt = Date.now();
      },
    },
    {
      key: '$onMouseDown',
      value: function $onMouseDown(event) {
        event.preventDefault(); // Ignore right click and scroll

        if (typeof event.button === 'number' && event.button !== 0) {
          return;
        }

        this.$onDragStart(event.clientX);
        window.addEventListener('mousemove', this.$onMouseMove);
        window.addEventListener('mouseup', this.$onMouseUp);
      },
    },
    {
      key: '$onMouseMove',
      value: function $onMouseMove(event) {
        event.preventDefault();
        this.$onDrag(event.clientX);
      },
    },
    {
      key: '$onMouseUp',
      value: function $onMouseUp(event) {
        this.$onDragStop(event);
        window.removeEventListener('mousemove', this.$onMouseMove);
        window.removeEventListener('mouseup', this.$onMouseUp);
      },
    },
    {
      key: '$onTouchStart',
      value: function $onTouchStart(event) {
        this.$checkedStateFromDragging = null;
        this.$onDragStart(event.touches[0].clientX);
      },
    },
    {
      key: '$onTouchMove',
      value: function $onTouchMove(event) {
        this.$onDrag(event.touches[0].clientX);
      },
    },
    {
      key: '$onTouchEnd',
      value: function $onTouchEnd(event) {
        event.preventDefault();
        this.$onDragStop(event);
      },
    },
    {
      key: '$onInputChange',
      value: function $onInputChange(event) {
        // This condition is unfortunately needed in some browsers where the input's change event might get triggered
        // right after the dragstop event is triggered (occurs when dropping over a label element)
        if (Date.now() - this.$lastDragAt > 50) {
          this.$onChange(event); // Prevent clicking label, but not key activation from setting outline to true - yes, this is absurd

          if (Date.now() - this.$lastKeyUpAt > 50) {
            this.setState({
              $hasOutline: false,
            });
          }
        }
      },
    },
    {
      key: '$onKeyUp',
      value: function $onKeyUp() {
        this.$lastKeyUpAt = Date.now();
      },
    },
    {
      key: '$setHasOutline',
      value: function $setHasOutline() {
        this.setState({
          $hasOutline: true,
        });
      },
    },
    {
      key: '$unsetHasOutline',
      value: function $unsetHasOutline() {
        this.setState({
          $hasOutline: false,
        });
      },
    },
    {
      key: '$getInputRef',
      value: function $getInputRef(el) {
        this.$inputRef = el;
      },
    },
    {
      key: '$onClick',
      value: function $onClick(event) {
        event.preventDefault();
        this.$inputRef.focus();
        this.$onChange(event);
        this.setState({
          $hasOutline: false,
        });
      },
    },
    {
      key: '$onChange',
      value: function $onChange(event) {
        var _this$props = this.props,
          checked = _this$props.checked,
          onChange = _this$props.onChange,
          id = _this$props.id;
        onChange(!checked, event, id);
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this$props2 = this.props,
          disabled = _this$props2.disabled,
          className = _this$props2.className,
          offColor = _this$props2.offColor,
          onColor = _this$props2.onColor,
          offHandleColor = _this$props2.offHandleColor,
          onHandleColor = _this$props2.onHandleColor,
          checkedIcon = _this$props2.checkedIcon,
          uncheckedIcon = _this$props2.uncheckedIcon,
          boxShadow = _this$props2.boxShadow,
          activeBoxShadow = _this$props2.activeBoxShadow,
          height = _this$props2.height,
          width = _this$props2.width,
          handleDiameter = _this$props2.handleDiameter,
          rest = (0, _objectWithoutProperties2.default)(_this$props2, _excluded);
        var _this$state3 = this.state,
          $pos = _this$state3.$pos,
          $isDragging = _this$state3.$isDragging,
          $hasOutline = _this$state3.$hasOutline;
        var rootStyle = {
          position: 'relative',
          display: 'inline-block',
          textAlign: 'left',
          opacity: disabled ? 0.5 : 1,
          direction: 'ltr',
          borderRadius: 2,
          WebkitTransition: 'opacity 0.25s',
          MozTransition: 'opacity 0.25s',
          transition: 'opacity 0.25s',
          touchAction: 'none',
          WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          userSelect: 'none',
        };
        var backgroundStyle = {
          height: height,
          width: width,
          margin: Math.max(0, (this.$handleDiameter - height) / 2),
          position: 'relative',
          background: (0, _getBackgroundColor.default)(
            $pos,
            this.$checkedPos,
            this.$uncheckedPos,
            offColor,
            onColor,
          ),
          borderRadius: 2,
          border: '1px solid #096DD9',
          cursor: disabled ? 'default' : 'pointer',
          WebkitTransition: $isDragging ? null : 'background 0.25s',
          MozTransition: $isDragging ? null : 'background 0.25s',
          transition: $isDragging ? null : 'background 0.25s',
        };
        var checkedIconStyle = {
          height: height,
          width: Math.min(height * 1.5, width - (this.$handleDiameter + height) / 2 + 1),
          position: 'relative',
          textAlign: 'center',
          opacity: ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos),
          pointerEvents: 'none',
          WebkitTransition: $isDragging ? null : 'opacity 0.25s',
          MozTransition: $isDragging ? null : 'opacity 0.25s',
          transition: $isDragging ? null : 'opacity 0.25s',
        };
        var uncheckedIconStyle = {
          height: height,
          width: Math.min(height * 1.5, width - (this.$handleDiameter + height) / 2 + 1),
          position: 'absolute',
          textAlign: 'center',
          opacity: 1 - ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos),
          right: 0,
          top: 0,
          pointerEvents: 'none',
          WebkitTransition: $isDragging ? null : 'opacity 0.25s',
          MozTransition: $isDragging ? null : 'opacity 0.25s',
          transition: $isDragging ? null : 'opacity 0.25s',
        };
        var handleStyle = {
          height: this.$handleDiameter,
          width: this.$handleDiameter,
          background: (0, _getBackgroundColor.default)(
            $pos,
            this.$checkedPos,
            this.$uncheckedPos,
            offHandleColor,
            onHandleColor,
          ),
          display: 'inline-block',
          textAlign: 'center',
          cursor: disabled ? 'default' : 'pointer',
          borderRadius: 0,
          position: 'absolute',
          transform: 'translateX('.concat($pos, 'px)'),
          top: Math.max(0, (height - this.$handleDiameter) / 2),
          outline: 0,
          boxShadow: $hasOutline ? activeBoxShadow : boxShadow,
          border: 0,
          WebkitTransition: $isDragging
            ? null
            : 'background-color 0.25s, transform 0.25s, box-shadow 0.15s',
          MozTransition: $isDragging
            ? null
            : 'background-color 0.25s, transform 0.25s, box-shadow 0.15s',
          transition: $isDragging
            ? null
            : 'background-color 0.25s, transform 0.25s, box-shadow 0.15s',
        };
        var inputStyle = {
          border: 0,
          clip: 'rect(0 0 0 0)',
          height: 1,
          margin: -1,
          overflow: 'hidden',
          padding: 0,
          position: 'absolute',
          width: 1,
          outline: 'none',
        };
        return /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: className,
            style: rootStyle,
          },
          /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              className: 'react-switch-bg',
              style: backgroundStyle,
              onClick: disabled ? null : this.$onClick,
              onMouseDown: function onMouseDown(e) {
                return e.preventDefault();
              },
            },
            checkedIcon &&
              /*#__PURE__*/ _react.default.createElement(
                'div',
                {
                  style: checkedIconStyle,
                },
                checkedIcon,
              ),
            uncheckedIcon &&
              /*#__PURE__*/ _react.default.createElement(
                'div',
                {
                  style: uncheckedIconStyle,
                },
                uncheckedIcon,
              ),
          ),
          /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              className: 'react-switch-handle',
              style: handleStyle,
              onClick: function onClick(e) {
                return e.preventDefault();
              },
              onMouseDown: disabled ? null : this.$onMouseDown,
              onTouchStart: disabled ? null : this.$onTouchStart,
              onTouchMove: disabled ? null : this.$onTouchMove,
              onTouchEnd: disabled ? null : this.$onTouchEnd,
              onTouchCancel: disabled ? null : this.$unsetHasOutline,
            },
            this.props.checked ? this.props.uncheckedIcon : this.props.checkedIcon,
          ),
          /*#__PURE__*/ _react.default.createElement(
            'input',
            (0, _objectSpread2.default)(
              (0, _objectSpread2.default)(
                {
                  type: 'checkbox',
                  role: 'switch',
                  disabled: disabled,
                  style: inputStyle,
                },
                rest,
              ),
              {},
              {
                /* anything below should NOT get overriden by ...rest */
                ref: this.$getInputRef,
                onFocus: this.$setHasOutline,
                onBlur: this.$unsetHasOutline,
                onKeyUp: this.$onKeyUp,
                onChange: this.$onInputChange,
              },
            ),
          ),
        );
      },
    },
  ]);
  return ReactSwitch;
})(_react.Component);

ReactSwitch.propTypes = {
  checked: _propTypes.default.bool.isRequired,
  onChange: _propTypes.default.func.isRequired,
  disabled: _propTypes.default.bool,
  offColor: _hexColorPropType.default,
  onColor: _hexColorPropType.default,
  offHandleColor: _hexColorPropType.default,
  onHandleColor: _hexColorPropType.default,
  handleDiameter: _propTypes.default.number,
  uncheckedIcon: _propTypes.default.oneOfType([
    _propTypes.default.bool,
    _propTypes.default.element,
  ]),
  checkedIcon: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.element]),
  boxShadow: _propTypes.default.string,
  activeBoxShadow: _propTypes.default.string,
  height: _propTypes.default.number,
  width: _propTypes.default.number,
  id: _propTypes.default.string,
  className: _propTypes.default.string,
};
ReactSwitch.defaultProps = {
  disabled: false,
  offColor: '#888',
  onColor: '#080',
  offHandleColor: '#fff',
  onHandleColor: '#fff',
  uncheckedIcon: _icons.uncheckedIcon,
  checkedIcon: _icons.checkedIcon,
  boxShadow: null,
  activeBoxShadow: '0 0 2px 3px #3bf',
  height: 28,
  width: 56,
};
var _default = ReactSwitch;
exports.default = _default;
