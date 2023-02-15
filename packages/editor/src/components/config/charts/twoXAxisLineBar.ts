export function getTwoXAxisLineBarOption(node: any = null, resData: any = null) {
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
      showContent: true,
    },
    dataset: {
      source: [dimensions, ...source],
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
            color: colors[1],
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
        axisLabel: {
          formatter: '{value}',
        },
      },
    ],
    grid: { top: '10%', bottom: '10%' },
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
        emphasis: { focus: 'series' },
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
        emphasis: { focus: 'series' },
      },
    ],
  };
  return option;
}
