const handleItems = (edges, forcedNavOrder) =>
  edges
    .map(({ node }) => node.fields.slug)
    .filter(slug => slug !== '/')
    .sort()
    .reduce(
      (acc, cur) => {
        if (forcedNavOrder.find(url => url === cur)) {
          return { ...acc, [cur]: [cur] };
        }

        const prefix = cur.split('/')[1];

        if (prefix && forcedNavOrder.find(url => url === `/${prefix}`)) {
          return { ...acc, [`/${prefix}`]: [...acc[`/${prefix}`], cur] };
        }
        return { ...acc, items: [...acc.items, cur] };
      },
      { items: [] },
    );

const handleNavigation = (edges, forcedNavOrder, navItems) =>
  forcedNavOrder
    .reduce((acc, cur) => {
      return acc.concat(navItems[cur]);
    }, [])
    .concat(navItems.items)
    .map(slug => {
      if (slug) {
        const { node } = edges.find(
          ({ node: nodeChild }) => nodeChild.fields.slug === slug,
        );

        return { title: node.fields.title, url: node.fields.slug };
      }
      return null;
    });

export { handleItems, handleNavigation };
