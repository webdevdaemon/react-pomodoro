import './Button.css'

import PropTypes from 'prop-types'
import React from 'react'

class Button extends React.Component {
	constructor() {
		super()
		this.state = {}
	}

	render() {
		return (
			<button className="Button" onClick={this.props.timerToggler}>
				{
					(this.props.toggledOn) ?
					(this.props.labelOn)   :
					(this.props.labelOff)
				}
			</button>
		)
	}
}

Button.propTypes = {
	toggledOn: PropTypes.bool.isRequired,
	labelOff: PropTypes.string.isRequired,
	labelOn: PropTypes.string.isRequired,
	size: PropTypes.string,
	background: PropTypes.string.isRequired,
	backgroundHover: PropTypes.string,
	color: PropTypes.string.isRequired,
	colorHover: PropTypes.string,
	timerToggler: PropTypes.func.isRequired,
	style: PropTypes.object,
}

Button.defaultProps = {
	isRunning: false,
	labelOff: 'Do It',
	labelOn: 'Undo It',
	size: 'small',
	background: 'blue',
	backgroundHover: 'white',
	color: 'white',
	colorHover: 'blue',
}

export default Button
