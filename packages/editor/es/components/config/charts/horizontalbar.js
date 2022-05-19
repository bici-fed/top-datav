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
export function getHorizontalBarOption() {
  var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var resData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var chartColors = _.cloneDeep(defaultChartColors);

  var dimensions = ['xdata', '2020-09', '2020-10'];
  var source = [
    ['补强板', 1999.899],
    ['电梯导轨', 1457.332],
    ['扁钢', 1768.992],
  ];
  var chartOrder = 'desc';
  var chartOrderChecked = false;
  var config = {
    dimension: dimensions[1],
    order: chartOrder,
  };
  var encode = {
    // Map the "amount" column to X axis.
    x: dimensions[1],
    // Map the "product" column to Y axis
    y: dimensions[0],
  }; // 后端数据

  if (node && node.dataMethod === 'restful') {
    if (resData) {
      dimensions = resData['dimensions'];
      source = resData['source']; // 处理数据精度问题

      handleDotData(node, source);
      config.dimension = dimensions[1];
      encode.x = dimensions[1];
    }
  } else if (node && node.property.dataMethod === 'point') {
    dimensions = ['xdata', '数据值'];
    source = [];
    (node.property.dataPointSelectedRows || []).forEach(function (item) {
      var t = [];
      t[0] = item.dataName;
      t[1] = item.value * 1 || 1;
      source.push(t);
    });
    config.dimension = dimensions[1];
  }

  source = (source || []).map(function (item, index) {
    item[0] = item[0] + '__s__' + chartColors[index];
    return item;
  });
  var chartBackgroundColor;
  var title = '条形图';
  var titleShow = true;
  var chartRefLineShow = false;
  var chartRefLineColor = '#ccc';
  var font = {};
  var titlePosition = 'left'; // 组件属性改变

  if (node) {
    title = node.property.props.title;

    if (node.property.props.titleShow === undefined) {
    } else {
      titleShow = node.property.props.titleShow;
    }

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
    } // 设置排序

    if (node.property.props.chartOrderChecked) {
      chartOrder = node.property.props.chartOrder;
      config.order = chartOrder;
    } else if (node.property.props.chartOrderChecked === false) {
      config.order = chartOrder;
    } // 设置排序

    if (node.property.props.chartOrderChecked) {
      (source || []).sort(function (a, b) {
        if (config.order == 'desc') {
          return b[1] - a[1];
        } else {
          return a[1] - b[1];
        }
      });
    }
  }

  var option = {
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
    tooltip: {
      formatter: function formatter(value) {
        var tmp = value.data[0].split('__s__');
        return value.dimensionNames[1] + '--' + tmp[0] + '：' + value.data[1];
      },
    },
    grid: {
      top: '10%',
      left: '10%',
      right: '10%',
      bottom: '10%',
      containLabel: true,
    },
    dataset: [
      {
        dimensions: dimensions,
        source: source,
      },
    ],
    xAxis: {
      name: '',
      axisLabel: {
        show: false,
        color: font.color,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: chartRefLineColor,
        },
      },
    },
    yAxis: {
      type: 'category',
      inverse: true,
      axisLabel: {
        show: true,
        color: font.color,
        formatter: function formatter(value) {
          var tmp = value.split('__s__');
          return tmp[0];
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: chartRefLineShow,
        lineStyle: {
          color: chartRefLineColor,
        },
      },
    },
    series: [
      {
        type: 'bar',
        realtimeSort: false,
        seriesLayoutBy: 'column',
        datasetIndex: 0,
        itemStyle: {
          color: function color(param) {
            var tmp = param.data[0].split('__s__');
            return tmp[1];
          },
        },
        label: {
          show: true,
          position: 'right',
          valueAnimation: true,
        },
        encode: encode,
      },
    ],
  };
  return option;
}
