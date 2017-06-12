import './ClockWrapper.css'

import DigitalClockDisplay from '../DigitalClockDisplay/index'
import PropTypes from 'prop-types'
import React from 'react'
import Button from '../Button/Button'

const styles = {
  stopped: {color: 'orangered'},
  chillin: {color: 'cornflowerblue'},
  werkin: {color: 'greenyellow'},
}

const ClockWrapper = ({stateObject, timerToggler}) => (
  <div className="ClockWrapper wrapper">
    <div className="work-rest-alert">
      <p
        style={
					!stateObject.is_running
						? styles.stopped
						: stateObject.rest ? styles.chillin : styles.werkin
				}
      >
        {!stateObject.is_running ? `STOPPED` : stateObject.rest ? "CHILLIN'" : "WERKIN'"}
      </p>
    </div>

    <DigitalClockDisplay
      timer={stateObject.timer}
      is_running={stateObject.is_running}
      seperatorFlash={stateObject.seperator_flash}
    />
    <div className="timer-toggle container-fluid">
      <div className="row col-12 no-gutters timer-toggle-wrap">
        <Button
          className="button-timer-toggle btn btn-success btn-block"
          toggledOn={stateObject.is_running}
          labelOff="START"
          labelOn="STOP"
          size="large"
          background="green"
          backgroundHover="white"
          color="white"
          colorHover="black"
          handler={timerToggler}
        />
      </div>
    </div>
  </div>
)

ClockWrapper.propTypes = {
  stateObject: PropTypes.object.isRequired,
  timerToggler: PropTypes.func.isRequired,
}
ClockWrapper.default = {}

export default ClockWrapper
