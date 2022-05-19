"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;

var _core = require("@top-datav/core");

var _antd = require("antd");

var _drawReactNode = _interopRequireDefault(require("./drawReactNode"));

var _WebPage = _interopRequireDefault(require("../WebPage"));

var _ProductQueue = _interopRequireDefault(require("../../customMade/ProductQueue"));

var _PDMonthReport = _interopRequireDefault(require("../../customMade/PDMonthReport"));

var _dataTable = _interopRequireDefault(require("../dataTable"));

var _LiveVideo = _interopRequireDefault(require("../LiveVideo"));

var _QTLiveVideo = _interopRequireDefault(require("../QTLiveVideo"));

var _DateFormat = _interopRequireDefault(require("../DateFormat"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function register() {
  (0, _core.registerNode)('button', (0, _drawReactNode["default"])(_antd.Button), null, null, null);
  (0, _core.registerNode)('datePicker', (0, _drawReactNode["default"])(_antd.DatePicker), null, null, null);
  (0, _core.registerNode)('result', (0, _drawReactNode["default"])(_antd.Result), null, null, null);
  (0, _core.registerNode)('table', (0, _drawReactNode["default"])(_antd.Table), null, null, null);
  (0, _core.registerNode)('webPage', (0, _drawReactNode["default"])(_WebPage["default"]), null, null, null);
  (0, _core.registerNode)('productQueue', (0, _drawReactNode["default"])(_ProductQueue["default"]), null, null, null);
  (0, _core.registerNode)('pdMonthReport', (0, _drawReactNode["default"])(_PDMonthReport["default"]), null, null, null);
  (0, _core.registerNode)('dataTable', (0, _drawReactNode["default"])(_dataTable["default"]), null, null, null);
  (0, _core.registerNode)('liveVideo', (0, _drawReactNode["default"])(_LiveVideo["default"]), null, null, null);
  (0, _core.registerNode)('QTLiveVideo', (0, _drawReactNode["default"])(_QTLiveVideo["default"]), null, null, null);
  (0, _core.registerNode)('dateFormat', (0, _drawReactNode["default"])(_DateFormat["default"]), null, null, null);
}