'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Layer = void 0;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', { writable: false });
  return Constructor;
}

var Layer = /*#__PURE__*/ (function () {
  function Layer(TID) {
    _classCallCheck(this, Layer);

    this.TID = void 0;
    this.TID = TID;
  }

  _createClass(Layer, [
    {
      key: 'generateStoreKey',
      value: function generateStoreKey(key) {
        return ''.concat(this.TID, '-').concat(key);
      },
    },
  ]);

  return Layer;
})();

exports.Layer = Layer;
