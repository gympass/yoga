/**
 * @module fontsizes
 * @desc Font sizes tokens module.
 *  The font-size values follows the golden ratio typhography
 *
 * @see https://grtcalculator.com/math/
 * @memberof @gympass/tokens
 */

import goldenRatio from '../utils';

const baseFontSize = 16;

function grtCalc(ratio) {
  return Math.round(baseFontSize * goldenRatio ** ratio);
}

const ratios = [-1, -1 / 2, 0, 1 / 2, 1, 3 / 2, 2];

/**
 * A font size
 * @typedef FontSize
 *
 * @type {Object}
 *
 * @property {FontSizeLevel} header Headings font sizes
 * @property {FontSizeLevel} body Body font sizes
 */

/**
 * @type {FontSize}
 * @default
 */
const fontSizes = ratios.map(grtCalc);

/**
 * The font size level
 * @typedef FontSizeLevel
 *
 * @type {Object}
 *
 * @property {Object<Number, Number>} level Font size level
 */

/**
 * @type {FontSizeLevel}
 */
const header = {
  level: {},
};
[
  ,
  header.level[6],
  header.level[5],
  header.level[4],
  header.level[3],
  header.level[2],
  header.level[1],
] = fontSizes;

/**
 * @type {FontSizeLevel}
 */
const body = {
  level: {},
};
[body.level[1], body.level[2]] = [fontSizes[2], fontSizes[1]];

fontSizes.header = header;
fontSizes.body = body;

export default fontSizes;
