const merge = (target, source) => {
  const newTarget = { ...target };

  Object.keys(source).forEach(key => {
    newTarget[key] = source[key];

    if (
      source[key] !== null &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key])
    ) {
      newTarget[key] = merge(target[key] || {}, newTarget[key]);
    }
  });

  return newTarget;
};

export default merge;
