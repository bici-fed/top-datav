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

import { defaultChartColors } from '../../data/defines';
import * as _ from 'lodash';
import { handleDotData } from '../../utils/cacl';
export function getGroupBarOption() {
  var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var resData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var chartColors = _.cloneDeep(defaultChartColors);

  var dimensions = ['product', '2012', '2013', '2014', '2015'];
  var source = [
    ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
    ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
    ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4],
  ];
  var series = [
    {
      type: 'bar',
      seriesLayoutBy: 'column',
    },
    {
      type: 'bar',
      seriesLayoutBy: 'column',
    },
    {
      type: 'bar',
      seriesLayoutBy: 'column',
    },
    {
      type: 'bar',
      seriesLayoutBy: 'column',
    },
  ];

  if (resData) {
    dimensions = resData['dimensions'];
    source = resData['source']; // 处理数据精度问题

    handleDotData(node, source);
    series = [];

    for (var i = 0; i < dimensions.length - 1; i++) {
      series.push({
        type: 'bar',
        seriesLayoutBy: 'column',
      });
    }
  }

  var chartBackgroundColor;
  var title = '分组柱状图';
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
    tooltip: {},
    backgroundColor: chartBackgroundColor,
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
      itemWidth: 17,
      itemHeight: 12,
      textStyle: {
        color: font.color,
        fontSize: 14,
      },
    },
    grid: {
      top: '20%',
      left: '2%',
      right: '2%',
      bottom: '10%',
      containLabel: true,
    },
    dataset: [
      {
        dimensions: dimensions,
        source: source,
      },
    ],
    // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
    xAxis: {
      type: 'category',
      axisLabel: {
        color: font.color,
      },
      axisTick: {
        show: false,
      },
    },
    // 声明一个 Y 轴，数值轴。
    yAxis: {
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
    // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
    series: series,
  };
  return option;
}
