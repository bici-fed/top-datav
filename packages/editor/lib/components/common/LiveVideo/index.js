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

////sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-720p.fl
var LiveVideo = /*#__PURE__*/ (function (_Component) {
  (0, _inherits2.default)(LiveVideo, _Component);

  var _super = (0, _createSuper2.default)(LiveVideo);

  function LiveVideo(props) {
    var _node$property$video, _node$property$video2, _node$property$video3;

    var _this;

    (0, _classCallCheck2.default)(this, LiveVideo);
    _this = _super.call(this, props);

    _this.removeVideo = function () {
      _this.stopStream();
    };

    _this.updateStream = function (params) {
      var timeout = 600000;
      var maxTimeout = 600000;
      var maxContentLength = Math.pow(1024, 2);
      var myURL = new URL(_this.state.updateStream);

      var client = _axios.default.create({
        baseURL: ''.concat(myURL.origin),
        timeout: timeout,
        maxContentLength: maxContentLength,
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
    };
    return _this;
  }

  (0, _createClass2.default)(LiveVideo, [
    {
      key: 'stopStream',
      value: function stopStream() {
        var token = window['__CONKPIT_TOKEN'];
        var videoItem = this.state.videoObj;
        if (!videoItem) return;
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
          channels: [
            {
              id: videoItem.id,
              channel: videoItem.channel,
              oldRate: videoItem.rate,
            },
          ],
        };
        client.post('/api/surveillance/channel/stopStream', params);
      },
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _node$property$video4;

        var node = this.props.node;
        this.setState({
          videoObj:
            (_node$property$video4 = node.property.video) === null ||
            _node$property$video4 === void 0
              ? void 0
              : _node$property$video4.selectedRows[0],
        });
        var that = this;

        if (_Layout.canvas) {
          _Layout.canvas.on('deleteNode', function (nodes) {
            (nodes || []).forEach(function (n) {
              if (n.name == 'liveVideo' && n.id === that.props.node.id) {
                that.removeVideo();
              }
            });
          });
        }

        this.visibilitychange();
      },
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
        var _this$props$node$prop;

        var videoObj =
          (_this$props$node$prop = this.props.node.property.video) === null ||
          _this$props$node$prop === void 0
            ? void 0
            : _this$props$node$prop.selectedRows[0];
        return /*#__PURE__*/ _react.default.createElement(_VideoPlayer.default, {
          height: 400,
          videoObj: videoObj,
          removeVideo: this.removeVideo,
          updateVideoUrl: this.updateVideoUrl,
          rePushStream: this.state.rePushStream,
        });
      },
    },
  ]);
  return LiveVideo;
})(_react.Component);

exports.default = LiveVideo;
