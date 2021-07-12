import { AccessorFunction } from './typings';
declare enum Dimension {
    HEIGHT = "height",
    WIDTH = "width"
}
/**
 * Handle cases where the user specifies an accessor string instead of an accessor function.
 *
 * @param functionOrString accessor string/function to be made an accessor function
 * @returns accessor function
 */
export declare function makeAccessorFunction(functionOrString: AccessorFunction | string): AccessorFunction;
/**
 * Generate a random id.
 * Used to create ids for clip paths, which need to be referenced by id.
 *
 * @returns random id string.
 */
export declare function randomId(): string;
/**
 * Get height or width in pixels.
 *
 * @param target d3 select specifier.
 * @param dimension height or width.
 * @returns width or height in pixels.
 */
export declare function getPixelDimension(target: string, dimension: Dimension): number;
/**
 * Get width of element.
 *
 * @param width custom width if applicable.
 * @param target d3 select specifier.
 * @returns width of element.
 */
export declare function getWidth(width: number, target: string): number;
/**
 * Get height of element.
 *
 * @param height custom height if applicable.
 * @param target d3 select specifier.
 * @returns height of element.
 */
export declare function getHeight(isFullHeight: boolean, height: number, target: string): number;
export {};
