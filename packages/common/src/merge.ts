type UnknownObject = Record<string, unknown>;

const merge = <TargetType extends UnknownObject, SourceType extends UnknownObject>(target: TargetType, source: SourceType): TargetType & SourceType => {
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

  return newTarget as TargetType & SourceType;
};

export default merge;
