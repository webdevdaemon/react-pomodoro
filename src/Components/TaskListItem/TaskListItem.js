/* eslint-disable no-undef */

import './TaskListItem.css'

import PropTypes from 'prop-types'
import React from 'react'
import FaClose from '../../fa/close'
import FaAngleDoubleUp from '../../fa/angle-double-up'

const TaskListItem = ({ taskItem, ...others }) => (

  <li className='TaskListItem container-fluid'>

    <div className='task-list-item-top-row row no-gutters'>
      <div className='item-text col-4'>
        <div className='item-name'>
          <p>
            {taskItem.name}
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
            {`${taskItem.hours} ${(taskItem.hours > 1) ? 'hrs' : 'hr'}`}
          </p>
        </div>
        <div className='item-minutes'>
          <p>
            {`${taskItem.minutes} ${(taskItem.minutes > 1) ? 'mins' : 'min' }`}
          </p>
        </div>
      </div>
      <div className='item-break col-1'>
        <p className=''>
          {`${taskItem.rest_length} mins`}
        </p>
      </div>
      <div className='item-promote col-1'>
        <button className='promote' onClick={() => {this.props.promoteTask(taskItem.taskItem)}}>
          <FaAngleDoubleUp />
        </button>
      </div>
      <div className='item-delete col-1'>
        <button className='delete' onClick={() => {this.props.deleteTask(taskItem.taskItem)}}>
          <FaClose />
        </button>
      </div>
    </div>

    <div className='task-list-item-bottom-row row no-gutters'>
      <div className={'item-notes reveal-notes-' + (taskItem.notes_open) ? 'open' : 'close'}>
        <p>
          {taskItem.notes}
        </p>
      </div>
    </div>
  </li>
)

TaskListItem.propTypes = {
  taskItem: PropTypes.object.isRequired,
  position: PropTypes.number.isRequired,
  promoteTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}

TaskListItem.defaultProps = {}

export default TaskListItem
