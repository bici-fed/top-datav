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

import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Menu, Dropdown, Button } from 'antd';
import { CloseOutlined, RedoOutlined, VideoCameraAddOutlined } from '@ant-design/icons';
import { useFullscreen } from 'ahooks';
import flvjs from 'flv.js';
import styles from './video.module.css';
import axios from 'axios';

var VideoPlayer = function VideoPlayer(props) {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    hasVideo = _useState2[0],
    setHasVideo = _useState2[1];

  var _useState3 = useState('1'),
    _useState4 = _slicedToArray(_useState3, 2),
    selectKey = _useState4[0],
    setSelectKey = _useState4[1];

  var videoRef = useRef();
  var wrapperRef = useRef();
  var videoPlayer = useRef();

  var _useFullscreen = useFullscreen(wrapperRef),
    _useFullscreen2 = _slicedToArray(_useFullscreen, 2),
    isFullscreen = _useFullscreen2[0],
    toggleFull = _useFullscreen2[1].toggleFull;

  var videoObj = props.videoObj,
    showChannel = props.showChannel,
    removeVideo = props.removeVideo,
    updateVideoUrl = props.updateVideoUrl,
    showChannelSelect = props.showChannelSelect;
  useEffect(
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
    if (flvjs.isSupported()) {
      videoPlayer.current = flvjs.createPlayer({
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
      videoPlayer.current.on(flvjs.Events.LOADING_COMPLETE, function () {
        console.log('--== video  LOADING_COMPLETE ==--');
      });
      videoPlayer.current.on(flvjs.Events.ERROR, function (errType, errDetail) {
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
    var client = axios.create({
      baseURL: ''.concat(myURL.origin),
      timeout: timeout,
      maxContentLength: maxContentLength,
    }); // 基础请求包装对象

    return client.post(''.concat(myURL.pathname), params);
  }; // 刷新，重新推流

  var redoVideoStream = /*#__PURE__*/ (function () {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
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

  var menu = /*#__PURE__*/ React.createElement(
    Menu,
    {
      onClick: handleMenuClick,
      selectedKeys: [selectKey],
    },
    /*#__PURE__*/ React.createElement(
      Menu.Item,
      {
        key: '0',
      },
      '\u8D85\u6E05',
    ),
    /*#__PURE__*/ React.createElement(
      Menu.Item,
      {
        key: '1',
      },
      '\u9AD8\u6E05',
    ),
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: styles.videoContainer,
      ref: wrapperRef,
    },
    /*#__PURE__*/ React.createElement(
      'video',
      {
        ref: videoRef,
        className: styles.video,
        autoPlay: true,
        muted: true,
        height: '100%',
        width: '100%',
      },
      '\u8BBE\u5907\u4E0D\u652F\u6301',
    ),
    !showChannel &&
      !hasVideo &&
      /*#__PURE__*/ React.createElement(
        'span',
        {
          className: styles.channelIcon,
          style: {
            color: 'white',
          },
        },
        '\u6682\u65E0\u89C6\u9891\u753B\u9762,\u8BF7\u5237\u65B0\u91CD\u8BD5',
      ),
    showChannel &&
      !hasVideo &&
      /*#__PURE__*/ React.createElement(
        'span',
        {
          className: styles.channelIcon,
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
    /*#__PURE__*/ React.createElement(
      Row,
      {
        className: styles.videoHeader,
        align: 'middle',
      },
      /*#__PURE__*/ React.createElement(
        Col,
        {
          span: 4,
        },
        /*#__PURE__*/ React.createElement(
          Dropdown,
          {
            overlay: menu,
            getPopupContainer: function getPopupContainer() {
              return wrapperRef.current;
            },
          },
          /*#__PURE__*/ React.createElement(
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
      /*#__PURE__*/ React.createElement(
        Col,
        {
          span: 16,
          style: {
            textAlign: 'center',
            fontSize: 14,
            fontWeight: 500,
          },
        },
        /*#__PURE__*/ React.createElement(
          'span',
          null,
          (videoObj === null || videoObj === void 0 ? void 0 : videoObj.name) || '',
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      Row,
      {
        className: styles.videoControl,
        justify: 'space-between',
        align: 'middle',
      },
      /*#__PURE__*/ React.createElement(
        Col,
        {
          span: showChannel ? 2 : 12,
        },
        /*#__PURE__*/ React.createElement(
          'a',
          {
            style: {
              color: 'white',
            },
            onClick: redoVideoStream,
          },
          /*#__PURE__*/ React.createElement(RedoOutlined, {
            style: {
              marginRight: 5,
            },
          }),
          '\u5237\u65B0',
        ),
      ),
      showChannel &&
        !isFullscreen &&
        /*#__PURE__*/ React.createElement(
          Col,
          {
            span: 8,
          },
          /*#__PURE__*/ React.createElement(
            'a',
            {
              style: {
                color: 'white',
              },
              onClick: function onClick() {
                return showChannelSelect(videoObj);
              },
            },
            /*#__PURE__*/ React.createElement(VideoCameraAddOutlined, {
              style: {
                marginRight: 5,
              },
            }),
            '\u9009\u62E9\u901A\u9053',
          ),
        ),
      /*#__PURE__*/ React.createElement(
        Col,
        {
          span: 12,
          style: {
            textAlign: 'right',
          },
        },
        /*#__PURE__*/ React.createElement(
          'a',
          {
            style: {
              color: 'white',
            },
            onClick: toggleFull,
          },
          isFullscreen
            ? /*#__PURE__*/ React.createElement(React.Fragment, null, '\u9000\u51FA\u5168\u5C4F')
            : /*#__PURE__*/ React.createElement(React.Fragment, null, '\u663E\u793A\u5168\u5C4F'),
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
export default VideoPlayer;
