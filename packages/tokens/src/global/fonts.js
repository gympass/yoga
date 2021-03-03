import weights from './font-weights';

/**
 * @module fonts
 * @desc Fonts tokens module.
 *
 * @memberof @gympass/yoga-tokens
 */

/**
 * A font
 * @typedef Font
 *
 * @type {Object}
 * @property {String} family
 * @property {Array<Number|String>} weight
 */

/**
 * @typedef Fonts
 * @type {Object}
 * @property {Font} rubik
 */

/**
 * @type {Fonts}
 */
const fonts = [
  {
    family: 'Rubik',
    weight: [...weights, ...weights.map(weight => `${weight}i`)],
  },
];
[fonts.rubik] = fonts;

export default fonts;
