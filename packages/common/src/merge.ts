type UnknownObject = Record<string, unknown>;

const merge = <T extends UnknownObject, U extends UnknownObject>(target: T, source: U): T & U => {
  const newTarget: UnknownObject = { ...target };

  Object.keys(source).forEach(key => {
    newTarget[key] = source[key];

    if (
      source[key] !== null &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key])
    ) {
      newTarget[key] = merge(target[key] as UnknownObject || {}, newTarget[key] as UnknownObject);
    }
  });

  return newTarget as T & U;
};

export default merge;
