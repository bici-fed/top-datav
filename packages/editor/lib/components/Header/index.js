'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/space/style');

var _space = _interopRequireDefault(require('antd/es/space'));

require('antd/es/tag/style');

var _tag = _interopRequireDefault(require('antd/es/tag'));

require('antd/es/popover/style');

var _popover = _interopRequireDefault(require('antd/es/popover'));

require('antd/es/tooltip/style');

var _tooltip = _interopRequireDefault(require('antd/es/tooltip'));

require('antd/es/menu/style');

var _menu = _interopRequireDefault(require('antd/es/menu'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

require('antd/es/button/style');

var _button = _interopRequireDefault(require('antd/es/button'));

var _react = _interopRequireWildcard(require('react'));

var _icons = require('@ant-design/icons');

var _ahooks = require('ahooks');

var _iconConfig = _interopRequireDefault(require('../config/iconConfig'));

var _indexModule = _interopRequireDefault(require('./index.module.css'));

var _serializing = require('../utils/serializing');

var headTools = [
  {
    key: 'cut',
    name: '剪切',
    icon: 'iconjianqie',
    title: 'Ctrl+X',
  },
  {
    key: 'copy',
    name: '复制',
    icon: 'iconfuzhi',
    title: 'Ctrl+C',
  },
  {
    key: 'paste',
    name: '粘贴',
    icon: 'iconniantie',
    title: 'Ctrl+V',
  },
  null,
  {
    key: 'undo',
    name: '撤销',
    icon: 'iconchexiao',
    title: 'Ctrl+Z',
  },
  {
    key: 'redo',
    name: '恢复',
    icon: 'iconhuifu',
    title: 'Ctrl+Y',
  },
  null,
  {
    key: 'bottom',
    name: '置于底层',
    icon: 'iconzhiyudiceng',
    title: 'Ctrl+Alt+[',
  },
  {
    key: 'down',
    name: '后置一层',
    icon: 'iconhouzhiyiceng',
    title: 'Ctrl+[',
  },
  {
    key: 'up',
    name: '前置一层',
    icon: 'iconqianzhiyiceng',
    title: 'Ctrl+]',
  },
  {
    key: 'top',
    name: '置于顶层',
    icon: 'iconzhiyudingceng',
    title: 'Ctrl+Alt+]',
  },
  null,
  {
    key: 'combo',
    name: '编组',
    icon: 'iconbianzu1',
    title: 'Ctrl+G',
  },
  {
    key: 'unCombo',
    name: '解组',
    icon: 'iconjiechubianzu1',
    title: 'Ctrl+U',
  },
];
var ButtonGroup = _button.default.Group;

var Header = /*#__PURE__*/ _react.default.forwardRef(function (props, ref) {
  var canvas = props.canvas,
    scaleVal = props.scaleVal,
    history = props.history,
    rootRef = props.rootRef,
    isSave = props.isSave,
    setIsSave = props.setIsSave,
    onScaleCanvas = props.onScaleCanvas;

  var _useState = (0, _react.useState)(1),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    scaleNumber = _useState2[0],
    setScaleNumber = _useState2[1]; // 缩放的基数

  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    scaleVisible = _useState4[0],
    setScaleVisible = _useState4[1]; // 缩放Popover的可见

  var _useFullscreen = (0, _ahooks.useFullscreen)(rootRef),
    _useFullscreen2 = (0, _slicedToArray2.default)(_useFullscreen, 2),
    isFullscreen = _useFullscreen2[0],
    toggleFull = _useFullscreen2[1].toggleFull;

  (0, _react.useEffect)(
    function () {
      if (scaleVal && scaleNumber === undefined) {
        setScaleNumber(Math.round(scaleVal * 10) / 10);
      }

      if (scaleVal && scaleNumber && Math.round(scaleVal * 10) / 10 !== scaleNumber) {
        setScaleNumber(Math.round(scaleVal * 10) / 10);
        setIsSave(false);
      }
    },
    [scaleVal],
  ); // 对父组件暴露保存数据的接口

  (0, _react.useImperativeHandle)(
    ref,
    function () {
      return {
        save: function save() {
          handleSave();
        },
      };
    },
    [isSave],
  ); // 设置每五分钟保存一次数据

  (0, _react.useEffect)(
    function () {
      var timer = setTimeout(function () {
        handleSave();
      }, 1000 * 60 * (props.autoSaveInterval || 5));
      return function () {
        clearTimeout(timer);
      };
    },
    [isSave],
  );

  var handleSave = function handleSave() {
    if (!isSave) {
      setIsSave(true); // FileSaver.saveAs(
      //   new Blob([JSON.stringify(canvas.data)], {
      //     type: 'text/plain;charset=utf-8',
      //   }),
      //   `le5le.topology.json`
      // );JSON.stringify(option,replacer)

      var saveData = new Blob([JSON.stringify(canvas.data, _serializing.replacer)], {
        type: 'text/plain;charset=utf-8',
      }); // const screenshot = base64ToFile(canvas.toImage());
      // canvas.saveAsImage();

      saveData.text().then(function (r) {
        var json = JSON.parse(r); // json.screenshot = screenshot;

        props.onEditorSaveCb && props.onEditorSaveCb(json);
      });
    } else {
      // message.warn('数据已经保存！');
    }
  }; // 处理退出按钮

  var handleExitEditor = function handleExitEditor() {
    props.onPoweroff && props.onPoweroff();
    closeStream();
  };

  var closeStream = function closeStream() {
    // 推出之后关闭视频流
    var videoNodes = [];

    var getVideoNodes = function getVideoNodes(nodes) {
      (nodes || []).map(function (n) {
        if (n.name === 'combine') {
          getVideoNodes(n.children);
        } else if (n.name === 'QTLiveVideo' || n.name === 'liveVideo') {
          videoNodes.push(n);
        }
      });
    };

    getVideoNodes(canvas.data.pens); // 发送关闭流事件

    canvas.dispatch('deleteNode', videoNodes);
  };

  var handleHeaderClick = function handleHeaderClick(key) {
    var pens = canvas.activeLayer.pens;

    switch (key) {
      case 'cut':
        canvas.cut();
        break;

      case 'copy':
        canvas.copy();
        break;

      case 'paste':
        canvas.paste();
        break;

      case 'undo':
        canvas.undo();
        break;

      case 'redo':
        canvas.redo();
        break;

      case 'combo':
        canvas.combine(pens);
        break;

      case 'unCombo':
        pens
          .filter(function (pen) {
            return pen.name === 'combine';
          })
          .forEach(function (pen) {
            return canvas.uncombine(pen);
          });
        break;

      case 'bottom':
        pens.forEach(function (pen) {
          return canvas.bottom(pen);
        });
        canvas.updateProps(true);
        break;

      case 'top':
        pens.forEach(function (pen) {
          return canvas.top(pen);
        });
        canvas.updateProps(true);
        break;

      case 'up':
        pens.forEach(function (pen) {
          return canvas.up(pen);
        });
        canvas.updateProps(true);
        break;

      case 'down':
        pens.forEach(function (pen) {
          return canvas.down(pen);
        });
        canvas.updateProps(true);
        break;

      default:
        break;
    }

    setIsSave(false);
  };
  /**
   * 放大画布
   */

  var scaleZoomOut = function scaleZoomOut() {
    if (scaleNumber < 3) {
      setScaleNumber(scaleNumber + 0.1);
      canvas.scaleTo(scaleNumber + 0.1);
      onScaleCanvas && onScaleCanvas(scaleNumber + 0.1);
      props.setIsSave(false);
    }
  };
  /**
   * 缩小画布
   */

  var scaleZoomIn = function scaleZoomIn() {
    if (scaleNumber > 0.3) {
      setScaleNumber(scaleNumber - 0.1);
      canvas.scaleTo(scaleNumber - 0.1);
      onScaleCanvas && onScaleCanvas(scaleNumber - 0.1);
      props.setIsSave(false);
    }
  };
  /**
   * 点击选择缩放菜单后隐藏
   */

  var handleScalePopClick = function handleScalePopClick(visible) {
    setScaleVisible(visible);
  };
  /**
   * 处理选择缩放菜单数据
   */

  var handleSelectScaleMenu = function handleSelectScaleMenu(data) {
    setScaleNumber(parseInt(data.key) / 100);
    canvas.scaleTo(parseInt(data.key) / 100);
    onScaleCanvas && onScaleCanvas(parseInt(data.key) / 100);
    setScaleVisible(false);
    props.setIsSave(false);
  };

  var handleLocked = function handleLocked() {
    canvas.lock(0);
  };
  /**
   * 预览
   */

  var handlePreview = function handlePreview() {
    if (!isSave) {
      handleSave();
    }

    closeStream();

    if (props.onPreview && typeof props.onPreview == 'function') {
      props.onPreview({});
    } else {
      var reader = new FileReader();
      var result = new Blob([JSON.stringify(canvas.data)], {
        type: 'text/plain;charset=utf-8',
      });
      reader.readAsText(result, 'text/plain;charset=utf-8');

      reader.onload = function (e) {
        history.push({
          pathname: '/preview',
          state: {
            data: JSON.parse(reader.result),
          },
        });
      };
    }
  };
  /**
   * 点击额外配置
   */

  var handleExtraSetting = function handleExtraSetting() {
    var onExtraSetting = props.onExtraSetting;
    onExtraSetting && onExtraSetting();
    setIsSave(false);
  };
  /**
   * 缩放比例菜单
   */

  var scaleMenu = /*#__PURE__*/ _react.default.createElement(
    _menu.default,
    {
      onClick: function onClick(data) {
        return handleSelectScaleMenu(data);
      },
      style: {
        border: 0,
      },
    },
    /*#__PURE__*/ _react.default.createElement(
      _menu.default.Item,
      {
        key: '50',
      },
      '50%',
    ),
    /*#__PURE__*/ _react.default.createElement(
      _menu.default.Item,
      {
        key: '100',
      },
      '100%',
    ),
    /*#__PURE__*/ _react.default.createElement(
      _menu.default.Item,
      {
        key: '150',
      },
      '150%',
    ),
    /*#__PURE__*/ _react.default.createElement(
      _menu.default.Item,
      {
        key: '200',
      },
      '200%',
    ),
  );

  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: _indexModule.default.toolsHeader,
    },
    /*#__PURE__*/ _react.default.createElement(
      'a',
      {
        className: _indexModule.default.toolItem,
        onClick: handleExitEditor,
      },
      /*#__PURE__*/ _react.default.createElement(_iconConfig.default, {
        type: 'icontuichu',
      }),
      /*#__PURE__*/ _react.default.createElement('span', null, '\u9000\u51FA'),
    ),
    /*#__PURE__*/ _react.default.createElement('span', {
      className: _indexModule.default.toolSplit,
    }),
    headTools.map(function (item, index) {
      return item
        ? /*#__PURE__*/ _react.default.createElement(
            _tooltip.default,
            {
              placement: 'bottom',
              title: item.title,
              key: item.key,
              getPopupContainer: function getPopupContainer() {
                return document.querySelector('#editLayout');
              },
            },
            /*#__PURE__*/ _react.default.createElement(
              'a',
              {
                className: _indexModule.default.toolItem,
                onClick: function onClick() {
                  return handleHeaderClick(item.key);
                },
              },
              /*#__PURE__*/ _react.default.createElement(_iconConfig.default, {
                type: item.icon,
                style: {
                  width: 18,
                  height: 18,
                },
              }),
              /*#__PURE__*/ _react.default.createElement('span', null, item.name),
            ),
          )
        : /*#__PURE__*/ _react.default.createElement('span', {
            className: _indexModule.default.toolSplit,
            key: index,
          });
    }),
    /*#__PURE__*/ _react.default.createElement('span', {
      className: _indexModule.default.toolSplit,
    }),
    /*#__PURE__*/ _react.default.createElement(
      'a',
      {
        style: {
          display: 'inline-block',
          marginTop: 5,
          background: '#F0F0F0',
          borderRadius: '4px',
          height: 36,
          lineHeight: '36px',
        },
      },
      /*#__PURE__*/ _react.default.createElement(_button.default, {
        size: 'small',
        shape: 'circle',
        icon: /*#__PURE__*/ _react.default.createElement(_icons.MinusOutlined, {
          style: {
            color: '#666666',
          },
        }),
        onClick: function onClick() {
          return scaleZoomIn();
        },
      }),
      /*#__PURE__*/ _react.default.createElement(
        _popover.default,
        {
          content: scaleMenu,
          trigger: 'click',
          visible: scaleVisible,
          onVisibleChange: handleScalePopClick,
        },
        /*#__PURE__*/ _react.default.createElement(
          'span',
          {
            style: {
              margin: '0 12px',
              width: '4ch', // display: 'inline-block',
            },
          },
          scaleNumber && Math.round(scaleNumber * 100),
          '%',
        ),
      ),
      /*#__PURE__*/ _react.default.createElement(_button.default, {
        size: 'small',
        shape: 'circle',
        icon: /*#__PURE__*/ _react.default.createElement(_icons.PlusOutlined, {
          style: {
            color: '#666666',
          },
        }),
        onClick: function onClick() {
          return scaleZoomOut();
        },
      }),
    ),
    /*#__PURE__*/ _react.default.createElement(
      'a',
      {
        className: _indexModule.default.toolItem,
        style: {
          margin: '0 30px',
        },
        onClick: toggleFull,
      },
      /*#__PURE__*/ _react.default.createElement(_iconConfig.default, {
        type: 'iconquanping1',
      }),
      /*#__PURE__*/ _react.default.createElement('span', null, isFullscreen ? '退出全屏' : '全屏'),
    ),
    /*#__PURE__*/ _react.default.createElement(
      'a',
      {
        style: {
          lineHeight: '48px',
          margin: '0 30px 60px',
        },
        onClick: handleExtraSetting,
      },
      /*#__PURE__*/ _react.default.createElement(_iconConfig.default, {
        type: 'iconpeizhikanban',
      }),
      /*#__PURE__*/ _react.default.createElement(
        'span',
        {
          style: {
            marginLeft: 5,
          },
        },
        '\u914D\u7F6E\u770B\u677F',
      ),
    ),
    /*#__PURE__*/ _react.default.createElement(
      _tag.default,
      {
        color: '#F0DCCE',
        visible: !isSave,
        style: {
          color: '#FA6400',
          height: '28px',
          padding: '3px 10px',
          marginTop: '10px',
        },
      },
      '\u4FEE\u6539\u672A\u4FDD\u5B58',
    ),
    /*#__PURE__*/ _react.default.createElement(
      ButtonGroup,
      {
        style: {
          flex: 1,
          flexDirection: 'row-reverse',
          right: 20,
        },
      },
      /*#__PURE__*/ _react.default.createElement(
        _space.default,
        {
          size: 'large',
        },
        /*#__PURE__*/ _react.default.createElement(
          _button.default,
          {
            onClick: handlePreview,
          },
          '\u9884\u89C8',
        ),
        /*#__PURE__*/ _react.default.createElement(
          _button.default,
          {
            type: 'primary',
            onClick: handleSave,
          },
          '\u4FDD\u5B58',
        ),
      ),
    ),
  );
});

var _default = Header;
exports.default = _default;
