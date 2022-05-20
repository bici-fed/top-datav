'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _axios2 = _interopRequireDefault(require('axios'));

_axios2.default.defaults.headers['Content-Type'] = 'application/json';
_axios2.default.defaults.withCredentials = true; //axios.defaults.=true

var config = {
  baseURL: '/',
  timeout: 60 * 1000, // Timeout
};

var _axios = _axios2.default.create(config);

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers['Cache-Control'] = 'no-cache';
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
); // Add a response interceptor

_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Do something with response error
    return Promise.reject();
  },
);

var _default = _axios;
exports.default = _default;
