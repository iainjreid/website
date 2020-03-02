module.exports = {
  siteMetadata: {
    title: "Chaff Land",
    author: "Iain J. Reid",
    description: "Personal site of Iain J. Reid.",
    siteUrl: "https://chaff.land",
    social: {
      github: "iainreid820",
      linkedin: "iainreid194",
      twitter: "iainreid421",
      instagram: "candiedchaff"
    },
  },
  mapping: {
    "MarkdownRemark.frontmatter.featuredImage.sourceUrl": "File",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts/`,
      },
    },

    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    },

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow"
            }
          },
          "gatsby-remark-autolink-headers",
          "gatsby-remark-embed-snippet",
          "gatsby-remark-prismjs",
        ],
      },
    },

    {
      resolve: "gatsby-plugin-breadcrumb",
      options: {
        useAutoGen: true,
        crumbLabelUpdates: [
          {
            pathname: "/blog",
            crumbLabel: "Blog"
          },
          {
            pathname: "/how-to",
            crumbLabel: "How To"
          },
          {
            pathname: "/how-to/javascript",
            crumbLabel: "JavaScript"
          },
        ],
      }
     },

    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-89438965-1",
      },
    },

    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://chaff.land",
      },
    },

    "gatsby-transformer-sharp",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-cname",
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-offline",
  ],
}
