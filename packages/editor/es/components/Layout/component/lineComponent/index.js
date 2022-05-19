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

require('./index.module.css');

var _ColorPicker = _interopRequireDefault(require('../../../common/ColorPicker/ColorPicker'));

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

var Panel = _antd.Collapse.Panel;
var TabPane = _antd.Tabs.TabPane;
var Option = _antd.Select.Option;

var LineCanvasProps = function LineCanvasProps(_ref) {
  var data = _ref.data,
    onFormValueChange = _ref.onFormValueChange;

  var _Form$useForm = _antd.Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];

  var _ref2 = (data === null || data === void 0 ? void 0 : data.line) || {},
    lineWidth = _ref2.lineWidth,
    dash = _ref2.dash,
    strokeStyle = _ref2.strokeStyle,
    name = _ref2.name,
    fromArrow = _ref2.fromArrow,
    toArrow = _ref2.toArrow,
    type = _ref2.type;

  (0, _react.useEffect)(
    function () {
      form.setFieldsValue({
        lineWidth: lineWidth,
        dash: dash,
        strokeStyle: strokeStyle,
        name: name,
        fromArrow: fromArrow,
        toArrow: toArrow,
      });
    },
    [lineWidth, dash, name, toArrow, fromArrow, strokeStyle, type, data.line.data],
  );
  /**
   * 渲染位置和大小的表单
   */

  var handleFormValueChange = function handleFormValueChange(changeValues, allValues) {
    onFormValueChange(allValues);
  };

  var renderForm = (0, _react.useMemo)(
    function () {
      var _data$line, _data$line$data;

      return /*#__PURE__*/ _react['default'].createElement(
        _antd.Form,
        {
          form: form,
          onValuesChange: handleFormValueChange,
        },
        /*#__PURE__*/ _react['default'].createElement(
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
                name: 'strokeStyle',
                label: '\u7EBF\u6761\u989C\u8272',
              },
              /*#__PURE__*/ _react['default'].createElement(_ColorPicker['default'], null),
            ),
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Col,
            {
              span: 24,
            },
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Form.Item,
              {
                name: 'name',
                label: '\u7EBF\u6761\u7C7B\u578B',
              },
              /*#__PURE__*/ _react['default'].createElement(
                _antd.Select,
                {
                  style: {
                    width: '95%',
                  },
                },
                (data === null || data === void 0
                  ? void 0
                  : (_data$line = data.line) === null || _data$line === void 0
                  ? void 0
                  : (_data$line$data = _data$line.data) === null || _data$line$data === void 0
                  ? void 0
                  : _data$line$data.type) !== 'myLine'
                  ? /*#__PURE__*/ _react['default'].createElement(
                      _react['default'].Fragment,
                      null,
                      /*#__PURE__*/ _react['default'].createElement(
                        Option,
                        {
                          value: 'curve',
                        },
                        '\u8D1D\u585E\u5C14\u66F2\u7EBF',
                      ),
                      /*#__PURE__*/ _react['default'].createElement(
                        Option,
                        {
                          value: 'polyline',
                        },
                        '\u6298\u7EBF',
                      ),
                    )
                  : '',
                /*#__PURE__*/ _react['default'].createElement(
                  Option,
                  {
                    value: 'line',
                  },
                  '\u76F4\u7EBF',
                ),
              ),
            ),
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Col,
            {
              span: 24,
            },
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Form.Item,
              {
                name: 'dash',
                label: '\u7EBF\u6761\u6837\u5F0F',
              },
              /*#__PURE__*/ _react['default'].createElement(
                _antd.Select,
                {
                  style: {
                    width: '95%',
                  },
                },
                /*#__PURE__*/ _react['default'].createElement(
                  Option,
                  {
                    value: 0,
                  },
                  '_________',
                ),
                /*#__PURE__*/ _react['default'].createElement(
                  Option,
                  {
                    value: 1,
                  },
                  '---------',
                ),
                /*#__PURE__*/ _react['default'].createElement(
                  Option,
                  {
                    value: 2,
                  },
                  '_ _ _ _ _',
                ),
                /*#__PURE__*/ _react['default'].createElement(
                  Option,
                  {
                    value: 3,
                  },
                  '- . - . - .',
                ),
              ),
            ),
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Col,
            {
              span: 24,
            },
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Form.Item,
              {
                name: 'lineWidth',
                label: '\u7EBF\u6761\u5BBD\u5EA6',
              },
              /*#__PURE__*/ _react['default'].createElement(_antd.InputNumber, {
                style: {
                  width: '95%',
                },
                min: 0,
              }),
            ),
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Col,
            {
              span: 24,
            },
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Form.Item,
              {
                name: 'fromArrow',
                label: '\u8D77\u70B9\u7BAD\u5934',
              },
              /*#__PURE__*/ _react['default'].createElement(
                _antd.Select,
                {
                  style: {
                    width: '95%',
                  },
                },
                /*#__PURE__*/ _react['default'].createElement(
                  Option,
                  {
                    value: '',
                  },
                  '\u65E0\u7BAD\u5934',
                ),
                /*#__PURE__*/ _react['default'].createElement(
                  Option,
                  {
                    value: 'triangleSolid',
                  },
                  '\u5B9E\u5FC3\u4E09\u89D2\u5F62',
                ),
                /*#__PURE__*/ _react['default'].createElement(
                  Option,
                  {
                    value: 'triangle',
                  },
                  '\u7A7A\u5FC3\u4E09\u89D2\u5F62',
                ),
                /*#__PURE__*/ _react['default'].createElement(
                  Option,
                  {
                    value: 'diamondSolid',
                  },
                  '\u5B9E\u5FC3\u83F1\u5F62',
                ),
                /*#__PURE__*/ _react['default'].createElement(
                  Option,
                  {
                    value: 'diamond',
                  },
                  '\u7A7A\u5FC3\u83F1\u5F62',
                ),
                /*#__PURE__*/ _react['default'].createElement(
                  Option,
                  {
                    value: 'circleSolid',
                  },
                  '\u5B9E\u5FC3\u5706',
                ),
                /*#__PURE__*/ _react['default'].createElement(
                  Option,
                  {
                    value: 'circle',
                  },
                  '\u7A7A\u5FC3\u5706',
                ),
                /*#__PURE__*/ _react['default'].createElement(
                  Option,
                  {
                    value: 'line',
                  },
                  '\u7EBF\u578B\u7BAD\u5934',
                ),
                /*#__PURE__*/ _react['default'].createElement(
                  Option,
                  {
                    value: 'lineUp',
                  },
                  '\u4E0A\u5355\u8FB9\u7EBF\u7BAD\u5934',
                ),
                /*#__PURE__*/ _react['default'].createElement(
                  Option,
                  {
                    value: 'lineDown',
                  },
                  '\u4E0B\u5355\u8FB9\u7EBF\u7BAD\u5934',
                ),
              ),
            ),
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Col,
            {
              span: 24,
            },
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Form.Item,
              {
                name: 'toArrow',
                label: '\u7ED3\u675F\u7BAD\u5934',
              },
              /*#__PURE__*/ _react['default'].createElement(
                _antd.Select,
                {
                  style: {
                    width: '95%',
                  },
                },
                /*#__PURE__*/ _react['default'].createElement(
                  Option,
                  {
                    value: '',
                  },
                  '\u65E0\u7BAD\u5934',
                ),
                /*#__PURE__*/ _react['default'].createElement(
                  Option,
                  {
                    value: 'triangleSolid',
                  },
                  '\u5B9E\u5FC3\u4E09\u89D2\u5F62',
                ),
                /*#__PURE__*/ _react['default'].createElement(
                  Option,
                  {
                    value: 'triangle',
                  },
                  '\u7A7A\u5FC3\u4E09\u89D2\u5F62',
                ),
                /*#__PURE__*/ _react['default'].createElement(
                  Option,
                  {
                    value: 'diamondSolid',
                  },
                  '\u5B9E\u5FC3\u83F1\u5F62',
                ),
                /*#__PURE__*/ _react['default'].createElement(
                  Option,
                  {
                    value: 'diamond',
                  },
                  '\u7A7A\u5FC3\u83F1\u5F62',
                ),
                /*#__PURE__*/ _react['default'].createElement(
                  Option,
                  {
                    value: 'circleSolid',
                  },
                  '\u5B9E\u5FC3\u5706',
                ),
                /*#__PURE__*/ _react['default'].createElement(
                  Option,
                  {
                    value: 'circle',
                  },
                  '\u7A7A\u5FC3\u5706',
                ),
                /*#__PURE__*/ _react['default'].createElement(
                  Option,
                  {
                    value: 'line',
                  },
                  '\u7EBF\u578B\u7BAD\u5934',
                ),
                /*#__PURE__*/ _react['default'].createElement(
                  Option,
                  {
                    value: 'lineUp',
                  },
                  '\u4E0A\u5355\u8FB9\u7EBF\u7BAD\u5934',
                ),
                /*#__PURE__*/ _react['default'].createElement(
                  Option,
                  {
                    value: 'lineDown',
                  },
                  '\u4E0B\u5355\u8FB9\u7EBF\u7BAD\u5934',
                ),
              ),
            ),
          ),
        ),
      );
    },
    [lineWidth, dash, name, toArrow, fromArrow, strokeStyle, type, data.line.data],
  );
  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    {
      className: 'rightArea',
    },
    /*#__PURE__*/ _react['default'].createElement(
      _antd.Collapse,
      {
        defaultActiveKey: ['1'],
        expandIconPosition: 'right',
        ghost: false,
        bordered: false,
      },
      /*#__PURE__*/ _react['default'].createElement(
        Panel,
        {
          header: '\u6837\u5F0F',
          key: '1',
        },
        renderForm,
      ),
    ),
  );
};

var _default = LineCanvasProps;
exports['default'] = _default;
