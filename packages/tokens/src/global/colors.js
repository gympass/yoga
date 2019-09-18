/**
 * A color
 * @typedef {Object} Color
 * @property {string=} crossfit
 * @property {string=} climbing
 * @property {string=} swimming
 * @property {string=} meditation
 */

const red = ['#CB3530', '#F46152', '#F48170', '#FFE4E1'];
const orange = ['#F69755', '#FFAC6F', '#FCBE94', '#FDECE0'];
const yellow = ['#DFAF26', '#F3D04A', '#FFE461', '#FBFBBE'];
const green = ['#52E272', '#83FC8B', '#AAFDB6', '#D4FADC'];
const turquoise = ['#3FA99B', '#58C2B4', '#6FDCCB', '#D8F5F5'];
const sky = ['#4C9FE4', '#6EBCEA', '#95D4EF', '#CAE5F5'];
const ocean = ['#001027', '#21364F', '#3C6493', '#D6E1EE'];
const purple = ['#B3A1F2', '#C5BAF4', '#D8D0FC', '#EBE6FF'];
const white = '#FFFFFF';
const black = '#000000';
const gray = [
  '#41414A',
  '#6B6B78',
  '#9898A7',
  '#A9A9B8',
  '#C5C5D6',
  '#D3D3E2',
  '#DBDBE8',
  '#E6E6F0',
  '#F5F5FA',
];

/**
 * @type {Color}
 */
const madrid = {};
[madrid.crossfit, madrid.climbing, madrid.swimming, madrid.meditation] = red;

/**
 * @const {Color}
 */
const munich = {};
[munich.crossfit, munich.climbing, munich.swimming, munich.meditation] = orange;

/**
 * @const {Color}
 */
const milan = {};
[milan.crossfit, milan.climbing, milan.swimming, milan.meditation] = yellow;

/**
 * @const {Color}
 */
const amsterda = {};
[
  amsterda.crossfit,
  amsterda.climbing,
  amsterda.swimming,
  amsterda.meditation,
] = green;

/**
 * @const {Color}
 */
const saoPaulo = {};
[
  saoPaulo.crossfit,
  saoPaulo.climbing,
  saoPaulo.swimming,
  saoPaulo.meditation,
] = turquoise;

/**
 * @const {Color}
 */
const buenosAires = {};
[
  buenosAires.crossfit,
  buenosAires.climbing,
  buenosAires.swimming,
  buenosAires.meditation,
] = sky;

/**
 * @const {Color}
 */
const newYork = {};
[
  newYork.crossfit,
  newYork.climbing,
  newYork.swimming,
  newYork.meditation,
] = ocean;

/**
 * @const {Color}
 */
const paris = {};
[paris.crossfit, paris.climbing, paris.swimming, paris.meditation] = purple;

/**
 * @const {Color}
 */
const vilaOlimpia = {};
[
  vilaOlimpia[100],
  vilaOlimpia[90],
  vilaOlimpia[80],
  vilaOlimpia[70],
  vilaOlimpia[60],
  vilaOlimpia[50],
  vilaOlimpia[40],
  vilaOlimpia[30],
  vilaOlimpia[20],
  vilaOlimpia[10],
  vilaOlimpia[0],
] = [black, ...gray, white];

const colors = {
  madrid,
  munich,
  milan,
  amsterda,
  saoPaulo,
  buenosAires,
  newYork,
  paris,
  vilaOlimpia,
  white,
  black,
};

export default colors;
