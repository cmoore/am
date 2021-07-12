import AbstractChart, { IAbstractChart } from './abstractChart';
import Rect from '../components/rect';
import { InteractionFunction } from '../misc/typings';
export interface IHistogramChart extends IAbstractChart {
    binCount?: number;
}
/**
 * Creates a new histogram graph.
 *
 * @param {Object} args argument object. See {@link AbstractChart} for general parameters.
 * @param {Number} [args.binCount] approximate number of bins that should be used for the histogram. Defaults to what d3.bin thinks is best.
 */
export default class HistogramChart extends AbstractChart {
    bins: Array<any>;
    rects?: Array<Rect>;
    delaunay?: any;
    delaunayBar?: any;
    _activeBar: number;
    constructor({ binCount, ...args }: IHistogramChart);
    redraw(): void;
    /**
     * Mount the histogram rectangles.
     */
    mountRects(): void;
    /**
     * Handle move events from the delaunay triangulation.
     *
     * @returns handler function.
     */
    onPointHandler(): InteractionFunction;
    /**
     * Handle leaving the delaunay triangulation area.
     *
     * @returns handler function.
     */
    onLeaveHandler(): () => void;
    /**
     * Mount new delaunay triangulation.
     */
    mountDelaunay(): void;
    set activeBar(i: number);
}
