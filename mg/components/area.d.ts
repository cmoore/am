import { CurveFactory } from 'd3-shape';
import { AccessorFunction, DefinedFunction, SvgD3Selection } from '../misc/typings';
import Scale from './scale';
export interface IArea {
    /** data for which the area should be created */
    data: Array<any>;
    /** x accessor function */
    xAccessor: AccessorFunction;
    /** y accessor function */
    yAccessor: AccessorFunction;
    /** y base accessor function (defaults to 0) */
    y0Accessor?: AccessorFunction;
    /** alternative to yAccessor */
    y1Accessor?: AccessorFunction;
    /** scale used to scale elements in x direction */
    xScale: Scale;
    /** scale used to scale elements in y direction */
    yScale: Scale;
    /** curving function. See {@link https://github.com/d3/d3-shape#curves} for available curves in d3 */
    curve?: CurveFactory;
    /** color of the area */
    color?: string;
    /** specifies whether or not to show a given datapoint */
    defined?: DefinedFunction;
}
export default class Area {
    data: Array<any>;
    areaObject?: any;
    index: number;
    color: string;
    constructor({ data, xAccessor, yAccessor, y0Accessor, y1Accessor, xScale, yScale, curve, color, defined }: IArea);
    /**
     * Mount the area to a given d3 node.
     *
     * @param svg d3 node to mount the area to.
     */
    mountTo(svg: SvgD3Selection): void;
}
