import './TaskList.css'

import PropTypes from 'prop-types'
import React from 'react'
import TaskListItem from '../TaskListItem/TaskListItem'

class TaskList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      task_list: this.props.task_list.map(( task, dex ) => (
        Object.assign(task, { position: dex + 1 })
      ))
    }
  }

  /* eslint-disable */

  _promoteTask = (alpha_task) => {
    let new_list = this.state.task_list.reduce(( acc, item, dex ) => (
      item.position !== alpha_task.position
        ? acc.concat( item )
        : [item].concat( acc )
    ), [])
    console.log(this.state.task_list, new_list)
    this.setState({task_list: new_list}, () => {console.log('TASK PROMOTED')})
  }

  _deleteTask = (omega_task) => {
    let new_list = this.state.task_list.filter(item => item.position !== omega_task.position)
    this.setState({task_list: new_list}, () => {console.log('TASK DELETED')} )
  }

  render() {
		return (
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
					<div className="col-2 column-header-spacer"/>
				</div>
				<ul className="task-list-ul">
          {
            (this.state.task_list.length > 0)
              ? this.state.task_list.map((obj, dex) => (
                <TaskListItem
                  position={ dex + 1 }
                  key={ `T${ dex + 1 }` }
                  taskItem={ obj }
                  promoteTask={ this._promoteTask }
                  deleteTask={ this._deleteTask }
                />
              ))
              : <p className="no-tasks-msg">No Tasks in Queue...</p>
          }
				</ul>
			</div>
		)
	}
}

TaskList.propTypes = {
	task_list: PropTypes.array.isRequired
}

TaskList.defaultProps = {}

export default TaskList
