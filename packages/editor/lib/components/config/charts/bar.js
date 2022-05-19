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
exports.getBarOption = getBarOption;

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

function getBarOption() {
  var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var resData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var dimensions = ['xdata', '2020-09'];

  var chartColors = _.cloneDeep(_defines.defaultChartColors);

  var source = [
    ['补强板', 99.899],
    ['电梯导轨', 1457.332],
    ['扁钢', 1768.992],
  ];
  var series = {
    type: 'bar',
    barWidth: 20,
    encode: {
      x: dimensions[0],
      y: dimensions[1],
    },
    datasetIndex: 0, // itemStyle:{
    //     color: function(obj){
    //         const defaultChartColors2=[
    //             "#157EFB",
    //             "#F7B500",
    //             "#1EC622",
    //             "#E63C5F",
    //             "#44D7B6",
    //             "#6236FF",
    //             "#673D3D",
    //             "#71A3CB",
    //             "#766863",
    //             "#FA6400"
    //           ]
    //         return defaultChartColors2[obj["dataIndex"]]
    //     }
    // }
  }; // 后端数据
  // 后端数据

  if (node && node.dataMethod === 'restful') {
    if (resData) {
      dimensions = resData['dimensions'];
      source = resData['source']; // 处理数据精度问题

      (0, _cacl.handleDotData)(node, source);
      series.encode.y = dimensions[1];
    }
  } else if (node && node.property.dataMethod === 'point') {
    dimensions = ['数据点', '数据值'];
    source = [];
    (node.property.dataPointSelectedRows || []).forEach(function (item) {
      var t = [];
      t[0] = item.dataName;
      t[1] = item.value * 1 || 0;
      series.encode.y = dimensions[1];
      source.push(t);
    });
  }

  var chartBackgroundColor;
  var title = '柱状图';
  var titleShow = true;
  var chartRefLineShow = true;
  var chartRefLineColor = '#ccc';
  var font = {};
  var titlePosition = 'left'; // 组件属性改变

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

  var option = {
    color: chartColors,
    backgroundColor: chartBackgroundColor,
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
      top: '4%',
      right: '4%',
      itemWidth: 17,
      itemHeight: 12,
      textStyle: {
        color: font.color,
        fontSize: 10,
      },
    },
    grid: {
      top: '20%',
      left: '6%',
      right: '6%',
      bottom: '6%',
      containLabel: true,
    },
    dataset: [
      {
        dimensions: dimensions,
        source: source,
      },
    ],
    xAxis: {
      type: 'category',
      axisLabel: {
        interval: 0,
        rotate: 0,
        color: font.color,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      axisLine: {
        show: false,
      },
      axisLabel: {
        color: font.color,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: chartRefLineShow,
        lineStyle: {
          color: chartRefLineColor,
        },
      },
    },
    series: series,
  };
  return option;
}