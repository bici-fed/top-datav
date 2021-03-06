import { Point } from '../../models/point';
import { Pen } from '../../models/pen';
import { Line } from '../../models/line';
export declare function curve(ctx: CanvasRenderingContext2D, l: Line): void;
export declare function curveControlPoints(ctx: CanvasRenderingContext2D, l: Line): void;
export declare function calcCurveControlPoints(l: Line): void;
export declare function pointInCurve(point: Point, l: Line): boolean;
export declare function getBezierPoint(
  pos: number,
  from: Point,
  cp1: Point,
  cp2: Point,
  to: Point,
): Point;
export declare function getControlPt(pt: Point, to: Point): Point;
export declare function generateStoreKey(pen: Pen, key: String): string;
