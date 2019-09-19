const merge = (target, source) => {
  let newTarget = { ...target };
  for (let key in source) {
    newTarget[key] = source[key];
    if (source[key] !== null && typeof source[key] === 'object') {
      newTarget[key] = merge(target[key] || {}, newTarget[key]);
    }
  }
  return newTarget;
};

export { merge };
