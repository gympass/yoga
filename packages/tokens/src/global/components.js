import colors from './colors';

/**
 * @module components
 * @desc Components tokens module.
 *
 * @memberof @gympass/tokens
 */

/**
 * A button component
 * @typedef Button
 * @type {Object}
 *
 * @property {Object} success
 * @property {Object} error
 */
const button = {
  success: colors.amsterda.crossfit,
  error: colors.madrid.crossfit,
};

/**
 * All components
 * @typedef Component
 * @type {Object}
 * @property {Button} button Tokens for button component
 */
const components = { button };

export default components;
