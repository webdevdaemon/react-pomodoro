import './ControlWrapper.css'

import ControlPanel from '../ControlPanel/index'
import PropTypes from 'prop-types'
import React from 'react'

const ControlWrapper = (props) => (
  <div className={`ControlWrapper wrapper ${props.className}`}>
    <div className='control-panel-title'>
      <p>Create Task</p>
    </div>
    <ControlPanel
      isRunning={props.stateObject.is_running}
      onBreak={props.stateObject.rest}
      timerSetter={props.timerSetter}
      addTaskToList={props.addTaskToList}
      setTimerFromRest={props.setTimerFromRest}
      createItemID={props.createItemID}
    />
  </div>
)

ControlWrapper.propTypes = {
  stateObject: PropTypes.object.isRequired,
  timerSetter: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  addTaskToList: PropTypes.func.isRequired,
  setTimerFromRest: PropTypes.func.isRequired,
  createItemID: PropTypes.func.isRequired
}

ControlWrapper.defaultProps = {}

export default ControlWrapper
