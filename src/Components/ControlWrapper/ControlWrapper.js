import './ControlWrapper.css'

import ControlPanel from '../ControlPanel/index'
import PropTypes from 'prop-types'
import React from 'react'

const ControlWrapper = ({timerToggler, stateObject}) => (
	<div className="ControlWrapper">
		<ControlPanel
			isRunning={stateObject.is_running}
			onBreak={stateObject.on_break}
			timerToggler={timerToggler}
		/>
	</div>
)
ControlWrapper.propTypes = {
	stateObject: PropTypes.object,
	timerToggler: PropTypes.func.isRequired,
}
ControlWrapper.defaultProps = {}

export default ControlWrapper
