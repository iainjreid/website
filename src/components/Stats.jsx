import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import colors from "../styles/colors"

const StatsContainer = styled("div")`
  display: grid;
  height: 0.6em;
`

const StatsBlock = styled("div")`
  filter: saturate(0.87);

  &:first-of-type {
    border-radius: 3px 0 0 3px;
  }

  &:last-of-type {
    border-radius: 0 3px 3px 0;
  }

  &:nth-of-type(-n+6) {
    &:nth-of-type(even):before {
      margin-top: 1.8em;
    }

    &:nth-of-type(odd):before {
      margin-top: -4em;
    }

    &:before {
      content: attr(data-name);
      position: absolute;
      border: 1px solid ${colors.grey200};
      border-radius: 10px;
      padding: 0 1em;
      line-height: 3em;
      font-size: 0.95em;
      font-weight: 600;
      box-shadow: 0px 9px 17px rgba(0, 0, 0, 0.06);
    }
  }
`

const StatsLink = styled("a")`
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

export default ({ languages, githubId }) => {
  const totalSize = languages.reduce((sum, { size }) => sum + size, 0);

  return (
    <StatsContainer css={css`
      grid-template-columns: ${languages.map(({ size }) => `${size/ totalSize * 100}%`).join(" ")};
    `}>
      {languages.map(({ name, color, size }, i) => (
        <StatsBlock key={i} data-key={i} data-name={name} css={css`
          background-color: ${color || colors.grey400};
        `}>
          {/* <StatsLink href={`https://github.com/${githubId}?tab=repositories&language=${name}`}  target="_blank" rel="noopener">
            {name}
          </StatsLink> */}
        </StatsBlock>
      ))}
    </StatsContainer>
  );
}
