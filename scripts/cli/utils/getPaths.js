const getPaths = name => {
  const base = `${process.cwd()}/packages/yoga/src`;

  return {
    base,
    web: `${base}/${name}/web`,
    native: `${base}/${name}/native`,
    doc: {
      web: `${process.cwd()}/packages/doc/content/components/components/${name.toLowerCase()}`,
      native: `${process.cwd()}/packages/labnative/pages`,
    },
  };
};

module.exports = getPaths;
