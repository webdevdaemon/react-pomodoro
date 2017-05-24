import './ClockWrapper.css'

import DigitalClockDisplay from '../DigitalClockDisplay/index'
import PropTypes from 'prop-types'
import React from 'react'

const ClockWrapper = ({stateObject}) => (
	<div className="ClockWrapper" style={(stateObject.is_running) ? {background: 'white'} : {}}>
		<DigitalClockDisplay
			timer={stateObject.timer}
			is_running={stateObject.is_running}
		/>
	</div>
)
ClockWrapper.propTypes = {
	stateObject: PropTypes.object.isRequired,
}
ClockWrapper.default = {}

export default ClockWrapper
