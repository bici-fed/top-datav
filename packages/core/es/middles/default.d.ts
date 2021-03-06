import { Point } from '../models/point';
import { Node } from '../models/node';
import { Line } from '../models/line';
export declare const drawNodeFns: any;
export declare const iconRectFns: any;
export declare const textRectFns: any;
export declare const anchorsFns: any;
export declare const drawLineFns: any;
export declare const drawArrowFns: any;
export declare function registerNode(
  name: string,
  drawFn: (ctx: CanvasRenderingContext2D, node: Node) => void,
  anchorsFn?: (node: Node) => void,
  iconRectFn?: (node: Node) => void,
  textRectFn?: (node: Node) => void,
  force?: boolean,
): boolean;
export declare function registerLine(
  name: string,
  drawFn: (ctx: CanvasRenderingContext2D, line: Line) => void,
  drawControlPointsFn?: (ctx: CanvasRenderingContext2D, line: Line) => void,
  controlPointsFn?: (line: Line) => void,
  dockControlPointFn?: (point: Point, line: Line) => void,
  pointInFn?: (point: Point, line: Line) => boolean,
  force?: boolean,
): boolean;
export declare function registerArrow(
  name: string,
  drawFn: (ctx: CanvasRenderingContext2D, from: Point, to: Point, size: number) => void,
  force?: boolean,
): boolean;
