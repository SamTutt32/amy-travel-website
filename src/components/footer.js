import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import {
  brandColours,
  breakpointSizes,
  fluidFontSize,
  fontSize,
  minBreakpointQuery,
  standardColours,
  standardTransition,
} from "../styles"
import { Container, Link, Svg } from "./ui"
import instagramLogo from "../images/instagram-logo.inline.svg"
import facebookLogo from "../images/facebook-logo.inline.svg"
import tcLogo from "../images/tc-logo.inline.svg"

const StyledFooter = styled.footer`
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
`

const StyledImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  grid-area: 1/1/1/1;
`

const StyledContent = styled.div`
  background-color: ${standardColours.transparentWhite(0.9)};
  text-align: center;
  grid-area: 1/1/1/1;
  z-index: 1;
  padding: 25px 50px;
`

const StyledHeading = styled.h3`
  ${fluidFontSize(
    "20px",
    "28px",
    breakpointSizes.tiny,
    breakpointSizes.xxxxlarge
  )};
  margin-bottom: 25px;
`

const StyledLink = styled.a`
  display: block;
  margin-bottom: 10px;

  ${minBreakpointQuery.small`
    ${fontSize(18)}
  `}

  &:hover {
    text-decoration: underline;
  }
`
const StyledText = styled.p`
  ${minBreakpointQuery.small`
    ${fontSize(18)}
  `}
  margin-bottom: 25px;
`

const StyledLogoLinks = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 60px);
  align-items: center;
  justify-content: center;
`

const StyledLogo = styled(Svg)`
  filter: grayscale(100);
  width: 40px;
  height: 40px;
  transition: ${standardTransition("filter")};
`

const StyledInternalLinksWrapper = styled.div`
  width: 100%;
  background-color: ${standardColours.charcoalGrey};
  padding: 25px 0;
  color: ${standardColours.white};
`

const StyledInternalLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`

const StyledInternalLink = styled(Link)`
  text-align: center;
  &:hover {
    color: ${brandColours.primary};
  }
`

const StyledLogoLink = styled(Link)`
  display: block;

  &:hover {
    ${StyledLogo} {
      filter: grayscale(0);
    }
  }
`

const Footer = () => {
  const {
    contentfulFooter: {
      image,
      instagramLink,
      facebookLink,
      travelCounsellorsLink,
      email,
      phoneNumber,
      internalLinks,
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      contentfulFooter {
        image {
          gatsbyImageData
          title
        }
        instagramLink {
          text
          link {
            ...LinkFragment
          }
        }
        facebookLink {
          text
          link {
            ...LinkFragment
          }
        }
        travelCounsellorsLink {
          text
          link {
            ...LinkFragment
          }
        }
        email
        phoneNumber
        internalLinks {
          text
          link {
            ...LinkFragment
          }
        }
      }
    }
  `)
  return (
    <StyledFooter>
      <StyledImage image={image.gatsbyImageData} alt={image.title} />
      <StyledContent>
        <StyledHeading>Contact Me</StyledHeading>
        <StyledLink href={`mailto:${email}`}>{email}</StyledLink>
        <StyledLink href={`tel:${phoneNumber}`}>01212590087</StyledLink>
        <StyledText>Find me on my socials</StyledText>
        <StyledLogoLinks>
          <StyledLogoLink
            to={instagramLink.link}
            target="_blank"
            rel="noreferrer"
          >
            <StyledLogo image={instagramLogo} />
          </StyledLogoLink>
          <StyledLogoLink
            to={facebookLink.link}
            target="_blank"
            rel="noreferrer"
          >
            <StyledLogo image={facebookLogo} />
          </StyledLogoLink>
          <StyledLogoLink
            to={travelCounsellorsLink.link}
            target="_blank"
            rel="noreferrer"
          >
            <StyledLogo image={tcLogo} />
          </StyledLogoLink>
        </StyledLogoLinks>
      </StyledContent>
      <StyledInternalLinksWrapper>
        <Container>
          <StyledInternalLinks>
            {internalLinks.map(({ text, link }, id) => (
              <StyledInternalLink key={id} to={link}>
                {text}
              </StyledInternalLink>
            ))}
          </StyledInternalLinks>
        </Container>
      </StyledInternalLinksWrapper>
    </StyledFooter>
  )
}

export default Footer
