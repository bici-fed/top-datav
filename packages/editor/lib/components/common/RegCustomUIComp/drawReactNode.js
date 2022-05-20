'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.reactNodesData = exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _createSuper2 = _interopRequireDefault(require('@babel/runtime/helpers/createSuper'));

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread2'));

var _react = _interopRequireDefault(require('react'));

var _reactDom = _interopRequireDefault(require('react-dom'));

var _core = require('@top-datav/core');

// @ts-nocheck
// 存放原生dom节点
var reactNodesData = {};
exports.reactNodesData = reactNodesData;

var drawReactNode = function drawReactNode(ReactComponent) {
  return function (ctx, node) {
    // 绘制一个底图，类似于占位符。
    (0, _core.rectangle)(ctx, node); // 如果未知组件，直接返回

    if (!ReactComponent) {
      return;
    } // 需要设置一个唯一的id，方便绘画引擎识别

    if (!node.elementId) {
      node.elementId = (0, _core.s8)();
    } // 节点的elementLoaded用于判断第三方图形库是否第一次加载，是否需要初始化
    // 这是一个辅助变量，用户自己赋值使用或不用

    if (!node.elementLoaded) {
      if (!document.getElementById(node.elementId)) {
        // 创建一个div容器
        reactNodesData[node.id] = {
          div: (0, _core.createDiv)(node),
        };

        if (node.isEditable) {
          reactNodesData[node.id + '-layer'] = {
            div: (0, _core.createLayerDiv)(node),
          };
          document.body.appendChild(reactNodesData[node.id + '-layer'].div);
        }

        document.body.appendChild(reactNodesData[node.id].div); // 添加当前节点到div层，否则无法显示

        node.addToDiv();
      } // 初始化 react 组件

      if (node && node.property) {
        reactNodesData[node.id].component = _reactDom.default.render(
          /*#__PURE__*/ _react.default.createElement(
            ReactComponent,
            (0, _objectSpread2.default)(
              (0, _objectSpread2.default)({}, node.property.props),
              {},
              {
                node: node,
              },
            ),
          ),
          reactNodesData[node.id].div,
        );
      }
    } // 节点的elementRendered用于判断第三方图形库是否需要重绘
    // 绘画引擎需要重绘节点时，会把此属性设置为false

    if (!node.elementRendered) {
      // 初始化时，等待父div先渲染完成，避免初始图表控件太大。
      setTimeout(function () {
        // 重绘完成，避免不必要的重复重绘
        node.elementRendered = true;
      });
    }
  };
};

var ModalContainer = /*#__PURE__*/ (function (_React$Component) {
  (0, _inherits2.default)(ModalContainer, _React$Component);

  var _super = (0, _createSuper2.default)(ModalContainer);

  function ModalContainer(props) {
    (0, _classCallCheck2.default)(this, ModalContainer);
    return _super.call(this, props);
  }

  (0, _createClass2.default)(ModalContainer, [
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        document.removeChild(this.props.el);
      },
    },
    {
      key: 'render',
      value: function render() {
        return /*#__PURE__*/ _reactDom.default.createPortal(this.props.children, this.props.el);
      },
    },
  ]);
  return ModalContainer;
})(_react.default.Component);

var _default = drawReactNode;
exports.default = _default;
