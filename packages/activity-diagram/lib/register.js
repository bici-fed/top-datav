'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.register = register;

var _core = require('@top-datav/core');

var _final = require('./final');

var _fork = require('./fork');

var _swimlaneH = require('./swimlaneH');

var _swimlaneV = require('./swimlaneV');

function register() {
  (0, _core.registerNode)(
    'activityFinal',
    _final.activityFinal,
    null,
    _final.activityFinalIconRect,
    _final.activityFinalTextRect,
  );
  (0, _core.registerNode)(
    'swimlaneV',
    _swimlaneV.swimlaneV,
    null,
    _swimlaneV.swimlaneVIconRect,
    _swimlaneV.swimlaneVTextRect,
  );
  (0, _core.registerNode)(
    'swimlaneH',
    _swimlaneH.swimlaneH,
    null,
    _swimlaneH.swimlaneHIconRect,
    _swimlaneH.swimlaneHTextRect,
  );
  (0, _core.registerNode)(
    'forkH',
    _fork.fork,
    _fork.forkHAnchors,
    _fork.forkIconRect,
    _fork.forkTextRect,
  );
  (0, _core.registerNode)(
    'forkV',
    _fork.fork,
    _fork.forkVAnchors,
    _fork.forkIconRect,
    _fork.forkTextRect,
  );
}
