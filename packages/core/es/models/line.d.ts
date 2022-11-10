import { Pen } from './pen';
import { Point } from './point';
import { Rect } from './rect';
export declare class Line extends Pen {
    from: Point;
    to: Point;
    controlPoints: Point[];
    fromArrow: string;
    toArrow: string;
    fromArrowSize: number;
    toArrowSize: number;
    fromArrowColor: string;
    toArrowColor: string;
    length: number;
    borderWidth: number;
    borderColor: string;
    animateColor: string;
    animateSpan: number;
    animateLineDash: number[];
    isAnimate: boolean;
    animateFromSize: number;
    animateToSize: number;
    animatePos: number;
    animateDot: {
        x: number;
        y: number;
    };
    animateDotSize: number;
    lineJoin: CanvasLineJoin;
    manualCps: boolean;
    disableEmptyLine: boolean;
    constructor(json?: any);
    setFrom(from: Point, fromArrow?: string): void;
    setTo(to: Point, toArrow?: string): void;
    calcControlPoints(force?: boolean): void;
    draw(ctx: CanvasRenderingContext2D): void;
    pointIn(pt: {
        x: number;
        y: number;
    }): any;
    getLen(): number;
    calcTextRect(): void;
    getTextRect(): Rect;
    getCenter(): Point;
    getLineCenter(from: Point, to: Point): Point;
    getPointByPos(pos: number): Point;
    getLinePtByPos(from: Point, to: Point, pos: number): Point;
    calcRectInParent(parent: Pen): void;
    calcRectByParent(parent: Pen): void;
    initAnimate(): void;
    pauseAnimate(): void;
    stopAnimate(): void;
    animate(now: number): void;
    getBubbles(): any[];
    round(): void;
    translate(x: number, y: number): void;
    scale(scale: number, center: Point): void;
    hit(pt: Point, padding?: number): any;
    clone(): Line;
}
