"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIconColor = void 0;

/* eslint-disable */

/**
 * @param {string | string[] | undefined} color
 * @param {number} index
 * @param {string} defaultColor
 * @return {string}
 */
var getIconColor = function getIconColor(color, index, defaultColor) {
  return color ? typeof color === 'string' ? color : color[index] || defaultColor : defaultColor;
};

exports.getIconColor = getIconColor;