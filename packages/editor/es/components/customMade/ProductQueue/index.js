function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { handleRequestError, maxContentLength, timeout, withCredentials } from "../../data/api";

var ProductQueue = function ProductQueue(props) {
  var _data$;

  var dataUrl = props.dataUrl;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var scrollRef = React.useRef();
  var interfaceToken = ''; // 设置滚动

  useEffect(function () {
    var intv = setInterval(function () {
      scrollRef.current.scrollBy(1, 0);
    }, 100);
    return function () {
      clearInterval(intv);
    };
  }, []);
  useEffect(function () {// loginSZGC().then((res:string)=>{
    //     interfaceToken=res;
    //     fetchData().then((data:any[])=>{
    //         setData(data)
    //     })
    // })
  }, [dataUrl]);

  var fetchData = function fetchData() {
    return new Promise(function (resolve, reject) {
      if (!dataUrl) {
        resolve({
          front_error: 4
        });
        return;
      }

      var myURL = new URL(dataUrl);
      var ajax = axios.create({
        baseURL: "".concat(myURL.origin, "/"),
        timeout: timeout,
        maxContentLength: maxContentLength,
        withCredentials: withCredentials
      });
      ajax.request({
        url: myURL.pathname,
        method: 'get',
        headers: {
          token: interfaceToken,
          'Content-Type': 'application/json'
        },
        data: {
          firstName: 'Fred'
        }
      }).then(function (res) {
        console.log(res.data);

        if (res && res.data.code == 1000) {
          resolve(res.data.data);
        } else {
          reject("请求错误");
        }
      }).catch(function (error) {
        handleRequestError(error);
        reject("请求错误");
      });
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "product-queue"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "left"
  }), /*#__PURE__*/React.createElement("span", {
    className: "right"
  }, "\u5F53\u524D\u751F\u4EA7\xA0\xA0\xA0\xA0", (_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.workshopName)), /*#__PURE__*/React.createElement("div", {
    className: "outer-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inner-container",
    ref: scrollRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "element"
  }, /*#__PURE__*/React.createElement("ul", null, (data || []).map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, /*#__PURE__*/React.createElement("span", {
      className: "title"
    }, /*#__PURE__*/React.createElement("p", null, item.productName), /*#__PURE__*/React.createElement("p", null, item.ticketNo)), /*#__PURE__*/React.createElement("span", {
      className: "order"
    }, "\u6392\u4F4D\uFF1A", index + 1));
  }))))));
};

export default ProductQueue;