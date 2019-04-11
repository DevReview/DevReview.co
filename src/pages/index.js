import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Archive from '../components/Archive'
import CategoryList from '../components/CategoryList'

class App extends React.Component {
  render() {
    const props = this.props;
		const posts = props.data.allMarkdownRemark.edges;
		const seo = {
			title: 'Artigos sobre Frontend, Desenvolvimento Web e carreira em TI'
		}
		
    return (
      <Layout>
				<SEO title={seo.title}/>

				<div className="container">
					<Hero title={seo.title} subtitle="DevReview" description="DevReview explora o mundo do Frontend, desenvolvimento web, melhores práticas, carreira em TI e mais."/>

          <CategoryList/>

          <h2 className="headline">Posts recentes</h2>
          
					<Archive postEdges={posts}/>
        </div>
      </Layout>
    )
  }
}

export default App

export const query = graphql`
  query PostListQuery {
    allMarkdownRemark (
			limit: 3
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
