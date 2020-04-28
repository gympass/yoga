const createFakeObj = (paths = ['theme', 'yoga']) => {
  return new Proxy(() => {}, {
    get(target, key) {
      return key === 'isReactComponent'
        ? false
        : createFakeObj([...paths, key]);
    },
    apply(target, thisArg, [props]) {
      return paths.reduce((acc, path) => acc[path], props);
    },
  });
};

export default createFakeObj();
