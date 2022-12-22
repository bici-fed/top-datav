import { CHART_DATA } from './common';
export default {
  name: '变量值',
  icon: 'iconbianliangzhi',
  data: {
    text: '00:00:00',
    rect: {
      width: 100,
      height: 45,
    },
    font: {
      fontSize: 14,
      fontFamily: 'Arial',
    },
    name: 'biciVarer',
    elementRendered: false,
    hideInput: true,
    strokeStyle: 'rgba(0,0,0,0)',
    iconColor: '#ccc',
    property: {
      dataMethod: 'point',
      dataDot: 2,
      dataFormat: CHART_DATA,
      dataSourceId: undefined,
      dataSourceUrl: undefined,
      pullRate: 120,
      dataPointSelectedRows: [],
      dataPointParam: {
        qtDataList: [],
        subscribe: true,
      },
      stateType: 'single',
      lightRange: [], // 指示灯 状态定义 列表
    },
  },
};
