"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;

var _core = require("@top-datav/core");

var _class = require("./class");

function register() {
  (0, _core.registerNode)('simpleClass', _class.simpleClass, null, _class.simpleClassIconRect, _class.simpleClassTextRect);
  (0, _core.registerNode)('interfaceClass', _class.interfaceClass, null, _class.interfaceClassIconRect, _class.interfaceClassTextRect);
}