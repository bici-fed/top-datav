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

var _axios = _interopRequireDefault(require('axios'));

var _api = require('../../data/api');

var ProductQueue = function ProductQueue(props) {
  var _data$;

  var dataUrl = props.dataUrl;

  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];

  var scrollRef = _react.default.useRef();

  var interfaceToken = ''; // 设置滚动

  (0, _react.useEffect)(function () {
    var intv = setInterval(function () {
      scrollRef.current.scrollBy(1, 0);
    }, 100);
    return function () {
      clearInterval(intv);
    };
  }, []);
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
      className: 'product-queue',
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'header',
      },
      /*#__PURE__*/ _react.default.createElement('span', {
        className: 'left',
      }),
      /*#__PURE__*/ _react.default.createElement(
        'span',
        {
          className: 'right',
        },
        '\u5F53\u524D\u751F\u4EA7\xA0\xA0\xA0\xA0',
        (_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.workshopName,
      ),
    ),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'outer-container',
      },
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'inner-container',
          ref: scrollRef,
        },
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'element',
          },
          /*#__PURE__*/ _react.default.createElement(
            'ul',
            null,
            (data || []).map(function (item, index) {
              return /*#__PURE__*/ _react.default.createElement(
                'li',
                {
                  key: index,
                },
                /*#__PURE__*/ _react.default.createElement(
                  'span',
                  {
                    className: 'title',
                  },
                  /*#__PURE__*/ _react.default.createElement('p', null, item.productName),
                  /*#__PURE__*/ _react.default.createElement('p', null, item.ticketNo),
                ),
                /*#__PURE__*/ _react.default.createElement(
                  'span',
                  {
                    className: 'order',
                  },
                  '\u6392\u4F4D\uFF1A',
                  index + 1,
                ),
              );
            }),
          ),
        ),
      ),
    ),
  );
};

var _default = ProductQueue;
exports.default = _default;
