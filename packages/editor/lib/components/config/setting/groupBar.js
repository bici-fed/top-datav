'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _common = require('./common');

var _groupbar = require('../charts/groupbar');

var _defines = require('../../data/defines');

var _default = {
  name: '分组柱状图',
  icon: 'iconfenzuzhuzhuangtu',
  data: {
    text: '',
    rect: {
      width: 350,
      height: 200,
    },
    name: 'echarts',
    strokeStyle: 'rgba(0,0,0,0)',
    elementRendered: true,
    hideRotateCP: true,
    hideInput: true,
    data: {
      echarts: {
        option: (0, _groupbar.getGroupBarOption)(),
      },
    },
    property: {
      echartsType: 'groupBar',
      dataMethod: 'restful',
      dataFormat: _common.CHART_DATA,
      dataUrl: _common.DATA_BASE_API + '/creditBalance/storageGoodsReportQtMonth',
      dataSourceId: '',
      dataSourceUrl: '',
      pullRate: 120,
      dataDot: 2,
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
                value: '分组柱状图',
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
                value: _defines.lineRangedefaultColor,
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
exports.default = _default;
