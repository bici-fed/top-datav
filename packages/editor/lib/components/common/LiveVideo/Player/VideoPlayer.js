'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/row/style');

var _row = _interopRequireDefault(require('antd/es/row'));

require('antd/es/col/style');

var _col = _interopRequireDefault(require('antd/es/col'));

require('antd/es/dropdown/style');

var _dropdown = _interopRequireDefault(require('antd/es/dropdown'));

require('antd/es/menu/style');

var _menu = _interopRequireDefault(require('antd/es/menu'));

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireWildcard(require('react'));

var _icons = require('@ant-design/icons');

var _ahooks = require('ahooks');

var _flv = _interopRequireDefault(require('flv.js'));

var _videoModule = _interopRequireDefault(require('./video.module.css'));

var _axios = _interopRequireDefault(require('axios'));

var VideoPlayer = function VideoPlayer(props) {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    hasVideo = _useState2[0],
    setHasVideo = _useState2[1];

  var _useState3 = (0, _react.useState)('1'),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    selectKey = _useState4[0],
    setSelectKey = _useState4[1];

  var videoRef = (0, _react.useRef)();
  var wrapperRef = (0, _react.useRef)();
  var videoPlayer = (0, _react.useRef)();

  var _useFullscreen = (0, _ahooks.useFullscreen)(wrapperRef),
    _useFullscreen2 = (0, _slicedToArray2.default)(_useFullscreen, 2),
    isFullscreen = _useFullscreen2[0],
    toggleFull = _useFullscreen2[1].toggleFull;

  var videoObj = props.videoObj,
    showChannel = props.showChannel,
    removeVideo = props.removeVideo,
    updateVideoUrl = props.updateVideoUrl,
    showChannelSelect = props.showChannelSelect;
  (0, _react.useEffect)(
    function () {
      if (videoObj === null || videoObj === void 0 ? void 0 : videoObj.flv) {
        createPlayer(videoObj === null || videoObj === void 0 ? void 0 : videoObj.flv);
      }

      if (
        typeof (videoObj === null || videoObj === void 0 ? void 0 : videoObj.rate) !== 'undefined'
      ) {
        setSelectKey(videoObj.rate + '');
      }

      return function () {
        destroyPlayer();
      };
    },
    [
      videoObj === null || videoObj === void 0 ? void 0 : videoObj.flv,
      videoObj === null || videoObj === void 0 ? void 0 : videoObj.rate,
    ],
  );

  var createPlayer = function createPlayer(url) {
    if (_flv.default.isSupported()) {
      videoPlayer.current = _flv.default.createPlayer({
        type: 'flv',
        hasAudio: false,
        isLive: true,
        url: url,
        config: {
          isLive: true,
          enableWorker: true,
          enableStashBuffer: false,
          stashInitialSize: 128,
        },
      });
      videoPlayer.current.on(_flv.default.Events.LOADING_COMPLETE, function () {
        console.log('--== video  LOADING_COMPLETE ==--');
      });
      videoPlayer.current.on(_flv.default.Events.ERROR, function (errType, errDetail) {
        console.log('on error: ', errType, errDetail);
      });
      videoPlayer.current.attachMediaElement(videoRef.current);
      videoPlayer.current.load();
      var playPromise = videoPlayer.current.play();

      if (playPromise) {
        playPromise
          .then(function () {
            console.log('视频加载成功', videoPlayer.current);
            setHasVideo(true);
          })
          .catch(function (e) {
            console.log('视频加载失败');
          });
      }
    }
  };

  var destroyPlayer = function destroyPlayer() {
    var _videoPlayer$current, _videoPlayer$current2, _videoPlayer$current3, _videoPlayer$current4;

    (_videoPlayer$current = videoPlayer.current) === null || _videoPlayer$current === void 0
      ? void 0
      : _videoPlayer$current.pause();
    (_videoPlayer$current2 = videoPlayer.current) === null || _videoPlayer$current2 === void 0
      ? void 0
      : _videoPlayer$current2.unload();
    (_videoPlayer$current3 = videoPlayer.current) === null || _videoPlayer$current3 === void 0
      ? void 0
      : _videoPlayer$current3.detachMediaElement();
    (_videoPlayer$current4 = videoPlayer.current) === null || _videoPlayer$current4 === void 0
      ? void 0
      : _videoPlayer$current4.destroy();
    videoPlayer.current = undefined;
    setHasVideo(false);
  }; // 重新推流

  var rePushStream = function rePushStream(params) {
    var timeout = 600000;
    var maxTimeout = 600000;
    var maxContentLength = Math.pow(1024, 2);
    var myURL = new URL(props.rePushStream);

    var client = _axios.default.create({
      baseURL: ''.concat(myURL.origin),
      timeout: timeout,
      maxContentLength: maxContentLength,
    }); // 基础请求包装对象

    return client.post(''.concat(myURL.pathname), params);
  }; // 刷新，重新推流

  var redoVideoStream = /*#__PURE__*/ (function () {
    var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/ _regenerator.default.mark(function _callee() {
        var res;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                if (!(videoObj && videoObj.id)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return rePushStream({
                  id: videoObj.id,
                  rate: videoObj.rate,
                  surveillanceDeviceId: videoObj.surveillanceDeviceId || videoObj.deviceId,
                });

              case 3:
                res = _context.sent;
                console.log('res', res); // if (res && res.flv) {
              //   destroyPlayer()
              //   createPlayer(res.flv)
              // }

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      }),
    );

    return function redoVideoStream() {
      return _ref.apply(this, arguments);
    };
  })(); // 选择画质

  var handleMenuClick = function handleMenuClick(e) {
    if (hasVideo && e.key !== selectKey) {
      var flag = false; // destroyPlayer(videoPlayer)

      if (videoObj.boardId) {
        flag = updateVideoUrl(videoObj.boardId, Number(e.key));
      } else {
        flag = updateVideoUrl(videoObj.id, Number(e.key));
      }

      flag && setSelectKey(e.key);
    }
  };

  var menu = /*#__PURE__*/ _react.default.createElement(
    _menu.default,
    {
      onClick: handleMenuClick,
      selectedKeys: [selectKey],
    },
    /*#__PURE__*/ _react.default.createElement(
      _menu.default.Item,
      {
        key: '0',
      },
      '\u8D85\u6E05',
    ),
    /*#__PURE__*/ _react.default.createElement(
      _menu.default.Item,
      {
        key: '1',
      },
      '\u9AD8\u6E05',
    ),
  );

  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: _videoModule.default.videoContainer,
      ref: wrapperRef,
    },
    /*#__PURE__*/ _react.default.createElement(
      'video',
      {
        ref: videoRef,
        className: _videoModule.default.video,
        autoPlay: true,
        muted: true,
        height: '100%',
        width: '100%',
      },
      '\u8BBE\u5907\u4E0D\u652F\u6301',
    ),
    !showChannel &&
      !hasVideo &&
      /*#__PURE__*/ _react.default.createElement(
        'span',
        {
          className: _videoModule.default.channelIcon,
          style: {
            color: 'white',
          },
        },
        '\u6682\u65E0\u89C6\u9891\u753B\u9762,\u8BF7\u5237\u65B0\u91CD\u8BD5',
      ),
    showChannel &&
      !hasVideo &&
      /*#__PURE__*/ _react.default.createElement(
        'span',
        {
          className: _videoModule.default.channelIcon,
          style: {
            color:
              (videoObj === null || videoObj === void 0 ? void 0 : videoObj.id) &&
              !(videoObj === null || videoObj === void 0 ? void 0 : videoObj.flv)
                ? 'red'
                : 'white',
          },
        },
        (videoObj === null || videoObj === void 0 ? void 0 : videoObj.id)
          ? (videoObj === null || videoObj === void 0 ? void 0 : videoObj.flv)
            ? '暂无视频画面,请刷新重试'
            : '请选择通道重新登录'
          : '暂未绑定通道',
      ),
    /*#__PURE__*/ _react.default.createElement(
      _row.default,
      {
        className: _videoModule.default.videoHeader,
        align: 'middle',
      },
      /*#__PURE__*/ _react.default.createElement(
        _col.default,
        {
          span: 4,
        },
        /*#__PURE__*/ _react.default.createElement(
          _dropdown.default,
          {
            overlay: menu,
            getPopupContainer: function getPopupContainer() {
              return wrapperRef.current;
            },
          },
          /*#__PURE__*/ _react.default.createElement(
            'a',
            {
              className: 'ant-dropdown-link',
              style: {
                color: 'white',
              },
              onClick: function onClick(e) {
                return e.preventDefault();
              },
            },
            '\u753B\u8D28\u8BBE\u7F6E',
          ),
        ),
      ),
      /*#__PURE__*/ _react.default.createElement(
        _col.default,
        {
          span: 16,
          style: {
            textAlign: 'center',
            fontSize: 14,
            fontWeight: 500,
          },
        },
        /*#__PURE__*/ _react.default.createElement(
          'span',
          null,
          (videoObj === null || videoObj === void 0 ? void 0 : videoObj.name) || '',
        ),
      ),
    ),
    /*#__PURE__*/ _react.default.createElement(
      _row.default,
      {
        className: _videoModule.default.videoControl,
        justify: 'space-between',
        align: 'middle',
      },
      /*#__PURE__*/ _react.default.createElement(
        _col.default,
        {
          span: showChannel ? 2 : 12,
        },
        /*#__PURE__*/ _react.default.createElement(
          'a',
          {
            style: {
              color: 'white',
            },
            onClick: redoVideoStream,
          },
          /*#__PURE__*/ _react.default.createElement(_icons.RedoOutlined, {
            style: {
              marginRight: 5,
            },
          }),
          '\u5237\u65B0',
        ),
      ),
      showChannel &&
        !isFullscreen &&
        /*#__PURE__*/ _react.default.createElement(
          _col.default,
          {
            span: 8,
          },
          /*#__PURE__*/ _react.default.createElement(
            'a',
            {
              style: {
                color: 'white',
              },
              onClick: function onClick() {
                return showChannelSelect(videoObj);
              },
            },
            /*#__PURE__*/ _react.default.createElement(_icons.VideoCameraAddOutlined, {
              style: {
                marginRight: 5,
              },
            }),
            '\u9009\u62E9\u901A\u9053',
          ),
        ),
      /*#__PURE__*/ _react.default.createElement(
        _col.default,
        {
          span: 12,
          style: {
            textAlign: 'right',
          },
        },
        /*#__PURE__*/ _react.default.createElement(
          'a',
          {
            style: {
              color: 'white',
            },
            onClick: toggleFull,
          },
          isFullscreen
            ? /*#__PURE__*/ _react.default.createElement(
                _react.default.Fragment,
                null,
                '\u9000\u51FA\u5168\u5C4F',
              )
            : /*#__PURE__*/ _react.default.createElement(
                _react.default.Fragment,
                null,
                '\u663E\u793A\u5168\u5C4F',
              ),
        ),
      ),
    ),
  );
};

VideoPlayer.defaultProps = {
  height: 300,
  videoObj: undefined,
  showChannel: false,
  removeVideo: undefined,
  updateVideoUrl: function updateVideoUrl(id, rate) {
    return false;
  },
  showChannelSelect: function showChannelSelect() {},
  idx: undefined,
};
var _default = VideoPlayer;
exports.default = _default;
