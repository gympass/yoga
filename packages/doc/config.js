const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://github.com/Gympass/design-system",
    gaTrackingId: null
  },
  header: {
    logo:
      "https://lh3.googleusercontent.com/TaYofylGO1sDLvFc_8FPU0N7ziDTUmI8hO2OMZtWpsRRAgCwGNtC5hVhgC3SnTMMw3fK",
    logoLink: "",
    title: "Gympass Design System",
    githubUrl: "",
    helpUrl: "",
    tweetText: "",
    links: [{ text: "", link: "" }],
    search: {
      enabled: false,
      indexName: "",
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY
    }
  },
  sidebar: {
    forcedNavOrder: ["/getting-started"],
    links: [
      {
        text: "Github repository",
        link: "https://github.com/Gympass/design-system"
      }
    ],
    frontline: false,
    ignoreIndex: true
  },
  siteMetadata: {
    title: "Gympass Design System",
    description: "Documentation",
    ogImage: null,
    docsLocation: "",
    favicon:
      "https://lh3.googleusercontent.com/TaYofylGO1sDLvFc_8FPU0N7ziDTUmI8hO2OMZtWpsRRAgCwGNtC5hVhgC3SnTMMw3fK"
  }
};

module.exports = config;
