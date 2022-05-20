'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.getListByPage = getListByPage;
exports.getNodeById = getNodeById;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

var _Service = _interopRequireDefault(require('../utils/Service'));

function getListByPage(_x) {
  return _getListByPage.apply(this, arguments);
}

function _getListByPage() {
  _getListByPage = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/ _regenerator.default.mark(function _callee(currentPageIndex) {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              _context.next = 2;
              return _Service.default.get(
                '/api/topologies?pageIndex='.concat(currentPageIndex, '&pageCount=8'),
              );

            case 2:
              return _context.abrupt('return', _context.sent);

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    }),
  );
  return _getListByPage.apply(this, arguments);
}

function getNodeById(_x2) {
  return _getNodeById.apply(this, arguments);
}

function _getNodeById() {
  _getNodeById = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/ _regenerator.default.mark(function _callee2(id) {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch ((_context2.prev = _context2.next)) {
            case 0:
              _context2.next = 2;
              return _Service.default.get('/api/topology/'.concat(id));

            case 2:
              return _context2.abrupt('return', _context2.sent);

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2);
    }),
  );
  return _getNodeById.apply(this, arguments);
}
