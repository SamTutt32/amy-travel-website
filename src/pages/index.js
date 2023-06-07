import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import { HtmlContent } from "../components/ui"
import Content from "../components/Content"

const IndexPage = () => {
  const {
    contentfulHome: { heading, location, profilePicture, content },
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
      </main>
    </Layout>
  )
}

export default IndexPage
