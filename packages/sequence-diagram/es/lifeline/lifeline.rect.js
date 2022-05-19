import { Rect } from '@top-datav/core';
export function lifelineIconRect(node) {
  node.iconRect = new Rect(0, 0, 0, 0);
}
export function lifelineTextRect(node) {
  node.textRect = new Rect(node.rect.x, node.rect.y, node.rect.width, 50);
  node.fullTextRect = node.textRect;
}
