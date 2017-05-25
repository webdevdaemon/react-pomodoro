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
			seconds: 0,
			rest: '',
		}
		// const control_state = this.state
	}

	_onChange = (e, value = e.target.value, name = e.target.name) => {
		// e.preventDefault()
		// e.persist()
		let updater = {[name]: value}
		this.setState(updater)
	}

	_createTaskObject = (obj = this.state) => {
		let { name, notes, hours, minutes, seconds, rest }  = obj
		console.log([name, { hours, minutes, seconds }, rest])
		return { name, notes, hours, minutes, seconds, rest }
	}

	render() {
		return (
			<div className="ControlPanel">
				<form onSubmit={
					(e) => {
						e.preventDefault()
						let t_o = this._createTaskObject()
						console.log(t_o)
						this.props.addTaskToList(t_o)
						this.props.timerSetter(t_o)
					}}
				>
					<div className="task-info-inputs">
						<input
							name='name'
							label='Task Name'
							type='text'
							placeholder='Task Nickname'
							value={this.state.name}
							onChange={this._onChange}
							id='task-name'
						/>
						<input
							name='rest'
							label='Break Length'
							type='text'
							placeholder=''
							value={this.state.rest}
							onChange={this._onChange}
							id='break-length'
						/>
					</div>
					<div className="task-time-inputs">
						<input
							name='hours'
							type='number'
							placeholder='00'
							value={(this.state.hours < 10) ? `0${this.state.hours}` : this.state.hours }
							onChange={this._onChange}
							id='task-hours'
							min='0'
							max='10'
						/>
						<input
							name='minutes'
							type='number'
							placeholder='00'
							value={(this.state.minutes < 10) ? `0${this.state.minutes}` : this.state.minutes }
							onChange={this._onChange}
							id='task-minutes'
							min='0'
							max='59'
						/>
						<input
							name='seconds'
							type='number'
							placeholder='00'
							value={(this.state.seconds < 10) ? `0${this.state.seconds}` : this.state.seconds }
							onChange={this._onChange}
							id='task-seconds'
							min='0'
							max='59'
						/>
					</div>
					<div>
						<input
							type="submit"
							value='Create Task'
							id='create-task'
							className='create-task-button'
						/>
					</div>
				</form>
				<Button
					toggledOn={this.props.isRunning}
					labelOff='START'
					labelOn='STOP'
					size='large'
					background='green'
					backgroundHover='white'
					color='white'
					colorHover='black'
					timerToggler={this.props.timerToggler}
				/>
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
