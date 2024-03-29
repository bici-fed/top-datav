import React from 'react';
import { Row, Col, Collapse } from 'antd';
import styles from "../../index.module.css";
import CustomIcon from '../../../config/iconConfig';
import { defaultToolsConfig } from '../../../config/config';
import * as _ from 'lodash';
var Panel = Collapse.Panel;

var Layout = function Layout(_ref) {
  var Tools = _ref.Tools,
      onDrag = _ref.onDrag,
      toolConfig = _ref.toolConfig;
  return /*#__PURE__*/React.createElement(Collapse, {
    defaultActiveKey: ['0'],
    expandIconPosition: "right",
    ghost: false,
    bordered: false
  }, Tools.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Panel, {
      header: item.group,
      key: index
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.button
    }, /*#__PURE__*/React.createElement(Row, {
      align: "middle"
    }, Object.keys(item.children).map(function (itm, idx) {
      var conf = toolConfig || defaultToolsConfig;

      var hasCom = _.lastIndexOf(conf, itm);

      if (hasCom == -1) {
        return null;
      }

      var it = item.children[itm];
      return /*#__PURE__*/React.createElement(Col, {
        span: 8,
        key: idx,
        style: {
          marginBottom: 20,
          textAlign: 'center'
        }
      }, /*#__PURE__*/React.createElement("a", {
        title: it.name,
        draggable: true,
        href: "#",
        onClick: function onClick(e) {
          return e.preventDefault();
        },
        onDragStart: function onDragStart(ev) {
          return onDrag(ev, it);
        }
      }, /*#__PURE__*/React.createElement(CustomIcon, {
        type: it.icon,
        style: {
          fontSize: 30,
          width: 53,
          height: 53,
          lineHeight: '53px'
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          overflow: 'hidden',
          display: 'block',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis'
        }
      }, it.name)));
    }))));
  }));
};

export default Layout;