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

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

require('antd/es/modal/style');

var _modal = _interopRequireDefault(require('antd/es/modal'));

var _react = _interopRequireWildcard(require('react'));

var _icons = require('@ant-design/icons');

var _indexModule = _interopRequireDefault(require('./index.module.css'));

var confirm = _modal.default.confirm;

var CompContextMenu = function CompContextMenu(props) {
  var contextMenuRef = props.contextMenuRef,
    showContextmenu = props.showContextmenu,
    contextmenu = props.contextmenu,
    name = props.name,
    form = props.form,
    handleOk = props.handleOk,
    handleDelete = props.handleDelete;

  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
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
      icon: /*#__PURE__*/ _react.default.createElement(_icons.ExclamationCircleOutlined, null),
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

  var renderNewComponentModal = /*#__PURE__*/ _react.default.createElement(
    _modal.default,
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
    /*#__PURE__*/ _react.default.createElement(
      _form.default,
      {
        form: form,
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
        /*#__PURE__*/ _react.default.createElement(_input.default, {
          placeholder: '\u8F93\u5165\u7EC4\u4EF6\u540D\u5B57',
          id: 'componentName',
          maxLength: 20,
        }),
      ),
    ),
  );

  return /*#__PURE__*/ _react.default.createElement(
    _react.Fragment,
    null,
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        style: contextmenu,
        ref: contextMenuRef,
      },
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: _indexModule.default.menus,
          style: {
            display: showContextmenu ? 'block' : 'none',
          },
        },
        /*#__PURE__*/ _react.default.createElement(
          'div',
          null,
          /*#__PURE__*/ _react.default.createElement(
            'a',
            {
              onClick: onRename,
            },
            '\u91CD\u547D\u540D',
          ),
        ),
        /*#__PURE__*/ _react.default.createElement(
          'div',
          null,
          /*#__PURE__*/ _react.default.createElement(
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
exports.default = _default;
