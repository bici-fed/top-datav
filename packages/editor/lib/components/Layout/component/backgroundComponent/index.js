'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/input-number/style');

var _inputNumber = _interopRequireDefault(require('antd/es/input-number'));

require('antd/es/button/style');

var _button = _interopRequireDefault(require('antd/es/button'));

require('antd/es/upload/style');

var _upload = _interopRequireDefault(require('antd/es/upload'));

require('antd/es/input/style');

var _input = _interopRequireDefault(require('antd/es/input'));

require('antd/es/popover/style');

var _popover = _interopRequireDefault(require('antd/es/popover'));

require('antd/es/checkbox/style');

var _checkbox = _interopRequireDefault(require('antd/es/checkbox'));

require('antd/es/col/style');

var _col = _interopRequireDefault(require('antd/es/col'));

require('antd/es/row/style');

var _row = _interopRequireDefault(require('antd/es/row'));

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread2'));

require('antd/es/message/style');

var _message2 = _interopRequireDefault(require('antd/es/message'));

require('antd/es/form/style');

var _form = _interopRequireDefault(require('antd/es/form'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties'),
);

require('antd/es/collapse/style');

var _collapse = _interopRequireDefault(require('antd/es/collapse'));

var _react = _interopRequireWildcard(require('react'));

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
var Panel = _collapse.default.Panel;
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
    props = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _Form$useForm = _form.default.useForm(),
    _Form$useForm2 = (0, _slicedToArray2.default)(_Form$useForm, 1),
    form = _Form$useForm2[0];

  var _useState = (0, _react.useState)(data.canvas.width <= data.canvas.height),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    rcSwitchState = _useState2[0],
    setRcSwitchState = _useState2[1]; // 页面布局切换

  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    bkUrl = _useState4[0],
    setBkUrl = _useState4[1]; // 保存背景图片url地址
  // 控制Popover的显示隐藏

  var _useState5 = (0, _react.useState)({
      resolution: false,
      bgSelect: false, // 预设背景选择
    }),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    popoverVisible = _useState6[0],
    setPopoverVisible = _useState6[1];

  var _useState7 = (0, _react.useState)(websocketConf.url),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    wsAddress = _useState8[0],
    setWsAddress = _useState8[1];

  var _useState9 = (0, _react.useState)('预设背景'),
    _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
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
      _message2.default.error('上传图片不可大于10M');
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
      (0, _objectSpread2.default)(
        (0, _objectSpread2.default)({}, popoverVisible),
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
        (0, _objectSpread2.default)(
          (0, _objectSpread2.default)({}, r),
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
        (0, _objectSpread2.default)(
          (0, _objectSpread2.default)({}, r),
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
      (0, _objectSpread2.default)(
        (0, _objectSpread2.default)({}, popoverVisible),
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
        (0, _objectSpread2.default)(
          (0, _objectSpread2.default)({}, r),
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
      return /*#__PURE__*/ _react.default.createElement(
        'div',
        null,
        Object.keys(panelSizeObj).map(function (key, index) {
          return /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              key: index,
            },
            /*#__PURE__*/ _react.default.createElement('h3', null, key),
            /*#__PURE__*/ _react.default.createElement(
              _row.default,
              {
                gutter: [0, 16],
              },
              panelSizeObj[key].map(function (val, index) {
                return /*#__PURE__*/ _react.default.createElement(
                  _col.default,
                  {
                    span: 12,
                    key: index,
                  },
                  /*#__PURE__*/ _react.default.createElement(
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

  var bgSeletedContent = /*#__PURE__*/ _react.default.createElement(
    'div',
    null,
    /*#__PURE__*/ _react.default.createElement('h3', null, '\u9884\u8BBE\u56FE\u7247'),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        style: {
          maxHeight: 500,
          overflowY: 'scroll',
        },
      },
      (props.preInstallBgImages || []).map(function (item) {
        return /*#__PURE__*/ _react.default.createElement(
          _row.default,
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
          /*#__PURE__*/ _react.default.createElement('img', {
            src: item.img,
            alt: '\u9884\u8BBE\u80CC\u666F'.concat(item),
            width: 260,
            height: 120,
          }),
          /*#__PURE__*/ _react.default.createElement(_checkbox.default, {
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

  var renderDefultOptions = /*#__PURE__*/ _react.default.createElement(
    _collapse.default,
    {
      defaultActiveKey: ['1', '2', '3'],
      expandIconPosition: 'right',
      ghost: false,
      bordered: false,
    },
    /*#__PURE__*/ _react.default.createElement(
      Panel,
      {
        header: '\u57FA\u7840\u5C5E\u6027',
        key: '1',
      },
      /*#__PURE__*/ _react.default.createElement(
        _form.default,
        {
          form: form,
        },
        /*#__PURE__*/ _react.default.createElement(
          _popover.default,
          {
            placement: 'bottom',
            trigger: 'click',
            transitionName: '',
            content: resolutionContent,
            visible: popoverVisible.resolution,
            onVisibleChange: function onVisibleChange(visible) {
              return setPopoverVisible(
                (0, _objectSpread2.default)(
                  (0, _objectSpread2.default)({}, popoverVisible),
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
          /*#__PURE__*/ _react.default.createElement(
            _form.default.Item,
            {
              name: 'sizeVal',
              initialValue: '\u81EA\u5B9A\u4E49',
            },
            /*#__PURE__*/ _react.default.createElement(_input.default, {
              suffix: /*#__PURE__*/ _react.default.createElement(_icons.DownOutlined, null),
              readOnly: true,
            }),
          ),
        ),
        /*#__PURE__*/ _react.default.createElement(
          _row.default,
          {
            style: {
              marginTop: 15,
            },
            gutter: [9, 0],
            align: 'middle',
          },
          /*#__PURE__*/ _react.default.createElement(
            _col.default,
            {
              span: 9,
            },
            /*#__PURE__*/ _react.default.createElement(
              _form.default.Item,
              {
                name: 'w',
              },
              /*#__PURE__*/ _react.default.createElement(_input.default, {
                suffix: 'W',
                onChange: panelSizeChange,
              }),
            ),
          ),
          /*#__PURE__*/ _react.default.createElement(
            _col.default,
            {
              span: 9,
            },
            /*#__PURE__*/ _react.default.createElement(
              _form.default.Item,
              {
                name: 'h',
              },
              /*#__PURE__*/ _react.default.createElement(_input.default, {
                suffix: 'H',
                onChange: panelSizeChange,
              }),
            ),
          ),
          /*#__PURE__*/ _react.default.createElement(
            _col.default,
            {
              span: 5,
            },
            /*#__PURE__*/ _react.default.createElement(
              _form.default.Item,
              null,
              /*#__PURE__*/ _react.default.createElement(_ReactSwitch.default, {
                onChange: handleRCSwitchStateChange,
                checked: rcSwitchState,
                offHandleColor: '#096DD9',
                onHandleColor: '#096DD9',
                offColor: '#ccc',
                onColor: '#ccc',
                uncheckedIcon: /*#__PURE__*/ _react.default.createElement(_iconConfig.default, {
                  style: {
                    lineHeight: 2.2,
                  },
                  type: 'iconshu',
                }),
                checkedIcon: /*#__PURE__*/ _react.default.createElement(_iconConfig.default, {
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
    /*#__PURE__*/ _react.default.createElement(
      Panel,
      {
        header: '\u80CC\u666F',
        key: '2',
      },
      /*#__PURE__*/ _react.default.createElement(
        _form.default,
        {
          form: form,
          onValuesChange: handleFormValueChange,
        },
        /*#__PURE__*/ _react.default.createElement(
          _popover.default,
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
                (0, _objectSpread2.default)(
                  (0, _objectSpread2.default)({}, popoverVisible),
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
          /*#__PURE__*/ _react.default.createElement(
            _form.default.Item,
            {
              name: 'bgVal',
              initialValue: preBgImageName,
            },
            /*#__PURE__*/ _react.default.createElement(_input.default, {
              readOnly: true,
              suffix: /*#__PURE__*/ _react.default.createElement(_icons.DownOutlined, null),
            }),
          ),
        ),
        /*#__PURE__*/ _react.default.createElement(
          _row.default,
          {
            style: {
              marginTop: 15,
            },
            align: 'middle',
          },
          /*#__PURE__*/ _react.default.createElement(
            _col.default,
            {
              push: 1,
            },
            /*#__PURE__*/ _react.default.createElement(
              _form.default.Item,
              {
                name: 'bgColorCheck',
                label: '\u80CC\u666F\u989C\u8272',
                valuePropName: 'checked',
              },
              /*#__PURE__*/ _react.default.createElement(_checkbox.default, {
                onChange: bkColorCheckChange,
              }),
            ),
          ),
          /*#__PURE__*/ _react.default.createElement(
            _col.default,
            {
              push: 2,
            },
            /*#__PURE__*/ _react.default.createElement(
              _form.default.Item,
              {
                name: 'bgColor',
              },
              /*#__PURE__*/ _react.default.createElement(_ColorPicker.default, null),
            ),
          ),
        ),
        /*#__PURE__*/ _react.default.createElement(
          _row.default,
          null,
          /*#__PURE__*/ _react.default.createElement(
            _col.default,
            {
              push: 1,
            },
            /*#__PURE__*/ _react.default.createElement(
              _form.default.Item,
              {
                name: 'bgImgCheck',
                label: '\u80CC\u666F\u56FE\u7247',
                valuePropName: 'checked',
              },
              /*#__PURE__*/ _react.default.createElement(_checkbox.default, {
                onChange: handleBgImgChange,
              }),
            ),
          ),
          /*#__PURE__*/ _react.default.createElement(
            _col.default,
            {
              push: 2,
            },
            /*#__PURE__*/ _react.default.createElement(
              _form.default.Item,
              null,
              /*#__PURE__*/ _react.default.createElement(
                _upload.default,
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
                /*#__PURE__*/ _react.default.createElement(
                  _button.default,
                  {
                    icon: /*#__PURE__*/ _react.default.createElement(_icons.UploadOutlined, null),
                  },
                  '\u4E0A\u4F20',
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    /*#__PURE__*/ _react.default.createElement(
      Panel,
      {
        header: '\u7F51\u683C',
        key: '3',
      },
      /*#__PURE__*/ _react.default.createElement(
        _form.default,
        {
          form: form,
          onValuesChange: handleFormValueChange,
        },
        /*#__PURE__*/ _react.default.createElement(
          _row.default,
          {
            align: 'middle',
          },
          /*#__PURE__*/ _react.default.createElement(
            _col.default,
            {
              push: 1,
            },
            /*#__PURE__*/ _react.default.createElement(
              _form.default.Item,
              {
                name: 'gridCheck',
                label: '\u7F51\u683C',
                valuePropName: 'checked',
              },
              /*#__PURE__*/ _react.default.createElement(_checkbox.default, {
                onChange: gridOnChange,
              }),
            ),
          ),
          /*#__PURE__*/ _react.default.createElement(
            _col.default,
            {
              push: 2,
            },
            /*#__PURE__*/ _react.default.createElement(
              _form.default.Item,
              {
                name: 'gridColor',
              },
              /*#__PURE__*/ _react.default.createElement(_ColorPicker.default, null),
            ),
          ),
          /*#__PURE__*/ _react.default.createElement(
            _col.default,
            {
              push: 3,
              span: 8,
            },
            /*#__PURE__*/ _react.default.createElement(
              _form.default.Item,
              {
                name: 'gridSize',
                initialValue: 30,
              },
              /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
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

  return /*#__PURE__*/ _react.default.createElement('div', null, renderDefultOptions);
};

var _default = BackgroundCanvasProps;
exports.default = _default;
