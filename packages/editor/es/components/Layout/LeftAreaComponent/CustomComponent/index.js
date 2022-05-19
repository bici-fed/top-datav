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

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
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

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { clientParam } from '../../../data/api';
import { Row, Col, Form, message, Collapse } from 'antd';
import { useClickAway } from 'ahooks';
import CompContextMenu from '../../../common/CompContextMenu';
import styles from '../../index.module.css';
import CustomIcon from '../../../config/iconConfig';
var Panel = Collapse.Panel;
var Layout = /*#__PURE__*/ forwardRef(function (props, ref) {
  var onDrag = props.onDrag,
    combineCom = props.combineCom;

  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    formRef = _Form$useForm2[0]; // 是否显示右键菜单

  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showContextmenu = _useState2[0],
    setShowContextmenu = _useState2[1];

  var _useState3 = useState({
      position: 'fixed',
      zIndex: '10',
      display: 'none',
      left: '',
      top: '',
      bottom: '',
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    contextmenu = _useState4[0],
    setContextmenu = _useState4[1];

  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedCom = _useState6[0],
    setSelectedCom = _useState6[1];

  var contextMenuRef = useRef();
  useClickAway(function () {
    setShowContextmenu(false);
  }, contextMenuRef);
  useImperativeHandle(ref, function () {
    return {
      getNewComponents: function getNewComponents() {
        _getNewComponents();
      },
    };
  }); // 获取自定义组件

  function _getNewComponents() {
    clientParam(combineCom.apiURL)
      .post(combineCom.list.url, combineCom.list.params, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          token: combineCom.token,
          'Content-Type': 'application/json',
        },
      })
      .then(function (r) {
        setComponentList(r.data.data);
      });
  }

  var handleDelete = function handleDelete() {
    clientParam(combineCom.apiURL)
      .post(combineCom.delete.url, selectedCom, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          token: combineCom.token,
          'Content-Type': 'application/json',
        },
      })
      .then(function (res) {
        message.success('删除组件成功！', 2, function () {
          message.destroy();
          return null;
        });

        _getNewComponents();
      });
  };

  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    componentList = _useState8[0],
    setComponentList = _useState8[1];

  useEffect(function () {
    _getNewComponents();
  }, []); // 右键菜单

  var handleContextMenu = function handleContextMenu(event, item) {
    setShowContextmenu(!showContextmenu);
    setSelectedCom(item);
    event.preventDefault();
    event.stopPropagation();

    if (event.clientY + 360 < document.body.clientHeight) {
      setContextmenu({
        position: 'fixed',
        zIndex: '10',
        display: 'block',
        left: event.clientX + 'px',
        top: event.clientY + 'px',
        bottom: '',
      });
    } else {
      setContextmenu({
        position: 'fixed',
        zIndex: '10',
        display: 'block',
        left: event.clientX + 'px',
        top: '',
        bottom: document.body.clientHeight - event.clientY + 'px',
      });
    }
  }; // 确定重命名

  var handleOk = function handleOk() {
    onCheck();
  };

  var onCheck = /*#__PURE__*/ (function () {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var values, newCom;
        return regeneratorRuntime.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return formRef.validateFields(['componentName']);

                case 3:
                  values = _context.sent;
                  newCom = _objectSpread(
                    _objectSpread({}, selectedCom),
                    {},
                    {
                      componentName: values.componentName,
                    },
                  );
                  clientParam(combineCom.apiURL)
                    .post(combineCom.rename.url, newCom, {
                      headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                        token: combineCom.token,
                        'Content-Type': 'application/json',
                      },
                    })
                    .then(function (res) {
                      message.success('重命名组件成功！');

                      _getNewComponents();
                    });
                  _context.next = 11;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context['catch'](0);
                  console.error('Failed:', _context.t0);

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [[0, 8]],
        );
      }),
    );

    return function onCheck() {
      return _ref.apply(this, arguments);
    };
  })();

  return /*#__PURE__*/ React.createElement(
    Collapse,
    {
      expandIconPosition: 'right',
      ghost: false,
      bordered: false,
    },
    /*#__PURE__*/ React.createElement(
      Panel,
      {
        header: '\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
        key: 'custom',
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: styles.button,
        },
        /*#__PURE__*/ React.createElement(
          Row,
          {
            align: 'middle',
          },
          (componentList || []).map(function (item, key) {
            return /*#__PURE__*/ React.createElement(
              Col,
              {
                key: key,
                span: 8,
                style: {
                  marginBottom: 20,
                  textAlign: 'center',
                },
                onContextMenu: function onContextMenu(event) {
                  return handleContextMenu(event, item);
                },
              },
              /*#__PURE__*/ React.createElement(
                'a',
                {
                  draggable: true,
                  href: '#',
                  onClick: function onClick(e) {
                    return e.preventDefault();
                  },
                  title: item.componentName,
                  style: {
                    padding: '0 5px',
                  },
                  onDragStart: function onDragStart(ev) {
                    return onDrag(ev, JSON.parse(item.componentProperty), true);
                  },
                },
                /*#__PURE__*/ React.createElement(CustomIcon, {
                  type: 'iconzidingyi',
                  style: {
                    fontSize: 30,
                    width: 53,
                    height: 53,
                    lineHeight: '53px',
                  },
                }),
                /*#__PURE__*/ React.createElement(
                  'span',
                  {
                    style: {
                      overflow: 'hidden',
                      display: 'block',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                    },
                  },
                  item.componentName,
                ),
              ),
            );
          }),
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(CompContextMenu, {
      contextMenuRef: contextMenuRef,
      showContextmenu: showContextmenu,
      contextmenu: contextmenu,
      name: selectedCom === null || selectedCom === void 0 ? void 0 : selectedCom.componentName,
      form: formRef,
      handleOk: handleOk,
      handleDelete: handleDelete,
    }),
  );
});
export default Layout;
