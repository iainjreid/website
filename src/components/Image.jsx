import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import colors from "../styles/colors"

const ImageBlock = styled(Img)`
  border-radius: 3px;
`

const ImageAnnotation = styled("div")`
  color: ${colors.grey600};
  padding-top: 0.5em;
  margin: 0 auto;
  width: max-content;
  transition: color 150ms ease;

  h6 {
    text-align: center;
    font-weight: 400;
    font-size: 0.85rem;
  }

  &:hover {
    color: ${colors.blue900};
  }
`

export default ({ image }) => <>
  <ImageBlock fluid={image.sourceUrl.childImageSharp.fluid} />
  <ImageAnnotation>
  <a href={image.creditUrl} target="_blank" rel="noopener noreferrer">
    <h6>Photo by {image.creditName} — {image.sourceName}</h6>
  </a>
  </ImageAnnotation>
</>
