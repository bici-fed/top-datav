import { Rect } from '../../models/rect';
export function lineIconRect(node) {
  node.iconRect = new Rect(0, 0, 0, 0);
}
export function lineTextRect(node) {
  node.fullTextRect = new Rect(node.rect.x + 10, node.rect.y + node.rect.height / 2 - 20, node.rect.width - 20, 20);
  node.textRect = node.fullTextRect;
}