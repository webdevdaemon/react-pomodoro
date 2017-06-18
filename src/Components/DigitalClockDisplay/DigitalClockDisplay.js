import './DigitalClockDisplay.css'

import DigitalClockColumn from '../DigitalClockColumn/index'
import PropTypes from 'prop-types'
import React from 'react'
import Seperator from '../Seperator/index'

class DigitalClockDisplay extends React.Component {
  constructor() {
    super()
    this.state = {
      seconds_remaining: 0,
      minutes_remaining: 0,
      hours_remaining:   0
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          {this.props.children}
        </div>
        <div className="DigitalClockDisplay">
          <DigitalClockColumn sectionLabel='hours' timeValue={this.props.timer.hours} />
          <Seperator />
          <DigitalClockColumn sectionLabel='minutes' timeValue={this.props.timer.minutes} />
          <Seperator />
          <DigitalClockColumn sectionLabel='seconds' timeValue={this.props.timer.seconds} />
        </div>
      </div>
    )
  }
}
DigitalClockDisplay.propTypes = {
  timer:      PropTypes.object,
  is_running: PropTypes.bool,
  children:   PropTypes.node
}
DigitalClockDisplay.defaultProps = {
  timer:      { hours: 1, minutes: 25, seconds: 0 },
  is_running: false
}

export default DigitalClockDisplay
