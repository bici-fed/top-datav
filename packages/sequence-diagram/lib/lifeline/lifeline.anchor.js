"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lifelineAnchors = lifelineAnchors;

var _core = require("@top-datav/core");

function lifelineAnchors(node) {
  node.anchors.push(new _core.Point(node.rect.x, node.rect.y + 25, _core.Direction.Left));
  node.anchors.push(new _core.Point(node.rect.x + node.rect.width / 2, node.rect.y, _core.Direction.Up));
  node.anchors.push(new _core.Point(node.rect.x + node.rect.width, node.rect.y + 25, _core.Direction.Right));
  node.anchors.push(new _core.Point(node.rect.x + node.rect.width / 2, node.rect.y + 50, _core.Direction.Bottom));
  node.anchors.push(new _core.Point(node.rect.x + node.rect.width / 2, node.rect.ey, _core.Direction.Bottom));
}