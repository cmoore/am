import { TextFunction, AccessorFunction, GenericD3Selection } from '../misc/typings';
export declare enum TooltipSymbol {
    CIRCLE = "circle",
    LINE = "line",
    SQUARE = "square"
}
export interface ITooltip {
    /** symbol to show in the tooltip (defaults to line) */
    legendObject?: TooltipSymbol;
    /** description of the different data arrays shown in the legend */
    legend?: Array<string>;
    /** array of colors for the different data arrays, defaults to schemeCategory10 */
    colors?: Array<string>;
    /** custom text formatting function -- generated from accessors if not defined */
    textFunction?: TextFunction;
    /** entries to show in the tooltip, usually empty when first instantiating */
    data?: Array<any>;
    /** margin to the left of the tooltip */
    left?: number;
    /** margin to the top of the tooltip */
    top?: number;
    /** if no custom text function is specified, specifies how to get the x value from a specific data point */
    xAccessor?: AccessorFunction;
    /** if no custom text function is specified, specifies how to get the y value from a specific data point */
    yAccessor?: AccessorFunction;
}
export default class Tooltip {
    legendObject: TooltipSymbol;
    legend: Array<string>;
    colors: string[];
    data: Array<any>;
    left: number;
    top: number;
    node: any;
    textFunction: (x: any) => string;
    constructor({ legendObject, legend, colors, textFunction, data, left, top, xAccessor, yAccessor }: ITooltip);
    /**
     * Sets the text function for the tooltip.
     *
     * @param textFunction custom text function for the tooltip text. Generated from xAccessor and yAccessor if not
     * @param xAccessor if no custom text function is specified, this function specifies how to get the x value from a specific data point.
     * @param yAccessor if no custom text function is specified, this function specifies how to get the y value from a specific data point.
     */
    setTextFunction(textFunction?: TextFunction, xAccessor?: AccessorFunction, yAccessor?: AccessorFunction): void;
    /**
     * If no textFunction was specified when creating the tooltip instance, this method generates a text function based on the xAccessor and yAccessor.
     *
     * @param xAccessor returns the x value of a given data point.
     * @param yAccessor returns the y value of a given data point.
     * @returns base text function used to render the tooltip for a given datapoint.
     */
    baseTextFunction(xAccessor: AccessorFunction, yAccessor: AccessorFunction): TextFunction;
    /**
     * Update the tooltip.
     */
    update({ data, legendObject, legend }: Pick<ITooltip, 'data' | 'legendObject' | 'legend'>): void;
    /**
     * Hide the tooltip (without destroying it).
     */
    hide(): void;
    /**
     * Mount the tooltip to the given d3 node.
     *
     * @param svg d3 node to mount the tooltip to.
     */
    mountTo(svg: GenericD3Selection): void;
    /**
     * Adds the text to the tooltip.
     * For each datapoint in the data array, one line is added to the tooltip.
     */
    addText(): void;
}
