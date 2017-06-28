import './ControlWrapper.css'

import ControlPanel from '../ControlPanel/index'
import PropTypes from 'prop-types'
import React from 'react'

const ControlWrapper = props => (
	<div className={`ControlWrapper wrapper col-12`}>
		<div className="control-panel-title">
			<p>Create Task</p>
		</div>
		<ControlPanel
			methods={props.methods}
			controlState={props.controlState}
			isRunning={props.stateObject.is_running}
			onBreak={props.stateObject.rest}
		/>
	</div>
)
ControlWrapper.propTypes = {
	controlState: PropTypes.object.isRequired,
	methods: PropTypes.object.isRequired,
	stateObject: PropTypes.object.isRequired
}

ControlWrapper.defaultProps = {}

export default ControlWrapper
