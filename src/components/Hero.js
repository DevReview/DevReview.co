import React from 'react'
import {Link} from 'gatsby'

class Hero extends React.Component {
	render() {
    const props = this.props;
		const subtitle = props.subtitle ? <small>{props.subtitle}</small> : '';
		
    return (
      <div className="hero">
        <h1 className="hero__title">
          {subtitle}
          {props.title}
        </h1>
				
        <p className="hero__description">
          {props.description}
        </p>

				{props.meta &&
					<div className="hero__meta">            
						<span>{props.meta.date}</span>
						<span><Link to={`/topicos/${props.meta.categorySlug}`}>{props.meta.category}</Link></span>
						<span>{props.meta.author}</span>
					</div>
				}
      </div>
    )
	}
}

export default Hero
