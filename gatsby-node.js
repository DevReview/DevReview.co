const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const {createPage} = actions;
  const postTemplate = path.resolve(`src/templates/Post.js`);

  return graphql(
    `
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `
  )
  .then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {
          pathSlug: node.frontmatter.path
        }
      })
    })

    return null;
  })
}
