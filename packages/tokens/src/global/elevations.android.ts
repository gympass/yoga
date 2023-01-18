/**
 * @module elevation
 * @desc Elevation (z-index) tokens module.
 *
 * @memberof @gympass/yoga-tokens
 */

/**
 * An elevation
 * @typedef Elevation
 *
 * @type {Object}
 * @property {String} zero
 * @property {String} small
 * @property {String} medium
 * @property {String} large
 */

/**
 * @type Elevation
 * @default
 */
 interface elevationsProps extends Array<number> {
  zero?: number;
  small?: number;
  medium?: number;
  large?: number;
}

const elevations: elevationsProps = [0, 4, 8, 12];

[elevations.zero, elevations.small, elevations.medium, elevations.large] =
  elevations;

export default elevations;
