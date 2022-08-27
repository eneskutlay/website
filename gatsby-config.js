module.exports = {
  siteMetadata: {
    title: `website`,
    siteUrl: `https://www.yourdomain.tld`,
    navFirst: `📁 Projects`,
    navSec: `📝 Write`,
    navThr: `➡️ Links`,
    userName: `I'm Enes Kutlay`,
    student: `, a software developer student at `,
    school: ` Ecole42 `,
    focus: ` I'm mainly focused on learn Front-End development and C programming.`,
    openSource: `Usually share my projects and assignments as open source on `,
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};