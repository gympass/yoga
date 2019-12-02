import { merge } from '@gympass/yoga-common';

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

  const [filteredRoutes] = Object.values(allRoutes);

  delete filteredRoutes.title;
  delete filteredRoutes.url;

  return filteredRoutes;
};

export default createTree;
