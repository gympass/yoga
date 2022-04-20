const path = require('path');
const startCase = require('lodash.startcase');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx(filter: { fields: { slug: { regex: "/^//" } } }) {
              edges {
                node {
                  fields {
                    id
                  }
                  tableOfContents
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `,
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors); // eslint-disable-line no-console
          reject(result.errors);
        }

        // Create blog posts pages.
        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug
              ? [...new Set(node.fields.slug.split('/'))].join('/') ||
                node.fields.slug
              : '/',
            component: path.resolve('./src/templates/docs.jsx'),
            context: {
              id: node.fields.id,
            },
          });
        });
      }),
    );
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const parent = getNode(node.parent);
    const value =
      parent.relativePath && parent.relativePath.replace(parent.ext, '');

    createNodeField({
      name: 'slug',
      node,
      value: `/${value && value.replace('index', '')}`,
    });

    createNodeField({
      name: 'id',
      node,
      value: node.id,
    });

    createNodeField({
      name: 'title',
      node,
      value: node.frontmatter.title || startCase(parent.name),
    });

    createNodeField({
      name: 'linkable',
      node,
      value:
        node.frontmatter.linkable === undefined
          ? true
          : node.frontmatter.linkable,
    });

    createNodeField({
      name: 'order',
      node,
      value: node.frontmatter.order || 0,
    });

    createNodeField({
      name: 'open',
      node,
      value: node.frontmatter.open === undefined ? true : node.frontmatter.open,
    });
  }
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        assets: path.resolve(__dirname, 'static'),
        images: path.resolve(__dirname, 'src/images'),
      },
    },
  });

  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-inspector/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
