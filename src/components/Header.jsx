import React from "react"
import { Link } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import styled from "@emotion/styled"
import colors from "../styles/colors"
import dimensions from "../styles/dimensions"
import Title from "./Title"

const HeaderContainer = styled("header")`
  padding-top: 3em;
  padding-bottom: 3em;
  display: grid;

  grid-template-areas: "nav"
                       "title";

  &.cover {
    grid-template-rows: min-content auto;
    min-height: 100vh;
  }
`

const HeaderNavigation = styled("div")`
  display: grid;
  grid-area: nav;
  grid-template-areas: "breadcrumbs links";

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
  }
`

const HeaderBreadcrumbs = styled("div")`
  grid-area: breadcrumbs;

  ol {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    list-style: none;

    span {
      display: none;
    }

    li {
      display: grid;
      grid-gap: 1em;
      grid-template-columns: repeat(2, auto);
      color: ${colors.grey700};
      transition: all 150ms ease-in-out;

      &:after {
        content: "\u2192";
        margin-right: 1em;
        opacity: 0;
        transform: translateX(-8px);
        transition: all 150ms ease-in-out;
        position: relative;
        top: 0.75em;
      }

      &:hover {
        color: ${colors.blue500};
        padding-right: 8px;

        &:after {
          opacity: 1;
          transform: translateX(0px);
        }
      }

      &:last-child {
        display: none;
      }
    }

    @media (max-width: ${dimensions.maxwidthDesktop}px) {
      li:not(:nth-of-type(1)) {
        display: none;
      }
    }
  }
`

const HeaderLinks = styled("div")`
  display: grid;
  grid-area: links;
  grid-gap: 6.5em;
  grid-template-columns: repeat(3, auto);
  margin-left: auto;
  width: max-content;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-gap: 5.5em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-gap: 2.5em;
  }

  a {
    &:after {
      position: absolute;
      content: "";
      bottom: 0;
      width: 18px;
      height: 3px;
      right: 50%;
      margin-right: -9px;
      transition: background 100ms ease-in-out;
    }

    &:hover, &.Link--is-active {
      &:after {
        background: ${colors.blue500};
        transition: background 100ms ease-in-out;
      }
    }
  }
`

const HeaderTitle = styled("div")`
  grid-area: title;
  margin: 0 auto;
  width: 100%;
  flex: 1;

  @media (min-width: ${dimensions.maxwidthDesktop * 1.1}px) {
    max-width: calc(100% - (100% - ${dimensions.maxwidthDesktop}px * 1.1) * 0.9);
  }
`

export default ({ children, title, crumbs, cover }) => (
  <HeaderContainer className={cover ? "cover" : ""}>
    <HeaderNavigation>
      <HeaderBreadcrumbs>
        <Breadcrumb
          crumbs={crumbs || []}
          crumbSeparator=""
          crumbLabel={title}
        />
      </HeaderBreadcrumbs>
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
    </HeaderNavigation>
    <HeaderTitle>
      {/* <Title text={title} className={titleMeta ? "shrink" : ""}/>
      <HeaderMetas>
        {titleMeta}
      </HeaderMetas> */}
      {children}
    </HeaderTitle>
  </HeaderContainer>
)
