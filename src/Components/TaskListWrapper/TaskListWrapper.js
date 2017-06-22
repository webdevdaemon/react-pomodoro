import './TaskListWrapper.css'

import PropTypes from 'prop-types'
import React from 'react'
import TaskList from '../TaskList/index'

const TaskListWrapper = ({stateObject, className, methods}) =>
	<div className={`TaskListWrapper wrapper ${className}`}>
		<div className="task-list-title">
			<p>My Tasks</p>
		</div>
		<TaskList taskList={stateObject.task_list} methods={methods} />
	</div>

TaskListWrapper.propTypes = {
	methods: PropTypes.object.isRequired,
	stateObject: PropTypes.object.isRequired,
	className: PropTypes.string.isRequired
}
TaskListWrapper.defaultProps = {}

export default TaskListWrapper
