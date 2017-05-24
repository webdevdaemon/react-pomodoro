import './DigitalClockDisplay.css'

import DigitalClockColumn from '../DigitalClockColumn/index'
import PropTypes from 'prop-types'
import React from 'react'
import Seperator from '../Seperator/index'

const DigitalClockDisplay = (props) => (
	<div className="DigitalClockDisplay">
		<DigitalClockColumn sectionLabel='hours' timeValue={props.timer.hours} />
		<Seperator />
		<DigitalClockColumn sectionLabel='minutes' timeValue={props.timer.minutes} />
		<Seperator />
		<DigitalClockColumn sectionLabel='seconds' timeValue={props.timer.seconds} />
	</div>
)
DigitalClockDisplay.propTypes = {
	timer: PropTypes.object,
	is_running: PropTypes.bool,
}
DigitalClockDisplay.defaultProps = {
	timer: {hours: 1, minutes: 25, seconds: 0},
	is_running: false,
}

export default DigitalClockDisplay
