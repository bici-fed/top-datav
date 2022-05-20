'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.DivLayer = void 0;

var _createForOfIteratorHelper2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createForOfIteratorHelper'),
);

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _createSuper2 = _interopRequireDefault(require('@babel/runtime/helpers/createSuper'));

var _storeUtils = require('@top-datav/store-utils');

var _node = require('./models/node');

var _status = require('./models/status');

var _pen = require('./models/pen');

var _layer = require('./layer');

var DivLayer = /*#__PURE__*/ (function (_Layer) {
  (0, _inherits2.default)(DivLayer, _Layer);

  var _super = (0, _createSuper2.default)(DivLayer);

  function DivLayer(parentElem) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var TID = arguments.length > 2 ? arguments[2] : undefined;
    (0, _classCallCheck2.default)(this, DivLayer);
    _this = _super.call(this, TID);
    _this.parentElem = void 0;
    _this.options = void 0;
    _this.data = void 0;
    _this.canvas = document.createElement('div');
    _this.player = document.createElement('div');
    _this.curNode = void 0;
    _this.playBtn = void 0;
    _this.currentTime = void 0;
    _this.progressCurrent = void 0;
    _this.progress = void 0;
    _this.loop = void 0;
    _this.media = void 0;
    _this.videos = {};
    _this.audios = {};
    _this.iframes = {};
    _this.elements = {};
    _this.gifs = {};
    _this.subcribe = void 0;
    _this.subcribeNode = void 0;

    _this.addDiv = function (node) {
      if (node.audio) {
        if (_this.audios[node.id] && _this.audios[node.id].media.src !== node.audio) {
          _this.audios[node.id].media.src = node.audio;
        }

        _this.setElemPosition(
          node,
          (_this.audios[node.id] && _this.audios[node.id].player) || _this.addMedia(node, 'audio'),
        );
      }

      if (node.video) {
        if (_this.videos[node.id] && _this.videos[node.id].media.src !== node.video) {
          _this.videos[node.id].media.src = node.video;
        }

        _this.setElemPosition(
          node,
          (_this.videos[node.id] && _this.videos[node.id].player) || _this.addMedia(node, 'video'),
        );
      }

      if (node.iframe) {
        if (!_this.iframes[node.id]) {
          _this.addIframe(node);

          setTimeout(function () {
            _this.addDiv(node);
          });
        } else {
          if (_this.iframes[node.id].src !== node.iframe) {
            _this.iframes[node.id].src = node.iframe;
          }

          _this.setElemPosition(node, _this.iframes[node.id]);
        }
      }

      if (node.elementId) {
        if (!_this.elements[node.id]) {
          _this.elements[node.id] = document.getElementById(node.elementId);
          _this.elements[node.id + '-layer'] = document.getElementById(node.elementId + '-layer');

          if (_this.elements[node.id]) {
            // 为了添加可交互的组件二增加的代码
            if (node.isEditable) {
              console.log('addDiv....');

              _this.canvas.appendChild(_this.elements[node.id + '-layer']);
            }

            _this.canvas.appendChild(_this.elements[node.id]);
          }
        }

        _this.setElemPosition(node, _this.elements[node.id]);

        _this.setElemPosition(node, _this.elements[node.id + '-layer'], true);
      }

      if (node.gif) {
        if (node.image.indexOf('.gif') < 0) {
          node.gif = false;
          _this.gifs[node.id] && _this.canvas.removeChild(_this.gifs[node.id]);
          _this.gifs[node.id] = undefined;
        } else if (node.img) {
          if (_this.gifs[node.id] instanceof HTMLDivElement) {
            var a = _this.gifs[node.id];
            var b = a.children[0];

            if (b && b.src !== node.image) {
              b.src = node.image;
            }
          } else {
            var _a = _this.gifs[node.id];

            if (_a && _a.src !== node.image) {
              _a.src = node.image;
            }
          }

          _this.setElemPosition(node, _this.gifs[node.id] || _this.addGif(node)); // this.setElemPosition(node, this.addGif(node));
        } else if (node.image.indexOf('.gif') > 0) {
          console.log(node.id);

          if (!_this.gifs[node.id]) {
            var divid = document.getElementById(node.id);
            divid && _this.canvas.removeChild(divid);
            node.gif = false;
            return;
          }

          node.gif = true;
          var _a2 = _this.gifs[node.id];
          var _b = _a2.children[0];

          if (_b && _b.src !== node.image) {
            _b.src = node.image;
          }
        }
      }

      if (node.children) {
        var _iterator = (0, _createForOfIteratorHelper2.default)(node.children),
          _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var child = _step.value;

            if (child.type === _pen.PenType.Line) {
              continue;
            }

            _this.addDiv(child);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    };

    _this.parentElem = parentElem;
    _this.options = options;
    _this.data = _storeUtils.Store.get(_this.generateStoreKey('topology-data'));

    if (!_this.options.playIcon) {
      _this.options.playIcon = 'iconfont icon-play';
    }

    if (!_this.options.pauseIcon) {
      _this.options.pauseIcon = 'iconfont icon-pause';
    }

    if (!_this.options.fullScreenIcon) {
      _this.options.fullScreenIcon = 'iconfont icon-full-screen';
    }

    if (!_this.options.loopIcon) {
      _this.options.loopIcon = 'iconfont icon-loop';
    }

    _this.canvas.style.position = 'absolute';
    _this.canvas.style.left = '0';
    _this.canvas.style.top = '0';
    _this.canvas.style.outline = 'none';
    _this.canvas.style.background = 'transparent';
    parentElem.appendChild(_this.canvas);
    parentElem.appendChild(_this.player);

    _this.createPlayer();

    _this.subcribe = _storeUtils.Store.subscribe(_this.generateStoreKey('LT:addDiv'), _this.addDiv);
    _this.subcribeNode = _storeUtils.Store.subscribe(
      _this.generateStoreKey('LT:activeNode'),
      function (node) {
        if (!node || (!node.video && !node.audio)) {
          _this.player.style.top = '-99999px';
          return;
        }

        if (node.audio && _this.audios[node.id]) {
          _this.media = _this.audios[node.id].media;
        } else if (node.video && _this.videos[node.id]) {
          _this.media = _this.videos[node.id].media;
        } else {
          return;
        }

        _this.curNode = node;

        var rect = _this.parentElem.getBoundingClientRect();

        _this.player.style.top = rect.top + _this.parentElem.clientHeight - 40 + 'px';
        _this.player.style.left = rect.left + 'px';
        _this.player.style.width = _this.parentElem.clientWidth + 'px';

        _this.getMediaCurrent();

        if (_this.media.paused) {
          _this.playBtn.className = _this.options.playIcon;
        } else {
          _this.playBtn.className = _this.options.pauseIcon;
        }
      },
    );
    document.addEventListener('fullscreenchange', function (e) {
      if (!_this.media) {
        return;
      }

      if (document.fullscreen) {
        _this.media.controls = true;
        _this.media.style.userSelect = 'initial';
        _this.media.style.pointerEvents = 'initial';
      } else {
        _this.media.style.userSelect = 'none';
        _this.media.style.pointerEvents = 'none';
        _this.media.controls = false;
      }
    });
    return _this;
  }

  (0, _createClass2.default)(DivLayer, [
    {
      key: 'createPlayer',
      value: function createPlayer() {
        var _this2 = this;

        this.player.style.position = 'fixed';
        this.player.style.outline = 'none';
        this.player.style.top = '-99999px';
        this.player.style.height = '40px';
        this.player.style.padding = '10px 15px';
        this.player.style.background = 'rgba(200,200,200,.1)';
        this.player.style.display = 'flex';
        this.player.style.alignItems = 'center';
        this.player.style.userSelect = 'initial';
        this.player.style.pointerEvents = 'initial';
        this.player.style.zIndex = '1';
        this.playBtn = document.createElement('i');
        this.currentTime = document.createElement('span');
        this.progress = document.createElement('div');
        this.progressCurrent = document.createElement('div');
        this.loop = document.createElement('i');
        var fullScreen = document.createElement('i');
        this.playBtn.className = this.options.playIcon;
        this.playBtn.style.fontSize = '18px';
        this.playBtn.style.lineHeight = '20px';
        this.playBtn.style.cursor = 'pointer';
        this.currentTime.style.padding = '0 10px';
        this.currentTime.innerText = '0 / 0';
        this.progress.style.position = 'relative';
        this.progress.style.flexGrow = '1';
        this.progress.style.top = '0';
        this.progress.style.height = '4px';
        this.progress.style.background = '#ccc';
        this.progress.style.borderRadius = '2px';
        this.progress.style.overflow = 'hidden';
        this.progress.style.cursor = 'pointer';
        this.progressCurrent.style.position = 'absolute';
        this.progressCurrent.style.left = '0';
        this.progressCurrent.style.top = '0';
        this.progressCurrent.style.bottom = '0';
        this.progressCurrent.style.width = '0';
        this.progressCurrent.style.background = '#52c41a';
        this.loop.style.margin = '0 10px';
        this.loop.style.padding = '2px 5px';
        this.loop.style.borderRadius = '2px';
        this.loop.className = this.options.loopIcon;
        this.loop.style.fontSize = '18px';
        this.loop.style.lineHeight = '20px';
        this.loop.style.cursor = 'pointer';
        fullScreen.className = this.options.fullScreenIcon;
        fullScreen.style.fontSize = '17px';
        fullScreen.style.lineHeight = '20px';
        fullScreen.style.cursor = 'pointer';
        this.player.appendChild(this.playBtn);
        this.player.appendChild(this.currentTime);
        this.player.appendChild(this.progress);
        this.progress.appendChild(this.progressCurrent);
        this.player.appendChild(this.loop);
        this.player.appendChild(fullScreen);

        this.playBtn.onclick = function () {
          if (_this2.media.paused) {
            _this2.media.play();

            _this2.playBtn.className = _this2.options.pauseIcon;
          } else {
            _this2.media.pause();

            _this2.playBtn.className = _this2.options.playIcon;
          }
        };

        this.progress.onclick = function (e) {
          _this2.media.currentTime =
            (e.offsetX / _this2.progress.clientWidth) * _this2.media.duration;
        };

        this.loop.onclick = function () {
          _this2.media.loop = !_this2.media.loop;
          _this2.curNode.playLoop = _this2.media.loop;

          if (_this2.media.loop) {
            _this2.loop.style.background = '#ddd';
          } else {
            _this2.loop.style.background = 'none';
          }
        };

        fullScreen.onclick = function () {
          _this2.media.requestFullscreen();
        };
      },
    },
    {
      key: 'getMediaCurrent',
      value: function getMediaCurrent() {
        if (!this.media) {
          return;
        }

        this.currentTime.innerText =
          this.formatSeconds(this.media.currentTime) +
          ' / ' +
          this.formatSeconds(this.media.duration);
        this.progressCurrent.style.width =
          (this.media.currentTime / this.media.duration) * this.progress.clientWidth + 'px';
      },
    },
    {
      key: 'addMedia',
      value: function addMedia(node, type) {
        var _this3 = this;

        var player = document.createElement('div');
        var current = document.createElement('div');
        var media = document.createElement(type);
        current.style.position = 'absolute';
        current.style.outline = 'none';
        current.style.left = '0';
        current.style.bottom = '0';
        current.style.height = '2px';
        current.style.background = '#52c41a';
        media.style.position = 'absolute';
        media.style.outline = 'none';
        media.style.left = '0';
        media.style.right = '0';
        media.style.top = '0';
        media.style.bottom = '0';

        if (type === 'video') {
          media.style.width = node.rect.width + 'px';
          media.style.height = node.rect.height + 'px';
        }

        player.style.background = 'transparent';

        if (node.play === 1) {
          media.autoplay = true;
        }

        media.loop = node.playLoop;

        media.ontimeupdate = function () {
          current.style.width = (media.currentTime / media.duration) * node.rect.width + 'px';

          _this3.getMediaCurrent();

          if (_this3.media === media) {
            if (node.playLoop) {
              media.loop = true;
              _this3.loop.style.background = '#ddd';
            } else {
              media.loop = false;
              _this3.loop.style.background = 'none';
            }
          }
        };

        media.onended = function () {
          _storeUtils.Store.set(_this3.generateStoreKey('mediaEnd'), node);

          if (_this3.media === media) {
            _this3.playBtn.className = _this3.options.playIcon;
          }

          _this3.playNext(node.nextPlay);
        };

        media.onloadedmetadata = function () {
          _this3.getMediaCurrent();
        };

        media.src = node[type];
        player.appendChild(media);
        player.appendChild(current);
        this[type + 's'][node.id] = {
          player: player,
          current: current,
          media: media,
        };
        this.canvas.appendChild(player);
        return player;
      },
    },
    {
      key: 'playNext',
      value: function playNext(next) {
        if (!next) {
          return;
        }

        var _iterator2 = (0, _createForOfIteratorHelper2.default)(this.data.pens),
          _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var item = _step2.value;

            if (!(item instanceof _node.Node)) {
              continue;
            }

            if (item.tags.indexOf(next) > -1) {
              if (
                item.audio &&
                this.audios[item.id] &&
                this.audios[item.id].media &&
                this.audios[item.id].media.paused
              ) {
                this.audios[item.id].media.play();
              } else if (
                item.video &&
                this.videos[item.id].media &&
                this.videos[item.id].media.paused
              ) {
                this.videos[item.id].media.play();
              }
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      },
    },
    {
      key: 'addIframe',
      value: function addIframe(node) {
        var iframe = document.createElement('iframe');
        iframe.scrolling = 'no';
        iframe.frameBorder = '0';
        iframe.src = node.iframe;
        this.iframes[node.id] = iframe;
        this.canvas.appendChild(iframe);
        return iframe;
      },
    },
    {
      key: 'addGif',
      value: function addGif(node) {
        node.img.removeAttribute('style');
        node.img.style.width = node.rect.width + 'px';
        node.img.style.height = node.rect.height + 'px';
        var imgWrapper = document.createElement('div');
        imgWrapper.setAttribute('id', node.id);
        imgWrapper.appendChild(node.img);
        this.canvas.appendChild(imgWrapper);
        this.gifs[node.id] = imgWrapper;
        return imgWrapper;
      },
    },
    {
      key: 'setElemPosition',
      value: function setElemPosition(node, elem) {
        var layer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (!elem) {
          return;
        }

        elem.style.position = 'absolute';
        elem.style.outline = 'none';
        elem.style.left = node.isEditable ? node.rect.x + 10 + 'px' : node.rect.x + 'px';
        elem.style.top = node.isEditable ? node.rect.y + 10 + 'px' : node.rect.y + 'px';
        elem.style.width = node.isEditable ? node.rect.width - 20 + 'px' : node.rect.width + 'px';
        elem.style.height = node.isEditable
          ? node.rect.height - 20 + 'px'
          : node.rect.height + 'px';

        if (node.rotate || node.offsetRotate) {
          elem.style.transform = 'rotate('.concat(node.rotate + node.offsetRotate, 'deg)');
        }

        if (node.video && this.videos[node.id] && this.videos[node.id].media) {
          this.videos[node.id].media.style.width = '100%';
          this.videos[node.id].media.style.height = '100%';
        }

        if (
          this.data.locked > _status.Lock.None ||
          node.locked > _status.Lock.None ||
          node.isEditable
        ) {
          elem.style.userSelect = 'initial';
          elem.style.pointerEvents = 'initial';
        } else {
          elem.style.userSelect = 'none';
          elem.style.pointerEvents = 'none';
        }

        if (layer) {
          elem.style.left = node.rect.x + 'px';
          elem.style.top = node.rect.y + 'px';
          elem.style.width = node.rect.width + 'px';
          elem.style.height = node.rect.height + 'px';
          elem.style.userSelect = 'none';
          elem.style.pointerEvents = 'none';
        }
      },
    },
    {
      key: 'removeDiv',
      value: function removeDiv(item) {
        if (this.curNode && item.id === this.curNode.id) {
          this.curNode = null;
          this.media = null;
          this.player.style.top = '-99999px';
        }

        if (item.audio) {
          this.canvas.removeChild(this.audios[item.id].player);
          this.audios[item.id] = null;
        }

        if (item.video) {
          this.canvas.removeChild(this.videos[item.id].player);
          this.videos[item.id] = null;
        }

        if (item.iframe) {
          this.canvas.removeChild(this.iframes[item.id]);
          this.iframes[item.id] = null;
        }

        if (item.elementId) {
          this.canvas.removeChild(this.elements[item.id]);
          this.elements[item.id] = null;
        }

        if (item.gif) {
          this.canvas.removeChild(this.gifs[item.id]);
          var divid = document.getElementById(item.id);
          divid && this.canvas.removeChild(divid);
          this.gifs[item.id] = null;
        }

        if (item.children) {
          var _iterator3 = (0, _createForOfIteratorHelper2.default)(item.children),
            _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var child = _step3.value;

              if (child.type === _pen.PenType.Line) {
                continue;
              }

              this.removeDiv(child);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      },
    },
    {
      key: 'clear',
      value: function clear(shallow) {
        this.canvas.innerHTML = '';
        this.audios = {};
        this.videos = {};
        this.iframes = {};
        this.elements = {};
        this.gifs = {};

        if (!shallow) {
          // tslint:disable-next-line:forin
          for (var key in _node.images) {
            delete _node.images[key];
          }
        }

        this.player.style.top = '-99999px';
      },
    },
    {
      key: 'formatSeconds',
      value: function formatSeconds(seconds) {
        var h = Math.floor(seconds / 3600);
        var m = Math.floor(seconds / 60) % 60;
        var s = Math.floor(seconds % 60);
        var txt = s + '';

        if (m) {
          txt = m + ':' + s;
        } else {
          txt = '0:' + s;
        }

        if (h) {
          txt = h + ':' + m + ':' + s;
        }

        return txt;
      },
    },
    {
      key: 'resize',
      value: function resize(size) {
        if (size) {
          this.canvas.style.width = size.width + 'px';
          this.canvas.style.height = size.height + 'px';
        } else {
          if (this.options.width && this.options.width !== 'auto') {
            this.canvas.style.width = this.options.width + 'px';
          } else {
            this.canvas.style.width = this.parentElem.clientWidth + 'px';
          }

          if (this.options.height && this.options.height !== 'auto') {
            this.canvas.style.height = this.options.height + 'px';
          } else {
            this.canvas.style.height = this.parentElem.clientHeight - 8 + 'px';
          }
        }
      },
    },
    {
      key: 'render',
      value: function render() {
        var _iterator4 = (0, _createForOfIteratorHelper2.default)(this.data.pens),
          _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var item = _step4.value;

            if (!item.getTID()) {
              item.setTID(this.TID);
            }

            this.addDiv(item);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      },
    },
    {
      key: 'destroy',
      value: function destroy() {
        this.clear();
        this.subcribe.unsubscribe();
        this.subcribeNode.unsubscribe();
      },
    },
    {
      key: 'changeDivNodePosition',
      value: function changeDivNodePosition(pen, pens, type) {},
    },
  ]);
  return DivLayer;
})(_layer.Layer);

exports.DivLayer = DivLayer;
