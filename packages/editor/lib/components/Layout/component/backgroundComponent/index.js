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

var _ColorPicker = _interopRequireDefault(require('../../../common/ColorPicker/ColorPicker'));

var _ReactSwitch = _interopRequireDefault(require('../../../common/ReactSwitch'));

var _index = require('../../index');

var _iconConfig = _interopRequireDefault(require('../../../config/iconConfig'));

var _DynamicWebSocketData = require('../../../common/DynamicWebSocketData');

var _cacl = require('../../../utils/cacl');

var _ = _interopRequireWildcard(require('lodash'));

var _excluded = [
  'data',
  'baseUrl',
  'onChangeCanvasSize',
  'onChangeBkImage',
  'websocketConf',
  'uploadConfig',
];

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

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var Panel = _antd.Collapse.Panel;
var panelSizeObj = {
  '16:9': ['1920*1080', '1680*1050', '1600*900', '1366*768'],
  '4:3': ['1024*768', '800*600'],
  '2:3': ['1280*1920', '768*1024', '640*960', '600*800'],
};

var BackgroundCanvasProps = function BackgroundCanvasProps(_ref) {
  var data = _ref.data,
    baseUrl = _ref.baseUrl,
    onChangeCanvasSize = _ref.onChangeCanvasSize,
    onChangeBkImage = _ref.onChangeBkImage,
    websocketConf = _ref.websocketConf,
    uploadConfig = _ref.uploadConfig,
    props = _objectWithoutProperties(_ref, _excluded);

  var _Form$useForm = _antd.Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];

  var _useState = (0, _react.useState)(data.canvas.width <= data.canvas.height),
    _useState2 = _slicedToArray(_useState, 2),
    rcSwitchState = _useState2[0],
    setRcSwitchState = _useState2[1]; // 页面布局切换

  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    bkUrl = _useState4[0],
    setBkUrl = _useState4[1]; // 保存背景图片url地址
  // 控制Popover的显示隐藏

  var _useState5 = (0, _react.useState)({
      resolution: false,
      bgSelect: false, // 预设背景选择
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    popoverVisible = _useState6[0],
    setPopoverVisible = _useState6[1];

  var _useState7 = (0, _react.useState)(websocketConf.url),
    _useState8 = _slicedToArray(_useState7, 2),
    wsAddress = _useState8[0],
    setWsAddress = _useState8[1];

  var _useState9 = (0, _react.useState)('预设背景'),
    _useState10 = _slicedToArray(_useState9, 2),
    preBgImageName = _useState10[0],
    setPreBgImageName = _useState10[1];

  (0, _react.useEffect)(
    function () {
      // 回显数值
      var w = data.canvas.width;
      var h = data.canvas.height;
      var bgColor = data.data.bkColor; // const bkImage = data.data.bkImage;

      var isUploadBgImg = false;

      if (data.data.bkImage) {
        isUploadBgImg = !props.preInstallBgImages
          .map(function (item) {
            return item.img;
          })
          .includes(data.data.bkImage);

        var index = _.findIndex(props.preInstallBgImages, function (item) {
          return item.img == data.data.bkImage;
        });

        console.log('index==', index, props.preInstallBgImages, data.data.bkImage);

        if (index >= 0) {
          setPreBgImageName('预设背景' + (index + 1));
          form.setFieldsValue({
            bgVal: '预设背景' + (index + 1),
          });
        }
      }

      var sizeValText = Object.values(panelSizeObj).flat().includes(''.concat(w, '*').concat(h))
        ? '\u9884\u8BBE\xB7'.concat(w, '*').concat(h)
        : Object.values(panelSizeObj).flat().includes(''.concat(h, '*').concat(w))
        ? '\u9884\u8BBE\xB7'.concat(h, '*').concat(w)
        : '\u81EA\u5B9A\u4E49';
      form.setFieldsValue({
        sizeVal: sizeValText,
        w: w,
        h: h,
        bgColor: bgColor,
        bgColorCheck: !!bgColor,
        bgImgCheck: isUploadBgImg,
        gridCheck: data.data.grid ? data.data.grid : false,
        gridSize: data.data.gridSize,
        gridColor: data.data.gridColor,
      });
    },
    [form],
  );
  /**
   * 渲染位置和大小的表单
   */

  var handleFormValueChange = function handleFormValueChange(changeValues) {
    if (changeValues.bgColor) {
      data.data['bkColor'] = changeValues.bgColor;
      data.render();
      form.setFieldsValue({
        bgColorCheck: true,
      });
    }

    if (changeValues.gridSize) {
      var gridSize = parseInt(changeValues.gridSize);
      data.data['gridSize'] = gridSize;

      if (data.data.grid) {
        _index.canvas.render();
      }
    } else if (changeValues.gridColor) {
      data.data['gridColor'] = changeValues.gridColor;

      if (data.data.grid) {
        _index.canvas.render();
      }
    }

    props.setIsSave(false);
  }; // 背景图片checkbox切换

  var handleBgImgChange = function handleBgImgChange(e) {
    if (e.target.checked) {
      selectedBgImg(bkUrl);
    } else {
      _index.canvas.clearBkImg();

      delete data.data['bkImage'];

      _index.canvas.render();

      onChangeBkImage && onChangeBkImage('');
      props.setIsSave(false);
    }
  };

  var beforeUpload = function beforeUpload(file) {
    var isLt1M = file.size / 1024 / 1024 / 1024 < 10;

    if (!isLt1M) {
      _antd.message.error('上传图片不可大于10M');
    }

    return isLt1M;
  }; // 画布背景图片上传

  var bgUploadChange = function bgUploadChange(_ref2) {
    var file = _ref2.file;

    if (file.status === 'done') {
      var url = file.response.data[0];
      selectedBgImg(url);
      setBkUrl(url);
      form.setFieldsValue({
        bgImgCheck: true,
      });
    }
  }; // 设置背景图片

  var selectedBgImg = function selectedBgImg(url) {
    var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    if (data.data['bkImage'] && data.data['bkImage'] === url) {
      // 再次点击，取消图片
      _index.canvas.clearBkImg();

      data.data['bkImage'] = undefined;
      onChangeBkImage && onChangeBkImage('预设背景');
      setPreBgImageName('预设背景');
      form.setFieldsValue({
        bgVal: '预设背景',
      });
    } else {
      // 修改背景图片前，需要先canvas.clearBkImg清空旧图片
      _index.canvas.clearBkImg();

      data.data['bkImage'] = url;
      onChangeBkImage && onChangeBkImage(url);

      if (item) {
        setPreBgImageName('预设背景' + item.key);
        form.setFieldsValue({
          bgVal: '预设背景' + item.key,
        });
      } else {
        setPreBgImageName('预设背景');
        form.setFieldsValue({
          bgVal: '预设背景',
        });
      }
    }

    setPopoverVisible(
      _objectSpread(
        _objectSpread({}, popoverVisible),
        {},
        {
          bgSelect: false,
        },
      ),
    );

    _index.canvas.render();

    props.setIsSave(false);
  }; // 背景颜色显示隐藏

  var bkColorCheckChange = function bkColorCheckChange(e) {
    var result = e.target.checked ? form.getFieldValue('bgColor') : '#ccc';
    data.data['bkColor'] = result;

    if (!e.target.checked) {
      delete data.data['bkColor'];
    }

    _index.canvas.render();

    props.setIsSave(false);
  }; // 网格选择切换

  var gridOnChange = function gridOnChange(e) {
    // canvas.showGrid(e.target.checked);
    data.data.grid = e.target.checked;
    data.data.gridSize = form.getFieldValue('gridSize');

    _index.canvas.render();

    props.setIsSave(false);
  }; // 设置宽高

  var panelSizeChange = function panelSizeChange() {
    var _form$getFieldsValue = form.getFieldsValue(['w', 'h']),
      w = _form$getFieldsValue.w,
      h = _form$getFieldsValue.h;

    var width = parseInt(w);
    var height = parseInt(h);
    var r = (0, _cacl.calcCanvas)(width, height);
    data.resize({
      width: width,
      height: height,
    });

    _index.canvas.render();

    onChangeCanvasSize &&
      onChangeCanvasSize(
        _objectSpread(
          _objectSpread({}, r),
          {},
          {
            width: width,
            height: height,
          },
        ),
      );
    form.setFieldsValue({
      sizeVal: '\u81EA\u5B9A\u4E49',
    });
  }; // 画布布局切换

  var handleRCSwitchStateChange = function handleRCSwitchStateChange() {
    setRcSwitchState(!rcSwitchState); // 宽高互换

    var width = data.canvas.height;
    var height = data.canvas.width;
    var r = (0, _cacl.calcCanvas)(width, height);
    data.resize({
      width: width,
      height: height,
    });

    _index.canvas.render();

    onChangeCanvasSize &&
      onChangeCanvasSize(
        _objectSpread(
          _objectSpread({}, r),
          {},
          {
            width: width,
            height: height,
          },
        ),
      );
    form.setFieldsValue({
      w: width,
      h: height,
    });
  }; // 选择画布大小后重新渲染画布

  var selectedResolution = function selectedResolution(size) {
    var width = +size.split('*')[0];
    var height = +size.split('*')[1];
    form.setFieldsValue({
      w: width,
      h: height,
      sizeVal: '\u9884\u8BBE\xB7'.concat(width, '*').concat(height),
    });
    setRcSwitchState(!(width > height)); // 隐藏Popover

    setPopoverVisible(
      _objectSpread(
        _objectSpread({}, popoverVisible),
        {},
        {
          resolution: false,
        },
      ),
    );
    var r = (0, _cacl.calcCanvas)(width, height);

    _index.canvas.resize({
      width: width,
      height: height,
    });

    onChangeCanvasSize &&
      onChangeCanvasSize(
        _objectSpread(
          _objectSpread({}, r),
          {},
          {
            width: width,
            height: height,
          },
        ),
      );
  }; // 分辨率Popover

  var resolutionContent = (0, _react.useMemo)(
    function () {
      return /*#__PURE__*/ _react['default'].createElement(
        'div',
        null,
        Object.keys(panelSizeObj).map(function (key, index) {
          return /*#__PURE__*/ _react['default'].createElement(
            'div',
            {
              key: index,
            },
            /*#__PURE__*/ _react['default'].createElement('h3', null, key),
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Row,
              {
                gutter: [0, 16],
              },
              panelSizeObj[key].map(function (val, index) {
                return /*#__PURE__*/ _react['default'].createElement(
                  _antd.Col,
                  {
                    span: 12,
                    key: index,
                  },
                  /*#__PURE__*/ _react['default'].createElement(
                    'a',
                    {
                      href: '#',
                      onClick: function onClick(e) {
                        e.preventDefault();
                        selectedResolution(val);
                      },
                    },
                    val,
                  ),
                );
              }),
            ),
          );
        }),
      );
    },
    [panelSizeObj],
  );

  var bgSeletedContent = /*#__PURE__*/ _react['default'].createElement(
    'div',
    null,
    /*#__PURE__*/ _react['default'].createElement('h3', null, '\u9884\u8BBE\u56FE\u7247'),
    /*#__PURE__*/ _react['default'].createElement(
      'div',
      {
        style: {
          maxHeight: 500,
          overflowY: 'scroll',
        },
      },
      (props.preInstallBgImages || []).map(function (item) {
        return /*#__PURE__*/ _react['default'].createElement(
          _antd.Row,
          {
            key: item.key,
            style: {
              position: 'relative',
              cursor: 'pointer',
              border: '1px solid #096DD9',
              boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.06)',
            },
            onClick: function onClick() {
              return selectedBgImg(item.img, item);
            },
          },
          /*#__PURE__*/ _react['default'].createElement('img', {
            src: item.img,
            alt: '\u9884\u8BBE\u80CC\u666F'.concat(item),
            width: 260,
            height: 120,
          }),
          /*#__PURE__*/ _react['default'].createElement(_antd.Checkbox, {
            style: {
              position: 'absolute',
              top: 0,
              right: '5px',
            },
            checked: item.img === data.data.bkImage,
          }),
        );
      }),
    ),
  );

  var renderDefultOptions = /*#__PURE__*/ _react['default'].createElement(
    _antd.Collapse,
    {
      defaultActiveKey: ['1', '2', '3'],
      expandIconPosition: 'right',
      ghost: false,
      bordered: false,
    },
    /*#__PURE__*/ _react['default'].createElement(
      Panel,
      {
        header: '\u57FA\u7840\u5C5E\u6027',
        key: '1',
      },
      /*#__PURE__*/ _react['default'].createElement(
        _antd.Form,
        {
          form: form,
        },
        /*#__PURE__*/ _react['default'].createElement(
          _antd.Popover,
          {
            placement: 'bottom',
            trigger: 'click',
            transitionName: '',
            content: resolutionContent,
            visible: popoverVisible.resolution,
            onVisibleChange: function onVisibleChange(visible) {
              return setPopoverVisible(
                _objectSpread(
                  _objectSpread({}, popoverVisible),
                  {},
                  {
                    resolution: visible,
                  },
                ),
              );
            },
            getPopupContainer: function getPopupContainer() {
              return document.querySelector('#editLayout');
            },
          },
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Form.Item,
            {
              name: 'sizeVal',
              initialValue: '\u81EA\u5B9A\u4E49',
            },
            /*#__PURE__*/ _react['default'].createElement(_antd.Input, {
              suffix: /*#__PURE__*/ _react['default'].createElement(_icons.DownOutlined, null),
              readOnly: true,
            }),
          ),
        ),
        /*#__PURE__*/ _react['default'].createElement(
          _antd.Row,
          {
            style: {
              marginTop: 15,
            },
            gutter: [9, 0],
            align: 'middle',
          },
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Col,
            {
              span: 9,
            },
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Form.Item,
              {
                name: 'w',
              },
              /*#__PURE__*/ _react['default'].createElement(_antd.Input, {
                suffix: 'W',
                onChange: panelSizeChange,
              }),
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
                name: 'h',
              },
              /*#__PURE__*/ _react['default'].createElement(_antd.Input, {
                suffix: 'H',
                onChange: panelSizeChange,
              }),
            ),
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Col,
            {
              span: 5,
            },
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Form.Item,
              null,
              /*#__PURE__*/ _react['default'].createElement(_ReactSwitch['default'], {
                onChange: handleRCSwitchStateChange,
                checked: rcSwitchState,
                offHandleColor: '#096DD9',
                onHandleColor: '#096DD9',
                offColor: '#ccc',
                onColor: '#ccc',
                uncheckedIcon: /*#__PURE__*/ _react['default'].createElement(
                  _iconConfig['default'],
                  {
                    style: {
                      lineHeight: 2.2,
                    },
                    type: 'iconshu',
                  },
                ),
                checkedIcon: /*#__PURE__*/ _react['default'].createElement(_iconConfig['default'], {
                  style: {
                    lineHeight: 2.2,
                  },
                  type: 'iconheng',
                }),
              }),
            ),
          ),
        ),
      ),
    ),
    /*#__PURE__*/ _react['default'].createElement(
      Panel,
      {
        header: '\u80CC\u666F',
        key: '2',
      },
      /*#__PURE__*/ _react['default'].createElement(
        _antd.Form,
        {
          form: form,
          onValuesChange: handleFormValueChange,
        },
        /*#__PURE__*/ _react['default'].createElement(
          _antd.Popover,
          {
            placement: 'bottom',
            trigger: 'click',
            transitionName: '',
            content: bgSeletedContent,
            arrowPointAtCenter: true,
            autoAdjustOverflow: false,
            visible: popoverVisible.bgSelect,
            onVisibleChange: function onVisibleChange(visible) {
              return setPopoverVisible(
                _objectSpread(
                  _objectSpread({}, popoverVisible),
                  {},
                  {
                    bgSelect: visible,
                  },
                ),
              );
            },
            getPopupContainer: function getPopupContainer() {
              return document.querySelector('#editLayout');
            },
          },
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Form.Item,
            {
              name: 'bgVal',
              initialValue: preBgImageName,
            },
            /*#__PURE__*/ _react['default'].createElement(_antd.Input, {
              readOnly: true,
              suffix: /*#__PURE__*/ _react['default'].createElement(_icons.DownOutlined, null),
            }),
          ),
        ),
        /*#__PURE__*/ _react['default'].createElement(
          _antd.Row,
          {
            style: {
              marginTop: 15,
            },
            align: 'middle',
          },
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Col,
            {
              push: 1,
            },
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Form.Item,
              {
                name: 'bgColorCheck',
                label: '\u80CC\u666F\u989C\u8272',
                valuePropName: 'checked',
              },
              /*#__PURE__*/ _react['default'].createElement(_antd.Checkbox, {
                onChange: bkColorCheckChange,
              }),
            ),
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Col,
            {
              push: 2,
            },
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Form.Item,
              {
                name: 'bgColor',
              },
              /*#__PURE__*/ _react['default'].createElement(_ColorPicker['default'], null),
            ),
          ),
        ),
        /*#__PURE__*/ _react['default'].createElement(
          _antd.Row,
          null,
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Col,
            {
              push: 1,
            },
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Form.Item,
              {
                name: 'bgImgCheck',
                label: '\u80CC\u666F\u56FE\u7247',
                valuePropName: 'checked',
              },
              /*#__PURE__*/ _react['default'].createElement(_antd.Checkbox, {
                onChange: handleBgImgChange,
              }),
            ),
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Col,
            {
              push: 2,
            },
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Form.Item,
              null,
              /*#__PURE__*/ _react['default'].createElement(
                _antd.Upload,
                {
                  action: ''
                    .concat(uploadConfig.preInstall.baseURL, '/')
                    .concat(uploadConfig.preInstall.url),
                  accept: 'image/*',
                  data: uploadConfig.preInstall.data,
                  headers: {
                    token: uploadConfig.preInstall.token,
                  },
                  showUploadList: false,
                  beforeUpload: beforeUpload,
                  onChange: bgUploadChange,
                },
                /*#__PURE__*/ _react['default'].createElement(
                  _antd.Button,
                  {
                    icon: /*#__PURE__*/ _react['default'].createElement(
                      _icons.UploadOutlined,
                      null,
                    ),
                  },
                  '\u4E0A\u4F20',
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    /*#__PURE__*/ _react['default'].createElement(
      Panel,
      {
        header: '\u7F51\u683C',
        key: '3',
      },
      /*#__PURE__*/ _react['default'].createElement(
        _antd.Form,
        {
          form: form,
          onValuesChange: handleFormValueChange,
        },
        /*#__PURE__*/ _react['default'].createElement(
          _antd.Row,
          {
            align: 'middle',
          },
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Col,
            {
              push: 1,
            },
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Form.Item,
              {
                name: 'gridCheck',
                label: '\u7F51\u683C',
                valuePropName: 'checked',
              },
              /*#__PURE__*/ _react['default'].createElement(_antd.Checkbox, {
                onChange: gridOnChange,
              }),
            ),
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Col,
            {
              push: 2,
            },
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Form.Item,
              {
                name: 'gridColor',
              },
              /*#__PURE__*/ _react['default'].createElement(_ColorPicker['default'], null),
            ),
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Col,
            {
              push: 3,
              span: 8,
            },
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Form.Item,
              {
                name: 'gridSize',
                initialValue: 30,
              },
              /*#__PURE__*/ _react['default'].createElement(_antd.InputNumber, {
                min: 1,
              }),
            ),
          ),
        ),
      ),
    ),
  );
  /**
   * 发起websocket连接
   */

  var onHandleConnectWS = function onHandleConnectWS() {
    _index.canvas.openSocket(wsAddress); // 将绑定获得wenbsocket数据

    (0, _DynamicWebSocketData.dynamicWebSocketData)(); // const index = new WebSocket(wsAddress);
    // //打开事件
    // index.onopen = function() {
    //
    //   index.send(JSON.stringify({
    //     qtDataList: [{id: "6413f3a606754c31987ec584ed56d5b7", type: 2},{id: "b32723eaebfe48aaa0f85970c3a39036", type: 2}],
    //     subscribe: true
    //   }));
    // };
    // //获得消息事件
    // index.onmessage = function(msg) {
    //   //发现消息进入    开始处理前端触发逻辑
    // };
    // //关闭事件
    // index.onclose = function() {
    // };
    // //发生了错误事件
    // index.onerror = function() {
    //   alert("Socket发生了错误");
    //   //此时可以尝试刷新页面
    // }
  };

  return /*#__PURE__*/ _react['default'].createElement('div', null, renderDefultOptions);
};

var _default = BackgroundCanvasProps;
exports['default'] = _default;
