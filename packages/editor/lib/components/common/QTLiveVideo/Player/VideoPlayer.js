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
    updateVideoUrl = props.updateVideoUrl,
    removeVideo = props.removeVideo,
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
    setHasVideo(false); // removeVideo&&removeVideo()
  }; // 重新推流

  var rePushStream = function rePushStream(params) {
    var token = window.localStorage.getItem('access_token');
    var timeout = 600000;
    var maxContentLength = Math.pow(1024, 2);
    var myURL = new URL(props.rePushStream);

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
  }; // 刷新，重新推流

  var redoVideoStream = /*#__PURE__*/ (function () {
    var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/ _regenerator.default.mark(function _callee() {
        var res;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                console.log('>>>redoVideoStream', videoObj);

                if (!(videoObj && videoObj.code)) {
                  _context.next = 6;
                  break;
                }

                _context.next = 4;
                return rePushStream({
                  code: videoObj.code,
                  rtsp: videoObj.rtsp,
                });

              case 4:
                res = _context.sent;

                if (res.data.data && res.data.data.flv) {
                  destroyPlayer();
                  createPlayer(res.data.data.flv);
                }

              case 6:
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
        '\u82E5\u957F\u65F6\u95F4\u65E0\u6548\u8BF7\u5237\u65B0\u91CD\u8BD5\u6216\u8054\u7CFB\u7BA1\u7406\u5458',
      ),
    /*#__PURE__*/ _react.default.createElement(
      _row.default,
      {
        className: _videoModule.default.videoHeader,
        align: 'middle',
      },
      props.onlyURL
        ? ''
        : /*#__PURE__*/ _react.default.createElement(
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
