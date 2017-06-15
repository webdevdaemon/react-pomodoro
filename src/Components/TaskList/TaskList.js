import './TaskList.css'

import PropTypes from 'prop-types'
import React from 'react'
import TaskListItem from '../TaskListItem/TaskListItem'

class TaskList extends React.PureComponent {
  render() {
    const {task_list} = this.props

    return (
      <div className="TaskList">
        <div className="row no-gutters column-headers">
          <div className="col-7 column-header-name"><p>Task Info</p></div>
          <div className="col-2 column-header-work"><p>Work</p></div>
          <div className="col-2 column-header-rest"><p>Rest</p></div>
          <div className="col-1 column-header-spacer"> </div>
        </div>
        <ul className="task-list-ul">
          {task_list.length > 0
            ? task_list.map((obj, dex) => <TaskListItem key={`Tid_${dex}`} taskItem={obj} />)
            : <p className="no-tasks-msg">No Tasks in Queue...</p>}
        </ul>
      </div>
    )
  }
}

TaskList.propTypes = {
  task_list: PropTypes.array.isRequired,
}

TaskList.defaultProps = {}

export default TaskList
