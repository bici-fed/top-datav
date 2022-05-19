'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _helper = require('./helper');

var _excluded = ['size', 'color', 'style'];

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var DEFAULT_STYLE = {
  display: 'block',
};

var Iconliuhetecaishuzihuagongchang = function Iconliuhetecaishuzihuagongchang(_ref) {
  var size = _ref.size,
    color = _ref.color,
    _style = _ref.style,
    rest = _objectWithoutProperties(_ref, _excluded);

  var style = _style ? _objectSpread(_objectSpread({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
  return /*#__PURE__*/ _react['default'].createElement(
    'svg',
    _extends(
      {
        viewBox: '0 0 10678 1024',
        width: size + 'px',
        height: size + 'px',
        style: style,
      },
      rest,
    ),
    /*#__PURE__*/ _react['default'].createElement('path', {
      d: 'M876.470857 174.957714c93.622857-0.877714 240.274286 109.714286 440.100572 331.922286C1020.635429 851.602286 798.500571 1024 650.093714 1024c-106.276571-0.877714-185.051429-55.734857-236.544-164.644571 42.203429 35.108571 91.940571 52.662857 149.211429 52.662857 155.574857 2.633143 459.117714-268.8 459.117714-428.324572-3.803429-122.148571-73.362286-147.968-135.314286-149.211428-83.456 0-136.557714 48.859429-136.557714 86.162285 0 81.042286 21.504 87.478857 70.802286 102.912-59.465143 55.369143-194.779429-3.803429-194.779429-96.475428 0-81.042286 129.024-249.563429 250.441143-252.123429z m9772.105143-77.531428v122.88h-650.24v289.792l0.731429 22.747428c3.657143 224.987429-86.747429 376.832-271.067429 455.460572v-112.64l12.580571-17.042286c23.917714-34.377143 40.521143-69.997714 49.883429-106.861714 11.629714-43.666286 17.408-105.106286 17.408-184.32V97.426286h840.704zM5957.632 56.466286V237.714286h169.984v63.488l8.777143-9.874286c39.862857-48.201143 64.585143-125.805714 74.166857-232.813714h152.576l-2.998857 22.454857c-4.315429 29.257143-9.435429 55.881143-15.433143 79.945143h212.992v112.64h-44.032l-0.512 29.403428c-4.900571 193.316571-39.204571 336.749714-102.912 430.372572 31.451429 41.691429 76.434286 85.650286 135.168 132.096v122.88c-90.770286-50.468571-162.450286-102.765714-215.04-156.672-49.810286 48.493714-119.442286 99.693714-208.896 153.6v-119.808l19.968-17.554286c45.348571-40.813714 81.993143-80.018286 110.08-117.613714-51.931429-83.968-86.308571-193.828571-103.424-329.728a125.659429 125.659429 0 0 1-23.552 9.216V350.354286h-56.32l5.632 13.385143c12.507429 26.697143 32.841143 52.589714 60.928 77.750857V529.554286l-18.285714-7.314286c-82.944-35.328-135.899429-86.162286-158.866286-152.429714v133.12h-140.288V368.786286l-5.997714 13.897143c-29.988571 64.146286-86.674286 112.713143-170.130286 145.846857V440.466286l13.165714-11.629715c25.234286-23.625143 43.739429-49.810286 55.442286-78.482285h-68.608V237.714286h176.128V56.466286h140.288z m-138.24 459.776v52.224h138.24v-52.224h138.24v52.224h45.056v112.64h-50.176l-2.413714 18.285714c-10.24 65.609143-35.766857 117.248-76.434286 154.770286 26.624 8.850286 57.709714 18.432 93.184 28.672v102.4c-92.891429-17.773714-165.888-37.229714-219.136-58.368-62.829714 23.186286-150.162286 42.642286-262.144 58.368v-102.4l45.641143-9.508572c30.354286-6.875429 60.489143-14.628571 90.550857-23.259428-40.96-40.228571-65.828571-96.548571-74.752-168.96h-55.296v-112.64h51.2v-52.224h138.24zM4891.648 55.442286v109.568h103.424v112.64h-103.424v7.168l6.509714 25.380571c18.797714 68.096 49.737143 139.190857 92.818286 213.211429v141.312l-19.821714-20.260572c-31.963429-33.353143-58.514286-64.877714-79.506286-94.427428v435.2h-158.72V617.618286l-15.286857 26.477714c-31.817143 53.394286-71.460571 108.690286-118.857143 166.034286V657.554286l17.554286-36.059429a1409.462857 1409.462857 0 0 0 109.421714-343.844571h-112.64v-112.64h119.808V55.442286h158.72zM3885.056 53.394286v145.408h49.152v107.52h-49.152v216.064l16.091429-4.096c10.898286-2.706286 22.235429-5.485714 34.084571-8.192v110.592l-5.851429 2.194285c-6.509714 2.267429-15.140571 4.973714-25.892571 8.045715l-18.432 6.144v347.136h-158.72V675.986286l-14.116571 2.779428c-34.304 6.436571-77.677714 12.288-130.267429 17.700572V560.274286l22.674286-1.316572a2154.276571 2154.276571 0 0 0 121.709714-9.947428V306.322286h-36.864l-3.730286 16.822857c-16.822857 66.413714-54.857143 118.784-114.029714 157.257143V368.786286l4.534857-12.214857c18.797714-55.003429 27.794286-137.947429 27.209143-248.905143h102.4l-0.146286 24.502857c-0.219429 23.917714-0.877714 46.153143-1.901714 66.633143h22.528V53.394286h158.72z m4124.672 5.12l-6.875429 27.867428c-21.211429 81.92-46.153143 148.041143-75.044571 198.436572V980.114286h-168.96V432.274286l-20.918857 7.241143a505.709714 505.709714 0 0 1-68.169143 16.310857V357.522286l11.556571-7.094857c72.192-47.396571 121.563429-144.676571 148.187429-291.913143h180.224z m-6154.24 319.488l0.365714 26.038857c0.731429 284.013714-105.837714 476.013714-319.853714 576.073143v-135.168l17.115429-20.553143c43.812571-55.003429 73.581714-111.689143 89.380571-169.910857 19.090286-64.877714 28.306286-157.037714 27.648-276.48h185.344z m463.872 0l-0.731429 26.331428c-2.925714 199.533714 41.984 346.404571 134.875429 440.612572V980.114286c-220.525714-103.131429-326.948571-303.762286-319.488-602.112h185.344z m5118.976-49.152v115.712l-21.138286 18.139428A649.216 649.216 0 0 1 7233.536 570.514286v12.288h349.184v117.76h-349.184v118.784l0.292571 13.531428c0.146286 101.376-51.2 149.796571-153.892571 145.188572H6917.12v-112.64h78.848l7.533714 0.219428c28.964571-0.438857 42.422857-19.017143 40.594286-55.515428V700.562286H6650.88v-117.76h393.216v-52.224l22.454857-8.777143a537.819429 537.819429 0 0 0 130.121143-80.310857h-393.216v-112.64h634.88zM5448.704 55.442286v109.568h83.968v112.64h-83.968v549.888l-0.292571 13.165714c-3.949714 90.185143-49.225143 135.314286-135.899429 135.314286h-139.264v-112.64h63.488l8.557714-0.219429c26.989714-2.121143 40.228571-17.700571 39.570286-46.884571V289.938286l-3.072 28.818285c-27.428571 228.644571-124.342857 417.718857-290.816 567.149715v-132.096l14.701714-25.234286c71.68-127.853714 114.980571-278.162286 129.682286-450.925714h-105.472v-112.64h254.976V55.442286h163.84zM4423.68 485.522286v57.344h73.728v112.64H4423.68v177.152l-0.731429 14.043428c-6.582857 82.285714-48.64 125.074286-126.244571 128.292572h-138.24v-112.64h59.392l7.460571-0.219429c23.625143-2.121143 35.108571-17.700571 34.523429-46.884571V655.506286h-305.152v-112.64h305.152v-57.344h163.84z m-1038.336 59.392v260.096l-0.146286 14.189714c-2.925714 101.741714-52.662857 151.990857-149.357714 150.674286h-582.656V544.914286h732.16zM8292.352 58.514286v342.016l19.017143-18.212572a566.125714 566.125714 0 0 0 127.414857-198.875428h176.128l-8.411429 23.844571c-60.854857 164.571429-165.595429 284.964571-314.148571 361.179429v201.728l-0.073143 10.166857c1.024 45.568 22.893714 67.145143 65.609143 64.585143h31.744c34.816 1.389714 51.931429-16.384 51.2-53.248V724.114286h143.36v93.184l-0.146286 12.726857c-2.925714 91.136-52.370286 136.045714-148.333714 134.729143h-163.84c-112.493714-1.755429-167.131429-57.051429-163.84-165.888V642.194286l-31.158857 8.996571c-31.597714 8.630857-64.585143 16.603429-98.889143 23.771429v-112.64l34.230857-10.24c33.645714-10.532571 65.609143-22.528 95.817143-35.84V58.514286h184.32z m1274.88 62.464V242.834286h-310.272v558.08h360.448v122.88h-909.312v-122.88h359.424V242.834286h-311.296V120.978286h811.008zM3211.264 662.674286h-384v189.44h334.848c32.768 0.731429 49.152-18.066286 49.152-56.32V662.674286zM666.477714 0c106.276571 0.877714 185.051429 55.734857 236.544 164.644571-42.203429-35.108571-91.940571-52.662857-149.211428-52.662857-155.574857-2.633143-459.117714 268.8-459.117715 428.324572 3.803429 122.148571 73.362286 147.968 135.314286 149.211428 83.456 0 136.557714-48.859429 136.557714-86.162285 0-81.042286-21.504-87.478857-70.802285-102.912 59.465143-55.369143 194.779429 3.803429 194.779428 96.475428 0 81.042286-129.024 249.563429-250.441143 252.123429-93.622857 0.877714-240.274286-109.714286-440.100571-331.922286C295.936 172.397714 518.070857 0 666.477714 0z m3443.858286 686.226286l10.898286 23.405714c20.626286 46.592 34.742857 92.745143 42.349714 138.386286h-151.552l-2.925714-20.626286a759.149714 759.149714 0 0 0-39.058286-141.165714h140.288z m1841.152-5.12h-129.024l2.56 15.725714c8.338286 40.886857 27.940571 72.850286 58.88 95.890286 36.205714-25.965714 58.733714-63.122286 67.584-111.616z m421.888-407.552h-71.68l-8.850286 14.189714a274.066286 274.066286 0 0 1-48.493714 53.394286h40.96l2.852571 28.525714c9.069714 84.114286 23.186286 153.746286 42.203429 209.042286 23.917714-71.68 38.253714-173.348571 43.008-305.152zM3126.272 46.226286l10.605714 19.017143c69.924571 118.930286 187.977143 209.188571 353.938286 270.774857V447.634286l-28.745143-7.314286a1598.464 1598.464 0 0 1-150.454857-46.957714v76.8h-583.68V392.338286l-15.579429 5.924571c-43.154286 15.945143-98.304 32.402286-165.668571 49.371429V336.018286l25.819429-9.947429c160.914286-64.658286 273.846857-157.988571 338.724571-279.844571h215.04z m1178.624 6.144v67.584h160.768v112.64h-160.768v105.472h201.728v117.76h-563.2v-117.76h192.512V232.594286H3978.24V119.954286h157.696V52.370286h168.96zM3018.752 209.042286a727.04 727.04 0 0 1-200.704 143.36h399.36a755.858286 755.858286 0 0 1-198.656-143.36zM7216.128 60.562286v63.488h333.824v183.296h-168.96v-70.656H6850.56v71.68h-167.936v-184.32h328.704V60.562286h204.8zM2095.104 58.514286v104.448h349.184v122.88H1547.264v-122.88h343.04V58.514286h204.8z m3671.04 17.408l3.584 29.549714c5.632 38.985143 15.067429 76.288 28.16 111.762286H5683.2l-9.581714-22.674286a442.075429 442.075429 0 0 1-28.306286-118.637714h120.832z m366.592 0l-2.340571 20.992c-6.217143 47.908571-17.334857 87.625143-33.499429 119.296h-115.712l5.632-17.188572a686.665143 686.665143 0 0 0 24.064-123.099428h121.856z',
      fill: (0, _helper.getIconColor)(color, 0, '#FFFFFF'),
    }),
  );
};

Iconliuhetecaishuzihuagongchang.defaultProps = {
  size: 18,
};
var _default = Iconliuhetecaishuzihuagongchang;
exports['default'] = _default;
