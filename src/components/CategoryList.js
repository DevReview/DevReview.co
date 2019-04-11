import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'

class CategoryList extends React.Component {
  render() {
    return (
      <StaticQuery
        query={
          graphql`
            query {
              allMarkdownRemark {
                edges {
                  node {
                    frontmatter {
											category
											categorySlug
                    }
                  }
                }
              }
            }
          `
        }

        render={data => (
          <div className="categorylist">
						{data.allMarkdownRemark.edges.map(category => {
            	return <div className="categorylist__item"><Link to={`/topicos/${category.node.frontmatter.categorySlug}`}>{category.node.frontmatter.category}</Link></div>
						})}
          </div>
          )
        }
      />
    )
  }
}

export default CategoryList
