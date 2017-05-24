import './Seperator.css'

import PropTypes from 'prop-types'
import React from 'react'

const Seperator = (props) => (
	<div className="Seperator seperator-wrapper">
		<p className="seperator">|</p>
	</div>
)
Seperator.propTypes = {
	displayState: PropTypes.bool,
}
Seperator.defaultProps = {}

export default Seperator
