"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canvas = exports.EditorLayout = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@top-datav/core");

var _chartDiagram = require("@top-datav/chart-diagram");

var _biciDiagram = require("@top-datav/bici-diagram");

var _antd = require("antd");

var _config = require("../config/config");

var _ahooks = require("ahooks");

var _serializing = require("../utils/serializing");

var _Header = _interopRequireDefault(require("../Header"));

var _nodeComponent = _interopRequireDefault(require("./component/nodeComponent"));

var _backgroundComponent = _interopRequireDefault(require("./component/backgroundComponent"));

var _lineComponent = _interopRequireDefault(require("./component/lineComponent"));

var _SystemComponent = _interopRequireDefault(require("./LeftAreaComponent/SystemComponent"));

var _CustomComponent = _interopRequireDefault(require("./LeftAreaComponent/CustomComponent"));

var _PicComponent = _interopRequireDefault(require("./LeftAreaComponent/PicComponent"));

var _indexModule = _interopRequireDefault(require("./index.module.less"));

var _canvasContextMenu = _interopRequireDefault(require("../canvasContextMenu"));

var _cacl = require("../utils/cacl");

var _ = _interopRequireWildcard(require("lodash"));

var _moment = _interopRequireDefault(require("moment"));

var _gauge = require("../config/charts/gauge");

var _timeline = require("../config/charts/timeline");

var _RegCustomUIComp = require("../common/RegCustomUIComp");

var _pie = require("../config/charts/pie");

var _stackbar = require("../config/charts/stackbar");

var _bar = require("../config/charts/bar");

var _groupbar = require("../config/charts/groupbar");

var _horizontalbar = require("../config/charts/horizontalbar");

