import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Archive from '../components/Archive';

class CategoryTemplate extends React.Component {
  render() {
    const { pageContext, data } = this.props;
    const { category } = pageContext;

		return (
      <Layout>
        
				<div className="container">
					<Hero title={category} subtitle={`Todos os posts em:`} meta={{}}/>
          <Archive postEdges={data.allMarkdownRemark.edges} />
        </div>

			</Layout>
    );
  }
}

export default CategoryTemplate

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      filter: { fields: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            category
          }
          frontmatter {
						path
						excerpt
            title
						date
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
`;
