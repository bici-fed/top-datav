"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Lock = exports.AnchorMode = void 0;
var Lock;
exports.Lock = Lock;

(function (Lock) {
  Lock[Lock["None"] = 0] = "None";
  Lock[Lock["Readonly"] = 1] = "Readonly";
  Lock[Lock["NoMove"] = 2] = "NoMove";
  Lock[Lock["NoEvent"] = 10] = "NoEvent";
})(Lock || (exports.Lock = Lock = {}));

var AnchorMode;
exports.AnchorMode = AnchorMode;

(function (AnchorMode) {
  AnchorMode[AnchorMode["Default"] = 0] = "Default";
  AnchorMode[AnchorMode["In"] = 1] = "In";
  AnchorMode[AnchorMode["Out"] = 2] = "Out";
})(AnchorMode || (exports.AnchorMode = AnchorMode = {}));