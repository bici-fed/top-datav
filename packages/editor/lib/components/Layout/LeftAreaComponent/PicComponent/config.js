'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.scaleWidthHeight =
  exports.rtnImg =
  exports.onDrag =
  exports.industry_List =
  exports.fitImageSize =
  exports.NEW_BOARD_INDUSTRY_VENT_LINE =
  exports.NEW_BOARD_INDUSTRY_STORAGE_SILO =
  exports.NEW_BOARD_INDUSTRY_STEEL_INDUSTRY =
  exports.NEW_BOARD_INDUSTRY_REACTOR =
  exports.NEW_BOARD_INDUSTRY_PUMP =
  exports.NEW_BOARD_INDUSTRY_PIPELINE =
  exports.NEW_BOARD_INDUSTRY_MINE =
  exports.NEW_BOARD_INDUSTRY_MATERIAL_HANDLING =
  exports.NEW_BOARD_INDUSTRY_MACHINE_WORK =
  exports.NEW_BOARD_INDUSTRY_KLEP =
  exports.NEW_BOARD_INDUSTRY_ELECTRIC_MACHINERY =
  exports.NEW_BOARD_INDUSTRY_DIRECTOR =
  exports.NEW_BOARD_INDUSTRY_CONVEYOR =
  exports.NEW_BOARD_INDUSTRY_CIRCUITRY =
  exports.NEW_BOARD_INDUSTRY_CHEMICAL_INDUSTRY =
  exports.NEW_BOARD_INDUSTRY_BOILER =
    void 0;

var _typeof2 = _interopRequireDefault(require('@babel/runtime/helpers/typeof'));

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread2'));

var _ = _interopRequireWildcard(require('lodash'));

// NEW_BOARD_INDUSTRY_CONVEYOR(121,"传送带"),
//     NEW_BOARD_INDUSTRY_STORAGE_SILO(122,"储料罐"),
//     NEW_BOARD_INDUSTRY_CHEMICAL_INDUSTRY(123,"化工"),
//     NEW_BOARD_INDUSTRY_MATERIAL_HANDLING(124,"原料处理"),
//     NEW_BOARD_INDUSTRY_REACTOR(125,"反应器"),
//     NEW_BOARD_INDUSTRY_DIRECTOR(126,"控制器"),
//     NEW_BOARD_INDUSTRY_MACHINE_WORK(127,"机械加工"),
//     NEW_BOARD_INDUSTRY_PUMP(128,"泵"),
//     NEW_BOARD_INDUSTRY_ELECTRIC_MACHINERY(129,"电机"),
//     NEW_BOARD_INDUSTRY_CIRCUITRY(130,"电路图"),
//     NEW_BOARD_INDUSTRY_PIPELINE(131,"管道"),
//     NEW_BOARD_INDUSTRY_VENT_LINE(132,"通风管道"),
//     NEW_BOARD_INDUSTRY_MINE(133,"采矿"),
//     NEW_BOARD_INDUSTRY_STEEL_INDUSTRY(134,"钢铁行业"),
//     NEW_BOARD_INDUSTRY_BOILER(135,"锅炉"),
//     NEW_BOARD_INDUSTRY_KLEP(136,"阀门"),
var NEW_BOARD_INDUSTRY_CONVEYOR = [121, '传送带'];
exports.NEW_BOARD_INDUSTRY_CONVEYOR = NEW_BOARD_INDUSTRY_CONVEYOR;
var NEW_BOARD_INDUSTRY_STORAGE_SILO = [122, '储料罐'];
exports.NEW_BOARD_INDUSTRY_STORAGE_SILO = NEW_BOARD_INDUSTRY_STORAGE_SILO;
var NEW_BOARD_INDUSTRY_CHEMICAL_INDUSTRY = [123, '化工'];
exports.NEW_BOARD_INDUSTRY_CHEMICAL_INDUSTRY = NEW_BOARD_INDUSTRY_CHEMICAL_INDUSTRY;
var NEW_BOARD_INDUSTRY_MATERIAL_HANDLING = [124, '原料处理'];
exports.NEW_BOARD_INDUSTRY_MATERIAL_HANDLING = NEW_BOARD_INDUSTRY_MATERIAL_HANDLING;
var NEW_BOARD_INDUSTRY_REACTOR = [125, '反应器'];
exports.NEW_BOARD_INDUSTRY_REACTOR = NEW_BOARD_INDUSTRY_REACTOR;
var NEW_BOARD_INDUSTRY_DIRECTOR = [126, '控制器'];
exports.NEW_BOARD_INDUSTRY_DIRECTOR = NEW_BOARD_INDUSTRY_DIRECTOR;
var NEW_BOARD_INDUSTRY_MACHINE_WORK = [127, '机械加工'];
exports.NEW_BOARD_INDUSTRY_MACHINE_WORK = NEW_BOARD_INDUSTRY_MACHINE_WORK;
var NEW_BOARD_INDUSTRY_PUMP = [128, '泵'];
exports.NEW_BOARD_INDUSTRY_PUMP = NEW_BOARD_INDUSTRY_PUMP;
var NEW_BOARD_INDUSTRY_ELECTRIC_MACHINERY = [129, '电机'];
exports.NEW_BOARD_INDUSTRY_ELECTRIC_MACHINERY = NEW_BOARD_INDUSTRY_ELECTRIC_MACHINERY;
var NEW_BOARD_INDUSTRY_CIRCUITRY = [130, '电路图'];
exports.NEW_BOARD_INDUSTRY_CIRCUITRY = NEW_BOARD_INDUSTRY_CIRCUITRY;
var NEW_BOARD_INDUSTRY_PIPELINE = [131, '管道'];
exports.NEW_BOARD_INDUSTRY_PIPELINE = NEW_BOARD_INDUSTRY_PIPELINE;
var NEW_BOARD_INDUSTRY_VENT_LINE = [132, '通风管道'];
exports.NEW_BOARD_INDUSTRY_VENT_LINE = NEW_BOARD_INDUSTRY_VENT_LINE;
var NEW_BOARD_INDUSTRY_MINE = [133, '采矿'];
exports.NEW_BOARD_INDUSTRY_MINE = NEW_BOARD_INDUSTRY_MINE;
var NEW_BOARD_INDUSTRY_STEEL_INDUSTRY = [134, '钢铁行业'];
exports.NEW_BOARD_INDUSTRY_STEEL_INDUSTRY = NEW_BOARD_INDUSTRY_STEEL_INDUSTRY;
var NEW_BOARD_INDUSTRY_BOILER = [135, '锅炉'];
exports.NEW_BOARD_INDUSTRY_BOILER = NEW_BOARD_INDUSTRY_BOILER;
var NEW_BOARD_INDUSTRY_KLEP = [136, '阀门'];
exports.NEW_BOARD_INDUSTRY_KLEP = NEW_BOARD_INDUSTRY_KLEP;
var industry_List = [
  NEW_BOARD_INDUSTRY_CONVEYOR,
  NEW_BOARD_INDUSTRY_STORAGE_SILO,
  NEW_BOARD_INDUSTRY_CHEMICAL_INDUSTRY,
  NEW_BOARD_INDUSTRY_MATERIAL_HANDLING,
  NEW_BOARD_INDUSTRY_REACTOR,
  NEW_BOARD_INDUSTRY_DIRECTOR,
  NEW_BOARD_INDUSTRY_MACHINE_WORK,
  NEW_BOARD_INDUSTRY_PUMP,
  NEW_BOARD_INDUSTRY_ELECTRIC_MACHINERY,
  NEW_BOARD_INDUSTRY_CIRCUITRY,
  NEW_BOARD_INDUSTRY_PIPELINE,
  NEW_BOARD_INDUSTRY_VENT_LINE,
  NEW_BOARD_INDUSTRY_MINE,
  NEW_BOARD_INDUSTRY_STEEL_INDUSTRY,
  NEW_BOARD_INDUSTRY_BOILER,
  NEW_BOARD_INDUSTRY_KLEP,
];
exports.industry_List = industry_List;

