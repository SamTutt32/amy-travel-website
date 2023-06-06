import React from "react"
import styled from "styled-components"
import { minBreakpointQuery, sectionMargins } from "../styles"
import { Container } from "./ui"
import BlogCard from "./BlogCard"

const StyledBlogListing = styled.section`
  ${sectionMargins()};
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

const BlogListing = ({ items }) => (
  <StyledBlogListing>
    <Container>
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
