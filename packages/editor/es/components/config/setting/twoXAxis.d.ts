declare const _default: {
  name: string;
  icon: string;
  data: {
    text: string;
    rect: {
      width: number;
      height: number;
    };
    name: string;
    strokeStyle: string;
    elementRendered: boolean;
    hideRotateCP: boolean;
    hideInput: boolean;
    data: {
      echarts: {
        option: {
          legend: {
            textStyle: {
              color: string;
              fontSize: number;
            };
          };
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
          yAxis: (
            | {
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
                splitLine: {
                  show: boolean;
                  lineStyle: {
                    color: string;
                  };
                };
                axisLabel: {
                  formatter: string;
                };
                offset?: undefined;
              }
            | {
                type: string;
                name: string;
                position: string;
                alignTicks: boolean;
                offset: number;
                axisLine: {
                  show: boolean;
                  lineStyle: {
                    color: string;
                  };
                };
                splitLine: {
                  show: boolean;
                  lineStyle: {
                    color: string;
                  };
                };
                axisLabel: {
                  formatter: string;
                };
              }
          )[];
          grid: {
            top: string;
            bottom: string;
          };
          series: (
            | {
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
                barWidth: number;
                emphasis: {
                  focus: string;
                };
              }
            | {
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
                barWidth?: undefined;
              }
          )[];
        };
      };
    };
    property: {
      echartsType: string;
      dataMethod: string;
      dataFormat: string;
      dataUrl: string;
      dataSourceId: string;
      dataSourceUrl: string;
      pullRate: number;
      dataDot: number;
      props: {
        iframe: string;
      };
      form: {
        style: (
          | {
              group: string;
              formItems: (
                | {
                    name: string[];
                    value: string;
                  }
                | {
                    name: string[];
                    value: boolean;
                  }
                | {
                    name: string[];
                    value: number;
                  }
                | {
                    name: string[];
                    value: (
                      | {
                          name: string;
                          value: number;
                          checked: boolean;
                          icon: string;
                        }
                      | {
                          name: string;
                          value: string;
                          checked: boolean;
                          icon: string;
                        }
                    )[];
                  }
              )[];
            }
          | {
              group: string;
              formItems: (
                | {
                    name: string[];
                    value: {
                      lineGraphRangeColor: string;
                      lineGraphRangeCheck: boolean;
                    }[];
                  }
                | {
                    name: string[];
                    value: string;
                  }
                | {
                    name: string[];
                    value: boolean;
                  }
              )[];
            }
        )[];
        data: any[];
      };
    };
  };
};
export default _default;
