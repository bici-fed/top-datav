export function getLineChartOption(node: any = null, resData: any = null) {
  const colors = ['#5470C6', '#91CC75', '#EE6666'];
  let dimensions = ['product', '2012', '2013', '2014', '2015', '2016', '2017'];
  let source = [
    ['投入产出率', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
    ['月度产量(件数)', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
  ];
  if (resData?.dimensions && resData?.source) {
    dimensions = resData?.dimensions;
    source = resData?.source;
  }
  const option = {
    legend: {},
    tooltip: {
      trigger: 'axis',
      showContent: false,
    },
    dataset: {
      source: [dimensions, ['投入产出率', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1], ...source],
    },
    xAxis: { type: 'category' },
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
    grid: { top: '10%', bottom: '8%', right: 0 },
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
        emphasis: { focus: 'series' },
      },
    ],
  };
  return option;
}
