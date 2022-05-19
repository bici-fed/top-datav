'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireWildcard(require('react'));

require('./style.css');

var _axios = _interopRequireDefault(require('axios'));

var _api = require('../../data/api');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var ProductQueue = function ProductQueue(props) {
  var _data$;

  var dataUrl = props.dataUrl;

  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];

  var scrollRef = _react['default'].useRef();

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

      var ajax = _axios['default'].create({
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
        ['catch'](function (error) {
          (0, _api.handleRequestError)(error);
          reject('请求错误');
        });
    });
  };

  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    {
      className: 'product-queue',
    },
    /*#__PURE__*/ _react['default'].createElement(
      'div',
      {
        className: 'header',
      },
      /*#__PURE__*/ _react['default'].createElement('span', {
        className: 'left',
      }),
      /*#__PURE__*/ _react['default'].createElement(
        'span',
        {
          className: 'right',
        },
        '\u5F53\u524D\u751F\u4EA7\xA0\xA0\xA0\xA0',
        (_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.workshopName,
      ),
    ),
    /*#__PURE__*/ _react['default'].createElement(
      'div',
      {
        className: 'outer-container',
      },
      /*#__PURE__*/ _react['default'].createElement(
        'div',
        {
          className: 'inner-container',
          ref: scrollRef,
        },
        /*#__PURE__*/ _react['default'].createElement(
          'div',
          {
            className: 'element',
          },
          /*#__PURE__*/ _react['default'].createElement(
            'ul',
            null,
            (data || []).map(function (item, index) {
              return /*#__PURE__*/ _react['default'].createElement(
                'li',
                {
                  key: index,
                },
                /*#__PURE__*/ _react['default'].createElement(
                  'span',
                  {
                    className: 'title',
                  },
                  /*#__PURE__*/ _react['default'].createElement('p', null, item.productName),
                  /*#__PURE__*/ _react['default'].createElement('p', null, item.ticketNo),
                ),
                /*#__PURE__*/ _react['default'].createElement(
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
exports['default'] = _default;
