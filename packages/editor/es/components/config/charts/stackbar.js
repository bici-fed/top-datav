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
exports.getStackBarOption = getStackBarOption;

var _defines = require('../../data/defines');

var _ = _interopRequireWildcard(require('lodash'));

var _cacl = require('../../utils/cacl');

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

function getStackBarOption(node, resData) {
  var chartColors = _.cloneDeep(_defines.defaultChartColors);

  var chartBackgroundColor;
  var title = '堆叠图';
  var titleShow = true;
  var font = {};
  var titlePosition = 'left';
  var chartRefLineShow = false;
  var chartRefLineColor = '#ccc';

  if (node) {
    title = node.property.props.title;
    titleShow = node.property.props.titleShow;

    if (node.property.props.chartBkColor != '' && node.property.props.chartBkColorShow == true) {
      chartBackgroundColor = node.property.props.chartBkColor;
    } else {
      chartBackgroundColor = 'transparent';
    }

    (node.property.props.titleFontStyle || []).forEach(function (item) {
      if (item.name == 'bold') {
        if (item.checked) {
          font.fontWeight = item.value;
        } else {
          font.fontWeight = 'normal';
        }
      }

      if (item.name == 'italic') {
        if (item.checked) {
          font.fontStyle = item.value;
        } else {
          font.fontStyle = 'normal';
        }
      }
    });
    titlePosition = node.property.props.titlePosition;

    if (node.property.props.titleFontColor) {
      font.color = node.property.props.titleFontColor;
    }

    if (node.property.props.titleFontFamily) {
      font.fontFamily = node.property.props.titleFontFamily;
    }

    if (node.property.props.titleFontSize) {
      font.fontSize = node.property.props.titleFontSize;
    } // 设置图形颜色

    if (node.property.props.lineGraphRange) {
      (node.property.props.lineGraphRange || []).forEach(function (element, index) {
        if (element.lineGraphRangeCheck) {
          chartColors[index] = node.property.props.lineGraphRange[index].lineGraphRangeColor;
        }
      });
    } // 设置参考线

    if (node.property.props.chartRefLineShow) {
      chartRefLineShow = true;
      chartRefLineColor = node.property.props.chartRefLineColor;
    } else {
      chartRefLineShow = false;
      chartRefLineColor = node.property.props.chartRefLineColor;
    }
  }
  /**
   *
   * 后端数据
   *
   *
   * *******/

  var dimensions = ['xdata', '750车间', '740车间'];
  var source = [
    ['202001', 41.1, 30.4],
    ['202002', 86.5, 92.1],
    ['202003', 24.1, 67.2],
    ['202004', 24.1, 67.2],
  ];
  var series = [
    {
      type: 'bar',
      stack: 'sum',
      barWidth: '30%',
      barGap: '20%',
    },
    {
      type: 'bar',
      stack: 'sum',
      barWidth: '30%',
      barGap: '20%',
    },
  ];

  if (resData) {
    dimensions = resData['dimensions'];
    source = resData['source']; // 处理数据精度问题

    (0, _cacl.handleDotData)(node, source);
    series = [];

    for (var i = 0; i < dimensions.length - 1; i++) {
      series.push({
        type: 'bar',
        stack: 'sum',
        barWidth: '30%',
        barGap: '20%',
      });
    }
  }

  var option = {
    backgroundColor: chartBackgroundColor,
    color: chartColors,
    tooltip: {
      trigger: 'axis',
    },
    title: {
      text: titleShow ? title : '',
      left: titlePosition,
      textStyle: _objectSpread(
        _objectSpread({}, font),
        {},
        {
          rich: {},
        },
      ),
    },
    legend: {
      orient: 'vertical',
      right: 'right',
      top: 'middle',
      itemWidth: 17,
      itemHeight: 30,
      icon: 'circle',
      textStyle: {
        color: font.color,
        fontSize: 14,
      },
    },
    grid: {
      top: '20%',
      left: '2%',
      right: '20%',
      bottom: '10%',
      containLabel: true,
    },
    dataset: [
      {
        dimensions: dimensions,
        source: source,
      },
    ],
    yAxis: {
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    xAxis: {
      type: 'category',
      axisLine: {
        show: false,
      },
      splitLine: {
        show: chartRefLineShow,
        lineStyle: {
          color: chartRefLineColor,
        },
      },
      axisTick: {
        show: false,
      },
    },
    series: series,
  };
  return option;
}
