import React from 'react';
import {graphql} from 'gatsby'
import gravatar from 'gravatar'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import SocialShare from '../components/SocialShare'
import Newsletter from '../components/Newsletter'
import BackgroundImage from 'gatsby-background-image'
import { DiscussionEmbed } from 'disqus-react';

class Post extends React.Component {
	render() {
    const post = this.props.data.markdownRemark;
    const metaList = {
      date: post.frontmatter.date,
      category: post.frontmatter.category,
      categorySlug: post.frontmatter.categorySlug,
      author: post.frontmatter.author
		}
		
		const disqusShortname = "devreview";
    const disqusConfig = {
      identifier: post.id,
      title: post.frontmatter.title,
		};

    return (
      <Layout>

        <div className="container">
          <article className="post">
            <div className="post__header">
              <Hero title={post.frontmatter.title} description={post.frontmatter.excerpt} meta={metaList} />
							<Helmet title={`${post.frontmatter.title} · Um artigo DevReview`}/>
            </div>
            
						<BackgroundImage className="post__image" tag="div" fluid={post.frontmatter.image.childImageSharp.fluid} backgroundColor={`#DAE1E6`}/>

            <div className="post__content" dangerouslySetInnerHTML={{ __html: post.html }} />

						<SocialShare url={this.props.pageContext.pathSlug} shareProps={post}/>
						<Newsletter/>
          </article>

					<div className="post__author">
						<img className="gravatar" src={gravatar.url('israeljunior.net@gmail.com')}/>
						<div className="Profile">
							<h3 className="Profile__name">Israel Júnior</h3>
							<span className="Profile__meta">Frontend Developer</span>
						</div>
					</div>

					<div className="post__comments">
						<DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
					</div>
        </div>

      </Layout>
    )
  }
}

export default Post;

export const PostQuery = graphql`
  query ($pathSlug: String!) {
    markdownRemark(frontmatter: {path: {eq: $pathSlug}}) {
			id
			html
      frontmatter {
				title
				image {
					childImageSharp {
            fluid(maxWidth: 1100) {
              ...GatsbyImageSharpFluid
            }
          }
				}
        excerpt
        category
        categorySlug
        author
				date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
