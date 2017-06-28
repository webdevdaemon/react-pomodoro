import './ClockWrapper.css'

import DigitalClockDisplay from '../DigitalClockDisplay/index'
import PropTypes from 'prop-types'
import React from 'react'
import DisplayTaskTitle from '../DisplayTaskTitle/DisplayTaskTitle'
import Button from '../Button/Button'

const ClockWrapper = ({stateObject, timerToggler}) => (
  <div className='ClockWrapper wrapper'>
    <DigitalClockDisplay timer={stateObject.timer} is_running={stateObject.is_running} />
    <div className='row col-12 no-gutters timer-task-title-wrap'>
    </div>
    <div className='row col-12 no-gutters timer-toggle-wrap'>
      <Button
        className='button-timer-toggle btn btn-success btn-block'
        toggledOn={stateObject.is_running}
        rest={stateObject.rest}
        done={stateObject.task_done}
        labelOff={`START: ${stateObject.task_current.name || `Get Things Done`}`}
        labelOn={`PAUSE: ${stateObject.task_current.name || `Get Things Done`}`}
        labelRest={stateObject.is_running
                   ? `PAUSE BREAK `
                   : `START BREAK `}
        labelNext={stateObject.task_list[0]
                   ? `UP NEXT: ${stateObject.task_list[0].name}`
                   : `NO MORE THINGS`}
        size='large'
        background='green'
        backgroundHover='white'
        color='white'
        colorHover='black'
        handler={timerToggler}
      >
        <DisplayTaskTitle taskTitle={stateObject.task_current.name} />
      </Button>
    </div>
  </div>
)

ClockWrapper.propTypes = {
  stateObject: PropTypes.object.isRequired,
  timerToggler: PropTypes.func.isRequired
}

export default ClockWrapper
