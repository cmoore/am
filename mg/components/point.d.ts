import AbstractShape, { IAbstractShape } from './abstractShape';
import { AccessorFunction, SvgD3Selection } from '../misc/typings';
export interface IPoint extends IAbstractShape {
    /** function to access the x value of the point */
    xAccessor: AccessorFunction;
    /** function to access the y value of the point */
    yAccessor: AccessorFunction;
    /** radius of the point */
    radius?: number;
}
export default class Point extends AbstractShape {
    xAccessor: AccessorFunction;
    yAccessor: AccessorFunction;
    radius: number;
    constructor({ xAccessor, yAccessor, radius, ...args }: IPoint);
    get cx(): number;
    get cy(): number;
    /**
     * Mount the point to the given node.
     *
     * @param svg d3 node to mount the point to.
     */
    mountTo(svg: SvgD3Selection): void;
    /**
     * Update the point.
     *
     * @param data point object
     */
    update({ data, ...args }: IAbstractShape): void;
}
