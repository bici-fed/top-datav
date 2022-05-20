'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Point = void 0;

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var Point = /*#__PURE__*/ (function () {
  // The id is nodeId while the point is from or to of a line.
  // The index of docker anchor on node.
  function Point(x, y, direction, anchorIndex, id, hidden, autoAnchor) {
    (0, _classCallCheck2.default)(this, Point);
    this.x = void 0;
    this.y = void 0;
    this.id = void 0;
    this.direction = void 0;
    this.radius = void 0;
    this.strokeStyle = void 0;
    this.fillStyle = void 0;
    this.anchorIndex = void 0;
    this.autoAnchor = void 0;
    this.hidden = void 0;
    this.mode = void 0;
    this.data = void 0;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.anchorIndex = anchorIndex;
    this.id = id;
    this.hidden = hidden;
    this.autoAnchor = autoAnchor;
  }

  (0, _createClass2.default)(Point, [
    {
      key: 'floor',
      value: function floor() {
        this.x |= 0;
        this.y |= 0;
      },
    },
    {
      key: 'round',
      value: function round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
      },
    },
    {
      key: 'clone',
      value: function clone() {
        var pt = new Point(
          this.x,
          this.y,
          this.direction,
          this.anchorIndex,
          this.id,
          this.hidden,
          this.autoAnchor,
        );

        if (this.data) {
          pt.data = this.data;
        }

        if (this.mode) {
          pt.mode = this.mode;
        }

        return pt;
      },
    },
    {
      key: 'hit',
      value: function hit(pt) {
        var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
        return (
          pt.x > this.x - radius &&
          pt.x < this.x + radius &&
          pt.y > this.y - radius &&
          pt.y < this.y + radius
        );
      },
    },
    {
      key: 'rotate',
      value: function rotate(angle, center) {
        if (!angle || angle === 360) {
          return this;
        }

        angle *= Math.PI / 180;
        var x =
          (this.x - center.x) * Math.cos(angle) - (this.y - center.y) * Math.sin(angle) + center.x;
        var y =
          (this.x - center.x) * Math.sin(angle) + (this.y - center.y) * Math.cos(angle) + center.y;
        this.x = x;
        this.y = y;
        return this;
      },
    },
    {
      key: 'isSameAs',
      value: function isSameAs(pt) {
        return (
          this.anchorIndex === pt.anchorIndex &&
          this.direction === pt.direction &&
          this.id === pt.id
        );
      },
    },
  ]);
  return Point;
})();

exports.Point = Point;
window.topologyPoint = Point;
