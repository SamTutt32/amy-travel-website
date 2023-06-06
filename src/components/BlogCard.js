import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { brandColours, standardColours, standardTransition } from "../styles"

const StyledBlogCard = styled.article`
  border-radius: 15px;
  overflow: hidden;
  background-color: ${brandColours.tertiary};
  transition: ${standardTransition("opacity")};

  &:hover {
    opacity: 0.75;
  }
`

const StyledItem = styled.div``

const StyledTextWrapper = styled.div`
  padding: 20px;
  text-align: center;
`

const StyledHeading = styled.h2`
  margin-bottom: 20px;
`

const BlogCard = ({ title, introduction, image, slug }) => (
  <StyledBlogCard>
    <StyledItem>
      <Link to={slug}>
        <GatsbyImage image={image.gatsbyImageData} alt={image.title} />
        <StyledTextWrapper>
          <StyledHeading>{title}</StyledHeading>
          <p>{introduction}</p>
        </StyledTextWrapper>
      </Link>
    </StyledItem>
  </StyledBlogCard>
)

export default BlogCard