var onDrag = function onDrag(event, item) {
  if (!item.width) {
    event.dataTransfer.setData(
      'Text',
      JSON.stringify({
        name: 'image',
        rect: {
          width: 150,
          height: 150,
        },
        image: item.url,
      }),
    );
    return;
  }

  var eventClone = _.cloneDeep(event);

  fitImageSize(item).then(function (r) {
    eventClone.dataTransfer.setData(
      'Text',
      JSON.stringify({
        name: 'image',
        rect: {
          width: r.width,
          height: r.height,
        },
        image: r.url,
      }),
    );
  });
};

exports.onDrag = onDrag;

var scaleWidthHeight = function scaleWidthHeight(width, height, maxSize) {
  if (width > maxSize && width > height) {
    var w = maxSize;
    var h = Math.round((w * height) / width);
    return {
      width: w,
      height: h,
    };
  } else {
    var _h = maxSize;

    var _w = Math.round((_h * width) / height);

    return {
      width: _w,
      height: _h,
    };
  }
};

exports.scaleWidthHeight = scaleWidthHeight;

var rtnImg = function rtnImg(nImg, resolve, maxSize, img) {
  var width = nImg.width;
  var height = nImg.height;
  var r = scaleWidthHeight(width, height, maxSize);
  resolve(
    (0, _objectSpread2.default)(
      (0, _objectSpread2.default)({}, img),
      {},
      {
        url: img.url + '?_t=' + new Date().getTime(),
        width: r.width,
        height: r.height,
      },
    ),
  );
};
/**
 *
 * @param img
 * @param maxSize
 */

exports.rtnImg = rtnImg;

var fitImageSize = function fitImageSize(img) {
  var maxSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  return new Promise(function (resolve, reject) {
    if (!img.width) {
      // 如果没有图片的宽度
      var nImg = new Image();
      nImg.src = img.url;

      if (img.complete) {
        rtnImg(nImg, resolve, maxSize, img);
      } else {
        nImg.onload = function () {
          rtnImg(nImg, resolve, maxSize, img);
        };
      }
    } else if ((0, _typeof2.default)(img) === 'object') {
      // 包含图片大小的对象
      if (img.width <= maxSize && img.height <= maxSize) {
        resolve((0, _objectSpread2.default)({}, img));
      } else if (img.width > maxSize && img.width > img.height) {
        var width = maxSize;
        var height = (width * img.height) / img.width;
        resolve(
          (0, _objectSpread2.default)(
            (0, _objectSpread2.default)({}, img),
            {},
            {
              width: width,
              height: height,
            },
          ),
        );
      } else {
        var _height = maxSize;

        var _width = (_height * img.width) / img.height;

        resolve(
          (0, _objectSpread2.default)(
            (0, _objectSpread2.default)({}, img),
            {},
            {
              width: _width,
              height: _height,
            },
          ),
        );
      }
    }
  });
};

exports.fitImageSize = fitImageSize;
