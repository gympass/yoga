/** Line Height values follows the golden ratio typhography
 * https://grtcalculator.com/math/
 */
import goldenRatio from './utils';
import fontSizes from './font-sizes';

const lineHeight = fontSizes.map(f => Math.round(f * goldenRatio));

lineHeight.h6 = lineHeight[1];
lineHeight.h5 = lineHeight[2];
lineHeight.h4 = lineHeight[3];
lineHeight.h3 = lineHeight[4];
lineHeight.h2 = lineHeight[5];
lineHeight.h1 = lineHeight[6];

lineHeight.body = lineHeight[2];
lineHeight.bodysmall = lineHeight[1];

export default lineHeight;
