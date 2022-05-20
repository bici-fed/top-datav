'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/upload/style');

var _upload = _interopRequireDefault(require('antd/es/upload'));

require('antd/es/col/style');

var _col = _interopRequireDefault(require('antd/es/col'));

require('antd/es/row/style');

var _row = _interopRequireDefault(require('antd/es/row'));

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

require('antd/es/message/style');

var _message2 = _interopRequireDefault(require('antd/es/message'));

require('antd/es/form/style');

var _form = _interopRequireDefault(require('antd/es/form'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

require('antd/es/collapse/style');

var _collapse = _interopRequireDefault(require('antd/es/collapse'));

var _react = _interopRequireWildcard(require('react'));

var _icons = require('@ant-design/icons');

var _api = require('../../../data/api');

var _ahooks = require('ahooks');

var _CompContextMenu = _interopRequireDefault(require('../../../common/CompContextMenu'));

var _indexModule = _interopRequireDefault(require('./index.module.css'));

var _config = require('./config');

var _IndustryList = _interopRequireDefault(require('./IndustryList'));

var Panel = _collapse.default.Panel;

var Layout = function Layout(_ref) {
  var _uploaConfig$industry;

  var uploaConfig = _ref.uploaConfig,
    industrialLibrary = _ref.industrialLibrary;

  var _Form$useForm = _form.default.useForm(),
    _Form$useForm2 = (0, _slicedToArray2.default)(_Form$useForm, 1),
    formRef = _Form$useForm2[0]; // 是否显示右键菜单

  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    showContextmenu = _useState2[0],
    setShowContextmenu = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    list = _useState4[0],
    setList = _useState4[1];

  var _useState5 = (0, _react.useState)({
      position: 'fixed',
      zIndex: '10',
      display: 'none',
      left: '',
      top: '',
      bottom: '',
    }),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    contextmenu = _useState6[0],
    setContextmenu = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    selectedItem = _useState8[0],
    setSelectedItem = _useState8[1];

  var contextMenuRef = (0, _react.useRef)();
  var divHeight = document.body.clientHeight - 170;
  (0, _react.useEffect)(function () {}, []);
  (0, _ahooks.useClickAway)(function () {
    setShowContextmenu(false);
  }, contextMenuRef);
  (0, _react.useEffect)(
    function () {
      requstPicList();
    },
    [uploaConfig.self],
  ); // 请求获取图片列表

  var requstPicList = function requstPicList() {
    (0, _api.clientParam)(uploaConfig.self.baseURL)
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
    var isLt1M = file.size / 1024 / 1024 < 1;

    if (!isLt1M) {
      _message2.default.error('上传图片不可大于1M');
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
    var _ref3 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/ _regenerator.default.mark(function _callee() {
        var values;
        return _regenerator.default.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return formRef.validateFields(['componentName']);

                case 3:
                  values = _context.sent;
                  (0, _api.clientParam)(uploaConfig.baseURL)
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
                      _message2.default.success('重命名成功！');

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
      _message2.default.error('请选择要删除的组件！').then(function () {
        _message2.default.destroy();
      });

      return;
    }

    (0, _api.clientParam)(uploaConfig.baseURL)
      .get(uploaConfig.self.apiUrl.delete, {
        headers: {
          token: uploaConfig.self.token,
        },
        params: {
          id: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.id,
        },
      })
      .then(function (res) {
        _message2.default.success('删除组件成功！', 2, function () {
          _message2.default.destroy();

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

  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: _indexModule.default.container,
    },
    /*#__PURE__*/ _react.default.createElement(
      _collapse.default,
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
      /*#__PURE__*/ _react.default.createElement(
        Panel,
        {
          header: '\u81EA\u5B9A\u4E49\u4E0A\u4F20',
          key: '998',
        },
        /*#__PURE__*/ _react.default.createElement(
          _row.default,
          null,
          list === null || list === void 0
            ? void 0
            : list.map(function (item, index) {
                return /*#__PURE__*/ _react.default.createElement(
                  _col.default,
                  {
                    key: index,
                    span: 8,
                    className: _indexModule.default.colStyle,
                    style: {
                      textAlign: 'center',
                    },
                    onContextMenu: function onContextMenu(event) {
                      return handleContextMenu(event, item);
                    },
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    'a',
                    {
                      title: item.name,
                      draggable: true,
                      href: '#',
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      },
                      onDragStart: function onDragStart(ev) {
                        return (0, _config.onDrag)(ev, item);
                      },
                    },
                    /*#__PURE__*/ _react.default.createElement('img', {
                      alt: item.name,
                      src: item.url,
                      style: {
                        width: 60,
                        height: 60,
                      },
                    }),
                    /*#__PURE__*/ _react.default.createElement(
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
          /*#__PURE__*/ _react.default.createElement(
            _col.default,
            {
              key: 'upload',
              span: 12,
              className: _indexModule.default.colStyle,
              style: {
                textAlign: 'center',
              },
            },
            /*#__PURE__*/ _react.default.createElement(
              _upload.default,
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
              /*#__PURE__*/ _react.default.createElement(
                'div',
                null,
                /*#__PURE__*/ _react.default.createElement(_icons.PlusOutlined, null),
                /*#__PURE__*/ _react.default.createElement(
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
          : _uploaConfig$industry.projectIndustryCats) || _config.industry_List
      ).map(function (item, index) {
        return /*#__PURE__*/ _react.default.createElement(
          Panel,
          {
            key: index,
            header: item[1],
          },
          /*#__PURE__*/ _react.default.createElement(_IndustryList.default, {
            uploaConfig: uploaConfig,
            mappingType: item[0],
          }),
        );
      }),
    ),
    /*#__PURE__*/ _react.default.createElement(_CompContextMenu.default, {
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

var _default = Layout;
exports.default = _default;
