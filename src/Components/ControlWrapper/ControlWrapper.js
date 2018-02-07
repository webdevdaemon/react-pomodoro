import './ControlWrapper.css'

import PropTypes from 'prop-types'
import React from 'react'

import ControlPanel from '../ControlPanel/ControlPanel'
import PanelTitle from '../PanelTitle/PanelTitle'

const ControlWrapper = ({methods, controlState, stateObject}) => (
  <div className='ControlWrapper wrapper col-12'>
    <PanelTitle title="Create Task" dashedClassPrefix="control-wrapper" />
    <ControlPanel
      methods={methods}
      controlState={controlState}
      isRunning={stateObject.is_running}
      onBreak={stateObject.rest}
    />
  </div>
)
ControlWrapper.propTypes = {
  controlState: PropTypes.object.isRequired,
  methods: PropTypes.object.isRequired,
  stateObject: PropTypes.object.isRequired,
}

ControlWrapper.defaultProps = {}

export default ControlWrapper
