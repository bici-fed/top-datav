'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.register = register;

var _core = require('@top-datav/core');

var _timer = require('./timer');

var _varer = require('./varer');

var _card = require('./card');

var _pilot = require('./pilot');

var _measure = require('./measure');

var _text = require('./text');

// name - node名称.
// drawFn - node渲染函数。上面的myShape
// anchorsFn - 计算node的锚点，如果为null，表示使用缺省计算锚点方法
// iconRectFn - 计算node的图标区域，如果为null，表示使用缺省计算图标区域方法
// textRectFn - 计算node的文字区域，如果为null，表示使用缺省计算文字区域方法
// force - 如果已经存在同名node，是否覆盖.
// export function registerNode(
//   name: string, // myShape
//   drawFn: (ctx: CanvasRenderingContext2D, node: Node) => void,
//   anchorsFn?: (node: Node) => void,
//   iconRectFn?: (node: Node) => void,
//   textRectFn?: (node: Node) => void,
//   force?: boolean
// );
function register() {
  (0, _core.registerNode)(
    'biciTimer',
    _timer.biciTimer,
    null,
    _timer.biciTimerIconRect,
    _timer.biciTimerTextRect,
    true,
  );
  (0, _core.registerNode)(
    'biciVarer',
    _varer.biciVarer,
    null,
    _varer.biciVarerIconRect,
    _varer.biciVarerTextRect,
    true,
  );
  (0, _core.registerNode)(
    'biciCard',
    _card.simpleCard,
    null,
    _card.simpleCardIconRect,
    _card.simpleCardTextRect,
    true,
  );
  (0, _core.registerNode)(
    'biciCard2',
    _card.simpleCard,
    null,
    _card.simpleCardIconRect,
    _card.simpleCardTextRect,
    true,
  );
  (0, _core.registerNode)(
    'biciPilot',
    _pilot.biciPilot,
    null,
    _pilot.biciPilotIconRect,
    _pilot.biciPilotTextRect,
    true,
  );
  (0, _core.registerNode)(
    'biciMeasure',
    _measure.biciMeasure,
    null,
    _measure.biciMeasureIconRect,
    _measure.biciMeasureTextRect,
    true,
  );
  (0, _core.registerNode)(
    'biciText',
    _text.simpleText,
    null,
    _text.simpleTextIconRect,
    _text.simpleTextTextRect,
    true,
  );
}
