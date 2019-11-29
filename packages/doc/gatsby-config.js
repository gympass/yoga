/* eslint-disable no-useless-escape */
const config = require('./config');

const plugins = [
  'gatsby-transformer-react-docgen',
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /images/,
      },
    },
  },
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  {
    resolve: `gatsby-plugin-layout`,
    options: {
      component: require.resolve(`./src/templates/docs.jsx`),
    },
  },
  'gatsby-plugin-styled-components',
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1035,
            sizeByPixelDensity: true,
          },
        },
        {
          resolve: 'gatsby-remark-copy-linked-files',
        },
      ],
      extensions: ['.mdx', '.md'],
    },
  },
  'gatsby-plugin-remove-trailing-slashes',
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'docs',
      path: `${__dirname}/content/`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'yoga',
      path: `../yoga`,
    },
  },
  {
    resolve: `gatsby-plugin-web-font-loader`,
    options: {
      typekit: {
        id: 'bzu7qrx',
      },
      google: {
        families: ['Open Sans'],
      },
    },
  },
];

module.exports = {
  siteMetadata: {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
    siteUrl: config.gatsby.siteUrl,
    github: {
      componentsPath: config.siteMetadata.github.componentsPath,
    },
  },
  plugins,
  pathPrefix: '/yoga',
};
