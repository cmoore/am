import { ScaleLinear } from 'd3-scale';
import { Domain, Range } from '../misc/typings';
export declare enum ScaleType {
    LINEAR = "linear"
}
declare type SupportedScale = ScaleLinear<number, number>;
export interface IScale {
    /** type of scale (currently only linear) */
    type?: ScaleType;
    /** scale range */
    range?: Range;
    /** scale domain */
    domain?: Domain;
    /** overwrites domain lower bound */
    minValue?: number;
    /** overwrites domain upper bound */
    maxValue?: number;
}
export default class Scale {
    type: ScaleType;
    scaleObject: SupportedScale;
    minValue?: number;
    maxValue?: number;
    constructor({ type, range, domain, minValue, maxValue }: IScale);
    /**
     * Get the d3 scale object for a given scale type.
     *
     * @param {String} type scale type
     * @returns {Object} d3 scale type
     */
    getScaleObject(type: ScaleType): SupportedScale;
    get range(): Range;
    set range(range: Range);
    get domain(): Domain;
    set domain(domain: Domain);
}
export {};
