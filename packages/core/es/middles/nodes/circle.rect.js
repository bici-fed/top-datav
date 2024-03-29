import { Rect } from '../../models/rect';
export function circleIconRect(node) {
  var w = node.rect.width / 2;
  var h = node.rect.height / 2;

  if (w > h) {
    w = h;
  } else {
    h = w;
  }

  var top = node.rect.height / 10;

  if (top < 10) {
    top = 10;
  }

  node.iconRect = new Rect(node.rect.x + (node.rect.width - w) / 2, node.rect.y + top, w, h);
}
export function circleTextRect(node) {
  var bottom = node.rect.height / 20;

  if (bottom < 5) {
    bottom = 0;
  }

  node.textRect = new Rect(node.rect.x + node.rect.width / 4, node.rect.y + node.rect.height * 2 / 3 - bottom, node.rect.width / 2, node.rect.height / 3 - 5);
  var w = node.rect.width * 5 / 7;
  var h = node.rect.height * 5 / 7;
  node.fullTextRect = new Rect(node.rect.x + (node.rect.width - w) / 2, node.rect.y + (node.rect.height - h) / 2, w, h);
}