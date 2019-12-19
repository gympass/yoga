import { merge } from '@gympass/yoga-common';

const createObjectNesting = (routes, { title, url, linkable, order }) => {
  const newObj = {};
  let temp = newObj;

  routes.forEach(item => {
    /* eslint-disable-next-line */
    temp = temp[item] = {
      title,
      url,
      linkable,
      order,
    };
  });

  return newObj;
};

const createTree = items => {
  const filteredItems = items.filter(item => item);

  let allRoutes = {};

  filteredItems.forEach(({ title, url, linkable, order }) => {
    const explodedUrl = url.split('/').filter(item => item);
    const routeObj = createObjectNesting(explodedUrl, {
      title,
      url,
      linkable,
      order,
    });
    allRoutes = merge(routeObj, allRoutes);
  });

  const [filteredRoutes] = Object.values(allRoutes);

  if (!filteredRoutes) {
    return {};
  }

  delete filteredRoutes.title;
  delete filteredRoutes.url;
  delete filteredRoutes.linkable;
  delete filteredRoutes.order;

  return filteredRoutes;
};

export default createTree;
