const config = require('./config');
const plugins = [
  'gatsby-transformer-react-docgen',
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /images/, // See below to configure properly
      },
    },
  },
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  {
    resolve: `gatsby-plugin-layout`,
    options: {
      component: require.resolve(`./src/templates/docs.js`),
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
      name: 'design-system',
      path: `../design-system`,
    },
  },
  {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
      fonts: [
        {
          family: 'Open Sans',
          variants: ['400', '500', '700'],
        },
      ],
    },
  },
];

module.exports = {
  pathPrefix: config.gatsby.pathPrefix,
  siteMetadata: {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
    docsLocation: config.siteMetadata.docsLocation,
    ogImage: config.siteMetadata.ogImage,
    favicon: config.siteMetadata.favicon,
    logo: {
      link: config.header.logoLink ? config.header.logoLink : '/',
      image: config.header.logo,
    }, // backwards compatible
    headerTitle: config.header.title,
    githubUrl: config.header.githubUrl,
    helpUrl: config.header.helpUrl,
    tweetText: config.header.tweetText,
    headerLinks: config.header.links,
    siteUrl: config.gatsby.siteUrl,
  },
  plugins: plugins,
};
