"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMobile = isMobile;

function isMobile() {
  return /Android|webOS|iPad|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
}