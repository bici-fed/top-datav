'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread2'));

var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized'),
);

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _createSuper2 = _interopRequireDefault(require('@babel/runtime/helpers/createSuper'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _react = _interopRequireDefault(require('react'));

var _reactDraggable = require('react-draggable');

var _lodash = _interopRequireDefault(require('lodash.debounce'));

var _cashDom = _interopRequireDefault(require('cash-dom'));

var _bind = _interopRequireDefault(require('classnames/bind'));

var _ResizePanelModule = _interopRequireDefault(require('./ResizePanel.module.css'));

// @ts-nocheck
var cx = _bind.default.bind(_ResizePanelModule.default);

var ResizePanelProps = /*#__PURE__*/ (0, _createClass2.default)(function ResizePanelProps() {
  (0, _classCallCheck2.default)(this, ResizePanelProps);
  this.direction = void 0;
  this.containerClass = void 0;
  this.style = void 0;
  this.handleClass = void 0;
  this.borderClass = void 0;
  this.children = void 0;
});
var ResizePanelState = /*#__PURE__*/ (0, _createClass2.default)(function ResizePanelState() {
  (0, _classCallCheck2.default)(this, ResizePanelState);
  this.size = void 0;
});

var ResizePanel = /*#__PURE__*/ (function (_React$Component) {
  (0, _inherits2.default)(ResizePanel, _React$Component);

  var _super = (0, _createSuper2.default)(ResizePanel);

  function ResizePanel(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ResizePanel);
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
    _this.contentRef = /*#__PURE__*/ _react.default.createRef();
    _this.wrapperRef = /*#__PURE__*/ _react.default.createRef();
    _this.validateSize = (0, _lodash.default)(_this.validateSize, 100).bind(
      (0, _assertThisInitialized2.default)(_this),
    );
    return _this;
  }

  (0, _createClass2.default)(ResizePanel, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var content = this.contentRef.current;
        var actualContent = content.children[0];
        var initialSize = this.isHorizontal()
          ? (0, _cashDom.default)(actualContent).outerWidth(true)
          : (0, _cashDom.default)(actualContent).outerHeight(true); // Initialize the size value based on the content's current size

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
          ? (0, _cashDom.default)(actualContent).outerWidth(true) -
            (0, _cashDom.default)(actualContent).outerWidth()
          : (0, _cashDom.default)(actualContent).outerHeight(true) -
            (0, _cashDom.default)(actualContent).outerHeight();
        minSize += margins;

        if (this.state.size !== minSize) {
          this.setState(
            (0, _objectSpread2.default)(
              (0, _objectSpread2.default)({}, this.state),
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
              (0, _objectSpread2.default)(
                (0, _objectSpread2.default)({}, this.state),
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

        var containerStyle = (0, _objectSpread2.default)({}, this.props.style) || {};

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
          /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              key: 'content',
              ref: this.contentRef,
              className: contentClassName,
              style: contentStyle,
            },
            _react.default.Children.only(this.props.children),
          ),
        ];

        var handleClick = function handleClick() {
          _this2.setState({
            size: 0,
          });
        };

        var handle = /*#__PURE__*/ _react.default.createElement(
          _reactDraggable.DraggableCore,
          (0, _objectSpread2.default)(
            (0, _objectSpread2.default)(
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
          /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              className: resizeBarClasses,
            },
            /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                className: handleClasses,
                onClick: handleClick,
              },
              /*#__PURE__*/ _react.default.createElement('span', null),
            ),
          ),
        ); // Insert the handle at the beginning of the content if our directio is west or north

        if (direction === 'w' || direction === 'n') {
          content.unshift(handle);
        } else {
          content.push(handle);
        }

        return /*#__PURE__*/ _react.default.createElement(
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
})(_react.default.Component);

var _default = ResizePanel;
exports.default = _default;
