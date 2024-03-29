export declare function getLineChartOption(
  node?: any,
  resData?: any,
): {
  legend: {};
  tooltip: {
    trigger: string;
    showContent: boolean;
  };
  dataset: {
    source: (string | number)[][];
  };
  xAxis: {
    type: string;
  };
  yAxis: {
    type: string;
    name: string;
    position: string;
    alignTicks: boolean;
    axisLine: {
      show: boolean;
      lineStyle: {
        color: string;
      };
    };
    axisLabel: {
      formatter: string;
    };
  }[];
  grid: {
    top: string;
    bottom: string;
    right: number;
  };
  series: {
    type: string;
    smooth: boolean;
    seriesLayoutBy: string;
    yAxisIndex: number;
    lineStyle: {
      color: string;
    };
    itemStyle: {
      color: string;
    };
    emphasis: {
      focus: string;
    };
  }[];
};
