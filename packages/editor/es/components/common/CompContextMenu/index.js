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

import React, { useState, Fragment } from 'react';
import { Modal, Form, Input } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import styles from './index.module.css';
var confirm = Modal.confirm;

var CompContextMenu = function CompContextMenu(props) {
  var contextMenuRef = props.contextMenuRef,
    showContextmenu = props.showContextmenu,
    contextmenu = props.contextmenu,
    name = props.name,
    form = props.form,
    handleOk = props.handleOk,
    handleDelete = props.handleDelete;

  var _useState = useState(false),
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
      icon: /*#__PURE__*/ React.createElement(ExclamationCircleOutlined, null),
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

  var renderNewComponentModal = /*#__PURE__*/ React.createElement(
    Modal,
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
    /*#__PURE__*/ React.createElement(
      Form,
      {
        form: form,
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
        /*#__PURE__*/ React.createElement(Input, {
          placeholder: '\u8F93\u5165\u7EC4\u4EF6\u540D\u5B57',
          id: 'componentName',
          maxLength: 20,
        }),
      ),
    ),
  );
  return /*#__PURE__*/ React.createElement(
    Fragment,
    null,
    /*#__PURE__*/ React.createElement(
      'div',
      {
        style: contextmenu,
        ref: contextMenuRef,
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: styles.menus,
          style: {
            display: showContextmenu ? 'block' : 'none',
          },
        },
        /*#__PURE__*/ React.createElement(
          'div',
          null,
          /*#__PURE__*/ React.createElement(
            'a',
            {
              onClick: onRename,
            },
            '\u91CD\u547D\u540D',
          ),
        ),
        /*#__PURE__*/ React.createElement(
          'div',
          null,
          /*#__PURE__*/ React.createElement(
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

export default CompContextMenu;
