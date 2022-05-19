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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }
      _next(undefined);
    });
  };
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

import React, { Component } from 'react';
import styles from './index.module.css';
import { Form, Input, Modal, message } from 'antd';
import { clientParam } from '../data/api';
import { replacer } from '../utils/serializing';
import * as _ from 'lodash';

var CanvasContextMenu = /*#__PURE__*/ (function (_Component) {
  _inherits(CanvasContextMenu, _Component);

  var _super = _createSuper(CanvasContextMenu);

  function CanvasContextMenu() {
    var _this;

    _classCallCheck(this, CanvasContextMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      newComVisible: false,
      componentName: '添加到自定义组件',
    };
    _this.formRef = /*#__PURE__*/ React.createRef();

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
        var _iterator = _createForOfIteratorHelper(_this.props.data.nodes),
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

    _this.onCheck = /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var values, cloneNodes, cloneNode, result, newNode;
        return regeneratorRuntime.wrap(
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
                      componentProperty: JSON.stringify(newNode, replacer),
                    })
                    .then(function (res) {
                      _this.setState({
                        newComVisible: false,
                      });

                      message.info('添加到自定义组件成功').then(function () {
                        message.destroy();
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
      return /*#__PURE__*/ React.createElement(
        Modal,
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
        /*#__PURE__*/ React.createElement(
          Form,
          {
            ref: _this.formRef,
            preserve: false,
          },
          /*#__PURE__*/ React.createElement(
            Form.Item,
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
            /*#__PURE__*/ React.createElement(Input, {
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

  _createClass(CanvasContextMenu, [
    {
      key: 'saveNewComponent',
      value: function saveNewComponent(params) {
        return clientParam(this.props.combineCom.apiURL).post(
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
          var _iterator2 = _createForOfIteratorHelper(this.props.data.nodes),
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
          var _iterator3 = _createForOfIteratorHelper(this.props.data.nodes),
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

        return /*#__PURE__*/ React.createElement(
          'div',
          {
            className: styles.menus,
            style: {
              display: this.props.show ? 'block' : 'none',
            },
          },
          /*#__PURE__*/ React.createElement(
            'div',
            null,
            /*#__PURE__*/ React.createElement(
              'a',
              {
                className: this.props.data.node || this.props.data.nodes ? '' : styles.disabled,
                onClick: this.onTop.bind(this),
              },
              '\u7F6E\u9876',
            ),
          ),
          /*#__PURE__*/ React.createElement(
            'div',
            null,
            /*#__PURE__*/ React.createElement(
              'a',
              {
                className: this.props.data.node || this.props.data.nodes ? '' : styles.disabled,
                onClick: this.onBottom.bind(this),
              },
              '\u7F6E\u5E95',
            ),
          ),
          /*#__PURE__*/ React.createElement(
            'div',
            null,
            /*#__PURE__*/ React.createElement(
              'a',
              {
                className: this.props.data.node || this.props.data.nodes ? '' : styles.disabled,
                onClick: function onClick() {
                  _this2.onNewComponent();
                },
              },
              '\u6DFB\u52A0\u5230\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
            ),
          ),
          /*#__PURE__*/ React.createElement('div', {
            className: styles.line,
          }),
          this.props.data.nodes
            ? /*#__PURE__*/ React.createElement(
                'div',
                null,
                /*#__PURE__*/ React.createElement(
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
            ? /*#__PURE__*/ React.createElement(
                'div',
                null,
                /*#__PURE__*/ React.createElement(
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
})(Component);

export { CanvasContextMenu as default };
