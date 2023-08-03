import '@testing-library/jest-native/extend-expect';

const frameTime = 10;

/**
 * This fix came to help with the RN's jest setup requestAnimationFrame issue that
 * was affecting native's components tests that relate with animations.
 * At the link below we can find more detailed description.
 *  * https://stackoverflow.com/questions/42268673/jest-test-animated-view-for-react-native-app/51067606#51067606
 */
global.requestAnimationFrame = cb => {
  setTimeout(cb, frameTime);
};

/**
 * This fix was originally proposed by the package react-16-node-hanging-test-fix
 * (https://npmjs.com/package/react-16-node-hanging-test-fix). Actually, the problem
 * this fix solves was not supposed to be hapenning since it was first observed in
 * previous versions of packages we use here (jest, node, react, etc.). However,
 * it seems to be back in latest version as we can see in issues like the one below.
 * The link of the original issue describing the problem follows too.
 *  * https://github.com/callstack/react-native-testing-library/issues/1054#issuecomment-1575660634
 *  * https://github.com/facebook/react/issues/20756#issuecomment-780927519
 *  * https://github.com/callstack/react-native-testing-library/issues/1007
 */
delete global.MessageChannel;
