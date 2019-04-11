import React from 'react'
import SEO from "../components/SEO"

class Head extends React.Component {
	render() {
		return (
			<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		)
	}
}

export default Head
