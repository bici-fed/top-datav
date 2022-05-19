"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconRectFns = exports.drawNodeFns = exports.drawLineFns = exports.drawArrowFns = exports.anchorsFns = void 0;
exports.registerArrow = registerArrow;
exports.registerLine = registerLine;
exports.registerNode = registerNode;
exports.textRectFns = void 0;

var _rectangle = require("./nodes/rectangle");

var _circle = require("./nodes/circle");

var _triangle = require("./nodes/triangle");

var _diamond = require("./nodes/diamond");

var _arrow = require("./nodes/arrow");

var _text = require("./nodes/text");

var _line = require("./nodes/line");

var _triangle2 = require("./nodes/triangle.anchor");

var _arrow2 = require("./nodes/arrow.anchor");

var _line2 = require("./nodes/line.anchor");

var _circle2 = require("./nodes/circle.rect");

var _triangle3 = require("./nodes/triangle.rect");

var _diamond2 = require("./nodes/diamond.rect");

var _arrow3 = require("./nodes/arrow.rect");

var _line3 = require("./nodes/line.rect");

var _line4 = require("./lines/line");

var _polyline = require("./lines/polyline");

var _curve = require("./lines/curve");

var _mind = require("./lines/mind");

var _triangle4 = require("./arrows/triangle");

var _diamond3 = require("./arrows/diamond");

var _circle3 = require("./arrows/circle");

var _circle4 = require("./nodes/circle.anchor");

var _line5 = require("./arrows/line");

var _pentagon = require("./nodes/pentagon");

var _pentagon2 = require("./nodes/pentagon.rect");

var _pentagon3 = require("./nodes/pentagon.anchor");

var _hexagon = require("./nodes/hexagon");

var _hexagon2 = require("./nodes/hexagon.anchor");

var _hexagon3 = require("./nodes/hexagon.rect");

var _pentagram = require("./nodes/pentagram");

var _pentagram2 = require("./nodes/pentagram.anchor");

var _pentagram3 = require("./nodes/pentagram.rect");

var _cloud = require("./nodes/cloud");

var _cloud2 = require("./nodes/cloud.anchor");

var _cloud3 = require("./nodes/cloud.rect");

var _message = require("./nodes/message");

var _message2 = require("./nodes/message.rect");

var _message3 = require("./nodes/message.anchor");

var _file = require("./nodes/file");

var _image = require("./nodes/image.rect");

var _cube = require("./nodes/cube");

var _cube2 = require("./nodes/cube.anchor");

var _cube3 = require("./nodes/cube.rect");

var _people = require("./nodes/people");

var _people2 = require("./nodes/people.rect");

var _rectangle2 = require("./nodes/rectangle.rect");

// Functions of drawing a node.
var drawNodeFns = {}; // Calc the occupy rect of icon.

exports.drawNodeFns = drawNodeFns;
var iconRectFns = {}; // Calc the occupy rect of text.

exports.iconRectFns = iconRectFns;
var textRectFns = {}; // Calc the anchors of node.

exports.textRectFns = textRectFns;
var anchorsFns = {}; // Functions of drawing a line.

exports.anchorsFns = anchorsFns;
var drawLineFns = {}; // Functions of drawing a arrow.

exports.drawLineFns = drawLineFns;
var drawArrowFns = {};
exports.drawArrowFns = drawArrowFns;

