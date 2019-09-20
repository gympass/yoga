const goldenRatio = (1 + Math.sqrt(5)) / 2;

const merge = (target, source) => {
  const newTarget = { ...target };
  for (const key in source) {
    newTarget[key] = source[key];
    if (source[key] !== null && typeof source[key] === 'object') {
      newTarget[key] = merge(target[key] || {}, newTarget[key]);
    }
  }
  return newTarget;
};

export { merge, goldenRatio };
