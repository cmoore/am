import AbstractShape, { IAbstractShape } from './abstractShape';
import { AccessorFunction, GenericD3Selection } from '../misc/typings';
export interface IRect extends IAbstractShape {
    /** function to access the x value of the rectangle */
    xAccessor: AccessorFunction;
    /** function to access the y value of the rectangle */
    yAccessor: AccessorFunction;
    /** function to access the width of the rectangle */
    widthAccessor: AccessorFunction;
    /** function to access the height of the rectangle */
    heightAccessor: AccessorFunction;
}
export default class Rect extends AbstractShape {
    xAccessor: AccessorFunction;
    yAccessor: AccessorFunction;
    widthAccessor: AccessorFunction;
    heightAccessor: AccessorFunction;
    constructor({ xAccessor, yAccessor, widthAccessor, heightAccessor, ...args }: IRect);
    get x(): number;
    get y(): number;
    get width(): number;
    get height(): number;
    /**
     * Mount the rectangle to the given node.
     *
     * @param svg d3 node to mount the rectangle to.
     */
    mountTo(svg: GenericD3Selection): void;
    /**
     * Update the rectangle.
     *
     * @param data updated data object.
     */
    update({ data, ...args }: Partial<IAbstractShape>): void;
}
