import './TaskListItem.css'

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import FaClose from '../../fa/close'
import FaAngleDoubleUp from '../../fa/angle-double-up'

class TaskListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {notes_open: false, position: this.props.position}
  }

  _notesToggler = () => {
    this.setState({notes_open: !this.state.notes_open}, () => {
      console.log('notes TOGGLED')
    })
  }

  render() {
    let { taskItem } = this.props
    taskItem = Object.assign(taskItem, {position: this.props.position})
    return (
      <li className='TaskListItem container-fluid'>

        <div className='task-list-item-top-row row no-gutters'>
          <div className='item-text col-4'>
            <div className='item-name'>
              <p>
                {  taskItem.name  }
              </p>
            </div>
          </div>
          <div className='item-notes-toggle-wrapper col-3'>
            <button className='item-notes-toggle btn btn-danger btn-block' onClick={() => {this._notesToggler()}}  >
              See Notes
            </button>
          </div>
          <div className='item-time col-2'>
            <div className='item-hours'>
              <p>
                {  `${taskItem.hours} ${(taskItem.hours > 1) ? 'hrs' : 'hr' }`  }
              </p>
            </div>
            <div className='item-minutes'>
              <p>
                {  `${taskItem.minutes} ${(taskItem.minutes > 1) ? 'mins' : 'min' }`  }
              </p>
            </div>
          </div>
          <div className='item-break col-1'>
            <p className=''>
              {  `${taskItem.rest_length} mins`  }
            </p>
          </div>
          <div className='item-promote col-1'>
            <button className='promote' onClick={() => {this.props.promoteTask(taskItem)}}>
              <FaAngleDoubleUp />
            </button>
          </div>
          <div className='item-delete col-1'>
            <button className='delete' onClick={() => {this.props.deleteTask(taskItem)}}>
              <FaClose />
            </button>
          </div>
        </div>

        <div className='task-list-item-bottom-row row no-gutters'>
          <div className={'item-notes reveal-notes-' + (taskItem.notes_open) ? 'open' : 'close'}>
            <p>
              {  taskItem.notes  }
            </p>
          </div>
        </div>
      </li>
    )
  }
}

TaskListItem.propTypes = {
  taskItem: PropTypes.object.isRequired,
  position: PropTypes.number.isRequired,
  promoteTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}

TaskListItem.defaultProps = {}

export default TaskListItem
