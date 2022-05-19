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
exports['default'] = void 0;

var _react = _interopRequireWildcard(require('react'));

var _antd = require('antd');

var _icons = require('@ant-design/icons');

var _indexModule = _interopRequireDefault(require('./index.module.css'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
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

var confirm = _antd.Modal.confirm;

var CompContextMenu = function CompContextMenu(props) {
  var contextMenuRef = props.contextMenuRef,
    showContextmenu = props.showContextmenu,
    contextmenu = props.contextmenu,
    name = props.name,
    form = props.form,
    handleOk = props.handleOk,
    handleDelete = props.handleDelete;

  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];

  var onRename = function onRename() {
    setVisible(true);
    form.setFieldsValue({
      componentName: name,
    });
  };

  var onDelete = function onDelete() {
    var md = confirm({
      title: '确定删除吗?',
      icon: /*#__PURE__*/ _react['default'].createElement(_icons.ExclamationCircleOutlined, null),
      content: '',
      okText: '确定',
      cancelText: '取消',
      getContainer: function getContainer() {
        return document.querySelector('#editLayout');
      },
      onOk: function onOk(close) {
        handleDelete();
        close && close();
        md.destroy();
      },
      onCancel: function onCancel(close) {
        close && close();
        md.destroy();
      },
    });
  };

  var handleOnOk = function handleOnOk() {
    handleOk();
    setVisible(false);
  };

  var handleCancel = function handleCancel() {
    setVisible(false);
  };

  var renderNewComponentModal = /*#__PURE__*/ _react['default'].createElement(
    _antd.Modal,
    {
      title: '\u91CD\u547D\u540D',
      visible: visible,
      onOk: handleOnOk,
      onCancel: handleCancel,
      maskClosable: false,
      okText: '\u786E\u5B9A',
      cancelText: '\u53D6\u6D88',
      getContainer: function getContainer() {
        return document.querySelector('#editLayout');
      },
    },
    /*#__PURE__*/ _react['default'].createElement(
      _antd.Form,
      {
        form: form,
      },
      /*#__PURE__*/ _react['default'].createElement(
        _antd.Form.Item,
        {
          rules: [
            {
              required: true,
              message: '请输入组件名称',
            },
            {
              max: 20,
              message: '最长为20个字符',
            },
            {
              min: 1,
              message: '不低于1个字符',
            },
          ],
          label: '\u7EC4\u4EF6\u540D\u5B57',
          name: 'componentName',
        },
        /*#__PURE__*/ _react['default'].createElement(_antd.Input, {
          placeholder: '\u8F93\u5165\u7EC4\u4EF6\u540D\u5B57',
          id: 'componentName',
          maxLength: 20,
        }),
      ),
    ),
  );

  return /*#__PURE__*/ _react['default'].createElement(
    _react.Fragment,
    null,
    /*#__PURE__*/ _react['default'].createElement(
      'div',
      {
        style: contextmenu,
        ref: contextMenuRef,
      },
      /*#__PURE__*/ _react['default'].createElement(
        'div',
        {
          className: _indexModule['default'].menus,
          style: {
            display: showContextmenu ? 'block' : 'none',
          },
        },
        /*#__PURE__*/ _react['default'].createElement(
          'div',
          null,
          /*#__PURE__*/ _react['default'].createElement(
            'a',
            {
              onClick: onRename,
            },
            '\u91CD\u547D\u540D',
          ),
        ),
        /*#__PURE__*/ _react['default'].createElement(
          'div',
          null,
          /*#__PURE__*/ _react['default'].createElement(
            'a',
            {
              onClick: onDelete,
            },
            '\u5220\u9664',
          ),
        ),
      ),
    ),
    renderNewComponentModal,
  );
};

var _default = CompContextMenu;
exports['default'] = _default;
