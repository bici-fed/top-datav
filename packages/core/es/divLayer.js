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
        e: function e(_e) {
          throw _e;
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
    e: function e(_e2) {
      didErr = true;
      err = _e2;
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

import { Store } from '@top-datav/store-utils';
import { Node, images } from './models/node';
import { Lock } from './models/status';
import { PenType } from './models/pen';
import { Layer } from './layer';
export var DivLayer = /*#__PURE__*/ (function (_Layer) {
  _inherits(DivLayer, _Layer);

  var _super = _createSuper(DivLayer);

  function DivLayer(parentElem) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var TID = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, DivLayer);

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
        var _iterator = _createForOfIteratorHelper(node.children),
          _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var child = _step.value;

            if (child.type === PenType.Line) {
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
    _this.data = Store.get(_this.generateStoreKey('topology-data'));

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

    _this.subcribe = Store.subscribe(_this.generateStoreKey('LT:addDiv'), _this.addDiv);
    _this.subcribeNode = Store.subscribe(_this.generateStoreKey('LT:activeNode'), function (node) {
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
    });
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

  _createClass(DivLayer, [
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
          Store.set(_this3.generateStoreKey('mediaEnd'), node);

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

        var _iterator2 = _createForOfIteratorHelper(this.data.pens),
          _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var item = _step2.value;

            if (!(item instanceof Node)) {
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

        if (this.data.locked > Lock.None || node.locked > Lock.None || node.isEditable) {
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
          var _iterator3 = _createForOfIteratorHelper(item.children),
            _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var child = _step3.value;

              if (child.type === PenType.Line) {
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
          for (var key in images) {
            delete images[key];
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
        var _iterator4 = _createForOfIteratorHelper(this.data.pens),
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
})(Layer);
