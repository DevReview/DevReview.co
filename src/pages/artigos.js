import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Archive from '../components/Archive'

class Artigos extends React.Component {
  render() {
    const props = this.props;
		const posts = props.data.allMarkdownRemark.edges;
		const seo = {
			title: 'Artigos',
			description: 'Todos os artigos no DevReview.'
		}

    return (
      <Layout>
				<SEO title={seo.title} description={seo.description}/>

        <div className="container">
          <Hero title={seo.title} description={seo.description}/>

          <Archive postEdges={posts}/>
        </div>
      </Layout>
    )
  }
}

export default Artigos;

export const query = graphql`
  query ArticlesQuery {
    allMarkdownRemark (
      sort: {
        order: DESC,
        fields: [frontmatter___date]
      }
    ) {
      edges {
        node {
					id
          frontmatter {
            category
            title
            path
						excerpt
						image {
							childImageSharp {
								fluid(maxWidth: 1100) {
									...GatsbyImageSharpFluid
								}
							}
						}
          }
        }
      }
    }
  }
`
