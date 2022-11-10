function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import styles from "./index.module.css";
import { onDrag } from './config';
import { clientParam } from "../../../data/api";

var IndustryList = function IndustryList(props) {
  var uploaConfig = props.uploaConfig,
      mappingType = props.mappingType;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var requstPicList = function requstPicList() {
    clientParam(uploaConfig.industry.baseURL).request({
      url: uploaConfig.industry.list.url,
      params: {
        mappingId: uploaConfig.industry.mappingId,
        mappingType: mappingType,
        getPdf: false
      },
      method: 'get',
      headers: {
        token: uploaConfig.industry.token,
        'Content-Type': 'application/json'
      }
    }).then(function (res) {
      var data = res.data.data;

      if (data) {
        data.forEach(function (item) {
          item.name = item.name.substring(0, item.name.lastIndexOf('.'));
          item.type = item.name.substring(item.name.lastIndexOf('.') + 1); // getBase64(item.url, (data: string) => {
          //   item.url = item.url;
          // });
        });
      }

      setList(data);
    });
  };

  useEffect(function () {
    requstPicList();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Row, null, (list || []).map(function (item, index) {
    return /*#__PURE__*/React.createElement(Col, {
      key: index,
      span: 8,
      className: styles.colStyle,
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("a", {
      title: item.name,
      draggable: true,
      href: "#",
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      onDragStart: function onDragStart(ev) {
        return onDrag(ev, item);
      }
    }, /*#__PURE__*/React.createElement("img", {
      alt: item.name,
      src: item.url,
      style: {
        width: 60,
        height: 60
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        marginTop: 5,
        overflow: 'hidden',
        display: 'block',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        color: "#333"
      }
    }, item.name)));
  })));
};

export default IndustryList;