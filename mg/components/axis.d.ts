import Scale from './scale';
import { TextFunction, LineD3Selection, TextD3Selection, GD3Selection } from '../misc/typings';
declare type NumberFormatFunction = (x: number) => string;
declare type DateFormatFunction = (x: Date) => string;
declare type FormatFunction = NumberFormatFunction | DateFormatFunction;
export declare enum AxisOrientation {
    TOP = "top",
    BOTTOM = "bottom",
    RIGHT = "right",
    LEFT = "left"
}
export declare enum AxisFormat {
    DATE = "date",
    NUMBER = "number",
    PERCENTAGE = "percentage"
}
export interface IAxis {
    /** scale of the axis */
    scale: Scale;
    /** buffer used by the chart, necessary to compute margins */
    buffer: number;
    /** whether or not to show the axis */
    show?: boolean;
    /** orientation of the axis */
    orientation?: AxisOrientation;
    /** optional label to place beside the axis */
    label?: string;
    /** offset between label and axis */
    labelOffset?: number;
    /** translation from the top of the chart's box to render the axis */
    top?: number;
    /** translation from the left of the chart's to render the axis */
    left?: number;
    /** can be 1) a function to format a given tick or a specifier, or 2) one of the available standard formatting types (date, number, percentage) or a string for d3-format */
    tickFormat?: TextFunction | AxisFormat | string;
    /** number of ticks to render, defaults to 3 for vertical and 6 for horizontal axes */
    tickCount?: number;
    /** whether or not to render a compact version of the axis (clamps the main axis line at the outermost ticks) */
    compact?: boolean;
    /** prefix for tick labels */
    prefix?: string;
    /** suffix for tick labels */
    suffix?: string;
    /** overwrite d3's default tick lengths */
    tickLength?: number;
    /** draw extended ticks into the graph (used to make a grid) */
    extendedTicks?: boolean;
    /** if extended ticks are used, this parameter specifies the inner length of ticks */
    height?: number;
}
export default class Axis {
    label: string;
    labelOffset: number;
    top: number;
    left: number;
    scale: Scale;
    orientation: AxisOrientation;
    axisObject: any;
    compact: boolean;
    extendedTicks: boolean;
    buffer: number;
    height: number;
    prefix: string;
    suffix: string;
    constructor({ orientation, label, labelOffset, top, left, height, scale, tickFormat, tickCount, compact, buffer, prefix, suffix, tickLength, extendedTicks }: IAxis);
    /**
     * Set the label offset.
     *
     * @param labelOffset offset of the label.
     */
    setLabelOffset(labelOffset?: number): void;
    /**
     * Set up the main axis object.
     */
    setupAxisObject(): void;
    /**
     * Get the domain object call function.
     * @returns that mounts the domain when called.
     */
    domainObject(): (g: GD3Selection) => LineD3Selection;
    /**
     * Get the label object call function.
     * @returns {Function} that mounts the label when called.
     */
    labelObject(): (node: GD3Selection) => TextD3Selection;
    get isVertical(): boolean;
    get innerLeft(): number;
    get innerTop(): number;
    get tickAttribute(): string;
    get extendedTickLength(): number;
    /**
     * Mount the axis to the given d3 node.
     * @param svg d3 node.
     */
    mountTo(svg: GD3Selection): void;
    /**
     * Compute the time formatting function based on the time domain.
     * @returns d3 function for formatting time.
     */
    diffToTimeFormat(): FormatFunction;
    /**
     * Get the d3 number formatting function for an abstract number type.
     *
     * @param formatType abstract format to be converted (number, date, percentage)
     * @returns d3 formatting function for the given abstract number type.
     */
    stringToFormat(formatType: AxisFormat | string): FormatFunction;
    set tickFormat(tickFormat: FormatFunction | string);
    set tickCount(tickCount: number);
    set tickLength(length: number);
}
export {};
