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

var _antd = require('antd');

var _reactcss = _interopRequireDefault(require('reactcss'));

require('./style.css');

var _reactTable = require('react-table');

var _ = _interopRequireWildcard(require('lodash'));

var _iconConfig = _interopRequireDefault(require('../../config/iconConfig'));

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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// 获取titleFontStyle的
function getTitleFontStyle(fontStyle, value) {
  var style = _.find(fontStyle, function (item) {
    return item.name == value;
  });

  if (style && style.checked) {
    return style.value;
  }

  return '';
}
/***
 * 数据表格
 */

var Table = function Table(props) {
  var columns = props.columns,
    data = props.data,
    node = props.node;
  var tableInstance = (0, _reactTable.useTable)({
    columns: columns,
    data: data,
  });
  var scrollRef = (0, _react.useRef)();
  var getTableProps = tableInstance.getTableProps,
    getTableBodyProps = tableInstance.getTableBodyProps,
    headerGroups = tableInstance.headerGroups,
    rows = tableInstance.rows,
    prepareRow = tableInstance.prepareRow;
  (0, _react.useEffect)(function () {
    var scDiv = scrollRef.current;
    var h = scDiv.scrollHeight;
    var h1 = scDiv.scrollTop;
    var h3 = scDiv.clientHeight;
    var s = 0;
    setInterval(function () {
      s += 1;
      scDiv.scrollBy(0, 1);

      if (s >= h - h3 + 20) {
        scDiv.scrollTop = 0;
        s = 0;
      }
    }, 200);
  }, []);
  /* 内敛样式定义 */

  var styles = (0, _reactcss['default'])({
    default: {
      headerWrapper: {
        textAlign: 'center',
      },
      tbodyWrapper: {
        height: props.node.rect.height - 36,
        background: props.tbodyBkColorShow ? props.tbodyBkColor : '#ccc', // 表格body背景
      },
      theader: {
        width: '100%',
        tableLayout: 'fixed',
        textAlign: 'center',
      },
      theaderTH: {
        borderWidth: props.tbBorderShow ? props.tbBorderSize : 0,
        borderColor: props.tbBorderColor,
        borderStyle: 'solid',
        background: props.theadBkColorShow ? props.theadBkColor : 'transparent',
        color: props.headerFontColor,
        fontWeight: 'bold',
        fontSize: props.headerFontSize || 18,
        padding: 4,
      },
      tbodyTD: {
        textAlign: props.titlePosition || 'center',
        borderWidth: props.tbBorderShow ? props.tbBorderSize : 0,
        borderColor: props.tbBorderColor,
        borderStyle: 'solid',
        background: props.tbodyBkColorShow ? props.tbodyBkColor : 'transparent',
        color: props.titleFontColor,
        fontWeight: getTitleFontStyle(props.titleFontStyle, 'bold'),
        fontStyle: getTitleFontStyle(props.titleFontStyle, 'italic') || 'normal',
        textDecoration: getTitleFontStyle(props.titleFontStyle, 'baseline') ? 'underline' : 'none',
        fontSize: props.titleFontSize,
        fontFamily: props.titleFontFamily,
        padding: '5px 10px',
      },
      table: {
        tableLayout: 'fixed',
        width: '100%',
      },
    },
  });

  var renderDataPoint = function renderDataPoint() {
    return /*#__PURE__*/ _react['default'].createElement(
      _react['default'].Fragment,
      null,
      /*#__PURE__*/ _react['default'].createElement(
        'div',
        {
          style: {
            background: '#ccc',
          },
        },
        /*#__PURE__*/ _react['default'].createElement(
          'table',
          _objectSpread(
            _objectSpread({}, getTableProps()),
            {},
            {
              style: styles.theader,
            },
          ),
          /*#__PURE__*/ _react['default'].createElement(
            'thead',
            null,
            headerGroups.map(function (headerGroup) {
              return /*#__PURE__*/ _react['default'].createElement(
                'tr',
                _objectSpread({}, headerGroup.getHeaderGroupProps()),
                headerGroup.headers.map(function (column) {
                  return /*#__PURE__*/ _react['default'].createElement(
                    'th',
                    _objectSpread(
                      _objectSpread({}, column.getHeaderProps()),
                      {},
                      {
                        style: styles.theaderTH,
                      },
                    ),
                    column.render('Header'),
                  );
                }),
              );
            }),
          ),
        ),
      ),
      /*#__PURE__*/ _react['default'].createElement(
        'div',
        {
          style: styles.tbodyWrapper,
          className: 'outer-container',
        },
        /*#__PURE__*/ _react['default'].createElement(
          'div',
          {
            className: 'inner-container',
            ref: scrollRef,
          },
          (data === null || data === void 0 ? void 0 : data.length) > 0
            ? /*#__PURE__*/ _react['default'].createElement(
                'table',
                {
                  style: styles.table,
                  className: 'element',
                },
                /*#__PURE__*/ _react['default'].createElement(
                  'tbody',
                  _objectSpread({}, getTableBodyProps()),
                  rows.map(function (row) {
                    prepareRow(row);
                    return /*#__PURE__*/ _react['default'].createElement(
                      'tr',
                      _objectSpread({}, row.getRowProps()),
                      row.cells.map(function (cell) {
                        return /*#__PURE__*/ _react['default'].createElement(
                          'td',
                          _objectSpread(
                            _objectSpread({}, cell.getCellProps()),
                            {},
                            {
                              style: styles.tbodyTD,
                            },
                          ),
                          cell.render('Cell'),
                        );
                      }),
                    );
                  }),
                ),
              )
            : /*#__PURE__*/ _react['default'].createElement(_antd.Empty, {
                image: /*#__PURE__*/ _react['default'].createElement(_iconConfig['default'], {
                  type: 'iconwushuju',
                }),
                imageStyle: {
                  height: 50,
                  margin: 'auto auto',
                  fontSize: 42,
                },
                description: /*#__PURE__*/ _react['default'].createElement(
                  'span',
                  null,
                  '\u8BF7\u5728\u201C\u6570\u636E\u201D\u680F\u4E2D\u7ED1\u5B9A\u6570\u636E\u70B9\u6216\u8005\u7ED1\u5B9A\u6570\u636E\u63A5\u53E3',
                ),
              }),
        ),
      ),
    );
  };

  return /*#__PURE__*/ _react['default'].createElement('div', null, renderDataPoint());
};

var _default = Table;
exports['default'] = _default;
