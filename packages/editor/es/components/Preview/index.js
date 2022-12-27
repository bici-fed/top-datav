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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }
      _next(undefined);
    });
  };
}

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

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = (typeof Symbol !== 'undefined' && o[Symbol.iterator]) || o['@@iterator'];
  if (!it) {
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === 'number')
    ) {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        },
        e: function e(_e2) {
          throw _e2;
        },
        f: F,
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e3) {
      didErr = true;
      err = _e3;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    },
  };
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

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', { writable: false });
  return Constructor;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

import React, { useEffect, useState } from 'react';
import { ConfigProvider } from 'antd';
import { Lock, Topology } from '@top-datav/core';
import { isNumber, getFixed } from '../utils/cacl';
import { formatTimer } from '../utils/Property2NodeProps';
import * as _ from 'lodash';
import { echartsObjs, register as registerChart } from '@top-datav/chart-diagram';
import { register as reactNodesData } from '../common/RegCustomUIComp';
import { replacer, reviver } from '../utils/serializing';
import { register as registerBiciComp } from '@top-datav/bici-diagram';
import moment from 'moment';
import 'antd/dist/antd.css';
import styles from './index.module.css';
import { getTimeLineOption } from '../config/charts/timeline';
import { defaultTimelineShowData } from '../data/defines';
import { handleRequestError, maxContentLength, timeout, withCredentials } from '../data/api';
import axios from 'axios';
import { getBarOption } from '../config/charts/bar';
import { getGroupBarOption } from '../config/charts/groupbar';
import { getStackBarOption } from '../config/charts/stackbar';
import { getHorizontalBarOption } from '../config/charts/horizontalbar';
import { getPieOptionByChangeProp } from '../config/charts/pie';
export var canvas;
var x, y;
export var PreviewProps = /*#__PURE__*/ _createClass(function PreviewProps() {
  _classCallCheck(this, PreviewProps);

  this.history = void 0;
  this.key = void 0;
  this.ref = void 0;
  this.data = void 0;
  this.websocketConf = void 0;
  this.isApp = void 0;
});

