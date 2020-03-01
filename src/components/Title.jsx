import React from 'react';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import styled from "@emotion/styled"

const TitleText = styled("h1")`
  margin-bottom: 1em;
`

export default ({ text }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={({ site }) => (
      <>
        <Helmet
          title={text
            ? `${text} | ${site.siteMetadata.title}`
            : `${site.siteMetadata.title} | Musings from Iain J. Reid`
          }
          meta={[
            {
              property: "og:title",
              content: text,
            },
            {
              property: "twitter:title",
              content: text,
            },
          ]}
        />
        <TitleText>{text}</TitleText>
      </>
    )}
  />
)
