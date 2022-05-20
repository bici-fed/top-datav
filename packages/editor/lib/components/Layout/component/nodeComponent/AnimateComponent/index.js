'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/switch/style');

var _switch = _interopRequireDefault(require('antd/es/switch'));

require('antd/es/select/style');

var _select = _interopRequireDefault(require('antd/es/select'));

require('antd/es/col/style');

var _col = _interopRequireDefault(require('antd/es/col'));

var _createForOfIteratorHelper2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createForOfIteratorHelper'),
);

require('antd/es/form/style');

var _form = _interopRequireDefault(require('antd/es/form'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

require('antd/es/collapse/style');

var _collapse = _interopRequireDefault(require('antd/es/collapse'));

var _react = _interopRequireDefault(require('react'));

var _core = require('@top-datav/core');

var _index = require('../../../index');

var Panel = _collapse.default.Panel;

var AnimateComponent = function AnimateComponent(_ref) {
  var canvasData = _ref.canvasData;

  var _Form$useForm = _form.default.useForm(),
    _Form$useForm2 = (0, _slicedToArray2.default)(_Form$useForm, 1),
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

    var _iterator = (0, _createForOfIteratorHelper2.default)(node.animateFrames),
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
    return /*#__PURE__*/ _react.default.createElement(
      _form.default,
      {
        form: form,
      },
      /*#__PURE__*/ _react.default.createElement(
        _col.default,
        {
          span: 24,
        },
        /*#__PURE__*/ _react.default.createElement(
          _form.default.Item,
          {
            label: '\u7279\u6548',
          },
          /*#__PURE__*/ _react.default.createElement(
            _select.default,
            {
              onSelect: function onSelect(e) {
                return onHandleStyleSelectChange(e);
              },
            },
            /*#__PURE__*/ _react.default.createElement(
              _select.default.Option,
              {
                value: 'upDown',
                key: 'topDown',
              },
              '\u4E0A\u4E0B\u8DF3\u52A8',
            ),
            /*#__PURE__*/ _react.default.createElement(
              _select.default.Option,
              {
                value: 'leftRight',
                key: 'leftRight',
              },
              '\u5DE6\u53F3\u8DF3\u52A8',
            ),
            /*#__PURE__*/ _react.default.createElement(
              _select.default.Option,
              {
                value: 'heart',
                key: 'heart',
              },
              '\u5FC3\u8DF3',
            ),
          ),
        ),
      ),
      /*#__PURE__*/ _react.default.createElement(
        _col.default,
        {
          span: 24,
        },
        /*#__PURE__*/ _react.default.createElement(
          _form.default.Item,
          {
            label: '\u64AD\u653E',
          },
          /*#__PURE__*/ _react.default.createElement(_switch.default, {
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

  return /*#__PURE__*/ _react.default.createElement(
    'div',
    null,
    /*#__PURE__*/ _react.default.createElement(
      _collapse.default,
      null,
      /*#__PURE__*/ _react.default.createElement(
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
exports.default = _default;
