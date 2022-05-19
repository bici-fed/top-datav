"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reactNodesData = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _core = require("@top-datav/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
          div: (0, _core.createDiv)(node)
        };

        if (node.isEditable) {
          reactNodesData[node.id + "-layer"] = {
            div: (0, _core.createLayerDiv)(node)
          };
          document.body.appendChild(reactNodesData[node.id + "-layer"].div);
        }

        document.body.appendChild(reactNodesData[node.id].div); // 添加当前节点到div层，否则无法显示

        node.addToDiv();
      } // 初始化 react 组件


      if (node && node.property) {
        reactNodesData[node.id].component = _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(ReactComponent, _objectSpread(_objectSpread({}, node.property.props), {}, {
          node: node
        })), reactNodesData[node.id].div);
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

var ModalContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(ModalContainer, _React$Component);

  var _super = _createSuper(ModalContainer);

  function ModalContainer(props) {
    _classCallCheck(this, ModalContainer);

    return _super.call(this, props);
  }

  _createClass(ModalContainer, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeChild(this.props.el);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_reactDom["default"].createPortal(this.props.children, this.props.el);
    }
  }]);

  return ModalContainer;
}(_react["default"].Component);

var _default = drawReactNode;
exports["default"] = _default;