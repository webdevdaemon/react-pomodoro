import './TaskList.css'

import PropTypes from 'prop-types'
import React from 'react'
import TaskListItem from '../TaskListItem/TaskListItem'

const TaskList = ({tasks}) => {

    return (
        <div className="TaskList">
            <ul className='task-list-ul'>
                { tasks.map((obj, dex) => {
                      console.log("taskObject = ", obj)
                      return ( <TaskListItem key={ `TN-${dex}` } taskItem={ obj } /> )
                  }) }
            </ul>
        </div>
    )
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
}

TaskList.defaultProps = {}

export default TaskList
