"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cube = cube;

var _cube = require("./cube.model");

function cube(ctx, node) {
  new _cube.Cube(node.rect, node.z, node.zRotate, node.fillStyle, node.strokeStyle).render(ctx);
}