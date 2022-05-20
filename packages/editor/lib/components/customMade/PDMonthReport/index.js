'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireWildcard(require('react'));

require('./style.css');

var _api = require('../../data/api');

var _axios = _interopRequireDefault(require('axios'));

var PDMonthReport = function PDMonthReport(props) {
  var _data$,
    _data$2,
    _data$3,
    _data$4,
    _data$5,
    _data$6,
    _data$7,
    _data$8,
    _data$9,
    _data$10,
    _data$11,
    _data$12,
    _data$13,
    _data$14,
    _data$15,
    _data$16,
    _data$17,
    _data$18,
    _data$19,
    _data$20,
    _data$21;

  var dataUrl = props.dataUrl;

  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];

  var interfaceToken = ''; // console.log("pdMonthReport==",dataUrl)

  (0, _react.useEffect)(
    function () {
      // loginSZGC().then((res:string)=>{
      //     interfaceToken=res;
      //     fetchData().then((data:any[])=>{
      //         setData(data)
      //     })
      // })
    },
    [dataUrl],
  );

  var fetchData = function fetchData() {
    return new Promise(function (resolve, reject) {
      if (!dataUrl) {
        resolve({
          front_error: 4,
        });
        return;
      }

      var myURL = new URL(dataUrl);

      var ajax = _axios.default.create({
        baseURL: ''.concat(myURL.origin, '/'),
        timeout: _api.timeout,
        maxContentLength: _api.maxContentLength,
        withCredentials: _api.withCredentials,
      });

      ajax
        .request({
          url: myURL.pathname,
          method: 'get',
          headers: {
            token: interfaceToken,
            'Content-Type': 'application/json',
          },
          data: {
            firstName: 'Fred',
          },
        })
        .then(function (res) {
          console.log(res.data);

          if (res && res.data.code == 1000) {
            resolve(res.data.data);
          } else {
            reject('请求错误');
          }
        })
        .catch(function (error) {
          (0, _api.handleRequestError)(error);
          reject('请求错误');
        });
    });
  };

  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'month-report',
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'content',
      },
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'bar-container',
        },
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'bar-wrapper',
          },
          /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              className: 'bar-item',
              style: {
                width: '55%',
              },
            },
            /*#__PURE__*/ _react.default.createElement(
              'h3',
              null,
              (_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.text,
            ),
            /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                className: 'bar-chart',
                style: {
                  backgroundColor: 'rgba(45, 65, 181, 0.7)',
                },
              },
              (_data$2 = data[0]) === null || _data$2 === void 0 ? void 0 : _data$2.value,
              (_data$3 = data[0]) === null || _data$3 === void 0 ? void 0 : _data$3.unit,
            ),
          ),
          /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              className: 'bar-item',
              style: {
                width: '14%',
              },
            },
            /*#__PURE__*/ _react.default.createElement(
              'h3',
              null,
              (_data$4 = data[1]) === null || _data$4 === void 0 ? void 0 : _data$4.text,
            ),
            /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                className: 'bar-chart',
                style: {
                  backgroundColor: 'rgba(65, 117, 5, 0.7)',
                },
              },
              (_data$5 = data[1]) === null || _data$5 === void 0 ? void 0 : _data$5.value,
              (_data$6 = data[1]) === null || _data$6 === void 0 ? void 0 : _data$6.unit,
            ),
          ),
          /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              className: 'bar-item',
              style: {
                width: '27%',
              },
            },
            /*#__PURE__*/ _react.default.createElement(
              'h3',
              null,
              (_data$7 = data[2]) === null || _data$7 === void 0 ? void 0 : _data$7.text,
            ),
            /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                className: 'bar-chart',
                style: {
                  backgroundColor: 'rgba(65, 117, 5, 0.7)',
                },
              },
              (_data$8 = data[2]) === null || _data$8 === void 0 ? void 0 : _data$8.value,
              (_data$9 = data[2]) === null || _data$9 === void 0 ? void 0 : _data$9.unit,
            ),
          ),
        ),
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'bar-wrapper',
          },
          /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              className: 'bar-item',
              style: {
                width: '41%',
              },
            },
            /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                className: 'bar-chart',
                style: {
                  backgroundColor: 'rgba(45, 65, 181, 0.7)',
                },
              },
              (_data$10 = data[3]) === null || _data$10 === void 0 ? void 0 : _data$10.value,
              (_data$11 = data[3]) === null || _data$11 === void 0 ? void 0 : _data$11.unit,
            ),
            /*#__PURE__*/ _react.default.createElement(
              'h3',
              null,
              (_data$12 = data[3]) === null || _data$12 === void 0 ? void 0 : _data$12.text,
            ),
          ),
          /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              className: 'bar-item',
              style: {
                width: '17%',
              },
            },
            /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                className: 'bar-chart',
                style: {
                  backgroundColor: 'rgba(156, 25, 25, 0.7)',
                },
              },
              (_data$13 = data[4]) === null || _data$13 === void 0 ? void 0 : _data$13.value,
              (_data$14 = data[4]) === null || _data$14 === void 0 ? void 0 : _data$14.unit,
            ),
            /*#__PURE__*/ _react.default.createElement(
              'h3',
              null,
              (_data$15 = data[4]) === null || _data$15 === void 0 ? void 0 : _data$15.text,
            ),
          ),
          /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              className: 'bar-item',
              style: {
                width: '16%',
              },
            },
            /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                className: 'bar-chart',
                style: {
                  backgroundColor: 'rgba(156, 25, 25, 0.7)',
                },
              },
              (_data$16 = data[5]) === null || _data$16 === void 0 ? void 0 : _data$16.value,
              (_data$17 = data[5]) === null || _data$17 === void 0 ? void 0 : _data$17.unit,
            ),
            /*#__PURE__*/ _react.default.createElement(
              'h3',
              null,
              (_data$18 = data[5]) === null || _data$18 === void 0 ? void 0 : _data$18.text,
            ),
          ),
          /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              className: 'bar-item',
              style: {
                width: '20%',
              },
            },
            /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                className: 'bar-chart',
                style: {
                  borderColor: 'red',
                  backgroundColor: 'rgba(156, 25, 25, 0.7)',
                },
              },
              (_data$19 = data[6]) === null || _data$19 === void 0 ? void 0 : _data$19.value,
              (_data$20 = data[6]) === null || _data$20 === void 0 ? void 0 : _data$20.unit,
            ),
            /*#__PURE__*/ _react.default.createElement(
              'h3',
              null,
              (_data$21 = data[6]) === null || _data$21 === void 0 ? void 0 : _data$21.text,
            ),
          ),
        ),
      ),
    ),
  );
};

var _default = PDMonthReport;
exports.default = _default;
