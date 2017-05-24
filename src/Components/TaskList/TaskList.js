import './TaskList.css'

import PropTypes from 'prop-types'
import React from 'react'
import TaskListItem from '../TaskListItem/TaskListItem'

const TaskList = ({taskList}) => (
	<div className="TaskList">
		<ul className='task-list-ul'>
			{
				taskList.map((obj, dex) => (
					<TaskListItem
						key={`TN-${dex}`}
						taskObject={obj}
					/>
				))
			}
		</ul>
	</div>
)
TaskList.propTypes = {
	taskList: PropTypes.array.isRequired,
}
TaskList.defaultProps = {}

export default TaskList
