/** Line Height values follows the golden ratio typhography
 * https://grtcalculator.com/math/
 */
import goldenRatio from './utils';
import fontSizes from './font-sizes';

const lineHeight = fontSizes.map(f => Math.round(f * goldenRatio));

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
] = lineHeight;

const body = {
  level: {},
};
[body.level[1], body.level[2]] = [lineHeight[2], lineHeight[1]];

lineHeight.header = header;
lineHeight.body = body;

export default lineHeight;
