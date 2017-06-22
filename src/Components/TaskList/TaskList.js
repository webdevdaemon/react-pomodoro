import './TaskList.css'

import PropTypes from 'prop-types'
import React, {Component} from 'react'
import TaskListItem from '../TaskListItem/TaskListItem'

class TaskList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      task_list: this.props.taskList
    }
  }

  /* eslint-disable no-undef */

  render() {
    console.log('task_list => ', this.state.task_list)
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
            (this.state.task_list.length > 0) ? this.state.task_list.map((item, dex) => (
                <TaskListItem
                  position={ dex + 1 }
                  key={ `T${ dex + 1 }` }
                  taskItem={ item }
                  promoteTask={ this._promoteTask }
                  deleteTask={ this._deleteTask }
                />
              )) : <p className="no-tasks-msg">No Tasks in Queue...</p>
          }
				</ul>
			</div>
		)
	}
}

TaskList.propTypes = {
  methods: PropTypes.object.isRequired,
	taskList: PropTypes.array.isRequired
}

TaskList.defaultProps = {}

export default TaskList
