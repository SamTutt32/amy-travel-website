import React from "react"
import styled from "styled-components"
import { minBreakpointQuery, sectionMargins } from "../styles"
import { Container, Heading } from "./ui"
import BlogCard from "./BlogCard"

const StyledBlogListing = styled.section`
  ${sectionMargins()};
`

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-bottom: 40px;
`

const StyledItems = styled.div`
  display: grid;
  gap: 15px;

  ${minBreakpointQuery.tsmall`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${minBreakpointQuery.mlarge`
    grid-template-columns: repeat(4, 1fr);
  `}
`

const BlogListing = ({ heading, items }) => (
  <StyledBlogListing>
    <Container>
      {heading && <StyledHeading>{heading}</StyledHeading>}
      <StyledItems>
        {items.map(({ title, introduction, featuredImage, slug }, id) => (
          <BlogCard
            key={id}
            title={title}
            introduction={introduction}
            image={featuredImage}
            slug={slug}
          />
        ))}
      </StyledItems>
    </Container>
  </StyledBlogListing>
)

export default BlogListing
