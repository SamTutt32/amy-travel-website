import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import Content from "../components/Content"
import BlogListing from "../components/BlogListing"

const IndexPage = () => {
  const {
    contentfulHome: { heading, location, profilePicture, content },
    allContentfulBlog: { nodes },
  } = useStaticQuery(graphql`
    query IndexPageQuery {
      contentfulHome {
        heading
        profilePicture {
          gatsbyImageData
          title
        }
        location
        content {
          raw
        }
      }
      allContentfulBlog(limit: 4) {
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
        <Banner
          heading={heading}
          image={profilePicture}
          location={location}
          isHome={true}
        />
        <Content content={content} />
        <BlogListing heading={"Latest Blog Posts!"} items={nodes} />
      </main>
    </Layout>
  )
}

export default IndexPage
