'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.calcLineControlPoints = calcLineControlPoints;
exports.line = line;
exports.lineControlPoints = lineControlPoints;

function line(ctx, l) {
  ctx.beginPath();
  ctx.moveTo(l.from.x, l.from.y);
  ctx.lineTo(l.to.x, l.to.y);
  ctx.stroke();
}

function lineControlPoints(ctx, l) {}

function calcLineControlPoints(l) {
  l.controlPoints = [];
}
