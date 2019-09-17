/** Font sizes values follows the golden ratio typhography
 * https://grtcalculator.com/math/
 */
import goldenRatio from './utils';

const baseFontSize = 16;

function grtCalc(ratio) {
  return Math.round(baseFontSize * goldenRatio ** ratio);
}

const ratios = [-1, -1 / 2, 0, 1 / 2, 1, 3 / 2, 2];

// [10, 13, 16, 20, 26, 33, 42]
const fontSizes = ratios.map(grtCalc);

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

const body = {
  level: {},
};
[body.level[1], body.level[2]] = [fontSizes[2], fontSizes[1]];

fontSizes.header = header;
fontSizes.body = body;

export default fontSizes;
