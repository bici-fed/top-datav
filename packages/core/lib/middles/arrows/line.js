'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.line = line;
exports.lineDown = lineDown;
exports.lineUp = lineUp;

function line(ctx, from, to, size) {
  size += ctx.lineWidth * 3;
  ctx.translate(to.x, to.y);
  ctx.rotate(Math.atan2(to.y - from.y, to.x - from.x));
  ctx.translate(-to.x - ctx.lineWidth / 5, -to.y - ctx.lineWidth / 5);
  ctx.moveTo(to.x, to.y);
  ctx.lineTo(to.x - size, to.y - size / 3);
  ctx.moveTo(to.x, to.y);
  ctx.lineTo(to.x - size, to.y + size / 3);
  ctx.stroke();
}

function lineUp(ctx, from, to, size) {
  size += ctx.lineWidth * 3;
  ctx.translate(to.x, to.y);
  ctx.rotate(Math.atan2(to.y - from.y, to.x - from.x));
  ctx.translate(-to.x - ctx.lineWidth / 5, -to.y - ctx.lineWidth / 5);

  if (to.x > from.x) {
    ctx.moveTo(to.x, to.y);
    ctx.lineTo(to.x - size, to.y - size / 3);
  } else {
    ctx.moveTo(to.x, to.y);
    ctx.lineTo(to.x - size, to.y + size / 3);
  }

  ctx.stroke();
}

function lineDown(ctx, from, to, size) {
  size += ctx.lineWidth * 3;
  ctx.translate(to.x, to.y);
  ctx.rotate(Math.atan2(to.y - from.y, to.x - from.x));
  ctx.translate(-to.x - ctx.lineWidth / 5, -to.y - ctx.lineWidth / 5);

  if (to.x < from.x) {
    ctx.moveTo(to.x, to.y);
    ctx.lineTo(to.x - size, to.y - size / 3);
  } else {
    ctx.moveTo(to.x, to.y);
    ctx.lineTo(to.x - size, to.y + size / 3);
  }

  ctx.stroke();
}
