'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Cookie = void 0;

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var Cookie = /*#__PURE__*/ (function () {
  function Cookie() {
    (0, _classCallCheck2.default)(this, Cookie);
  }

  (0, _createClass2.default)(Cookie, null, [
    {
      key: 'get',
      value: function get(name) {
        var arr;
        var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');

        if ((arr = document.cookie.match(reg))) {
          return decodeURIComponent(arr[2]);
        } else {
          return '';
        }
      }, // options: {
      //   expires?:number,
      //   path?:string,
      //   domain?:string
      // }
    },
    {
      key: 'set',
      value: function set(name, value, options) {
        var myWindow = window;
        var cookieStr = myWindow.escape(name) + '=' + myWindow.escape(value) + ';';

        if (!options) {
          options = {};
        }

        if (options.expires) {
          var dtExpires = new Date(new Date().getTime() + options.expires * 1000 * 60 * 60 * 24);
          cookieStr += 'expires=' + dtExpires.toUTCString() + ';';
        }

        if (options.path) {
          cookieStr += 'path=' + options.path + ';';
        }

        if (options.domain) {
          cookieStr += 'domain=' + options.domain + ';';
        }

        document.cookie = cookieStr;
      }, // options: {
      //   path?:string,
      //   domain?:string
      // }
    },
    {
      key: 'delete',
      value: function _delete(name, options) {
        if (Cookie.get(name)) {
          if (!options) {
            options = {};
          }

          options.expires = -1;
          Cookie.set(name, '', options);
        }
      },
    },
  ]);
  return Cookie;
})();

exports.Cookie = Cookie;
