/**
 * Gets a function that one could sent to \<ThemeProvider> in order to inject a custom thme (or sets of tokens)
 * @param {themeVars} themeVars - should return an object with a similar scheme of our tokens that will be replaced, can receive a tokens parameter
 * @returns {themeVars} themeVars - will return the same function which is injected to \<ThemeProvider>
 */
function createTheme(themeVars) {
  if (typeof themeVars !== 'function')
    throw new TypeError(
      `Invalid param 'themeVars', expected 'string', received '${typeof themeVars}'.`,
    );

  const themeBuilder = { ...themeVars, isFromThemeGenerator: true };

  return themeBuilder;
}

/**
 * This callback is displayed as part of the Requester class.
 * @callback themeVars
 * @param {Object.<string, string | number>} tokens - object containing Yoga tokens
 */

export default createTheme;
