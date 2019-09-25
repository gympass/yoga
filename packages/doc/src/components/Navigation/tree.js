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

const createObjectNesting = (routes, { title, url }) => {
  const newObj = {};
  let temp = newObj;

  routes.forEach((item, index) => {
    temp = temp[item] = {
      title,
      url,
    };
  });

  return newObj;
};

const createTree = items => {
  const filteredItems = items.filter(item => item);
  let allRoutes = {};

  filteredItems.forEach(({ title, url }) => {
    const explodedUrl = url.split('/').filter(item => item);
    const routeObj = createObjectNesting(explodedUrl, { title, url });
    allRoutes = merge(routeObj, allRoutes);
  });

  return allRoutes;
};

export default createTree;
