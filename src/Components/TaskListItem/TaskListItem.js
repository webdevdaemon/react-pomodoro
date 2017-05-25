import './TaskListItem.css'

import PropTypes from 'prop-types'
import React from 'react'

const TaskListItem = ({ taskItem }) => (
	<li className="TaskListItem">

		<div 'item-text'>

			<div 'item-name'>
				<p> {taskItem.name} </p>
			</div>

			<div 'item-notes'>
				<p> {taskItem.notes} </p>
			</div>
		</div>

		<div 'item-time'>

			<div 'item-hours'>

				<p> {taskItem.hours} </p>
			</div >

			<div 'item-minutes'>
				<p> {taskItem.minutes} </p>
			</div >

		</div>
		<div 'item-minutes'>
			<p> {taskItem.name} </p>
		</div>

			<p> {taskItem.name} </p>
		</div>
		<p> {taskItem.hours.toString()} </p>
		<p> {taskItem.minutes.toString()} </p>
		<p> {taskItem.seconds.toString()} </p>
	</li>
)
TaskListItem.propTypes = {
	taskItem: PropTypes.object.isRequired,
}
TaskListItem.defaultProps = {}

export default TaskListItem
