import './AppTitle.css'

import React from 'react'

const styles = {
  stop: {color: 'orangered'},
  chill: {color: 'cornflowerblue'},
  work: {color: 'greenyellow'},
}

const AppTitle = ({stateObject}) => (
  <div className="AppTitle">
    <div className="app-title-main">
      <h2>PoMotiv8r</h2>
    </div>

    <div className="work-rest-alert">
      <p
        className="work-rest-alert-p"
        style={
          !stateObject.is_running
            ? styles.stop
            : stateObject.rest ? styles.chill : styles.work
        }
      >
        {!stateObject.is_running
          ? `STOPPED`
          : stateObject.rest ? `CHILLIN'` : `WERKIN'`}
      </p>
    </div>

    <div className="app-title-sub">
      <p>A Task-Based, Pomodoro App</p>
      <p>
        <small>Powered by ReactJS & Bootstrap 4</small>
      </p>
    </div>
  </div>
)

export default AppTitle
