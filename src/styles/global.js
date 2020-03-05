import css from "@emotion/css"
import colors from "../styles/colors"
import dimensions from "../styles/dimensions"

const globalStyles = css`
  ${require("prismjs/themes/prism.css")}

  html,
  body,
  #root {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  body {
    width: 100%;
    margin: 0 auto;
    line-height: 1.7;
    color: ${colors.grey900};
    -webkit-font-smoothing: antialiased;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 14px;
    }

    * {
      box-sizing: border-box;

      &::selection {
        background: ${colors.orange500};
        color: white;
      }
    }
  }

  /*
    A workaround for forcing accessibility wrappers
    to have a 100% height.
    Reach Router issue here: https: //github.com/reach/router/issues/63
    */
  #___gatsby,
  div[role="group"][tabindex] {
    height: 100%;
    min-height: 100% !important;
  }

  div {
    height: inherit;
  }

  img {
    filter: saturate(82%);
  }

  .anchor.before {
    padding-right: 14px;
  }

  .gatsby-highlight {
    padding-bottom: 0.5em;
    padding-top: 0.5em;
  }
`

export default globalStyles
