import { LegendSymbol } from '../misc/typings';
export interface ILegend {
    /** array of descriptive legend strings */
    legend: Array<string>;
    /** colors used for the legend -- will be darkened for better visibility */
    colorScheme: Array<string>;
    /** symbol used in the legend */
    symbolType: LegendSymbol;
}
export default class Legend {
    legend: Array<string>;
    colorScheme: Array<string>;
    symbolType: LegendSymbol;
    constructor({ legend, colorScheme, symbolType }: ILegend);
    /**
     * Darken a given color by a given amount.
     *
     * @see https://css-tricks.com/snippets/javascript/lighten-darken-color/
     * @param color hex color specifier
     * @param amount how much to darken the color
     * @returns darkened color in hex representation.
     */
    darkenColor(color: string, amount: number): string;
    /**
     * Clamp a number between 0 and 255.
     *
     * @param number number to be clamped.
     * @returns clamped number.
     */
    clamp(number: number): number;
    /**
     * Mount the legend to the given node.
     *
     * @param node d3 specifier or d3 node to mount the legend to.
     */
    mountTo(node: any): void;
}
