import './TaskListItem.css'

import PropTypes from 'prop-types'
import React from 'react'

const TaskListItem = ({ taskItem }) => (
  <li className="TaskListItem container-fluid">

    {/*--------- TOP ROW ---------*/}
    <div className='task-list-item-top-row row no-gutters'>
      <div className="item-text col-5">
        <div className="item-name">
          <p>{taskItem.name}</p>
        </div>
      </div>
      <div className="item-notes-toggle-wrapper col-3">
        <button className="item-notes-toggle btn btn-danger btn-block">See Notes</button>
      </div>
      <div className="item-time col-2">
        <div className="item-hours">
          <p>
            {`${taskItem.hours} ${(taskItem.hours > 1) ? 'hrs' : 'hr' }`}
          </p>
        </div>
        <div className="item-minutes">
          <p>
            {`${taskItem.minutes} ${(taskItem.minutes > 1) ? 'mins' : 'min' }`}
          </p>
        </div>
      </div>
      <div className="item-break col-2">
        <p className="">
          {`${taskItem.rest_length} mins`}
        </p>
      </div>
    </div>

    {/*--------- BOTTOM ROW ---------*/}
    <div className='task-list-item-bottom-row row no-gutters'>
      <div className={`item-notes ${reveal-notes`}`}>
        <p>{taskItem.notes}</p>
      </div>
    </div>

  </li>
)
TaskListItem.propTypes = {
  taskItem: PropTypes.object.isRequired,
}
TaskListItem.defaultProps = {}

export default TaskListItem
