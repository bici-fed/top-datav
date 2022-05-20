'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/input-number/style');

var _inputNumber = _interopRequireDefault(require('antd/es/input-number'));

require('antd/es/col/style');

var _col = _interopRequireDefault(require('antd/es/col'));

require('antd/es/row/style');

var _row = _interopRequireDefault(require('antd/es/row'));

require('antd/es/form/style');

var _form = _interopRequireDefault(require('antd/es/form'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

require('antd/es/select/style');

var _select = _interopRequireDefault(require('antd/es/select'));

require('antd/es/tabs/style');

var _tabs = _interopRequireDefault(require('antd/es/tabs'));

require('antd/es/collapse/style');

var _collapse = _interopRequireDefault(require('antd/es/collapse'));

var _react = _interopRequireWildcard(require('react'));

require('./index.module.css');

var _ColorPicker = _interopRequireDefault(require('../../../common/ColorPicker/ColorPicker'));

var Panel = _collapse.default.Panel;
var TabPane = _tabs.default.TabPane;
var Option = _select.default.Option;

var LineCanvasProps = function LineCanvasProps(_ref) {
  var data = _ref.data,
    onFormValueChange = _ref.onFormValueChange;

  var _Form$useForm = _form.default.useForm(),
    _Form$useForm2 = (0, _slicedToArray2.default)(_Form$useForm, 1),
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

      return /*#__PURE__*/ _react.default.createElement(
        _form.default,
        {
          form: form,
          onValuesChange: handleFormValueChange,
        },
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
                name: 'strokeStyle',
                label: '\u7EBF\u6761\u989C\u8272',
              },
              /*#__PURE__*/ _react.default.createElement(_ColorPicker.default, null),
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
                name: 'name',
                label: '\u7EBF\u6761\u7C7B\u578B',
              },
              /*#__PURE__*/ _react.default.createElement(
                _select.default,
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
                  ? /*#__PURE__*/ _react.default.createElement(
                      _react.default.Fragment,
                      null,
                      /*#__PURE__*/ _react.default.createElement(
                        Option,
                        {
                          value: 'curve',
                        },
                        '\u8D1D\u585E\u5C14\u66F2\u7EBF',
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        Option,
                        {
                          value: 'polyline',
                        },
                        '\u6298\u7EBF',
                      ),
                    )
                  : '',
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: 'line',
                  },
                  '\u76F4\u7EBF',
                ),
              ),
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
                name: 'dash',
                label: '\u7EBF\u6761\u6837\u5F0F',
              },
              /*#__PURE__*/ _react.default.createElement(
                _select.default,
                {
                  style: {
                    width: '95%',
                  },
                },
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: 0,
                  },
                  '_________',
                ),
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: 1,
                  },
                  '---------',
                ),
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: 2,
                  },
                  '_ _ _ _ _',
                ),
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: 3,
                  },
                  '- . - . - .',
                ),
              ),
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
                name: 'lineWidth',
                label: '\u7EBF\u6761\u5BBD\u5EA6',
              },
              /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
                style: {
                  width: '95%',
                },
                min: 0,
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
                name: 'fromArrow',
                label: '\u8D77\u70B9\u7BAD\u5934',
              },
              /*#__PURE__*/ _react.default.createElement(
                _select.default,
                {
                  style: {
                    width: '95%',
                  },
                },
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: '',
                  },
                  '\u65E0\u7BAD\u5934',
                ),
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: 'triangleSolid',
                  },
                  '\u5B9E\u5FC3\u4E09\u89D2\u5F62',
                ),
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: 'triangle',
                  },
                  '\u7A7A\u5FC3\u4E09\u89D2\u5F62',
                ),
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: 'diamondSolid',
                  },
                  '\u5B9E\u5FC3\u83F1\u5F62',
                ),
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: 'diamond',
                  },
                  '\u7A7A\u5FC3\u83F1\u5F62',
                ),
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: 'circleSolid',
                  },
                  '\u5B9E\u5FC3\u5706',
                ),
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: 'circle',
                  },
                  '\u7A7A\u5FC3\u5706',
                ),
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: 'line',
                  },
                  '\u7EBF\u578B\u7BAD\u5934',
                ),
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: 'lineUp',
                  },
                  '\u4E0A\u5355\u8FB9\u7EBF\u7BAD\u5934',
                ),
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: 'lineDown',
                  },
                  '\u4E0B\u5355\u8FB9\u7EBF\u7BAD\u5934',
                ),
              ),
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
                name: 'toArrow',
                label: '\u7ED3\u675F\u7BAD\u5934',
              },
              /*#__PURE__*/ _react.default.createElement(
                _select.default,
                {
                  style: {
                    width: '95%',
                  },
                },
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: '',
                  },
                  '\u65E0\u7BAD\u5934',
                ),
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: 'triangleSolid',
                  },
                  '\u5B9E\u5FC3\u4E09\u89D2\u5F62',
                ),
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: 'triangle',
                  },
                  '\u7A7A\u5FC3\u4E09\u89D2\u5F62',
                ),
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: 'diamondSolid',
                  },
                  '\u5B9E\u5FC3\u83F1\u5F62',
                ),
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: 'diamond',
                  },
                  '\u7A7A\u5FC3\u83F1\u5F62',
                ),
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: 'circleSolid',
                  },
                  '\u5B9E\u5FC3\u5706',
                ),
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: 'circle',
                  },
                  '\u7A7A\u5FC3\u5706',
                ),
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: 'line',
                  },
                  '\u7EBF\u578B\u7BAD\u5934',
                ),
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: 'lineUp',
                  },
                  '\u4E0A\u5355\u8FB9\u7EBF\u7BAD\u5934',
                ),
                /*#__PURE__*/ _react.default.createElement(
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
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'rightArea',
    },
    /*#__PURE__*/ _react.default.createElement(
      _collapse.default,
      {
        defaultActiveKey: ['1'],
        expandIconPosition: 'right',
        ghost: false,
        bordered: false,
      },
      /*#__PURE__*/ _react.default.createElement(
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
exports.default = _default;
