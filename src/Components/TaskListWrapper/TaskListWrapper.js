import './TaskListWrapper.css'

import PropTypes from 'prop-types'
import React from 'react'
import TaskList from '../TaskList/index'
import TaskListItem from '../TaskListItem/TaskListItem'

const TaskListWrapper = (props) => (
	<div className={`TaskListWrapper wrapper ${props.className}`}>
		<div className="task-list-title">
			<p>My Tasks</p>
		</div>
    <TaskList taskList={props.taskList}>
      {props.taskList.length > 0
        ? props.taskList.map((item, dex) => (
          <TaskListItem
            position={dex}
            key={`T${dex}`}
            taskItem={item}
            promoteTask={props.methods.promoteTask}
            deleteTask={props.methods.deleteTask}
            notesToggler={props.methods.notesToggler}
            notesOpen={item.notes_open}
          />
        ))
        : <p className="no-tasks-msg">No Tasks in Queue...</p>}
    </TaskList>
	</div>
)
TaskListWrapper.propTypes = {
	className: PropTypes.string.isRequired,
	methods: PropTypes.object.isRequired,
  taskList: PropTypes.array
}
TaskListWrapper.defaultProps = {}

export default TaskListWrapper
