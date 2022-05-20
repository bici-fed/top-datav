'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

// @ts-nocheck
var hexColorPropType = function hexColorPropType(props, propName, componentName) {
  var prop = props[propName];

  if (typeof prop !== 'string' || prop[0] !== '#' || (prop.length !== 4 && prop.length !== 7)) {
    return new Error(
      "Invalid prop '"
        .concat(propName, "' supplied to '")
        .concat(componentName, "'. '")
        .concat(
          propName,
          "' has to be either a 3-digit or 6-digit hex-color string. Valid examples: '#abc', '#123456'",
        ),
    );
  }

  return null;
};

var _default = hexColorPropType;
exports.default = _default;
