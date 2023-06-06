import React from "react"
import styled from "styled-components"
import { breakpointSizes, fluidFontSize, sectionPaddings } from "../styles"
import { Container } from "./ui"

const StyledBanner = styled.section`
  ${sectionPaddings()};
  text-align: center;
`

const StyledHeading = styled.h1`
  ${fluidFontSize(
    "36px",
    "46px",
    breakpointSizes.tiny,
    breakpointSizes.xxxxlarge
  )};
`

const Banner = ({ heading }) => (
  <StyledBanner>
    <Container>
      <StyledHeading>{heading}</StyledHeading>
    </Container>
  </StyledBanner>
)

export default Banner
