import './AppTitle.css'

import React from 'react'

const styles = {
  stopped: {color: 'orangered'},
  chillin: {color: 'cornflowerblue'},
  werkin: {color: 'greenyellow'},
}

const AppTitle = (props) => (
  <div className="AppTitle">

    <div className='app-title-main'>
      <h2>PoMotiv8r</h2>
    </div>

    <div className="work-rest-alert">
      <p className='work-rest-alert-p' style={(!props.stateObject.is_running) ? styles.stopped : ((props.stateObject.rest) ? styles.chillin : styles.werkin)}>
        {
          ( !props.stateObject.is_running ) ? `STOPPED` : ( ( props.stateObject.rest ) ? `CHILLIN'` : `WERKIN'` )
        }
      </p>
    </div>

    <div className='app-title-sub'>
      <p>A Task-Based, Pomodoro App</p>
      <p><small>Powered by ReactJS & Bootstrap 4</small></p>
    </div>

  </div>
)

export default AppTitle
