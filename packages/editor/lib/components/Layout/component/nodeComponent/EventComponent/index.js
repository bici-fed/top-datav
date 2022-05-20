'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/button/style');

var _button = _interopRequireDefault(require('antd/es/button'));

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread2'));

require('antd/es/select/style');

var _select = _interopRequireDefault(require('antd/es/select'));

require('antd/es/col/style');

var _col = _interopRequireDefault(require('antd/es/col'));

var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray'),
);

require('antd/es/form/style');

var _form = _interopRequireDefault(require('antd/es/form'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

require('antd/es/collapse/style');

var _collapse = _interopRequireDefault(require('antd/es/collapse'));

require('antd/es/input/style');

var _input = _interopRequireDefault(require('antd/es/input'));

var _react = _interopRequireWildcard(require('react'));

require('./index.css');

var TextArea = _input.default.TextArea;
var Panel = _collapse.default.Panel;

var Page = function Page(_ref) {
  var onEventValueChange = _ref.onEventValueChange,
    canvasData = _ref.canvasData;

  var _Form$useForm = _form.default.useForm(),
    _Form$useForm2 = (0, _slicedToArray2.default)(_Form$useForm, 1),
    form = _Form$useForm2[0];

  var _useState = (0, _react.useState)(canvasData.node.events),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    eventData = _useState2[0],
    setEventData = _useState2[1];

  (0, _react.useEffect)(
    function () {
      setEventData(canvasData.node.events);
    },
    [canvasData],
  );
  /**
   * 新增事件
   */

  var onHandleAddEventListener = function onHandleAddEventListener() {
    var arr = (0, _toConsumableArray2.default)(eventData);
    arr.push({
      type: '0',
      action: '0',
    });
    setEventData(arr);
  };

  var onHandleEventTypeChange = function onHandleEventTypeChange(e, idx) {
    var data = (0, _toConsumableArray2.default)(eventData);
    data[idx].type = e; // resetFields();

    setEventData(data);
  };

  var onHandleSelectEvent = function onHandleSelectEvent(e, idx) {
    var data = (0, _toConsumableArray2.default)(eventData);
    data[idx].action = e; // resetFields();

    setEventData(data);
  };
  /**
   * 渲染自定义事件表单入口
   */
  // eslint-disable-next-line react-hooks/exhaustive-deps

  var renderFontForm = function renderFontForm(item, idx) {
    return /*#__PURE__*/ _react.default.createElement(
      _form.default,
      {
        form: form,
      },
      /*#__PURE__*/ _react.default.createElement(
        _col.default,
        {
          span: 24,
        },
        /*#__PURE__*/ _react.default.createElement(
          _form.default.Item,
          {
            label: '\u4E8B\u4EF6\u7C7B\u578B',
          },
          /*#__PURE__*/ _react.default.createElement(
            _select.default,
            {
              placeholder: '\u8BF7\u9009\u62E9\u4E8B\u4EF6\u7C7B\u578B',
              onSelect: function onSelect(value) {
                return onHandleEventTypeChange(value, idx);
              },
            },
            /*#__PURE__*/ _react.default.createElement(
              _select.default.Option,
              {
                value: '0',
              },
              '\u5355\u51FB',
            ),
            /*#__PURE__*/ _react.default.createElement(
              _select.default.Option,
              {
                value: '1',
              },
              '\u53CC\u51FB',
            ),
            /*#__PURE__*/ _react.default.createElement(
              _select.default.Option,
              {
                value: '2',
              },
              'webSocket\u4E8B\u4EF6',
            ),
            /*#__PURE__*/ _react.default.createElement(
              _select.default.Option,
              {
                value: '3',
              },
              'MQTT',
            ),
          ),
        ),
      ),
      renderFormByEventType(item, idx),
    );
  };
  /**
   * 根据事件类型渲染事件行为表单
   */

  var renderFormByEventType = function renderFormByEventType(item, idx) {
    var renderCommonForm = function renderCommonForm() {
      return /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        /*#__PURE__*/ _react.default.createElement(
          _col.default,
          {
            span: 24,
          },
          /*#__PURE__*/ _react.default.createElement(
            _form.default.Item,
            {
              label: '\u4E8B\u4EF6\u884C\u4E3A',
            },
            /*#__PURE__*/ _react.default.createElement(
              _select.default,
              {
                placeholder: '\u8BF7\u9009\u62E9\u4E8B\u4EF6\u884C\u4E3A',
                onSelect: function onSelect(value) {
                  return onHandleSelectEvent(value, idx);
                },
              },
              /*#__PURE__*/ _react.default.createElement(
                _select.default.Option,
                {
                  value: '0',
                },
                '\u8DF3\u8F6C\u94FE\u63A5',
              ),
              /*#__PURE__*/ _react.default.createElement(
                _select.default.Option,
                {
                  value: '1',
                },
                '\u6267\u884C\u52A8\u753B',
              ),
              /*#__PURE__*/ _react.default.createElement(
                _select.default.Option,
                {
                  value: '2',
                },
                '\u6267\u884C\u51FD\u6570',
              ),
              /*#__PURE__*/ _react.default.createElement(
                _select.default.Option,
                {
                  value: '3',
                },
                '\u6267\u884Cwindow\u4E0B\u7684\u5168\u5C40\u51FD\u6570',
              ),
              /*#__PURE__*/ _react.default.createElement(
                _select.default.Option,
                {
                  value: '4',
                },
                '\u66F4\u65B0\u5C5E\u6027\u6570\u636E',
              ),
            ),
          ),
        ),
        renderFormByEvent(item, idx),
      );
    };

    switch (item.type) {
      case '0':
      case '1':
        return renderCommonForm();

      case '2':
        return /*#__PURE__*/ _react.default.createElement(
          _react.default.Fragment,
          null,
          /*#__PURE__*/ _react.default.createElement(
            _col.default,
            {
              span: 24,
            },
            /*#__PURE__*/ _react.default.createElement(
              _form.default.Item,
              {
                label: '\u6D88\u606F\u540D',
              },
              /*#__PURE__*/ _react.default.createElement(_input.default, {
                placeholder: '\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u6D88\u606F\u540D',
              }),
            ),
          ),
          renderCommonForm(),
        );

      case '3':
        return /*#__PURE__*/ _react.default.createElement(
          _react.default.Fragment,
          null,
          /*#__PURE__*/ _react.default.createElement(
            _form.default.Item,
            {
              label: 'Topic',
            },
            /*#__PURE__*/ _react.default.createElement(
              _col.default,
              {
                span: 24,
              },
              /*#__PURE__*/ _react.default.createElement(_input.default, {
                placeholder: '\u8BF7\u8F93\u5165Topic/subtopic',
              }),
            ),
          ),
          renderCommonForm(),
        );

      default:
        break;
    }
  };
  /**
   * 根据事件行为生成不同的表单
   */

  var renderFormByEvent = function renderFormByEvent(item, idx) {
    switch (item.action) {
      case '0':
        return /*#__PURE__*/ _react.default.createElement(
          _react.default.Fragment,
          null,
          /*#__PURE__*/ _react.default.createElement(
            _col.default,
            {
              span: 24,
            },
            /*#__PURE__*/ _react.default.createElement(
              _form.default.Item,
              {
                label: '\u94FE\u63A5\u5730\u5740',
              },
              /*#__PURE__*/ _react.default.createElement(_input.default, {
                placeholder: '\u8BF7\u8F93\u5165\u94FE\u63A5\u5730\u5740',
                onChange: function onChange(e) {
                  return onHandleCodeChange(e, idx);
                },
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
                label: '\u53C2\u6570\u503C',
              },
              /*#__PURE__*/ _react.default.createElement(_input.default, {
                placeholder: '_black',
              }),
            ),
          ),
        );

      case '2':
        return /*#__PURE__*/ _react.default.createElement(
          _col.default,
          {
            span: 24,
          },
          /*#__PURE__*/ _react.default.createElement(
            _form.default.Item,
            {
              label: '\u81EA\u5B9A\u4E49\u4EE3\u7801',
            },
            /*#__PURE__*/ _react.default.createElement(TextArea, {
              placeholder: '\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u4EE3\u7801',
              onChange: function onChange(e) {
                return onHandleCodeChange(e, idx);
              },
              rows: 10,
            }),
          ),
        );

      default:
        break;
    }
  };
  /**
   * value值的变化, 通知canvas更新画布的数据
   */

  var onHandleCodeChange = function onHandleCodeChange(e, idx) {
    // validateFields((err, value) => {
    //   if (err) return;
    //   eventData[idx] = {
    //     type: null,
    //     action: null,
    //     value: null
    //   };
    //   eventData[idx].type = +value[`eventType${idx}`];
    //   eventData[idx].action = +value[`event${idx}`];
    //   eventData[idx].value = e.target.value;
    //   eventData[idx].params = value[`params${idx}`] || '';
    //   onEventValueChange(eventData);
    // });
  };
  /**
   * 删除自定义事件
   */

  var onHandleDeleteItem = (0, _react.useCallback)(
    function (idx) {
      var data = (0, _toConsumableArray2.default)(eventData);
      delete data[idx]; // resetFields();

      setEventData(data.filter(Boolean));
    },
    [eventData],
  );
  /**
   * 渲染事件列表
   */

  var renderPanel = (0, _react.useMemo)(
    function () {
      if (eventData.length < 1) return;
      return /*#__PURE__*/ _react.default.createElement(
        _collapse.default,
        null,
        eventData
          .map(function (item) {
            return (0, _objectSpread2.default)(
              (0, _objectSpread2.default)({}, item),
              {},
              {
                action: String(item.action),
                type: String(item.type),
              },
            );
          })
          .map(function (item, index) {
            return /*#__PURE__*/ _react.default.createElement(
              Panel,
              {
                header: /*#__PURE__*/ _react.default.createElement(
                  'a',
                  null,
                  '\u81EA\u5B9A\u4E49\u4E8B\u4EF6'.concat(index + 1),
                  ' ',
                  /*#__PURE__*/ _react.default.createElement(
                    'span',
                    {
                      onClick: function onClick() {
                        return onHandleDeleteItem(index);
                      },
                    },
                    'delete',
                  ),
                ),
                key: index,
              },
              renderFontForm(item, index),
            );
          }),
      );
    },
    [eventData, renderFontForm, onHandleDeleteItem],
  );
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    null,
    /*#__PURE__*/ _react.default.createElement(
      _button.default,
      {
        type: 'primary',
        className: 'event-button',
        onClick: onHandleAddEventListener,
      },
      '\u65B0\u589E\u4E8B\u4EF6',
    ),
    renderPanel,
  );
};

var _default = Page;
exports.default = _default;
