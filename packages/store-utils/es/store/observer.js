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

import { observers } from './data';
export var Observer = /*#__PURE__*/ (function () {
  function Observer(id, key, fn) {
    _classCallCheck(this, Observer);

    this.id = void 0;
    this.key = '';
    this.fn = void 0;
    this.id = id;
    this.key = key;
    this.fn = fn;
  }

  _createClass(Observer, [
    {
      key: 'unsubscribe',
      value: function unsubscribe() {
        delete observers[this.id];
      },
    },
  ]);

  return Observer;
})();
