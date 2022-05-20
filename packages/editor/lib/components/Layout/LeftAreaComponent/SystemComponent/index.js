'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/col/style');

var _col = _interopRequireDefault(require('antd/es/col'));

require('antd/es/row/style');

var _row = _interopRequireDefault(require('antd/es/row'));

require('antd/es/collapse/style');

var _collapse = _interopRequireDefault(require('antd/es/collapse'));

var _react = _interopRequireDefault(require('react'));

var _indexModule = _interopRequireDefault(require('../../index.module.css'));

var _iconConfig = _interopRequireDefault(require('../../../config/iconConfig'));

var _config = require('../../../config/config');

var _ = _interopRequireWildcard(require('lodash'));

var Panel = _collapse.default.Panel;

var Layout = function Layout(_ref) {
  var Tools = _ref.Tools,
    onDrag = _ref.onDrag,
    toolConfig = _ref.toolConfig;
  return /*#__PURE__*/ _react.default.createElement(
    _collapse.default,
    {
      defaultActiveKey: ['0'],
      expandIconPosition: 'right',
      ghost: false,
      bordered: false,
    },
    Tools.map(function (item, index) {
      return /*#__PURE__*/ _react.default.createElement(
        Panel,
        {
          header: item.group,
          key: index,
        },
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: _indexModule.default.button,
          },
          /*#__PURE__*/ _react.default.createElement(
            _row.default,
            {
              align: 'middle',
            },
            Object.keys(item.children).map(function (itm, idx) {
              var conf = toolConfig || _config.defaultToolsConfig;

              var hasCom = _.lastIndexOf(conf, itm);

              if (hasCom == -1) {
                return null;
              }

              var it = item.children[itm];
              return /*#__PURE__*/ _react.default.createElement(
                _col.default,
                {
                  span: 8,
                  key: idx,
                  style: {
                    marginBottom: 20,
                    textAlign: 'center',
                  },
                },
                /*#__PURE__*/ _react.default.createElement(
                  'a',
                  {
                    title: it.name,
                    draggable: true,
                    href: '#',
                    onClick: function onClick(e) {
                      return e.preventDefault();
                    },
                    onDragStart: function onDragStart(ev) {
                      return onDrag(ev, it);
                    },
                  },
                  /*#__PURE__*/ _react.default.createElement(_iconConfig.default, {
                    type: it.icon,
                    style: {
                      fontSize: 30,
                      width: 53,
                      height: 53,
                      lineHeight: '53px',
                    },
                  }),
                  /*#__PURE__*/ _react.default.createElement(
                    'span',
                    {
                      style: {
                        overflow: 'hidden',
                        display: 'block',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                      },
                    },
                    it.name,
                  ),
                ),
              );
            }),
          ),
        ),
      );
    }),
  );
};

var _default = Layout;
exports.default = _default;
