'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = exports.canvas = exports.PreviewProps = void 0;

require('antd/es/config-provider/style');

var _configProvider = _interopRequireDefault(require('antd/es/config-provider'));

var _createForOfIteratorHelper2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createForOfIteratorHelper'),
);

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread2'));

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

var _typeof2 = _interopRequireDefault(require('@babel/runtime/helpers/typeof'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _react = _interopRequireWildcard(require('react'));

var _core = require('@top-datav/core');

var _cacl = require('../utils/cacl');

var _Property2NodeProps = require('../utils/Property2NodeProps');

var _ = _interopRequireWildcard(require('lodash'));

var _chartDiagram = require('@top-datav/chart-diagram');

var _RegCustomUIComp = require('../common/RegCustomUIComp');

var _serializing = require('../utils/serializing');

var _biciDiagram = require('@top-datav/bici-diagram');

var _moment = _interopRequireDefault(require('moment'));

require('antd/dist/antd.css');

var _indexModule = _interopRequireDefault(require('./index.module.css'));

var _timeline = require('../config/charts/timeline');

var _defines = require('../data/defines');

var _api = require('../data/api');

var _axios = _interopRequireDefault(require('axios'));

var _bar = require('../config/charts/bar');

var _groupbar = require('../config/charts/groupbar');

var _stackbar = require('../config/charts/stackbar');

var _horizontalbar = require('../config/charts/horizontalbar');

var _pie = require('../config/charts/pie');

var canvas;
exports.canvas = canvas;
var x, y;
var PreviewProps = /*#__PURE__*/ (0, _createClass2.default)(function PreviewProps() {
  (0, _classCallCheck2.default)(this, PreviewProps);
  this.history = void 0;
  this.key = void 0;
  this.ref = void 0;
  this.data = void 0;
  this.websocketConf = void 0;
  this.isApp = void 0;
}); // echartsObjs[node.id].chart

exports.PreviewProps = PreviewProps;

var Preview = function Preview(_ref) {
  var data = _ref.data,
    websocketConf = _ref.websocketConf,
    isApp = _ref.isApp;
  var websocketData = null;
  var websocket_data_list = [];
  var userInterval = [];
  var interfaceToken = '';
  var socketNodeMap = {};
  var socketDataMap = {};
  var canvasOptions = {
    rotateCursor: '/rotate.cur',
    locked: _core.Lock.NoMove,
    disableTranslate: !isApp,
    isApp: isApp,
    width: data === null || data === void 0 ? void 0 : data.width,
    height: data === null || data === void 0 ? void 0 : data.height,
    on: function on(event, data) {},
  };

  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    drawerVisible = _useState2[0],
    setDrawerVisible = _useState2[1];

  var _useState3 = (0, _react.useState)(),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    deviceType = _useState4[0],
    setDeviceType = _useState4[1];

  var _useState5 = (0, _react.useState)(),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    reqData = _useState6[0],
    setReqData = _useState6[1];

  var _useState7 = (0, _react.useState)(),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    currentNode = _useState8[0],
    setCurrentNode = _useState8[1];

  var renderCanvasInterval;

  window.οnfοcus = function (window) {
    renderCanvasInterval = setInterval(function () {
      canvas.updateProps(false);
    }, 1000);
  };

  window.onblur = function () {
    clearInterval(renderCanvasInterval);
  };

  (0, _react.useEffect)(
    function () {
      canvasRegister();
      exports.canvas = canvas = new _core.Topology('topology-canvas-preview', canvasOptions); // 渲染页面数据

      if (data != undefined && (0, _typeof2.default)(data) == 'object') {
        data.locked = 2;
        canvas.open(data);
        canvas.resize({
          width: data === null || data === void 0 ? void 0 : data.width,
          height: data === null || data === void 0 ? void 0 : data.height,
        });
      }

      initWebsocketData();

      if (data) {
        canvas.data.pens
          .filter(function (pen) {
            return pen.name === 'combine';
          })
          .forEach(function (pen) {
            return canvas.uncombine(pen);
          });
        initRestfullData(canvas.data.pens);
      }

      canvas._emitter.on('lfOpenDrawer', initEmmitevent);

      renderCanvasInterval = setInterval(function () {
        canvas.updateProps(false);
      }, 1000);
      return function () {
        canvas.closeSocket();
        canvas.destroy();
        userInterval.forEach(function (item) {
          clearInterval(item);
        }); // clearInterval(renderCanvasInterval);
      };
    },
    [data],
  ); // useEffect(()=>{
  //   canvas._emitter.on("lfOpenDrawer",initEmmitevent)
  // },[currentNode])

  var initEmmitevent = function initEmmitevent(data) {
    setDeviceType(data.node.id);
    setReqData(JSON.stringify(data.reqData || {}));
    setDrawerVisible(true);
    setCurrentNode(data);
  };

  var onMessage = function onMessage(event, data) {
    if (event == 'node') {
      if (!data.property) return;

      if (data.property.echartsType == 'statusBtn') {
        setDeviceType(data.id);
        setReqData(data.property.reqData);
        setDrawerVisible(true);
        setCurrentNode(data);
      } else if (data.property.type == 'openUrl') {
        var getUrl = function getUrl() {
          var p = window.location.protocol;
          var url = window.location.host;
          return ''.concat(p, '//').concat(url);
        };

        var host = getUrl();
        var uri = ''.concat(host).concat(data.property.url);
        top.window.open(uri);
      }
    }
  };

  canvasOptions.on = onMessage;
  /**
   * 注册图形库
   */

  var canvasRegister = function canvasRegister() {
    (0, _chartDiagram.register)();
    (0, _biciDiagram.register)();
    (0, _RegCustomUIComp.register)();
  }; // 数据卡片颜色根据数据变化

  var setCardStyle = function setCardStyle(node, fontFamily, color, size, bkColor) {
    if (fontFamily) {
      node.font.fontFamily = fontFamily;
      node.children[0].font.fontFamily = fontFamily;
    }

    if (color) {
      node.font.color = color;
      node.children[0].font.color = color;
    }

    if (size) {
      node.children[0].font.fontSize = size;
    }

    if (bkColor) {
      node.fillStyle = bkColor;
    }
  }; // 停止数据推送时更新图表

  var stopCompData = function stopCompData(pens, intval) {
    (pens || []).map(function (node) {
      var _node$property, _node$property$dataPo, _node$property$dataPo2;

      // 循环遍历
      if (node.name == 'combine') {
        stopCompData(node.children, intval);
      } else if (
        ((_node$property = node.property) === null || _node$property === void 0
          ? void 0
          : (_node$property$dataPo = _node$property.dataPointParam) === null ||
            _node$property$dataPo === void 0
          ? void 0
          : (_node$property$dataPo2 = _node$property$dataPo.qtDataList) === null ||
            _node$property$dataPo2 === void 0
          ? void 0
          : _node$property$dataPo2.length) > 0
      ) {
        if (node.name == 'echarts') {
          // echart图表组件
          if (websocketData && intval % 2 == 0) {
            var theChart = node.property.echartsType;

            switch (theChart) {
              case 'timeLine':
                var dataRows = node.property.dataPointSelectedRows;
                break;

              case 'gauge':
                break;

              default:
                break;
            }
          }
        } else {
          var dataRow = node.property.dataPointSelectedRows[0];

          if (dataRow && intval % 2 == 0) {
            // 每2秒检测一次
            var nodeType = node.name;

            var hasData = _.findIndex(websocket_data_list, function (item) {
              if (item) {
                return item.id == dataRow.id;
              } else {
                return false;
              }
            });

            switch (nodeType) {
              case 'biciVarer':
                if (hasData < 0) {
                  // 没有数据
                  node.text = '0'; // canvas.updateProps(false,[node])
                }

                break;

              case 'biciMeasure':
                if (hasData < 0) {
                  node.property.value = node.property.dataMin; // canvas.updateProps(false,[node]);
                }

                break;

              case 'biciCard':
                if (hasData < 0) {
                  node.children[0].text = '0.00'; // canvas.updateProps(false, [node]);
                }

                break;

              case 'biciPilot':
                if (hasData < 0) {
                  node.strokeStyle = node.property.color;

                  if (node.property.showText) {
                    node.text = node.property.text;
                  }
                }

                break;

              default:
                break;
            }
          }
        }
      }
    });
  };
  /**
   * 初始话数据接口更新数据
   */

  var initRestfullData = function initRestfullData(pens) {
    if (pens.length > 0) {
      // 有数据，去遍历所有数据为接口类型的组件
      pens.forEach(
        /*#__PURE__*/ (function () {
          var _ref2 = (0, _asyncToGenerator2.default)(
            /*#__PURE__*/ _regenerator.default.mark(function _callee2(node) {
              var interval;
              return _regenerator.default.wrap(function _callee2$(_context2) {
                while (1) {
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      // 如果是图表组件，下面就需要判断具体的是那种图表组件
                      if (node.name == 'combine') {
                        initRestfullData(node.children);
                      } else if (node.property) {
                        if (node.property.dataMethod == 'restful') {
                          // 第一次请求数据
                          loginAndFetchData(node); // 对于有轮训需求的数据设置轮训

                          if (node.property.pullRate) {
                            interval = setInterval(
                              /*#__PURE__*/ (0, _asyncToGenerator2.default)(
                                /*#__PURE__*/ _regenerator.default.mark(function _callee() {
                                  return _regenerator.default.wrap(function _callee$(_context) {
                                    while (1) {
                                      switch ((_context.prev = _context.next)) {
                                        case 0:
                                          loginAndFetchData(node);

                                        case 1:
                                        case 'end':
                                          return _context.stop();
                                      }
                                    }
                                  }, _callee);
                                }),
                              ),
                              node.property.pullRate * (node.property.pullRateUnit || 1) * 1000,
                            );
                            userInterval.push(interval);
                          }
                        }
                      }

                    case 1:
                    case 'end':
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }),
          );

          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        })(),
      );
    }
  };
  /**
   * 登陆并获取数据
   * @param node
   */

  var loginAndFetchData = function loginAndFetchData(node) {
    requestData(node).then(function (data) {
      mapRestDataToChart(node, data);
    }); // if(!interfaceToken){
    //   loginSZGC().then((res:string)=>{
    //     interfaceToken=res;
    //     requestData(node).then(data=>{
    //       mapRestDataToChart(node,data)
    //     })
    //   })
    // }else{
    //   requestData(node).then(data=>{
    //     mapRestDataToChart(node,data)
    //   })
    // }
  };
  /**
   * rest请求的数据更新到图表上
   * @param node
   * @param res
   * 统计组件数据格式：
   * {
    "code": 1000,
    "msg": "success",
    "data": {
        text:"产量",
        value:"1024",
        unit:"t"
    }
  }
  图表数据格式：
   {
    "code": 1000,
    "msg": "success",
    "data": {
        "dimensions": [
            "xdata",
            "2020-09"
        ],
        "source": [
            [
                "补强板",
                99.899
            ],
            [
                "电梯导轨",
                1457.332
            ],
            [
                "扁钢",
                1768.992
            ]
        ]
    }
  }
   */

  var mapRestDataToChart = function mapRestDataToChart(node, res) {
    if (res.front_error) {
      // 请求出错，不做处理
      return;
    }

    var resTmp = null;

    if (typeof res == 'string') {
      // 如果请求结果是字符串，尝试解析成对象
      resTmp = JSON.parse(res);
    } else {
      resTmp = res;
    }

    if (resTmp) {
      if (
        resTmp.hasOwnProperty('text') ||
        resTmp.hasOwnProperty('value') ||
        resTmp.hasOwnProperty('unit')
      ) {
        // 说明是统计组件的数据
        var nodeType = node.name;

        switch (nodeType) {
          case 'biciText':
            node.children[0].text = resTmp['value'] + resTmp['unit'];
            node.children[1].text = resTmp['text']; // canvas.updateProps(false,[node])

            break;

          case 'biciCard2':
            node.children[0].text = resTmp['text'];
            node.children[1].text = resTmp['unit'];
            node.children[2].text = resTmp['value']; // canvas.updateProps(false,[node])

            break;
        }
      } else if (resTmp.hasOwnProperty('dimensions') && resTmp.hasOwnProperty('source')) {
        // 是图表组件的数据
        var _nodeType = node.property.echartsType;

        switch (_nodeType) {
          case 'groupBar':
            node.data.echarts.option = (0, _groupbar.getGroupBarOption)(node, res);
            break;

          case 'verticalBar':
            node.data.echarts.option = (0, _bar.getBarOption)(node, res);
            break;

          case 'stackBar':
            node.data.echarts.option = (0, _stackbar.getStackBarOption)(node, res);
            break;

          case 'horizontalBar':
            node.data.echarts.option = (0, _horizontalbar.getHorizontalBarOption)(node, res);
            break;

          case 'circleAndPie':
            node.data.echarts.option = (0, _pie.getPieOptionByChangeProp)(node, res);
            break;

          case 'timeLine':
            break;

          case 'dataTable':
            // console.log("表格==",res);
            // node.property.props={
            //   ...node.property.props,
            //   data:res,
            // }

            /**
             * 用改变属性的方式无法实时更新数据
             */
            canvas.dispatch('requestDataSuccess' + node.id, res);
            break;
        }

        updateChartNode(node);
      }
    } else {
    }
  };
  /**
   * 请求接口数据
   * @param node
   */

  var requestData = function requestData(node) {
    return new Promise(function (resolve, reject) {
      var myURL = new URL(node.property.dataSourceUrl || node.property.dataUrl);

      var ajax = _axios.default.create({
        baseURL: ''.concat(myURL.origin, '/'),
        timeout: _api.timeout,
        maxContentLength: _api.maxContentLength,
        withCredentials: _api.withCredentials,
      }); // const ajax = axios.create({baseURL: `http://qt.test.bicisims.com`, timeout, maxContentLength,withCredentials})

      ajax
        .request({
          url: myURL.pathname,
          method: 'get',
          headers: {
            // token: '2sdIEuFCYR768oVd4fvUyj'||interfaceToken,
            'Content-Type': 'application/json',
          },
        })
        .then(function (res) {
          if (res && res.data.code == 1000) {
            resolve(res.data.data);
          } else {
            resolve({
              front_error: 2,
            });
          }
        })
        .catch(function (error) {
          (0, _api.handleRequestError)(error);
          resolve({
            front_error: 1,
          });
        });
    });
  };

  var initWebsocketData = function initWebsocketData() {
    canvas.closeSocket();

    if (websocketConf !== undefined) {
      canvas.openSocket(''.concat(websocketConf.url));
    }

    if (canvas != undefined && canvas.socket != undefined) {
      canvas.socket.socket.onopen = function () {
        if (canvas.data && canvas.data.pens.length > 0) {
          // 有数据，去遍历有websocket的组件，并订阅
          if (canvas.socket != undefined) {
            sendMessage(canvas.data.pens);
          }
        }
      };

      canvas.socket.socket.onmessage = function (data) {
        canvas.dispatch('socketDataSuccess', data);
        var nodes = [];
        websocketData = JSON.parse(data.data);
        websocket_data_list.push(websocketData);

        if (canvas.data && canvas.data.pens.length > 0) {
          // 有数据，去遍历有websocket的组件，并订阅
          if (canvas.socket != undefined) {
            var r = JSON.parse(data.data);

            for (var k in socketNodeMap) {
              var kv = k.split('__');

              if (kv[1] == r.id) {
                nodes.push(socketNodeMap[k]);
              }
            }

            updateComp(canvas.data.pens, data);
          }
        }
      };

      canvas.socket.socket.onclose = function (e) {};
    } //canvas.data.pens

    updateTimerCom(canvas.data.pens);
  };

  var sendMessage = function sendMessage(pens) {
    (pens || []).map(function (node) {
      var _node$property2, _node$property2$dataP, _node$property2$dataP2;

      // 循环遍历
      if (node.name == 'combine') {
        sendMessage(node.children);
      } else if (
        ((_node$property2 = node.property) === null || _node$property2 === void 0
          ? void 0
          : (_node$property2$dataP = _node$property2.dataPointParam) === null ||
            _node$property2$dataP === void 0
          ? void 0
          : (_node$property2$dataP2 = _node$property2$dataP.qtDataList) === null ||
            _node$property2$dataP2 === void 0
          ? void 0
          : _node$property2$dataP2.length) > 0
      ) {
        var socketId = node.property.dataPointParam.qtDataList[0].id;
        var k = node.id + '__' + socketId;
        socketNodeMap[k] = node;
        socketDataMap[socketId] = '';
        var dcList = node.property.dataPointParam.qtDataList.map(function (item) {
          return {
            dc: item.dataCode,
            intervalTime: item.intervalTime,
            count: 0,
            ext: 'number',
          };
        });
        canvas.socket.socket.send(
          JSON.stringify({
            dcList: dcList,
            subscribe: true,
            companyId: '',
            nodeTid: node.TID,
            nodeId: node.id,
          }),
        );
      }
    });
  };

  var updateTimerCom = function updateTimerCom(pens) {
    (pens || []).map(function (node) {
      if (node.name == 'biciTimer') {
        setInterval(function () {
          (0, _Property2NodeProps.formatTimer)(node, canvas);
        }, 1000);
      } else if (node.name == 'combine') {
        updateTimerCom(node.children);
      }
    });
  };

  var timedata = [];

  for (var i = 0; i < 10; i++) {
    timedata.push({
      name: (0, _moment.default)().subtract(1, 'seconds'),
      value: [(0, _moment.default)().subtract(1, 'seconds'), null],
    });
  }

  var updateComp = function updateComp(pens, data) {
    var theChart; // {"dc":"Data2022042017504628","ts":1650783704941,"v":2582,"vt":1}

    var v = JSON.parse(data.data);
    var r = {
      id: v.dc,
      value: v.v,
      time: v.ts,
      type: v.vt,
    };
    (pens || []).map(function (node) {
      var _node$property$dataPo3, _node$property3, _node$property3$dataP, _node$property3$dataP2;

      if (node.name == 'combine') {
        updateComp(node.children, data);
      } else if (node.name == 'echarts') {
        // 如果是图表组件，下面就需要判断具体的是那种图表组件
        theChart = node.property.echartsType;

        switch (theChart) {
          case 'gauge':
            if (
              ((_node$property$dataPo3 = node.property.dataPointSelectedRows[0]) === null ||
              _node$property$dataPo3 === void 0
                ? void 0
                : _node$property$dataPo3.dataCode) == r.id
            ) {
              var cd = {
                value: undefined,
                name: node.property.chartTitle,
              };
              cd.value = (0, _cacl.getFixed)(r.value, node.property.dataDot);

              if (r.value == undefined) {
                cd.value = node.property.dataMin;
              }

              if (cd.value) {
                node.data.echarts.option.series[0].data[0] = cd;
                updateChartNode(node);
              }
            }

            break;

          case 'timeLine':
            var selectedRows = node.property.dataPointSelectedRows;
            var timesxAix = node.data.echarts.option.dataset.source[0];
            (selectedRows || []).map(function (row, index) {
              if (row.dataCode == r.id) {
                if (index == 0) {
                  timesxAix.push(
                    (0, _moment.default)(parseInt(r.time / 1000 + '') * 1000).format('LTS'),
                  );

                  if (timesxAix.length > _defines.defaultTimelineShowData) {
                    timesxAix.splice(1, 1);
                  }

                  node.data.echarts.option = (0, _timeline.getTimeLineOption)(
                    node,
                    null,
                    r,
                    timesxAix,
                    true,
                  );
                } else {
                  node.data.echarts.option = (0, _timeline.getTimeLineOption)(node, null, r);
                }
              }
            });
            updateChartNode(node);
            break;

          case 'pie':
            break;

          case 'circleAndPie':
          case 'verticalBar':
          case 'horizontalBar':
            var n = node.property.dataDot;
            var rows = (node.property.dataPointSelectedRows || []).map(function (row) {
              if (row.dataCode == r.id) {
                return (0, _objectSpread2.default)(
                  (0, _objectSpread2.default)({}, row),
                  {},
                  {
                    value: (0, _cacl.getFixed)(r.value, n),
                  },
                );
              } else {
                return row;
              }
            });
            node.property.dataPointSelectedRows = rows;

            if (theChart == 'circleAndPie') {
              node.data.echarts.option = (0, _pie.getPieOptionByChangeProp)(node, null);
            } else if (theChart == 'verticalBar') {
              node.data.echarts.option = (0, _bar.getBarOption)(node, null);
            } else if (theChart == 'horizontalBar') {
              node.data.echarts.option = (0, _horizontalbar.getHorizontalBarOption)(node, null);
            }

            updateChartNode(node);
            break;

          default:
        } //
      } else if (
        ((_node$property3 = node.property) === null || _node$property3 === void 0
          ? void 0
          : (_node$property3$dataP = _node$property3.dataPointParam) === null ||
            _node$property3$dataP === void 0
          ? void 0
          : (_node$property3$dataP2 = _node$property3$dataP.qtDataList) === null ||
            _node$property3$dataP2 === void 0
          ? void 0
          : _node$property3$dataP2.length) > 0
      ) {
        // 非图表组件
        if (node.name == 'biciVarer') {
          var tt = node.property.dataPointParam.qtDataList[0].dataCode == r.id;

          if (tt) {
            if (r.value === undefined) {
              node.text = ''; // canvas.updateProps(false,[node])

              return;
            }

            if ((0, _cacl.isNumber)(r.value)) {
              // 数值型
              var _n = node.property.dataDot;

              if (r.value < 0.0000000000000000001) {
                node.text = r.value + '';
              } else {
                node.text = (0, _cacl.getFixed)(r.value, _n);
              }
            } else {
              node.text = r.value + '';
            }

            if (r.value === true || r.value === 'true') {
              node.text = node.property.dataPointSelectedRows[0].trueDisplay || r.value;
            }

            if (r.value === false || r.value === 'false') {
              node.text = node.property.dataPointSelectedRows[0].falseDisplay || r.value;
            } // 保存最新值

            socketDataMap[r.id] = r.value; // canvas.updateProps( false,[node]);
          }
        } else if (node.name === 'biciMeasure') {
          var _node$property$dataPo4, _node$property$dataPo5;

          console.log(
            '计量器.....',
            (_node$property$dataPo4 = node.property.dataPointSelectedRows[0]) === null ||
              _node$property$dataPo4 === void 0
              ? void 0
              : _node$property$dataPo4.dataCode,
            r.id,
          );

          if (
            ((_node$property$dataPo5 = node.property.dataPointSelectedRows[0]) === null ||
            _node$property$dataPo5 === void 0
              ? void 0
              : _node$property$dataPo5.dataCode) == r.id
          ) {
            node.property.value = r.value;

            if (r.value == undefined) {
              node.property.value = node.property.dataMin;
            } // canvas.updateProps(false);
          }
        } else if (node.name === 'biciCard') {
          if (node.property.dataPointParam.qtDataList[0].dataCode == r.id) {
            var _n2 = node.property.dataDot;
            var val = (0, _cacl.getFixed)(r.value, _n2);

            if (r.value == undefined) {
              val = '0.00';
            }

            node.children[0].text = val;
            var bottom = node.property.limit.bottom;
            var _top = node.property.limit.top;
            var tempVal = parseFloat(val);

            if (!isNaN(bottom) && tempVal < bottom && node.property.showLimit) {
              var showColor = node.property.bottomLimit.showBkColor
                ? node.property.bottomLimit.bkColor
                : node.property.normal.bkColor; // 小于下限

              setCardStyle(
                node,
                node.property.bottomLimit.fontFamily,
                node.property.bottomLimit.color,
                parseInt(node.property.bottomLimit.fontSize),
                showColor,
              );
            } else if (!isNaN(_top) && tempVal > _top && node.property.showLimit) {
              var _showColor = node.property.bottomLimit.showBkColor
                ? node.property.topLimit.bkColor
                : node.property.normal.bkColor; // 高于上限

              setCardStyle(
                node,
                node.property.topLimit.fontFamily,
                node.property.topLimit.color,
                parseInt(node.property.topLimit.fontSize),
                _showColor,
              );
            } else {
              setCardStyle(
                node,
                node.property.normal.fontFamily,
                node.property.normal.color,
                parseInt(node.property.normal.fontSize),
                node.property.normal.bkColor,
              );
            } // canvas.updateProps(false);
          }
        } else if (node.name === 'biciPilot') {
          if (node.property.dataPointParam.qtDataList[0].dataCode == r.id) {
            var flag = false;
            node.property.val = r.value;

            if (r.value == undefined) {
              node.property.val = 0;
            }

            if (node.property.lightRange) {
              var _iterator = (0, _createForOfIteratorHelper2.default)(node.property.lightRange),
                _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  var item = _step.value;

                  if (node.property.stateType === 'single') {
                    if (item.lightRangeVal == r.value) {
                      node.strokeStyle =
                        (item === null || item === void 0 ? void 0 : item.lightRangeColor) ||
                        node.strokeStyle;

                      if (node.property.showText) {
                        node.text =
                          (item === null || item === void 0 ? void 0 : item.lightRangeText) ||
                          node.property.text;
                      }

                      flag = true;
                      break;
                    }
                  } else {
                    if (
                      (item.lightRangeBottom <= r.value && item.lightRangeTop > r.value) ||
                      (!item.lightRangeBottom && item.lightRangeTop > r.value) ||
                      (!item.lightRangeTop && item.lightRangeBottom <= r.value)
                    ) {
                      node.strokeStyle =
                        (item === null || item === void 0 ? void 0 : item.lightRangeColor) ||
                        node.strokeStyle;

                      if (node.property.showText) {
                        node.text =
                          (item === null || item === void 0 ? void 0 : item.lightRangeText) ||
                          node.property.text;
                      }

                      flag = true;
                      break;
                    }
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              if (!flag) {
                node.strokeStyle = node.property.color;

                if (node.property.showText) {
                  node.text = node.property.text;
                }
              }
            } // canvas.updateProps(false);
          }
        } else if (node.name == 'rectangle') {
          if (r.value) {
            node.text = r.value + '℃';
          } else {
            node.text = '暂无数据';
          } // canvas.updateProps(false);
        } else if (node.name == 'dataTable') {
          var _n3 = node.property.dataDot;

          var _rows = (node.property.dataPointSelectedRows || []).map(function (row) {
            if (row.dataCode == r.id) {
              return (0, _objectSpread2.default)(
                (0, _objectSpread2.default)({}, row),
                {},
                {
                  value: (0, _cacl.getFixed)(r.value, _n3),
                },
              );
            } else {
              return row;
            }
          });

          node.property.dataPointSelectedRows = _rows; // canvas.updateProps(false);
        }
      }
    });
  };

  var updateChartNode = function updateChartNode(node) {
    // 更新图表数据
    if (_chartDiagram.echartsObjs[node.id]) {
      node.elementRendered = false;

      _chartDiagram.echartsObjs[node.id].chart.setOption(
        JSON.parse(
          JSON.stringify(node.data.echarts.option, _serializing.replacer),
          _serializing.reviver,
        ),
        true,
      );

      _chartDiagram.echartsObjs[node.id].chart.resize();

      node.elementRendered = true;
    } else {
      node.elementLoaded = false;
    }
  };
  /**
   * 自动适应窗口大小
   */

  var onHandleFit = function onHandleFit() {
    var rect = canvas.getRect();
    rect.calcCenter();
    x = document.body.clientWidth / 2 - rect.center.x;
    y = (document.body.clientHeight - 66) / 2 - rect.center.y;
    canvas.translate(x, y);
    initWebsocketData();
  };
  /**
   * 实际大小
   */

  var onHandlePre = function onHandlePre() {
    canvas.translate(-x, -y);
    x = 0;
    y = 0;
    initWebsocketData();
  };

  var onDrawerClose = function onDrawerClose() {
    setDrawerVisible(false);
  };

  return /*#__PURE__*/ _react.default.createElement(
    _configProvider.default,
    {
      prefixCls: 'antdv4',
    },
    /*#__PURE__*/ _react.default.createElement('div', {
      id: 'topology-canvas-preview',
      className: _indexModule.default.topology_canvas_preview,
      style: {
        margin: 'auto auto',
        height: isApp ? '100%' : data === null || data === void 0 ? void 0 : data.height,
        width: isApp ? '100%' : data === null || data === void 0 ? void 0 : data.width,
        overflow: 'hidden!important',
        backgroundColor: data === null || data === void 0 ? void 0 : data.bkColor, // backgroundImage: `url(${data?.bkImage})`,
      },
    }),
  );
}; // @ts-ignore

var _default = Preview;
exports.default = _default;
