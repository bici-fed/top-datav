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

var _ = _interopRequireWildcard(require('lodash'));

var _ColorPicker = _interopRequireDefault(require('../ColorPicker/ColorPicker'));

var _iconConfig = _interopRequireDefault(require('../../config/iconConfig'));

var _CheckboxGroup = _interopRequireDefault(require('../CheckboxGroup'));

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

var Panel = _antd.Collapse.Panel;
var TextArea = _antd.Input.TextArea;
var Option = _antd.Select.Option;
var alignObj = {
  left: ['左对齐', 'iconzuoduiqi'],
  right: ['右对齐', 'iconyouduiqi'],
  top: ['顶部对齐', 'iconshangduiqi'],
  bottom: ['底部对齐', 'iconxiaduiqi'],
  center: ['垂直居中', 'iconzongxiangjuzhong'],
  middle: ['水平居中', 'iconhengxiangjuzhong'],
};

var CustomizedDynamicForm = function CustomizedDynamicForm(_ref) {
  var onChange = _ref.onChange,
    formStyle = _ref.formStyle;

  var hasField = function hasField(formItems, field) {
    var i = _.findIndex(formItems, function (item) {
      return item.name[0] == field;
    });

    if (i >= 0) {
      return true;
    } else {
      return false;
    }
  };

  return /*#__PURE__*/ _react['default'].createElement(
    _react['default'].Fragment,
    null,
    /*#__PURE__*/ _react['default'].createElement(
      _antd.Collapse,
      {
        defaultActiveKey: ['0', '1'],
      },
      (formStyle || []).map(function (item, index) {
        return /*#__PURE__*/ _react['default'].createElement(
          Panel,
          {
            header: item.group,
            key: index,
          },
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Form,
            {
              fields: item.formItems,
              onFieldsChange: function onFieldsChange(_, allFields) {
                onChange(item.group, allFields);
              },
            },
            hasField(item.formItems, 'username')
              ? /*#__PURE__*/ _react['default'].createElement(
                  _antd.Row,
                  null,
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    null,
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'username',
                        label: 'username',
                        rules: [
                          {
                            required: true,
                            message: 'Username is required!',
                          },
                        ],
                      },
                      /*#__PURE__*/ _react['default'].createElement(_antd.Input, null),
                    ),
                  ),
                )
              : '',
            hasField(item.formItems, 'color')
              ? /*#__PURE__*/ _react['default'].createElement(
                  _antd.Row,
                  null,
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    null,
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'color',
                        label: 'color',
                        rules: [
                          {
                            required: true,
                            message: 'Username is required!',
                          },
                        ],
                      },
                      /*#__PURE__*/ _react['default'].createElement(_antd.Input, null),
                    ),
                  ),
                )
              : '',
            hasField(item.formItems, 'fontStyle')
              ? /*#__PURE__*/ _react['default'].createElement(
                  _antd.Row,
                  null,
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    null,
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'fontStyle',
                        label: '\u5B57\u4F53\u989C\u8272',
                        labelCol: {
                          span: 7,
                        },
                      },
                      /*#__PURE__*/ _react['default'].createElement(_ColorPicker['default'], null),
                    ),
                  ),
                )
              : '',
            hasField(item.formItems, 'refreshRate')
              ? /*#__PURE__*/ _react['default'].createElement(
                  _antd.Row,
                  null,
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 8,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'refreshRateCheck',
                        label: '\u5237\u65B0\u9891\u7387',
                        valuePropName: 'checked',
                      },
                      /*#__PURE__*/ _react['default'].createElement(_antd.Checkbox, null),
                    ),
                  ),
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 9,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'refreshRate',
                        label: '',
                      },
                      /*#__PURE__*/ _react['default'].createElement(_antd.InputNumber, {
                        min: 0,
                        max: 1000000,
                      }),
                    ),
                  ),
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 4,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'pullRateUnit',
                      },
                      /*#__PURE__*/ _react['default'].createElement(
                        _antd.Select,
                        {
                          style: {
                            width: 40,
                          },
                        },
                        [
                          {
                            t: 1,
                            n: '秒',
                          },
                          {
                            t: 60,
                            n: '分',
                          },
                          {
                            t: 3600,
                            n: '时',
                          },
                        ].map(function (item) {
                          return /*#__PURE__*/ _react['default'].createElement(
                            Option,
                            {
                              key: item.t,
                              value: item.t,
                            },
                            item.n,
                          );
                        }),
                      ),
                    ),
                  ),
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    null,
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      null,
                      '\u4E00\u6B21',
                    ),
                  ),
                )
              : '',
            hasField(item.formItems, 'iframe')
              ? /*#__PURE__*/ _react['default'].createElement(
                  _antd.Row,
                  null,
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 24,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'iframe',
                        label: '\u7F51\u9875\u5730\u5740',
                      },
                      /*#__PURE__*/ _react['default'].createElement(TextArea, {
                        style: {
                          width: '100%',
                        },
                        placeholder: '\u8BF7\u8F93\u5165\u7F51\u9875\u5730\u5740',
                        autoSize: {
                          minRows: 2,
                          maxRows: 6,
                        },
                      }),
                    ),
                  ),
                )
              : '',
            hasField(item.formItems, 'title')
              ? /*#__PURE__*/ _react['default'].createElement(
                  _antd.Row,
                  null,
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 7,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'titleShow',
                        label: '\u6807\u9898',
                        valuePropName: 'checked',
                      },
                      /*#__PURE__*/ _react['default'].createElement(_antd.Checkbox, null),
                    ),
                  ),
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 17,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'title',
                      },
                      /*#__PURE__*/ _react['default'].createElement(_antd.Input, null),
                    ),
                  ),
                )
              : '',
            hasField(item.formItems, 'titleFontFamily')
              ? /*#__PURE__*/ _react['default'].createElement(
                  _antd.Row,
                  null,
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 24,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'titleFontFamily',
                        label: '\u5B57\u4F53',
                        labelCol: {
                          span: 7,
                        },
                        labelAlign: 'left',
                      },
                      /*#__PURE__*/ _react['default'].createElement(
                        _antd.Select,
                        {
                          allowClear: true,
                          getPopupContainer: function getPopupContainer() {
                            return document.querySelector('#editLayout');
                          },
                        },
                        /*#__PURE__*/ _react['default'].createElement(
                          Option,
                          {
                            value: '"Microsoft YaHei"',
                            style: {
                              fontFamily: '"Microsoft YaHei"',
                            },
                          },
                          '\u5FAE\u8F6F\u96C5\u9ED1',
                        ),
                        /*#__PURE__*/ _react['default'].createElement(
                          Option,
                          {
                            value: 'SimSun',
                            style: {
                              fontFamily: 'SimSun',
                            },
                          },
                          '\u5B8B\u4F53',
                        ),
                        /*#__PURE__*/ _react['default'].createElement(
                          Option,
                          {
                            value: 'KaiTi',
                            style: {
                              fontFamily: 'KaiTi',
                            },
                          },
                          '\u6977\u4F53',
                        ),
                        /*#__PURE__*/ _react['default'].createElement(
                          Option,
                          {
                            value: 'SimHei',
                            style: {
                              fontFamily: 'SimHei',
                            },
                          },
                          '\u9ED1\u4F53',
                        ),
                        /*#__PURE__*/ _react['default'].createElement(
                          Option,
                          {
                            value: '"Hiragino Sans GB"',
                            style: {
                              fontFamily: '"Hiragino Sans GB"',
                            },
                          },
                          '\u51AC\u9752\u9ED1\u4F53',
                        ),
                        /*#__PURE__*/ _react['default'].createElement(
                          Option,
                          {
                            value: 'Arial',
                            style: {
                              fontFamily: 'Arial',
                            },
                          },
                          'Arial',
                        ),
                        /*#__PURE__*/ _react['default'].createElement(
                          Option,
                          {
                            value: 'Tahoma',
                            style: {
                              fontFamily: 'Tahoma',
                            },
                          },
                          'Tahoma',
                        ),
                        /*#__PURE__*/ _react['default'].createElement(
                          Option,
                          {
                            value: 'Helvetica',
                            style: {
                              fontFamily: 'Helvetica',
                            },
                          },
                          'Helvetica',
                        ),
                      ),
                    ),
                  ),
                )
              : '',
            hasField(item.formItems, 'titleFontColor')
              ? /*#__PURE__*/ _react['default'].createElement(
                  _antd.Row,
                  null,
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 12,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'titleFontColor',
                        label: '\u989C\u8272\u5B57\u53F7',
                      },
                      /*#__PURE__*/ _react['default'].createElement(_ColorPicker['default'], null),
                    ),
                  ),
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 12,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'titleFontSize',
                      },
                      /*#__PURE__*/ _react['default'].createElement(_antd.InputNumber, {
                        style: {
                          width: '100%',
                        },
                      }),
                    ),
                  ),
                )
              : '',
            hasField(item.formItems, 'titlePosition')
              ? /*#__PURE__*/ _react['default'].createElement(
                  _react['default'].Fragment,
                  null,
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Row,
                    null,
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Col,
                      {
                        span: 18,
                        offset: 6,
                      },
                      /*#__PURE__*/ _react['default'].createElement(
                        _antd.Form.Item,
                        {
                          label: '',
                          name: 'titlePosition',
                          labelCol: {
                            span: 6,
                          },
                        },
                        /*#__PURE__*/ _react['default'].createElement(
                          _antd.Radio.Group,
                          {
                            style: {
                              width: '100%',
                            },
                            size: 'small',
                          },
                          /*#__PURE__*/ _react['default'].createElement(
                            _antd.Radio.Button,
                            {
                              style: {
                                width: '33%',
                                textAlign: 'center',
                              },
                              value: 'left',
                            },
                            /*#__PURE__*/ _react['default'].createElement(_iconConfig['default'], {
                              type: 'iconleft',
                            }),
                          ),
                          /*#__PURE__*/ _react['default'].createElement(
                            _antd.Radio.Button,
                            {
                              style: {
                                width: '33%',
                                textAlign: 'center',
                              },
                              value: 'center',
                            },
                            /*#__PURE__*/ _react['default'].createElement(_iconConfig['default'], {
                              type: 'iconjuzhongduiqi',
                            }),
                          ),
                          /*#__PURE__*/ _react['default'].createElement(
                            _antd.Radio.Button,
                            {
                              style: {
                                width: '33%',
                                textAlign: 'center',
                              },
                              value: 'right',
                            },
                            /*#__PURE__*/ _react['default'].createElement(_iconConfig['default'], {
                              type: 'iconyouduiqi2',
                            }),
                          ),
                        ),
                      ),
                    ),
                  ),
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Row,
                    null,
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Col,
                      {
                        span: 18,
                        offset: 6,
                      },
                      /*#__PURE__*/ _react['default'].createElement(
                        _antd.Form.Item,
                        {
                          label: '',
                          name: 'titleFontStyle',
                        },
                        /*#__PURE__*/ _react['default'].createElement(
                          _CheckboxGroup['default'],
                          null,
                        ),
                      ),
                    ),
                  ),
                )
              : '',
            hasField(item.formItems, 'headerFontColor')
              ? /*#__PURE__*/ _react['default'].createElement(
                  _antd.Row,
                  null,
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 12,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'headerFontColor',
                        label: '\u8868\u5934\u5B57\u8272',
                      },
                      /*#__PURE__*/ _react['default'].createElement(_ColorPicker['default'], null),
                    ),
                  ),
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 12,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'headerFontSize',
                      },
                      /*#__PURE__*/ _react['default'].createElement(_antd.InputNumber, null),
                    ),
                  ),
                )
              : '',
            hasField(item.formItems, 'theadBkColorShow')
              ? /*#__PURE__*/ _react['default'].createElement(
                  _antd.Row,
                  null,
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 10,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'theadBkColorShow',
                        label: '\u8868\u5934\u80CC\u666F',
                        valuePropName: 'checked',
                      },
                      /*#__PURE__*/ _react['default'].createElement(_antd.Checkbox, null),
                    ),
                  ),
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 12,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'theadBkColor',
                      },
                      /*#__PURE__*/ _react['default'].createElement(_ColorPicker['default'], null),
                    ),
                  ),
                )
              : '',
            hasField(item.formItems, 'tbodyBkColor')
              ? /*#__PURE__*/ _react['default'].createElement(
                  _antd.Row,
                  null,
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 10,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'tbodyBkColorShow',
                        label: '\u8868\u683C\u80CC\u666F',
                        valuePropName: 'checked',
                      },
                      /*#__PURE__*/ _react['default'].createElement(_antd.Checkbox, null),
                    ),
                  ),
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 12,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'tbodyBkColor',
                      },
                      /*#__PURE__*/ _react['default'].createElement(_ColorPicker['default'], null),
                    ),
                  ),
                )
              : '',
            hasField(item.formItems, 'tbBorderShow')
              ? /*#__PURE__*/ _react['default'].createElement(
                  _antd.Row,
                  null,
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 10,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'tbBorderShow',
                        label: '\u8868\u683C\u8FB9\u6846',
                        valuePropName: 'checked',
                      },
                      /*#__PURE__*/ _react['default'].createElement(_antd.Checkbox, null),
                    ),
                  ),
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 6,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'tbBorderColor',
                      },
                      /*#__PURE__*/ _react['default'].createElement(_ColorPicker['default'], null),
                    ),
                  ),
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 5,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'tbBorderSize',
                      },
                      /*#__PURE__*/ _react['default'].createElement(_antd.InputNumber, null),
                    ),
                  ),
                )
              : '',
            hasField(item.formItems, 'chartShape')
              ? /*#__PURE__*/ _react['default'].createElement(
                  _antd.Row,
                  null,
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    null,
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'chartShape',
                        label: '\u997C/\u73AF\u56FE',
                      },
                      /*#__PURE__*/ _react['default'].createElement(
                        _antd.Radio.Group,
                        null,
                        /*#__PURE__*/ _react['default'].createElement(
                          _antd.Radio,
                          {
                            value: 'pie',
                          },
                          '\u997C\u72B6\u56FE',
                        ),
                        /*#__PURE__*/ _react['default'].createElement(
                          _antd.Radio,
                          {
                            value: 'circle',
                          },
                          '\u73AF\u72B6\u56FE',
                        ),
                      ),
                    ),
                  ),
                )
              : '',
            hasField(item.formItems, 'chartBkColorChecked')
              ? /*#__PURE__*/ _react['default'].createElement(
                  _antd.Row,
                  null,
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 8,
                    },
                    /*#__PURE__*/ _react['default'].createElement(_antd.Form.Item, {
                      label: '\u80CC\u666F\u989C\u8272',
                    }),
                  ),
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 3,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'chartBkColorChecked',
                        valuePropName: 'checked',
                      },
                      /*#__PURE__*/ _react['default'].createElement(_antd.Checkbox, null),
                    ),
                  ),
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 12,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'chartBkColor',
                      },
                      /*#__PURE__*/ _react['default'].createElement(_ColorPicker['default'], null),
                    ),
                  ),
                )
              : '',
            hasField(item.formItems, 'chartOrder')
              ? /*#__PURE__*/ _react['default'].createElement(
                  _antd.Row,
                  null,
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 8,
                    },
                    /*#__PURE__*/ _react['default'].createElement(_antd.Form.Item, {
                      label: '\u81EA\u52A8\u6392\u5E8F',
                    }),
                  ),
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 3,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'chartOrderChecked',
                        valuePropName: 'checked',
                      },
                      /*#__PURE__*/ _react['default'].createElement(_antd.Checkbox, null),
                    ),
                  ),
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 13,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'chartOrder',
                      },
                      /*#__PURE__*/ _react['default'].createElement(
                        _antd.Select,
                        {
                          allowClear: true,
                          getPopupContainer: function getPopupContainer() {
                            return document.querySelector('#editLayout');
                          },
                        },
                        /*#__PURE__*/ _react['default'].createElement(
                          Option,
                          {
                            value: 'desc',
                          },
                          '\u4ECE\u5927\u5230\u5C0F',
                        ),
                        /*#__PURE__*/ _react['default'].createElement(
                          Option,
                          {
                            value: 'asc',
                          },
                          '\u4ECE\u5C0F\u5230\u5927',
                        ),
                      ),
                    ),
                  ),
                )
              : '',
            hasField(item.formItems, 'lineGraphRange')
              ? /*#__PURE__*/ _react['default'].createElement(
                  _antd.Row,
                  null,
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 8,
                    },
                    /*#__PURE__*/ _react['default'].createElement(_antd.Form.Item, {
                      label: '\u56FE\u5F62\u989C\u8272',
                    }),
                  ),
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 16,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.List,
                      {
                        name: 'lineGraphRange',
                      },
                      function (fields, _ref2) {
                        var add = _ref2.add,
                          remove = _ref2.remove;
                        return /*#__PURE__*/ _react['default'].createElement(
                          _react.Fragment,
                          null,
                          fields.map(function (field) {
                            return /*#__PURE__*/ _react['default'].createElement(
                              _antd.Space,
                              {
                                key: field.key,
                                style: {
                                  display: 'flex',
                                  marginBottom: 8,
                                },
                                align: 'center',
                                size: 20,
                              },
                              /*#__PURE__*/ _react['default'].createElement(
                                _antd.Form.Item,
                                _objectSpread(
                                  _objectSpread({}, field),
                                  {},
                                  {
                                    name: [field.name, 'lineGraphRangeCheck'],
                                    valuePropName: 'checked',
                                    style: {
                                      marginBottom: 0,
                                    },
                                  },
                                ),
                                /*#__PURE__*/ _react['default'].createElement(_antd.Checkbox, null),
                              ),
                              /*#__PURE__*/ _react['default'].createElement(
                                _antd.Form.Item,
                                _objectSpread(
                                  _objectSpread({}, field),
                                  {},
                                  {
                                    name: [field.name, 'lineGraphRangeColor'],
                                    style: {
                                      marginBottom: 0,
                                    },
                                  },
                                ),
                                /*#__PURE__*/ _react['default'].createElement(
                                  _ColorPicker['default'],
                                  null,
                                ),
                              ),
                              /*#__PURE__*/ _react['default'].createElement(
                                _antd.Form.Item,
                                {
                                  style: {
                                    display: 'none',
                                  },
                                },
                                /*#__PURE__*/ _react['default'].createElement(
                                  _icons.MinusCircleOutlined,
                                  {
                                    onClick: function onClick() {
                                      return remove(field.name);
                                    },
                                  },
                                ),
                              ),
                            );
                          }),
                          fields.length < 10
                            ? /*#__PURE__*/ _react['default'].createElement(
                                _antd.Form.Item,
                                {
                                  style: {
                                    display: 'none',
                                  },
                                },
                                /*#__PURE__*/ _react['default'].createElement(
                                  _antd.Button,
                                  {
                                    type: 'dashed',
                                    onClick: function onClick() {
                                      return add();
                                    },
                                    block: true,
                                    icon: /*#__PURE__*/ _react['default'].createElement(
                                      _icons.PlusOutlined,
                                      null,
                                    ),
                                  },
                                  '\u6DFB\u52A0',
                                ),
                              )
                            : null,
                        );
                      },
                    ),
                  ),
                )
              : '',
            hasField(item.formItems, 'chartBkColorShow')
              ? /*#__PURE__*/ _react['default'].createElement(
                  _antd.Row,
                  null,
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 8,
                    },
                    /*#__PURE__*/ _react['default'].createElement(_antd.Form.Item, {
                      label: '\u80CC\u666F\u989C\u8272',
                    }),
                  ),
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 3,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'chartBkColorShow',
                        valuePropName: 'checked',
                      },
                      /*#__PURE__*/ _react['default'].createElement(_antd.Checkbox, null),
                    ),
                  ),
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 12,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'chartBkColor',
                      },
                      /*#__PURE__*/ _react['default'].createElement(_ColorPicker['default'], null),
                    ),
                  ),
                )
              : '',
            hasField(item.formItems, 'chartRefLineShow')
              ? /*#__PURE__*/ _react['default'].createElement(
                  _antd.Row,
                  null,
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 8,
                    },
                    /*#__PURE__*/ _react['default'].createElement(_antd.Form.Item, {
                      label: '\u53C2\u8003\u7EBF',
                    }),
                  ),
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 3,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'chartRefLineShow',
                        valuePropName: 'checked',
                      },
                      /*#__PURE__*/ _react['default'].createElement(_antd.Checkbox, null),
                    ),
                  ),
                  /*#__PURE__*/ _react['default'].createElement(
                    _antd.Col,
                    {
                      span: 12,
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      _antd.Form.Item,
                      {
                        name: 'chartRefLineColor',
                      },
                      /*#__PURE__*/ _react['default'].createElement(_ColorPicker['default'], null),
                    ),
                  ),
                )
              : '',
          ),
        );
      }),
    ),
  );
};

var _default = CustomizedDynamicForm;
exports['default'] = _default;