function init() {
  console.log('Init middles.'); // ********Default nodes.*******
  // Combine

  drawNodeFns.combine = _rectangle.rectangle; // Div

  drawNodeFns.div = _rectangle.rectangle; // Square

  drawNodeFns.square = _rectangle.rectangle; // Rectangle

  drawNodeFns.rectangle = _rectangle.rectangle;
  iconRectFns.rectangle = _rectangle2.rectangleIconRect;
  textRectFns.rectangle = _rectangle2.rectangleTextRect; // Ciricle

  drawNodeFns.circle = _circle.circle;
  iconRectFns.circle = _circle2.circleIconRect;
  textRectFns.circle = _circle2.circleTextRect;
  anchorsFns.circle = _circle4.circleAnchors; // Triangle

  drawNodeFns.triangle = _triangle.triangle;
  anchorsFns.triangle = _triangle2.triangleAnchors;
  iconRectFns.triangle = _triangle3.triangleIconRect;
  textRectFns.triangle = _triangle3.triangleTextRect; // Diamond

  drawNodeFns.diamond = _diamond.diamond;
  iconRectFns.diamond = _diamond2.diamondIconRect;
  textRectFns.diamond = _diamond2.diamondTextRect; // Hexagon

  drawNodeFns.hexagon = _hexagon.hexagon;
  iconRectFns.hexagon = _hexagon3.hexagonIconRect;
  textRectFns.hexagon = _hexagon3.hexagonTextRect;
  anchorsFns.hexagon = _hexagon2.hexagonAnchors; // Pentagon

  drawNodeFns.pentagon = _pentagon.pentagon;
  iconRectFns.pentagon = _pentagon2.pentagonIconRect;
  textRectFns.pentagon = _pentagon2.pentagonTextRect;
  anchorsFns.pentagon = _pentagon3.pentagonAnchors; // Pentagram

  drawNodeFns.pentagram = _pentagram.pentagram;
  iconRectFns.pentagram = _pentagram3.pentagramIconRect;
  textRectFns.pentagram = _pentagram3.pentagramTextRect;
  anchorsFns.pentagram = _pentagram2.pentagramAnchors; // Left arrow

  drawNodeFns.leftArrow = _arrow.leftArrow;
  anchorsFns.leftArrow = _arrow2.arrowAnchors;
  iconRectFns.leftArrow = _arrow3.leftArrowIconRect;
  textRectFns.leftArrow = _arrow3.leftArrowTextRect; // Right arrow

  drawNodeFns.rightArrow = _arrow.rightArrow;
  anchorsFns.rightArrow = _arrow2.arrowAnchors;
  iconRectFns.rightArrow = _arrow3.rightArrowIconRect;
  textRectFns.rightArrow = _arrow3.rightArrowTextRect; // Two-way arrow

  drawNodeFns.twowayArrow = _arrow.twowayArrow;
  anchorsFns.twowayArrow = _arrow2.arrowAnchors;
  iconRectFns.twowayArrow = _arrow3.twowayArrowIconRect;
  textRectFns.twowayArrow = _arrow3.twowayArrowTextRect; // Cloud

  drawNodeFns.cloud = _cloud.cloud;
  anchorsFns.cloud = _cloud2.cloudAnchors;
  iconRectFns.cloud = _cloud3.cloudIconRect;
  textRectFns.cloud = _cloud3.cloudTextRect; // Message

  drawNodeFns.message = _message.message;
  anchorsFns.message = _message3.messageAnchors;
  iconRectFns.message = _message2.messageIconRect;
  textRectFns.message = _message2.messageTextRect; // File

  drawNodeFns.file = _file.file; // Text

  drawNodeFns.text = _text.text;
  iconRectFns.text = _line3.lineIconRect; // Line

  drawNodeFns.line = _line.line;
  anchorsFns.line = _line2.lineAnchors;
  iconRectFns.line = _line3.lineIconRect;
  textRectFns.line = _line3.lineTextRect; // Image

  drawNodeFns.image = function (ctx, node) {};

  iconRectFns.image = _image.imageIconRect;
  textRectFns.image = _image.imageTextRect; // Cube

  drawNodeFns.cube = _cube.cube;
  anchorsFns.cube = _cube2.cubeAnchors;
  iconRectFns.cube = _cube3.cubeIconRect;
  textRectFns.cube = _cube3.cubeTextRect; // Cube

  drawNodeFns.people = _people.people;
  iconRectFns.people = _people2.peopleIconRect;
  textRectFns.people = _people2.peopleTextRect; // ********end********
  // ********Default lines.*******

  drawLineFns.line = {
    drawFn: _line4.line,
    drawControlPointsFn: _line4.lineControlPoints,
    controlPointsFn: _line4.calcLineControlPoints,
    pointIn: _polyline.pointInPolyline
  };
  drawLineFns.polyline = {
    drawFn: _polyline.polyline,
    drawControlPointsFn: _polyline.polylineControlPoints,
    controlPointsFn: _polyline.calcPolylineControlPoints,
    dockControlPointFn: _polyline.dockPolylineControlPoint,
    pointIn: _polyline.pointInPolyline
  };
  drawLineFns.curve = {
    drawFn: _curve.curve,
    drawControlPointsFn: _curve.curveControlPoints,
    controlPointsFn: _curve.calcCurveControlPoints,
    pointIn: _curve.pointInCurve
  };
  drawLineFns.mind = {
    drawFn: _mind.mind,
    drawControlPointsFn: _mind.mindControlPoints,
    controlPointsFn: _mind.calcMindControlPoints,
    pointIn: _mind.pointInMind
  }; // ********end********
  // ********Default nodes.*******

  drawArrowFns.triangleSolid = _triangle4.triangleSolid;
  drawArrowFns.triangle = _triangle4.triangle;
  drawArrowFns.diamondSolid = _diamond3.diamondSolid;
  drawArrowFns.diamond = _diamond3.diamond;
  drawArrowFns.circleSolid = _circle3.circleSolid;
  drawArrowFns.circle = _circle3.circle;
  drawArrowFns.line = _line5.line;
  drawArrowFns.lineUp = _line5.lineUp;
  drawArrowFns.lineDown = _line5.lineDown; // ********end********
}

init(); // registerNode: Register a custom node.
// name - The name of node.
// drawFn - How to draw.
// anchorsFn - How to get the anchors.
// iconRectFn - How to get the icon rect.
// textRectFn - How to get the text rect.
// force - Overwirte the node if exists.

function registerNode(name, drawFn, anchorsFn, iconRectFn, textRectFn) {
  var force = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;

  // Exist
  if (drawNodeFns[name] && !force) {
    return false;
  }

  drawNodeFns[name] = drawFn;
  anchorsFns[name] = anchorsFn;
  iconRectFns[name] = iconRectFn;
  textRectFns[name] = textRectFn;
  return true;
} // registerLine: Register a custom line.
// name - The name of line.
// drawFn - How to draw.
// drawControlPointsFn - Draw the control points.
// controlPointsFn - How to get the controlPoints.
// dockControlPointFn - Dock a point to horizontal/vertial or related position.
// force - Overwirte the node if exists.


function registerLine(name, drawFn, drawControlPointsFn, controlPointsFn, dockControlPointFn, pointInFn) {
  var force = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;

  // Exist
  if (drawLineFns[name] && !force) {
    return false;
  }

  drawLineFns[name] = {
    drawFn: drawFn,
    drawControlPointsFn: drawControlPointsFn,
    controlPointsFn: controlPointsFn,
    dockControlPointFn: dockControlPointFn,
    pointIn: pointInFn
  };
  return true;
} // registerArrow: Register a custom arrow.
// name - the name of arrow.
// drawFn - how to draw.
// force - Overwirte the node if exists.


function registerArrow(name, drawFn) {
  var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  // Exist
  if (drawArrowFns[name] && !force) {
    return false;
  }

  drawArrowFns[name] = drawFn;
  return true;
}

window.registerTopologyNode = registerNode;