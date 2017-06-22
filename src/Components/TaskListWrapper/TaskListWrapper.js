import './TaskListWrapper.css'

import PropTypes from 'prop-types'
import React from 'react'
import TaskList from '../TaskList/index'

const TaskListWrapper = ({ stateObject, className }) => (
  <div className={`TaskListWrapper wrapper ${className}`}>
    <div className='task-list-title'>
      <p>My Tasks</p>
    </div>
    <TaskList taskList={stateObject.task_list} />
  </div>
)

TaskListWrapper.propTypes = {
	stateObject: PropTypes.object.isRequired,
	className: PropTypes.string.isRequired
}
TaskListWrapper.defaultProps = {}

export default TaskListWrapper
