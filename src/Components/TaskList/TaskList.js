import './TaskList.css'

import PropTypes from 'prop-types'
import React from 'react'
import TaskListItem from '../TaskListItem/TaskListItem'

const TaskList = ({task_list}) => {

    return (
        <div className="TaskList">
            <ul className='task-list-ul'>
                {
					(task_list.length > 0) ?
					(
						task_list.map((obj, dex) => {
							console.log("taskObject = ", obj)
							return (
								<TaskListItem key={ `Tid_${dex}` } taskItem={ obj } />
							)
						})
					)	: 	(
						<p className="no-tasks-msg">No Tasks in Queue... </p>
					)
				}
            </ul>
        </div>
    )
}

TaskList.propTypes = {
    task_list: PropTypes.array.isRequired,
}

TaskList.defaultProps = {}

export default TaskList
