import { defaultChartColors } from '../../data/defines';
import * as _ from 'lodash';
import { getFixed, handleDotData } from '../../utils/cacl';

export function getBarOption(node: any = null, resData: any = null) {
  let dimensions = ['xdata', '2020-09'];
  let chartColors = _.cloneDeep(defaultChartColors);

  let source = [
    ['补强板', 99.899],
    ['电梯导轨', 1457.332],
    ['扁钢', 1768.992],
  ];
  let series = {
    type: 'bar',
    barWidth: 20,
    // encode: { x: dimensions[0], y: dimensions[1] },
    datasetIndex: 0,
  };
  // 后端数据

  // 后端数据
  if (node && node.property.dataMethod === 'restful') {
    if (resData) {
      dimensions = resData['dimensions'];
      source = resData['source'];
      // 处理数据精度问题
      // handleDotData(node, source);
      // series.encode.y = dimensions[1];
    }
  } else if (node && node.property.dataMethod === 'point') {
    dimensions = ['数据点', '数据值'];
    source = [];
    (node.property.dataPointSelectedRows || []).forEach((item) => {
      const t = [];
      t[0] = item.dataName;
      t[1] = item.value * 1 || 0;
      // series.encode.y = dimensions[1];
      source.push(t);
    });
  }

  let chartBackgroundColor;
  let title = '柱状图';
  let titleShow = true;
  let chartRefLineShow = true;
  let chartRefLineColor = '#ccc';
  let font: any = {};
  let titlePosition = 'left';
  // 组件属性改变
  if (node) {
    title = node.property.props.title;
    titleShow = node.property.props.titleShow;
    if (node.property.props.chartBkColor != '' && node.property.props.chartBkColorShow == true) {
      chartBackgroundColor = node.property.props.chartBkColor;
    } else {
      chartBackgroundColor = 'transparent';
    }
    (node.property.props.titleFontStyle || []).forEach((item) => {
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
    }
    // 设置图形颜色
    if (node.property.props.lineGraphRange) {
      (node.property.props.lineGraphRange || []).forEach((element, index) => {
        if (element.lineGraphRangeCheck) {
          chartColors[index] = node.property.props.lineGraphRange[index].lineGraphRangeColor;
        }
      });
    }
    // 设置参考线
    if (node.property.props.chartRefLineShow) {
      chartRefLineShow = true;
      chartRefLineColor = node.property.props.chartRefLineColor;
    } else {
      chartRefLineShow = false;
      chartRefLineColor = node.property.props.chartRefLineColor;
    }
  }
  const option = {
    color: chartColors,
    backgroundColor: chartBackgroundColor,
    tooltip: {
      trigger: 'axis',
    },
    title: {
      text: titleShow ? title : '',
      left: titlePosition,
      textStyle: {
        ...font,
        rich: {},
      },
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
      //图表的位置
      top: '20%',
      left: '6%',
      right: '6%',
      bottom: '6%',
      containLabel: true,
    },
    dataset: {
      source: [dimensions, ...source],
    },
    xAxis: {
      type: 'category',
      axisLabel: { interval: 0, rotate: 0, color: font.color },
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
