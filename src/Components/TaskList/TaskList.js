import './TaskList.css'

import PropTypes from 'prop-types'
import React from 'react'
// import TaskListItem from '../TaskListItem/TaskListItem'

const TaskList = ({taskList, ...props}) =>
	<div className="TaskList">
		<div className="row no-gutters column-headers">
			<div className="col-7 column-header-name">
				<p>
					Task Info
				</p>
			</div>
			<div className="col-2 column-header-work">
				<p>
					Work
				</p>
			</div>
			<div className="col-1 column-header-rest">
				<p>
					Rest
				</p>
			</div>
			<div className="col-2 column-header-spacer" />
		</div>
    <ul className="task-list-ul">

      { props.children }

		</ul>
	</div>

TaskList.propTypes = {
	children: PropTypes.any
}

TaskList.defaultProps = {}

export default TaskList
