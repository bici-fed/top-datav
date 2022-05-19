'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _timeline = require('../charts/timeline');

var _default = {
  elementRendered: false,
  name: '实时曲线',
  icon: 'iconquxiantu',
  data: {
    text: '',
    rect: {
      width: 500,
      height: 270,
    },
    name: 'echarts',
    strokeStyle: 'rgba(0,0,0,0)',
    elementRendered: false,
    hideRotateCP: true,
    hideInput: true,
    data: {
      echarts: {
        option: (0, _timeline.getTimeLineOption)(),
      },
    },
    property: {
      echartsType: 'timeLine',
      dataMethod: 'point',
      dataDot: 1,
      dataPointSelectedRows: [],
      dataPointParam: {
        qtDataList: [],
        subscribe: true,
      },
      smooth: true,
      limitType: 'custom',
      dataTopChecked: false,
      dataTop: 100,
      dataBottom: 0,
      chartTitleChecked: true,
      chartTitle: '实时曲线',
      chartTitleColor: '#c0c0c0',
      chartBackgroundColor: '#1b2735',
      chartBackgroundChecked: false,
      lineReferenceChecked: true,
      lineReferenceColor: '#ccc',
      lineColors: [],
    },
  },
};
exports['default'] = _default;
