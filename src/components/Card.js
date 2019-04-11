import React from 'react'
import {Link} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

class Card extends React.Component {
	render() {
		return (
			<Link to={this.props.link} className="card">
				<div className="card__body">
					<span className="card__meta">
						{this.props.category}
					</span>
					
					<h3 className="card__title">
						{this.props.title}
					</h3>

					<p className="card__description">
						{this.props.description}
					</p>
				</div>

        <BackgroundImage className="card__picture" tag="div" fluid={this.props.image} backgroundColor={`#DAE1E6`}/>
      </Link>
		)
	}
}

export default Card	
