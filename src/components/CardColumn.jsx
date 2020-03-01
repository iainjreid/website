import React from "react"
import Moment from "react-moment"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import dimensions from "../styles/dimensions"
import colors from "../styles/colors"

const CardContainer = styled("div")`
  border: 1px solid ${colors.grey100};
  border-radius: 3px;
  display: flex;
  cursor: pointer;
  margin-bottom: 4em;
  box-shadow: 0px 9px 17px rgba(0, 0, 0, 0.04);
  transition: all 150ms ease-in-out;
  overflow: hidden;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: block
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 2em;
  }

  &:hover {
    box-shadow: 0px 9px 13px rgba(0, 0, 0, 0.06);
    transform: translateY(-2px) scale(1.008);

    .CardAction {
      color: ${colors.blue500};
      span {
        transform: translateX(0px);
      }
    }
  }
`

const CardContent = styled("div")`
  padding: 4em 3em 2.25em 3em;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 4;

  @media (max-width: 950px) {
    padding: 3.25em 2.5em 2em 2.5em;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-row: 2;
  }
`

const CardCategory = styled("h6")`
  font-weight: 600;
  color: ${colors.grey600};
`

const CardTitle = styled("h3")`
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`

const CardDate = styled("div")`
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
  margin-top: 1.5em;
  justify-content: space-between;
  font-size: 0.85em;
  color: ${colors.grey600};
`

const CardBlurb = styled("div")`
  margin-bottom: 5em;
  margin-top: 0.5em;
  flex: 1;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 2.5em;
  }
`

const CardAction = styled("div")`
  font-weight: 600;
  text-decoration: none;
  color: ${colors.grey900};
  transition: all 150ms ease-in-out;

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 200ms ease-in-out;
  }
`

const CardImageContainer = styled("div")`
  background: ${colors.grey200};
  display: flex;
  flex: 7;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  padding-left: 2em;
  padding-right: 2em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 3em;
    height: 60vw;
    max-height: 280px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .gatsby-image-wrapper {
    position: initial !important;
  }
`

export default ({ category, title, description, date, thumbnail, actionText }) => (
  <CardContainer>
    <CardContent className="CardContent">
      {category && <CardCategory>{category}</CardCategory>}
      <CardTitle>{title}</CardTitle>
      <CardBlurb>{description}</CardBlurb>
      {date && <CardDate>
        <Moment format="MMMM D, YYYY">{date}</Moment>
      </CardDate>}
      {actionText && <CardAction className="CardAction">
        {actionText} <span>&#8594;</span>
      </CardAction>}
    </CardContent>
    {thumbnail && <CardImageContainer className="CardImageContainer">
      <Img fluid={thumbnail} alt={title} />
    </CardImageContainer>}
  </CardContainer>
)
