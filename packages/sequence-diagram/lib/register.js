'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.register = register;

var _core = require('@top-datav/core');

var _lifeline = require('./lifeline');

var _focus = require('./focus');

function register() {
  (0, _core.registerNode)(
    'lifeline',
    _lifeline.lifeline,
    _lifeline.lifelineAnchors,
    _lifeline.lifelineIconRect,
    _lifeline.lifelineTextRect,
  );
  (0, _core.registerNode)(
    'sequenceFocus',
    _focus.sequenceFocus,
    _focus.sequenceFocusAnchors,
    _focus.sequenceFocusIconRect,
    _focus.sequenceFocusTextRect,
  );
}
