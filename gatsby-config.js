module.exports = {
  siteMetadata: {
    siteUrl: "https://comgy.github.io",
    title: "comgy.github.io",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/blog`,
      },
    },
    "gatsby-transformer-remark",
  ],
};
