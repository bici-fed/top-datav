export function simpleClass(ctx, node) {
  var wr = node.borderRadius;
  var hr = node.borderRadius;

  if (node.borderRadius < 1) {
    wr = node.rect.width * node.borderRadius;
    hr = node.rect.height * node.borderRadius;
  }

  var r = wr < hr ? wr : hr;

  if (node.rect.width < 2 * r) {
    r = node.rect.width / 2;
  }

  if (node.rect.height < 2 * r) {
    r = node.rect.height / 2;
  }

  ctx.beginPath();
  ctx.moveTo(node.rect.x + r, node.rect.y);
  ctx.arcTo(node.rect.x + node.rect.width, node.rect.y, node.rect.x + node.rect.width, node.rect.y + node.rect.height, r);
  ctx.arcTo(node.rect.x + node.rect.width, node.rect.y + node.rect.height, node.rect.x, node.rect.y + node.rect.height, r);
  ctx.arcTo(node.rect.x, node.rect.y + node.rect.height, node.rect.x, node.rect.y, r);
  ctx.arcTo(node.rect.x, node.rect.y, node.rect.x + node.rect.width, node.rect.y, r);
  ctx.closePath();
  ctx.moveTo(node.rect.x, node.rect.y + 40);
  ctx.lineTo(node.rect.ex, node.rect.y + 40);
  (node.fillStyle || node.bkType) && ctx.fill();
  ctx.stroke();
}
export function interfaceClass(ctx, node) {
  var wr = node.borderRadius;
  var hr = node.borderRadius;

  if (node.borderRadius < 1) {
    wr = node.rect.width * node.borderRadius;
    hr = node.rect.height * node.borderRadius;
  }

  var r = wr < hr ? wr : hr;

  if (node.rect.width < 2 * r) {
    r = node.rect.width / 2;
  }

  if (node.rect.height < 2 * r) {
    r = node.rect.height / 2;
  }

  ctx.beginPath();
  ctx.moveTo(node.rect.x + r, node.rect.y);
  ctx.arcTo(node.rect.x + node.rect.width, node.rect.y, node.rect.x + node.rect.width, node.rect.y + node.rect.height, r);
  ctx.arcTo(node.rect.x + node.rect.width, node.rect.y + node.rect.height, node.rect.x, node.rect.y + node.rect.height, r);
  ctx.arcTo(node.rect.x, node.rect.y + node.rect.height, node.rect.x, node.rect.y, r);
  ctx.arcTo(node.rect.x, node.rect.y, node.rect.x + node.rect.width, node.rect.y, r);
  ctx.closePath();
  ctx.moveTo(node.rect.x, node.rect.y + 40);
  ctx.lineTo(node.rect.ex, node.rect.y + 40);
  var height = node.rect.y + 20 + node.rect.height / 2;
  ctx.moveTo(node.rect.x, height);
  ctx.lineTo(node.rect.ex, height);
  (node.fillStyle || node.bkType) && ctx.fill();
  ctx.stroke();
}