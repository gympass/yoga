import { merge } from '@gympass/yoga-common';

const createObjectNesting = (routes, { title, url, linkable }) => {
  const newObj = {};
  let temp = newObj;

  routes.forEach(item => {
    /* eslint-disable-next-line */
    temp = temp[item] = {
      title,
      url,
      linkable,
    };
  });

  return newObj;
};

const createTree = items => {
  const filteredItems = items.filter(item => item);
  let allRoutes = {};

  filteredItems.forEach(({ title, url, linkable }) => {
    const explodedUrl = url.split('/').filter(item => item);
    const routeObj = createObjectNesting(explodedUrl, { title, url, linkable });
    allRoutes = merge(routeObj, allRoutes);
  });

  const [filteredRoutes] = Object.values(allRoutes);

  delete filteredRoutes.title;
  delete filteredRoutes.url;
  delete filteredRoutes.linkable;

  return filteredRoutes;
};

export default createTree;
