import React from "react"
import { Global } from "@emotion/core"
import styled from "@emotion/styled"
import Footer from "./Footer"
import Header from "./Header"
import dimensions from "../styles/dimensions"
import globalStyles from "../styles/global"
import typography from "../styles/typography"

const LayoutContainer = styled.div`
  padding-left: ${dimensions.paddingHorizontalDesktop}em;
  padding-right: ${dimensions.paddingHorizontalDesktop}em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: ${dimensions.paddingHorizontalTablet}em;
    padding-right: ${dimensions.paddingHorizontalTablet}em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding-left: ${dimensions.paddingHorizontalMobile}em;
    padding-right: ${dimensions.paddingHorizontalMobile}em;
  }

  .Layout {
    display: flex;
    flex-direction: column;
  }

  .Layout__content {
    padding-bottom: 5em;
    margin: 0 auto;
    width: 100%;
    flex: 1;

    @media (min-width: ${dimensions.maxwidthDesktop * 1.1}px) {
      max-width: calc(100% - ((100% - ${dimensions.maxwidthDesktop}px * 1.1) * 0.9));
    }
  }
`

export default ({ children }) => (
  <LayoutContainer className="div">
    <Global styles={[globalStyles, typography]} />
    <div className="Layout">
      <Header />
      <main className="Layout__content">{children}</main>
      <Footer />
    </div>
  </LayoutContainer>
)

