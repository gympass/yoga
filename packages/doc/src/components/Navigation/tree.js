import merge from '@gympass/common';

const createObjectNesting = (routes, { title, url }) => {
  const newObj = {};
  let temp = newObj;

  routes.forEach(item => {
    /* eslint-disable-next-line */
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
