type AnyObject = {
  [key: string]: any;
};

const merge = <T extends AnyObject, U extends AnyObject>(target: T, source: U): T & U => {
  const newTarget: AnyObject = { ...target };

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

  return newTarget as T & U;
};

export default merge;
