import React from "react"
import styled from "styled-components"
import { breakpointSizes, fluidFontSize, fontWeights } from "../styles"
import { Link, Svg } from "./ui"
import logo from "../images/logo.inline.svg"

const StyledLogo = styled(Link)`
  display: inline-block;
`

const StyledImage = styled(Svg)`
  width: 80px;
  height: 80px;
`

const Logo = () => {
  return (
    <StyledLogo to="/">
      <StyledImage image={logo} />
    </StyledLogo>
  )
}

export default Logo
