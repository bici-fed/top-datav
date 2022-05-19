import 'antd/lib/button/style';
import _Button from 'antd/lib/button';
import 'antd/lib/input/style';
import _Input from 'antd/lib/input';
import 'antd/lib/col/style';
import _Col from 'antd/lib/col';
import 'antd/lib/row/style';
import _Row from 'antd/lib/row';
import 'antd/lib/form/style';
import _Form from 'antd/lib/form';

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

import React from 'react';
var formLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 15,
  },
};

var MQTTForm = function MQTTForm() {
  var _Form$useForm = _Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
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

  return /*#__PURE__*/ React.createElement(
    _Form,
    _objectSpread(
      _objectSpread({}, formLayout),
      {},
      {
        form: form,
      },
    ),
    /*#__PURE__*/ React.createElement(
      _Row,
      null,
      /*#__PURE__*/ React.createElement(
        _Col,
        {
          span: 24,
        },
        /*#__PURE__*/ React.createElement(
          _Form.Item,
          {
            label: 'URL\u5730\u5740',
          },
          /*#__PURE__*/ React.createElement(_Input, {
            placeholder: '\u8BF7\u8F93\u5165URL\u5730\u5740',
          }),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        _Col,
        {
          span: 24,
        },
        /*#__PURE__*/ React.createElement(
          _Form.Item,
          {
            label: 'Client ID',
          },
          /*#__PURE__*/ React.createElement(_Input, {
            placeholder:
              '\u8BF7\u8F93\u5165Client ID\uFF08\u4E0D\u80FD\u91CD\u590D\u4F7F\u7528\uFF0C\u53EF\u4E3A\u7A7A)',
          }),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        _Col,
        {
          span: 24,
        },
        /*#__PURE__*/ React.createElement(
          _Form.Item,
          {
            label: '\u7528\u6237\u540D',
          },
          /*#__PURE__*/ React.createElement(_Input, {
            placeholder: '\u8BF7\u8F93\u5165\u7528\u6237\u540D',
          }),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        _Col,
        {
          span: 24,
        },
        /*#__PURE__*/ React.createElement(
          _Form.Item,
          {
            label: '\u5BC6\u7801',
          },
          /*#__PURE__*/ React.createElement(_Input, {
            type: 'password',
            placeholder: '\u8BF7\u8F93\u5165\u5BC6\u7801',
          }),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        _Col,
        {
          span: 24,
        },
        /*#__PURE__*/ React.createElement(
          _Form.Item,
          {
            label: 'Topics *',
          },
          /*#__PURE__*/ React.createElement(_Input, {
            placeholder: '\u8BF7\u8F93\u5165Topics',
          }),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        _Col,
        {
          span: 24,
        },
        /*#__PURE__*/ React.createElement(
          _Button,
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

export default MQTTForm;
