function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', { writable: false });
  return Constructor;
}

export var Cookie = /*#__PURE__*/ (function () {
  function Cookie() {
    _classCallCheck(this, Cookie);
  }

  _createClass(Cookie, null, [
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
