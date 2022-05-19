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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
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

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  Object.defineProperty(subClass, 'prototype', { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError('Derived constructors may only return object or undefined');
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

import React, { Component } from 'react';
import VideoPlayer from './Player/VideoPlayer';
import axios from 'axios';
import { canvas } from '../../Layout';
import { isRTSP } from '../../utils/cacl';
import * as _ from 'lodash';

var QTLiveVideo = /*#__PURE__*/ (function (_Component) {
  _inherits(QTLiveVideo, _Component);

  var _super = _createSuper(QTLiveVideo);

  function QTLiveVideo(props) {
    var _node$property$video, _node$property$video2, _node$property$video3, _node$property$video4;

    var _this;

    _classCallCheck(this, QTLiveVideo);

    _this = _super.call(this, props);

    _this.updateStream = function (params) {
      var token = window['__CONKPIT_TOKEN'];
      var timeout = 600000;
      var maxTimeout = 600000;
      var maxContentLength = Math.pow(1024, 2);
      var myURL = new URL(_this.state.updateStream);
      var client = axios.create({
        baseURL: ''.concat(myURL.origin),
        timeout: timeout,
        maxContentLength: maxContentLength,
        headers: {
          token: token,
          'Content-Type': 'application/json',
        },
      }); // 基础请求包装对象

      return client.post(''.concat(myURL.pathname), params);
    };

    _this.updateVideoUrl = /*#__PURE__*/ (function () {
      var _ref = _asyncToGenerator(
        /*#__PURE__*/ regeneratorRuntime.mark(function _callee(id, rate) {
          var flag, data;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  flag = false;
                  _context.next = 3;
                  return _this.updateStream({
                    surveillanceDeviceId: _this.state.videoObj.surveillanceDeviceId,
                    channels: [
                      {
                        id: id,
                        oldRate: _this.state.videoObj.rate,
                        rate: rate,
                        channel: _this.state.videoObj.channel,
                      },
                    ],
                  });

                case 3:
                  data = _context.sent;

                  if (data && data.length && data[0].flv) {
                    _this.setState(
                      _objectSpread(
                        _objectSpread({}, _this.state.videoObj),
                        {},
                        {
                          flv: data[0].flv,
                          rate: data[0].rate,
                        },
                      ),
                    );

                    flag = true;
                  }

                  return _context.abrupt('return', flag);

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee);
        }),
      );

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    })();

    var node = _this.props.node;
    var videoObj =
      (_node$property$video = node.property.video) === null || _node$property$video === void 0
        ? void 0
        : _node$property$video.selectedRows[0];
    _this.state = {
      videoObj: videoObj,
      rePushStream:
        (_node$property$video2 = node.property.video) === null || _node$property$video2 === void 0
          ? void 0
          : _node$property$video2.rePushStream,
      updateStream:
        (_node$property$video3 = node.property.video) === null || _node$property$video3 === void 0
          ? void 0
          : _node$property$video3.updateStream,
      pushStream:
        (_node$property$video4 = node.property.video) === null || _node$property$video4 === void 0
          ? void 0
          : _node$property$video4.pushStream,
      onlyURL: node.property.hasOwnProperty('videoURL'),
    };
    return _this;
  }

  _createClass(QTLiveVideo, [
    {
      key: 'getVideoURL',
      value: function getVideoURL() {
        var that = this; // 根据输入的视频地址，从后端获取视频流地址，这是针对url视频组件的

        var token = window['__CONKPIT_TOKEN'];
        axios
          .request({
            url: ''.concat(this.state.pushStream),
            method: 'post',
            data: {
              code: this.props.node.id,
              rtsp: this.props.node.property.videoURL,
            },
            headers: {
              token: token,
              'Content-Type': 'application/json',
            },
          })
          .then(function (res) {
            that.setState({
              videoObj: res.data.data,
            });
          });
      }, // 停止推流 （关闭视频）
    },
    {
      key: 'stopStream',
      value: function stopStream() {
        var token = window['__CONKPIT_TOKEN'];
        if (!this.props.node) return;
        var timeout = 600000;
        var maxContentLength = Math.pow(1024, 2);
        var myURL = new URL(this.state.updateStream);
        var client = axios.create({
          baseURL: ''.concat(myURL.origin),
          timeout: timeout,
          maxContentLength: maxContentLength,
          headers: {
            token: token,
            'Content-Type': 'application/json',
          },
        }); // 基础请求包装对象

        var params = {
          code: this.props.node.id,
          rtsp: this.props.node.property.videoURL,
        };
        client.post('/api/applications/service/remote/customComponent/stopStream', params);
      }, // 移除视频对象
    },
    {
      key: 'removeVideo',
      value: function removeVideo(videoItem) {
        if (isRTSP(this.props.node.property.videoURL)) {
          this.stopStream();
        }
      }, // 修改流地址 （切换画质）
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _node$property$video5;

        var node = this.props.node;
        this.setState({
          videoObj:
            (_node$property$video5 = node.property.video) === null ||
            _node$property$video5 === void 0
              ? void 0
              : _node$property$video5.selectedRows[0],
        });

        if (this.state.onlyURL && isRTSP(this.props.node.property.videoURL)) {
          this.getVideoURL();
        }

        if (node && node.property.stopStream) {
          this.stopStream();
        }

        var that = this;

        if (canvas) {
          canvas.on('deleteNode', function (nodes) {
            (nodes || []).forEach(function (n) {
              if (n.name == 'QTLiveVideo' && n.id === that.props.node.id) {
                that.stopStream();
              }
            });
          });
        } // 监听页面切换，保持视频直播始终实施的

        this.visibilitychange(); // 监听rtsp地址变化

        if (canvas) {
          canvas._emitter.on('changeVideoUrl', function (param) {
            var func = _.debounce(function () {
              if (isRTSP(param.videoURL)) {
                that.getVideoURL();
              }
            }, 2000);

            func();
          });
        }
      },
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {},
    },
    {
      key: 'visibilitychange',
      value: function visibilitychange() {
        var hidden;
        var visibilityChange;
        var visible;
        var state;

        if (typeof document.hidden !== 'undefined') {
          hidden = 'hidden';
          visibilityChange = 'visibilitychange';
          visible = 'visible';
          state = 'visibilityState';
        } else if (typeof document.mozHidden !== 'undefined') {
          hidden = 'mozHidden';
          visibilityChange = 'mozvisibilitychange';
          visible = 'mozVisibilityState';
          state = 'mozVisibilityState';
        } else if (typeof document.msHidden !== 'undefined') {
          hidden = 'msHidden';
          visibilityChange = 'msvisibilitychange';
          visible = 'msVisibilityState';
          state = 'msVisibilityState';
        } else if (typeof document.webkitHidden !== 'undefined') {
          hidden = 'webkitHidden';
          visibilityChange = 'webkitvisibilitychange';
          visible = 'webkitVisibilityState';
        } // 标签页切换媒体播放时间重置

        document.addEventListener(
          visibilityChange,
          function () {
            if (document[state] === visible) {
              var videoEleObj = document.getElementsByTagName('video');

              for (var video in videoEleObj) {
                var buffered = videoEleObj[video].buffered;

                if (buffered && buffered.length > 0) {
                  videoEleObj[video].currentTime = buffered.end(0) - 0.5;
                }
              }
            } else if (document[state] === hidden) {
            }
          },
          false,
        );
      },
    },
    {
      key: 'render',
      value: function render() {
        var videoObj = this.state.videoObj;
        return /*#__PURE__*/ React.createElement(VideoPlayer, {
          height: 400,
          videoObj: videoObj,
          removeVideo: this.removeVideo.bind(this),
          updateVideoUrl: this.updateVideoUrl,
          rePushStream: this.state.rePushStream,
          onlyURL: this.state.onlyURL,
        });
      },
    },
  ]);

  return QTLiveVideo;
})(Component);

export { QTLiveVideo as default };
