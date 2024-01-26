import { ThemeProvider, FontLoader } from './Provider';
import yogaTheme, { v3theme } from './theme';
import theme from './helpers/themeReader';
import createTheme from './helpers/themeGenerator';

export { ThemeProvider, FontLoader, yogaTheme, theme, createTheme, v3theme };

export default ThemeProvider;
