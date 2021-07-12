import Scale from '../components/scale';
import Axis, { IAxis } from '../components/axis';
import Tooltip from '../components/tooltip';
import Point, { IPoint } from '../components/point';
import { SvgD3Selection, AccessorFunction, Margin, GenericD3Selection, BrushType, DomainObject, Domain, LegendSymbol } from '../misc/typings';
declare type TooltipFunction = (datapoint: any) => string;
export interface IAbstractChart {
    /** data that is to be visualized */
    data: Array<any>;
    /** DOM node to which the graph will be mounted (D3 selection or D3 selection specifier) */
    target: string | SvgD3Selection;
    /** total width of the graph */
    width: number;
    /** total height of the graph */
    height: number;
    /** markers that should be added to the chart. Each marker object should be accessible through the xAccessor and contain a label field */
    markers?: Array<any>;
    /** baselines that should be added to the chart. Each baseline object should be accessible through the yAccessor and contain a label field */
    baselines?: Array<any>;
    /** either name of the field that contains the x value or function that receives a data object and returns its x value */
    xAccessor?: string | AccessorFunction;
    /** either name of the field that contains the y value or function that receives a data object and returns its y value */
    yAccessor?: string | AccessorFunction;
    /** margins of the visualization for labels */
    margin?: Margin;
    /** amount of buffer between the axes and the graph */
    buffer?: number;
    /** custom color scheme for the graph */
    colors?: Array<string>;
    /** overwrite parameters of the auto-generated x scale */
    xScale?: Scale;
    /** overwrite parameters of the auto-generated y scale */
    yScale?: Scale;
    /** overwrite parameters of the auto-generated x axis */
    xAxis?: Axis;
    /** overwrite parameters of the auto-generated y axis */
    yAxis?: Axis;
    /** whether or not to show a tooltip */
    showTooltip?: boolean;
    /** generate a custom tooltip string */
    tooltipFunction?: (datapoint: any) => string;
    /** names of the sub-arrays of data, used as legend labels */
    legend?: Array<string>;
    /** DOM node to which the legend will be mounted (D3 selection or D3 selection specifier) */
    legendTarget: string | GenericD3Selection;
    /** add an optional brush */
    brush: BrushType;
    /** custom domain computations */
    computeDomains?: () => DomainObject;
}
/**
 * This abstract chart class implements all functionality that is shared between all available chart types.
 */
export default abstract class AbstractChart {
    id: string;
    data: Array<any>;
    markers: Array<any>;
    baselines: Array<any>;
    target: SvgD3Selection;
    svg?: GenericD3Selection;
    content?: GenericD3Selection;
    container?: GenericD3Selection;
    xAccessor: AccessorFunction;
    yAccessor: AccessorFunction;
    colors: Array<string>;
    xDomain: Domain;
    yDomain: Domain;
    xScale: Scale;
    yScale: Scale;
    xAxis?: Axis;
    xAxisParams: any;
    yAxis?: Axis;
    yAxisParams: any;
    showTooltip: boolean;
    tooltipFunction?: TooltipFunction;
    tooltip?: Tooltip;
    legend?: Array<string>;
    legendTarget?: GenericD3Selection;
    width: number;
    height: number;
    margin: Margin;
    buffer: number;
    brush: BrushType;
    idleDelay: number;
    idleTimeout: unknown;
    constructor({ data, target, markers, baselines, xAccessor, yAccessor, margin, buffer, width, height, colors, xScale, yScale, xAxis, yAxis, showTooltip, tooltipFunction, legend, legendTarget, brush, computeDomains }: IAbstractChart);
    /**
     * Draw the abstract chart.
     */
    abstractRedraw(): void;
    /**
     * Draw the actual chart.
     * This is meant to be overridden by chart implementations.
     */
    abstract redraw(): void;
    mountBrush(whichBrush: BrushType): void;
    /**
     * Mount a new legend if necessary
     * @param {String} symbolType symbol type (circle, square, line)
     */
    mountLegend(symbolType: LegendSymbol): void;
    /**
     * Mount new x axis.
     *
     * @param xAxis object that can be used to overwrite parameters of the auto-generated x {@link Axis}.
     */
    mountXAxis(xAxis: Partial<IAxis>): void;
    /**
     * Mount new y axis.
     *
     * @param yAxis object that can be used to overwrite parameters of the auto-generated y {@link Axis}.
     */
    mountYAxis(yAxis: Partial<IAxis>): void;
    /**
     * Mount a new tooltip if necessary.
     *
     * @param showTooltip whether or not to show a tooltip.
     * @param tooltipFunction function that receives a data object and returns the string displayed as tooltip.
     */
    mountTooltip(showTooltip?: boolean, tooltipFunction?: TooltipFunction): void;
    /**
     * Mount the main container.
     */
    mountContainer(): void;
    /**
     * This method is called by the abstract chart constructor.
     * Append the local svg node to the specified target, if necessary.
     * Return existing svg node if it's already present.
     */
    mountSvg(): void;
    /**
     * If needed, charts can implement data normalizations, which are applied when instantiating a new chart.
     * TODO this is currently unused
     */
    /**
     * Usually, the domains of the chart's scales depend on the chart type and the passed data, so this should usually be overwritten by chart implementations.
     * @returns domains for x and y axis as separate properties.
     */
    computeDomains(): DomainObject;
    /**
     * Set tick format of the x axis.
     */
    computeXAxisType(): void;
    /**
     * Set tick format of the y axis.
     */
    computeYAxisType(): void;
    generatePoint(args: Partial<IPoint>): Point;
    get top(): number;
    get left(): number;
    get bottom(): number;
    get plotTop(): number;
    get plotLeft(): number;
    get innerWidth(): number;
    get innerHeight(): number;
}
export {};
