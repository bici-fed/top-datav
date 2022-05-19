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

require('./index.css');

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

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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

var TextArea = _antd.Input.TextArea;
var Panel = _antd.Collapse.Panel;

var Page = function Page(_ref) {
  var onEventValueChange = _ref.onEventValueChange,
    canvasData = _ref.canvasData;

  var _Form$useForm = _antd.Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];

  var _useState = (0, _react.useState)(canvasData.node.events),
    _useState2 = _slicedToArray(_useState, 2),
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
    var arr = _toConsumableArray(eventData);

    arr.push({
      type: '0',
      action: '0',
    });
    setEventData(arr);
  };

  var onHandleEventTypeChange = function onHandleEventTypeChange(e, idx) {
    var data = _toConsumableArray(eventData);

    data[idx].type = e; // resetFields();

    setEventData(data);
  };

  var onHandleSelectEvent = function onHandleSelectEvent(e, idx) {
    var data = _toConsumableArray(eventData);

    data[idx].action = e; // resetFields();

    setEventData(data);
  };
  /**
   * 渲染自定义事件表单入口
   */
  // eslint-disable-next-line react-hooks/exhaustive-deps

  var renderFontForm = function renderFontForm(item, idx) {
    return /*#__PURE__*/ _react['default'].createElement(
      _antd.Form,
      {
        form: form,
      },
      /*#__PURE__*/ _react['default'].createElement(
        _antd.Col,
        {
          span: 24,
        },
        /*#__PURE__*/ _react['default'].createElement(
          _antd.Form.Item,
          {
            label: '\u4E8B\u4EF6\u7C7B\u578B',
          },
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Select,
            {
              placeholder: '\u8BF7\u9009\u62E9\u4E8B\u4EF6\u7C7B\u578B',
              onSelect: function onSelect(value) {
                return onHandleEventTypeChange(value, idx);
              },
            },
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Select.Option,
              {
                value: '0',
              },
              '\u5355\u51FB',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Select.Option,
              {
                value: '1',
              },
              '\u53CC\u51FB',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Select.Option,
              {
                value: '2',
              },
              'webSocket\u4E8B\u4EF6',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Select.Option,
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
      return /*#__PURE__*/ _react['default'].createElement(
        _react['default'].Fragment,
        null,
        /*#__PURE__*/ _react['default'].createElement(
          _antd.Col,
          {
            span: 24,
          },
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Form.Item,
            {
              label: '\u4E8B\u4EF6\u884C\u4E3A',
            },
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Select,
              {
                placeholder: '\u8BF7\u9009\u62E9\u4E8B\u4EF6\u884C\u4E3A',
                onSelect: function onSelect(value) {
                  return onHandleSelectEvent(value, idx);
                },
              },
              /*#__PURE__*/ _react['default'].createElement(
                _antd.Select.Option,
                {
                  value: '0',
                },
                '\u8DF3\u8F6C\u94FE\u63A5',
              ),
              /*#__PURE__*/ _react['default'].createElement(
                _antd.Select.Option,
                {
                  value: '1',
                },
                '\u6267\u884C\u52A8\u753B',
              ),
              /*#__PURE__*/ _react['default'].createElement(
                _antd.Select.Option,
                {
                  value: '2',
                },
                '\u6267\u884C\u51FD\u6570',
              ),
              /*#__PURE__*/ _react['default'].createElement(
                _antd.Select.Option,
                {
                  value: '3',
                },
                '\u6267\u884Cwindow\u4E0B\u7684\u5168\u5C40\u51FD\u6570',
              ),
              /*#__PURE__*/ _react['default'].createElement(
                _antd.Select.Option,
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
        return /*#__PURE__*/ _react['default'].createElement(
          _react['default'].Fragment,
          null,
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Col,
            {
              span: 24,
            },
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Form.Item,
              {
                label: '\u6D88\u606F\u540D',
              },
              /*#__PURE__*/ _react['default'].createElement(_antd.Input, {
                placeholder: '\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u6D88\u606F\u540D',
              }),
            ),
          ),
          renderCommonForm(),
        );

      case '3':
        return /*#__PURE__*/ _react['default'].createElement(
          _react['default'].Fragment,
          null,
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Form.Item,
            {
              label: 'Topic',
            },
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Col,
              {
                span: 24,
              },
              /*#__PURE__*/ _react['default'].createElement(_antd.Input, {
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
        return /*#__PURE__*/ _react['default'].createElement(
          _react['default'].Fragment,
          null,
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Col,
            {
              span: 24,
            },
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Form.Item,
              {
                label: '\u94FE\u63A5\u5730\u5740',
              },
              /*#__PURE__*/ _react['default'].createElement(_antd.Input, {
                placeholder: '\u8BF7\u8F93\u5165\u94FE\u63A5\u5730\u5740',
                onChange: function onChange(e) {
                  return onHandleCodeChange(e, idx);
                },
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
                label: '\u53C2\u6570\u503C',
              },
              /*#__PURE__*/ _react['default'].createElement(_antd.Input, {
                placeholder: '_black',
              }),
            ),
          ),
        );

      case '2':
        return /*#__PURE__*/ _react['default'].createElement(
          _antd.Col,
          {
            span: 24,
          },
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Form.Item,
            {
              label: '\u81EA\u5B9A\u4E49\u4EE3\u7801',
            },
            /*#__PURE__*/ _react['default'].createElement(TextArea, {
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
      var data = _toConsumableArray(eventData);

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
      return /*#__PURE__*/ _react['default'].createElement(
        _antd.Collapse,
        null,
        eventData
          .map(function (item) {
            return _objectSpread(
              _objectSpread({}, item),
              {},
              {
                action: String(item.action),
                type: String(item.type),
              },
            );
          })
          .map(function (item, index) {
            return /*#__PURE__*/ _react['default'].createElement(
              Panel,
              {
                header: /*#__PURE__*/ _react['default'].createElement(
                  'a',
                  null,
                  '\u81EA\u5B9A\u4E49\u4E8B\u4EF6'.concat(index + 1),
                  ' ',
                  /*#__PURE__*/ _react['default'].createElement(
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
  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    null,
    /*#__PURE__*/ _react['default'].createElement(
      _antd.Button,
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
exports['default'] = _default;
