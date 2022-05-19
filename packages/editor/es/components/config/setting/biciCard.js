'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;
var _default = {
  name: '数据卡片',
  icon: 'iconshujukapian',
  data: {
    text: '数据卡片',
    hideInput: true,
    hideRotateCP: true,
    rect: {
      width: 200,
      height: 100,
    },
    paddingTop: 30,
    font: {
      fontFamily: '"Microsoft YaHei"',
      color: '#fff',
      fontSize: 14,
      fontWeight: 400,
    },
    fillStyle: '#6236FF',
    strokeStyle: '#222',
    lineWidth: 0,
    name: 'biciCard',
    children: [
      {
        text: '0.00',
        name: 'text',
        hideInput: true,
        hideAnchor: true,
        hideRotateCP: true,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: '50%',
        paddingBottom: 10,
        rectInParent: {
          x: 0,
          y: 0,
          width: '100%',
          height: '50%',
        },
        font: {
          fontFamily: 'Arial',
          color: '#fff',
          textAlign: 'center',
          fontSize: 42,
          textBaseline: 'middle',
          fontWeight: 400,
        },
      },
      {
        text: '',
        name: 'text',
        hideInput: true,
        hideAnchor: true,
        hideRotateCP: true,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: '50%',
        paddingBottom: 10,
        rectInParent: {
          x: 0,
          y: '50%',
          width: '100%',
          height: '50%',
        },
        font: {
          fontFamily: 'Arial',
          color: '#fff',
          fontSize: 14,
          fontWeight: 400,
          textAlign: 'center',
          textBaseline: 'middle',
        },
      },
    ],
    property: {
      cardTitle: '数据卡片',
      showTitle: true,
      limitType: 'custom',
      showLimit: false,
      limit: {
        bottom: undefined,
        top: undefined, // 上限
      },
      normal: {
        fontFamily: 'Arial',
        fontSize: 42,
        color: '#fff',
        showBkColor: true,
        bkColor: '#6236FF',
      },
      topLimit: {
        fontFamily: 'Arial',
        fontSize: 42,
        color: '#fff',
        showBkColor: true,
        bkColor: '#766863',
      },
      bottomLimit: {
        fontFamily: 'Arial',
        fontSize: 42,
        color: '#fff',
        showBkColor: true,
        bkColor: '#FA6400',
      },
      dataMethod: 'point',
      dataDot: 2,
      dataPointSelectedRows: [],
      dataPointParam: {
        qtDataList: [],
        subscribe: true,
      },
    },
  },
};
exports['default'] = _default;
