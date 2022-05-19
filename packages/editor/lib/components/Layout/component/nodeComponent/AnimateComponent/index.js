'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _core = require('@top-datav/core');

var _antd = require('antd');

var _index = require('../../../index');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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
        if (!normalCompletion && it['return'] != null) it['return']();
      } finally {
        if (didErr) throw err;
      }
    },
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

var Panel = _antd.Collapse.Panel;

var AnimateComponent = function AnimateComponent(_ref) {
  var canvasData = _ref.canvasData;

  var _Form$useForm = _antd.Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];

  var node = canvasData.node;

  var onHandleStyleSelectChange = function onHandleStyleSelectChange(e) {
    switch (e) {
      case 'upDown':
        node.rect.y -= 10;
        node.rect.ey -= 10;
        node.animateFrames.push({
          duration: 100,
          linear: true,
          state: node,
        });
        node.animateFrames.push({
          duration: 100,
          linear: true,
          state: _core.Node.cloneState(node),
        });
        node.animateFrames.push({
          duration: 200,
          linear: true,
          state: _core.Node.cloneState(node),
        });
        node.animateStart = Date.now();
        break;

      default:
        break;
    }

    node.animateDuration = 0;

    var _iterator = _createForOfIteratorHelper(node.animateFrames),
      _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var item = _step.value;
        node.animateDuration += item.duration;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  var onHandleSwitchChange = function onHandleSwitchChange(e) {
    if (e) {
      node.animateStart = node.animateStart ? Date.now() : 0;

      _index.canvas.animate();
    }
  };

  var renderAnimateForm = function renderAnimateForm() {
    return /*#__PURE__*/ _react['default'].createElement(
      _antd.Form,
      {
        form: form,
      },
      /*#__PURE__*/ _react['default'].createElement(
        _antd.Col,
        {
          span: 24,
        },
        /*#__PURE__*/ _react['default'].createElement(
          _antd.Form.Item,
          {
            label: '\u7279\u6548',
          },
          /*#__PURE__*/ _react['default'].createElement(
            _antd.Select,
            {
              onSelect: function onSelect(e) {
                return onHandleStyleSelectChange(e);
              },
            },
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Select.Option,
              {
                value: 'upDown',
                key: 'topDown',
              },
              '\u4E0A\u4E0B\u8DF3\u52A8',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Select.Option,
              {
                value: 'leftRight',
                key: 'leftRight',
              },
              '\u5DE6\u53F3\u8DF3\u52A8',
            ),
            /*#__PURE__*/ _react['default'].createElement(
              _antd.Select.Option,
              {
                value: 'heart',
                key: 'heart',
              },
              '\u5FC3\u8DF3',
            ),
          ),
        ),
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _antd.Col,
        {
          span: 24,
        },
        /*#__PURE__*/ _react['default'].createElement(
          _antd.Form.Item,
          {
            label: '\u64AD\u653E',
          },
          /*#__PURE__*/ _react['default'].createElement(_antd.Switch, {
            checkedChildren: '\u5F00',
            unCheckedChildren: '\u5173',
            onChange: function onChange(e) {
              return onHandleSwitchChange(e);
            },
          }),
        ),
      ),
    );
  };

  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    null,
    /*#__PURE__*/ _react['default'].createElement(
      _antd.Collapse,
      null,
      /*#__PURE__*/ _react['default'].createElement(
        Panel,
        {
          header: '\u52A8\u753B',
          key: '1',
        },
        renderAnimateForm(),
      ),
    ),
  );
};

var _default = AnimateComponent;
exports['default'] = _default;
