function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

import { Store } from '@top-datav/store-utils'; // https://github.com/developit/mitt

import { default as mitt } from 'mitt';
import { KeyType, KeydownType, DefalutOptions } from './options';
import { PenType } from './models/pen';
import { Node } from './models/node';
import { Point } from './models/point';
import { Line } from './models/line';
import { TopologyData } from './models/data';
import { Lock, AnchorMode } from './models/status';
import { drawNodeFns, drawLineFns, calcTextRect } from './middles';
import { Offscreen } from './offscreen';
import { RenderLayer } from './renderLayer';
import { HoverLayer } from './hoverLayer';
import { ActiveLayer } from './activeLayer';
import { AnimateLayer } from './animateLayer';
import { DivLayer } from './divLayer';
import { Rect } from './models/rect';
import { s8 } from './utils/uuid';
import { del, find as _find, getParent as _getParent, pointInRect } from './utils/canvas';
import { getRect as _getRect } from './utils/rect';
import { formatPadding } from './utils/padding';
import { Socket } from './socket';
import { MQTT } from './mqtt';
import { Direction } from './models';
import { isMobile } from './utils';
import * as _ from 'lodash';
var resizeCursors = ['nw-resize', 'ne-resize', 'se-resize', 'sw-resize'];
var MoveInType;

(function (MoveInType) {
  MoveInType[MoveInType["None"] = 0] = "None";
  MoveInType[MoveInType["Line"] = 1] = "Line";
  MoveInType[MoveInType["LineMove"] = 2] = "LineMove";
  MoveInType[MoveInType["LineFrom"] = 3] = "LineFrom";
  MoveInType[MoveInType["LineTo"] = 4] = "LineTo";
  MoveInType[MoveInType["LineControlPoint"] = 5] = "LineControlPoint";
  MoveInType[MoveInType["Nodes"] = 6] = "Nodes";
  MoveInType[MoveInType["ResizeCP"] = 7] = "ResizeCP";
  MoveInType[MoveInType["HoverAnchors"] = 8] = "HoverAnchors";
  MoveInType[MoveInType["AutoAnchor"] = 9] = "AutoAnchor";
  MoveInType[MoveInType["Rotate"] = 10] = "Rotate";
})(MoveInType || (MoveInType = {}));

