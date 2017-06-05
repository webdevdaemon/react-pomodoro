import './ControlPanel.css'

import Button from '../Button/Button'
import PropTypes from 'prop-types'
import React from 'react'

class ControlPanel extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            notes: '',
            hours: 0,
            minutes: 0,
            rest: '',
        }
    }

    _onChange = (e, value = e.target.value, name = e.target.name) => {
        let updater = {
            [name]: value
        }
        this.setState(updater)
    }

    render() {
        return (
            <div className="ControlPanel">
                <form className='create-task-form container'
                    name='create-task'
                    id='create-task'
                    onSubmit={ (e) => {
                                   e.preventDefault()
                                   let t_o = this.state
                                   console.log(t_o)
                                   this.props.addTaskToList(t_o)
                                   this.props.timerSetter(t_o)
                               } }>
                    <div className="task-info-input-group row">
                        <div className='col-12 row'>
                            <div className='col-12'>
                                <label htmlFor="task-name" className="label label-task-name">
                                    Task Nickname
                                </label>
                            </div>
                            <div className='col-12'>
                                <input name='name'
                                    label='Task Name'
                                    type='text'
                                    placeholder='Enter a Nickname for your task...'
                                    value={ this.state.name }
                                    onChange={ this._onChange }
                                    id='task-name' />
                            </div>
                        </div>
                        <div className='col-12 row'>
                            <div className='col-12'>
                                <label htmlFor="task-notes" className="label label-task-name">
                                    Task Notes
                                </label>
                            </div>
                            <div className='col-12'>
                                <input name='notes'
                                    label='Task Notes'
                                    type='text'
                                    rows='3'
                                    placeholder='Notes...'
                                    value={ this.state.notes }
                                    onChange={ this._onChange }
                                    id='task-notes' />
                            </div>
                        </div>
                    </div>
                    <div className="task-time-inputs row">
                        <div className='col-8 row work-control'>
                            <div className='col-12'>
                                <p className='work-title'>
                                    WORK
                                </p>
                            </div>
                            <div className='col-12 row'>
                                <div className="col-6">
                                    <label htmlFor="task-hours" className="label label-task-hours">
                                        Task Hours
                                    </label>
                                    <input className='time-input'
                                        name='hours'
                                        type='number'
                                        placeholder='00'
                                        value={ (this.state.hours < 10) ? `0${this.state.hours}` : this.state.hours }
                                        onChange={ this._onChange }
                                        id='task-hours'
                                        min='0'
                                        max='10' />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="task-minutes" className="label label-task-minutes">
                                        Task Minutes
                                    </label>
                                    <input className='time-input'
                                        name='minutes'
                                        type='number'
                                        placeholder='00'
                                        value={ (this.state.minutes < 10) ? `0${this.state.minutes}` : this.state.minutes }
                                        onChange={ this._onChange }
                                        id='task-minutes'
                                        min='0'
                                        max='59' />
                                </div>
                            </div>
                        </div>
                        <div className='col-4 row'>
                            <div className='col-12 rest-control'>
                                <p className='rest-title'>
                                    REST
                                </p>
                            </div>
                            <div className='col-12'>
                                <label htmlFor="task-minutes" className="label label-task-minutes">
                                    Break Length
                                </label>
                                <input className='rest-input'
                                    name='rest'
                                    type='number'
                                    placeholder=''
                                    value={ (this.state.rest < 10) ? `0${this.state.rest}` : this.state.rest }
                                    onChange={ this._onChange }
                                    id='rest'
                                    min='0'
                                    max='30'
                                    step='5' />
                            </div>
                        </div>
                    </div>
                    <div className='input-group'>
                        <input type="submit"
                            value='Create Task'
                            className='button-create-task btn btn-primary btn-block'
                            id='create-task' />
                    </div>
                </form>
                <Button className='button-timer-toggle btn btn-success btn-block'
                    toggledOn={ this.props.isRunning }
                    labelOff='START'
                    labelOn='STOP'
                    size='large'
                    background='green'
                    backgroundHover='white'
                    color='white'
                    colorHover='black'
                    handler={ this.props.timerToggler } />
            </div>
        )
    }
}

ControlPanel.propTypes = {
    isRunning: PropTypes.bool.isRequired,
    onBreak: PropTypes.bool.isRequired,
    timerToggler: PropTypes.func.isRequired,
    timerSetter: PropTypes.func.isRequired,
    addTaskToList: PropTypes.func.isRequired,
}

ControlPanel.defaultProps = {

}

export default ControlPanel
