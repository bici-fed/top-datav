import { Rect } from '@top-datav/core';
export function simpleCardIconRect(node) {
  node.iconRect = new Rect(0, 0, 0, 0);
}
export function simpleCardTextRect(node) {
  node.textRect = new Rect(node.rect.x, node.rect.y, node.rect.width, 40);
  node.fullTextRect = node.textRect;
}