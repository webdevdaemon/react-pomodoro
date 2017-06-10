import './ControlWrapper.css'

import ControlPanel from '../ControlPanel/index'
import PropTypes from 'prop-types'
import React from 'react'

const ControlWrapper = ({ timerSetter, addTaskToList, stateObject, setTimerFromRest }) => (
    <div className="ControlWrapper wrapper">
        <div className='control-panel-title'>
            <p>
				Add New Task
			</p>
        </div>
        <ControlPanel isRunning={stateObject.is_running} onBreak={stateObject.rest} timerSetter={timerSetter} addTaskToList={addTaskToList} setTimerFromRest={setTimerFromRest} />
    </div>
)

ControlWrapper.propTypes = {
    stateObject: PropTypes.object,
    timerSetter: PropTypes.func.isRequired,
    addTaskToList: PropTypes.func.isRequired,
    setTimerFromRest: PropTypes.func.isRequired,
}

ControlWrapper.defaultProps = {}

export default ControlWrapper
