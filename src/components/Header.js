import React from 'react'
import {Link} from 'gatsby'
import Logo from '../images/devreview-logo-compact.svg'

class Header extends React.Component {
  render() {
		return (
      <div className="header">
        <div className="container navigation">
					<div className="navigation__item navigation__item--logo">
          	<Link to="/"><img src={Logo} alt="DevReview"/></Link>
					</div>

					<Link className="navigation__item" to="/artigos">Artigos</Link>
					<a className="navigation__item" href="mailto:hello@devreview.co">Contato</a>
        </div>
			</div>
		)
	}
}

export default Header
