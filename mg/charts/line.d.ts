import AbstractChart, { IAbstractChart } from './abstractChart';
import Delaunay, { IDelaunay } from '../components/delaunay';
import { AccessorFunction, InteractionFunction, EmptyInteractionFunction } from '../misc/typings';
import { IPoint } from '../components/point';
declare type ConfidenceBand = [AccessorFunction | string, AccessorFunction | string];
export interface ILineChart extends IAbstractChart {
    /** specifies for which sub-array of data an area should be shown. Boolean if data is a simple array */
    area?: Array<any> | boolean;
    /** array with two elements specifying how to access the lower (first) and upper (second) value for the confidence band. The two elements work like accessors and are either a string or a function */
    confidenceBand?: ConfidenceBand;
    /** custom parameters passed to the voronoi generator */
    voronoi?: Partial<IDelaunay>;
    /** function specifying whether or not to show a given datapoint */
    defined?: (point: any) => boolean;
    /** accessor specifying for a given data point whether or not to show it as active */
    activeAccessor?: AccessorFunction | string;
    /** custom parameters passed to the active point generator. See {@see Point} for a list of parameters */
    activePoint?: Partial<IPoint>;
}
export default class LineChart extends AbstractChart {
    delaunay?: Delaunay;
    defined?: (point: any) => boolean;
    activeAccessor?: AccessorFunction;
    activePoint?: Partial<IPoint>;
    area?: Array<any> | boolean;
    confidenceBand?: ConfidenceBand;
    delaunayParams?: Partial<IDelaunay>;
    delaunayPoints: Array<any>;
    constructor({ area, confidenceBand, voronoi, defined, activeAccessor, activePoint, ...args }: ILineChart);
    redraw(): void;
    /**
     * Mount lines for each array of data points.
     */
    mountLines(): void;
    /**
     * If an active accessor is specified, mount active points.
     * @param params custom parameters for point generation. See {@see Point} for a list of options.
     */
    mountActivePoints(params: Partial<IPoint>): void;
    /**
     * Mount all specified areas.
     *
     * @param area specifies for which sub-array of data an area should be shown. Boolean if data is a simple array.
     */
    mountAreas(area: Array<any> | boolean): void;
    /**
     * Mount the confidence band specified by two accessors.
     *
     * @param lowerAccessor for the lower confidence bound. Either a string (specifying the property of the object representing the lower bound) or a function (returning the lower bound when given a data point).
     * @param upperAccessor for the upper confidence bound. Either a string (specifying the property of the object representing the upper bound) or a function (returning the upper bound when given a data point).
     */
    mountConfidenceBand([lowerAccessor, upperAccessor]: ConfidenceBand): void;
    /**
     * Mount markers, if any.
     */
    mountMarkers(): void;
    mountBaselines(): void;
    /**
     * Handle incoming points from the delaunay move handler.
     *
     * @returns handler function.
     */
    onPointHandler(): InteractionFunction;
    /**
     * Handles leaving the delaunay area.
     *
     * @returns handler function.
     */
    onLeaveHandler(): EmptyInteractionFunction;
    /**
     * Mount a new delaunay triangulation instance.
     *
     * @param customParameters custom parameters for {@link Delaunay}.
     */
    mountDelaunay(customParameters: Partial<IDelaunay>): void;
    computeYAxisType(): void;
}
export {};
