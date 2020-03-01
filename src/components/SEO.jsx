import React from 'react';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';

export default ({ description, slug }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            social {
              twitter
            }
          }
        }
      }
    `}
    render={({ site: { siteMetadata } }) => {
      const _description = description
        ? description
        : siteMetadata.description

      const _url = slug
        ? `${siteMetadata.siteUrl}${slug}`
        : `${siteMetadata.siteUrl}`

      return (
        <Helmet
          title={`${siteMetadata.title} | Musings from Iain J. Reid`}
          meta={[
            // Basic meta tags
            {
              name: "description",
              content: _description,
            },
            {
              name: "url",
              content: _url,
            },

            // Open Graph meta tags
            {
              property: "og:description",
              content: _description,
            },
            {
              property: "og:url",
              content: _url,
            },
            {
              property: "og:type",
              content: "website",
            },

            // Twitter meta tags
            {
              name: "twitter:description",
              content: _description,
            },
            {
              name: "twitter:creator",
              content: siteMetadata.social.twitter,
            },
            {
              name: "twitter:card",
              content: "summary",
            },
          ]}
        />
      )
    }}
  />
)
