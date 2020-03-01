import React from "react"
import styled from "@emotion/styled"
import colors from "../styles/colors"
import { graphql, StaticQuery } from 'gatsby'

const FooterContainer = styled("footer")`
  padding-top: 3.75em;
  padding-bottom: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FooterAuthor = styled("a")`
  transition: color 200ms ease;
  font-size: 0.75em;
  color: ${colors.grey700};
  align-items: center;
  text-decoration: none;
  margin-top: 1.5em;

  &:hover {
    color: ${colors.blue900};
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            author
            social {
              github
            }
          }
        }
      }
    `}
    render={({ site }) => (
      <FooterContainer>
        <FooterAuthor href={`https://github.com/${site.siteMetadata.social.github}`} target="_blank" rel="noopener">
          © {new Date().getFullYear()} — Built by {site.siteMetadata.author}
        </FooterAuthor>
      </FooterContainer>
    )}
  />
)
