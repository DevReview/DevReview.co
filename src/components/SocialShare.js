import React from 'react'
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, EmailShareButton } from 'react-share';

import TwitterIcon from '../images/social-icons/twitter.svg'
import FacebookIcon from '../images/social-icons/facebook.svg'
import LinkedinIcon from '../images/social-icons/linkedin.svg'
import EmailIcon from '../images/social-icons/email.svg'

class SocialShare extends React.Component {
	render() {
		const shareProps = {
			via: 'DevReview',
			url: `https://devreview.co/${this.props.url}`,
			title: `${this.props.shareProps.frontmatter.title} · Um artigo @DevReview`,
			description: this.props.shareProps.frontmatter.description,
			hashtags: [`${this.props.shareProps.frontmatter.categorySlug}`],
			subject: `${this.props.shareProps.frontmatter.title} · Um artigo DevReview`,
			body: this.props.shareProps.frontmatter.description
		}

		return (
			<div className="SocialShare">
				<h3 className="headline">Compartilhe este post</h3>

				<div className="SocialShareList">
					<TwitterShareButton className="SocialShareList__item" url={shareProps.url} title={shareProps.title} hashtags={shareProps.hashtags}>
						<img src={TwitterIcon} alt="Twitter"/>
					</TwitterShareButton>

					<FacebookShareButton className="SocialShareList__item" url={shareProps.url}>
						<img src={FacebookIcon} alt="Facebook"/>
					</FacebookShareButton>

					<LinkedinShareButton className="SocialShareList__item" url={shareProps.url} title={shareProps.title} description={shareProps.description}>
						<img src={LinkedinIcon} alt="LinkedIn"/>
					</LinkedinShareButton>

					<EmailShareButton className="SocialShareList__item" url={shareProps.url} subject={shareProps.subject} body={shareProps.body}>
						<img src={EmailIcon} alt="Email"/>
					</EmailShareButton>
				</div>
			</div>
		)
	}
}

export default SocialShare
