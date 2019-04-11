import React from 'react'
import {Link} from 'gatsby'
import Card from '../components/Card'

class Archive extends React.Component {
	render() {
		const posts = this.props.postEdges;

		return (
			<div className="archive">
				{posts.map(post => {
					return (
						<Card
							key={post.node.id}
							link={post.node.frontmatter.path}
							category={post.node.frontmatter.category} 
							title={post.node.frontmatter.title} 
							description={post.node.frontmatter.excerpt} 
							image={post.node.frontmatter.image.childImageSharp.fluid}
							meta={{date: post.node.frontmatter.date}}
						/>
					)
				})}

				<Link to="/artigos" className="button archive--more">
					Mais posts
				</Link>
			</div>
		)
	}
}

export default Archive
