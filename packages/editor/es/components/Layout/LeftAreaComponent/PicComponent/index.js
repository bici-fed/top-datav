function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }
      _next(undefined);
    });
  };
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Upload, Form, message, Collapse } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { clientParam } from '../../../data/api';
import { useClickAway } from 'ahooks';
import CompContextMenu from '../../../common/CompContextMenu';
import styles from './index.module.css';
import { industry_List, onDrag } from './config';
import IndustryList from './IndustryList';
var Panel = Collapse.Panel;

var Layout = function Layout(_ref) {
  var _uploaConfig$industry;

  var uploaConfig = _ref.uploaConfig,
    industrialLibrary = _ref.industrialLibrary;

  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    formRef = _Form$useForm2[0]; // 是否显示右键菜单

  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showContextmenu = _useState2[0],
    setShowContextmenu = _useState2[1];

  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    list = _useState4[0],
    setList = _useState4[1];

  var _useState5 = useState({
      position: 'fixed',
      zIndex: '10',
      display: 'none',
      left: '',
      top: '',
      bottom: '',
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    contextmenu = _useState6[0],
    setContextmenu = _useState6[1];

  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedItem = _useState8[0],
    setSelectedItem = _useState8[1];

  var contextMenuRef = useRef();
  var divHeight = document.body.clientHeight - 170;
  useEffect(function () {}, []);
  useClickAway(function () {
    setShowContextmenu(false);
  }, contextMenuRef);
  useEffect(
    function () {
      requstPicList();
    },
    [uploaConfig.self],
  ); // 请求获取图片列表

  var requstPicList = function requstPicList() {
    clientParam(uploaConfig.self.baseURL)
      .request({
        url: uploaConfig.self.apiUrl.list,
        data: uploaConfig.self.data,
        params: uploaConfig.self.data,
        method: 'get',
        headers: {
          token: uploaConfig.self.token,
          'Content-Type': 'application/json',
        },
      })
      .then(function (res) {
        var data = res.data.data;

        if (data) {
          data.forEach(function (item) {
            item.name = item.name.substring(0, item.name.lastIndexOf('.'));
            item.type = item.name.substring(item.name.lastIndexOf('.') + 1); // getBase64(item.url, (data: string) => {
            //   item.url = item.url;
            // });
          });
        }

        setList(data);
      });
  };

  function getBase64(url, callback) {
    var Img = new Image();
    var dataURL = '';
    Img.src = url + '?v=' + Math.random();
    Img.setAttribute('crossOrigin', 'Anonymous');

    Img.onload = function () {
      var canvas = document.createElement('canvas');
      var width = Img.width;
      var height = Img.height;
      canvas.width = width;
      canvas.height = height;
      canvas.getContext('2d').drawImage(Img, 0, 0, width, height);
      dataURL = canvas.toDataURL('image/png');
      return callback ? callback(dataURL) : null;
    };
  }

  var beforeUpload = function beforeUpload(file) {
    var isLt1M = file.size / 1024 / 1024 / 1024 < 1;

    if (!isLt1M) {
      message.error('上传图片不可大于10M');
    }

    return isLt1M;
  };

  var onHandleUpload = function onHandleUpload(_ref2) {
    var file = _ref2.file;

    if (file.status === 'done') {
      requstPicList();
    }
  }; // 确定重命名

  var handleOk = /*#__PURE__*/ (function () {
    var _ref3 = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var values;
        return regeneratorRuntime.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return formRef.validateFields(['componentName']);

                case 3:
                  values = _context.sent;
                  clientParam(uploaConfig.baseURL)
                    .post(
                      uploaConfig.self.apiUrl.update,
                      {
                        id: selectedItem.id,
                        name: values.componentName + '.' + selectedItem.type,
                      },
                      {
                        headers: {
                          'X-Requested-With': 'XMLHttpRequest',
                          token: uploaConfig.self.token,
                          'Content-Type': 'application/json',
                        },
                      },
                    )
                    .then(function (res) {
                      message.success('重命名成功！');
                      requstPicList();
                    });
                  _context.next = 10;
                  break;

                case 7:
                  _context.prev = 7;
                  _context.t0 = _context['catch'](0);
                  console.error('Failed:', _context.t0);

                case 10:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [[0, 7]],
        );
      }),
    );

    return function handleOk() {
      return _ref3.apply(this, arguments);
    };
  })();

  var handleDelete = function handleDelete() {
    if (selectedItem == null) {
      message.error('请选择要删除的组件！').then(function () {
        message.destroy();
      });
      return;
    }

    clientParam(uploaConfig.baseURL)
      .get(uploaConfig.self.apiUrl.delete, {
        headers: {
          token: uploaConfig.self.token,
        },
        params: {
          id: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.id,
        },
      })
      .then(function (res) {
        message.success('删除组件成功！', 2, function () {
          message.destroy();
          return null;
        });
        requstPicList();
      });
  }; // 右键菜单

  var handleContextMenu = function handleContextMenu(event, item) {
    setShowContextmenu(!showContextmenu);
    setSelectedItem(item);
    event.preventDefault();
    event.stopPropagation();

    if (event.clientY + 360 < document.body.clientHeight) {
      setContextmenu({
        position: 'fixed',
        zIndex: '10',
        display: 'block',
        left: event.clientX + 'px',
        top: event.clientY + 'px',
        bottom: '',
      });
    } else {
      setContextmenu({
        position: 'fixed',
        zIndex: '10',
        display: 'block',
        left: event.clientX + 'px',
        top: '',
        bottom: document.body.clientHeight - event.clientY + 'px',
      });
    }
  };

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: styles.container,
    },
    /*#__PURE__*/ React.createElement(
      Collapse,
      {
        defaultActiveKey: ['999'],
        expandIconPosition: 'right',
        ghost: false,
        bordered: false,
        style: {
          height: divHeight,
          overflow: 'auto',
        },
      },
      /*#__PURE__*/ React.createElement(
        Panel,
        {
          header: '\u81EA\u5B9A\u4E49\u4E0A\u4F20',
          key: '998',
        },
        /*#__PURE__*/ React.createElement(
          Row,
          null,
          list === null || list === void 0
            ? void 0
            : list.map(function (item, index) {
                return /*#__PURE__*/ React.createElement(
                  Col,
                  {
                    key: index,
                    span: 8,
                    className: styles.colStyle,
                    style: {
                      textAlign: 'center',
                    },
                    onContextMenu: function onContextMenu(event) {
                      return handleContextMenu(event, item);
                    },
                  },
                  /*#__PURE__*/ React.createElement(
                    'a',
                    {
                      title: item.name,
                      draggable: true,
                      href: '#',
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      },
                      onDragStart: function onDragStart(ev) {
                        return onDrag(ev, item);
                      },
                    },
                    /*#__PURE__*/ React.createElement('img', {
                      alt: item.name,
                      src: item.url,
                      style: {
                        width: 60,
                        height: 60,
                      },
                    }),
                    /*#__PURE__*/ React.createElement(
                      'span',
                      {
                        style: {
                          marginTop: 5,
                          overflow: 'hidden',
                          display: 'block',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                          color: '#333',
                        },
                      },
                      item.name,
                    ),
                  ),
                );
              }),
          /*#__PURE__*/ React.createElement(
            Col,
            {
              key: 'upload',
              span: 12,
              className: styles.colStyle,
              style: {
                textAlign: 'center',
              },
            },
            /*#__PURE__*/ React.createElement(
              Upload,
              {
                listType: 'picture-card',
                showUploadList: false,
                action: ''.concat(uploaConfig.self.baseURL).concat(uploaConfig.self.url),
                accept: 'image/*',
                data: {
                  mappingType: uploaConfig.self.data.mappingType,
                  mappingId: uploaConfig.self.data.mappingId,
                },
                headers: {
                  token: uploaConfig.self.token,
                },
                beforeUpload: beforeUpload,
                onChange: onHandleUpload,
              },
              /*#__PURE__*/ React.createElement(
                'div',
                null,
                /*#__PURE__*/ React.createElement(PlusOutlined, null),
                /*#__PURE__*/ React.createElement(
                  'div',
                  {
                    style: {
                      marginTop: 8,
                    },
                  },
                  '\u4E0A\u4F20',
                ),
              ),
            ),
          ),
        ),
      ),
      (
        (uploaConfig === null || uploaConfig === void 0
          ? void 0
          : (_uploaConfig$industry = uploaConfig.industry) === null ||
            _uploaConfig$industry === void 0
          ? void 0
          : _uploaConfig$industry.projectIndustryCats) || industry_List
      ).map(function (item, index) {
        return /*#__PURE__*/ React.createElement(
          Panel,
          {
            key: index,
            header: item[1],
          },
          /*#__PURE__*/ React.createElement(IndustryList, {
            uploaConfig: uploaConfig,
            mappingType: item[0],
          }),
        );
      }),
    ),
    /*#__PURE__*/ React.createElement(CompContextMenu, {
      contextMenuRef: contextMenuRef,
      showContextmenu: showContextmenu,
      contextmenu: contextmenu,
      name: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.name,
      form: formRef,
      handleOk: handleOk,
      handleDelete: handleDelete,
    }),
  );
};

export default Layout;
