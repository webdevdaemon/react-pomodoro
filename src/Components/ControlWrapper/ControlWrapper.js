import './ControlWrapper.css'

import ControlPanel from '../ControlPanel/index'
import PropTypes from 'prop-types'
import React from 'react'

const ControlWrapper = ({timerSetter, timerToggler, addTaskToList, stateObject}) => (
	<div className="ControlWrapper">
		<ControlPanel
			isRunning={stateObject.is_running}
			onBreak={stateObject.on_break}
			timerToggler={timerToggler}
			timerSetter={timerSetter}
			addTaskToList={addTaskToList}
		/>
	</div>
)
ControlWrapper.propTypes = {
	stateObject: PropTypes.object,
	timerToggler: PropTypes.func.isRequired,
	timerSetter: PropTypes.func.isRequired,
	addTaskToList: PropTypes.func.isRequired,
}
ControlWrapper.defaultProps = {}

export default ControlWrapper
