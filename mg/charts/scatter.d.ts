import AbstractChart, { IAbstractChart } from './abstractChart';
import Delaunay from '../components/delaunay';
import Rug from '../components/rug';
import { AccessorFunction, InteractionFunction, EmptyInteractionFunction } from '../misc/typings';
import Point from '../components/point';
export interface IScatterChart extends IAbstractChart {
    /** accessor specifying the size of a data point. Can be either a string (name of the size field) or a function (receiving a data point and returning its size) */
    sizeAccessor?: string | AccessorFunction;
    /** whether or not to generate a rug for the x axis */
    xRug?: boolean;
    /** whether or not to generate a rug for the x axis */
    yRug?: boolean;
}
interface ActivePoint {
    i: number;
    j: number;
}
export default class ScatterChart extends AbstractChart {
    points?: Array<any>;
    delaunay?: Delaunay;
    delaunayPoint?: Point;
    sizeAccessor: AccessorFunction;
    showXRug: boolean;
    xRug?: Rug;
    showYRug: boolean;
    yRug?: Rug;
    _activePoint: ActivePoint;
    constructor({ sizeAccessor, xRug, yRug, ...args }: IScatterChart);
    redraw(): void;
    /**
     * Mount new rugs.
     */
    mountRugs(): void;
    /**
     * Mount scatter points.
     */
    mountPoints(): void;
    /**
     * Handle incoming points from the delaunay triangulation.
     *
     * @returns handler function
     */
    onPointHandler(): InteractionFunction;
    /**
     * Handle leaving the delaunay area.
     *
     * @returns handler function
     */
    onLeaveHandler(): EmptyInteractionFunction;
    /**
     * Mount new delaunay triangulation instance.
     */
    mountDelaunay(): void;
    set activePoint({ i, j }: ActivePoint);
}
export {};
