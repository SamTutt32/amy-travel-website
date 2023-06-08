const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const BlogDetailPageTemplate = path.resolve(
    `src/templates/blog-detail-page.js`
  )

  return graphql(`
    {
      allContentfulBlog {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors
    }
    if (result.data.allContentfulBlog) {
      result.data.allContentfulBlog.edges.forEach(({ node: { id, slug } }) => {
        createPage({
          path: `/blog/${slug}/`,
          component: BlogDetailPageTemplate,
          context: {
            id: id,
          },
        })
      })
    }
  })
}
