/** Font sizes values follows the golden ratio typhography
 * https://grtcalculator.com/math/
 */
import goldenRatio from './utils';

const baseFontSize = 16;

function grtCalc(ratio) {
  return Math.round(baseFontSize * goldenRatio ** ratio);
}

const fontSizes = [
  grtCalc(-1),
  grtCalc(-1 / 2),
  baseFontSize,
  grtCalc(1 / 2),
  grtCalc(1),
  grtCalc(3 / 2),
  grtCalc(2),
];

fontSizes.h6 = fontSizes[1];
fontSizes.h5 = fontSizes[2];
fontSizes.h4 = fontSizes[3];
fontSizes.h3 = fontSizes[4];
fontSizes.h2 = fontSizes[5];
fontSizes.h1 = fontSizes[6];

fontSizes.body = baseFontSize;
fontSizes.bodysmall = fontSizes[1];

export default fontSizes;
