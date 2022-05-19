import 'antd/lib/input-number/style';
import _InputNumber from 'antd/lib/input-number';
import 'antd/lib/col/style';
import _Col from 'antd/lib/col';
import 'antd/lib/row/style';
import _Row from 'antd/lib/row';
import 'antd/lib/form/style';
import _Form from 'antd/lib/form';
import 'antd/lib/select/style';
import _Select from 'antd/lib/select';
import 'antd/lib/tabs/style';
import _Tabs from 'antd/lib/tabs';
import 'antd/lib/collapse/style';
import _Collapse from 'antd/lib/collapse';

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

import React, { useMemo, useEffect } from 'react';
import './index.module.css';
import ColorPicker from '../../../common/ColorPicker/ColorPicker';
var Panel = _Collapse.Panel;
var TabPane = _Tabs.TabPane;
var Option = _Select.Option;

var LineCanvasProps = function LineCanvasProps(_ref) {
  var data = _ref.data,
    onFormValueChange = _ref.onFormValueChange;

  var _Form$useForm = _Form.useForm(),
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

  useEffect(
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

  var renderForm = useMemo(
    function () {
      var _data$line, _data$line$data;

      return /*#__PURE__*/ React.createElement(
        _Form,
        {
          form: form,
          onValuesChange: handleFormValueChange,
        },
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
                name: 'strokeStyle',
                label: '\u7EBF\u6761\u989C\u8272',
              },
              /*#__PURE__*/ React.createElement(ColorPicker, null),
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
                name: 'name',
                label: '\u7EBF\u6761\u7C7B\u578B',
              },
              /*#__PURE__*/ React.createElement(
                _Select,
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
                  ? /*#__PURE__*/ React.createElement(
                      React.Fragment,
                      null,
                      /*#__PURE__*/ React.createElement(
                        Option,
                        {
                          value: 'curve',
                        },
                        '\u8D1D\u585E\u5C14\u66F2\u7EBF',
                      ),
                      /*#__PURE__*/ React.createElement(
                        Option,
                        {
                          value: 'polyline',
                        },
                        '\u6298\u7EBF',
                      ),
                    )
                  : '',
                /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    value: 'line',
                  },
                  '\u76F4\u7EBF',
                ),
              ),
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
                name: 'dash',
                label: '\u7EBF\u6761\u6837\u5F0F',
              },
              /*#__PURE__*/ React.createElement(
                _Select,
                {
                  style: {
                    width: '95%',
                  },
                },
                /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    value: 0,
                  },
                  '_________',
                ),
                /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    value: 1,
                  },
                  '---------',
                ),
                /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    value: 2,
                  },
                  '_ _ _ _ _',
                ),
                /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    value: 3,
                  },
                  '- . - . - .',
                ),
              ),
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
                name: 'lineWidth',
                label: '\u7EBF\u6761\u5BBD\u5EA6',
              },
              /*#__PURE__*/ React.createElement(_InputNumber, {
                style: {
                  width: '95%',
                },
                min: 0,
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
                name: 'fromArrow',
                label: '\u8D77\u70B9\u7BAD\u5934',
              },
              /*#__PURE__*/ React.createElement(
                _Select,
                {
                  style: {
                    width: '95%',
                  },
                },
                /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    value: '',
                  },
                  '\u65E0\u7BAD\u5934',
                ),
                /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    value: 'triangleSolid',
                  },
                  '\u5B9E\u5FC3\u4E09\u89D2\u5F62',
                ),
                /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    value: 'triangle',
                  },
                  '\u7A7A\u5FC3\u4E09\u89D2\u5F62',
                ),
                /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    value: 'diamondSolid',
                  },
                  '\u5B9E\u5FC3\u83F1\u5F62',
                ),
                /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    value: 'diamond',
                  },
                  '\u7A7A\u5FC3\u83F1\u5F62',
                ),
                /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    value: 'circleSolid',
                  },
                  '\u5B9E\u5FC3\u5706',
                ),
                /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    value: 'circle',
                  },
                  '\u7A7A\u5FC3\u5706',
                ),
                /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    value: 'line',
                  },
                  '\u7EBF\u578B\u7BAD\u5934',
                ),
                /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    value: 'lineUp',
                  },
                  '\u4E0A\u5355\u8FB9\u7EBF\u7BAD\u5934',
                ),
                /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    value: 'lineDown',
                  },
                  '\u4E0B\u5355\u8FB9\u7EBF\u7BAD\u5934',
                ),
              ),
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
                name: 'toArrow',
                label: '\u7ED3\u675F\u7BAD\u5934',
              },
              /*#__PURE__*/ React.createElement(
                _Select,
                {
                  style: {
                    width: '95%',
                  },
                },
                /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    value: '',
                  },
                  '\u65E0\u7BAD\u5934',
                ),
                /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    value: 'triangleSolid',
                  },
                  '\u5B9E\u5FC3\u4E09\u89D2\u5F62',
                ),
                /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    value: 'triangle',
                  },
                  '\u7A7A\u5FC3\u4E09\u89D2\u5F62',
                ),
                /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    value: 'diamondSolid',
                  },
                  '\u5B9E\u5FC3\u83F1\u5F62',
                ),
                /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    value: 'diamond',
                  },
                  '\u7A7A\u5FC3\u83F1\u5F62',
                ),
                /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    value: 'circleSolid',
                  },
                  '\u5B9E\u5FC3\u5706',
                ),
                /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    value: 'circle',
                  },
                  '\u7A7A\u5FC3\u5706',
                ),
                /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    value: 'line',
                  },
                  '\u7EBF\u578B\u7BAD\u5934',
                ),
                /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    value: 'lineUp',
                  },
                  '\u4E0A\u5355\u8FB9\u7EBF\u7BAD\u5934',
                ),
                /*#__PURE__*/ React.createElement(
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
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'rightArea',
    },
    /*#__PURE__*/ React.createElement(
      _Collapse,
      {
        defaultActiveKey: ['1'],
        expandIconPosition: 'right',
        ghost: false,
        bordered: false,
      },
      /*#__PURE__*/ React.createElement(
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

export default LineCanvasProps;
