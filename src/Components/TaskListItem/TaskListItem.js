import './TaskListItem.css'

import PropTypes from 'prop-types'
import React from 'react'

const TaskListItem = ({taskItem}) => (
    <li className="TaskListItem">
        <div className='item-text'>
            <div className='item-name'>
                <p>{ taskItem.name }</p>
            </div>
            <div className='item-notes'>
                <p>{ taskItem.notes }</p>
            </div>
        </div>
        <div className='item-time'>
            <div className='item-hours'>
                <p>{ taskItem.hours }</p>
            </div>
            <div className='item-minutes'>
                <p>{ taskItem.minutes }</p>
            </div>
        </div>
        <div className='item-break'>
            <p lassName="label label-break"> Break</p>
            <p lassName="break break-value"> { taskItem.break }</p>
        </div>
        <p>{ taskItem.hours.toString() }</p>
        <p>{ taskItem.minutes.toString() }</p>
        <p>{ taskItem.seconds.toString() }</p>
    </li>
)
TaskListItem.propTypes = {
    taskItem: PropTypes.object.isRequired,
}
TaskListItem.defaultProps = {}

export default TaskListItem
