import React from "react"
import styled from "styled-components"
import {
  breakpointSizes,
  fluidFontSize,
  maxBreakpointQuery,
  sectionMargins,
  standardColours,
} from "../styles"
import { Container } from "./ui"
import { GatsbyImage } from "gatsby-plugin-image"

const StyledBanner = styled.section`
  ${sectionMargins()};
  text-align: center;
`

const StyledHeading = styled.h1`
  ${fluidFontSize(
    "24px",
    "36px",
    breakpointSizes.tiny,
    breakpointSizes.xxxxlarge
  )};
`

const StyledInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  ${maxBreakpointQuery.tsmall`
    flex-direction: column;
 `}
`

const StyledUnderline = styled.div``

const StyledLocation = styled.p`
  ${fluidFontSize(
    "16px",
    "20px",
    breakpointSizes.tiny,
    breakpointSizes.xxxxlarge
  )};
  margin-bottom: 20px;
`

const StyledName = styled.h2`
  ${fluidFontSize(
    "24px",
    "32px",
    breakpointSizes.tiny,
    breakpointSizes.xxxxlarge
  )};
`

const StyledImage = styled(GatsbyImage)`
  width: 200px;
  border-radius: 50%;
  border: solid 5px ${standardColours.charcoalGrey};
  margin-top: 40px;
`

const Banner = ({ heading, image, location, isHome }) => (
  <StyledBanner>
    <Container>
      <StyledHeading>{heading}</StyledHeading>
      <StyledInner>
        {image && <StyledImage image={image.gatsbyImageData} alt={image.alt} />}
        {(location || isHome) && (
          <StyledUnderline>
            {location && <StyledLocation>{location}</StyledLocation>}
            {isHome && <StyledName>Amy Cunningham</StyledName>}
          </StyledUnderline>
        )}
      </StyledInner>
    </Container>
  </StyledBanner>
)

export default Banner
