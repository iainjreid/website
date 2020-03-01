import React from "react"
import styled from "@emotion/styled"
import colors from "../styles/colors"

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
  <FooterContainer>
    <FooterAuthor href="https://github.com/iainreid820/iainreid820.github.io" target="_blank" rel="noopener">
      © {new Date().getFullYear()} — Built by Iain Reid
    </FooterAuthor>
  </FooterContainer>
)
