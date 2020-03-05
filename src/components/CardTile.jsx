import React from "react"
import Moment from "react-moment"
import styled from "@emotion/styled"
import colors from "../styles/colors"

const CardContainer = styled("div")`
  border: 1px solid ${colors.grey200};
  border-radius: 3px;
  padding: 3em 2.5em 2.25em 2.5em;
  display: flex;
  height: 100%;
  flex-direction: column;
  box-shadow: 0px 9px 17px rgba(0, 0, 0, 0.06);
  transition: all 150ms ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 9px 13px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px) scale(1.01);

    .CardAction {
      color: ${colors.blue500};
      span {
        transform: translateX(0px);
      }
    }
  }
`

const CardCategory = styled("h6")`
  font-weight: 600;
  color: ${colors.grey600};
`

const CardTitle = styled("h3")`
  margin: 0;
  margin-top: 0.5em;
`

const CardMetas = styled("div")`
  display: flex;
  align-items: center;
  margin-top: 1.5em;
  justify-content: space-between;
  font-size: 0.85em;
  color: ${colors.grey600};
`

const CardAuthor = styled("p")`
  margin: 0;
`

const CardDate = styled("div")`
  margin: 0;
`

const CardDescription = styled("p")`
  margin-top: 2em;
  margin-bottom: 2em;
  flex: 2;
`

const CardAction = styled("div")`
  height: initial;
  margin-top: 2em;
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

export default ({ category, title, description, author, date, actionText }) => (
  <CardContainer>
    <CardCategory>{category}</CardCategory>
    <CardTitle>{title}</CardTitle>
    {description && <CardDescription>{cleanProjectDescription(description)}</CardDescription>}
    <CardAction className="CardAction">
      {actionText} <span>&#8594;</span>
    </CardAction>
    {(author || date) && <CardMetas>
      {author && <CardAuthor>{author}</CardAuthor>}
      {date && <CardDate>
        <Moment format="MMMM D, YYYY">{date}</Moment>
      </CardDate>}
    </CardMetas>}
  </CardContainer>
)

function cleanProjectDescription(desc) {
  while (desc && !/^\w/.test(desc)) {
    desc = desc.slice(1)
  }

  return desc;
}