var _excluded = ["dash", "lineWidth", "strokeStyle", "name", "fromArrow", "toArrow"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TabPane = _antd.Tabs.TabPane;
var canvas;
/**
 * 编辑器画布
 * @param history
 * @constructor
 */

exports.canvas = canvas;

var EditorLayout = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var _props$editorData, _props$editorData2, _customCompRef$curren;

  var history = props.history;
  var layoutRef = (0, _react.useRef)();
  var contextMenuRef = (0, _react.useRef)();
  var headerRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      isSave = _useState2[0],
      setIsSave = _useState2[1];

  var _useState3 = (0, _react.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      scaleVal = _useState4[0],
      setScaleVal = _useState4[1];

  var _useState5 = (0, _react.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      bkImageUrl = _useState6[0],
      setBkImageUrl = _useState6[1];

  var nodeRef = (0, _react.useRef)();

  var _useState7 = (0, _react.useState)({
    minWidth: 3199,
    minHeight: 2289,
    left: 1168,
    top: 560,
    width: (props === null || props === void 0 ? void 0 : (_props$editorData = props.editorData) === null || _props$editorData === void 0 ? void 0 : _props$editorData.width) || 826,
    height: (props === null || props === void 0 ? void 0 : (_props$editorData2 = props.editorData) === null || _props$editorData2 === void 0 ? void 0 : _props$editorData2.height) || 1168
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      canvasSizeInfo = _useState8[0],
      setCanvasSizeInfo = _useState8[1];

  var _useState9 = (0, _react.useState)({
    node: null,
    line: null,
    multi: false,
    nodes: null // locked: Lock.None

  }),
      _useState10 = _slicedToArray(_useState9, 2),
      selected = _useState10[0],
      setSelected = _useState10[1]; // 是否显示右键菜单


  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      showContextmenu = _useState12[0],
      setShowContextmenu = _useState12[1];

  var _useState13 = (0, _react.useState)({
    position: "fixed",
    zIndex: "10",
    display: "none",
    left: "",
    top: "",
    bottom: ""
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      contextmenu = _useState14[0],
      setContextmenu = _useState14[1];

  var _useState15 = (0, _react.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      isLoadCanvas = _useState16[0],
      setIsLoadCanvas = _useState16[1];

  var _useState17 = (0, _react.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      showHeader = _useState18[0],
      setShowHeader = _useState18[1];

  var svgRef = (0, _react.useRef)();
  var canvasRef = (0, _react.useRef)();
  var customCompRef = (0, _react.useRef)();
  var canvasOptions = {
    rotateCursor: "/rotate.cur",
    autoExpandDistance: 0,
    viewPadding: [0],
    autoAnchor: false,
    cacheLen: 50,
    hideInput: false,
    disableEmptyLine: false,
    disableScale: false,
    minScale: 0.3,
    maxScale: 3.1,
    // color: "#096DD9",
    // hoverColor: "#096DD9",
    // activeColor:'#999999',
    rule: false,
    locked: _core.Lock.None,
    disableTranslate: false,
    isApp: false
  };
  (0, _ahooks.useClickAway)(function () {
    setShowContextmenu(false);
  }, contextMenuRef); // 对父组件暴露保存数据的接口

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      getIsSave: function getIsSave() {
        return isSave;
      },
      handleSaveData: function handleSaveData() {
        if (headerRef !== undefined) {
          headerRef.current.save();
        }
      },
      handleDataPointBind: function handleDataPointBind(selectedRowKeys, selectedRows) {
        // @ts-ignore
        nodeRef === null || nodeRef === void 0 ? void 0 : nodeRef.current.onDataPointBind(selectedRowKeys, selectedRows);
      },
      handleVedioBind: function handleVedioBind(selectedRowKeys, selectedRows) {
        // @ts-ignore
        nodeRef === null || nodeRef === void 0 ? void 0 : nodeRef.current.onVedioBind(selectedRowKeys, selectedRows);
      }
    };
  }, [isSave]);
  (0, _react.useEffect)(function () {
    window["__CONKPIT_API_URL"] = props.apiURL;
    window["__CONKPIT_TOKEN"] = props.token;
    canvasOptions.on = onMessage;
    canvasRegister();
    exports.canvas = canvas = new _core.Topology("topology-canvas", canvasOptions);

    if (props.editorData != undefined && _typeof(props.editorData) == "object") {
      canvas.open(props.editorData);
    }

    if (props.editorData) {
      var w = props.editorData.width;
      var h = props.editorData.height;
      var r = (0, _cacl.calcCanvas)(w, h);
      setCanvasSizeInfo(_objectSpread(_objectSpread({}, r), {}, {
        width: w,
        height: h
      }));
      canvas.data["gridColor"] = props.editorData.gridColor;

      if (canvas.data.grid) {
        canvas.data.grid = true;
      }

      setIsLoadCanvas(true);
      canvas.scaleContainer(props.editorData.scale);
      canvas.resize({
        width: w,
        height: h
      });
      canvas.render();
    } else {
      setIsLoadCanvas(false);
      canvas.render();
    }

    setShowHeader(true);
  }, [props.editorData]);
  (0, _react.useEffect)(function () {
    handleScaleCanvas(scaleVal);
  }, [canvasSizeInfo]);
  /**
   * 滚动条居中
   */

  var scrollCenter = function scrollCenter() {
    var fullDiv = document.querySelector("#full");
    fullDiv.scrollTo((fullDiv.scrollWidth - fullDiv.offsetWidth) / 2, (fullDiv.scrollHeight - fullDiv.offsetHeight) / 2);
  };
  /**
   * 注册图形库
   */


  var canvasRegister = function canvasRegister() {
    (0, _chartDiagram.register)();
    (0, _biciDiagram.register)();
    (0, _RegCustomUIComp.register)();
  };

  var onDrag = function onDrag(event, node) {
    var custom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (node.data.name == "liveVideo" && props.websocketConf.video || node.data.name == "QTLiveVideo" && props.websocketConf.video) {
      node.data.property.video = _objectSpread(_objectSpread({}, node.data.property.video), {}, {
        updateStream: props.websocketConf.video.updateStream,
        rePushStream: props.websocketConf.video.rePushStream,
        pushStream: props.websocketConf.video.pushStream
      });
    }

    if (custom) {
      var data = node; // 解决拖动新建组件添加到页面会删除相同组件的bug

      data.id = (0, _core.s8)(); // Topology

      event.dataTransfer.setData("text", JSON.stringify(data, _serializing.replacer));
    } else {
      event.dataTransfer.setData("text", JSON.stringify(node.data, _serializing.replacer));
    }
  };

  var handleGaugeOption = function handleGaugeOption(values) {
    for (var k in values) {
      var kindex = k.split("-");
      var index = parseInt(kindex[1]);

      if (k.indexOf("-") > 0) {
        selected.node.property.dataColors[index][kindex[0]] = values[k];
      }
    }

    selected.node.property.dataMax = values.dataMax;
    selected.node.property.dataMin = values.dataMin;
    var lineColors = [];
    (selected.node.property.dataColors || []).map(function (item) {
      if (item.checked) {
        var lineColor = [];

        if (item.top - selected.node.property.dataMin >= 0) {
          lineColor[0] = Math.abs((item.top - selected.node.property.dataMin) / (selected.node.property.dataMax - selected.node.property.dataMin));
          lineColor[1] = item.color;
          lineColors.push(lineColor);
        }
      }
    });

    if (lineColors.length == 0) {
      lineColors = undefined;
    }

    selected.node.data.echarts.option = (0, _gauge.getGaugeOption)({
      max: selected.node.property.dataMax,
      min: selected.node.property.dataMin,
      lineColors: lineColors,
      chartTitle: selected.node.property.chartTitle,
      chartTitleChecked: selected.node.property.chartTitleChecked,
      chartUnitChecked: selected.node.property.chartUnitChecked,
      chartUnit: selected.node.property.chartUnit,
      chartTitleColor: selected.node.property.chartTitleColor,
      markChecked: selected.node.property.markChecked,
      marks: selected.node.property.marks
    }, values);
  };

  var handleTimeLineOption = function handleTimeLineOption(values) {
    var changedProps = values;

    for (var key in changedProps) {
      if (_typeof(changedProps[key]) === "object") {
        selected.node.property[key] = changedProps[key];
      } else {
        if (changedProps[key] !== undefined) {
          selected.node[key] = changedProps[key];
        }
      }
    }

    selected.node.data.echarts.option = (0, _timeline.getTimeLineOption)(selected.node, values, undefined); // 更新图表数据

    _chartDiagram.echartsObjs[selected.node.id].chart.setOption(JSON.parse(JSON.stringify(selected.node.data.echarts.option), _serializing.reviver));

    _chartDiagram.echartsObjs[selected.node.id].chart.resize();

    selected.node.elementRendered = false;
    canvas.updateProps(true, [selected.node]);
  }; // 计量器


  var handleChartMeasureOption = function handleChartMeasureOption(values) {
    for (var k in values) {
      if (k.indexOf("-") > 0) {
        var kindex = k.split("-");
        var index = parseInt(kindex[1]);
        selected.node.property.dataColors[index][kindex[0]] = values[k];
      }
    }

    selected.node.property.dataMax = values.dataMax;
    selected.node.property.dataMin = values.dataMin;
    var lineColors = [];
    (selected.node.property.dataColors || []).map(function (item) {
      if (item.checked) {
        var lineColor = [];
        lineColor[0] = Math.abs(item.top / selected.node.property.dataMax);
        lineColor[1] = item.color;
        lineColors.push(lineColor);
      }
    });

    if (lineColors.length == 0) {
      lineColors = undefined;
    }
  };
  /**
   * 数据卡片自定义数据逻辑处理
   */


  var handleBiciCard = function handleBiciCard(value) {
    var cardTitle = value.cardTitle,
        showTitle = value.showTitle,
        showLimit = value.showLimit;

    if (showTitle !== undefined) {
      selected.node.text = showTitle ? cardTitle : "";
    }

    if (showLimit !== undefined) {
      selected.node.children[1].text = showLimit ? "\u4E0B\u9650: ".concat(!isNaN(parseInt(value["limit.bottom"])) ? value["limit.bottom"] : "", "   \u4E0A\u9650: ").concat(!isNaN(parseInt(value["limit.top"])) ? value["limit.top"] : "") : "";
    }

    if (value["limit.top"] < value["limit.bottom"]) {
      selected.node.children[1].text = '';
    }

    if ("limit.top" in value) {
      // 下限不能高于上限
      var limitTop = value["limit.top"];
      var limitBottom = value["limit.bottom"];

      if (limitTop && limitBottom && limitTop < limitBottom) {
        selected.node.property.limit.top = undefined;
        selected.node.property.limit.bottom = undefined;
      }
    }

    if ("normal.showBkColor" in value) {
      if (value["normal.showBkColor"]) {
        selected.node.fillStyle = value["normal.bkColor"];
      } else {
        selected.node.fillStyle = "";
      }
    }

    if ("normal.fontSize" in value) {
      selected.node.children[0].font.fontSize = value["normal.fontSize"];
    }

    if ("normal.color" in value) {
      selected.node.children[0].font.color = value["normal.color"];
    }
  };
  /**
   * 指示灯自定义数据处理
   */


  var handlePilot = function handlePilot(value) {
    var color = value.color,
        text = value.text,
        showText = value.showText,
        stateType = value.stateType,
        lightRange = value.lightRange;
    selected.node.strokeStyle = color;
    selected.node.text = showText ? text : "";

    if (lightRange.length > 0) {
      if (lightRange.includes(undefined)) {
        return;
      }

      if (stateType === "single") {
        var vals = lightRange.map(function (item) {
          return item === null || item === void 0 ? void 0 : item.lightRangeVal;
        });
        var tmpSet = new Set(vals);

        if (tmpSet.size !== vals.length) {
          var tmp = {};

          var lightRangeTmp = _.cloneDeep(lightRange);

          lightRangeTmp = lightRangeTmp.reduce(function (item, next) {
            tmp[next.lightRangeVal] ? "" : tmp[next.lightRangeVal] = true && item.push(next);
            return item;
          }, []);
          selected.node.property.lightRange = lightRangeTmp;
        }
      } else {
        var _vals = lightRange.map(function (item) {
          return [item === null || item === void 0 ? void 0 : item.lightRangeBottom, item === null || item === void 0 ? void 0 : item.lightRangeTop];
        });

        if (!_vals.flat().includes(undefined)) {
          var nums = (0, _cacl.eraseOverlapIntervals)(_vals);

          if (nums.length !== 0) {
            var _lightRangeTmp = _.cloneDeep(lightRange);

            nums.forEach(function (num) {
              _lightRangeTmp.forEach(function (item, index) {
                if (item.lightRangeBottom === num[0] && item.lightRangeTop === num[1]) {
                  _lightRangeTmp.splice(index, 1);
                }
              });
            });
            selected.node.property.lightRange = _lightRangeTmp;
          }
        }
      }
    }
  };
  /**
   * 当表单数据变化时, 重新渲染canvas
   * @params {object} value - 图形的宽度,高度, x, y等等
   */


  var onHandleFormValueChange = (0, _react.useCallback)(function (value) {
    setIsSave(false);
    var x = value.x,
        y = value.y,
        width = value.width,
        height = value.height,
        rotate = value.rotate,
        color = value.color,
        fontSize = value.fontSize,
        fontFamily = value.fontFamily,
        fillStyle = value.fillStyle,
        strokeStyle = value.strokeStyle,
        lineWidth = value.lineWidth,
        text = value.text,
        textAlign = value.textAlign;
    var changedProps = {
      rect: {
        x: x ? Number(x) : undefined,
        y: y ? Number(y) : undefined,
        width: width ? Number(width) : undefined,
        height: height ? Number(height) : undefined
      },
      font: {
        color: color,
        textAlign: textAlign,
        fontSize: isNaN(Number(fontSize)) ? undefined : Number(fontSize),
        fontFamily: fontFamily
      },
      rotate: isNaN(Number(rotate)) ? undefined : Number(rotate),
      strokeStyle: strokeStyle,
      lineWidth: isNaN(Number(lineWidth)) ? undefined : Number(lineWidth),
      fillStyle: fillStyle,
      text: text
    };

    for (var key in changedProps) {
      if (_typeof(changedProps[key]) === "object") {
        for (var k in changedProps[key]) {
          if (changedProps[key][k] !== undefined) {
            selected.node[key][k] = changedProps[key][k];
          }
        }
      } else {
        if (changedProps[key] !== undefined) {
          selected.node[key] = changedProps[key];
        }
      }
    }

    canvas.updateProps(true, [selected.node]);
  }, [selected]);
  /*当自定义的属性发生变化时*/

  var onHandlePropertyFormValueChange = (0, _react.useCallback)(function (value) {
    setIsSave(false);
    canvas.cache(); // 只能两层嵌套，后期需要更改，如果有多层的话
    // canvas.setValue(selected.node.id, 'setValue');
    // 通知有数据属性更新,会重新渲染画布

    var name = selected.node.name; // if (name === "biciCard") {
    //   selected.node.property.preType = selected.node.property.limitType;
    // }

    for (var key in value) {
      if (key.indexOf(".") > 0) {
        if (key != undefined) {
          var k = key.split(".");
          selected.node.property[k[0]][k[1]] = value[key];
        }
      } else {
        if (value[key] !== undefined) {
          selected.node.property[key] = value[key];

          if (selected.node.name == "QTLiveVideo") {
            canvas.dispatch("changeVideoUrl", {
              selNode: selected.node,
              videoURL: value[key]
            });
          }
        }
      }
    }

    switch (name) {
      case "biciCard":
        handleBiciCard(value);
        break;

      case "biciPilot":
        handlePilot(value);
        break;

      case "biciMeasure":
        handleChartMeasureOption(value);
        break;

      case "biciTimer":
        var y = "";
        var h = "";
        var node = selected.node;

        if (value["date.show"]) {
          y = (0, _moment["default"])().format(value["date.format"]);
        }

        if (value["time.show"]) {
          h = (0, _moment["default"])().format(value["time.format"]);
        }

        node.text = y + " " + h;

        if (node.text == " ") {
          node.text = (0, _moment["default"])().format("LLLL");
        }

        canvas.updateProps(false);
        break;

      case "echarts":
        var theChart = selected.node.property.echartsType;

        if (theChart == "gauge") {
          handleGaugeOption(value);
        } else if (theChart === "timeLine") {
          handleTimeLineOption(value);
        }

        break;
    }

    setIsSave(false); // 更新属性变化

    canvas.updateProps(false, [selected.node]);
  }, [selected]);
  var onEventValueChange = (0, _react.useCallback)(function (value) {
    setIsSave(false);
    selected.node.events = value;
    canvas.updateProps(true, selected.node);
  }, [selected]);
  /**
   * 切换画布大小
   */

  var handleChangeCanvasSize = (0, _react.useCallback)(function (sizeInfo) {
    setIsSave(false);
    canvas.cache();
    setCanvasSizeInfo(sizeInfo);
  }, []);
  /**
   * 切换画布背景图片
   */

  var handleChangeBkImage = (0, _react.useCallback)(function (imgUrl) {
    setIsSave(false);
    canvas.cache();
    setBkImageUrl(imgUrl);
  }, []);
  /**
   * 当线条表单数据变化时, 重新渲染canvas
   * @params {object} value - 图形的宽度,高度, x, y等等
   */

  var onHandleLineFormValueChange = (0, _react.useCallback)(function (value) {
    var dash = value.dash,
        lineWidth = value.lineWidth,
        strokeStyle = value.strokeStyle,
        name = value.name,
        fromArrow = value.fromArrow,
        toArrow = value.toArrow,
        other = _objectWithoutProperties(value, _excluded);

    var changedValues = {
      line: {
        rect: other,
        lineWidth: lineWidth,
        dash: dash,
        strokeStyle: strokeStyle,
        name: name,
        fromArrow: fromArrow,
        toArrow: toArrow
      }
    };

    if (changedValues.line) {
      // 遍历查找修改的属性，赋值给原始line
      for (var key in changedValues.line) {
        if (Array.isArray(changedValues.line[key])) {} else if (_typeof(changedValues.line[key]) === "object") {
          for (var k in changedValues.line[key]) {
            selected.line[key][k] = changedValues.line[key][k];
          }
        } else {
          selected.line[key] = changedValues.line[key];
        }
      }
    }

    canvas.updateProps(true, [selected.line]);
    setIsSave(false);
  }, [selected]);

  var handleCustomizedDynamicFormChange = function handleCustomizedDynamicFormChange(group, fields) {
    var g = _.findIndex(selected.node.property.form.style, function (item) {
      return item.group == group;
    });

    selected.node.property.form.style[g].formItems = fields;
    (fields || []).forEach(function (field) {
      var fieldName = field.name;

      if (fieldName.length == 1) {
        for (var key in selected.node.property.props) {
          if (field.name[0] == key) {
            selected.node.property.props[key] = field.value;
            break;
          }
        }

        selected.node.property.props[field.name[0]] = field.value;
      }
    });
    selected.node.elementRendered = false;

    if (selected.node.property.echartsType == 'circleAndPie') {
      selected.node.data.echarts.option = (0, _pie.getPieOptionByChangeProp)(selected.node, null);
    } else if (selected.node.property.echartsType == 'stackBar') {
      selected.node.data.echarts.option = (0, _stackbar.getStackBarOption)(selected.node, null);
    } else if (selected.node.property.echartsType == 'verticalBar') {
      selected.node.data.echarts.option = (0, _bar.getBarOption)(selected.node, null);
    } else if (selected.node.property.echartsType == 'groupBar') {
      selected.node.data.echarts.option = (0, _groupbar.getGroupBarOption)(selected.node, null);
    } else if (selected.node.property.echartsType == 'horizontalBar') {
      selected.node.data.echarts.option = (0, _horizontalbar.getHorizontalBarOption)(selected.node, null);
    } else if (selected.node.name == 'biciText') {
      var child = selected.node.children[0];

      if (group == '副标题') {
        child = selected.node.children[1];
      }

      child.font.fontSize = selected.node.property.props["titleFontSize"];
      child.font.color = selected.node.property.props["titleFontColor"];
      child.font.fontFamily = selected.node.property.props["titleFontFamily"];
      child.font.textAlign = selected.node.property.props["titlePosition"];
      (selected.node.property.props.titleFontStyle || []).forEach(function (item) {
        if (item.name == 'bold') {
          if (item.checked) {
            child.font.fontWeight = item.value;
          } else {
            child.font.fontWeight = 'normal';
          }
        }

        if (item.name == 'italic') {
          if (item.checked) {
            child.font.fontStyle = item.value;
          } else {
            child.font.fontStyle = 'normal';
          }
        }
      });
    }

    canvas.updateProps(true, [selected.node]);
    setIsSave(false);
  };
  /**
   * 监听画布上元素的事件
   * @params {string} event - 事件名称
   * @params {object} data - 节点数据
   */


  var onMessage = function onMessage(event, data) {
    switch (event) {
      case "resize":
        break;

      case "dblclick":
        setIsSave(false);
        break;

      case "node":
        // 节点切换或者点击
        // console.log(data);
        // const reqData=(data.property?.reqData||'').replace(/[\r|\n|\r\n]/g,"");
        // if(reqData){
        //   console.log(JSON.parse(reqData));
        // }
        setSelected({
          node: data,
          line: null,
          multi: false,
          nodes: null // locked: Lock.None

        });
        setIsSave(false);
        break;

      case "addNode":
        setIsSave(false);
        setSelected({
          node: data,
          line: null,
          multi: false,
          nodes: null // locked: Lock.None

        });
        setIsLoadCanvas(true); //=================解决新建组件添加到画布纵坐标不显示的问题

        if (data.name == 'echarts' && data.property.echartsType == "timeLine") {
          data.data.echarts.option = (0, _timeline.getTimeLineOption)(data, undefined, undefined); // 更新图表数据

          _chartDiagram.echartsObjs[data.id].chart.setOption(JSON.parse(JSON.stringify(data.data.echarts.option), _serializing.reviver));
        } else if (data.name == 'combine') {
          (data.children || []).map(function (item) {
            if (item.name == 'echarts' && item.property.echartsType == "timeLine") {
              item.data.echarts.option = (0, _timeline.getTimeLineOption)(item, undefined, undefined); // 更新图表数据

              _chartDiagram.echartsObjs[item.id].chart.setOption(JSON.parse(JSON.stringify(item.data.echarts.option), _serializing.reviver));
            } else if (item.name == 'echarts' && item.property.echartsType == "gauge") {
              handleGaugeOption(undefined); // 更新图表数据

              _chartDiagram.echartsObjs[item.id].chart.setOption(JSON.parse(JSON.stringify(item.data.echarts.option), _serializing.reviver));
            }
          });
        } //==================


        break;

      case "delete":
        setIsSave(false);
        canvas.dispatch('deleteNode', data);
        setSelected({
          node: undefined,
          line: null,
          multi: false,
          nodes: null // locked: Lock.None

        });
        break;

      case "line": // 连线

      case "addLine":
        setIsSave(false);
        setSelected({
          node: null,
          line: data,
          multi: false,
          nodes: null // locked: Lock.None

        });
        break;

      case "space":
        // 空白处
        setIsLoadCanvas(true);
        setSelected({
          node: null,
          line: null,
          multi: false,
          nodes: null // locked: Lock.None

        });
        setIsSave(false);
        break;

      case "rotated":
        var temp = data[0];
        temp.rotate += temp.offsetRotate;
        setIsSave(false);
        setSelected(_objectSpread(_objectSpread({}, selected), {}, {
          node: temp
        }));
        break;

      case "move":
        setIsSave(false);
        setSelected(Object.assign({}, _objectSpread(_objectSpread({}, selected), {}, {
          node: data[0]
        })));
        break;

      case "resizePens":
        setIsSave(false);
        setSelected(Object.assign({}, _objectSpread(_objectSpread({}, selected), {}, {
          node: data[0]
        }))); // 重新绘制图表

        if (data.name == "echarts") {
          var chart = _chartDiagram.echartsObjs[data.id].chart;
          chart.setOption(data.data.echarts.option, true);
        }

        break;

      case "multi":
        setSelected(Object.assign({}, {
          node: data[0],
          line: null,
          multi: true,
          nodes: data // locked: Lock.None

        }));
        break;

      case "scale":
        if (typeof data === "number") {
          setScaleVal(data);
          scrollCenter();
        }

        break;

      case "translate":
        var fullDiv = document.querySelector("#full");
        fullDiv.scrollBy(-data.offsetX, -data.offsetY);
        break;

      default:
        break;
    }
  };
  /**
   * 画布右侧配置区域
   */


  var rightAreaConfig = (0, _react.useMemo)(function () {
    return {
      node: selected && /*#__PURE__*/_react["default"].createElement(_nodeComponent["default"], {
        data: selected,
        onFormValueChange: onHandleFormValueChange,
        onEventValueChange: onEventValueChange,
        onPropertyFormValueChange: onHandlePropertyFormValueChange,
        setIsSave: setIsSave,
        onAddDataPoint: props.onAddDataPoint,
        onAddVedioSource: props.onAddVedioSource,
        ref: nodeRef,
        dataPointPropsMap: props.dataPointPropsMap,
        uploaConfig: props.uploadConfig,
        onCustomizedDynamicFormChange: handleCustomizedDynamicFormChange
      }),
      line: selected && /*#__PURE__*/_react["default"].createElement(_lineComponent["default"], {
        data: selected,
        onFormValueChange: onHandleLineFormValueChange
      }),
      "default": canvas && /*#__PURE__*/_react["default"].createElement(_backgroundComponent["default"], {
        data: canvas,
        baseUrl: props.apiURL,
        websocketConf: props.websocketConf,
        preInstallBgImages: props.preInstallBgImages,
        svgRef: svgRef,
        canvasRef: canvasRef,
        onChangeCanvasSize: handleChangeCanvasSize,
        onChangeBkImage: handleChangeBkImage,
        isSave: isSave,
        setIsSave: setIsSave,
        uploadConfig: props.uploadConfig
      }) // 渲染画布背景的组件

    };
  }, [selected, onHandleFormValueChange, onHandleLineFormValueChange, onEventValueChange, isLoadCanvas, canvas, props.dataPointPropsMap]);
  /**
   * 处理放大缩小
   * @param scale
   */

  var handleScaleCanvas = function handleScaleCanvas(scale) {
    canvas.render();
    scrollCenter();
  };
  /**
   * 渲染画布右侧区域操作栏
   */


  var renderRightArea = (0, _react.useMemo)(function () {
    if (isLoadCanvas) {
      var _component = rightAreaConfig["default"];
      Object.keys(rightAreaConfig).forEach(function (item) {
        if (selected[item]) {
          _component = rightAreaConfig[item];
        }
      });
      return _component;
    }
  }, [selected, rightAreaConfig, isLoadCanvas]); // 渲染头部

  var renderHeader = (0, _react.useMemo)(function () {
    if (showHeader) {
      return /*#__PURE__*/_react["default"].createElement(_Header["default"], {
        ref: headerRef,
        canvas: canvas,
        history: history,
        rootRef: layoutRef,
        isSave: isSave,
        scaleVal: scaleVal,
        setIsSave: setIsSave,
        onExtraSetting: props.onExtraSetting,
        onEditorSaveCb: props.onEditorSaveCb,
        onPoweroff: props.onPoweroff,
        autoSaveInterval: props.autoSaveInterval,
        onPreview: props.onPreview,
        onScaleCanvas: handleScaleCanvas
      });
    }
  }, [showHeader, history, layoutRef, isSave, scaleVal, canvas]); // 右键菜单

  var handleContextMenu = function handleContextMenu(event) {
    setShowContextmenu(!showContextmenu);
    event.preventDefault();
    event.stopPropagation();

    if (event.clientY + 360 < document.body.clientHeight) {
      setContextmenu({
        position: "fixed",
        zIndex: "10",
        display: "block",
        left: event.clientX + "px",
        top: event.clientY + "px",
        bottom: ""
      });
    } else {
      setContextmenu({
        position: "fixed",
        zIndex: "10",
        display: "block",
        left: event.clientX + "px",
        top: "",
        bottom: document.body.clientHeight - event.clientY + "px"
      });
    }
  };

  var renderContextMenu = /*#__PURE__*/_react["default"].createElement("div", {
    style: contextmenu,
    ref: contextMenuRef
  }, /*#__PURE__*/_react["default"].createElement(_canvasContextMenu["default"], {
    data: selected,
    canvas: canvas,
    show: showContextmenu,
    isSave: isSave,
    setIsSave: setIsSave,
    onNeedHide: function onNeedHide() {
      return setShowContextmenu(false);
    },
    combineCom: props.uploadConfig.combineCom,
    getNewComponents: (_customCompRef$curren = customCompRef.current) === null || _customCompRef$curren === void 0 ? void 0 : _customCompRef$curren.getNewComponents
  }));

  var divHeight = document.body.clientHeight - 200;
  return /*#__PURE__*/_react["default"].createElement(_antd.ConfigProvider, {
    prefixCls: "antdv4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "editLayout",
    ref: layoutRef
  }, renderHeader, /*#__PURE__*/_react["default"].createElement("div", {
    className: _indexModule["default"].page
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _indexModule["default"].tool,
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/_react["default"].createElement(_antd.Tabs, {
    defaultActiveKey: "1",
    centered: true
  }, /*#__PURE__*/_react["default"].createElement(TabPane, {
    tab: "\xA0\xA0\xA0\xA0\u7EC4\xA0\u4EF6\xA0\xA0\xA0\xA0\xA0",
    key: "1",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: divHeight,
      overflow: "auto"
    }
  }, /*#__PURE__*/_react["default"].createElement(_SystemComponent["default"], {
    onDrag: onDrag,
    Tools: _config.Tools,
    toolConfig: props.websocketConf.toolsConfig
  }), /*#__PURE__*/_react["default"].createElement(_CustomComponent["default"], {
    ref: customCompRef,
    onDrag: onDrag,
    combineCom: props.uploadConfig.combineCom
  }))), /*#__PURE__*/_react["default"].createElement(TabPane, {
    tab: "\xA0\xA0\xA0\xA0\u56FE\xA0\xA0\u5E93\xA0\xA0\xA0\xA0",
    key: "2",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(_PicComponent["default"], {
    uploaConfig: props.uploadConfig,
    industrialLibrary: props.industrialLibrary
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: _indexModule["default"].full,
    id: "full",
    style: {
      background: "#efefef"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "topology-canvas-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: _indexModule["default"].svg,
    id: "topology-canvas-svg",
    ref: svgRef,
    style: {
      minWidth: canvasSizeInfo.minWidth,
      minHeight: canvasSizeInfo.minHeight
    }
  }), props.boardData && /*#__PURE__*/_react["default"].createElement("p", {
    className: _indexModule["default"].titleInfo,
    style: {
      left: canvasSizeInfo.left,
      top: canvasSizeInfo.top
    }
  }, props.boardData.code ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_antd.Tooltip, {
    title: props.boardData.code
  }, /*#__PURE__*/_react["default"].createElement("span", null, "No.", props.boardData.code)), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      margin: "0 5px"
    }
  }, "/")) : '', props.boardData.name ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_antd.Tooltip, {
    title: props.boardData.name
  }, /*#__PURE__*/_react["default"].createElement("span", null, props.boardData.name)), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      margin: "0 5px"
    }
  }, "/")) : '', props.boardData.typeName ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_antd.Tooltip, {
    title: props.boardData.typeName
  }, /*#__PURE__*/_react["default"].createElement("span", null, props.boardData.typeName)), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      margin: "0 5px"
    }
  }, "/")) : '', props.boardData.remark ? /*#__PURE__*/_react["default"].createElement(_antd.Tooltip, {
    title: props.boardData.remark
  }, /*#__PURE__*/_react["default"].createElement("span", null, props.boardData.remark)) : ''), /*#__PURE__*/_react["default"].createElement("div", {
    className: _indexModule["default"].topology_canvas,
    ref: canvasRef,
    id: "topology-canvas",
    style: {
      position: "absolute",
      borderWidth: 1,
      overflow: "hidden",
      left: canvasSizeInfo.left,
      top: canvasSizeInfo.top,
      width: canvasSizeInfo.width,
      height: canvasSizeInfo.height,
      background: "#fff",
      boxShadow: "0px 0px 2px 1px #d1d1d1",
      border: "1px solid #f3f3f3"
    },
    onContextMenu: handleContextMenu
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: _indexModule["default"].props,
    id: "props",
    style: {
      overflow: "hidden"
    }
  }, renderRightArea), renderContextMenu)));
});

exports.EditorLayout = EditorLayout;