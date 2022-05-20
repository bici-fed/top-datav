'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread2'));

var _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _createSuper2 = _interopRequireDefault(require('@babel/runtime/helpers/createSuper'));

var _react = _interopRequireWildcard(require('react'));

var _VideoPlayer = _interopRequireDefault(require('./Player/VideoPlayer'));

var _axios = _interopRequireDefault(require('axios'));

var _Layout = require('../../Layout');

var _cacl = require('../../utils/cacl');

var _ = _interopRequireWildcard(require('lodash'));

var QTLiveVideo = /*#__PURE__*/ (function (_Component) {
  (0, _inherits2.default)(QTLiveVideo, _Component);

  var _super = (0, _createSuper2.default)(QTLiveVideo);

  function QTLiveVideo(props) {
    var _node$property$video, _node$property$video2, _node$property$video3, _node$property$video4;

    var _this;

    (0, _classCallCheck2.default)(this, QTLiveVideo);
    _this = _super.call(this, props);

    _this.updateStream = function (params) {
      var token = window['__CONKPIT_TOKEN'];
      var timeout = 600000;
      var maxTimeout = 600000;
      var maxContentLength = Math.pow(1024, 2);
      var myURL = new URL(_this.state.updateStream);

      var client = _axios.default.create({
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
      var _ref = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/ _regenerator.default.mark(function _callee(id, rate) {
          var flag, data;
          return _regenerator.default.wrap(function _callee$(_context) {
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
                      (0, _objectSpread2.default)(
                        (0, _objectSpread2.default)({}, _this.state.videoObj),
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

  (0, _createClass2.default)(QTLiveVideo, [
    {
      key: 'getVideoURL',
      value: function getVideoURL() {
        var that = this; // 根据输入的视频地址，从后端获取视频流地址，这是针对url视频组件的

        var token = window['__CONKPIT_TOKEN'];

        _axios.default
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

        var client = _axios.default.create({
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
        if ((0, _cacl.isRTSP)(this.props.node.property.videoURL)) {
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

        if (this.state.onlyURL && (0, _cacl.isRTSP)(this.props.node.property.videoURL)) {
          this.getVideoURL();
        }

        if (node && node.property.stopStream) {
          this.stopStream();
        }

        var that = this;

        if (_Layout.canvas) {
          _Layout.canvas.on('deleteNode', function (nodes) {
            (nodes || []).forEach(function (n) {
              if (n.name == 'QTLiveVideo' && n.id === that.props.node.id) {
                that.stopStream();
              }
            });
          });
        } // 监听页面切换，保持视频直播始终实施的

        this.visibilitychange(); // 监听rtsp地址变化

        if (_Layout.canvas) {
          _Layout.canvas._emitter.on('changeVideoUrl', function (param) {
            var func = _.debounce(function () {
              if ((0, _cacl.isRTSP)(param.videoURL)) {
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
        return /*#__PURE__*/ _react.default.createElement(_VideoPlayer.default, {
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
})(_react.Component);

exports.default = QTLiveVideo;
