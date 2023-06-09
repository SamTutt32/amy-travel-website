import React, { useState } from "react"
import styled from "styled-components"
import {
  brandColours,
  fontSize,
  maxBreakpointQuery,
  minBreakpointQuery,
  sectionMargins,
  standardColours,
} from "../styles"
import { Container, Heading, Slider } from "./ui"
import { GatsbyImage } from "gatsby-plugin-image"

const StyledImageGallery = styled.section`
  ${sectionMargins()};
`

const StyledContainer = styled(Container)`
  ${maxBreakpointQuery.medium`
    padding-left: 0;
    padding-right: 0;
  `}
`

const StyledInner = styled.div``

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-bottom: 40px;
`

const StyledFeaturedImageWrapper = styled.div`
  display: grid;
`

const StyledFeaturedImage = styled(GatsbyImage)`
  grid-area: 1/1/1/1;
`

const StyledIndex = styled.p`
  grid-area: 1/1/1/1;
  text-align: right;
  z-index: 1;
  color: ${standardColours.white};
  ${fontSize(20)};
  margin-top: auto;
  margin-bottom: 10px;
  margin-right: 10px;
  margin-left: auto;
  border-radius: 5%;
  padding: 5px 10px;
  background-color: ${brandColours.primary};
`

const StyledSlider = styled(Slider)`
  .swiper-slide {
    width: 150px;

    ${minBreakpointQuery.tiny`
      width: 175px;
    `}

    ${minBreakpointQuery.small`
      width: 200px;
    `}


    ${minBreakpointQuery.medium`
      width: 225px;
    `}
  }
`

const StyledSlide = styled.div`
  height: 100%;
`

const StyledImage = styled(GatsbyImage)`
  margin: 0 auto;
  z-index: 50;
`

const ImageGallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const sliderOptions = {
    slidesPerView: "auto",
  }
  console.log(currentImage)
  return (
    <StyledImageGallery>
      <StyledContainer narrow={true}>
        <StyledInner>
          <StyledHeading>Gallery</StyledHeading>
          <StyledFeaturedImageWrapper>
            <StyledFeaturedImage
              image={images[currentImage].gatsbyImageData}
              alt={images[currentImage].alt}
            />
            <StyledIndex>{`${currentImage + 1} of ${
              images.length
            }`}</StyledIndex>
          </StyledFeaturedImageWrapper>

          <StyledSlider {...sliderOptions}>
            {images.map(({ gatsbyImageData, alt }, i) => (
              <StyledSlide key={i} onClick={() => setCurrentImage(i)}>
                <StyledImage image={gatsbyImageData} alt={alt} />
              </StyledSlide>
            ))}
          </StyledSlider>
        </StyledInner>
      </StyledContainer>
    </StyledImageGallery>
  )
}

export default ImageGallery
