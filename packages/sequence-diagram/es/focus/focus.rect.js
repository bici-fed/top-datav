import { Rect } from '@top-datav/core';
export function sequenceFocusIconRect(node) {
  node.iconRect = new Rect(0, 0, 0, 0);
}
export function sequenceFocusTextRect(node) {
  node.textRect = new Rect(0, 0, 0, 0);
  node.fullTextRect = node.textRect;
}