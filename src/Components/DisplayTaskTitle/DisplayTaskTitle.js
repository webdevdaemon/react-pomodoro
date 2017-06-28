import './DisplayTaskTitle.css'

import React from 'react'
import PropTypes from 'prop-types'

const DisplayTaskTitle = ({taskTitle}) => (
	<div className="DisplayTaskTitle">
    <p className='task-title'>
      {taskTitle}
    </p>
	</div>
)

DisplayTaskTitle.propTypes = {
  taskTitle: PropTypes.string.isRequired,
}

DisplayTaskTitle.defaultProps = {}

export default DisplayTaskTitle
