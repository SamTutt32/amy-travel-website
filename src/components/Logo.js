import React from "react"
import styled from "styled-components"
import { breakpointSizes, fluidFontSize, fontWeights } from "../styles"
import { Link } from "./ui"

const StyledLogo = styled(Link)`
  display: inline-block;
`

const StyledText = styled.p`
  font-weight: ${fontWeights.bold};
  ${fluidFontSize(
    "36px",
    "48px",
    breakpointSizes.tiny,
    breakpointSizes.xxxxlarge
  )};
`

const Logo = () => {
  return (
    <StyledLogo to="/">
      <StyledText>Travel With Amy</StyledText>
    </StyledLogo>
  )
}

export default Logo
