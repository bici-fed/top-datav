"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;

var _core = require("@top-datav/core");

var _echarts2 = require("./echarts");

function register(_echarts) {
  _echarts2.echartsObjs.echarts = _echarts;

  if (!_echarts2.echartsObjs.echarts && !window.echarts) {
    (0, _core.loadJS)('https://cdn.bootcdn.net/ajax/libs/echarts/5.0.2/echarts.min.js', null, true); // loadJS(
    //     './echarts.min.js', null, true
    // );
  }

  (0, _core.registerNode)('echarts', _echarts2.echarts, null, null, null);
}