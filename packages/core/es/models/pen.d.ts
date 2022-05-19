import { Point } from './point';
import { Rect } from './rect';
import { EventType, EventAction } from './event';
import { Lock } from './status';
export declare enum PenType {
  Node = 0,
  Line = 1,
}
export declare abstract class Pen {
  TID: string;
  id: string;
  type: PenType;
  name: string;
  tags: string[];
  rect: Rect;
  lineWidth: number;
  rotate: number;
  offsetRotate: number;
  globalAlpha: number;
  dash: number;
  lineDash: number[];
  lineDashOffset: number;
  strokeStyle: string;
  fillStyle: string;
  lineCap: string;
  font: {
    color: string;
    fontFamily: string;
    fontSize: number;
    lineHeight: number;
    fontStyle: string;
    fontWeight: string;
    textAlign: string;
    textBaseline: string;
    background: string;
  };
  text: string;
  textMaxLine: number;
  whiteSpace: string;
  autoRect: boolean;
  textRect: Rect;
  fullTextRect: Rect;
  textOffsetX: number;
  textOffsetY: number;
  shadowColor: string;
  shadowBlur: number;
  shadowOffsetX: number;
  shadowOffsetY: number;
  animateFn: string | Function;
  animateType: string;
  animateStart: number;
  animateCycle: number;
  animateCycleIndex: number;
  nextAnimate: string;
  animatePlay: boolean;
  animatePos: number;
  locked: Lock;
  stand: boolean;
  hideInput: boolean;
  hideRotateCP: boolean;
  hideSizeCP: boolean;
  hideAnchor: boolean;
  markdown: string;
  tipId: string;
  title: string;
  events: {
    type: EventType;
    action: EventAction;
    value: string;
    params: string;
    name?: string;
  }[];
  private eventFns;
  parentId: string;
  rectInParent: {
    x: number | string;
    y: number | string;
    width: number | string;
    height: number | string;
    marginTop?: number | string;
    marginRight?: number | string;
    marginBottom?: number | string;
    marginLeft?: number | string;
    rotate: number;
    rect?: Rect;
  };
  paddingTopNum: number;
  paddingBottomNum: number;
  paddingLeftNum: number;
  paddingRightNum: number;
  visible: boolean;
  data: any;
  value: number;
  constructor(json?: any);
  render(ctx: CanvasRenderingContext2D): void;
  click(): void;
  dblclick(): void;
  doSocketMqtt(
    item: {
      type: EventType;
      action: EventAction;
      value: string;
      params: string;
      name?: string;
    },
    msg: any,
    client: any,
  ): void;
  show(): this;
  hide(): this;
  isVisible(): boolean;
  getTID(): string;
  setTID(id: string): this;
  startAnimate(): void;
  private link;
  private doStartAnimate;
  private doPauseAnimate;
  private doStopAnimate;
  private doFn;
  private doWindowFn;
  generateStoreKey(key: any): string;
  abstract getTextRect(): Rect;
  abstract calcRectInParent(parent: Pen): void;
  abstract calcRectByParent(parent: Pen): void;
  abstract draw(ctx: CanvasRenderingContext2D): void;
  abstract translate(x: number, y: number): void;
  abstract scale(scale: number, center?: Point): void;
  abstract hit(
    point: {
      x: number;
      y: number;
    },
    padding?: number,
  ): any;
  abstract clone(): Pen;
  abstract initAnimate(): void;
  abstract animate(now: number): void;
  abstract pauseAnimate(): void;
  abstract stopAnimate(): void;
}
