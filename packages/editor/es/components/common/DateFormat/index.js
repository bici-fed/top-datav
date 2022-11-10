function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useEffect, useState } from "react";
import "./styles.css";
import { canvas } from "../../Preview";

var DateFormat = function DateFormat(props) {
  var style = props.style,
      node = props.node,
      dataPointReq = props.dataPointReq;

  var _useState = useState('0分'),
      _useState2 = _slicedToArray(_useState, 2),
      minuts = _useState2[0],
      setMinuts = _useState2[1];

  useEffect(function () {
    try {
      canvas._emitter.on("socketDataSuccess", function (data) {
        fomatField(data);
      });
    } catch (e) {}
  }, [node, dataPointReq]);

  var sty = _objectSpread(_objectSpread(_objectSpread({}, style), node.font), {}, {
    width: node.rect.width < 10 ? 'auto' : node.rect.width,
    height: node.rect.height < 10 ? 'auto' : node.rect.height,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  });

  var fomatField = function fomatField(data) {
    var sockData = JSON.parse(data.data);

    if (!node.property.dataPointParam.qtDataList[0]) {
      setMinuts('0分');
      return;
    }

    var pointId = node.property.dataPointParam.qtDataList[0].id;
    var isUpdate = pointId == sockData.id;
    var mins = sockData.value;

    if (isUpdate) {
      if (typeof mins !== 'number') return mins;
      var days = [':', ':', ':', ':', ':'];
      var dataArr = getDates(mins);
      var d = '';

      if (dataArr[0] > 0) {
        if (dataArr[0] < 10) {
          d += '0' + dataArr[0] + days[0];
        } else {
          d += dataArr[0] + days[0];
        }
      }

      if (dataArr[1] > 0) {
        if (dataArr[1] < 10) {
          d += '0' + dataArr[1] + days[1];
        } else {
          d += dataArr[1] + days[1];
        }
      }

      if (dataArr[2] > 0) {
        if (dataArr[2] < 10) {
          d += '0' + dataArr[2] + days[2];
        } else {
          d += dataArr[2] + days[2];
        }
      }

      if (dataArr[3] >= 0) {
        if (dataArr[3] < 10) {
          d += '0' + dataArr[3] + days[3];
        } else {
          d += dataArr[3] + days[3];
        }
      }

      if (dataArr[4] >= 0) {
        if (dataArr[4] < 10) {
          d += '0' + dataArr[4] + days[4];
        } else {
          d += dataArr[4] + days[4];
        }
      }

      if ((d || ' ').endsWith(':')) {
        d = d.substring(0, d.length - 1);
      }

      setMinuts(d);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    style: sty
  }, minuts);
};

function getDates(mins) {
  var runTime = mins * 60;
  var year = Math.floor(runTime / 86400 / 365);
  runTime = runTime % (86400 * 365);
  var month = Math.floor(runTime / 86400 / 30);
  runTime = runTime % (86400 * 30);
  var day = Math.floor(runTime / 86400);
  runTime = runTime % 86400;
  var hour = Math.floor(runTime / 3600);
  runTime = runTime % 3600;
  var minute = Math.floor(runTime / 60);
  runTime = runTime % 60;
  var second = runTime;
  return [year, month, day, hour, minute, second];
}

export default DateFormat;