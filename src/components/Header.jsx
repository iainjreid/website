import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import Logo from "./_ui/Logo"
import colors from "../styles/colors"
import dimensions from "../styles/dimensions"

const HeaderContainer = styled("header")`
  padding-top: 3em;
  padding-bottom: 3em;
`

const HeaderContent = styled("div")`
  display: flex;
  justify-content: space-between;
`

const HeaderLinks = styled("div")`
  display: grid;
  grid-gap: 6.5em;
  grid-template-columns: repeat(3, auto);

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-gap: 5.5em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-gap: 2.5em;
  }

  a {
    color: currentColor;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    font-weight: 600;
    font-size: 0.95em;
    height: 100%;
    padding-bottom: 1.25em;
    padding-top: 0.25em;
    display: block;
    position: relative;
    line-height: 3em;

    &:after {
      position: absolute;
      content: "";
      bottom: 0;
      width: 18px;
      height: 3px;
      right: 50%;
      margin-right: -9px;
      transition: 100ms ease-in-out background;
    }

    &:hover {
      &:after {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }

    &.Link--is-active {
      &:after {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }
  }
`

export default () => (
  <HeaderContainer>
    <HeaderContent>
      <Link to="/">
        <Logo />
      </Link>
      <HeaderLinks>
        <Link activeClassName="Link--is-active" to="/blog" partiallyActive>
          Blog
        </Link>
        <Link activeClassName="Link--is-active" to="/how-to" partiallyActive>
          How To
        </Link>
        <Link activeClassName="Link--is-active" to="/projects" partiallyActive>
          Projects
        </Link>
      </HeaderLinks>
    </HeaderContent>
  </HeaderContainer>
)
