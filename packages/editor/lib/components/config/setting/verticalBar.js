'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _common = require('./common');

var _bar = require('../charts/bar');

var _defines = require('../../data/defines');

var barColors = _defines.lineRangedefaultColor.slice(0, 1);

var _default = {
  name: '柱状图',
  icon: 'iconzhuzhuangtu1',
  data: {
    text: '',
    rect: {
      width: 350,
      height: 200,
    },
    name: 'echarts',
    strokeStyle: 'rgba(0,0,0,0)',
    elementRendered: true,
    hideInput: true,
    data: {
      echarts: {
        option: (0, _bar.getBarOption)(),
      },
    },
    property: {
      echartsType: 'verticalBar',
      dataMethod: 'restful',
      dataFormat: _common.CHART_DATA,
      dataUrl: undefined,
      dataSourceId: undefined,
      dataSourceUrl: undefined,
      pullRate: 120,
      dataDot: 2,
      dataPointSelectedRows: [],
      dataPointParam: {
        qtDataList: [],
        subscribe: true,
      },
      props: {
        iframe: 'abcd',
      },
      form: {
        style: [
          {
            group: '标题字符',
            formItems: [
              {
                name: ['title'],
                value: '柱状图',
              },
              {
                name: ['titleShow'],
                value: true,
              },
              {
                name: ['titleFontFamily'],
                value: '"Microsoft YaHei"',
              },
              {
                name: ['titleFontColor'],
                value: '#333333',
              },
              {
                name: ['titleFontSize'],
                value: 14,
              },
              {
                name: ['titleFontBold'],
                value: 800,
              },
              {
                name: ['titleFontItalic'],
                value: 'normal',
              },
              {
                name: ['titleFontBaseline'],
                value: 'underline',
              },
              {
                name: ['titlePosition'],
                value: 'left',
              },
              {
                name: ['titleFontStyle'],
                value: [
                  {
                    name: 'bold',
                    value: 800,
                    checked: false,
                    icon: 'iconjiacu',
                  },
                  {
                    name: 'italic',
                    value: 'italic',
                    checked: false,
                    icon: 'iconzu',
                  }, // {name:"baseline",value:"baseline",checked:false,icon:'iconjiacu'}
                ],
              },
            ],
          },
          {
            group: '填充',
            formItems: [
              {
                name: ['lineGraphRange'],
                value: barColors,
              },
              {
                name: ['chartBkColor'],
                value: '#999999',
              },
              {
                name: ['chartBkColorShow'],
                value: false,
              },
              {
                name: ['chartRefLineShow'],
                value: true,
              },
              {
                name: ['chartRefLineColor'],
                value: '#ccc',
              },
            ],
          },
        ],
        data: [],
      },
    },
  },
};
exports['default'] = _default;