var dockOffset = 10;
export var Topology = /*#__PURE__*/function () {
  function Topology(parent, options) {
    var _this = this;

    _classCallCheck(this, Topology);

    this.id = void 0;
    this.data = new TopologyData();
    this.clipboard = void 0;
    this.caches = {
      index: 0,
      list: []
    };
    this.options = void 0;
    this.parentElem = void 0;
    this.canvas = void 0;
    this.offscreen = void 0;
    this.hoverLayer = void 0;
    this.activeLayer = void 0;
    this.animateLayer = void 0;
    this.divLayer = void 0;
    this.isMac = void 0;
    this.subcribe = void 0;
    this.subcribeRender = void 0;
    this.subcribeImage = void 0;
    this.imageTimer = void 0;
    this.subcribeAnimateEnd = void 0;
    this.subcribeAnimateMoved = void 0;
    this.subcribeMediaEnd = void 0;
    this.touchedNode = void 0;
    this.lastHoverNode = void 0;
    this.lastHoverLine = void 0;
    this.touches = void 0;
    this.touchScale = void 0;
    this.touchStart = void 0;
    this.input = document.createElement('textarea');
    this.inputObj = void 0;
    this.mouseDown = void 0;
    this.lastTranlated = {
      x: 0,
      y: 0
    };
    this.moveIn = {
      type: MoveInType.None,
      activeAnchorIndex: 0,
      hoverAnchorIndex: 0,
      hoverNode: null,
      hoverLine: null,
      activeNode: null,
      lineControlPoint: null
    };
    this.canvasPos = void 0;
    this.needCache = false;
    this.tip = '';
    this.raf = void 0;
    this.tipMarkdown = void 0;
    this.tipElem = void 0;
    this.socket = void 0;
    this.mqtt = void 0;
    this._emitter = void 0;
    this.scheduledAnimationFrame = false;
    this.scrolling = false;
    this.rendering = false;

    this.onScroll = function () {
      _this.canvasPos = _this.divLayer.canvas.getBoundingClientRect();
    };

    this.preventDefault = function (event) {
      event.preventDefault();
    };

    this.winResize = function () {// let timer: any;
      // if (timer) {
      //     clearTimeout(timer);
      // }
      // timer = setTimeout(() => {
      //     this.resize();
      //     this.overflow();
      // }, 100);
    };

    this.onMouseMove = function (e) {
      if (_this.scheduledAnimationFrame || _this.data.locked === Lock.NoEvent) {
        return;
      } // https://caniuse.com/#feat=mdn-api_mouseevent_buttons


      if (_this.mouseDown && !_this.mouseDown.restore && e.buttons !== 1) {
        // 防止异常情况导致mouseup事件没有触发
        _this.onmouseup();

        return;
      }

      if (_this.mouseDown && (_this.data.locked || !_this.moveIn.type)) {
        var b = !!_this.data.locked;

        switch (_this.options.translateKey) {
          case KeyType.Any:
            b = true;
            break;

          case KeyType.Ctrl:
            if (e.ctrlKey) {
              b = true;
            }

            break;

          case KeyType.Shift:
            if (e.shiftKey) {
              b = true;
            }

            break;

          case KeyType.Alt:
            if (e.altKey) {
              b = true;
            }

            break;

          default:
            if (e.ctrlKey || e.altKey) {
              b = true;
            }

        }

        if (!_this.options.disableTranslate && b && _this.data.locked < Lock.NoMove) {
          _this.translate(e.x, e.y, true);

          return false;
        }
      }

      if (_this.data.locked && _this.mouseDown) {
        return;
      }

      _this.scheduledAnimationFrame = true;
      if (_this.raf) cancelAnimationFrame(_this.raf);
      _this.raf = requestAnimationFrame(function () {
        _this.raf = null;

        if (!_this.mouseDown) {
          _this.getMoveIn(e); // Render hover anchors.


          if (_this.moveIn.hoverNode !== _this.lastHoverNode) {
            if (_this.lastHoverNode) {
              // Send a move event.
              _this.dispatch('moveOutNode', _this.lastHoverNode);

              _this.hideTip(); // Clear hover anchors.


              _this.hoverLayer.node = null;
            }

            if (_this.moveIn.hoverNode) {
              _this.hoverLayer.node = _this.moveIn.hoverNode; // Send a move event.

              _this.dispatch('moveInNode', _this.moveIn.hoverNode);

              _this.showTip(_this.moveIn.hoverNode, e);
            }
          }

          if (_this.moveIn.hoverLine !== _this.lastHoverLine && !_this.moveIn.hoverNode) {
            if (_this.lastHoverLine) {
              _this.dispatch('moveOutLine', _this.lastHoverLine);

              _this.hideTip();
            }

            if (_this.moveIn.hoverLine) {
              _this.dispatch('moveInLine', _this.moveIn.hoverLine);

              _this.showTip(_this.moveIn.hoverLine, e);
            }
          }

          if (_this.moveIn.type === MoveInType.LineControlPoint) {
            _this.hoverLayer.hoverLineCP = _this.moveIn.lineControlPoint;
          } else if (_this.hoverLayer.hoverLineCP) {
            _this.hoverLayer.hoverLineCP = null;
          }

          if (_this.moveIn.hoverNode !== _this.lastHoverNode || _this.moveIn.type === MoveInType.HoverAnchors || _this.hoverLayer.lasthoverLineCP !== _this.hoverLayer.hoverLineCP) {
            _this.hoverLayer.lasthoverLineCP = _this.hoverLayer.hoverLineCP;

            _this.render();
          }

          _this.scheduledAnimationFrame = false;
          return;
        } // Move out parent element.


        var moveOutX = e.x + 50 > _this.parentElem.clientWidth + _this.parentElem.scrollLeft;
        var moveOutY = e.y + 50 > _this.parentElem.clientHeight + _this.parentElem.scrollTop;

        if (!_this.options.disableMoveOutParent && (moveOutX || moveOutY)) {
          _this.dispatch('moveOutParent', e);

          if (_this.options.autoExpandDistance > 0) {
            var resize = false;

            if (e.x + 50 > _this.divLayer.canvas.clientWidth) {
              _this.canvas.width += _this.options.autoExpandDistance;
              resize = true;
            }

            if (e.y + 50 > _this.divLayer.canvas.clientHeight) {
              _this.canvas.height += _this.options.autoExpandDistance;
              resize = true;
            }

            if (resize) {
              _this.resize({
                width: _this.canvas.width,
                height: _this.canvas.height
              });
            }

            _this.scroll(moveOutX ? _this.options.autoExpandDistance / 2 : 0, moveOutY ? _this.options.autoExpandDistance / 2 : 0);
          }
        }

        var moveLeft = e.x - 100 < _this.parentElem.scrollLeft;
        var moveTop = e.y - 100 < _this.parentElem.scrollTop;

        if (moveLeft || moveTop) {
          _this.scroll(moveLeft ? -100 : 0, moveTop ? -100 : 0);
        }

        _this.hideTip();

        switch (_this.moveIn.type) {
          case MoveInType.None:
            _this.hoverLayer.dragRect = new Rect(_this.mouseDown.x, _this.mouseDown.y, e.x - _this.mouseDown.x, e.y - _this.mouseDown.y);
            break;

          case MoveInType.Nodes:
            if (_this.activeLayer.locked()) {
              break;
            }

            var x = e.x - _this.mouseDown.x;
            var y = e.y - _this.mouseDown.y;

            if (x || y) {
              var offset = _this.getDockPos(x, y, e.ctrlKey || e.shiftKey || e.altKey);

              _this.activeLayer.move(offset.x ? offset.x : x, offset.y ? offset.y : y);

              _this.needCache = true;
            }

            break;

          case MoveInType.ResizeCP:
            _this.activeLayer.resize(_this.moveIn.activeAnchorIndex, _this.mouseDown, e);

            _this.dispatch('resizePens', _this.activeLayer.pens);

            _this.needCache = true;
            break;

          case MoveInType.LineTo:
          case MoveInType.HoverAnchors:
          case MoveInType.AutoAnchor:
            var arrow = _this.data.toArrow;

            if (_this.moveIn.hoverLine) {
              arrow = _this.moveIn.hoverLine.toArrow;
            }

            if (_this.hoverLayer.line) {
              _this.activeLayer.pens = [_this.hoverLayer.line];
            }

            _this.hoverLayer.lineTo(_this.getLineDock(new Point(e.x, e.y), AnchorMode.In), arrow);

            _this.needCache = true;
            break;

          case MoveInType.LineFrom:
            _this.hoverLayer.lineFrom(_this.getLineDock(new Point(e.x, e.y), AnchorMode.Out));

            _this.needCache = true;
            break;

          case MoveInType.LineMove:
            _this.hoverLayer.lineMove(e, _this.mouseDown);

            _this.animateLayer.updateLines([_this.hoverLayer.line]);

            _this.needCache = true;
            break;

          case MoveInType.LineControlPoint:
            _this.moveIn.hoverLine.controlPoints[_this.moveIn.lineControlPoint.id].x = e.x;
            _this.moveIn.hoverLine.controlPoints[_this.moveIn.lineControlPoint.id].y = e.y;
            _this.moveIn.hoverLine.textRect = null;

            if (drawLineFns[_this.moveIn.hoverLine.name] && drawLineFns[_this.moveIn.hoverLine.name].dockControlPointFn) {
              drawLineFns[_this.moveIn.hoverLine.name].dockControlPointFn(_this.moveIn.hoverLine.controlPoints[_this.moveIn.lineControlPoint.id], _this.moveIn.hoverLine);
            }

            _this.needCache = true;
            Store.set(_this.generateStoreKey('LT:updateLines'), [_this.moveIn.hoverLine]);
            break;

          case MoveInType.Rotate:
            if (_this.activeLayer.pens.length) {
              _this.activeLayer.offsetRotate(_this.getAngle(e));

              _this.activeLayer.updateLines();
            }

            _this.needCache = true;
            break;
        }

        _this.render();

        _this.scheduledAnimationFrame = false;
      });
    };

    this.onmousedown = function (e) {
      if (e.button !== 0 && e.button !== 2) return;
      _this.mouseDown = e;

      if (e.altKey) {
        _this.divLayer.canvas.style.cursor = 'move';
      }

      if (_this.inputObj) {
        _this.setNodeText();
      }

      switch (_this.moveIn.type) {
        // Click the space.
        case MoveInType.None:
          _this.activeLayer.clear();

          _this.hoverLayer.clear();

          _this.dispatch('space', _this.mouseDown);

          break;
        // Click a line.

        case MoveInType.Line:
        case MoveInType.LineControlPoint:
          if (e.ctrlKey || e.shiftKey) {
            _this.activeLayer.add(_this.moveIn.hoverLine);

            _this.dispatch('multi', _this.activeLayer.pens);
          } else {
            _this.activeLayer.pens = [_this.moveIn.hoverLine];

            _this.dispatch('line', _this.moveIn.hoverLine);
          }

          if (_this.data.locked || _this.moveIn.hoverLine.locked) {
            _this.moveIn.hoverLine.click();
          }

          break;

        case MoveInType.LineMove:
          _this.hoverLayer.initLine = new Line(_this.moveIn.hoverLine);

          if (_this.data.locked || _this.moveIn.hoverLine.locked) {
            _this.moveIn.hoverLine.click();
          }

        // tslint:disable-next-line:no-switch-case-fall-through

        case MoveInType.LineFrom:
        case MoveInType.LineTo:
          _this.activeLayer.pens = [_this.moveIn.hoverLine];

          _this.dispatch('line', _this.moveIn.hoverLine);

          _this.hoverLayer.line = _this.moveIn.hoverLine;
          break;

        case MoveInType.HoverAnchors:
          _this.hoverLayer.line = _this.addLine({
            name: _this.data.lineName,
            from: new Point(_this.moveIn.hoverNode.rotatedAnchors[_this.moveIn.hoverAnchorIndex].x, _this.moveIn.hoverNode.rotatedAnchors[_this.moveIn.hoverAnchorIndex].y, _this.moveIn.hoverNode.rotatedAnchors[_this.moveIn.hoverAnchorIndex].direction, _this.moveIn.hoverAnchorIndex, _this.moveIn.hoverNode.id),
            fromArrow: _this.data.fromArrow,
            to: new Point(_this.moveIn.hoverNode.rotatedAnchors[_this.moveIn.hoverAnchorIndex].x, _this.moveIn.hoverNode.rotatedAnchors[_this.moveIn.hoverAnchorIndex].y),
            toArrow: _this.data.toArrow,
            strokeStyle: _this.options.color,
            lineWidth: _this.data.lineWidth
          });

          _this.dispatch('anchor', {
            anchor: _this.moveIn.hoverNode.rotatedAnchors[_this.moveIn.hoverAnchorIndex],
            anchorIndex: _this.moveIn.hoverAnchorIndex,
            node: _this.moveIn.hoverNode,
            line: _this.hoverLayer.line
          });

          break;

        case MoveInType.AutoAnchor:
          _this.hoverLayer.line = _this.addLine({
            name: _this.data.lineName,
            from: new Point(_this.moveIn.hoverNode.rect.center.x, _this.moveIn.hoverNode.rect.center.y, Direction.None, 0, _this.moveIn.hoverNode.id),
            fromArrow: _this.data.fromArrow,
            to: new Point(_this.moveIn.hoverNode.rect.center.x, _this.moveIn.hoverNode.rect.center.y),
            toArrow: _this.data.toArrow,
            strokeStyle: _this.options.color,
            lineWidth: _this.data.lineWidth
          });
          _this.hoverLayer.line.from.autoAnchor = true;

          _this.dispatch('nodeCenter', _this.moveIn.hoverNode);

          break;
        // tslint:disable-next-line:no-switch-case-fall-through

        case MoveInType.Nodes:
          if (!_this.moveIn.activeNode) {
            break;
          }

          if (e.ctrlKey || e.shiftKey) {
            if (_this.moveIn.hoverNode && _this.activeLayer.hasInAll(_this.moveIn.hoverNode)) {
              _this.activeLayer.setPens([_this.moveIn.hoverNode]);

              _this.dispatch('node', _this.moveIn.hoverNode);
            } else if (!_this.activeLayer.has(_this.moveIn.activeNode)) {
              _this.activeLayer.add(_this.moveIn.activeNode);

              if (_this.activeLayer.pens.length > 1) {
                _this.dispatch('multi', _this.activeLayer.pens);
              } else {
                _this.dispatch('node', _this.moveIn.activeNode);
              }
            }
          } else if (e.altKey) {
            if (_this.moveIn.hoverNode) {
              _this.activeLayer.setPens([_this.moveIn.hoverNode]);

              _this.dispatch('node', _this.moveIn.hoverNode);
            } else if (_this.moveIn.hoverLine) {
              _this.activeLayer.setPens([_this.moveIn.hoverLine]);

              _this.dispatch('line', _this.moveIn.hoverLine);
            }
          } else if (_this.activeLayer.pens.length < 2) {
            _this.activeLayer.setPens([_this.moveIn.activeNode]);

            _this.dispatch('node', _this.moveIn.activeNode);
          } else if (_this.activeLayer.pens.length >= 2) {
            // 解决选中多个节点不能切换的问题
            if (!_this.activeLayer.pens.includes(_this.moveIn.activeNode)) {
              _this.activeLayer.setPens([_this.moveIn.activeNode]);

              _this.dispatch('node', _this.moveIn.activeNode);
            }
          }

          if (_this.data.locked || _this.moveIn.activeNode.locked) {
            _this.moveIn.activeNode.click();
          }

          break;
      } // Save node rects to move.


      if (_this.activeLayer.pens.length) {
        _this.activeLayer.saveNodeRects();
      }

      _this.render();
    };

    this.onmouseup = function () {
      if (!_this.mouseDown) return;
      _this.mouseDown = null;
      _this.lastTranlated.x = 0;
      _this.lastTranlated.y = 0;
      _this.hoverLayer.dockAnchor = null;
      _this.hoverLayer.dockLineX = 0;
      _this.hoverLayer.dockLineY = 0;
      _this.divLayer.canvas.style.cursor = 'default';

      if (_this.hoverLayer.dragRect) {
        _this.getPensInRect(_this.hoverLayer.dragRect);

        if (_this.activeLayer.pens && _this.activeLayer.pens.length > 1) {
          _this.dispatch('multi', _this.activeLayer.pens);
        } else if (_this.activeLayer.pens && _this.activeLayer.pens[0] && _this.activeLayer.pens[0].type === PenType.Line) {
          _this.dispatch('line', _this.activeLayer.pens[0]);
        } else if (_this.activeLayer.pens && _this.activeLayer.pens[0] && _this.activeLayer.pens[0].type === PenType.Node) {
          _this.dispatch('node', _this.activeLayer.pens[0]);
        }
      } else {
        switch (_this.moveIn.type) {
          // Add the line.
          case MoveInType.HoverAnchors:
            // New active.
            if (_this.hoverLayer.line) {
              var willAddLine;

              if (_this.hoverLayer.line.to.id) {
                if (!_this.options.disableRepeatLine) {
                  willAddLine = true;
                } else {
                  var lines = _this.data.pens.filter(function (pen) {
                    return pen.type === PenType.Line && pen.from.isSameAs(_this.hoverLayer.line.from) && pen.to.isSameAs(_this.hoverLayer.line.to);
                  });

                  willAddLine = lines.length <= 1;
                }
              } else {
                willAddLine = !_this.options.disableEmptyLine && !_this.hoverLayer.line.disableEmptyLine;
              }

              if (willAddLine) {
                _this.activeLayer.pens = [_this.hoverLayer.line];

                _this.dispatch('addLine', _this.hoverLayer.line);
              } else {
                _this.data.pens.pop();

                _this.activeLayer.clear();
              }
            }

            _this.offscreen.render();

            _this.hoverLayer.line = null;
            break;

          case MoveInType.AutoAnchor:
            if ((_this.hoverLayer.line.disableEmptyLine || _this.options.disableEmptyLine) && (!_this.hoverLayer.line.from.id || !_this.hoverLayer.line.to.id)) {
              _this.needCache = true;

              _this.activeLayer.clear();

              _this.data.pens.splice(_this.findIndex(_this.hoverLayer.line), 1);
            } else {
              _this.activeLayer.updateLines();

              _this.dispatch('addLine', _this.hoverLayer.line);
            }

            break;

          case MoveInType.Rotate:
            _this.activeLayer.updateRotate();

            break;

          case MoveInType.LineControlPoint:
            Store.set(_this.generateStoreKey('pts-') + _this.moveIn.hoverLine.id, null);
            break;

          case MoveInType.LineFrom:
          case MoveInType.LineTo:
            if ((_this.hoverLayer.line.disableEmptyLine || _this.options.disableEmptyLine) && (!_this.hoverLayer.line.from.id || !_this.hoverLayer.line.to.id)) {
              _this.needCache = true;

              _this.activeLayer.clear();

              _this.data.pens.splice(_this.findIndex(_this.hoverLayer.line), 1);
            }

            break;
        }
      }

      _this.hoverLayer.dragRect = null;

      _this.render();

      if (_this.needCache) {
        _this.cache();
      }

      _this.needCache = false;
    };

    this.switchNodeEditable = function (editable) {
      var nodeDiv = document.getElementById(_this.moveIn.hoverNode.elementId); // nodeDiv.style.pointerEvents="initial";
      // nodeDiv.style.userSelect="initial";
    };

    this.ondblclick = function (e) {
      if (_this.moveIn.hoverNode) {
        _this.dispatch('dblclick', _this.moveIn.hoverNode); // const isHoverLineText =  this.moveIn.hoverNode
        //     .getTextRect()
        //     .hit(
        //         new Point(
        //             e.x - window.scrollX - (this.canvasPos.left || this.canvasPos.x),
        //             e.y - window.scrollY - (this.canvasPos.top || this.canvasPos.y)
        //         )
        //     );


        var isHoverLineText = _this.moveIn.hoverNode.getTextRect().hit(new Point(e.offsetX, e.offsetY));

        if (isHoverLineText) {
          _this.showInput(_this.moveIn.hoverNode);
        }

        _this.switchNodeEditable(true);

        _this.moveIn.hoverNode.dblclick();
      } else if (_this.moveIn.hoverLine) {
        // const isHoverLineText = this.moveIn.hoverLine
        //     .getTextRect()
        //     .hit(
        //         new Point(e.x - (this.canvasPos.x || this.canvasPos.left), e.y - (this.canvasPos.y || this.canvasPos.top))
        //     );
        var _isHoverLineText = _this.moveIn.hoverLine.getTextRect().hit(new Point(e.offsetX, e.offsetY));

        _this.dispatch('dblclick', _this.moveIn.hoverLine);

        if (!_this.moveIn.hoverLine.text || _isHoverLineText) {
          _this.showInput(_this.moveIn.hoverLine);
        }

        _this.moveIn.hoverLine.dblclick();
      }
    };

    this.onkeydown = function (key) {
      if (_this.data.locked || key.target.tagName === 'INPUT' || key.target.tagName === 'TEXTAREA') {
        return;
      }

      var done = false;
      var moveX = 0;
      var moveY = 0;

      switch (key.key) {
        case 'a':
        case 'A':
          _this.activeLayer.setPens(_this.data.pens);

          done = true;
          break;

        case 'Delete':
        case 'Backspace':
          _this.delete();

          break;

        case 'ArrowLeft':
          moveX = -5;

          if (key.ctrlKey) {
            moveX = -1;
          }

          done = true;
          break;

        case 'ArrowUp':
          moveY = -5;

          if (key.ctrlKey) {
            moveY = -1;
          }

          done = true;
          break;

        case 'ArrowRight':
          moveX = 5;

          if (key.ctrlKey) {
            moveX = 1;
          }

          done = true;
          break;

        case 'ArrowDown':
          moveY = 5;

          if (key.ctrlKey) {
            moveY = 1;
          }

          done = true;
          break;

        case 'x':
        case 'X':
          _this.cut();

          break;

        case 'c':
        case 'C':
          _this.copy();

          break;

        case 'v':
        case 'V':
          _this.paste();

          break;

        case 'y':
        case 'Y':
          if (key.ctrlKey) {
            _this.redo();
          }

          break;

        case 'z':
        case 'Z':
          if (key.shiftKey) {
            _this.redo();
          } else {
            _this.undo();
          }

          break;

        case 'g':
        case 'G':
          if (key.ctrlKey) {
            _this.combine(_this.activeLayer.pens);

            key.returnValue = false;
          }

          break;

        case 'u':
        case 'U':
          if (key.ctrlKey) {
            _this.activeLayer.pens.filter(function (pen) {
              return pen.name === 'combine';
            }).forEach(function (pen) {
              return _this.uncombine(pen);
            });

            key.returnValue = false;
          }

          break;

        case '[':
          if (key.ctrlKey && key.altKey) {
            _this.activeLayer.pens.forEach(function (pen) {
              return _this.bottom(pen);
            });
          } else if (key.ctrlKey) {
            _this.activeLayer.pens.forEach(function (pen) {
              return _this.down(pen);
            });
          }

          break;

        case ']':
          if (key.ctrlKey && key.altKey) {
            _this.activeLayer.pens.forEach(function (pen) {
              return _this.top(pen);
            });
          } else if (key.ctrlKey) {
            _this.activeLayer.pens.forEach(function (pen) {
              return _this.up(pen);
            });
          }

          break;
      }

      if (!done) {
        return;
      }

      key.preventDefault();
      key.stopPropagation();

      if (moveX || moveY) {
        _this.activeLayer.saveNodeRects();

        _this.activeLayer.move(moveX, moveY); // this.overflow();


        _this.animateLayer.animate();
      }

      _this.render();

      _this.cache();
    };

    this.id = s8();
    this._emitter = mitt();
    Store.set(this.generateStoreKey('topology-data'), this.data);

    if (!options) {
      options = {};
    }

    var font = Object.assign({}, DefalutOptions.font, options.font);
    options.font = font;
    this.options = Object.assign({}, DefalutOptions, options);
    Store.set(this.generateStoreKey('LT:color'), this.options.color || '#222222');
    Store.set(this.generateStoreKey('LT:fontColor'), this.options.font.color || '#222222');
    this.setupDom(parent);
    this.setupSubscribe();
    this.setupMouseEvent();
    this.isMac = navigator.platform.startsWith('Mac'); // Wait for parent dom load

    setTimeout(function () {
      _this.canvasPos = _this.divLayer.canvas.getBoundingClientRect();
    }, 500);
    setTimeout(function () {
      _this.canvasPos = _this.divLayer.canvas.getBoundingClientRect();
    }, 1000);
    this.cache();
    window.topology = this;
  }

  _createClass(Topology, [{
    key: "setupDom",
    value: function setupDom(parent) {
      if (typeof parent === 'string') {
        this.parentElem = document.getElementById(parent);
      } else {
        this.parentElem = parent;
      }

      this.parentElem.style.position = 'relative';
      this.parentElem.style.overflow = 'auto';
      this.parentElem.onresize = this.winResize;
      window.addEventListener('resize', this.winResize);
      var id = this.id;
      this.activeLayer = new ActiveLayer(this.options, id);
      this.activeLayer.topology = this;
      this.hoverLayer = new HoverLayer(this.options, id);
      this.animateLayer = new AnimateLayer(this.options, id);
      this.offscreen = new Offscreen(this.parentElem, this.options, id);
      this.canvas = new RenderLayer(this.parentElem, this.options, id);
      this.divLayer = new DivLayer(this.parentElem, this.options, id);
      this.input.style.position = 'absolute';
      this.input.style.zIndex = '-1';
      this.input.style.left = '-1000px';
      this.input.style.width = '0';
      this.input.style.height = '0';
      this.input.style.outline = 'none';
      this.input.style.border = '1px solid #cdcdcd';
      this.input.style.resize = 'none';
      this.parentElem.appendChild(this.input);
      this.createMarkdownTip();
      this.resize();
    }
  }, {
    key: "setupSubscribe",
    value: function setupSubscribe() {
      var _this2 = this;

      this.subcribe = Store.subscribe(this.generateStoreKey('LT:render'), function () {
        _this2.render();
      });
      this.subcribeRender = Store.subscribe('LT:render', function () {
        _this2.render();
      });
      this.subcribeImage = Store.subscribe(this.generateStoreKey('LT:imageLoaded'), function () {
        if (_this2.imageTimer) {
          clearTimeout(_this2.imageTimer);
        }

        _this2.imageTimer = setTimeout(function () {
          _this2.render();
        }, 100);
      });
      this.subcribeAnimateMoved = Store.subscribe(this.generateStoreKey('LT:rectChanged'), function (e) {
        _this2.activeLayer.updateLines(_this2.data.pens);
      });
      this.subcribeMediaEnd = Store.subscribe(this.generateStoreKey('mediaEnd'), function (node) {
        if (node.nextPlay) {
          _this2.animateLayer.readyPlay(node.nextPlay);

          _this2.animateLayer.animate();
        }

        _this2.dispatch('mediaEnd', node);
      });
      this.subcribeAnimateEnd = Store.subscribe(this.generateStoreKey('animateEnd'), function (e) {
        if (!e) {
          return;
        }

        switch (e.type) {
          case 'node':
            _this2.offscreen.render();

            break;
        }

        _this2.divLayer.playNext(e.data.nextAnimate);

        _this2.dispatch('animateEnd', e);
      });
    }
  }, {
    key: "setupMouseEvent",
    value: function setupMouseEvent() {
      var _this3 = this;

      this.canvasPos = this.divLayer.canvas.getBoundingClientRect();
      this.parentElem.addEventListener('scroll', this.onScroll);
      window.addEventListener('scroll', this.onScroll);

      this.divLayer.canvas.ondragover = function (event) {
        return event.preventDefault();
      };

      this.divLayer.canvas.ondrop = function (event) {
        if (_this3.data.locked) {
          return;
        }

        try {
          // const json = event.dataTransfer.getData('Topology') || event.dataTransfer.getData('text');
          var json = event.dataTransfer.getData('text');
          if (!json) return;
          var obj = JSON.parse(json);
          event.preventDefault();

          _this3.dropNodes(Array.isArray(obj) ? obj : [obj], event.offsetX, event.offsetY);
        } catch (_unused) {}
      };

      if (isMobile()) {
        this.options.refresh = 50; // end
        // ipad

        document.addEventListener('gesturestart', this.preventDefault);

        this.divLayer.canvas.ontouchstart = function (event) {
          _this3.touchStart = new Date().getTime();
          var pos = new Point(event.changedTouches[0].pageX - window.scrollX - (_this3.canvasPos.left || _this3.canvasPos.x), event.changedTouches[0].pageY - window.scrollY - (_this3.canvasPos.top || _this3.canvasPos.y));

          if (event.touches.length > 1) {
            _this3.touches = event.touches;
            _this3.touchScale = _this3.data.scale;
            _this3.lastTranlated.x = pos.x;
            _this3.lastTranlated.y = pos.y;
            return;
          }

          _this3.getMoveIn(pos);

          _this3.hoverLayer.node = _this3.moveIn.hoverNode;
          _this3.lastTranlated.x = pos.x;
          _this3.lastTranlated.y = pos.y;

          _this3.onmousedown({
            x: pos.x,
            y: pos.y,
            ctrlKey: _this3.isMac ? event.metaKey : event.ctrlKey,
            shiftKey: event.shiftKey,
            altKey: event.altKey,
            button: 0
          });
        };

        this.divLayer.canvas.ontouchmove = function (event) {
          event.stopPropagation();
          var timeNow = new Date().getTime();

          if (timeNow - _this3.touchStart < 20) {
            return;
          }

          var len = event.changedTouches.length;

          if (len > 1) {
            var touches = event.changedTouches;

            if (len === 2) {
              var scale = event.scale || Math.hypot(touches[0].pageX - touches[1].pageX, touches[0].pageY - touches[1].pageY) / Math.hypot(_this3.touches[0].pageX - _this3.touches[1].pageX, _this3.touches[0].pageY - _this3.touches[1].pageY);
              var x0 = _this3.touches[0].pageX - touches[0].pageX;
              var x1 = _this3.touches[1].pageX - touches[1].pageX;
              var y0 = _this3.touches[0].pageY - touches[0].pageY;
              var y1 = _this3.touches[1].pageY - touches[1].pageY;

              if (!(x0 >= 0 && x1 >= 0 || x0 <= 0 && x1 <= 0 || y0 >= 0 && y1 >= 0 || y0 <= 0 && y1 <= 0)) {
                event.preventDefault();

                _this3.scaleTo(scale * _this3.touchScale);
              }
            } else if (len === 3) {
              var _pos = new Point(event.changedTouches[0].pageX - window.scrollX - (_this3.canvasPos.left || _this3.canvasPos.x), event.changedTouches[0].pageY - window.scrollY - (_this3.canvasPos.top || _this3.canvasPos.y));

              _this3.translate(_pos.x, _pos.y, true);
            }

            return;
          }

          event.preventDefault();
          var pos = new Point(event.changedTouches[0].pageX - window.scrollX - (_this3.canvasPos.left || _this3.canvasPos.x), event.changedTouches[0].pageY - window.scrollY - (_this3.canvasPos.top || _this3.canvasPos.y));

          _this3.onMouseMove({
            x: pos.x,
            y: pos.y,
            ctrlKey: _this3.isMac ? event.metaKey : event.ctrlKey,
            shiftKey: event.shiftKey,
            altKey: event.altKey,
            buttons: 1
          });
        };

        this.divLayer.canvas.ontouchend = function (event) {
          _this3.touches = null;

          _this3.ontouchend(event);
        };
      } else {
        this.divLayer.canvas.onmousedown = function (event) {
          var ctrlKey = _this3.isMac ? event.metaKey : event.ctrlKey;
          var e = {
            x: event.offsetX,
            y: event.offsetY,
            ctrlKey: ctrlKey,
            shiftKey: event.shiftKey,
            altKey: event.altKey,
            button: event.button
          };

          if (ctrlKey) {
            e = {
              x: event.pageX - _this3.parentElem.scrollLeft - (_this3.canvasPos.left || _this3.canvasPos.x),
              y: event.pageY - _this3.parentElem.scrollTop - (_this3.canvasPos.top || _this3.canvasPos.y),
              ctrlKey: ctrlKey,
              shiftKey: event.shiftKey,
              altKey: event.altKey,
              button: event.button
            };
          }

          _this3.lastTranlated.x = e.x;
          _this3.lastTranlated.y = e.y;

          _this3.onmousedown(e);
        };

        this.divLayer.canvas.onmousemove = function (event) {
          var ctrlKey = _this3.isMac ? event.metaKey : event.ctrlKey;
          var e;

          if (ctrlKey) {
            e = {
              x: event.pageX - _this3.parentElem.scrollLeft - (_this3.canvasPos.left || _this3.canvasPos.x),
              y: event.pageY - _this3.parentElem.scrollTop - (_this3.canvasPos.top || _this3.canvasPos.y),
              ctrlKey: _this3.isMac ? event.metaKey : event.ctrlKey,
              shiftKey: event.shiftKey,
              altKey: event.altKey,
              buttons: event.buttons
            };
          } else {
            e = {
              x: event.offsetX,
              y: event.offsetY,
              ctrlKey: _this3.isMac ? event.metaKey : event.ctrlKey,
              shiftKey: event.shiftKey,
              altKey: event.altKey,
              buttons: event.buttons
            };
          }

          _this3.onMouseMove(e);
        };

        this.divLayer.canvas.onmouseup = function (event) {
          _this3.onmouseup();

          if (!_this3.touchedNode) {
            return;
          }

          _this3.touchedNode.rect.x = event.pageX - window.scrollX - _this3.canvasPos.x - _this3.touchedNode.rect.width / 2;
          _this3.touchedNode.rect.y = event.pageY - window.scrollY - _this3.canvasPos.y - _this3.touchedNode.rect.height / 2;
          var node = new Node(_this3.touchedNode);

          _this3.addNode(node, true);

          _this3.touchedNode = undefined;
        };
      }

      this.divLayer.canvas.ondblclick = this.ondblclick;
      this.divLayer.canvas.tabIndex = 0;

      this.divLayer.canvas.onblur = function () {
        _this3.mouseDown = null;
      };

      this.divLayer.canvas.onwheel = function (event) {
        if (_this3.options.disableScale) {
          return;
        }

        switch (_this3.options.scaleKey) {
          case KeyType.Any:
            break;

          case KeyType.Ctrl:
            var ctrlKey2 = _this3.isMac ? event.metaKey : event.ctrlKey;

            if (!ctrlKey2) {
              return;
            }

            break;

          case KeyType.Shift:
            if (!event.shiftKey) {
              return;
            }

            break;

          case KeyType.Alt:
            if (!event.altKey) {
              return;
            }

            break;

          case KeyType.Any:
            break;

          default:
            var ctrlKey = _this3.isMac ? event.metaKey : event.ctrlKey;

            if (!ctrlKey && !event.altKey) {
              return;
            }

        }

        event.preventDefault();
        event.stopPropagation();
        var pos = new Point(event.x - window.scrollX - (_this3.canvasPos.left || _this3.canvasPos.x), event.y - window.scrollY - (_this3.canvasPos.top || _this3.canvasPos.y));

        if (event.deltaY < 0) {
          _this3.scale(1.1, pos);
        } else {
          _this3.scale(0.9, pos);
        }

        _this3.divLayer.canvas.focus();

        return false;
      };

      switch (this.options.keydown) {
        case KeydownType.Document:
          document.addEventListener('keydown', this.onkeydown);
          break;

        case KeydownType.Canvas:
          this.divLayer.canvas.addEventListener('keydown', this.onkeydown);
          break;
      }
    }
  }, {
    key: "ontouchend",
    value: function ontouchend(event) {
      this.onmouseup();

      if (!this.touchedNode) {
        return;
      }

      this.touchedNode.rect.x = event.changedTouches[0].pageX - window.scrollX - this.canvasPos.x - this.touchedNode.rect.width / 2;
      this.touchedNode.rect.y = event.changedTouches[0].pageY - window.scrollY - this.canvasPos.y - this.touchedNode.rect.height / 2;
      var node = new Node(this.touchedNode);
      this.addNode(node, true);
      this.touchedNode = undefined;
    }
  }, {
    key: "resize",
    value: function resize(size) {
      this.data.width = (size === null || size === void 0 ? void 0 : size.width) || 826;
      this.data.height = (size === null || size === void 0 ? void 0 : size.height) || 1168;
      this.canvas.resize(size);
      this.offscreen.resize(size);
      this.divLayer.resize(size);
      this.render();
      this.dispatch('resize', size);
    }
  }, {
    key: "dropNodes",
    value: function dropNodes(jsonList, offsetX, offsetY) {
      var _this4 = this;

      var x, y;

      if (jsonList.length) {
        var rect = jsonList[0].rect;
        x = rect.x;
        y = rect.y;
      }

      var firstNode;
      jsonList.forEach(function (json) {
        if (!firstNode) {
          json.rect.x = offsetX - json.rect.width / 2 << 0;
          json.rect.y = offsetY - json.rect.height / 2 << 0;
          firstNode = json;
        } else {
          //Layout relative to the first node
          var _rect = json.rect;
          var dx = _rect.x - x,
              dy = _rect.y - y;
          json.rect.x = firstNode.rect.x + dx;
          json.rect.y = firstNode.rect.y + dy;
        }

        if (json.type === PenType.Line) {
          _this4.addLine(Object.assign({
            name: 'line',
            from: new Point(json.rect.x, json.rect.y),
            fromArrow: _this4.data.fromArrow,
            to: new Point(json.rect.x + json.rect.width, json.rect.y + json.rect.height),
            toArrow: _this4.data.toArrow,
            strokeStyle: _this4.options.color
          }, json), true);
        } else {
          var node = new Node(json);

          _this4.addNode(node, true);

          if (node.name === 'div') {
            _this4.dispatch('LT:addDiv', node);
          }
        }
      });
      this.divLayer.canvas.focus();
    }
  }, {
    key: "addNode",
    value: function addNode(node) {
      var _this5 = this;

      var focus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!drawNodeFns[node.name]) {
        return null;
      } // if it's not a Node


      if (!node.init) {
        node = new Node(node);
      }

      if (!node.strokeStyle && this.options.color) {
        node.strokeStyle = this.options.color;
      }

      for (var key in node.font) {
        if (!node.font[key]) {
          node.font[key] = this.options.font[key];
        }
      } // 画布整体放大缩小，不再计算
      // if (this.data.scale !== 1) {
      //     node.scale(this.data.scale);
      // }


      if (node.autoRect) {
        var ctx = this.canvas.canvas.getContext('2d');
        var rect = calcTextRect(ctx, node);
        node.rect.width = rect.width + node.lineWidth * 2;
        node.rect.height = rect.height;
        node.init();
        node.initRect();
      }

      node.setTID(this.id);
      this.data.pens.push(node);

      if (focus) {
        // fix bug: add echart
        if (node.name === 'echarts') {
          setTimeout(function () {
            _this5.activeLayer.pens = [node];

            _this5.render();
          }, 50);
        } else {
          this.activeLayer.pens = [node];
        }
      } // this.activeLayer.setPens([node]);


      this.render();
      this.animate(true);
      this.cache();
      this.dispatch('addNode', node);
      return node;
    }
  }, {
    key: "addLine",
    value: function addLine(line) {
      var focus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.data.locked) {
        return null;
      }

      if (!line.clone) {
        line = new Line(line);
        line.calcControlPoints(true);
      }

      if (this.data.scale !== 1) {
        line.font.fontSize *= this.data.scale;
      }

      this.data.pens.push(line);

      if (focus) {
        this.activeLayer.setPens([line]);
        this.render();
        this.animate(true);
        this.cache();
        this.dispatch('addLine', line);
      }

      return line;
    } // Render or redraw

  }, {
    key: "render",
    value: function render() {
      var noFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (noFocus) {
        this.activeLayer.pens = [];
        this.hoverLayer.node = null;
        this.hoverLayer.line = null;
      }

      if (this.rendering) {
        return this;
      }

      this.rendering = true;
      this.offscreen.render();
      this.canvas.render();
      this.rendering = false;
    } // open - redraw by the data

  }, {
    key: "open",
    value: function open(data) {
      if (!data) {
        data = {
          pens: []
        };
      }

      if (typeof data === 'string') {
        data = JSON.parse(data);
      }

      this.animateLayer.stop();
      this.lock(data.locked || Lock.None);

      if (data.lineName) {
        this.data.lineName = data.lineName;
      }

      this.data.fromArrow = data.fromArrow;
      this.data.toArrow = data.toArrow;
      this.data.lineWidth = data.lineWidth;
      this.data.scale = data.scale || 1;
      Store.set(this.generateStoreKey('LT:scale'), this.data.scale);
      this.dispatch('scale', this.data.scale);
      this.data.bkColor = data.bkColor;
      this.data.bkImage = data.bkImage;
      this.data.tooltip = data.tooltip;
      this.data.pens = []; // for old data.

      if (data.nodes) {
        var _iterator = _createForOfIteratorHelper(data.nodes),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            item.TID = this.id;
            this.data.pens.push(new Node(item));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var _iterator2 = _createForOfIteratorHelper(data.lines),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _item = _step2.value;
            this.data.pens.push(new Line(_item));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } // end.


      if (data.pens) {
        var hasChart = false;

        var _iterator3 = _createForOfIteratorHelper(data.pens),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _item2 = _step3.value;

            if (!_item2.type) {
              _item2.TID = this.id; // this.data.pens.push(new Node(item));

              if (_item2.name == 'combine') {
                var _iterator4 = _createForOfIteratorHelper(_item2.children),
                    _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var _child = _step4.value;

                    if (_child.name == 'echarts') {
                      hasChart = true;
                    }
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }

                if (hasChart) {
                  // 如果是图表组件，解组
                  var _iterator5 = _createForOfIteratorHelper(_item2.children),
                      _step5;

                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      var child = _step5.value;
                      child.TID = this.id;
                      this.data.pens.push(new Node(child));
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }
                } else {
                  this.data.pens.push(new Node(_item2));
                }
              } else {
                this.data.pens.push(new Node(_item2));
              }
            } else {
              this.data.pens.push(new Line(_item2));
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }

      this.data.websocket = data.websocket;
      this.data.mqttUrl = data.mqttUrl;
      this.data.mqttOptions = data.mqttOptions || {
        clientId: s8()
      };
      this.data.mqttTopics = data.mqttTopics;
      this.data.grid = data.grid;
      this.data.gridColor = data.gridColor;
      this.data.gridSize = data.gridSize;
      this.data.rule = data.rule;
      this.data.ruleColor = data.ruleColor;

      if (_typeof(data.data) === 'object') {
        this.data.data = JSON.parse(JSON.stringify(data.data));
      } else {
        this.data.data = data.data || '';
      }

      this.caches.list = [];
      this.cache();
      this.divLayer.clear();
      this.overflow();
      this.render(true);
      this.parentElem.scrollLeft = 0;
      this.parentElem.scrollTop = 0;
      this.animate(true);
      this.openSocket();
      this.openMqtt();
    }
  }, {
    key: "openSocket",
    value: function openSocket(url) {
      this.closeSocket();

      if (url || this.data.websocket) {
        this.socket = new Socket(url || this.data.websocket, this.data);
      }
    }
  }, {
    key: "closeSocket",
    value: function closeSocket() {
      if (this.socket) {
        this.socket.close();
      }
    }
  }, {
    key: "openMqtt",
    value: function openMqtt(url, options) {
      this.closeMqtt();

      if (url || this.data.mqttUrl) {
        this.mqtt = new MQTT(url || this.data.mqttUrl, options || this.data.mqttOptions, this.data.mqttTopics, this.data);
      }
    }
  }, {
    key: "closeMqtt",
    value: function closeMqtt() {
      if (this.mqtt) {
        this.mqtt.close();
      }
    }
  }, {
    key: "overflow",
    value: function overflow() {
      var padding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
      var rect = this.getRect();
      var width = rect.width,
          height = rect.height;

      if (width < rect.ex) {
        width = rect.ex + padding;
      }

      if (width < this.canvas.width) {
        width = this.canvas.width;
      }

      if (height < rect.ey) {
        height = rect.ey + padding;
      }

      if (height < this.canvas.height) {
        height = this.canvas.height;
      }

      var size = {
        width: width,
        height: height
      };
      this.resize(size);
      return size;
    }
  }, {
    key: "setNodeText",
    value: function setNodeText() {
      this.inputObj.text = this.input.value;
      this.input.style.zIndex = '-1';
      this.input.style.left = '-1000px';
      this.input.style.width = '0';
      this.cache();
      this.offscreen.render();
      this.dispatch('setText', this.inputObj);
      this.inputObj = null;
    }
  }, {
    key: "getMoveIn",
    value: function getMoveIn(pt) {
      this.lastHoverNode = this.moveIn.hoverNode;
      this.lastHoverLine = this.moveIn.hoverLine;
      this.moveIn.type = MoveInType.None;
      this.moveIn.hoverNode = null;
      this.moveIn.lineControlPoint = null;
      this.moveIn.hoverLine = null;
      this.hoverLayer.hoverAnchorIndex = -1;

      if (!this.data.locked && !(this.activeLayer.pens.length === 1 && this.activeLayer.pens[0].type) && !this.activeLayer.locked() && this.activeLayer.rotateCPs[0] && this.activeLayer.rotateCPs[0].hit(pt, 15)) {
        this.moveIn.type = MoveInType.Rotate;
        var cursor = this.options.rotateCursor;
        this.divLayer.canvas.style.cursor = cursor.includes('/') ? "url(\"".concat(cursor, "\"), auto") : cursor;
        return;
      }

      if (this.activeLayer.pens.length > 1 && pointInRect(pt, this.activeLayer.sizeCPs)) {
        this.moveIn.type = MoveInType.Nodes;
      }

      if (!this.data.locked && !this.activeLayer.locked() && !this.options.hideSizeCP) {
        if (this.activeLayer.pens.length > 1 || !this.activeLayer.pens[0].type && !this.activeLayer.pens[0].hideSizeCP) {
          for (var i = 0; i < this.activeLayer.sizeCPs.length; ++i) {
            if (this.activeLayer.sizeCPs[i].hit(pt, 10)) {
              this.moveIn.type = MoveInType.ResizeCP;
              this.moveIn.activeAnchorIndex = i;
              this.divLayer.canvas.style.cursor = resizeCursors[i];
              return;
            }
          }
        }
      } // In active pen.


      if (!this.data.locked) {
        var _iterator6 = _createForOfIteratorHelper(this.activeLayer.pens),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var item = _step6.value;

            if (item instanceof Line && !item.locked) {
              for (var _i = 0; _i < item.controlPoints.length; ++_i) {
                if (!item.locked && item.controlPoints[_i].hit(pt, 10)) {
                  item.controlPoints[_i].id = _i;
                  this.moveIn.type = MoveInType.LineControlPoint;
                  this.moveIn.lineControlPoint = item.controlPoints[_i];
                  this.moveIn.hoverLine = item;
                  this.divLayer.canvas.style.cursor = 'pointer';
                  return;
                }
              }

              if (this.inLine(pt, item)) {
                return;
              }
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }

      this.divLayer.canvas.style.cursor = 'default';
      var len = this.data.pens.length;
      var inLine;

      for (var _i2 = len - 1; _i2 > -1; --_i2) {
        if (this.data.pens[_i2].type === PenType.Node && this.inNode(pt, this.data.pens[_i2])) {
          if (inLine && this.moveIn.type !== MoveInType.HoverAnchors) {
            this.inLine(pt, inLine);
          }

          return;
        } else if (this.data.pens[_i2].type === PenType.Line && this.inLine(pt, this.data.pens[_i2])) {
          // 优先判断是否在节点锚点上
          inLine = this.data.pens[_i2];
        }
      }
    }
  }, {
    key: "inChildNode",
    value: function inChildNode(pt, children) {
      if (!children) {
        return null;
      }

      var len = children.length;

      for (var i = len - 1; i > -1; --i) {
        var item = children[i];

        if (item.type === PenType.Line) {
          if (this.inLine(pt, item)) {
            return item;
          }

          continue;
        }

        var node = this.inChildNode(pt, item.children);

        if (node) {
          return node;
        }

        node = this.inNode(pt, item, true);

        if (node) {
          return node;
        }
      }

      return null;
    }
  }, {
    key: "inNode",
    value: function inNode(pt, node) {
      var inChild = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (this.data.locked === Lock.NoEvent || !node.visible || node.locked === Lock.NoEvent) {
        return null;
      }

      var child = this.inChildNode(pt, node.children);

      if (child) {
        if (this.moveIn.type < MoveInType.HoverAnchors) {
          if (child.type === PenType.Line) {
            this.moveIn.activeNode = node;
            this.moveIn.type = MoveInType.Nodes;
          } else if (child.stand) {
            this.moveIn.activeNode = child;
            this.moveIn.type = MoveInType.Nodes;
          } else {
            this.moveIn.activeNode = node;
            this.moveIn.type = MoveInType.Nodes;
          }
        }

        return child;
      }

      if (node.hitInSelf(pt)) {
        this.moveIn.hoverNode = node;
        this.moveIn.type = MoveInType.Nodes;

        if (!this.data.locked && !node.locked) {
          this.divLayer.canvas.style.cursor = 'move';
        } else {
          this.divLayer.canvas.style.cursor = this.options.hoverCursor;
        } // Too small


        if (!this.data.locked && !node.locked && !(this.options.hideAnchor || node.hideAnchor || node.rect.width < 20 || node.rect.height < 20)) {
          for (var j = 0; j < node.rotatedAnchors.length; ++j) {
            if (node.rotatedAnchors[j].hit(pt, this.options.anchorSize)) {
              if (!this.mouseDown && node.rotatedAnchors[j].mode === AnchorMode.In) {
                continue;
              }

              this.moveIn.type = MoveInType.HoverAnchors;
              this.moveIn.hoverAnchorIndex = j;
              this.hoverLayer.hoverAnchorIndex = j;
              this.divLayer.canvas.style.cursor = 'crosshair';
              break;
            }
          }

          if (this.options.autoAnchor && node.rect.center.hit(pt, this.options.anchorSize)) {
            this.moveIn.hoverNode = node;
            this.moveIn.type = MoveInType.AutoAnchor;
            this.divLayer.canvas.style.cursor = 'crosshair';
          }
        }

        if (!inChild) {
          this.moveIn.activeNode = this.moveIn.hoverNode;
        }

        return node;
      }

      if (this.options.hideAnchor || node.hideAnchor || this.data.locked || node.locked) {
        return null;
      }

      if (node.hitInSelf(pt, this.options.anchorSize)) {
        for (var _j = 0; _j < node.rotatedAnchors.length; ++_j) {
          if (node.rotatedAnchors[_j].hit(pt, this.options.anchorSize)) {
            if (!this.mouseDown && node.rotatedAnchors[_j].mode === AnchorMode.In) {
              continue;
            }

            this.moveIn.hoverNode = node;
            this.moveIn.type = MoveInType.HoverAnchors;
            this.moveIn.hoverAnchorIndex = _j;
            this.hoverLayer.hoverAnchorIndex = _j;
            this.divLayer.canvas.style.cursor = 'crosshair';

            if (!inChild) {
              this.moveIn.activeNode = node;
            }

            return node;
          }
        }
      }

      return null;
    }
  }, {
    key: "inLine",
    value: function inLine(point, line) {
      if (this.data.locked === Lock.NoEvent || !line.visible || line.locked === Lock.NoEvent) {
        return null;
      }

      if (line.from.hit(point, this.options.anchorSize)) {
        this.moveIn.type = MoveInType.LineFrom;
        this.moveIn.hoverLine = line;

        if (this.data.locked || line.locked) {
          this.divLayer.canvas.style.cursor = this.options.hoverCursor;
        } else {
          this.divLayer.canvas.style.cursor = 'move';
        }

        return line;
      }

      if (line.to.hit(point, this.options.anchorSize)) {
        this.moveIn.type = MoveInType.LineTo;
        this.moveIn.hoverLine = line;

        if (this.data.locked || line.locked) {
          this.divLayer.canvas.style.cursor = this.options.hoverCursor;
        } else {
          this.divLayer.canvas.style.cursor = 'move';
        }

        return line;
      }

      if (line.pointIn(point)) {
        this.moveIn.type = MoveInType.LineMove;
        this.moveIn.hoverLine = line;
        this.divLayer.canvas.style.cursor = this.options.hoverCursor;

        if (line.from.id || line.to.id) {
          this.moveIn.type = MoveInType.Line;
        }

        return line;
      }

      return null;
    }
  }, {
    key: "getLineDock",
    value: function getLineDock(point) {
      var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : AnchorMode.Default;
      this.hoverLayer.dockAnchor = null;

      var _iterator7 = _createForOfIteratorHelper(this.data.pens),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var item = _step7.value;

          if (item instanceof Node) {
            var pen = item.hit(point, 10);

            if (!pen) {
              continue;
            }

            if (pen.type === PenType.Line) {
              if (pen.from.hit(point, 10)) {
                point.x = pen.from.x;
                point.y = pen.from.y;
                this.hoverLayer.dockAnchor = pen.from;
                break;
              }

              if (pen.to.hit(point, 10)) {
                point.x = pen.to.x;
                point.y = pen.to.y;
                this.hoverLayer.dockAnchor = pen.to;
                break;
              }

              break;
            }

            this.hoverLayer.node = pen;

            if (this.options.autoAnchor && pen.rect.center.hit(point, 10)) {
              point.id = pen.id;
              point.autoAnchor = true;
              point.x = pen.rect.center.x;
              point.y = pen.rect.center.y;
              this.hoverLayer.dockAnchor = pen.rect.center;
            }

            for (var i = 0; i < pen.rotatedAnchors.length; ++i) {
              if (pen.rotatedAnchors[i].mode && pen.rotatedAnchors[i].mode !== mode) {
                continue;
              }

              if (pen.rotatedAnchors[i].hit(point, 10)) {
                point.id = pen.id;
                point.anchorIndex = i;
                point.autoAnchor = false;
                point.direction = pen.rotatedAnchors[i].direction;
                point.x = pen.rotatedAnchors[i].x;
                point.y = pen.rotatedAnchors[i].y;
                this.hoverLayer.dockAnchor = pen.rotatedAnchors[i];
                break;
              }
            }
          } else if (item instanceof Line) {
            if (item.id === this.hoverLayer.line.id) {
              continue;
            }

            if (item.from.hit(point, 10)) {
              point.x = item.from.x;
              point.y = item.from.y;
              this.hoverLayer.dockAnchor = item.from;
              break;
            }

            if (item.to.hit(point, 10)) {
              point.x = item.to.x;
              point.y = item.to.y;
              this.hoverLayer.dockAnchor = item.to;
              break;
            }

            if (item.controlPoints) {
              var _iterator8 = _createForOfIteratorHelper(item.controlPoints),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var cp = _step8.value;

                  if (cp.hit(point, 10)) {
                    point.x = cp.x;
                    point.y = cp.y;
                    this.hoverLayer.dockAnchor = cp;
                    break;
                  }
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
            }
          }

          if (this.hoverLayer.dockAnchor) {
            break;
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      return point;
    }
  }, {
    key: "getPensInRect",
    value: function getPensInRect(rect) {
      if (rect.width < 0) {
        rect.width = -rect.width;
        rect.x = rect.ex;
        rect.ex = rect.x + rect.width;
      }

      if (rect.height < 0) {
        rect.height = -rect.height;
        rect.y = rect.ey;
        rect.ey = rect.y + rect.height;
      }

      this.activeLayer.pens = [];

      var _iterator9 = _createForOfIteratorHelper(this.data.pens),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var item = _step9.value;

          if (item.locked === Lock.NoEvent) {
            continue;
          }

          if (item instanceof Node) {
            if (rect.hitByRect(item.rect)) {
              this.activeLayer.add(item);
            }
          }

          if (item instanceof Line) {
            if (rect.hit(item.from) && rect.hit(item.to)) {
              this.activeLayer.add(item);
            }
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
  }, {
    key: "getAngle",
    value: function getAngle(pt) {
      if (pt.x === this.activeLayer.rect.center.x) {
        return pt.y <= this.activeLayer.rect.center.y ? 0 : 180;
      }

      if (pt.y === this.activeLayer.rect.center.y) {
        return pt.x < this.activeLayer.rect.center.x ? 270 : 90;
      }

      var x = pt.x - this.activeLayer.rect.center.x;
      var y = pt.y - this.activeLayer.rect.center.y;
      var angle = Math.atan(Math.abs(x / y)) / (2 * Math.PI) * 360;

      if (x > 0 && y > 0) {
        angle = 180 - angle;
      } else if (x < 0 && y > 0) {
        angle += 180;
      } else if (x < 0 && y < 0) {
        angle = 360 - angle;
      }

      if (this.activeLayer.pens.length === 1) {
        return angle - this.activeLayer.pens[0].rotate;
      }

      return angle;
    }
  }, {
    key: "showInput",
    value: function showInput(item, force) {
      if (!force && (this.data.locked || item.locked || item.hideInput || this.options.hideInput)) {
        return;
      }

      this.inputObj = item;
      var textRect = item.getTextRect();
      this.input.value = item.text || '';
      this.input.style.left = textRect.x + 'px';
      this.input.style.top = textRect.y + 'px';
      this.input.style.width = textRect.width + 'px';
      this.input.style.height = textRect.height + 'px';
      this.input.style.zIndex = '1000';

      if (item.rotate / 360) {
        this.input.style.transform = "rotate(".concat(item.rotate, "deg)");
      } else {
        this.input.style.transform = null;
      }

      this.input.focus();
    }
  }, {
    key: "getRect",
    value: function getRect(pens) {
      if (!pens) {
        pens = this.data.pens;
      }

      return _getRect(pens);
    } // Get a dock rect for moving nodes.

  }, {
    key: "getDockPos",
    value: function getDockPos(offsetX, offsetY, noDock) {
      this.hoverLayer.dockLineX = 0;
      this.hoverLayer.dockLineY = 0;
      var offset = {
        x: 0,
        y: 0
      };

      if (noDock || this.options.disableDockLine) {
        return offset;
      }

      var x = 0;
      var y = 0;
      var disX = dockOffset;
      var disY = dockOffset;

      var _iterator10 = _createForOfIteratorHelper(this.activeLayer.dockWatchers),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var activePt = _step10.value;

          var _iterator11 = _createForOfIteratorHelper(this.data.pens),
              _step11;

          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var item = _step11.value;

              if (!(item instanceof Node) || this.activeLayer.has(item) || item.name === 'text') {
                continue;
              }

              if (!item.dockWatchers) {
                item.getDockWatchers();
              }

              var _iterator12 = _createForOfIteratorHelper(item.dockWatchers),
                  _step12;

              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var p = _step12.value;
                  x = Math.abs(p.x - activePt.x - offsetX);

                  if (x < disX) {
                    disX = -99999;
                    offset.x = p.x - activePt.x;
                    this.hoverLayer.dockLineX = p.x | 0;
                  }

                  y = Math.abs(p.y - activePt.y - offsetY);

                  if (y < disY) {
                    disY = -99999;
                    offset.y = p.y - activePt.y;
                    this.hoverLayer.dockLineY = p.y | 0;
                  }
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      return offset;
    }
  }, {
    key: "cache",
    value: function cache() {
      if (this.caches.index < this.caches.list.length - 1) {
        this.caches.list.splice(this.caches.index + 1, this.caches.list.length - this.caches.index - 1);
      }

      var data = new TopologyData(this.data);
      this.caches.list.push(data);

      if (this.caches.list.length > this.options.cacheLen) {
        this.caches.list.shift();
      }

      this.caches.index = this.caches.list.length - 1;
    }
  }, {
    key: "cacheReplace",
    value: function cacheReplace(pens) {
      if (pens && pens.length) {
        var needPenMap = {};

        for (var i = 0, len = pens.length; i < len; i++) {
          var pen = pens[i];
          var id = pen.id;

          if (pen instanceof Node) {
            needPenMap[id] = new Node(pen);
          } else if (pen instanceof Line) {
            needPenMap[id] = new Line(pen);
          }
        }

        var cacheListData = this.caches.list[0];

        if (!cacheListData) {
          return;
        }

        for (var _i3 = 0, _len = cacheListData.pens.length; _i3 < _len; _i3++) {
          var _id = cacheListData.pens[_i3].id;

          if (needPenMap[_id]) {
            cacheListData.pens[_i3] = needPenMap[_id];
          }
        }
      }
    }
  }, {
    key: "undo",
    value: function undo() {
      var noRedo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var force = arguments.length > 1 ? arguments[1] : undefined;

      if (!force && this.data.locked || this.caches.index < 1) {
        return;
      }

      this.divLayer.clear(true);
      var data = new TopologyData(this.caches.list[--this.caches.index]);
      this.data.pens.splice(0, this.data.pens.length);
      this.data.pens.push.apply(this.data.pens, data.pens);
      this.render(true);
      this.divLayer.render();

      if (noRedo) {
        this.caches.list.splice(this.caches.index + 1, this.caches.list.length - this.caches.index - 1);
      }

      this.dispatch('undo', this.data);
    }
  }, {
    key: "redo",
    value: function redo(force) {
      if (!force && this.data.locked || this.caches.index > this.caches.list.length - 2) {
        return;
      }

      this.divLayer.clear(true);
      var data = new TopologyData(this.caches.list[++this.caches.index]);
      this.data.pens.splice(0, this.data.pens.length);
      this.data.pens.push.apply(this.data.pens, data.pens);
      this.render(true);
      this.divLayer.render();
      this.dispatch('redo', this.data);
    }
  }, {
    key: "toImage",
    value: function toImage() {
      var padding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'image/png';
      var quality = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var rect = this.getRect();
      var p = formatPadding(padding || 0);
      rect.x -= p[3];
      rect.y -= p[0];
      rect.width += p[3] + p[1];
      rect.height += p[0] + p[2]; // const dpi = this.offscreen.getDpiRatio();
      // const dpiRect = rect.clone();
      // dpiRect.scale(dpi);

      var canvas = document.createElement('canvas');
      canvas.width = rect.width;
      canvas.height = rect.height;
      var ctx = canvas.getContext('2d'); // ctx.scale(dpi, dpi);

      if (type && type !== 'image/png') {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      if (this.data.bkColor || this.options.bkColor) {
        ctx.fillStyle = this.data.bkColor || this.options.bkColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      if (this.data.bkImage) {
        ctx.drawImage(this.canvas.bkImg, 0, 0, canvas.width, canvas.height);
      }

      var _iterator13 = _createForOfIteratorHelper(this.data.pens),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var item = _step13.value;
          var pen = void 0;

          if (item.type) {
            pen = new Line(item);
          } else {
            pen = new Node(item);
          }

          pen.translate(-rect.x, -rect.y);
          pen.render(ctx);
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }

      if (callback) {
        canvas.toBlob(callback);
      }

      return canvas.toDataURL(type, quality);
    }
  }, {
    key: "saveAsImage",
    value: function saveAsImage(name) {
      var padding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'image/png';
      var quality = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var a = document.createElement('a');
      a.setAttribute('download', name || 'le5le.topology.png');
      a.setAttribute('href', this.toImage(padding, type, quality));
      var evt = document.createEvent('MouseEvents');
      evt.initEvent('click', true, true);
      a.dispatchEvent(evt);
    } // param:
    //       - string ->idOrTag
    //       - Pen[]  -> will deletes

  }, {
    key: "delete",
    value: function _delete(param, force) {
      if (this.data.locked && !force) {
        return;
      }

      var deleted = [];

      if (typeof param === 'string') {
        deleted = del(param, this.data.pens);
      } else {
        var pens = param || this.activeLayer.pens;

        for (var i = 0; i < pens.length; i++) {
          var item = pens[i];

          if (del(item.id, this.data.pens).length) {
            deleted.push(item);
            --i;

            if (item.type === PenType.Node) {
              this.divLayer.removeDiv(item);
            }

            if (this.options.disableEmptyLine) {
              this.delEmptyLines(item.id);
            }

            this.animateLayer.pens.delete(item.id);
          }
        }
      }

      if (deleted.length) {
        this.render(true);
        this.cache();
        this.dispatch('delete', deleted);
      }
    }
  }, {
    key: "delEmptyLines",
    value: function delEmptyLines(deleteedId) {
      for (var i = 0; i < this.data.pens.length; i++) {
        if (this.data.pens[i].type !== PenType.Line) {
          continue;
        }

        var line = this.data.pens[i];

        if (!line.from.id || !line.to.id || line.from.id === deleteedId || line.to.id === deleteedId) {
          this.data.pens.splice(i, 1);
          this.animateLayer.pens.delete(line.id);
          --i;
        }
      }
    }
  }, {
    key: "cut",
    value: function cut() {
      if (this.data.locked) {
        return;
      }

      this.clipboard = new TopologyData({
        pens: []
      });

      for (var i = 0; i < this.activeLayer.pens.length; i++) {
        var pen = this.activeLayer.pens[i];
        this.clipboard.pens[i] = pen.clone();
        var found = this.findIndex(pen);

        if (found > -1) {
          if (pen.type === PenType.Node) {
            this.divLayer.removeDiv(this.data.pens[found]);
          }

          this.data.pens.splice(found, 1);
          --i;
        }
      }

      this.cache();
      this.activeLayer.clear();
      this.hoverLayer.node = null;
      this.moveIn.hoverLine = null;
      this.moveIn.hoverNode = null;
      this.render();
      this.dispatch('delete', this.clipboard.pens);
    }
  }, {
    key: "copy",
    value: function copy() {
      this.clipboard = new TopologyData({
        pens: []
      });

      var _iterator14 = _createForOfIteratorHelper(this.activeLayer.pens),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var pen = _step14.value;
          this.clipboard.pens.push(pen.clone());
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }

      this.dispatch('copy', this.clipboard);
    }
  }, {
    key: "paste",
    value: function paste() {
      if (!this.clipboard || this.data.locked) {
        return;
      }

      this.hoverLayer.node = null;
      this.hoverLayer.line = null;
      this.activeLayer.pens = [];
      var idMaps = {};

      var _iterator15 = _createForOfIteratorHelper(this.clipboard.pens),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var pen = _step15.value;

          if (pen.type === PenType.Node) {
            this.newId(pen, idMaps);
            pen.rect.x += 20;
            pen.rect.ex += 20;
            pen.rect.y += 20;
            pen.rect.ey += 20;
            pen.init();
          }

          if (pen instanceof Line) {
            pen.id = s8();
            pen.from = new Point(pen.from.x + 20, pen.from.y + 20, pen.from.direction, pen.from.anchorIndex, idMaps[pen.from.id]);
            pen.to = new Point(pen.to.x + 20, pen.to.y + 20, pen.to.direction, pen.to.anchorIndex, idMaps[pen.to.id]);
            var controlPoints = [];

            var _iterator16 = _createForOfIteratorHelper(pen.controlPoints),
                _step16;

            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var pt = _step16.value;
                controlPoints.push(new Point(pt.x + 20, pt.y + 20));
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }

            pen.controlPoints = controlPoints;
          }

          this.data.pens.push(pen);
          this.activeLayer.add(pen);
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }

      this.render();
      this.animate(true);
      this.cache();
      this.copy();

      if (this.clipboard.pens.length > 1) {
        this.dispatch('paste', {
          pens: this.clipboard.pens
        });
      } else if (this.activeLayer.pens.length > 0) {
        this.dispatch('paste', this.activeLayer.pens[0]);
      }

      this.overflow();
    }
  }, {
    key: "newId",
    value: function newId(node, idMaps) {
      var old = node.id;
      node.id = s8(); // 解决图表组件复制粘贴只显示一个问题

      node.elementId = null;
      idMaps[old] = node.id;

      if (node.children) {
        var _iterator17 = _createForOfIteratorHelper(node.children),
            _step17;

        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            var item = _step17.value;
            this.newId(item, idMaps);
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      var autoplay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.animateLayer.readyPlay(null, autoplay);
      this.animateLayer.animate();
    }
  }, {
    key: "updateProps",
    value: function updateProps() {
      var cache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var pens = arguments.length > 1 ? arguments[1] : undefined;

      if (!pens) {
        pens = this.activeLayer.pens;
      }

      var _iterator18 = _createForOfIteratorHelper(pens),
          _step18;

      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var pen = _step18.value;

          if (pen instanceof Node) {
            if (pen.autoRect) {
              var ctx = this.canvas.canvas.getContext('2d');
              var rect = calcTextRect(ctx, pen);
              pen.rect.width = rect.width + pen.lineWidth * 2;
              pen.rect.height = rect.height;
            }

            pen.init();
            pen.initRect();
          }
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }

      this.activeLayer.updateLines(pens);
      this.activeLayer.calcControlPoints();
      this.activeLayer.saveNodeRects();
      this.render(); // tslint:disable-next-line: no-unused-expression

      cache && this.cache();
    }
  }, {
    key: "lock",
    value: function lock(_lock) {
      this.data.locked = _lock;

      var _iterator19 = _createForOfIteratorHelper(this.data.pens),
          _step19;

      try {
        for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
          var item = _step19.value;
          item.addToDiv && item.addToDiv();
        }
      } catch (err) {
        _iterator19.e(err);
      } finally {
        _iterator19.f();
      }

      this.dispatch('locked', this.data.locked);
    }
  }, {
    key: "lockPens",
    value: function lockPens(pens, lock) {
      var _iterator20 = _createForOfIteratorHelper(this.data.pens),
          _step20;

      try {
        for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
          var item = _step20.value;

          var _iterator21 = _createForOfIteratorHelper(pens),
              _step21;

          try {
            for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
              var pen = _step21.value;

              if (item.id === pen.id) {
                item.locked = lock;
                item.addToDiv && item.addToDiv();
                break;
              }
            }
          } catch (err) {
            _iterator21.e(err);
          } finally {
            _iterator21.f();
          }
        }
      } catch (err) {
        _iterator20.e(err);
      } finally {
        _iterator20.f();
      }

      this.dispatch('lockPens', {
        pens: pens,
        lock: lock
      });
    }
  }, {
    key: "up",
    value: function up(pen, pens) {
      if (!pens) {
        pens = this.data.pens;
      }

      var i = this.findIndex(pen, pens);

      if (i > -1 && i !== pens.length - 1) {
        pens.splice(i + 2, 0, pens[i]);
        pens.splice(i, 1);
      } else {
        var parent = _getParent(pens, pen);

        if (!parent) {
          return;
        }

        this.up(pen, parent.children);
      }
    }
  }, {
    key: "top",
    value: function top(pen, pens) {
      if (!pens) {
        pens = this.data.pens;
      }

      var i = this.findIndex(pen, pens);

      if (i > -1) {
        pens.push(pens[i]);
        pens.splice(i, 1);
      } else {
        var parent = _getParent(pens, pen);

        if (!parent) {
          return;
        }

        this.top(pen, parent.children);
      }
    }
  }, {
    key: "down",
    value: function down(pen, pens) {
      if (!pens) {
        pens = this.data.pens;
      }

      var i = this.findIndex(pen, pens);

      if (i > -1 && i !== 0) {
        pens.splice(i - 1, 0, pens[i]);
        pens.splice(i + 1, 1);
      } else {
        var parent = _getParent(pens, pen);

        if (!parent) {
          return;
        }

        this.down(pen, parent.children);
      }
    }
  }, {
    key: "bottom",
    value: function bottom(pen, pens) {
      if (!pens) {
        pens = this.data.pens;
      }

      var i = this.findIndex(pen, pens);

      if (i > -1) {
        pens.unshift(pens[i]);
        pens.splice(i + 1, 1);
      } else {
        var parent = _getParent(pens, pen);

        if (!parent) {
          return;
        }

        this.bottom(pen, parent.children);
      }
    }
  }, {
    key: "getParent",
    value: function getParent(pen) {
      return _getParent(this.data.pens, pen);
    }
  }, {
    key: "combine",
    value: function combine(pens) {
      var stand = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!pens) {
        pens = this.activeLayer.pens;
      }

      var rect = this.getRect(pens);

      var _iterator22 = _createForOfIteratorHelper(pens),
          _step22;

      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
          var item = _step22.value;
          var i = this.findIndex(item);

          if (i > -1) {
            this.data.pens.splice(i, 1);
          }
        }
      } catch (err) {
        _iterator22.e(err);
      } finally {
        _iterator22.f();
      }

      var node = new Node({
        name: 'combine',
        rect: new Rect(rect.x, rect.y, rect.width, rect.height),
        text: '',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        strokeStyle: 'transparent',
        children: []
      }); // for (let i = 0; i < pens.length; ++i) {
      //     if (pens[i].type === PenType.Node && rect.width === pens[i].rect.width && rect.height === pens[i].rect.height) {
      //         node = pens[i] as Node;
      //         if (!node.children) {
      //             node.children = [];
      //         }
      //         pens.splice(i, 1);
      //         break;
      //     }
      // }

      var _iterator23 = _createForOfIteratorHelper(pens),
          _step23;

      try {
        for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
          var _item3 = _step23.value;
          _item3.stand = stand;
          _item3.parentId = node.id;

          _item3.calcRectInParent(node);

          node.children.push(_item3);
        }
      } catch (err) {
        _iterator23.e(err);
      } finally {
        _iterator23.f();
      }

      this.data.pens.push(node);
      this.activeLayer.setPens([node]);
      this.dispatch('node', node);
      this.cache();
    }
  }, {
    key: "uncombine",
    value: function uncombine(node) {
      if (!node) {
        node = this.activeLayer.pens[0];
      }

      if (!(node instanceof Node)) {
        return;
      }

      var _iterator24 = _createForOfIteratorHelper(node.children),
          _step24;

      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
          var item = _step24.value;
          item.parentId = undefined;
          item.rectInParent = undefined;
          item.locked = Lock.None;
          this.data.pens.push(item);
        }
      } catch (err) {
        _iterator24.e(err);
      } finally {
        _iterator24.f();
      }

      var i = this.findIndex(node);

      if (i > -1 && node.name === 'combine') {
        this.data.pens.splice(i, 1);
      } else {
        node.children = null;
      }

      this.cache();
      this.activeLayer.clear();
      this.hoverLayer.clear();
      this.dispatch('space', null);
    }
  }, {
    key: "find",
    value: function find(idOrTag, pens) {
      if (!pens) {
        pens = this.data.pens;
      }

      return _find(idOrTag, pens);
    }
  }, {
    key: "findIndex",
    value: function findIndex(pen, pens) {
      if (!pens) {
        pens = this.data.pens;
      }

      return pens.findIndex(function (item) {
        return item.id === pen.id;
      });
    }
  }, {
    key: "translate",
    value: function translate(x, y, process, noNotice) {
      if (!process) {
        this.lastTranlated.x = 0;
        this.lastTranlated.y = 0;
      }

      var offsetX = x - this.lastTranlated.x;
      var offsetY = y - this.lastTranlated.y;
      this.lastTranlated.x = x;
      this.lastTranlated.y = y;

      if (this.options.isApp) {
        var _iterator25 = _createForOfIteratorHelper(this.data.pens),
            _step25;

        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var item = _step25.value;
            item.translate(offsetX, offsetY);
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }

        this.animateLayer.pens.forEach(function (pen) {
          if (pen instanceof Line) {
            pen.translate(offsetX, offsetY);
          }
        });
        Store.set(this.generateStoreKey('LT:updateLines'), this.data.pens);
        this.render();
        this.cache();
      }

      !noNotice && this.dispatch('translate', {
        x: x,
        y: y,
        offsetX: offsetX,
        offsetY: offsetY,
        process: process
      });
    } // scale for scaled canvas:
    //   > 1, expand
    //   < 1, reduce

  }, {
    key: "scale",
    value: function scale(_scale, center) {
      if (this.data.scale * _scale < this.options.minScale || this.data.scale * _scale > this.options.maxScale) {
        return;
      }

      this.data.scale = Math.round(this.data.scale * _scale * 100) / 100;
      !center && (center = this.getRect().center); // cancel node scale
      // for (const item of this.data.pens) {
      //     item.scale(scale, center);
      // }
      // this.animateLayer.pens.forEach((pen) => {
      //     if (pen instanceof Line) {
      //         pen.scale(scale, center);
      //     }
      // });

      this.scaleContainer(this.data.scale);
      Store.set(this.generateStoreKey('LT:updateLines'), this.data.pens);
      Store.set(this.generateStoreKey('LT:scale'), this.data.scale);
      this.render();
      this.cache();
      this.dispatch('scale', this.data.scale);
    } // scale for origin canvas:

  }, {
    key: "scaleTo",
    value: function scaleTo(scale, center) {
      // 禁用组件缩放
      // this.scale(scale / this.data.scale, center);
      this.scaleContainer(scale);
      this.data.scale = scale;
    }
  }, {
    key: "scaleContainer",
    value: function scaleContainer(scale) {
      var x = (scale * this.canvasPos.width - scale * this.canvasPos.width) / 2;
      var y = (scale * this.canvasPos.height - scale * this.canvasPos.height) / 2;
      var containerStyle = {
        transformOrigin: "center center",
        transform: "translate(".concat(x, "px,").concat(y, "px) scale(").concat(scale, ")")
      };
      var canvasContainer = this.divLayer.canvas.parentElement.parentElement;
      canvasContainer.style.transformOrigin = containerStyle.transformOrigin;
      canvasContainer.style.transform = containerStyle.transform;
    }
  }, {
    key: "round",
    value: function round() {
      var _iterator26 = _createForOfIteratorHelper(this.data.pens),
          _step26;

      try {
        for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
          var item = _step26.value;

          if (item instanceof Node) {
            item.round();
          }
        }
      } catch (err) {
        _iterator26.e(err);
      } finally {
        _iterator26.f();
      }
    }
  }, {
    key: "centerView",
    value: function centerView(padding) {
      if (!this.hasView()) return;
      var rect = this.getRect();
      var viewCenter = this.getViewCenter(padding);
      var center = rect.center;
      this.translate(viewCenter.x - center.x, viewCenter.y - center.y);
      var parentElem = this.canvas.parentElem;
      var x = (parentElem.scrollWidth - parentElem.offsetWidth) / 2;
      var y = (parentElem.scrollHeight - parentElem.offsetHeight) / 2;
      parentElem.scrollTo(x, y);
      return true;
    }
  }, {
    key: "fitView",
    value: function fitView(viewPadding) {
      if (!this.hasView()) return; // 1. 重置画布尺寸为容器尺寸

      var parentElem = this.canvas.parentElem;
      var width = parentElem.offsetWidth,
          height = parentElem.offsetHeight;
      this.resize({
        width: width,
        height: height
      }); // 2. 图形居中

      this.centerView(viewPadding); // 3. 获取设置的留白值

      var padding = formatPadding(viewPadding || this.options.viewPadding); // 4. 获取图形尺寸

      var rect = this.getRect(); // 6. 计算缩放比

      var w = (width - padding[1] - padding[3]) / rect.width;
      var h = (height - padding[0] - padding[2]) / rect.height;
      var ratio = w;

      if (w > h) {
        ratio = h;
      }

      this.scale(ratio);
    }
  }, {
    key: "hasView",
    value: function hasView() {
      var rect = this.getRect();
      return !(rect.width === 99999 || rect.height === 99999);
    }
  }, {
    key: "getViewCenter",
    value: function getViewCenter(viewPadding) {
      var padding = formatPadding(viewPadding || this.options.viewPadding);
      var _this$canvas = this.canvas,
          width = _this$canvas.width,
          height = _this$canvas.height;
      return {
        x: (width - padding[1] - padding[3]) / 2 + padding[3],
        y: (height - padding[0] - padding[2]) / 2 + padding[0]
      };
    }
  }, {
    key: "generateStoreKey",
    value: function generateStoreKey(key) {
      return "".concat(this.id, "-").concat(key);
    }
  }, {
    key: "createMarkdownTip",
    value: function createMarkdownTip() {
      this.tipMarkdown = document.createElement('div');
      this.tipMarkdown.style.position = 'fixed';
      this.tipMarkdown.style.zIndex = '-1';
      this.tipMarkdown.style.left = '-9999px';
      this.tipMarkdown.style.width = '260px';
      this.tipMarkdown.style.outline = 'none';
      this.tipMarkdown.style.border = '1px solid #333';
      this.tipMarkdown.style.backgroundColor = 'rgba(0,0,0,.7)';
      this.tipMarkdown.style.color = '#fff';
      this.tipMarkdown.style.padding = '10px 15px';
      this.tipMarkdown.style.overflowY = 'auto';
      this.tipMarkdown.style.minHeight = '30px';
      this.tipMarkdown.style.maxHeight = '260px';
      document.body.appendChild(this.tipMarkdown);
    }
  }, {
    key: "showTip",
    value: function showTip(data, pos) {
      if (!data || data.id === this.tip || this.data.tooltip === false || this.data.tooltip === 0) {
        return;
      }

      if (data.title) {
        this.divLayer.canvas.title = data.title;
        this.tip = data.id;
        return;
      }

      if (data.tipId) {
        this.tipElem = document.getElementById(data.tipId);
      }

      var elem = this.tipElem;

      if (data.markdown) {
        elem = this.tipMarkdown;
        var marked = window.marked;

        if (marked) {
          this.tipMarkdown.innerHTML = marked(data.markdown);
        } else {
          this.tipMarkdown.innerHTML = data.markdown;
        }

        var a = this.tipMarkdown.getElementsByTagName('A');

        for (var i = 0; i < a.length; ++i) {
          a[i].setAttribute('target', '_blank');
        }
      }

      if (!elem) {
        return;
      }

      var parentRect = this.parentElem.getBoundingClientRect();
      var elemRect = elem.getBoundingClientRect();
      var x = (parentRect.left || parentRect.x) + data.rect.x;
      var y = pos.y + (parentRect.top || parentRect.y);

      if (data instanceof Node) {
        y = (parentRect.top || parentRect.y) + data.rect.ey;
      }

      x -= this.parentElem.scrollLeft;
      y -= this.parentElem.scrollTop;

      if (x < 0) {
        x = 0;
      }

      if (x + elemRect.width > document.body.clientWidth) {
        x = document.body.clientWidth - elemRect.width;
      }

      if (y + elemRect.height > document.body.clientHeight) {
        y = document.body.clientHeight - elemRect.height;
      }

      elem.style.display = 'block';
      elem.style.position = 'fixed';
      elem.style.left = x + 'px';
      elem.style.top = y + 'px';
      elem.style.zIndex = '100';
      this.tip = data.id;
      this.dispatch('tip', elem);
    }
  }, {
    key: "hideTip",
    value: function hideTip() {
      if (!this.tip) {
        return;
      }

      this.tipMarkdown.style.left = '-9999px';
      this.tipMarkdown.style.zIndex = '-1';

      if (this.tipElem) {
        this.tipElem.style.left = '-9999px';
        this.tipElem.style.zIndex = '-1';
        this.tipElem = null;
      }

      this.divLayer.canvas.title = '';
      this.tip = '';
    }
  }, {
    key: "scroll",
    value: function scroll(x, y) {
      var _this6 = this;

      if (this.scrolling) {
        return;
      }

      this.scrolling = true;
      this.parentElem.scrollLeft += x;
      this.parentElem.scrollTop += y;
      setTimeout(function () {
        _this6.scrolling = false;
      }, 700);
    }
  }, {
    key: "toComponent",
    value: function toComponent(pens) {
      if (!pens) {
        pens = this.data.pens;
      }

      var rect = this.getRect(pens);
      var node = new Node({
        name: 'combine',
        rect: new Rect(rect.x, rect.y, rect.width, rect.height),
        text: '',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        strokeStyle: 'transparent',
        children: []
      });

      var _iterator27 = _createForOfIteratorHelper(pens),
          _step27;

      try {
        for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
          var item = _step27.value;

          if (item.type === PenType.Node && rect.width === item.rect.width && rect.height === item.rect.height) {
            node = item;

            if (!node.children) {
              node.children = [];
            }

            break;
          }
        }
      } catch (err) {
        _iterator27.e(err);
      } finally {
        _iterator27.f();
      }

      var _iterator28 = _createForOfIteratorHelper(pens),
          _step28;

      try {
        for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
          var _item4 = _step28.value;

          if (_item4 !== node) {
            _item4.parentId = node.id;

            _item4.calcRectInParent(node);

            var nodeItem = _.cloneDeep(_item4);

            nodeItem.elementLoaded = false;
            nodeItem.elementRendered = false;
            nodeItem.elementId = null;
            delete nodeItem.id;
            node.children.push(nodeItem);
          }
        } // 解决一个组件不能自定义组件的问题

      } catch (err) {
        _iterator28.e(err);
      } finally {
        _iterator28.f();
      }

      if (pens.length == 1) {
        node = _.cloneDeep(pens[0]);
        node.elementLoaded = false;
        node.elementRendered = false;
        node.elementId = null;
        delete node.id;
      } // 不知道什么原因，组件复制操作后，有图片的组合组件name=image，这里强制赋值weicombine


      node.name = 'combine';
      return node;
    }
  }, {
    key: "clearBkImg",
    value: function clearBkImg() {
      this.canvas.clearBkImg();
    }
  }, {
    key: "dispatch",
    value: function dispatch(event, data) {
      if (this.options.on) {
        this.options.on(event, data);
      }

      this.fire(event, data);
      return this;
    }
  }, {
    key: "on",
    value: function on(eventType, handler) {
      this._emitter.on(eventType, handler);

      return this;
    }
  }, {
    key: "off",
    value: function off(eventType, handler) {
      this._emitter.off(eventType, handler);

      return this;
    }
  }, {
    key: "fire",
    value: function fire(eventType, params) {
      this._emitter.emit(eventType, params);

      return this;
    }
  }, {
    key: "getValue",
    value: function getValue(idOrTag) {
      var attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'text';
      var pen;
      this.data.pens.forEach(function (item) {
        if (item.id === idOrTag || item.tags.indexOf(idOrTag) > -1) {
          pen = item;
          return;
        }
      });
      return pen[attr];
    }
  }, {
    key: "setValue",
    value: function setValue(idOrTag, val) {
      var attr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'text';
      this.data.pens.forEach(function (item) {
        if (item.id === idOrTag || item.tags.indexOf(idOrTag) > -1) {
          item[attr] = val;
        }
      });
    }
  }, {
    key: "setLineName",
    value: function setLineName(name) {
      var render = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.data.pens.forEach(function (pen) {
        if (pen.type) {
          pen.name = name;
          pen.calcControlPoints();
        }
      });
      render && this.render();
    }
  }, {
    key: "setColor",
    value: function setColor(color) {
      this.options.color = color;
      Store.set(this.generateStoreKey('LT:color'), color);
      this.options.font.color = color;
      Store.set(this.generateStoreKey('LT:fontColor'), color);
    }
  }, {
    key: "setFontColor",
    value: function setFontColor(color) {
      this.options.font.color = color;
      Store.set(this.generateStoreKey('LT:fontColor'), color);
    }
  }, {
    key: "setIconColor",
    value: function setIconColor(color) {
      Store.set(this.generateStoreKey('LT:iconColor'), color);
    }
  }, {
    key: "pureData",
    value: function pureData() {
      var _this7 = this;

      var data = JSON.parse(JSON.stringify(this.data));
      data.pens.forEach(function (pen) {
        for (var key in pen) {
          if (pen[key] === null || pen[key] === undefined || pen[key] === '') {
            delete pen[key];
          }
        }

        delete pen.TID;
        delete pen.animateCycleIndex;
        delete pen.img;
        delete pen.lastImage;
        delete pen.imgNaturalWidth;
        delete pen.imgNaturalHeight;
        delete pen.anchors;
        delete pen.rotatedAnchors;
        delete pen.dockWatchers;
        delete pen.elementLoaded;
        delete pen.elementRendered;

        _this7.pureDataChildren(pen);
      });
      return data;
    }
  }, {
    key: "pureDataChildren",
    value: function pureDataChildren(data) {
      var _this8 = this;

      if (!data.children) {
        return;
      }

      data.children.forEach(function (pen) {
        for (var key in pen) {
          if (pen[key] === null || pen[key] === undefined || pen[key] === '') {
            delete pen[key];
          }
        }

        delete pen.TID;
        delete pen.animateCycleIndex;
        delete pen.img;
        delete pen.lastImage;
        delete pen.imgNaturalWidth;
        delete pen.imgNaturalHeight;
        delete pen.anchors;
        delete pen.rotatedAnchors;
        delete pen.dockWatchers;
        delete pen.elementLoaded;
        delete pen.elementRendered;

        _this8.pureDataChildren(pen);
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.subcribe.unsubscribe();
      this.subcribeRender.unsubscribe();
      this.subcribeImage.unsubscribe();
      this.subcribeAnimateEnd.unsubscribe();
      this.subcribeAnimateMoved.unsubscribe();
      this.subcribeMediaEnd.unsubscribe();
      this.animateLayer.destroy();
      this.divLayer.destroy();
      document.body.removeChild(this.tipMarkdown);
      window.removeEventListener('resize', this.winResize);
      this.parentElem.removeEventListener('scroll', this.onScroll);
      window.removeEventListener('scroll', this.onScroll);
      document.removeEventListener('gesturestart', this.preventDefault);

      switch (this.options.keydown) {
        case KeydownType.Document:
          document.removeEventListener('keydown', this.onkeydown);
          break;

        case KeydownType.Canvas:
          this.divLayer.canvas.removeEventListener('keydown', this.onkeydown);
          break;
      }

      this.closeSocket();
      this.closeMqtt();
      window.topology = null;
    }
  }]);

  return Topology;
}();