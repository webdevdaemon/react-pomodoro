import './TaskListWrapper.css'

import PropTypes from 'prop-types'
import React from 'react'
import TaskList from '../TaskList/index'

const TaskListWrapper = ({stateObject}) => (
	<div className="TaskListWrapper">
		<TaskList
			taskList={stateObject.task_list}
		/>
	</div>
)
TaskListWrapper.propTypes = {
	stateObject: PropTypes.object,
}
TaskListWrapper.defaultProps = {}

export default TaskListWrapper
