'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _default = {
  text: '网页',
  icon: 'iconwangye',
  name: '网页',
  data: {
    strokeStyle: '#fff',
    rect: {
      x: 100,
      y: 200,
      width: 350,
      height: 200,
    },
    name: 'webPage',
    elementRendered: false,
    isEditable: false,
    hideInput: true,
    data: {},
    property: {
      props: {
        iframe: '',
      },
      form: {
        style: [
          {
            group: '设置链接',
            formItems: [
              {
                name: ['refreshRate'],
                value: 10,
              },
              {
                name: ['refreshRateCheck'],
                value: true,
              },
              {
                name: ['iframe'],
                value: '',
              },
              {
                name: ['pullRateUnit'],
                value: 60,
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
