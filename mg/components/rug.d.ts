import { AccessorFunction, GenericD3Selection } from '../misc/typings';
import Scale from './scale';
export declare enum RugOrientation {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical"
}
export interface IRug {
    /** accessor used to get the rug value for a given datapoint */
    accessor: AccessorFunction;
    /**scale function of the rug */
    scale: Scale;
    /** data to be rugged */
    data: Array<any>;
    /** length of the rug's ticks */
    tickLength?: number;
    /** color scheme of the rug ticks */
    colors?: Array<string>;
    /** orientation of the rug */
    orientation?: RugOrientation;
    /** left margin of the rug */
    left?: number;
    /** top margin of the rug */
    top?: number;
}
export default class Rug {
    accessor: AccessorFunction;
    scale: Scale;
    rugObject: any;
    data: Array<any>;
    left: number;
    top: number;
    tickLength: number;
    colors: string[];
    orientation: RugOrientation;
    constructor({ accessor, scale, data, tickLength, colors, orientation, left, top }: IRug);
    get isVertical(): boolean;
    /**
     * Mount the rug to the given node.
     *
     * @param svg d3 node to mount the rug to.
     */
    mountTo(svg: GenericD3Selection): void;
}
