'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/input/style');

var _input = _interopRequireDefault(require('antd/es/input'));

require('antd/es/form/style');

var _form = _interopRequireDefault(require('antd/es/form'));

require('antd/es/modal/style');

var _modal = _interopRequireDefault(require('antd/es/modal'));

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

require('antd/es/message/style');

var _message2 = _interopRequireDefault(require('antd/es/message'));

var _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

var _createForOfIteratorHelper2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createForOfIteratorHelper'),
);

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _createSuper2 = _interopRequireDefault(require('@babel/runtime/helpers/createSuper'));

var _react = _interopRequireWildcard(require('react'));

var _indexModule = _interopRequireDefault(require('./index.module.css'));

var _api = require('../data/api');

var _serializing = require('../utils/serializing');

var _ = _interopRequireWildcard(require('lodash'));

var CanvasContextMenu = /*#__PURE__*/ (function (_Component) {
  (0, _inherits2.default)(CanvasContextMenu, _Component);

  var _super = (0, _createSuper2.default)(CanvasContextMenu);

  function CanvasContextMenu() {
    var _this;

    (0, _classCallCheck2.default)(this, CanvasContextMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      newComVisible: false,
      componentName: '添加到自定义组件',
    };
    _this.formRef = /*#__PURE__*/ _react.default.createRef();

    _this.onUncombine = function () {
      if (!_this.props.data.node) {
        return;
      }

      _this.props.canvas.uncombine(_this.props.data.node);

      _this.props.canvas.render();

      _this.props.onNeedHide();

      _this.props.setIsSave(false);
    };

    _this.onLock = function () {
      _this.props.data.locked = 2;

      if (_this.props.data.node) {
        _this.props.data.node.locked = _this.props.data.locked;
      }

      if (_this.props.data.nodes) {
        var _iterator = (0, _createForOfIteratorHelper2.default)(_this.props.data.nodes),
          _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var item = _step.value;
            item.locked = _this.props.data.locked;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      _this.props.canvas.render(true);

      _this.props.setIsSave(false);
    };

    _this.onNewComponent = function () {
      _this.setState({
        newComVisible: true,
      });
    };

    _this.handleOk = function () {
      _this.onCheck();
    };

    _this.handleCancel = function () {
      _this.setState({
        newComVisible: false,
      });
    };

    _this.onCheck = /*#__PURE__*/ (0, _asyncToGenerator2.default)(
      /*#__PURE__*/ _regenerator.default.mark(function _callee() {
        var values, cloneNodes, cloneNode, result, newNode;
        return _regenerator.default.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _this.formRef.current.validateFields(['componentName']);

                case 3:
                  values = _context.sent;

                  _this.setState({
                    componentName: values.componentName,
                  });

                  _this.setState({
                    newComVisible: false,
                  });

                  cloneNodes = _.cloneDeep(_this.props.data.nodes);
                  cloneNode = _.cloneDeep(_this.props.data.node);
                  result = [];

                  if (cloneNodes && cloneNodes.length > 0) {
                    _this.uncombineNodes(cloneNodes, result);
                  } else {
                    _this.uncombineNodes([cloneNode], result);
                  }

                  newNode = _this.props.canvas.toComponent(result);

                  _this.props.canvas.render();

                  _this
                    .saveNewComponent({
                      componentName: _this.state.componentName,
                      componentProperty: JSON.stringify(newNode, _serializing.replacer),
                    })
                    .then(function (res) {
                      _this.setState({
                        newComVisible: false,
                      });

                      _message2.default.info('添加到自定义组件成功').then(function () {
                        _message2.default.destroy();
                      });

                      _this.props.getNewComponents();

                      _this.formRef.current.resetFields();
                    });

                  _context.next = 19;
                  break;

                case 15:
                  _context.prev = 15;
                  _context.t0 = _context['catch'](0);
                  console.error('Failed:', _context.t0);

                  _this.formRef.current.resetFields();

                case 19:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [[0, 15]],
        );
      }),
    );

    _this.uncombineNodes = function (nodes, result) {
      (nodes || []).map(function (item) {
        if (item.name == 'combine') {
          _this.uncombineNodes(item.children, result);
        } else {
          if (
            'property' in item &&
            item.property &&
            item.property.dataPointSelectedRows != undefined
          ) {
            item.property.dataPointSelectedRows = [];
            item.property.dataPointParam.qtDataList = [];
          }

          result.push(item);
        }
      });
    };

    _this.renderNewComponentModal = function () {
      return /*#__PURE__*/ _react.default.createElement(
        _modal.default,
        {
          title: '\u6DFB\u52A0\u5230\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
          visible: _this.state.newComVisible,
          onOk: _this.handleOk,
          onCancel: _this.handleCancel,
          maskClosable: false,
          okText: '\u786E\u5B9A',
          cancelText: '\u53D6\u6D88',
          getContainer: function getContainer() {
            return document.querySelector('#editLayout');
          },
        },
        /*#__PURE__*/ _react.default.createElement(
          _form.default,
          {
            ref: _this.formRef,
            preserve: false,
          },
          /*#__PURE__*/ _react.default.createElement(
            _form.default.Item,
            {
              rules: [
                {
                  required: true,
                  message: '请输入组件名称',
                },
                {
                  min: 1,
                  message: '不低于1个字符',
                },
              ],
              label: '\u7EC4\u4EF6\u540D\u5B57',
              name: 'componentName',
            },
            /*#__PURE__*/ _react.default.createElement(_input.default, {
              placeholder: '\u8F93\u5165\u7EC4\u4EF6\u540D\u5B57',
              id: 'componentName',
              maxLength: 20,
            }),
          ),
        ),
      );
    };

    return _this;
  }

  (0, _createClass2.default)(CanvasContextMenu, [
    {
      key: 'saveNewComponent',
      value: function saveNewComponent(params) {
        return (0, _api.clientParam)(this.props.combineCom.apiURL).post(
          this.props.combineCom.add.url,
          params,
          {
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              token: this.props.combineCom.token,
              'Content-Type': 'application/json',
            },
          },
        );
      },
    },
    {
      key: 'onTop',
      value: function onTop() {
        if (this.props.data.node) {
          this.props.canvas.top(this.props.data.node);
        }

        if (this.props.data.nodes) {
          var _iterator2 = (0, _createForOfIteratorHelper2.default)(this.props.data.nodes),
            _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var item = _step2.value;
              this.props.canvas.top(item);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }

        this.props.canvas.render();
        this.props.onNeedHide();
        this.props.setIsSave(false);
      },
    },
    {
      key: 'onBottom',
      value: function onBottom() {
        if (this.props.data.node) {
          this.props.canvas.bottom(this.props.data.node);
        }

        if (this.props.data.nodes) {
          var _iterator3 = (0, _createForOfIteratorHelper2.default)(this.props.data.nodes),
            _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var item = _step3.value;
              this.props.canvas.bottom(item);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }

        this.props.canvas.render();
        this.props.onNeedHide();
        this.props.setIsSave(false);
      },
    },
    {
      key: 'onCombine',
      value: function onCombine(stand) {
        if (!this.props.data.nodes) {
          return;
        }

        this.props.canvas.combine(this.props.data.nodes, stand);
        this.props.canvas.render();
        this.props.onNeedHide();
        this.props.setIsSave(false);
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: _indexModule.default.menus,
            style: {
              display: this.props.show ? 'block' : 'none',
            },
          },
          /*#__PURE__*/ _react.default.createElement(
            'div',
            null,
            /*#__PURE__*/ _react.default.createElement(
              'a',
              {
                className:
                  this.props.data.node || this.props.data.nodes
                    ? ''
                    : _indexModule.default.disabled,
                onClick: this.onTop.bind(this),
              },
              '\u7F6E\u9876',
            ),
          ),
          /*#__PURE__*/ _react.default.createElement(
            'div',
            null,
            /*#__PURE__*/ _react.default.createElement(
              'a',
              {
                className:
                  this.props.data.node || this.props.data.nodes
                    ? ''
                    : _indexModule.default.disabled,
                onClick: this.onBottom.bind(this),
              },
              '\u7F6E\u5E95',
            ),
          ),
          /*#__PURE__*/ _react.default.createElement(
            'div',
            null,
            /*#__PURE__*/ _react.default.createElement(
              'a',
              {
                className:
                  this.props.data.node || this.props.data.nodes
                    ? ''
                    : _indexModule.default.disabled,
                onClick: function onClick() {
                  _this2.onNewComponent();
                },
              },
              '\u6DFB\u52A0\u5230\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
            ),
          ),
          /*#__PURE__*/ _react.default.createElement('div', {
            className: _indexModule.default.line,
          }),
          this.props.data.nodes
            ? /*#__PURE__*/ _react.default.createElement(
                'div',
                null,
                /*#__PURE__*/ _react.default.createElement(
                  'a',
                  {
                    onClick: function onClick() {
                      _this2.onCombine(false);
                    },
                  },
                  '\u7EC4\u5408',
                ),
              )
            : null,
          this.props.data.node && this.props.data.node.name === 'combine'
            ? /*#__PURE__*/ _react.default.createElement(
                'div',
                null,
                /*#__PURE__*/ _react.default.createElement(
                  'a',
                  {
                    onClick: this.onUncombine,
                  },
                  '\u53D6\u6D88\u7EC4\u5408/\u5305\u542B',
                ),
              )
            : null,
          this.renderNewComponentModal(),
        );
      },
    },
  ]);
  return CanvasContextMenu;
})(_react.Component);

exports.default = CanvasContextMenu;
