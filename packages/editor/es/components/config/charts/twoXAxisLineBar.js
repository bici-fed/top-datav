function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
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

function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

export function getTwoXAxisLineBarOption() {
  var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var resData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var colors = ['#5470C6', '#91CC75', '#EE6666'];
  var dimensions = ['product', '2012', '2013', '2014', '2015', '2016', '2017'];
  var source = [
    ['投入产出率', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
    ['月度产量(件数)', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
  ];

  if (
    (resData === null || resData === void 0 ? void 0 : resData.dimensions) &&
    (resData === null || resData === void 0 ? void 0 : resData.source)
  ) {
    dimensions = resData === null || resData === void 0 ? void 0 : resData.dimensions;
    source = resData === null || resData === void 0 ? void 0 : resData.source;
  }

  var font = {}; // 组件属性改变

  if (node) {
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

    if (node.property.props.titleFontColor) {
      font.color = node.property.props.titleFontColor;
    }

    if (node.property.props.titleFontFamily) {
      font.fontFamily = node.property.props.titleFontFamily;
    }

    if (node.property.props.titleFontSize) {
      font.fontSize = node.property.props.titleFontSize;
    }
  }

  console.log('font===', font);
  var option = {
    legend: {
      textStyle: {
        color: '#e1e1e1',
        fontSize: 14,
      },
    },
    tooltip: {
      trigger: 'axis',
      showContent: true,
    },
    dataset: {
      source: [dimensions].concat(_toConsumableArray(source)),
    },
    xAxis: {
      type: 'category',
    },
    yAxis: [
      {
        type: 'value',
        name: '',
        position: 'left',
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: colors[1],
          },
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: 'red',
          },
        },
        axisLabel: {
          formatter: '{value}',
        },
      },
      {
        type: 'value',
        name: '',
        position: 'right',
        alignTicks: true,
        offset: 0,
        axisLine: {
          show: true,
          lineStyle: {
            color: colors[0],
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#999',
          },
        },
        axisLabel: {
          formatter: '{value}',
        },
      },
    ],
    grid: {
      top: '10%',
      bottom: '10%',
    },
    series: [
      {
        type: 'bar',
        smooth: true,
        seriesLayoutBy: 'row',
        yAxisIndex: 1,
        lineStyle: {
          color: colors[0],
        },
        itemStyle: {
          color: colors[0],
        },
        barWidth: 20,
        emphasis: {
          focus: 'series',
        },
      },
      {
        type: 'line',
        smooth: false,
        seriesLayoutBy: 'row',
        yAxisIndex: 0,
        lineStyle: {
          color: colors[1],
        },
        itemStyle: {
          color: colors[1],
        },
        emphasis: {
          focus: 'series',
        },
      },
    ],
  };
  return option;
}
