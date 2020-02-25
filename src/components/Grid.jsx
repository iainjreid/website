import React from "react"
import styled from "@emotion/styled"
import dimensions from "../styles/dimensions"

const Grid = styled("div")`
  display: grid;
  grid-template-columns: repeat(var(--grid-width), 1fr);
  grid-gap: 2.5em;

  @media (max-width: ${dimensions.maxwidthDesktop}px) {
    grid-template-columns: repeat(calc(var(--grid-width) - 1), 1fr);
    grid-gap: 1.5em;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-template-columns: repeat(calc(var(--grid-width) - 2), 1fr);
    grid-gap: 1.5em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-template-columns: repeat(calc(var(--grid-width) - 3), 1fr);
    grid-gap: 2.5em;
  }
`

export default ({ children, width }) => (
  <Grid style={{ "--grid-width": width || 3 }}>
    {children}
  </Grid>
)
