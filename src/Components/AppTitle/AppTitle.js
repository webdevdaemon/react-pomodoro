import './AppTitle.css'

import React from 'react'
import PropTypes from 'prop-types'

const AppTitle = () => (
  <div className="AppTitle">
    <div className='app-title-main'>
      <h2>pomoJS</h2>
      <small>Powered by ReactJS & Bootstrap 4</small>
    </div>

    <div className='app-title-sub'>
      <p>A Task-Based, GTD-inspired, Pomodoro Timer</p>
    </div>
  </div>
)

export default AppTitle
