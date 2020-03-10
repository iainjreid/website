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
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => ({
                title: edge.node.frontmatter.title,
                date: edge.node.frontmatter.date,
                description: edge.node.excerpt,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: edge.node.fields.slug,
                custom_elements: [{ "content:encoded": edge.node.html }],
              }))
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { fields: { sourceName: { eq: "devlog" }}}
                ) {
                  edges {
                    node {
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                      }
                      excerpt(pruneLength: 250)
                    }
                  }
                }
              }
            `,
            title: "Iain J. Reid's Devlog",
            description: "",
            output: "/devlog-rss.xml",
          },
        ],
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts/`,
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "devlog",
        path: `${__dirname}/content/devlog/`,
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
  ],
}
