import { CurveFactory } from 'd3-shape';
import { AccessorFunction, SvgD3Selection } from '../misc/typings';
import Scale from './scale';
export interface ILine {
    /** array of datapoints used to create the line */
    data: Array<any>;
    /** function to access the x value for a given datapoint */
    xAccessor: AccessorFunction;
    /** function to access the y value for a given datapoint */
    yAccessor: AccessorFunction;
    /** scale used to compute x values */
    xScale: Scale;
    /** scale used to compute y values */
    yScale: Scale;
    /** curving function used to draw the line. See {@link https://github.com/d3/d3-shape#curves} for curves available in d3 */
    curve?: CurveFactory;
    /** color of the line */
    color?: string;
    /** function specifying whether or not to show a given datapoint */
    defined?: (datapoint: any) => boolean;
}
export default class Line {
    lineObject?: any;
    data: Array<any>;
    color: string;
    constructor({ data, xAccessor, yAccessor, xScale, yScale, curve, color, defined }: ILine);
    /**
     * Mount the line to the given d3 node.
     *
     * @param svg d3 node to mount the line to.
     */
    mountTo(svg: SvgD3Selection): void;
}
