'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/button/style');

var _button = _interopRequireDefault(require('antd/es/button'));

require('antd/es/input/style');

var _input = _interopRequireDefault(require('antd/es/input'));

require('antd/es/col/style');

var _col = _interopRequireDefault(require('antd/es/col'));

require('antd/es/row/style');

var _row = _interopRequireDefault(require('antd/es/row'));

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread2'));

require('antd/es/form/style');

var _form = _interopRequireDefault(require('antd/es/form'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireDefault(require('react'));

var formLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 15,
  },
};

var MQTTForm = function MQTTForm() {
  var _Form$useForm = _form.default.useForm(),
    _Form$useForm2 = (0, _slicedToArray2.default)(_Form$useForm, 1),
    form = _Form$useForm2[0];
  /**
   * 连接mqtt
   */

  var onHandleConnectMQTT = function onHandleConnectMQTT() {
    // validateFields((err, value) => {
    //   if(err) return;
    //   const { mqtt, clientId, username, password } = value;
    //   canvas.openMqtt(mqtt, {
    //     clientId,
    //     username,
    //     password
    //   });
    // });
  };

  return /*#__PURE__*/ _react.default.createElement(
    _form.default,
    (0, _objectSpread2.default)(
      (0, _objectSpread2.default)({}, formLayout),
      {},
      {
        form: form,
      },
    ),
    /*#__PURE__*/ _react.default.createElement(
      _row.default,
      null,
      /*#__PURE__*/ _react.default.createElement(
        _col.default,
        {
          span: 24,
        },
        /*#__PURE__*/ _react.default.createElement(
          _form.default.Item,
          {
            label: 'URL\u5730\u5740',
          },
          /*#__PURE__*/ _react.default.createElement(_input.default, {
            placeholder: '\u8BF7\u8F93\u5165URL\u5730\u5740',
          }),
        ),
      ),
      /*#__PURE__*/ _react.default.createElement(
        _col.default,
        {
          span: 24,
        },
        /*#__PURE__*/ _react.default.createElement(
          _form.default.Item,
          {
            label: 'Client ID',
          },
          /*#__PURE__*/ _react.default.createElement(_input.default, {
            placeholder:
              '\u8BF7\u8F93\u5165Client ID\uFF08\u4E0D\u80FD\u91CD\u590D\u4F7F\u7528\uFF0C\u53EF\u4E3A\u7A7A)',
          }),
        ),
      ),
      /*#__PURE__*/ _react.default.createElement(
        _col.default,
        {
          span: 24,
        },
        /*#__PURE__*/ _react.default.createElement(
          _form.default.Item,
          {
            label: '\u7528\u6237\u540D',
          },
          /*#__PURE__*/ _react.default.createElement(_input.default, {
            placeholder: '\u8BF7\u8F93\u5165\u7528\u6237\u540D',
          }),
        ),
      ),
      /*#__PURE__*/ _react.default.createElement(
        _col.default,
        {
          span: 24,
        },
        /*#__PURE__*/ _react.default.createElement(
          _form.default.Item,
          {
            label: '\u5BC6\u7801',
          },
          /*#__PURE__*/ _react.default.createElement(_input.default, {
            type: 'password',
            placeholder: '\u8BF7\u8F93\u5165\u5BC6\u7801',
          }),
        ),
      ),
      /*#__PURE__*/ _react.default.createElement(
        _col.default,
        {
          span: 24,
        },
        /*#__PURE__*/ _react.default.createElement(
          _form.default.Item,
          {
            label: 'Topics *',
          },
          /*#__PURE__*/ _react.default.createElement(_input.default, {
            placeholder: '\u8BF7\u8F93\u5165Topics',
          }),
        ),
      ),
      /*#__PURE__*/ _react.default.createElement(
        _col.default,
        {
          span: 24,
        },
        /*#__PURE__*/ _react.default.createElement(
          _button.default,
          {
            type: 'primary',
            style: {
              marginLeft: 20,
              width: 235,
            },
            onClick: function onClick() {
              return onHandleConnectMQTT();
            },
          },
          '\u6D4B\u8BD5\u8FDE\u63A5',
        ),
      ),
    ),
  );
};

var _default = MQTTForm;
exports.default = _default;
