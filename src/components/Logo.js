import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { breakpointSizes, fluidFontSize, fontWeights } from "../styles"
import { Link } from "./ui"
import logo from "../images/logo.svg"

const StyledLogo = styled(Link)`
  display: inline-block;
`

const StyledImage = styled.img`
  width: 120px;
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
      {/* <StyledImage src={logo} alt={siteName} loading="lazy" /> */}
      <StyledText>Travel With Amy</StyledText>
    </StyledLogo>
  )
}

export default Logo
