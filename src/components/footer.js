import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import {
  brandColours,
  minBreakpointQuery,
  standardColours,
  standardTransition,
} from "../styles"
import { Container, Svg } from "./ui"
import instagramLogo from "../images/instagram-logo.inline.svg"
import facebookLogo from "../images/facebook-logo.inline.svg"
import tcLogo from "../images/tc-logo.inline.svg"

const StyledFooter = styled.footer`
  position: relative;
`

const StyledImage = styled(GatsbyImage)`
  width: 100%;
`

const StyledOuter = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const StyledContainer = styled(Container)`
  max-width: 500px;
`

const StyledInner = styled.div`
  background-color: ${standardColours.transparentWhite(0.9)};
  text-align: center;
  padding: 50px;
`

const StyledLogoLinks = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 60px);
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`

const StyledLogo = styled(Svg)`
  filter: grayscale(100);
  height: 100%;
  width: 100%;
  transition: ${standardTransition("filter")};
`

const StyledLogoLink = styled.a`
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
            url
          }
        }
        facebookLink {
          text
          link {
            url
          }
        }
        travelCounsellorsLink {
          text
          link {
            url
          }
        }
        email
        phoneNumber
      }
    }
  `)
  return (
    <StyledFooter>
      <StyledImage image={image.gatsbyImageData} alt={image.title} />
      <StyledOuter>
        <StyledContainer>
          <StyledInner>
            <h3>Contact Me</h3>
            <a href={`mailto:${email}`}>Send me an email</a>
            <a href={`tel:${phoneNumber}`}>01212590087</a>
            <p>Find me on my socials</p>
            <StyledLogoLinks>
              <StyledLogoLink
                href={instagramLink.link.url}
                target="_blank"
                rel="noreferrer"
              >
                <StyledLogo image={instagramLogo} />
              </StyledLogoLink>
              <StyledLogoLink
                href={facebookLink.link.url}
                target="_blank"
                rel="noreferrer"
              >
                <StyledLogo image={facebookLogo} />
              </StyledLogoLink>
              <StyledLogoLink
                href={travelCounsellorsLink.link.url}
                target="_blank"
                rel="noreferrer"
              >
                <StyledLogo image={tcLogo} />
              </StyledLogoLink>
            </StyledLogoLinks>
          </StyledInner>
        </StyledContainer>
      </StyledOuter>
    </StyledFooter>
  )
}

export default Footer
