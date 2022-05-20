'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/col/style');

var _col = _interopRequireDefault(require('antd/es/col'));

require('antd/es/row/style');

var _row = _interopRequireDefault(require('antd/es/row'));

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread2'));

var _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

require('antd/es/message/style');

var _message2 = _interopRequireDefault(require('antd/es/message'));

require('antd/es/form/style');

var _form = _interopRequireDefault(require('antd/es/form'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

require('antd/es/collapse/style');

var _collapse = _interopRequireDefault(require('antd/es/collapse'));

var _react = _interopRequireWildcard(require('react'));

var _api = require('../../../data/api');

var _ahooks = require('ahooks');

var _CompContextMenu = _interopRequireDefault(require('../../../common/CompContextMenu'));

var _indexModule = _interopRequireDefault(require('../../index.module.css'));

var _iconConfig = _interopRequireDefault(require('../../../config/iconConfig'));

var Panel = _collapse.default.Panel;
var Layout = /*#__PURE__*/ (0, _react.forwardRef)(function (props, ref) {
  var onDrag = props.onDrag,
    combineCom = props.combineCom;

  var _Form$useForm = _form.default.useForm(),
    _Form$useForm2 = (0, _slicedToArray2.default)(_Form$useForm, 1),
    formRef = _Form$useForm2[0]; // 是否显示右键菜单

  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    showContextmenu = _useState2[0],
    setShowContextmenu = _useState2[1];

  var _useState3 = (0, _react.useState)({
      position: 'fixed',
      zIndex: '10',
      display: 'none',
      left: '',
      top: '',
      bottom: '',
    }),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    contextmenu = _useState4[0],
    setContextmenu = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    selectedCom = _useState6[0],
    setSelectedCom = _useState6[1];

  var contextMenuRef = (0, _react.useRef)();
  (0, _ahooks.useClickAway)(function () {
    setShowContextmenu(false);
  }, contextMenuRef);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      getNewComponents: function getNewComponents() {
        _getNewComponents();
      },
    };
  }); // 获取自定义组件

  function _getNewComponents() {
    (0, _api.clientParam)(combineCom.apiURL)
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
    (0, _api.clientParam)(combineCom.apiURL)
      .post(combineCom.delete.url, selectedCom, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          token: combineCom.token,
          'Content-Type': 'application/json',
        },
      })
      .then(function (res) {
        _message2.default.success('删除组件成功！', 2, function () {
          _message2.default.destroy();

          return null;
        });

        _getNewComponents();
      });
  };

  var _useState7 = (0, _react.useState)([]),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    componentList = _useState8[0],
    setComponentList = _useState8[1];

  (0, _react.useEffect)(function () {
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
    var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/ _regenerator.default.mark(function _callee() {
        var values, newCom;
        return _regenerator.default.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return formRef.validateFields(['componentName']);

                case 3:
                  values = _context.sent;
                  newCom = (0, _objectSpread2.default)(
                    (0, _objectSpread2.default)({}, selectedCom),
                    {},
                    {
                      componentName: values.componentName,
                    },
                  );
                  (0, _api.clientParam)(combineCom.apiURL)
                    .post(combineCom.rename.url, newCom, {
                      headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                        token: combineCom.token,
                        'Content-Type': 'application/json',
                      },
                    })
                    .then(function (res) {
                      _message2.default.success('重命名组件成功！');

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

  return /*#__PURE__*/ _react.default.createElement(
    _collapse.default,
    {
      expandIconPosition: 'right',
      ghost: false,
      bordered: false,
    },
    /*#__PURE__*/ _react.default.createElement(
      Panel,
      {
        header: '\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
        key: 'custom',
      },
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: _indexModule.default.button,
        },
        /*#__PURE__*/ _react.default.createElement(
          _row.default,
          {
            align: 'middle',
          },
          (componentList || []).map(function (item, key) {
            return /*#__PURE__*/ _react.default.createElement(
              _col.default,
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
              /*#__PURE__*/ _react.default.createElement(
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
                /*#__PURE__*/ _react.default.createElement(_iconConfig.default, {
                  type: 'iconzidingyi',
                  style: {
                    fontSize: 30,
                    width: 53,
                    height: 53,
                    lineHeight: '53px',
                  },
                }),
                /*#__PURE__*/ _react.default.createElement(
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
    /*#__PURE__*/ _react.default.createElement(_CompContextMenu.default, {
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
var _default = Layout;
exports.default = _default;
