function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
import * as _ from "lodash";
export var NEW_BOARD_INDUSTRY_CONVEYOR = [121, "传送带"];
export var NEW_BOARD_INDUSTRY_STORAGE_SILO = [122, "储料罐"];
export var NEW_BOARD_INDUSTRY_CHEMICAL_INDUSTRY = [123, "化工"];
export var NEW_BOARD_INDUSTRY_MATERIAL_HANDLING = [124, "原料处理"];
export var NEW_BOARD_INDUSTRY_REACTOR = [125, "反应器"];
export var NEW_BOARD_INDUSTRY_DIRECTOR = [126, "控制器"];
export var NEW_BOARD_INDUSTRY_MACHINE_WORK = [127, "机械加工"];
export var NEW_BOARD_INDUSTRY_PUMP = [128, "泵"];
export var NEW_BOARD_INDUSTRY_ELECTRIC_MACHINERY = [129, "电机"];
export var NEW_BOARD_INDUSTRY_CIRCUITRY = [130, "电路图"];
export var NEW_BOARD_INDUSTRY_PIPELINE = [131, "管道"];
export var NEW_BOARD_INDUSTRY_VENT_LINE = [132, "通风管道"];
export var NEW_BOARD_INDUSTRY_MINE = [133, "采矿"];
export var NEW_BOARD_INDUSTRY_STEEL_INDUSTRY = [134, "钢铁行业"];
export var NEW_BOARD_INDUSTRY_BOILER = [135, "锅炉"];
export var NEW_BOARD_INDUSTRY_KLEP = [136, "阀门"];
export var industry_List = [NEW_BOARD_INDUSTRY_CONVEYOR, NEW_BOARD_INDUSTRY_STORAGE_SILO, NEW_BOARD_INDUSTRY_CHEMICAL_INDUSTRY, NEW_BOARD_INDUSTRY_MATERIAL_HANDLING, NEW_BOARD_INDUSTRY_REACTOR, NEW_BOARD_INDUSTRY_DIRECTOR, NEW_BOARD_INDUSTRY_MACHINE_WORK, NEW_BOARD_INDUSTRY_PUMP, NEW_BOARD_INDUSTRY_ELECTRIC_MACHINERY, NEW_BOARD_INDUSTRY_CIRCUITRY, NEW_BOARD_INDUSTRY_PIPELINE, NEW_BOARD_INDUSTRY_VENT_LINE, NEW_BOARD_INDUSTRY_MINE, NEW_BOARD_INDUSTRY_STEEL_INDUSTRY, NEW_BOARD_INDUSTRY_BOILER, NEW_BOARD_INDUSTRY_KLEP];
export var onDrag = function onDrag(event, item) {
  if (!item.width) {
    event.dataTransfer.setData('Text', JSON.stringify({
      name: 'image',
      rect: {
        width: 150,
        height: 150
      },
      image: item.url
    }));
    return;
  }

  var eventClone = _.cloneDeep(event);

  fitImageSize(item).then(function (r) {
    eventClone.dataTransfer.setData('Text', JSON.stringify({
      name: 'image',
      rect: {
        width: r.width,
        height: r.height
      },
      image: r.url
    }));
  });
};
export var scaleWidthHeight = function scaleWidthHeight(width, height, maxSize) {
  if (width > maxSize && width > height) {
    var w = maxSize;
    var h = Math.round(w * height / width);
    return {
      width: w,
      height: h
    };
  } else {
    var _h = maxSize;

    var _w = Math.round(_h * width / height);

    return {
      width: _w,
      height: _h
    };
  }
};
export var rtnImg = function rtnImg(nImg, resolve, maxSize, img) {
  var width = nImg.width;
  var height = nImg.height;
  var r = scaleWidthHeight(width, height, maxSize);
  resolve(_objectSpread(_objectSpread({}, img), {}, {
    url: img.url + '?_t=' + new Date().getTime(),
    width: r.width,
    height: r.height
  }));
};
/**
 *
 * @param img
 * @param maxSize
 */

export var fitImageSize = function fitImageSize(img) {
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
    } else if (_typeof(img) === 'object') {
      // 包含图片大小的对象
      if (img.width <= maxSize && img.height <= maxSize) {
        resolve(_objectSpread({}, img));
      } else if (img.width > maxSize && img.width > img.height) {
        var width = maxSize;
        var height = width * img.height / img.width;
        resolve(_objectSpread(_objectSpread({}, img), {}, {
          width: width,
          height: height
        }));
      } else {
        var _height = maxSize;

        var _width = _height * img.width / img.height;

        resolve(_objectSpread(_objectSpread({}, img), {}, {
          width: _width,
          height: _height
        }));
      }
    }
  });
};