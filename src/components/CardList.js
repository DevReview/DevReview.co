import React from 'react'

class CardList extends React.Component {
	render() {
		return (
			<div className="cardlist">
				{this.props.children}
			</div>
		)
	}
}

export default CardList
