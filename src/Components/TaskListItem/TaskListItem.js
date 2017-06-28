import './TaskListItem.css'

import PropTypes from 'prop-types'
import React from 'react'
import FaClose from '../../fa/close'
import FaAngleDoubleUp from '../../fa/angle-double-up'
import ReactHtmlParser from 'react-html-parser'

const styles = {
	OPEN: {
		height: '100%',
		maxHeight: '140px',
		overflow: 'scroll'
	},
	CLOSED: {
		height: '0',
		maxHeight: '0',
		overflow: 'hidden',
		padding: '0',
		border: 'none'
	},
	BUTTON_DOWN: {
		background: '#a5acaf',
		border: 'inset 5px #666 ',
		color: 'black'
	}
}

const TaskListItem = props =>
	<li className="TaskListItem container-fluid">
		<div className="task-list-item-top-row row no-gutters">
			<div className="item-text col-4">
				<div className="item-name">
					<p>
						{props.taskItem.name}
					</p>
				</div>
			</div>
			<div className="item-notes-toggle-wrapper col-3">
				<button
					className="item-notes-toggle btn btn-danger btn-block"
					style={props.notesOpen ? styles.BUTTON_DOWN : null}
					onClick={e => {
						props.notesToggler(e, props.position)
					}}
				>
					{props.notesOpen ? 'Hide Notes' : 'View Notes'}
				</button>
			</div>
			<div className="item-time col-2">
				<div className="item-hours">
					<p>
						{`${props.taskItem.hours} h`}
					</p>
				</div>
				<div className="item-minutes">
					<p>
						{`${props.taskItem.minutes} h`}
					</p>
				</div>
			</div>
			<div className="item-break col-1">
				<p className="">
					{`${props.taskItem.rest_length} m`}
				</p>
			</div>
			<div className="item-promote col-1">
				<button
					className="promote"
					onClick={() => {
						props.promoteTask(props.taskItem)
					}}
				>
					<FaAngleDoubleUp />
				</button>
			</div>
			<div className="item-delete col-1">
				<button
					className="delete"
					onClick={() => {
						props.deleteTask(props.taskItem)
					}}
				>
					<FaClose />
				</button>
			</div>
		</div>
		<div className="task-list-item-bottom-row row no-gutters">
			<div className="item-notes" style={props.notesOpen ? styles.OPEN : styles.CLOSED}>
				<p>
					{ReactHtmlParser(props.taskItem.notes.replace(/\n/gi, '<br />'))}
				</p>
			</div>
		</div>
	</li>

TaskListItem.propTypes = {
	taskItem: PropTypes.object.isRequired,
	position: PropTypes.number.isRequired,
	promoteTask: PropTypes.func.isRequired,
	deleteTask: PropTypes.func.isRequired,
	notesToggler: PropTypes.func.isRequired,
	notesOpen: PropTypes.bool.isRequired
}

export default TaskListItem
