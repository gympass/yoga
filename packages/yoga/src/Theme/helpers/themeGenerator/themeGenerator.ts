import YogaTokens from '../../../../../tokens';

type ThemeVars = {
  (tokens: typeof YogaTokens): {};
  isFromThemeBuilder?: boolean;
};

/**
 * Gets a function that one could sent to \<ThemeProvider> in order to inject a custom thme (or sets of tokens)
 */
function createTheme(themeVars: ThemeVars) {
  if (typeof themeVars !== 'function')
    throw new TypeError(
      `Invalid param 'themeVars', expected 'function', received '${typeof themeVars}'.`,
    );

  console.log('themeVars', themeVars);
  const themeBuilder = themeVars.bind({});

  themeBuilder.isFromThemeBuilder = true;

  return themeBuilder;
}

/**
 * This callback is displayed as part of the Requester class.
 */
export default createTheme;
