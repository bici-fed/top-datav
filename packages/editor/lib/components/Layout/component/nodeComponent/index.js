'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/space/style');

var _space = _interopRequireDefault(require('antd/es/space'));

require('antd/es/message/style');

var _message2 = _interopRequireDefault(require('antd/es/message'));

require('antd/es/tooltip/style');

var _tooltip = _interopRequireDefault(require('antd/es/tooltip'));

require('antd/es/popconfirm/style');

var _popconfirm = _interopRequireDefault(require('antd/es/popconfirm'));

require('antd/es/tag/style');

var _tag = _interopRequireDefault(require('antd/es/tag'));

require('antd/es/radio/style');

var _radio = _interopRequireDefault(require('antd/es/radio'));

require('antd/es/button/style');

var _button = _interopRequireDefault(require('antd/es/button'));

require('antd/es/input-number/style');

var _inputNumber = _interopRequireDefault(require('antd/es/input-number'));

require('antd/es/checkbox/style');

var _checkbox = _interopRequireDefault(require('antd/es/checkbox'));

require('antd/es/col/style');

var _col = _interopRequireDefault(require('antd/es/col'));

require('antd/es/row/style');

var _row = _interopRequireDefault(require('antd/es/row'));

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread2'));

require('antd/es/form/style');

var _form = _interopRequireDefault(require('antd/es/form'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

require('antd/es/select/style');

var _select = _interopRequireDefault(require('antd/es/select'));

require('antd/es/input/style');

var _input = _interopRequireDefault(require('antd/es/input'));

require('antd/es/tabs/style');

var _tabs = _interopRequireDefault(require('antd/es/tabs'));

require('antd/es/collapse/style');

var _collapse = _interopRequireDefault(require('antd/es/collapse'));

var _react = _interopRequireWildcard(require('react'));

var _icons = require('@ant-design/icons');

var _ColorPicker = _interopRequireDefault(require('../../../common/ColorPicker/ColorPicker'));

var _index = require('../../index');

var _layout = require('@top-datav/layout');

var _iconConfig = _interopRequireDefault(require('../../../config/iconConfig'));

var _FilterDataPoint = _interopRequireDefault(require('../../../FilterDataPoint'));

var _indexModule = _interopRequireDefault(require('./index.module.css'));

var _Property2NodeProps = require('../../../utils/Property2NodeProps');

var _ = _interopRequireWildcard(require('lodash'));

var _chartDiagram = require('@top-datav/chart-diagram');

var _serializing = require('../../../utils/serializing');

var _cacl = require('../../../utils/cacl');

var _defines = require('../../../data/defines');

var _timeline = require('../../../config/charts/timeline');

var _CustomizedDynamicForm = _interopRequireDefault(
  require('../../../common/CustomizedDynamicForm'),
);

var _api = require('../../../data/api');

var _pie = require('../../../config/charts/pie');

var _bar = require('../../../config/charts/bar');

var _horizontalbar = require('../../../config/charts/horizontalbar');

var Panel = _collapse.default.Panel;
var TabPane = _tabs.default.TabPane;
var TextArea = _input.default.TextArea;
var Option = _select.default.Option; // 对齐方式 key 对齐方式 val 图标名称

var alignObj = {
  left: ['左对齐', 'iconzuoduiqi'],
  right: ['右对齐', 'iconyouduiqi'],
  top: ['顶部对齐', 'iconshangduiqi'],
  bottom: ['底部对齐', 'iconxiaduiqi'],
  center: ['垂直居中', 'iconzongxiangjuzhong'],
  middle: ['水平居中', 'iconhengxiangjuzhong'],
}; // 需要显示文件填充的节点列表

var fillStyleNodeList = ['circle', 'rectangle', 'biciVarer', 'combine', 'dateFormat']; // 字体样式

var fontStyleNodeList = ['biciPilot', 'circle', 'rectangle', 'text', 'biciVarer', 'dateFormat']; // 边框样式

var boardStyleNodeList = ['circle', 'rectangle', 'biciVarer', 'combine']; // 不展示旋转

var disabledRotateList = ['biciPilot', 'echarts', 'biciCard', 'QTLiveVideo'];

var NodeCanvasProps = /*#__PURE__*/ _react.default.forwardRef(function (_ref, ref) {
  var _data$node, _data$node2, _property$video, _data$node4, _data$node5;

  var data = _ref.data,
    onFormValueChange = _ref.onFormValueChange,
    onPropertyFormValueChange = _ref.onPropertyFormValueChange,
    setIsSave = _ref.setIsSave,
    onAddDataPoint = _ref.onAddDataPoint,
    onAddVedioSource = _ref.onAddVedioSource,
    dataPointPropsMap = _ref.dataPointPropsMap,
    onCustomizedDynamicFormChange = _ref.onCustomizedDynamicFormChange,
    uploaConfig = _ref.uploaConfig;

  var _Form$useForm = _form.default.useForm(),
    _Form$useForm2 = (0, _slicedToArray2.default)(_Form$useForm, 1),
    form = _Form$useForm2[0];

  var _Form$useForm3 = _form.default.useForm(),
    _Form$useForm4 = (0, _slicedToArray2.default)(_Form$useForm3, 1),
    propertyForm = _Form$useForm4[0];

  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];

  var _useState3 = (0, _react.useState)('small'),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    pilotBtnSize = _useState4[0],
    setPilotBtnSize = _useState4[1];

  var _useState5 = (0, _react.useState)({
      italicBtn: '#fff',
      boldBtn: '#fff',
      color: '#222',
    }),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    btnColor = _useState6[0],
    setBtnColor = _useState6[1];

  var _ref2 =
      (data === null || data === void 0
        ? void 0
        : (_data$node = data.node) === null || _data$node === void 0
        ? void 0
        : _data$node.rect) || {},
    x = _ref2.x,
    y = _ref2.y,
    width = _ref2.width,
    height = _ref2.height;

  var _ref3 = (data === null || data === void 0 ? void 0 : data.node) || {},
    rotate = _ref3.rotate,
    lineWidth = _ref3.lineWidth,
    strokeStyle = _ref3.strokeStyle,
    text = _ref3.text,
    id = _ref3.id,
    name = _ref3.name,
    fillStyle = _ref3.fillStyle;

  var _ref4 =
      (data === null || data === void 0
        ? void 0
        : (_data$node2 = data.node) === null || _data$node2 === void 0
        ? void 0
        : _data$node2.font) || {},
    color = _ref4.color,
    fontSize = _ref4.fontSize,
    fontFamily = _ref4.fontFamily,
    textAlign = _ref4.textAlign;

  var _data$node3 = data === null || data === void 0 ? void 0 : data.node,
    property = _data$node3.property; // 用户自定义数据片段

  var _useState7 = (0, _react.useState)(
      (property === null || property === void 0 ? void 0 : property.dataPointSelectedRows) || [],
    ),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    dataPointSelectedRows = _useState8[0],
    setDataPointSelectedRows = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
    showSelectDataPoint = _useState10[0],
    setShowSelectDataPoint = _useState10[1];

  var addLineColorBtnRef = _react.default.useRef();

  var removeLineColorBtnRef = _react.default.useRef();

  var _ref5 = property || {},
    dataMethod = _ref5.dataMethod,
    dataDot = _ref5.dataDot,
    dataSourceId = _ref5.dataSourceId,
    dataSourceUrl = _ref5.dataSourceUrl,
    reqData = _ref5.reqData,
    dataPointReq = _ref5.dataPointReq;

  var _useState11 = (0, _react.useState)(false),
    _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
    refreshProperty = _useState12[0],
    setRefreshProperty = _useState12[1];

  var _useState13 = (0, _react.useState)(
      (property === null || property === void 0
        ? void 0
        : (_property$video = property.video) === null || _property$video === void 0
        ? void 0
        : _property$video.selectedRows) || [],
    ),
    _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
    selectedVideoRows = _useState14[0],
    setSelectedVideoRows = _useState14[1];

  var disableSource = ['react'];

  if (data.node.name == 'biciPilot') {
    disableSource = [];
  } // 渲染数据点弹出窗口 不包含 disableSource:['react','complex','dataPoint]

  var selectedRowKeys = [];
  data.node.property &&
    (data.node.property.dataPointSelectedRows || []).map(function (row) {
      selectedRowKeys.push(row.id);
      return row;
    });
  (0, _react.useEffect)(
    function () {
      var temp = (0, _objectSpread2.default)({}, btnColor);

      if (data.node.font.fontStyle !== 'normal') {
        temp = (0, _objectSpread2.default)(
          (0, _objectSpread2.default)({}, temp),
          {},
          {
            italicBtn: '#1890ff',
          },
        );
      }

      if (data.node.font.fontWeight !== 'normal') {
        temp = (0, _objectSpread2.default)(
          (0, _objectSpread2.default)({}, temp),
          {},
          {
            boldBtn: '#1890ff',
          },
        );
      }

      setBtnColor(temp); // 设置基本表单

      form.setFieldsValue({
        x: Math.round(x),
        y: Math.round(y),
        width: Math.round(width),
        height: Math.round(height),
        rotate: parseInt(rotate),
        lineWidth: lineWidth,
        strokeStyle: strokeStyle,
        color: color,
        fontSize: parseInt(fontSize),
        fontFamily: fontFamily.split(','),
        text: text,
        textAlign: textAlign,
        fillStyle: fillStyle,
        showFillStyle: fillStyle ? true : false,
        showBoardColor: strokeStyle ? true : false,
      });
    },
    [
      x,
      y,
      width,
      height,
      rotate,
      text,
      lineWidth,
      strokeStyle,
      color,
      fontSize,
      fontFamily,
      text,
      fillStyle,
      textAlign,
      property,
    ],
  );
  (0, _react.useEffect)(
    function () {
      var _property$date, _property$date2, _property$time, _property$time2;

      setShowSelectDataPoint(
        (property === null || property === void 0 ? void 0 : property.limitType) == 'custom',
      );
      propertyForm.setFieldsValue({
        dataMethod: dataMethod,
        dataDot: dataDot,
        reqData: reqData,
        dataPointReq: dataPointReq,
        'date.show':
          property === null || property === void 0
            ? void 0
            : (_property$date = property.date) === null || _property$date === void 0
            ? void 0
            : _property$date.show,
        'date.format':
          property === null || property === void 0
            ? void 0
            : (_property$date2 = property.date) === null || _property$date2 === void 0
            ? void 0
            : _property$date2.format,
        'time.show':
          property === null || property === void 0
            ? void 0
            : (_property$time = property.time) === null || _property$time === void 0
            ? void 0
            : _property$time.show,
        'time.format':
          property === null || property === void 0
            ? void 0
            : (_property$time2 = property.time) === null || _property$time2 === void 0
            ? void 0
            : _property$time2.format,
      });

      if (data.node.name === 'biciCard') {
        // 设置数据卡片
        propertyForm.setFieldsValue({
          showTitle: property.showTitle,
          cardTitle: property.cardTitle,
          limitType: property.limitType,
          showLimit: property.showLimit,
          'limit.bottom': property.limit.bottom,
          'limit.top': property.limit.top,
          'normal.fontFamily': property.normal.fontFamily,
          'normal.fontSize': property.normal.fontSize,
          'normal.color': property.normal.color,
          'normal.showBkColor': property.normal.showBkColor,
          'normal.bkColor': property.normal.bkColor,
          'topLimit.fontFamily': property.topLimit.fontFamily,
          'topLimit.fontSize': property.topLimit.fontSize,
          'topLimit.color': property.topLimit.color,
          'topLimit.showBkColor': property.topLimit.showBkColor,
          'topLimit.bkColor': property.topLimit.bkColor,
          'bottomLimit.fontFamily': property.bottomLimit.fontFamily,
          'bottomLimit.fontSize': property.bottomLimit.fontSize,
          'bottomLimit.color': property.bottomLimit.color,
          'bottomLimit.showBkColor': property.bottomLimit.showBkColor,
          'bottomLimit.bkColor': property.bottomLimit.bkColor,
        });
      } else if (data.node.name === 'biciPilot') {
        propertyForm.setFieldsValue({
          color: property.color,
          size: Math.round(width / 2),
          showText: property.showText,
          text: property.text,
          stateType: property.stateType,
          lightRange: property.lightRange,
        });
        var btnSize = width / 2 <= 15 ? 'small' : width / 2 <= 20 ? 'middle' : 'large';
        setPilotBtnSize(btnSize);
      } else if (
        data.node.name == 'echarts' ||
        data.node.name == 'biciMeasure' ||
        data.node.name == 'biciText' ||
        data.node.name == 'pdMonthReport' ||
        data.node.name == 'productQueue' ||
        data.node.name === 'biciCard2' ||
        data.node.name === 'liveVideo' ||
        data.node.name === 'QTLiveVideo' ||
        data.node.name === 'dataTable'
      ) {
        var _property$dataColors$,
          _property$dataColors$2,
          _property$dataColors$3,
          _property$dataColors$4,
          _property$dataColors$5,
          _property$dataColors$6,
          _property$dataColors$7,
          _property$dataColors$8,
          _property$dataColors$9,
          _property$dataColors$10,
          _property$dataColors$11,
          _property$dataColors$12,
          _property$dataColors$13,
          _property$dataColors$14,
          _property$dataColors$15,
          _property$dataColors$16,
          _property$dataColors$17,
          _property$dataColors$18,
          _property$dataColors$19,
          _property$dataColors$20;

        var lineRangedefaultColor = _defines.defaultLineColors.map(function (color) {
          return {
            lineGraphRangeColor: color,
            lineGraphRangeCheck: true,
          };
        });

        var nodeLineRangeColor = [];

        if (property && property.lineGraphRange) {
          nodeLineRangeColor = _.compact(property.lineGraphRange);
        }

        lineRangedefaultColor.map(function (colorObj, index) {
          if (nodeLineRangeColor[index] != null) {
            lineRangedefaultColor[index] = nodeLineRangeColor[index];
          }
        });
        propertyForm.setFieldsValue({
          dataMax: property.dataMax,
          dataMin: property.dataMin,
          marks: property.marks,
          markChecked: property.markChecked,
          chartTitleColor: property.chartTitleColor,
          chartTitleColorChecked: property.chartTitleColorChecked,
          pullRate: property.pullRate,
          pullRateUnit: property.pullRateUnit,
          dataFormat: property.dataFormat,
          dataUrl: property.dataUrl,
          dataSourceId: dataSourceId,
          dataSourceUrl: dataSourceUrl,
          videoURL: property.videoURL,
          'checked-0':
            property.dataColors &&
            ((_property$dataColors$ = property.dataColors[0]) === null ||
            _property$dataColors$ === void 0
              ? void 0
              : _property$dataColors$.checked),
          'color-0':
            property.dataColors &&
            ((_property$dataColors$2 = property.dataColors[0]) === null ||
            _property$dataColors$2 === void 0
              ? void 0
              : _property$dataColors$2.color),
          'top-0':
            property.dataColors &&
            ((_property$dataColors$3 = property.dataColors[0]) === null ||
            _property$dataColors$3 === void 0
              ? void 0
              : _property$dataColors$3.top),
          'bottom-0':
            property.dataColors &&
            ((_property$dataColors$4 = property.dataColors[0]) === null ||
            _property$dataColors$4 === void 0
              ? void 0
              : _property$dataColors$4.bottom),
          'checked-1':
            property.dataColors &&
            ((_property$dataColors$5 = property.dataColors[1]) === null ||
            _property$dataColors$5 === void 0
              ? void 0
              : _property$dataColors$5.checked),
          'color-1':
            property.dataColors &&
            ((_property$dataColors$6 = property.dataColors[1]) === null ||
            _property$dataColors$6 === void 0
              ? void 0
              : _property$dataColors$6.color),
          'top-1':
            property.dataColors &&
            ((_property$dataColors$7 = property.dataColors[1]) === null ||
            _property$dataColors$7 === void 0
              ? void 0
              : _property$dataColors$7.top),
          'bottom-1':
            property.dataColors &&
            ((_property$dataColors$8 = property.dataColors[1]) === null ||
            _property$dataColors$8 === void 0
              ? void 0
              : _property$dataColors$8.bottom),
          'checked-2':
            property.dataColors &&
            ((_property$dataColors$9 = property.dataColors[2]) === null ||
            _property$dataColors$9 === void 0
              ? void 0
              : _property$dataColors$9.checked),
          'color-2':
            property.dataColors &&
            ((_property$dataColors$10 = property.dataColors[2]) === null ||
            _property$dataColors$10 === void 0
              ? void 0
              : _property$dataColors$10.color),
          'top-2':
            property.dataColors &&
            ((_property$dataColors$11 = property.dataColors[2]) === null ||
            _property$dataColors$11 === void 0
              ? void 0
              : _property$dataColors$11.top),
          'bottom-2':
            property.dataColors &&
            ((_property$dataColors$12 = property.dataColors[2]) === null ||
            _property$dataColors$12 === void 0
              ? void 0
              : _property$dataColors$12.bottom),
          'checked-3':
            property.dataColors &&
            ((_property$dataColors$13 = property.dataColors[3]) === null ||
            _property$dataColors$13 === void 0
              ? void 0
              : _property$dataColors$13.checked),
          'color-3':
            property.dataColors &&
            ((_property$dataColors$14 = property.dataColors[3]) === null ||
            _property$dataColors$14 === void 0
              ? void 0
              : _property$dataColors$14.color),
          'top-3':
            property.dataColors &&
            ((_property$dataColors$15 = property.dataColors[3]) === null ||
            _property$dataColors$15 === void 0
              ? void 0
              : _property$dataColors$15.top),
          'bottom-3':
            property.dataColors &&
            ((_property$dataColors$16 = property.dataColors[3]) === null ||
            _property$dataColors$16 === void 0
              ? void 0
              : _property$dataColors$16.bottom),
          'checked-4':
            property.dataColors &&
            ((_property$dataColors$17 = property.dataColors[4]) === null ||
            _property$dataColors$17 === void 0
              ? void 0
              : _property$dataColors$17.checked),
          'color-4':
            property.dataColors &&
            ((_property$dataColors$18 = property.dataColors[4]) === null ||
            _property$dataColors$18 === void 0
              ? void 0
              : _property$dataColors$18.color),
          'top-4':
            property.dataColors &&
            ((_property$dataColors$19 = property.dataColors[4]) === null ||
            _property$dataColors$19 === void 0
              ? void 0
              : _property$dataColors$19.top),
          'bottom-4':
            property.dataColors &&
            ((_property$dataColors$20 = property.dataColors[4]) === null ||
            _property$dataColors$20 === void 0
              ? void 0
              : _property$dataColors$20.bottom),
          smooth: property.smooth && property.smooth,
          limitType: property.limitType && property.limitType,
          dataTopChecked: property.dataTopChecked && property.dataTopChecked,
          dataTop: property.dataTop && property.dataTop,
          dataBottom: property.dataBottom && property.dataBottom,
          selectDataPoint: property.dataBottom + '~' + property.dataTop,
          chartTitleChecked: property.chartTitleChecked && property.chartTitleChecked,
          chartTitle: property.chartTitle && property.chartTitle,
          lineReferenceChecked: property.lineReferenceChecked && property.lineReferenceChecked,
          lineReferenceColor: property.lineReferenceColor && property.lineReferenceColor,
          chartUnitChecked: property.chartUnitChecked && property.chartUnitChecked,
          chartUnit: property.chartUnit && property.chartUnit,
          lineGraphRange: lineRangedefaultColor,
          chartBackgroundColor: property.chartBackgroundColor && property.chartBackgroundColor,
          chartBackgroundChecked:
            property.chartBackgroundChecked && property.chartBackgroundChecked,
        });
      }
    },
    [property, refreshProperty],
  ); // 对父组件暴露保存数据的接口

  (0, _react.useImperativeHandle)(
    ref,
    function () {
      return {
        onDataPointBind: function onDataPointBind(selectedRowKeys, selectedRows) {
          _onDataPointBind(selectedRowKeys, selectedRows);
        },
        onVedioBind: function onVedioBind(selectedRowKeys, selectedRows) {
          _onVedioBind(selectedRowKeys, selectedRows);
        },
      };
    },
    [property],
  ); // 字段值更新时触发的回掉

  var handleValuesChange = function handleValuesChange(changedValues) {
    if ('fillStyle' in changedValues) {
      form.setFieldsValue({
        showFillStyle: true,
      });
    }

    if ('strokeStyle' in changedValues) {
      form.setFieldsValue({
        showBoardColor: true,
      });
    }

    if ('showFillStyle' in changedValues) {
      changedValues.fillStyle = changedValues.showFillStyle ? form.getFieldValue('fillStyle') : '';
    }

    if ('showBoardColor' in changedValues) {
      changedValues.strokeStyle = changedValues.showBoardColor
        ? form.getFieldValue('strokeStyle')
        : '#222';
    }

    onFormValueChange && onFormValueChange(changedValues);
  };

  var handlePropertyValuesChange = function handlePropertyValuesChange(changedValues, allValues) {
    if (changedValues.dataPointReq) {
      var points = (changedValues.dataPointReq || '').split(',');
      (points || []).map(function (pid, index) {
        data.node.property.dataPointParam.qtDataList[index] = {
          id: pid,
          type: 5,
          time: 1,
        };
      });
    }

    onPropertyFormValueChange && onPropertyFormValueChange(allValues);
  }; //
  // 设置对齐方式

  var handleAlign = function handleAlign(key) {
    var pens = _index.canvas.activeLayer.pens;
    var rect = _index.canvas.activeLayer.rect;

    if (pens.length >= 2) {
      (0, _layout.alignNodes)(pens, rect, key);

      _index.canvas.cache();

      _index.canvas.render();

      setIsSave(false);
    }
  }; // 设置日期格式

  var onSetBiciTimerDataFmt = function onSetBiciTimerDataFmt() {}; // 数据绑定方式

  var handlePropertyDataMethodChange = function handlePropertyDataMethodChange(value) {
    data.node.property.dataMethod = value;
    setRefreshProperty(!refreshProperty);
  }; // 添加数据点

  var addDataPoint = function addDataPoint() {
    //setVisible(!visible);
    onAddDataPoint && onAddDataPoint(data.node, disableSource, selectedRowKeys);
  }; // 添加视频源

  var addVedioSource = function addVedioSource() {
    var _data$node$property$v;

    onAddVedioSource &&
      onAddVedioSource(
        data.node,
        [],
        (_data$node$property$v = data.node.property.video) === null ||
          _data$node$property$v === void 0
          ? void 0
          : _data$node$property$v.selectedRowKeys,
      );
  }; // 获得选中的视频直播源

  var _onVedioBind = function _onVedioBind(selectedRowKeys, selectedRows) {
    var tmp = (0, _objectSpread2.default)(
      (0, _objectSpread2.default)({}, data.node.property.video),
      {},
      {
        selectedRowKeys: selectedRowKeys,
        selectedRows: selectedRows,
      },
    );
    data.node.property.video = tmp;
    setSelectedVideoRows(selectedRows);
    setRefreshProperty(!refreshProperty);
  }; // 获得选中的数据点

  var _onDataPointBind = function _onDataPointBind(selectedRowKeys, selectedRows) {
    console.log(selectedRowKeys, selectedRows); // if (selectedRows.length === 0) {
    //   return;
    // }
    // associationObject: "11111"
    // attention: 2
    // channel: 4
    // dataCode: "Data2103250007"
    // dataName: "精轧"
    // dataType: 1
    // effectiveLowerLimit: 3000
    // effectiveUpperLimit: 4000
    // id: "4bb099f2ae4b4db88276567127a5fe7e"
    // intervalTime: 1
    // isOtherPoint: 0
    // position: "500精轧控制室"
    // scopeMax: 2000
    // scopeMin: 1000
    // status: -1
    // type: 1
    // unit: "C"
    // dataPointPropsMap有问题，绑定数据点是type又变成datatype了，后续需要修复
    // console.log("selectedRows",selectedRows,selectedRowKeys,dataPointPropsMap)

    selectedRows = (selectedRows || []).map(function (row) {
      return (0, _objectSpread2.default)(
        (0, _objectSpread2.default)({}, row),
        {},
        {
          id: row[dataPointPropsMap.id],
          type: row.dataType || row.type,
          dataName: row[dataPointPropsMap.dataName] || row.name || row.dataName,
          intervalTime: row.intervalTime || 1,
          scopeMin: row[dataPointPropsMap.scopeMin],
          scopeMax: row[dataPointPropsMap.scopeMax],
          status: row.status + '',
          dataCode: row.dataCode || row.code,
        },
      );
    });
    var nodeType = (0, _Property2NodeProps.getNodeType)(data.node);

    if (property && property.dataPointSelectedRows) {
      if (
        nodeType == 'timeLine' ||
        nodeType == 'dataTable' ||
        nodeType == 'horizontalBar' ||
        nodeType == 'circleAndPie' ||
        nodeType == 'verticalBar'
      ) {
        // 最多可绑定十个数据点
        if (nodeType == 'dataTable') {
          selectedRows = selectedRows.slice(0, 20);
        } else {
          selectedRows = selectedRows.slice(0, 10);
        }

        selectedRows = selectedRows.sort(function (a, b) {
          return a.intervalTime - b.intervalTime;
        });

        if (data.node.property.dataPointSelectedRows.length <= 20) {
          data.node.property.dataPointSelectedRows = selectedRows;
          selectedRows.map(function (row, index) {
            // console.log("row====",row)
            var q = {
              id: selectedRows[index][dataPointPropsMap.id],
              type: row.dataType || row.type,
              intervalTime: selectedRows[index][dataPointPropsMap.intervalTime] || 1,
              dataCode: selectedRows[index].dataCode || selectedRows[index].code,
            };
            data.node.property.dataPointParam.qtDataList[index] = q;
          });
          setDataPointSelectedRows(selectedRows);

          if (nodeType == 'dataTable') {
          } else {
            updateChartOption();
          }
        }
      } else {
        var selectedData = selectedRows[0];

        if (nodeType === 'biciCard') {
          var scopeMin = !isNaN(
            Number(
              selectedData === null || selectedData === void 0 ? void 0 : selectedData.scopeMin,
            ),
          )
            ? selectedData === null || selectedData === void 0
              ? void 0
              : selectedData.scopeMin
            : undefined;
          var scopeMax = !isNaN(
            Number(
              selectedData === null || selectedData === void 0 ? void 0 : selectedData.scopeMax,
            ),
          )
            ? selectedData === null || selectedData === void 0
              ? void 0
              : selectedData.scopeMax
            : undefined;

          if (property.limitType == 'dataPoint') {
            data.node.property.limit.bottom = scopeMin;
            data.node.property.limit.top = scopeMax;
            propertyForm.setFieldsValue({
              dataBottom: scopeMin,
              dataTop: scopeMax,
            });
          }
        } // 只绑定一个数据点

        data.node.property.dataPointSelectedRows = selectedRows;
        data.node.property.dataPointParam.qtDataList[0] = {
          id: selectedData.id,
          type: selectedData.type || selectedData.dataType,
          intervalTime: selectedRows[0][dataPointPropsMap.intervalTime] || 1,
          dataCode: selectedRows[0].dataCode || selectedRows[0].code,
        };
        setDataPointSelectedRows(selectedRows);
      }

      setIsSave(false);
    }

    _index.canvas.dispatch('addDataPoint', {});

    setRefreshProperty(!refreshProperty);
  }; // 选择数据点，将数值配置上区

  var handleChangeDataPoint = function handleChangeDataPoint(value) {
    var dataTween = value.split('~');

    if (data.node.property.limitType == 'dataPoint') {
      propertyForm.setFieldsValue({
        dataBottom: dataTween[0] == 'undefined' ? '' : dataTween[0],
        dataTop: dataTween[1] == 'undefined' ? '' : dataTween[1],
      });
      onPropertyFormValueChange &&
        onPropertyFormValueChange({
          dataBottom: dataTween[0] == 'undefined' ? '' : dataTween[0],
          dataTop: dataTween[1] == 'undefined' ? '' : dataTween[1],
        });
    }
  };

  var updateChartOption = function updateChartOption() {
    data.node.elementRendered = false;
    var nodeType = (0, _Property2NodeProps.getNodeType)(data.node);
    var newOption = {};

    switch (nodeType) {
      case 'timeLine':
        newOption = (0, _timeline.getTimeLineOption)(data.node, undefined, undefined);
        break;

      case 'circleAndPie':
        newOption = (0, _pie.getPieOptionByChangeProp)(data.node, null);
        break;

      case 'verticalBar':
        newOption = (0, _bar.getBarOption)(data.node, null);
        break;

      case 'horizontalBar':
        newOption = (0, _horizontalbar.getHorizontalBarOption)(data.node, null);
        break;

      default:
    }

    data.node.data.echarts.option = newOption; // 更新图表数据

    _chartDiagram.echartsObjs[data.node.id].chart.setOption(
      JSON.parse(JSON.stringify(newOption, _serializing.replacer), _serializing.reviver),
      true,
    );

    _chartDiagram.echartsObjs[data.node.id].chart.resize();

    _index.canvas.updateProps(true, [data.node]);
  };

  var renderDataPointModal = (0, _react.useCallback)(
    function () {
      var _data$node$property;

      return /*#__PURE__*/ _react.default.createElement(_FilterDataPoint.default, {
        visible: true,
        disableSource: disableSource,
        selectedRows:
          (_data$node$property = data.node.property) === null || _data$node$property === void 0
            ? void 0
            : _data$node$property.dataPointSelectedRows,
        onCancel: addDataPoint,
        onGetSelectRow: _onDataPointBind,
        selectedRowKeys: selectedRowKeys,
        node: data.node,
        mode: data.node.property.echartsType == 'timeLine' ? 'checkbox' : 'radio',
      });
    },
    [visible],
  );
  /**
   * 渲染位置和大小的表单
   */

  var renderPositionForm = (0, _react.useMemo)(
    function () {
      return /*#__PURE__*/ _react.default.createElement(
        Panel,
        {
          header: '\u4F4D\u7F6E\u548C\u5927\u5C0F',
          key: 'pos',
        },
        /*#__PURE__*/ _react.default.createElement(
          _form.default,
          {
            form: form,
            onValuesChange: handleValuesChange,
          },
          /*#__PURE__*/ _react.default.createElement(
            _row.default,
            null,
            /*#__PURE__*/ _react.default.createElement(
              _col.default,
              {
                span: 14,
              },
              /*#__PURE__*/ _react.default.createElement(
                _form.default.Item,
                {
                  name: 'x',
                  label: '\u4F4D\u7F6E',
                },
                /*#__PURE__*/ _react.default.createElement(_input.default, {
                  suffix: /*#__PURE__*/ _react.default.createElement(
                    'span',
                    {
                      style: {
                        color: '#999999',
                      },
                    },
                    'X',
                  ),
                }),
              ),
            ),
            /*#__PURE__*/ _react.default.createElement(
              _col.default,
              {
                span: 9,
                push: 1,
              },
              /*#__PURE__*/ _react.default.createElement(
                _form.default.Item,
                {
                  name: 'y',
                },
                /*#__PURE__*/ _react.default.createElement(_input.default, {
                  suffix: /*#__PURE__*/ _react.default.createElement(
                    'span',
                    {
                      style: {
                        color: '#999999',
                      },
                    },
                    'Y',
                  ),
                }),
              ),
            ),
            /*#__PURE__*/ _react.default.createElement(
              _col.default,
              {
                span: 14,
              },
              /*#__PURE__*/ _react.default.createElement(
                _form.default.Item,
                {
                  name: 'width',
                  label: '\u5BBD\u9AD8',
                },
                /*#__PURE__*/ _react.default.createElement(_input.default, {
                  suffix: /*#__PURE__*/ _react.default.createElement(
                    'span',
                    {
                      style: {
                        color: '#999999',
                      },
                    },
                    'W',
                  ),
                }),
              ),
            ),
            /*#__PURE__*/ _react.default.createElement(
              _col.default,
              {
                span: 9,
                push: 1,
              },
              /*#__PURE__*/ _react.default.createElement(
                _form.default.Item,
                {
                  name: 'height',
                },
                /*#__PURE__*/ _react.default.createElement(_input.default, {
                  suffix: /*#__PURE__*/ _react.default.createElement(
                    'span',
                    {
                      style: {
                        color: '#999999',
                      },
                    },
                    'H',
                  ),
                }),
              ),
            ),
            !disabledRotateList.includes(
              data === null || data === void 0 ? void 0 : data.node.name,
            ) &&
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 14,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    name: 'rotate',
                    label: '\u65CB\u8F6C',
                  },
                  /*#__PURE__*/ _react.default.createElement(_input.default, {
                    suffix: /*#__PURE__*/ _react.default.createElement(
                      'span',
                      {
                        style: {
                          color: '#999999',
                        },
                      },
                      '\xB0',
                    ),
                  }),
                ),
              ),
          ),
        ),
      );
    },
    [x, y, width, height, rotate, data === null || data === void 0 ? void 0 : data.node],
  );
  /**
   * 渲染填充样式
   */

  var renderFillStyle = (0, _react.useMemo)(
    function () {
      return /*#__PURE__*/ _react.default.createElement(
        Panel,
        {
          header: '\u586B\u5145',
          key: 'fill',
        },
        /*#__PURE__*/ _react.default.createElement(
          _form.default,
          {
            form: form,
            onValuesChange: handleValuesChange,
          },
          /*#__PURE__*/ _react.default.createElement(
            _row.default,
            {
              align: 'middle',
            },
            /*#__PURE__*/ _react.default.createElement(
              _col.default,
              {
                span: 8,
              },
              /*#__PURE__*/ _react.default.createElement(
                _form.default.Item,
                {
                  name: 'showFillStyle',
                  label: '\u989C\u8272',
                  labelCol: {
                    span: 16,
                  },
                  labelAlign: 'left',
                  valuePropName: 'checked',
                },
                /*#__PURE__*/ _react.default.createElement(_checkbox.default, null),
              ),
            ),
            /*#__PURE__*/ _react.default.createElement(
              _col.default,
              {
                push: 1,
              },
              /*#__PURE__*/ _react.default.createElement(
                _form.default.Item,
                {
                  name: 'fillStyle',
                },
                /*#__PURE__*/ _react.default.createElement(_ColorPicker.default, null),
              ),
            ),
          ),
        ),
      );
    },
    [fillStyle, data === null || data === void 0 ? void 0 : data.node],
  );
  /**
   * 渲染边框样式
   */

  var renderBorderStyle = (0, _react.useMemo)(
    function () {
      return /*#__PURE__*/ _react.default.createElement(
        Panel,
        {
          header: '\u8FB9\u6846',
          key: 'border',
        },
        /*#__PURE__*/ _react.default.createElement(
          _form.default,
          {
            form: form,
            onValuesChange: handleValuesChange,
          },
          /*#__PURE__*/ _react.default.createElement(
            _row.default,
            {
              align: 'middle',
            },
            /*#__PURE__*/ _react.default.createElement(
              _col.default,
              {
                span: 8,
              },
              /*#__PURE__*/ _react.default.createElement(
                _form.default.Item,
                {
                  name: 'showBoardColor',
                  label: '\u989C\u8272',
                  labelCol: {
                    span: 16,
                  },
                  labelAlign: 'left',
                  valuePropName: 'checked',
                },
                /*#__PURE__*/ _react.default.createElement(_checkbox.default, null),
              ),
            ),
            /*#__PURE__*/ _react.default.createElement(
              _col.default,
              {
                span: 6,
                push: 1,
              },
              /*#__PURE__*/ _react.default.createElement(
                _form.default.Item,
                {
                  name: 'strokeStyle',
                },
                /*#__PURE__*/ _react.default.createElement(_ColorPicker.default, null),
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
                  name: 'lineWidth',
                  initialValue: 1,
                },
                /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
                  min: 1,
                }),
              ),
            ),
          ),
        ),
      );
    },
    [strokeStyle, lineWidth, data === null || data === void 0 ? void 0 : data.node],
  ); // 字体的斜体和加粗功能

  var fontStyleChange = function fontStyleChange(val) {
    if (val === 'fontStyle') {
      // 斜体
      if (data.node.font.fontStyle === 'normal') {
        data.node.font.fontStyle = 'italic';
        setBtnColor(
          (0, _objectSpread2.default)(
            (0, _objectSpread2.default)({}, btnColor),
            {},
            {
              italicBtn: '#1890ff',
              color: '#fff',
            },
          ),
        );
      } else {
        data.node.font.fontStyle = 'normal';
        setBtnColor(
          (0, _objectSpread2.default)(
            (0, _objectSpread2.default)({}, btnColor),
            {},
            {
              italicBtn: '#fff',
              color: '#222',
            },
          ),
        );
      }
    } else {
      // 加粗
      if (data.node.font.fontWeight === 'normal') {
        data.node.font.fontWeight = 'bold';
        setBtnColor(
          (0, _objectSpread2.default)(
            (0, _objectSpread2.default)({}, btnColor),
            {},
            {
              boldBtn: '#1890ff',
              color: '#fff',
            },
          ),
        );
      } else {
        data.node.font.fontWeight = 'normal';
        setBtnColor(
          (0, _objectSpread2.default)(
            (0, _objectSpread2.default)({}, btnColor),
            {},
            {
              boldBtn: '#fff',
              color: '#222',
            },
          ),
        );
      }
    }

    setIsSave(false);

    _index.canvas.updateProps(true, [data.node]);
  };
  /**
   * 渲染字体的表单
   */

  var renderFontForm = (0, _react.useMemo)(
    function () {
      return /*#__PURE__*/ _react.default.createElement(
        Panel,
        {
          header: '\u5B57\u7B26',
          key: 'font',
        },
        /*#__PURE__*/ _react.default.createElement(
          _form.default,
          {
            form: form,
            onValuesChange: handleValuesChange,
          },
          /*#__PURE__*/ _react.default.createElement(
            _row.default,
            null,
            /*#__PURE__*/ _react.default.createElement(
              _col.default,
              {
                span: 14,
              },
              /*#__PURE__*/ _react.default.createElement(
                _form.default.Item,
                {
                  name: 'color',
                  label: '\u989C\u8272\u5B57\u53F7',
                  labelCol: {
                    span: 14,
                  },
                  labelAlign: 'left',
                },
                /*#__PURE__*/ _react.default.createElement(_ColorPicker.default, null),
              ),
            ),
            /*#__PURE__*/ _react.default.createElement(
              _col.default,
              {
                span: 10,
              },
              /*#__PURE__*/ _react.default.createElement(
                _form.default.Item,
                {
                  name: 'fontSize',
                },
                /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
                  min: 0,
                  style: {
                    width: '100%',
                  },
                }),
              ),
            ),
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
                  name: 'fontFamily',
                  label: '\u5B57\u4F53',
                },
                /*#__PURE__*/ _react.default.createElement(
                  _select.default,
                  {
                    allowClear: true,
                    getPopupContainer: function getPopupContainer() {
                      return document.querySelector('#editLayout');
                    },
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    Option,
                    {
                      value: '"Microsoft YaHei"',
                      style: {
                        fontFamily: '"Microsoft YaHei"',
                      },
                    },
                    '\u5FAE\u8F6F\u96C5\u9ED1',
                  ),
                  /*#__PURE__*/ _react.default.createElement(
                    Option,
                    {
                      value: 'SimSun',
                      style: {
                        fontFamily: 'SimSun',
                      },
                    },
                    '\u5B8B\u4F53',
                  ),
                  /*#__PURE__*/ _react.default.createElement(
                    Option,
                    {
                      value: 'KaiTi',
                      style: {
                        fontFamily: 'KaiTi',
                      },
                    },
                    '\u6977\u4F53',
                  ),
                  /*#__PURE__*/ _react.default.createElement(
                    Option,
                    {
                      value: 'SimHei',
                      style: {
                        fontFamily: 'SimHei',
                      },
                    },
                    '\u9ED1\u4F53',
                  ),
                  /*#__PURE__*/ _react.default.createElement(
                    Option,
                    {
                      value: '"Hiragino Sans GB"',
                      style: {
                        fontFamily: '"Hiragino Sans GB"',
                      },
                    },
                    '\u51AC\u9752\u9ED1\u4F53',
                  ),
                  /*#__PURE__*/ _react.default.createElement(
                    Option,
                    {
                      value: 'Arial',
                      style: {
                        fontFamily: 'Arial',
                      },
                    },
                    'Arial',
                  ),
                  /*#__PURE__*/ _react.default.createElement(
                    Option,
                    {
                      value: 'Tahoma',
                      style: {
                        fontFamily: 'Tahoma',
                      },
                    },
                    'Tahoma',
                  ),
                  /*#__PURE__*/ _react.default.createElement(
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
                  wrapperCol: {
                    offset: 4,
                  },
                },
                /*#__PURE__*/ _react.default.createElement(
                  _button.default.Group,
                  {
                    style: {
                      width: '100%',
                      justifyContent: 'flex-end',
                    },
                  },
                  /*#__PURE__*/ _react.default.createElement(_button.default, {
                    size: 'small',
                    style: {
                      width: '50%',
                      background: btnColor.italicBtn,
                    },
                    icon: /*#__PURE__*/ _react.default.createElement(_iconConfig.default, {
                      type: 'iconzu',
                    }),
                    onClick: function onClick() {
                      return fontStyleChange('fontStyle');
                    },
                  }),
                  /*#__PURE__*/ _react.default.createElement(_button.default, {
                    size: 'small',
                    style: {
                      width: '50%',
                      background: btnColor.boldBtn,
                    },
                    icon: /*#__PURE__*/ _react.default.createElement(_iconConfig.default, {
                      type: 'iconjiacu',
                    }),
                    onClick: function onClick() {
                      return fontStyleChange('fontWeight');
                    },
                  }),
                ),
              ),
            ),
          ),
          data.node.name !== 'biciPilot' &&
            /*#__PURE__*/ _react.default.createElement(
              _react.Fragment,
              null,
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
                      name: 'textAlign',
                      wrapperCol: {
                        offset: 4,
                      },
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      _radio.default.Group,
                      {
                        buttonStyle: 'solid',
                        style: {
                          width: '100%',
                        },
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        _radio.default.Button,
                        {
                          value: 'left',
                          style: {
                            width: '25%',
                            textAlign: 'center',
                          },
                        },
                        /*#__PURE__*/ _react.default.createElement(_iconConfig.default, {
                          type: 'iconleft',
                        }),
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        _radio.default.Button,
                        {
                          value: 'center',
                          style: {
                            width: '25%',
                            textAlign: 'center',
                          },
                        },
                        /*#__PURE__*/ _react.default.createElement(_iconConfig.default, {
                          type: 'iconjuzhongduiqi',
                        }),
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        _radio.default.Button,
                        {
                          value: 'right',
                          style: {
                            width: '25%',
                            textAlign: 'center',
                          },
                        },
                        /*#__PURE__*/ _react.default.createElement(_iconConfig.default, {
                          type: 'iconyouduiqi2',
                        }),
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        _radio.default.Button,
                        {
                          value: 'justify',
                          style: {
                            width: '25%',
                            textAlign: 'center',
                          },
                        },
                        /*#__PURE__*/ _react.default.createElement(_iconConfig.default, {
                          type: 'iconjustify',
                        }),
                      ),
                    ),
                  ),
                ),
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
                      name: 'text',
                      label: '\u5185\u5BB9',
                    },
                    /*#__PURE__*/ _react.default.createElement(_input.default, null),
                  ),
                ),
              ),
            ),
        ),
      );
    },
    [
      color,
      fontFamily,
      fontSize,
      text,
      data === null || data === void 0 ? void 0 : data.node,
      btnColor,
    ],
  );
  /**
   * 渲染元素本身数据
   */

  var renderDataForm = (0, _react.useMemo)(
    function () {
      var formItemLayout = {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 20,
        },
      };
      return /*#__PURE__*/ _react.default.createElement(
        _form.default,
        (0, _objectSpread2.default)({}, formItemLayout),
        /*#__PURE__*/ _react.default.createElement(
          _col.default,
          null,
          /*#__PURE__*/ _react.default.createElement(
            _form.default.Item,
            {
              label: 'ID',
            },
            /*#__PURE__*/ _react.default.createElement(
              'span',
              {
                className: 'ant-form-text',
              },
              /*#__PURE__*/ _react.default.createElement(
                _tag.default,
                {
                  color: '#f50',
                },
                id,
              ),
            ),
          ),
        ),
      );
    },
    [id, data === null || data === void 0 ? void 0 : data.node],
  );
  /**
   * 渲染时间组件的属性设置
   */

  var renderBiciTimerDataForm = (0, _react.useMemo)(
    function () {
      return /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        renderFillStyle,
        renderFontForm,
        /*#__PURE__*/ _react.default.createElement(
          Panel,
          {
            header: '\u65F6\u95F4\u683C\u5F0F',
            key: 'biciTimer',
          },
          /*#__PURE__*/ _react.default.createElement(
            _form.default,
            {
              form: propertyForm,
              onValuesChange: handlePropertyValuesChange,
            },
            /*#__PURE__*/ _react.default.createElement(
              _row.default,
              null,
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 10,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    name: 'date.show',
                    valuePropName: 'checked',
                    label: '\u65E5\u671F',
                    labelCol: {
                      span: 14,
                    },
                    labelAlign: 'left',
                  },
                  /*#__PURE__*/ _react.default.createElement(_checkbox.default, null),
                ),
              ),
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 14,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    name: 'date.format',
                    rules: [
                      {
                        required: true,
                        message: '日期格式不能为空',
                      },
                    ],
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    _select.default,
                    {
                      placeholder: '\u8BBE\u7F6E\u65E5\u671F\u683C\u5F0F',
                      onChange: onSetBiciTimerDataFmt,
                      allowClear: false,
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      Option,
                      {
                        value: 'L',
                      },
                      'YYYY-MM-DD',
                    ),
                    /*#__PURE__*/ _react.default.createElement(
                      Option,
                      {
                        value: 'LL',
                      },
                      'YYYY/MM/DD',
                    ),
                    /*#__PURE__*/ _react.default.createElement(
                      Option,
                      {
                        value: 'l',
                      },
                      'YY/MM/DD',
                    ),
                  ),
                ),
              ),
            ),
            /*#__PURE__*/ _react.default.createElement(
              _row.default,
              null,
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 10,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    name: 'time.show',
                    valuePropName: 'checked',
                    label: '\u65F6\u95F4',
                    labelCol: {
                      span: 14,
                    },
                    labelAlign: 'left',
                  },
                  /*#__PURE__*/ _react.default.createElement(_checkbox.default, null),
                ),
              ),
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 14,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    name: 'time.format',
                    rules: [
                      {
                        required: true,
                        message: '时间格式不能为空',
                      },
                    ],
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    _select.default,
                    {
                      placeholder: '\u8BBE\u7F6E\u65F6\u95F4\u683C\u5F0F',
                      onChange: onSetBiciTimerDataFmt,
                      allowClear: false,
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      Option,
                      {
                        value: 'LTS',
                      },
                      'hh\uFF1Amm\uFF1Ass',
                    ),
                    /*#__PURE__*/ _react.default.createElement(
                      Option,
                      {
                        value: 'LT',
                      },
                      'hh:mm(24h)',
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      );
    },
    [
      color,
      fontFamily,
      fontSize,
      text,
      data === null || data === void 0 ? void 0 : data.node,
      btnColor,
    ],
  );
  /**
   * 删除直播上的数据源
   * @param y
   * @param item
   */

  var handleDeleteVideoConfirm = function handleDeleteVideoConfirm(y, item) {
    console.log(data.node.property.video);

    if (y) {
      data.node.property.video.selectedRows = [];
      data.node.property.video.selectedRowKeys = [];
      setIsSave(false);
      setSelectedVideoRows([]);
      setRefreshProperty(!refreshProperty);
    }
  };
  /**
   * 删除绑定到组件上数据点,删除数据点
   * @param y
   * @param item
   */

  var handleDeleteConfirm = function handleDeleteConfirm(y, item) {
    if (y) {
      setIsSave(false);
      setRefreshProperty(!refreshProperty);
      var nodeType = (0, _Property2NodeProps.getNodeType)(data.node);

      if (
        nodeType == 'timeLine' ||
        nodeType == 'dataTable' ||
        nodeType == 'horizontalBar' ||
        nodeType == 'circleAndPie' ||
        nodeType == 'verticalBar'
      ) {
        var itemRowIndex = _.findIndex(property.dataPointSelectedRows, function (r) {
          return r.id == item.id;
        });

        var itemQueryIndex = _.findIndex(property.dataPointParam.qtDataList, function (r) {
          return r.id == item.id;
        });

        if (data.node.property.dataPointParam) {
          data.node.property.dataPointParam.qtDataList.splice(itemQueryIndex, 1);
        }

        data.node.property.dataPointSelectedRows.splice(itemRowIndex, 1);

        var newRows = _.cloneDeep(data.node.property.dataPointSelectedRows);

        setDataPointSelectedRows(newRows);

        if (data.node.name !== 'dataTable') {
          updateChartOption();
        }
      } else {
        if (data.node.property.dataPointParam) {
          data.node.property.dataPointParam.qtDataList = [];
          data.node.property.dataPointSelectedRows = [];
        }

        setDataPointSelectedRows([]);
      }

      _index.canvas.dispatch('addDataPoint', {});
    }
  };
  /**
   * 渲染元素额外数据 {"qtDataList":[{"id":"6413f3a606754c31987ec584ed56d5b7","type":2}],"subscribe":true,"page":"动态曲线"}
   *
   */
  // 选择接口来源发生变化

  var onDataSourceChange = (0, _react.useCallback)(
    function (value) {
      propertyForm.setFieldsValue({
        dataSourceUrl: null,
      });

      var dataSourceObj = _.find(dataSource, function (item) {
        return item.id == value;
      });

      if (dataSourceObj) {
        setRemoteInterfaces(dataSourceObj.externalInterfaceManageDetailList);
      }
    },
    [data === null || data === void 0 ? void 0 : data.node],
  ); // 外部接口外层list

  var _useState15 = (0, _react.useState)([]),
    _useState16 = (0, _slicedToArray2.default)(_useState15, 2),
    dataSource = _useState16[0],
    setDataSource = _useState16[1]; // 外部接口内层list

  var _useState17 = (0, _react.useState)([]),
    _useState18 = (0, _slicedToArray2.default)(_useState17, 2),
    remoteInterfaces = _useState18[0],
    setRemoteInterfaces = _useState18[1]; // 加载接口数据

  var getDataSourceFocus = function getDataSourceFocus() {
    if (dataSource.length == 0) {
      (0, _api.fetchDataSourceList)({
        companyId: uploaConfig.industry.mappingId,
        pagination: {
          current: 1,
          pageSize: 10,
        },
      }).then(function (res) {
        if (res.data.data) {
          setDataSource(res.data.data.list);

          var dataSourceObj = _.find(res.data.data.list, function (item) {
            return item.id == data.node.property.dataSourceId;
          });

          if (dataSourceObj) {
            setRemoteInterfaces(dataSourceObj.externalInterfaceManageDetailList);
          }
        }
      });
    }
  }; // 获取接口列表数据

  (0, _react.useEffect)(function () {
    getDataSourceFocus();
  }, []);
  var renderExtraDataForm = (0, _react.useMemo)(
    function () {
      return /*#__PURE__*/ _react.default.createElement(
        _form.default,
        {
          form: propertyForm,
          onValuesChange: handlePropertyValuesChange,
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
                name: 'dataMethod',
                label: '\u5173\u8054\u65B9\u5F0F',
              },
              name == 'dataTable' ||
                (property === null || property === void 0 ? void 0 : property.echartsType) ==
                  'circleAndPie' ||
                (property === null || property === void 0 ? void 0 : property.echartsType) ==
                  'horizontalBar' ||
                (property === null || property === void 0 ? void 0 : property.echartsType) ==
                  'verticalBar'
                ? /*#__PURE__*/ _react.default.createElement(
                    _select.default,
                    {
                      placeholder: '\u9009\u62E9',
                      onChange: handlePropertyDataMethodChange,
                      allowClear: false,
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      Option,
                      {
                        value: 'point',
                      },
                      '\u6570\u636E\u70B9',
                    ),
                    /*#__PURE__*/ _react.default.createElement(
                      Option,
                      {
                        value: 'restful',
                      },
                      '\u63A5\u53E3\u4F20\u5165',
                    ),
                  )
                : /*#__PURE__*/ _react.default.createElement(
                    _select.default,
                    {
                      placeholder: '\u9009\u62E9',
                      onChange: handlePropertyDataMethodChange,
                      allowClear: false,
                      disabled: true,
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      Option,
                      {
                        value: 'point',
                      },
                      '\u6570\u636E\u70B9',
                    ),
                    /*#__PURE__*/ _react.default.createElement(
                      Option,
                      {
                        value: 'restful',
                      },
                      '\u63A5\u53E3\u4F20\u5165',
                    ),
                  ),
            ),
          ),
          (property === null || property === void 0 ? void 0 : property.dataMethod) == 'restful'
            ? /*#__PURE__*/ _react.default.createElement(
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
                      name: 'dataSourceId',
                      label: '\u63A5\u53E3\u6765\u6E90',
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      _select.default,
                      {
                        showSearch: true,
                        style: {
                          width: 199,
                        },
                        placeholder: '\u63A5\u53E3\u6765\u6E90',
                        optionFilterProp: 'children',
                        onChange: onDataSourceChange,
                      },
                      (dataSource || []).map(function (item) {
                        return /*#__PURE__*/ _react.default.createElement(
                          Option,
                          {
                            value: item.id,
                            key: item.id,
                          },
                          item.source,
                        );
                      }),
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
                      name: 'dataSourceUrl',
                      label: '\u63A5\u53E3\u540D\u79F0',
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      _select.default,
                      {
                        showSearch: true,
                        style: {
                          width: 199,
                        },
                        placeholder: '\u63A5\u53E3\u540D\u79F0',
                        optionFilterProp: 'children',
                      },
                      (remoteInterfaces || []).map(function (item) {
                        return /*#__PURE__*/ _react.default.createElement(
                          Option,
                          {
                            value: item.url,
                            key: item.id,
                          },
                          item.name,
                        );
                      }),
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
                      name: 'dataFormat',
                      label: '\u62A5\u6587\u683C\u5F0F',
                    },
                    /*#__PURE__*/ _react.default.createElement(TextArea, {
                      placeholder: '\u62A5\u6587\u683C\u5F0F',
                      autoSize: {
                        minRows: 2,
                        maxRows: 10,
                      },
                    }),
                  ),
                ),
                /*#__PURE__*/ _react.default.createElement(
                  _col.default,
                  {
                    span: 15,
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    _form.default.Item,
                    {
                      name: 'pullRate',
                      label: '\u62C9\u53D6\u9891\u7387',
                    },
                    /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
                      min: 0,
                      max: 1000000,
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
                    {
                      name: 'pullRateUnit',
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      _select.default,
                      {
                        style: {
                          width: 60,
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
                        return /*#__PURE__*/ _react.default.createElement(
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
                /*#__PURE__*/ _react.default.createElement(
                  _col.default,
                  {
                    span: 4,
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    _form.default.Item,
                    null,
                    '\xA0\xA0\u4E00\u6B21',
                  ),
                ),
              )
            : '',
          (property === null || property === void 0 ? void 0 : property.dataMethod) == 'point'
            ? /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 24,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    label: '\u6570\u636E\u70B9',
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    _button.default,
                    {
                      type: 'dashed',
                      onClick: function onClick() {
                        return addDataPoint();
                      },
                      icon: /*#__PURE__*/ _react.default.createElement(_icons.PlusOutlined, null),
                      style: {
                        color: '#096DD9',
                      },
                    },
                    '\u6DFB\u52A0\u6570\u636E\u70B9',
                  ),
                ),
              )
            : '',
          (property === null || property === void 0 ? void 0 : property.dataMethod) == 'point' &&
            (
              (property === null || property === void 0
                ? void 0
                : property.dataPointSelectedRows) || []
            ).map(function (item, index) {
              return /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 24,
                  key: index,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    label: '\u6570\u636E\u70B9'.concat(index + 1),
                    key: index,
                    wrapperCol: {
                      style: {
                        alignItems: 'flex-end',
                      },
                    },
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    'span',
                    null,
                    item.dataName || item.name,
                  ),
                  /*#__PURE__*/ _react.default.createElement(
                    _popconfirm.default,
                    {
                      placement: 'left',
                      title: '\u786E\u5B9A\u5220\u9664\u6570\u636E\u70B9\u5417\uFF1F',
                      onConfirm: function onConfirm(y) {
                        return handleDeleteConfirm(y, item);
                      },
                      okText: '\u662F',
                      cancelText: '\u5426',
                    },
                    /*#__PURE__*/ _react.default.createElement(_button.default, {
                      type: 'link',
                      icon: /*#__PURE__*/ _react.default.createElement(_icons.DeleteOutlined, null),
                    }),
                  ),
                ),
              );
            }),
          /*#__PURE__*/ _react.default.createElement(
            _col.default,
            {
              span: 24,
            },
            /*#__PURE__*/ _react.default.createElement(
              _form.default.Item,
              {
                name: 'dataDot',
                label: '\u663E\u793A\u7CBE\u5EA6',
              },
              /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
                min: 0,
                max: 5,
              }),
            ),
          ),
          (data.node.image ||
            data.node.name == 'pointEnergyCarousel' ||
            data.node.name == 'arrowBtn' ||
            data.node.name == 'VODCarousel' ||
            data.node.name == 'stationCarousel' ||
            data.node.name == 'emptyCom') &&
            /*#__PURE__*/ _react.default.createElement(
              _col.default,
              {
                span: 24,
              },
              /*#__PURE__*/ _react.default.createElement(
                _form.default.Item,
                {
                  name: 'reqData',
                  label: '\u8BF7\u6C42\u53C2\u6570',
                },
                /*#__PURE__*/ _react.default.createElement(TextArea, {
                  rows: 10,
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
                name: 'dataPointReq',
                label: '\u7ED1\u5B9A\u8BBE\u5907\u6570\u636E\u70B9',
              },
              /*#__PURE__*/ _react.default.createElement(TextArea, null),
            ),
          ),
        ),
      );
    },
    [
      data === null || data === void 0 ? void 0 : data.node,
      propertyForm,
      dataPointSelectedRows,
      dataSource,
      remoteInterfaces,
      refreshProperty,
    ],
  );
  /**
   * 渲染对齐方式
   */

  var renderAlign = (0, _react.useMemo)(
    function () {
      return /*#__PURE__*/ _react.default.createElement(
        _row.default,
        {
          justify: 'space-around',
          style: {
            borderBottom: '1px solid #d9d9d9',
          },
        },
        Object.keys(alignObj).map(function (key, index) {
          return /*#__PURE__*/ _react.default.createElement(
            _col.default,
            {
              key: index,
              span: 4,
            },
            /*#__PURE__*/ _react.default.createElement(
              _tooltip.default,
              {
                title: alignObj[key][0],
                getPopupContainer: function getPopupContainer() {
                  return document.querySelector('#editLayout');
                },
              },
              /*#__PURE__*/ _react.default.createElement(_button.default, {
                size: 'large',
                type: 'text',
                icon: /*#__PURE__*/ _react.default.createElement(_iconConfig.default, {
                  type: alignObj[key][1],
                }),
                onClick: function onClick() {
                  return handleAlign(key);
                },
              }),
            ),
          );
        }),
      );
    },
    [alignObj, data === null || data === void 0 ? void 0 : data.node],
  );

  var checkCardRange = function checkCardRange() {
    var bottom = propertyForm.getFieldValue('limit.bottom');
    var top = propertyForm.getFieldValue('limit.top');

    if (top < bottom) {
      _message2.default.config({
        getContainer: function getContainer() {
          return document.getElementById('editLayout');
        },
      });

      _message2.default.error('下限不能大于上限');
    }
  };

  var limitTypeOnChange = function limitTypeOnChange(e) {
    var selectRows = data.node.property.dataPointSelectedRows;

    if (e.target.value === 'dataPoint' && selectRows && selectRows.length > 0) {
      var selectedData = selectRows[0];
      var scopeMin = !isNaN(
        Number(selectedData === null || selectedData === void 0 ? void 0 : selectedData.scopeMin),
      )
        ? selectedData === null || selectedData === void 0
          ? void 0
          : selectedData.scopeMin
        : undefined;
      var scopeMax = !isNaN(
        Number(selectedData === null || selectedData === void 0 ? void 0 : selectedData.scopeMax),
      )
        ? selectedData === null || selectedData === void 0
          ? void 0
          : selectedData.scopeMax
        : undefined;
      propertyForm.setFieldsValue({
        showLimit: property.showLimit,
        'limit.bottom': scopeMin,
        'limit.top': scopeMax,
      });
      data.node.property.limit.bottom = scopeMin;
      data.node.property.limit.top = scopeMax;
      onPropertyFormValueChange &&
        onPropertyFormValueChange({
          showLimit: property.showLimit,
          'limit.bottom': scopeMin,
          'limit.top': scopeMax,
        });
    }
  };
  /**
   * 渲染数据卡片样式设置  property
   */

  var renderDataCard = (0, _react.useMemo)(
    function () {
      var statusObj = {
        normal: '正常状态',
        bottomLimit: '低于下限',
        topLimit: '高于上限',
      };
      return /*#__PURE__*/ _react.default.createElement(
        _react.Fragment,
        null,
        /*#__PURE__*/ _react.default.createElement(
          Panel,
          {
            header: '\u57FA\u672C\u4FE1\u606F',
            key: 'info',
          },
          /*#__PURE__*/ _react.default.createElement(
            _form.default,
            {
              form: propertyForm,
              onValuesChange: handlePropertyValuesChange,
            },
            /*#__PURE__*/ _react.default.createElement(
              _row.default,
              null,
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 10,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    label: '\u6807\u9898',
                    name: 'showTitle',
                    labelCol: {
                      span: 12,
                    },
                    labelAlign: 'left',
                    valuePropName: 'checked',
                  },
                  /*#__PURE__*/ _react.default.createElement(_checkbox.default, null),
                ),
              ),
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 14,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    name: 'cardTitle',
                  },
                  /*#__PURE__*/ _react.default.createElement(_input.default, {
                    placeholder: '\u6807\u9898\u540D\u79F0',
                    maxLength: 20,
                    style: {
                      width: '100%',
                    },
                  }),
                ),
              ),
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
                    name: 'limitType',
                    label: '\u4E0A\u4E0B\u9650',
                    labelCol: {
                      span: 9,
                    },
                    labelAlign: 'left',
                  },
                  /*#__PURE__*/ _react.default.createElement(_radio.default.Group, {
                    options: [
                      {
                        label: ' 自定义 ',
                        value: 'custom',
                      },
                      {
                        label: ' 数据点 ',
                        value: 'dataPoint',
                      },
                    ],
                    style: {
                      float: 'right',
                    },
                    onChange: limitTypeOnChange,
                    optionType: 'button',
                    buttonStyle: 'solid',
                  }),
                ),
              ),
            ),
            /*#__PURE__*/ _react.default.createElement(
              _row.default,
              {
                justify: 'space-between',
              },
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 4,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    name: 'showLimit',
                    valuePropName: 'checked',
                  },
                  /*#__PURE__*/ _react.default.createElement(_checkbox.default, null),
                ),
              ),
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 20,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _input.default.Group,
                  {
                    compact: true,
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    _form.default.Item,
                    {
                      name: 'limit.bottom',
                      dependencies: ['limit.top'],
                      rules: [
                        function (_ref6) {
                          var getFieldValue = _ref6.getFieldValue;
                          return {
                            validator: function validator(_, value) {
                              if (!value || getFieldValue('limit.top') >= value) {
                                return Promise.resolve();
                              }

                              return Promise.reject('');
                            },
                          };
                        },
                      ],
                    },
                    /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
                      style: {
                        width: 88,
                      },
                      placeholder: '\u4E0B\u9650',
                    }),
                  ),
                  /*#__PURE__*/ _react.default.createElement(_input.default, {
                    style: {
                      width: 30,
                      pointerEvents: 'none',
                    },
                    placeholder: '~',
                    disabled: true,
                  }),
                  /*#__PURE__*/ _react.default.createElement(
                    _form.default.Item,
                    {
                      name: 'limit.top',
                      dependencies: ['limit.bottom'],
                      rules: [
                        function (_ref7) {
                          var getFieldValue = _ref7.getFieldValue;
                          return {
                            validator: function validator(_, value) {
                              if (!value || getFieldValue('limit.bottom') <= value) {
                                return Promise.resolve();
                              }

                              return Promise.reject('');
                            },
                          };
                        },
                      ],
                    },
                    /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
                      style: {
                        width: 88,
                      },
                      placeholder: '\u4E0A\u9650',
                      onBlur: checkCardRange,
                    }),
                  ),
                ),
              ),
            ),
          ),
        ),
        Object.keys(statusObj).map(function (key) {
          return /*#__PURE__*/ _react.default.createElement(
            Panel,
            {
              header: '\u6837\u5F0F-'.concat(statusObj[key]),
              key: key,
            },
            /*#__PURE__*/ _react.default.createElement(
              _form.default,
              {
                form: propertyForm,
                onValuesChange: handlePropertyValuesChange,
              },
              /*#__PURE__*/ _react.default.createElement(
                _form.default.Item,
                {
                  name: ''.concat(key, '.fontFamily'),
                  label: '\u5B57\u4F53',
                  labelCol: {
                    span: 7,
                  },
                  labelAlign: 'left',
                },
                /*#__PURE__*/ _react.default.createElement(
                  _select.default,
                  {
                    allowClear: true,
                    getPopupContainer: function getPopupContainer() {
                      return document.querySelector('#editLayout');
                    },
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    Option,
                    {
                      value: '"Microsoft YaHei"',
                      style: {
                        fontFamily: '"Microsoft YaHei"',
                      },
                    },
                    '\u5FAE\u8F6F\u96C5\u9ED1',
                  ),
                  /*#__PURE__*/ _react.default.createElement(
                    Option,
                    {
                      value: 'SimSun',
                      style: {
                        fontFamily: 'SimSun',
                      },
                    },
                    '\u5B8B\u4F53',
                  ),
                  /*#__PURE__*/ _react.default.createElement(
                    Option,
                    {
                      value: 'KaiTi',
                      style: {
                        fontFamily: 'KaiTi',
                      },
                    },
                    '\u6977\u4F53',
                  ),
                  /*#__PURE__*/ _react.default.createElement(
                    Option,
                    {
                      value: 'SimHei',
                      style: {
                        fontFamily: 'SimHei',
                      },
                    },
                    '\u9ED1\u4F53',
                  ),
                  /*#__PURE__*/ _react.default.createElement(
                    Option,
                    {
                      value: '"Hiragino Sans GB"',
                      style: {
                        fontFamily: '"Hiragino Sans GB"',
                      },
                    },
                    '\u51AC\u9752\u9ED1\u4F53',
                  ),
                  /*#__PURE__*/ _react.default.createElement(
                    Option,
                    {
                      value: 'Arial',
                      style: {
                        fontFamily: 'Arial',
                      },
                    },
                    'Arial',
                  ),
                  /*#__PURE__*/ _react.default.createElement(
                    Option,
                    {
                      value: 'Tahoma',
                      style: {
                        fontFamily: 'Tahoma',
                      },
                    },
                    'Tahoma',
                  ),
                  /*#__PURE__*/ _react.default.createElement(
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
              /*#__PURE__*/ _react.default.createElement(
                _row.default,
                null,
                /*#__PURE__*/ _react.default.createElement(
                  _col.default,
                  {
                    span: 7,
                  },
                  /*#__PURE__*/ _react.default.createElement(_form.default.Item, {
                    label: '\u989C\u8272\u5B57\u53F7',
                  }),
                ),
                /*#__PURE__*/ _react.default.createElement(
                  _col.default,
                  {
                    span: 6,
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    _form.default.Item,
                    {
                      name: ''.concat(key, '.color'),
                    },
                    /*#__PURE__*/ _react.default.createElement(_ColorPicker.default, null),
                  ),
                ),
                /*#__PURE__*/ _react.default.createElement(
                  _col.default,
                  {
                    span: 11,
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    _form.default.Item,
                    {
                      name: ''.concat(key, '.fontSize'),
                    },
                    /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
                      min: 12,
                      style: {
                        width: '100%',
                      },
                    }),
                  ),
                ),
              ),
              /*#__PURE__*/ _react.default.createElement(
                _row.default,
                null,
                /*#__PURE__*/ _react.default.createElement(
                  _col.default,
                  {
                    span: 7,
                  },
                  /*#__PURE__*/ _react.default.createElement(_form.default.Item, {
                    label: '\u80CC\u666F\u989C\u8272',
                  }),
                ),
                /*#__PURE__*/ _react.default.createElement(
                  _col.default,
                  {
                    span: 4,
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    _form.default.Item,
                    {
                      name: ''.concat(key, '.showBkColor'),
                      valuePropName: 'checked',
                    },
                    /*#__PURE__*/ _react.default.createElement(_checkbox.default, null),
                  ),
                ),
                /*#__PURE__*/ _react.default.createElement(
                  _col.default,
                  {
                    span: 10,
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    _form.default.Item,
                    {
                      name: ''.concat(key, '.bkColor'),
                    },
                    /*#__PURE__*/ _react.default.createElement(_ColorPicker.default, null),
                  ),
                ),
              ),
            ),
          );
        }),
      );
    },
    [
      propertyForm,
      property,
      data.node,
      property === null || property === void 0 ? void 0 : property.limitType,
      data.node,
      property === null || property === void 0 ? void 0 : property.dataPointSelectedRows,
    ],
  ); // 改变指示灯大小

  var changePolitSize = function changePolitSize(size) {
    var node = data.node;

    if (propertyForm.getFieldValue('showText')) {
      node.text = propertyForm.getFieldValue('text');
    }

    node.rect.width = size * 2;
    node.rect.height = size * 2;
    form.setFieldsValue({
      width: size * 2,
      height: size * 2,
    });
    node.property.size = size;
    propertyForm.setFieldsValue({
      size: size,
    });
    setPilotBtnSize(size === 15 ? 'small' : size === 20 ? 'middle' : 'large');

    _index.canvas.updateProps(false, [node]);
  };

  var checkPilotSingleRepeat = function checkPilotSingleRepeat() {
    var vals = propertyForm.getFieldValue('lightRange').map(function (item) {
      return item === null || item === void 0 ? void 0 : item.lightRangeVal;
    });
    var tmpSet = new Set(vals);

    if (tmpSet.size !== vals.length) {
      _message2.default.config({
        getContainer: function getContainer() {
          return document.getElementById('editLayout');
        },
      });

      _message2.default.error('单点值不能重复');
    }
  };

  var checkPilotRangeRepeat = function checkPilotRangeRepeat() {
    var vals = propertyForm.getFieldValue('lightRange').map(function (item) {
      return [
        item === null || item === void 0 ? void 0 : item.lightRangeBottom,
        item === null || item === void 0 ? void 0 : item.lightRangeTop,
      ];
    });
    var flag = false;

    if (!vals.flat().includes(undefined)) {
      _message2.default.config({
        getContainer: function getContainer() {
          return document.getElementById('editLayout');
        },
      });

      vals.some(function (item) {
        if (item[1] < item[0]) {
          _message2.default.error('下限不能大于上限');

          flag = true;
          return true;
        }
      });
      if (flag) return;
      var nums = (0, _cacl.eraseOverlapIntervals)(vals);

      if (nums.length !== 0) {
        _message2.default.error('范围值出现重叠');
      }
    }
  };
  /**
   * 渲染指示灯样式
   */

  var renderLight = (0, _react.useMemo)(
    function () {
      var radioButtonStyle = {
        height: 26,
        lineHeight: '24px',
      };
      return /*#__PURE__*/ _react.default.createElement(
        Panel,
        {
          header: '\u6837\u5F0F',
          key: 'biciLight',
        },
        /*#__PURE__*/ _react.default.createElement(
          _form.default,
          {
            form: propertyForm,
            onValuesChange: handlePropertyValuesChange,
            labelCol: {
              span: 6,
            },
            labelAlign: 'left',
          },
          /*#__PURE__*/ _react.default.createElement(
            _col.default,
            {
              span: 24,
            },
            /*#__PURE__*/ _react.default.createElement(
              _form.default.Item,
              {
                name: 'color',
                label: '\u989C\u8272',
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
                name: 'size',
                label: '\u5C3A\u5BF8',
              },
              /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
                placeholder: '\u8BF7\u8F93\u5165\u76F4\u5F84',
                min: 0,
                style: {
                  width: '100%',
                },
                onChange: changePolitSize,
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
                wrapperCol: {
                  offset: 6,
                },
              },
              /*#__PURE__*/ _react.default.createElement(
                _button.default.Group,
                {
                  style: {
                    width: '100%',
                  },
                },
                /*#__PURE__*/ _react.default.createElement(
                  _button.default,
                  {
                    block: true,
                    size: 'small',
                    style: {
                      background: pilotBtnSize === 'small' ? '#1890ff' : '#F0F0F0',
                      color: pilotBtnSize === 'small' ? '#ffffff' : '#000000',
                    },
                    onClick: function onClick() {
                      return changePolitSize(15);
                    },
                  },
                  '\u5C0F',
                ),
                /*#__PURE__*/ _react.default.createElement(
                  _button.default,
                  {
                    block: true,
                    size: 'small',
                    style: {
                      background: pilotBtnSize === 'middle' ? '#1890ff' : '#F0F0F0',
                      color: pilotBtnSize === 'middle' ? '#ffffff' : '#000000',
                    },
                    onClick: function onClick() {
                      return changePolitSize(20);
                    },
                  },
                  '\u4E2D',
                ),
                /*#__PURE__*/ _react.default.createElement(
                  _button.default,
                  {
                    block: true,
                    size: 'small',
                    style: {
                      background: pilotBtnSize === 'large' ? '#1890ff' : '#F0F0F0',
                      color: pilotBtnSize === 'large' ? '#ffffff' : '#000000',
                    },
                    onClick: function onClick() {
                      return changePolitSize(30);
                    },
                  },
                  '\u5927',
                ),
              ),
            ),
          ),
          /*#__PURE__*/ _react.default.createElement(
            _row.default,
            null,
            /*#__PURE__*/ _react.default.createElement(
              _col.default,
              {
                span: 10,
              },
              /*#__PURE__*/ _react.default.createElement(
                _form.default.Item,
                {
                  name: 'showText',
                  label: '\u6587\u5B57\u6807\u7B7E',
                  labelCol: {
                    span: 16,
                  },
                  valuePropName: 'checked',
                },
                /*#__PURE__*/ _react.default.createElement(_checkbox.default, null),
              ),
            ),
            /*#__PURE__*/ _react.default.createElement(
              _col.default,
              {
                span: 14,
              },
              /*#__PURE__*/ _react.default.createElement(
                _form.default.Item,
                {
                  name: 'text',
                },
                /*#__PURE__*/ _react.default.createElement(_input.default, {
                  maxLength: 10,
                }),
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
                name: 'stateType',
                label: '\u72B6\u6001\u5B9A\u4E49',
              },
              /*#__PURE__*/ _react.default.createElement(_radio.default.Group, {
                options: [
                  {
                    label: '单点值',
                    value: 'single',
                    style: radioButtonStyle,
                  },
                  {
                    label: '范围值',
                    value: 'range',
                    style: radioButtonStyle,
                  },
                ],
                style: {
                  float: 'right',
                },
                onChange: function onChange() {
                  return propertyForm.setFieldsValue({
                    lightRange: [],
                  });
                },
                optionType: 'button',
                buttonStyle: 'solid',
              }),
            ),
          ),
          /*#__PURE__*/ _react.default.createElement(
            _form.default.List,
            {
              name: 'lightRange',
            },
            function (fields, _ref8) {
              var add = _ref8.add,
                remove = _ref8.remove;
              return /*#__PURE__*/ _react.default.createElement(
                _react.Fragment,
                null,
                fields.map(function (field) {
                  return /*#__PURE__*/ _react.default.createElement(
                    _space.default,
                    {
                      key: field.key,
                      style: {
                        display: 'flex',
                        marginBottom: 5,
                      },
                      align: 'center',
                      size: 'small',
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      _form.default.Item,
                      (0, _objectSpread2.default)(
                        (0, _objectSpread2.default)({}, field),
                        {},
                        {
                          name: [field.name, 'lightRangeColor'],
                        },
                      ),
                      /*#__PURE__*/ _react.default.createElement(_ColorPicker.default, null),
                    ),
                    propertyForm.getFieldValue('stateType') === 'single' &&
                      /*#__PURE__*/ _react.default.createElement(
                        _react.Fragment,
                        null,
                        /*#__PURE__*/ _react.default.createElement(
                          _form.default.Item,
                          (0, _objectSpread2.default)(
                            (0, _objectSpread2.default)({}, field),
                            {},
                            {
                              name: [field.name, 'lightRangeVal'],
                              rules: [
                                {
                                  required: true,
                                  message: '必填',
                                },
                              ],
                            },
                          ),
                          /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
                            placeholder: '\u6570\u503C',
                            onBlur: checkPilotSingleRepeat,
                          }),
                        ),
                        /*#__PURE__*/ _react.default.createElement(
                          _form.default.Item,
                          (0, _objectSpread2.default)(
                            (0, _objectSpread2.default)({}, field),
                            {},
                            {
                              name: [field.name, 'lightRangeText'],
                            },
                          ),
                          /*#__PURE__*/ _react.default.createElement(_input.default, {
                            placeholder: '\u6587\u672C',
                          }),
                        ),
                      ),
                    propertyForm.getFieldValue('stateType') === 'range' &&
                      /*#__PURE__*/ _react.default.createElement(
                        _react.Fragment,
                        null,
                        /*#__PURE__*/ _react.default.createElement(
                          _form.default.Item,
                          (0, _objectSpread2.default)(
                            (0, _objectSpread2.default)({}, field),
                            {},
                            {
                              name: [field.name, 'lightRangeBottom'],
                              rules: [
                                {
                                  required: true,
                                  message: '必填',
                                },
                              ],
                            },
                          ),
                          /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
                            style: {
                              width: 60,
                            },
                            placeholder: '\u4E0B\u9650',
                          }),
                        ),
                        /*#__PURE__*/ _react.default.createElement(
                          _form.default.Item,
                          (0, _objectSpread2.default)(
                            (0, _objectSpread2.default)({}, field),
                            {},
                            {
                              name: [field.name, 'lightRangeTop'],
                              rules: [
                                {
                                  required: true,
                                  message: '必填',
                                },
                              ],
                            },
                          ),
                          /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
                            style: {
                              width: 60,
                            },
                            placeholder: '\u4E0A\u9650',
                            onBlur: checkPilotRangeRepeat,
                          }),
                        ),
                        /*#__PURE__*/ _react.default.createElement(
                          _form.default.Item,
                          (0, _objectSpread2.default)(
                            (0, _objectSpread2.default)({}, field),
                            {},
                            {
                              name: [field.name, 'lightRangeText'],
                            },
                          ),
                          /*#__PURE__*/ _react.default.createElement(_input.default, {
                            style: {
                              width: 50,
                            },
                            placeholder: '\u6587\u672C',
                          }),
                        ),
                      ),
                    /*#__PURE__*/ _react.default.createElement(
                      _form.default.Item,
                      null,
                      /*#__PURE__*/ _react.default.createElement(_icons.MinusCircleOutlined, {
                        onClick: function onClick() {
                          return remove(field.name);
                        },
                      }),
                    ),
                  );
                }),
                fields.length < 10 &&
                  /*#__PURE__*/ _react.default.createElement(
                    _form.default.Item,
                    null,
                    /*#__PURE__*/ _react.default.createElement(
                      _button.default,
                      {
                        type: 'dashed',
                        onClick: function onClick() {
                          return add();
                        },
                        block: true,
                        icon: /*#__PURE__*/ _react.default.createElement(_icons.PlusOutlined, null),
                      },
                      '\u6DFB\u52A0',
                    ),
                  ),
              );
            },
          ),
        ),
      );
    },
    [propertyForm, property, data === null || data === void 0 ? void 0 : data.node, pilotBtnSize],
  );
  /**
   * 渲染计量器样式
   */

  var renderMeter = (0, _react.useMemo)(
    function () {
      return /*#__PURE__*/ _react.default.createElement(
        Panel,
        {
          header: '\u6837\u5F0F',
          key: 'style',
        },
        /*#__PURE__*/ _react.default.createElement(
          _form.default,
          {
            form: propertyForm,
            onValuesChange: handlePropertyValuesChange,
          },
          (data === null || data === void 0 ? void 0 : data.node.name) === 'biciMeasure' &&
            /*#__PURE__*/ _react.default.createElement(
              _react.default.Fragment,
              null,
              /*#__PURE__*/ _react.default.createElement(
                _row.default,
                null,
                /*#__PURE__*/ _react.default.createElement(
                  _col.default,
                  {
                    span: 10,
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    _form.default.Item,
                    {
                      label: '\u5355\u4F4D',
                      name: 'chartUnitChecked',
                      labelCol: {
                        span: 12,
                      },
                      labelAlign: 'left',
                      valuePropName: 'checked',
                    },
                    /*#__PURE__*/ _react.default.createElement(_checkbox.default, null),
                  ),
                ),
                /*#__PURE__*/ _react.default.createElement(
                  _col.default,
                  {
                    span: 14,
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    _form.default.Item,
                    {
                      name: 'chartUnit',
                    },
                    /*#__PURE__*/ _react.default.createElement(_input.default, {
                      placeholder: '\u5355\u4F4D',
                      maxLength: 5,
                    }),
                  ),
                ),
              ),
              /*#__PURE__*/ _react.default.createElement(
                _row.default,
                null,
                /*#__PURE__*/ _react.default.createElement(
                  _col.default,
                  {
                    span: 10,
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    _form.default.Item,
                    {
                      label: '\u523B\u5EA6',
                      name: 'markChecked',
                      labelCol: {
                        span: 12,
                      },
                      labelAlign: 'left',
                      valuePropName: 'checked',
                    },
                    /*#__PURE__*/ _react.default.createElement(_checkbox.default, null),
                  ),
                ),
                /*#__PURE__*/ _react.default.createElement(
                  _col.default,
                  {
                    span: 14,
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    _form.default.Item,
                    {
                      name: 'marks',
                    },
                    /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
                      placeholder: '\u523B\u5EA6\u4E2A\u6570',
                      min: 1,
                      max: 100,
                    }),
                  ),
                ),
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
                      name: 'chartTitleColor',
                      label: '\u6807\u9898\u989C\u8272',
                      labelCol: {
                        span: 10,
                      },
                      labelAlign: 'left',
                    },
                    /*#__PURE__*/ _react.default.createElement(_ColorPicker.default, null),
                  ),
                ),
              ),
            ),
          /*#__PURE__*/ _react.default.createElement(
            _row.default,
            null,
            /*#__PURE__*/ _react.default.createElement(
              _col.default,
              null,
              /*#__PURE__*/ _react.default.createElement(_form.default.Item, {
                label: '\u8303\u56F4',
              }),
            ),
            /*#__PURE__*/ _react.default.createElement(
              _col.default,
              null,
              /*#__PURE__*/ _react.default.createElement(
                _input.default.Group,
                {
                  compact: true,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    name: 'dataMin',
                    dependencies: ['dataMax'],
                    rules: [
                      function (_ref9) {
                        var getFieldValue = _ref9.getFieldValue;
                        return {
                          validator: function validator(_, value) {
                            if (!value || getFieldValue('dataMax') >= value) {
                              return Promise.resolve();
                            }

                            return Promise.reject('');
                          },
                        };
                      },
                    ],
                  },
                  /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
                    style: {
                      width: 85,
                    },
                    placeholder: '\u4E0B\u9650',
                  }),
                ),
                /*#__PURE__*/ _react.default.createElement(_input.default, {
                  style: {
                    width: 30,
                    pointerEvents: 'none',
                  },
                  placeholder: '~',
                  disabled: true,
                }),
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    name: 'dataMax',
                    rules: [
                      {
                        required: true,
                        message: ' ',
                      },
                      function (_ref10) {
                        var getFieldValue = _ref10.getFieldValue;
                        return {
                          validator: function validator(rule, value) {
                            if (!value || getFieldValue('dataMin') <= value) {
                              return Promise.resolve();
                            }

                            return Promise.reject(' ');
                          },
                        };
                      },
                    ],
                  },
                  /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
                    style: {
                      width: 85,
                    },
                    placeholder: '\u4E0A\u9650',
                    required: true,
                  }),
                ),
              ),
            ),
          ),
          /*#__PURE__*/ _react.default.createElement(
            _row.default,
            null,
            /*#__PURE__*/ _react.default.createElement(_form.default.Item, {
              label: '\u989C\u8272\u5206\u533A',
            }),
          ),
          ((property === null || property === void 0 ? void 0 : property.dataColors) || []).map(
            function (item, index) {
              return /*#__PURE__*/ _react.default.createElement(
                _row.default,
                {
                  key: index,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _col.default,
                  {
                    span: 3,
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    _form.default.Item,
                    {
                      name: 'checked-'.concat(index),
                      valuePropName: 'checked',
                    },
                    /*#__PURE__*/ _react.default.createElement(_checkbox.default, null),
                  ),
                ),
                /*#__PURE__*/ _react.default.createElement(
                  _col.default,
                  {
                    span: 6,
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    _form.default.Item,
                    {
                      name: 'color-'.concat(index),
                    },
                    /*#__PURE__*/ _react.default.createElement(_ColorPicker.default, null),
                  ),
                ),
                /*#__PURE__*/ _react.default.createElement(
                  _col.default,
                  {
                    span: 15,
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    _input.default.Group,
                    {
                      compact: true,
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      _form.default.Item,
                      {
                        name: 'bottom-'.concat(index),
                      },
                      /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
                        style: {
                          width: 60,
                        },
                        placeholder: '\u4E0B\u9650',
                        disabled: true,
                      }),
                    ),
                    /*#__PURE__*/ _react.default.createElement(_input.default, {
                      style: {
                        width: 30,
                        pointerEvents: 'none',
                      },
                      placeholder: '~',
                      disabled: true,
                    }),
                    /*#__PURE__*/ _react.default.createElement(
                      _form.default.Item,
                      {
                        name: 'top-'.concat(index),
                      },
                      /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
                        style: {
                          width: 60,
                        },
                        placeholder: '\u4E0A\u9650',
                      }),
                    ),
                  ),
                ),
              );
            },
          ),
        ),
      );
    },
    [property, data === null || data === void 0 ? void 0 : data.node],
  );
  /**
   * 渲染仪表盘样式
   */

  var renderGauge = (0, _react.useMemo)(
    function () {
      return /*#__PURE__*/ _react.default.createElement(
        _react.Fragment,
        null,
        /*#__PURE__*/ _react.default.createElement(
          Panel,
          {
            header: '\u57FA\u672C\u4FE1\u606F',
            key: 'info',
          },
          /*#__PURE__*/ _react.default.createElement(
            _form.default,
            {
              form: propertyForm,
              onValuesChange: handlePropertyValuesChange,
            },
            /*#__PURE__*/ _react.default.createElement(
              _row.default,
              null,
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 10,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    label: '\u6807\u9898',
                    name: 'chartTitleChecked',
                    labelCol: {
                      span: 12,
                    },
                    labelAlign: 'left',
                    valuePropName: 'checked',
                  },
                  /*#__PURE__*/ _react.default.createElement(_checkbox.default, null),
                ),
              ),
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 14,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    name: 'chartTitle',
                  },
                  /*#__PURE__*/ _react.default.createElement(_input.default, {
                    placeholder: '\u6807\u9898\u540D\u79F0',
                    maxLength: 20,
                  }),
                ),
              ),
            ),
            /*#__PURE__*/ _react.default.createElement(
              _row.default,
              null,
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 10,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    label: '\u5355\u4F4D',
                    name: 'chartUnitChecked',
                    labelCol: {
                      span: 12,
                    },
                    labelAlign: 'left',
                    valuePropName: 'checked',
                  },
                  /*#__PURE__*/ _react.default.createElement(_checkbox.default, null),
                ),
              ),
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 14,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    name: 'chartUnit',
                  },
                  /*#__PURE__*/ _react.default.createElement(_input.default, {
                    placeholder: '\u5355\u4F4D',
                    maxLength: 20,
                  }),
                ),
              ),
            ),
            /*#__PURE__*/ _react.default.createElement(
              _row.default,
              null,
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 10,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    label: '\u523B\u5EA6',
                    name: 'markChecked',
                    labelCol: {
                      span: 12,
                    },
                    labelAlign: 'left',
                    valuePropName: 'checked',
                  },
                  /*#__PURE__*/ _react.default.createElement(_checkbox.default, null),
                ),
              ),
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 13,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    name: 'marks',
                  },
                  /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
                    placeholder: '\u523B\u5EA6\u4E2A\u6570',
                    min: 1,
                    max: 100,
                  }),
                ),
              ),
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
                    name: 'chartTitleColor',
                    label: '\u6807\u9898\u989C\u8272',
                    labelCol: {
                      span: 10,
                    },
                    labelAlign: 'left',
                  },
                  /*#__PURE__*/ _react.default.createElement(_ColorPicker.default, null),
                ),
              ),
            ),
          ),
        ),
        renderMeter,
      );
    },
    [property, data === null || data === void 0 ? void 0 : data.node],
  );
  /**
   * 渲染实时曲线图样式
   */

  var renderLineGraph = (0, _react.useMemo)(
    function () {
      var _data$node$property2;

      return /*#__PURE__*/ _react.default.createElement(
        _react.Fragment,
        null,
        /*#__PURE__*/ _react.default.createElement(
          Panel,
          {
            header: '\u57FA\u672C\u4FE1\u606F',
            key: 'lineInfo',
          },
          /*#__PURE__*/ _react.default.createElement(
            _form.default,
            {
              form: propertyForm,
              onValuesChange: handlePropertyValuesChange,
            },
            /*#__PURE__*/ _react.default.createElement(
              _row.default,
              null,
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 6,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    label: '\u6807\u9898',
                    name: 'chartTitleChecked',
                    valuePropName: 'checked',
                  },
                  /*#__PURE__*/ _react.default.createElement(_checkbox.default, null),
                ),
              ),
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 6,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    name: 'chartTitleColor',
                  },
                  /*#__PURE__*/ _react.default.createElement(_ColorPicker.default, null),
                ),
              ),
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 12,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    name: 'chartTitle',
                  },
                  /*#__PURE__*/ _react.default.createElement(_input.default, {
                    placeholder: '\u6807\u9898',
                    maxLength: 20,
                  }),
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
                  label: '\u4E0A\u4E0B\u9650',
                  name: 'limitType',
                },
                /*#__PURE__*/ _react.default.createElement(_radio.default.Group, {
                  options: [
                    {
                      label: '自定义',
                      value: 'custom',
                    },
                    {
                      label: '数据点',
                      value: 'dataPoint',
                    },
                  ],
                  style: {
                    float: 'right',
                  },
                  optionType: 'button',
                  buttonStyle: 'solid',
                  onChange: function onChange(value) {
                    if (value.target.value == 'custom') {
                      setShowSelectDataPoint(true);
                    } else {
                      setShowSelectDataPoint(false);
                    }
                  },
                }),
              ),
            ),
            /*#__PURE__*/ _react.default.createElement(
              _row.default,
              {
                justify: 'space-between',
              },
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                null,
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    name: 'dataTopChecked',
                    valuePropName: 'checked',
                  },
                  /*#__PURE__*/ _react.default.createElement(_checkbox.default, null),
                ),
              ),
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                null,
                /*#__PURE__*/ _react.default.createElement(
                  _input.default.Group,
                  {
                    compact: true,
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    _form.default.Item,
                    {
                      name: 'dataBottom',
                      dependencies: ['dataTop'],
                      rules: [
                        function (_ref11) {
                          var getFieldValue = _ref11.getFieldValue;
                          return {
                            validator: function validator(_, value) {
                              if (!value || getFieldValue('dataTop') >= value) {
                                return Promise.resolve();
                              }

                              return Promise.reject('');
                            },
                          };
                        },
                      ],
                    },
                    /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
                      style: {
                        width: 85,
                      },
                      placeholder: '\u4E0B\u9650',
                      readOnly: !showSelectDataPoint,
                    }),
                  ),
                  /*#__PURE__*/ _react.default.createElement(_input.default, {
                    style: {
                      width: 30,
                      pointerEvents: 'none',
                    },
                    placeholder: '~',
                    disabled: true,
                  }),
                  /*#__PURE__*/ _react.default.createElement(
                    _form.default.Item,
                    {
                      name: 'dataTop',
                      dependencies: ['dataBottom'],
                      rules: [
                        function (_ref12) {
                          var getFieldValue = _ref12.getFieldValue;
                          return {
                            validator: function validator(_, value) {
                              if (!value || getFieldValue('dataBottom') <= value) {
                                return Promise.resolve();
                              }

                              return Promise.reject('');
                            },
                          };
                        },
                      ],
                    },
                    /*#__PURE__*/ _react.default.createElement(_inputNumber.default, {
                      style: {
                        width: 85,
                      },
                      placeholder: '\u4E0A\u9650',
                      readOnly: !showSelectDataPoint,
                    }),
                  ),
                ),
              ),
            ),
            /*#__PURE__*/ _react.default.createElement(
              _row.default,
              {
                style: {
                  display: showSelectDataPoint ? 'none' : 'block',
                },
              },
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  push: 4,
                  span: 20,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    name: 'selectDataPoint',
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    _select.default,
                    {
                      style: {
                        width: '100%',
                      },
                      onChange: handleChangeDataPoint,
                      placeholder: '\u9009\u62E9\u6570\u636E\u70B9',
                    },
                    (
                      ((_data$node$property2 = data.node.property) === null ||
                      _data$node$property2 === void 0
                        ? void 0
                        : _data$node$property2.dataPointSelectedRows) || []
                    ).map(function (item, index) {
                      return /*#__PURE__*/ _react.default.createElement(
                        Option,
                        {
                          value: item.scopeMin + '~' + item.scopeMax,
                          key: index,
                        },
                        item.dataName,
                      );
                    }),
                  ),
                ),
              ),
            ),
          ),
        ),
        /*#__PURE__*/ _react.default.createElement(
          Panel,
          {
            header: '\u6837\u5F0F',
            key: 'lineStyle',
          },
          /*#__PURE__*/ _react.default.createElement(
            _form.default,
            {
              form: propertyForm,
              onValuesChange: handlePropertyValuesChange,
            },
            /*#__PURE__*/ _react.default.createElement(
              _col.default,
              {
                span: 24,
              },
              /*#__PURE__*/ _react.default.createElement(
                _form.default.Item,
                {
                  label: '\u7EBF\u578B',
                  name: 'smooth',
                },
                /*#__PURE__*/ _react.default.createElement(_radio.default.Group, {
                  options: [
                    {
                      label: '曲线',
                      value: true,
                    },
                    {
                      label: '折线',
                      value: false,
                    },
                  ],
                  style: {
                    float: 'right',
                  },
                  optionType: 'button',
                  buttonStyle: 'solid',
                }),
              ),
            ),
            /*#__PURE__*/ _react.default.createElement(
              _row.default,
              null,
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 10,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    label: '\u80CC\u666F\u8272',
                    labelCol: {
                      span: 16,
                    },
                    labelAlign: 'left',
                    name: 'chartBackgroundChecked',
                    valuePropName: 'checked',
                  },
                  /*#__PURE__*/ _react.default.createElement(_checkbox.default, null),
                ),
              ),
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 12,
                  push: 2,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    name: 'chartBackgroundColor',
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
                  span: 10,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    label: '\u53C2\u8003\u7EBF',
                    labelCol: {
                      span: 16,
                    },
                    labelAlign: 'left',
                    name: 'lineReferenceChecked',
                    valuePropName: 'checked',
                  },
                  /*#__PURE__*/ _react.default.createElement(_checkbox.default, null),
                ),
              ),
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 12,
                  push: 2,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.Item,
                  {
                    name: 'lineReferenceColor',
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
                  span: 8,
                },
                /*#__PURE__*/ _react.default.createElement(_form.default.Item, {
                  label: '\u66F2\u7EBF\u989C\u8272',
                }),
              ),
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 16,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _form.default.List,
                  {
                    name: 'lineGraphRange',
                  },
                  function (fields, _ref13) {
                    var add = _ref13.add,
                      remove = _ref13.remove;
                    return /*#__PURE__*/ _react.default.createElement(
                      _react.Fragment,
                      null,
                      fields.map(function (field) {
                        return /*#__PURE__*/ _react.default.createElement(
                          _space.default,
                          {
                            key: field.key,
                            style: {
                              display: 'flex',
                              marginBottom: 8,
                            },
                            align: 'center',
                            size: 20,
                          },
                          /*#__PURE__*/ _react.default.createElement(
                            _form.default.Item,
                            (0, _objectSpread2.default)(
                              (0, _objectSpread2.default)({}, field),
                              {},
                              {
                                name: [field.name, 'lineGraphRangeCheck'],
                                valuePropName: 'checked',
                                style: {
                                  marginBottom: 0,
                                },
                              },
                            ),
                            /*#__PURE__*/ _react.default.createElement(_checkbox.default, null),
                          ),
                          /*#__PURE__*/ _react.default.createElement(
                            _form.default.Item,
                            (0, _objectSpread2.default)(
                              (0, _objectSpread2.default)({}, field),
                              {},
                              {
                                name: [field.name, 'lineGraphRangeColor'],
                                style: {
                                  marginBottom: 0,
                                },
                              },
                            ),
                            /*#__PURE__*/ _react.default.createElement(_ColorPicker.default, null),
                          ),
                          /*#__PURE__*/ _react.default.createElement(
                            _form.default.Item,
                            {
                              style: {
                                display: 'none',
                              },
                            },
                            /*#__PURE__*/ _react.default.createElement(_icons.MinusCircleOutlined, {
                              ref: removeLineColorBtnRef,
                              onClick: function onClick() {
                                return remove(field.name);
                              },
                            }),
                          ),
                        );
                      }),
                      fields.length < 10
                        ? /*#__PURE__*/ _react.default.createElement(
                            _form.default.Item,
                            {
                              style: {
                                display: 'none',
                              },
                            },
                            /*#__PURE__*/ _react.default.createElement(
                              _button.default,
                              {
                                type: 'dashed',
                                ref: addLineColorBtnRef,
                                onClick: function onClick() {
                                  return add();
                                },
                                block: true,
                                icon: /*#__PURE__*/ _react.default.createElement(
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
            ),
          ),
        ),
      );
    },
    [
      property,
      data === null || data === void 0 ? void 0 : data.node,
      showSelectDataPoint,
      refreshProperty,
    ],
  ); // 动态渲染style表单

  var dynamicForm = (0, _react.useMemo)(
    function () {
      var _data$node$property3, _data$node$property3$;

      return /*#__PURE__*/ _react.default.createElement(_CustomizedDynamicForm.default, {
        formStyle:
          data === null || data === void 0
            ? void 0
            : (_data$node$property3 = data.node.property) === null ||
              _data$node$property3 === void 0
            ? void 0
            : (_data$node$property3$ = _data$node$property3.form) === null ||
              _data$node$property3$ === void 0
            ? void 0
            : _data$node$property3$.style,
        onChange: function onChange(group, fields) {
          onCustomizedDynamicFormChange && onCustomizedDynamicFormChange(group, fields);
          setRefreshProperty(!refreshProperty);
        },
      });
    },
    [
      data === null || data === void 0
        ? void 0
        : (_data$node4 = data.node) === null || _data$node4 === void 0
        ? void 0
        : _data$node4.id,
      refreshProperty,
    ],
  ); // 渲染视频直播组件的数据属性

  var renderVideoProp = (0, _react.useMemo)(
    function () {
      return /*#__PURE__*/ _react.default.createElement(
        _form.default,
        {
          form: propertyForm,
          onValuesChange: handlePropertyValuesChange,
        },
        name == 'liveVideo'
          ? /*#__PURE__*/ _react.default.createElement(
              _react.default.Fragment,
              null,
              /*#__PURE__*/ _react.default.createElement(
                _row.default,
                null,
                /*#__PURE__*/ _react.default.createElement(
                  _col.default,
                  null,
                  /*#__PURE__*/ _react.default.createElement(
                    _form.default.Item,
                    {
                      label: '\u89C6\u9891\u6E90',
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      _button.default,
                      {
                        type: 'dashed',
                        onClick: function onClick() {
                          return addVedioSource();
                        },
                        icon: /*#__PURE__*/ _react.default.createElement(_icons.PlusOutlined, null),
                        style: {
                          color: '#096DD9',
                        },
                      },
                      '\u6DFB\u52A0\u89C6\u9891\u6E90',
                    ),
                  ),
                ),
              ),
              /*#__PURE__*/ _react.default.createElement(
                _row.default,
                null,
                (selectedVideoRows || []).map(function (item, index) {
                  return /*#__PURE__*/ _react.default.createElement(
                    _col.default,
                    {
                      span: 24,
                      key: index,
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      _form.default.Item,
                      {
                        label: '\u89C6\u9891\u6E90'.concat(index + 1),
                        key: index,
                        wrapperCol: {
                          style: {
                            alignItems: 'flex-end',
                          },
                        },
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        'span',
                        null,
                        item.deviceName,
                        '\xA0|\xA0',
                        item.name,
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        _popconfirm.default,
                        {
                          placement: 'left',
                          title: '\u786E\u5B9A\u5220\u89C6\u9891\u6E90\u5417\uFF1F',
                          onConfirm: function onConfirm(y) {
                            return handleDeleteVideoConfirm(y, item);
                          },
                          okText: '\u662F',
                          cancelText: '\u5426',
                        },
                        /*#__PURE__*/ _react.default.createElement(_button.default, {
                          type: 'link',
                          icon: /*#__PURE__*/ _react.default.createElement(
                            _icons.DeleteOutlined,
                            null,
                          ),
                        }),
                      ),
                    ),
                  );
                }),
              ),
            )
          : '',
        name == 'QTLiveVideo'
          ? /*#__PURE__*/ _react.default.createElement(
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
                    name: 'videoURL',
                    label: 'RTSP\u76F4\u64AD\u6E90',
                  },
                  /*#__PURE__*/ _react.default.createElement(TextArea, {
                    rows: 4,
                    placeholder: '\u4F8B\u5982\uFF1Artsp://36.156.138.177:554/ceshi1.rtsp',
                  }),
                ),
              ),
            )
          : '',
      );
    },
    [
      data === null || data === void 0
        ? void 0
        : (_data$node5 = data.node) === null || _data$node5 === void 0
        ? void 0
        : _data$node5.id,
      refreshProperty,
      selectedVideoRows,
    ],
  );
  var divHeight = document.body.clientHeight - 200;
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: _indexModule.default.rightArea,
      style: {
        overflow: 'hidden',
      },
    },
    renderAlign,
    !data.multi &&
      /*#__PURE__*/ _react.default.createElement(
        _tabs.default,
        {
          defaultActiveKey: '1',
          centered: true,
        },
        /*#__PURE__*/ _react.default.createElement(
          TabPane,
          {
            tab: '\xA0\xA0\xA0\xA0\u5916\xA0\xA0\u89C2\xA0\xA0\xA0\xA0',
            key: '1',
            style: {
              margin: 0,
            },
          },
          /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              style: {
                height: divHeight,
                overflowX: 'hidden',
              },
            },
            /*#__PURE__*/ _react.default.createElement(
              _collapse.default,
              {
                defaultActiveKey: ['pos', 'lineInfo', 'lineStyle', 'info', 'style'],
                expandIconPosition: 'right',
                ghost: false,
                bordered: false,
              },
              renderPositionForm,
              fontStyleNodeList.includes(name) && renderFontForm,
              fillStyleNodeList.includes(name) && renderFillStyle,
              boardStyleNodeList.includes(name) && renderBorderStyle,
              name === 'biciPilot' && renderLight,
              name === 'biciTimer' && renderBiciTimerDataForm,
              name === 'biciCard' && renderDataCard,
              (data === null || data === void 0 ? void 0 : data.node.name) === 'biciMeasure' &&
                renderMeter,
              (property === null || property === void 0 ? void 0 : property.echartsType) ===
                'timeLine' && renderLineGraph,
              (property === null || property === void 0 ? void 0 : property.echartsType) ===
                'gauge' && renderGauge,
              (name === 'webPage' ||
                name == 'biciText' ||
                name == 'dataTable' ||
                (property === null || property === void 0 ? void 0 : property.echartsType) ==
                  'circleAndPie' ||
                (property === null || property === void 0 ? void 0 : property.echartsType) ==
                  'stackBar' ||
                (property === null || property === void 0 ? void 0 : property.echartsType) ==
                  'horizontalBar' ||
                (property === null || property === void 0 ? void 0 : property.echartsType) ==
                  'verticalBar' ||
                (property === null || property === void 0 ? void 0 : property.echartsType) ==
                  'groupBar') &&
                dynamicForm,
            ),
          ),
        ),
        /*#__PURE__*/ _react.default.createElement(
          TabPane,
          {
            tab: '\xA0\xA0\xA0\xA0\u6570\xA0\xA0\u636E\xA0\xA0\xA0\xA0',
            key: '2',
            style: {
              margin: 0,
            },
          },
          /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              style: {
                height: divHeight,
                overflowX: 'hidden',
              },
            },
            /*#__PURE__*/ _react.default.createElement(
              _row.default,
              {
                style: {
                  margin: '0 15px',
                },
              },
              /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 24,
                },
                (data.node.name == 'biciVarer' ||
                  data.node.name == 'echarts' ||
                  data.node.name == 'biciCard' ||
                  data.node.name == 'biciCard2' ||
                  data.node.name == 'biciPilot' ||
                  data.node.name == 'biciMeasure' ||
                  data.node.name == 'biciText' ||
                  data.node.name == 'productQueue' ||
                  data.node.name == 'dataTable' ||
                  data.node.name == 'pdMonthReport' ||
                  data.node.name == 'rectangle' ||
                  data.node.name == 'pointEnergyCarousel' ||
                  data.node.name == 'statusBtn' ||
                  data.node.name == 'emptyCom' ||
                  data.node.name == 'stationCarousel' ||
                  data.node.name == 'dateFormat' ||
                  data.node.name == 'VODCarousel') &&
                  renderExtraDataForm,
                (data.node.name == 'liveVideo' || data.node.name == 'QTLiveVideo') &&
                  renderVideoProp,
              ),
            ),
          ),
        ),
      ),
    visible && renderDataPointModal(),
  );
});

var _default = NodeCanvasProps;
exports.default = _default;
