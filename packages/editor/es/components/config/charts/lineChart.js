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

export function getLineChartOption() {
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

  var option = {
    legend: {},
    tooltip: {
      trigger: 'axis',
      showContent: false,
    },
    dataset: {
      source: [dimensions, ['投入产出率', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1]].concat(
        _toConsumableArray(source),
      ),
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
            color: colors[2],
          },
        },
        axisLabel: {
          formatter: '{value} ml',
        },
      },
    ],
    grid: {
      top: '10%',
      bottom: '8%',
      right: 0,
    },
    series: [
      {
        type: 'line',
        smooth: false,
        seriesLayoutBy: 'row',
        yAxisIndex: 0,
        lineStyle: {
          color: colors[2],
        },
        itemStyle: {
          color: colors[2],
        },
        emphasis: {
          focus: 'series',
        },
      },
    ],
  };
  return option;
}
