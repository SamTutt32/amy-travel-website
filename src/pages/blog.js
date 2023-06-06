import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import { HtmlContent } from "../components/ui"
import Content from "../components/Content"
import BlogListing from "../components/BlogListing"

const BlogPage = () => {
  const {
    contentfulBlogListing: { heading, content },
    allContentfulBlog: { nodes },
  } = useStaticQuery(graphql`
    query BlogPageQuery {
      contentfulBlogListing {
        heading
        content {
          raw
        }
      }
      allContentfulBlog {
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
  `)

  return (
    <Layout>
      <main>
        <Banner heading={heading} />
        <Content content={content} />
        <BlogListing items={nodes} />
      </main>
    </Layout>
  )
}

export default BlogPage