function updateDateRangeTransform(node, r) {
  var flag = false;

  if (node.property.lightRange && node.property.lightRange.length > 0) {
    var _iterator = _createForOfIteratorHelper(node.property.lightRange),
      _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var item = _step.value;

        if (node.property.stateType === 'single') {
          if (node.property.showText !== undefined) {
            // 说明是指示灯
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
            if (item.lightRangeVal == r.value + '') {
              node.strokeStyle =
                (item === null || item === void 0 ? void 0 : item.lightRangeColor) ||
                node.strokeStyle;
              node.text =
                (item === null || item === void 0 ? void 0 : item.lightRangeText) ||
                node.property.text;
              node.font.color =
                (item === null || item === void 0 ? void 0 : item.lightRangeColor) ||
                node.font.color;
              flag = true;
              break;
            }
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

            if (node.property.showText === undefined) {
              // 变量
              node.text =
                (item === null || item === void 0 ? void 0 : item.lightRangeText) ||
                node.property.text;
              node.font.color =
                (item === null || item === void 0 ? void 0 : item.lightRangeColor) ||
                node.font.color;
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
  }
} // echartsObjs[node.id].chart

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
    locked: Lock.NoMove,
    disableTranslate: !isApp,
    isApp: isApp,
    width: data === null || data === void 0 ? void 0 : data.width,
    height: data === null || data === void 0 ? void 0 : data.height,
    on: function on(event, data) {},
  };

  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    drawerVisible = _useState2[0],
    setDrawerVisible = _useState2[1];

  var _useState3 = useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    deviceType = _useState4[0],
    setDeviceType = _useState4[1];

  var _useState5 = useState(),
    _useState6 = _slicedToArray(_useState5, 2),
    reqData = _useState6[0],
    setReqData = _useState6[1];

  var _useState7 = useState(),
    _useState8 = _slicedToArray(_useState7, 2),
    currentNode = _useState8[0],
    setCurrentNode = _useState8[1];

  var renderCanvasInterval;
  /**
   * window事件绑定，解决tab切换后setInterbal触发频率会变慢的问题，也是在tab切换的时候，停止页面刷新
   */

  useEffect(function () {
    window.οnfοcus = function (window) {
      renderCanvasInterval = setInterval(function () {
        canvas.updateProps(false);
      }, 1000);
    };

    window.onblur = function () {
      clearInterval(renderCanvasInterval);
    };
  }, []);
  /**
   * 看板初始化以及数据处理
   */

  useEffect(
    function () {
      canvasRegister();
      canvas = new Topology('topology-canvas-preview', canvasOptions); // 渲染页面数据

      if (data != undefined && _typeof(data) == 'object') {
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

      var websocketIntv = setInterval(function () {
        var _canvas$socket;

        if (
          canvas != undefined &&
          ((_canvas$socket = canvas.socket) === null || _canvas$socket === void 0
            ? void 0
            : _canvas$socket.socket.readyState) !== 1
        ) {
          initWebsocketData();
        } else {
          clearInterval(websocketIntv);
        }
      }, 2000);
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
    registerChart();
    registerBiciComp();
    reactNodesData();
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
          var _ref2 = _asyncToGenerator(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(node) {
              var interval;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
                              /*#__PURE__*/ _asyncToGenerator(
                                /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
                                  return regeneratorRuntime.wrap(function _callee$(_context) {
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

          case 'biciCard':
            node.children[0].text = resTmp['text'];
            break;

          case 'biciVarer':
            node.text = resTmp['text'];
            break;
        }
      } else if (resTmp.hasOwnProperty('dimensions') && resTmp.hasOwnProperty('source')) {
        // 是图表组件的数据
        var _nodeType = node.property.echartsType;

        switch (_nodeType) {
          case 'groupBar':
            node.data.echarts.option = getGroupBarOption(node, res);
            break;

          case 'verticalBar':
            node.data.echarts.option = getBarOption(node, res);
            break;

          case 'stackBar':
            node.data.echarts.option = getStackBarOption(node, res);
            break;

          case 'horizontalBar':
            node.data.echarts.option = getHorizontalBarOption(node, res);
            break;

          case 'circleAndPie':
            node.data.echarts.option = getPieOptionByChangeProp(node, res);
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
      var ajax = axios.create({
        baseURL: ''.concat(myURL.origin, '/'),
        timeout: timeout,
        maxContentLength: maxContentLength,
        withCredentials: withCredentials,
      }); // const ajax = axios.create({baseURL: `http://qt.test.bicisims.com`, timeout, maxContentLength,withCredentials})

      ajax
        .request({
          url: myURL.pathname + myURL.search,
          method: 'get',
          headers: {
            token: window['token'],
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
          handleRequestError(error);
          resolve({
            front_error: 1,
          });
        });
    });
  };
  /**
   * 初始化websocket
   */

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
  /**
   * 遍历画布节点，为所有的带有websocket的节点发送消息
   * @param pens
   */

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
            id: item.id,
            type: item.type,
          };
        });
        canvas.socket.socket.send(
          JSON.stringify({
            dcList: dcList,
            qtDataList: dcList,
            subscribe: true,
            companyId: '',
            nodeTid: node.TID,
            nodeId: node.id,
          }),
        );
      }
    });
  };
  /**
   * 更新日期组件
   * @param pens
   */

  var updateTimerCom = function updateTimerCom(pens) {
    (pens || []).map(function (node) {
      if (node.name == 'biciTimer') {
        setInterval(function () {
          formatTimer(node, canvas);
        }, 1000);
      } else if (node.name == 'combine') {
        updateTimerCom(node.children);
      }
    });
  };

  var timedata = [];

  for (var i = 0; i < 10; i++) {
    timedata.push({
      name: moment().subtract(1, 'seconds'),
      value: [moment().subtract(1, 'seconds'), null],
    });
  }
  /**
   * 获得websocket数据，更新组件
   * @param pens
   * @param data
   */

  var updateComp = function updateComp(pens, data) {
    var theChart; // {"dc":"Data2022042017504628","ts":1650783704941,"v":2582,"vt":1}

    var v = JSON.parse(data.data);
    var r = {
      id: v.dc || v.id,
      value: v.v || v.value,
      time: v.ts || v.time,
      type: v.vt,
    };
    (pens || []).map(function (node) {
      var _node$property$dataPo3,
        _node$property$dataPo4,
        _node$property3,
        _node$property3$dataP,
        _node$property3$dataP2;

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
                : _node$property$dataPo3.dataCode) == r.id ||
              ((_node$property$dataPo4 = node.property.dataPointSelectedRows[0]) === null ||
              _node$property$dataPo4 === void 0
                ? void 0
                : _node$property$dataPo4.id) == r.id
            ) {
              var cd = {
                value: undefined,
                name: node.property.chartTitle,
              };
              cd.value = getFixed(r.value, node.property.dataDot);

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
            r.value = parseFloat(r.value);
            (selectedRows || []).map(function (row, index) {
              if (row.dataCode == r.id || row.id == r.id) {
                if (index == 0) {
                  var xtime = moment(parseInt(r.time / 1000 + '') * 1000).format('HH:mm:ss');

                  if (!timesxAix.includes(xtime)) {
                    timesxAix.push(xtime);
                  }

                  if (timesxAix.length > defaultTimelineShowData) {
                    timesxAix.splice(1, 1);
                  }

                  node.data.echarts.option = getTimeLineOption(node, null, r, timesxAix, true);
                } else {
                  node.data.echarts.option = getTimeLineOption(node, null, r);
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
              if (row.dataCode == r.id || row.id == r.id) {
                return _objectSpread(
                  _objectSpread({}, row),
                  {},
                  {
                    value: getFixed(r.value, n),
                  },
                );
              } else {
                return row;
              }
            });
            node.property.dataPointSelectedRows = rows;

            if (theChart == 'circleAndPie') {
              node.data.echarts.option = getPieOptionByChangeProp(node, null);
            } else if (theChart == 'verticalBar') {
              node.data.echarts.option = getBarOption(node, null);
            } else if (theChart == 'horizontalBar') {
              node.data.echarts.option = getHorizontalBarOption(node, null);
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
          var tt =
            node.property.dataPointParam.qtDataList[0].dataCode == r.id ||
            node.property.dataPointParam.qtDataList[0].id == r.id;

          if (tt) {
            if (r.value === undefined) {
              node.text = ''; // canvas.updateProps(false,[node])

              return;
            }

            if (isNumber(r.value)) {
              // 数值型
              var _n2 = node.property.dataDot;

              if (r.value < 0.0000000000000000001) {
                node.text = r.value + '';
              } else {
                node.text = getFixed(r.value, _n2);
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

            socketDataMap[r.id] = r.value;
            updateDateRangeTransform(node, r); // canvas.updateProps( false,[node]);
          }
        } else if (node.name === 'biciMeasure') {
          var _node$property$dataPo5, _node$property$dataPo6;

          if (
            ((_node$property$dataPo5 = node.property.dataPointSelectedRows[0]) === null ||
            _node$property$dataPo5 === void 0
              ? void 0
              : _node$property$dataPo5.dataCode) == r.id ||
            ((_node$property$dataPo6 = node.property.dataPointSelectedRows[0]) === null ||
            _node$property$dataPo6 === void 0
              ? void 0
              : _node$property$dataPo6.id) == r.id
          ) {
            node.property.value = r.value;

            if (r.value == undefined) {
              node.property.value = node.property.dataMin;
            } // canvas.updateProps(false);
          }
        } else if (node.name === 'biciCard') {
          if (
            node.property.dataPointParam.qtDataList[0].dataCode == r.id ||
            node.property.dataPointParam.qtDataList[0].id == r.id
          ) {
            var _n3 = node.property.dataDot;
            var val = getFixed(r.value, _n3);

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
          if (
            node.property.dataPointParam.qtDataList[0].dataCode == r.id ||
            node.property.dataPointParam.qtDataList[0].id == r.id
          ) {
            node.property.val = r.value;

            if (r.value == undefined) {
              node.property.val = 0;
            }

            updateDateRangeTransform(node, r); // canvas.updateProps(false);
          }
        } else if (node.name == 'rectangle') {
          if (r.value) {
            node.text = r.value + '℃';
          } else {
            node.text = '暂无数据';
          } // canvas.updateProps(false);
        } else if (node.name == 'dataTable') {
          var _n4 = node.property.dataDot;

          var _rows = (node.property.dataPointSelectedRows || []).map(function (row) {
            if (row.dataCode == r.id || row.id == r.id) {
              return _objectSpread(
                _objectSpread({}, row),
                {},
                {
                  value: getFixed(r.value, _n4),
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
    if (echartsObjs[node.id]) {
      node.elementRendered = false;
      echartsObjs[node.id].chart.setOption(
        JSON.parse(JSON.stringify(node.data.echarts.option, replacer), reviver),
        true,
      );
      echartsObjs[node.id].chart.resize();
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

  return /*#__PURE__*/ React.createElement(
    ConfigProvider,
    {
      prefixCls: 'antdv4',
    },
    /*#__PURE__*/ React.createElement('div', {
      id: 'topology-canvas-preview',
      className: styles.topology_canvas_preview,
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

export default Preview;
