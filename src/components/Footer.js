import React from 'react'
import { Link } from 'gatsby';

class Footer extends React.Component {
	render() {
		return (
      <footer className="footer">
				<div className="container">
					<div className="footer__copyright">
						&copy;{new Date().getFullYear()} DevReview.co.
					</div>

					<div className="footer__links">
						<Link to="/o-que-o-blog-devreview-pode-agregar-para-voce-como-desenvolvedor">Sobre</Link>
						<a href="mailto:hello@devreview.co">Contato</a>
					</div>
				</div>
      </footer>
		)
	}
}

export default Footer
