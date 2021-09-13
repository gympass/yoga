function resolve(obj, path) {
  try {
    return path
      .split('.')
      .reduce((prev, curr) => prev && prev[curr], obj)
      .toString();
  } catch {
    return undefined;
  }
}

export default resolve;
