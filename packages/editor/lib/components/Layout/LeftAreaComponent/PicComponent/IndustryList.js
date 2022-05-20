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

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireWildcard(require('react'));

var _indexModule = _interopRequireDefault(require('./index.module.css'));

var _config = require('./config');

var _api = require('../../../data/api');

var IndustryList = function IndustryList(props) {
  var uploaConfig = props.uploaConfig,
    mappingType = props.mappingType;

  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    list = _useState2[0],
    setList = _useState2[1];

  var requstPicList = function requstPicList() {
    (0, _api.clientParam)(uploaConfig.industry.baseURL)
      .request({
        url: uploaConfig.industry.list.url,
        params: {
          mappingId: uploaConfig.industry.mappingId,
          mappingType: mappingType,
          getPdf: false,
        },
        method: 'get',
        headers: {
          token: uploaConfig.industry.token,
          'Content-Type': 'application/json',
        },
      })
      .then(function (res) {
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

  (0, _react.useEffect)(function () {
    requstPicList();
  }, []);
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    /*#__PURE__*/ _react.default.createElement(
      _row.default,
      null,
      (list || []).map(function (item, index) {
        return /*#__PURE__*/ _react.default.createElement(
          _col.default,
          {
            key: index,
            span: 8,
            className: _indexModule.default.colStyle,
            style: {
              textAlign: 'center',
            },
          },
          /*#__PURE__*/ _react.default.createElement(
            'a',
            {
              title: item.name,
              draggable: true,
              href: '#',
              onClick: function onClick(e) {
                return e.preventDefault();
              },
              onDragStart: function onDragStart(ev) {
                return (0, _config.onDrag)(ev, item);
              },
            },
            /*#__PURE__*/ _react.default.createElement('img', {
              alt: item.name,
              src: item.url,
              style: {
                width: 60,
                height: 60,
              },
            }),
            /*#__PURE__*/ _react.default.createElement(
              'span',
              {
                style: {
                  marginTop: 5,
                  overflow: 'hidden',
                  display: 'block',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  color: '#333',
                },
              },
              item.name,
            ),
          ),
        );
      }),
    ),
  );
};

var _default = IndustryList;
exports.default = _default;
