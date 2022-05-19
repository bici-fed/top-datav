'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.createDiv = createDiv;
exports.createLayerDiv = createLayerDiv;
exports.loadJS = loadJS;

var _storeUtils = require('@top-datav/store-utils');

function createDiv(node) {
  var div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.outline = 'none';
  div.style.left = '-9999px';
  div.style.bottom = '-9999px';
  div.style.width = node.rect.width + 'px';
  div.style.height = node.rect.height + 'px';

  if (node.elementId) {
    div.id = node.elementId;
  }

  return div;
}

function createLayerDiv(node) {
  var div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.outline = 'none';
  div.style.left = '-9999px';
  div.style.bottom = '-9999px';
  div.style.width = node.rect.width + 'px';
  div.style.height = node.rect.height + 'px';
  div.style.backgroundColor = '#ccc';

  if (node.elementId) {
    div.id = node.elementId + '-layer';
  }

  return div;
}

function loadJS(url, callback, render) {
  var loaderScript = document.createElement('script');
  loaderScript.type = 'text/javascript';
  loaderScript.src = url;
  loaderScript.addEventListener('load', function () {
    if (callback) {
      callback();
    } // how to do

    if (render) {
      _storeUtils.Store.set('LT:render', true);
    }
  });
  document.body.appendChild(loaderScript);
}
