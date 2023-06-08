import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import Content from "../components/Content"
import ImageGallery from "../components/ImageGallery"
import BlogListing from "../components/BlogListing"

const BlogDetailPageTemplate = ({
  data: {
    contentfulBlog: { title, content, gallery },
    allContentfulBlog: { nodes },
  },
}) => (
  <Layout>
    <main>
      <Banner heading={title} />
      <Content content={content} />
      <ImageGallery images={gallery} />
      <BlogListing heading={"View More Blog Posts!"} items={nodes} />
    </main>
  </Layout>
)

export const BlogDetailPageTemplateQuery = graphql`
  query BlogDetailPageTemplateQuery($id: String!) {
    contentfulBlog(id: { eq: $id }) {
      title
      content {
        raw
      }
      gallery {
        gatsbyImageData(width: 900, height: 600)
        title
      }
    }
    allContentfulBlog(filter: { id: { ne: $id } }, limit: 4) {
      nodes {
        title
        introduction
        featuredImage {
          gatsbyImageData(width: 900, height: 600)
          title
        }
        slug
      }
    }
  }
`

export default BlogDetailPageTemplate
