import React from "react"
import Moment from "react-moment"
import styled from "@emotion/styled"
import colors from "../styles/colors"
import dimensions from "../styles/dimensions"

export const DevlogEntry = styled("article")`
  padding-top: 1em;
  padding-bottom: 1em;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr;
  grid-template-rows: min-content;

  ${({ compact }) => !compact && `
    padding-top: 2.5em;
    padding-bottom: 2.5em;

    &:first-of-type {
      padding-top: 0;
    }

    &:last-of-type {
      padding-bottom: 0;
    }

    @media (min-width: ${dimensions.maxwidthDesktop}px) {
      grid-template-columns: 1fr 3fr;
    }
  `}
`

export const DevlogMeta = styled("div")`
  display: grid;
  grid-template-rows: min-content min-content;
`

export const DevlogTitle = styled("h4")`
  margin: 0
`

export const DevlogDate = styled(Moment)`
  margin-bottom: auto;
  color: ${colors.grey700};
  font-size: 0.85em;
`

export const DevlogBody = styled("div")`
  p:first-of-type {
    margin-top: 0;
  }

  p:last-of-type {
    margin-bottom: 0;
  }

  a {
    color: ${colors.blue700};
    text-decoration: underline;
  }
`

export default ({ compact, entries }) => <>
  {entries.map((entry, i) => (
    <DevlogEntry id={entry.node.frontmatter.date.replace(/[\s:]/g, "-")} compact={compact} key={i}>
      <DevlogMeta>
        <DevlogTitle>{entry.node.frontmatter.title}</DevlogTitle>
        <DevlogDate format="MMMM D, YYYY \at HH:mm">{entry.node.frontmatter.date}</DevlogDate>
      </DevlogMeta>
      <DevlogBody dangerouslySetInnerHTML={{ __html: entry.node.html }}></DevlogBody>
    </DevlogEntry>
  ))}
</>
