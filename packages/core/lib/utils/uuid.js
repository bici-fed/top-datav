'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.s12 = s12;
exports.s16 = s16;
exports.s4 = s4;
exports.s8 = s8;

function s4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function s8() {
  return (((1 + Math.random()) * 0x100000000) | 0).toString(16).substring(1);
}

function s12() {
  return s4() + s8();
}

function s16() {
  return s8() + s8();
}
