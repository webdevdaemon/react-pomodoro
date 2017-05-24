import './TaskListItem.css'

import PropTypes from 'prop-types'
import React from 'react'

const TaskListItem = ({taskObject}) => (
	<li className="TaskListItem">
		<p> TaskListItem </p>
	</li>
)
TaskListItem.propTypes = {
	key: PropTypes.string.isRequired,
	taskObject: PropTypes.object.isRequired,
}
TaskListItem.defaultProps = {}

export default TaskListItem
