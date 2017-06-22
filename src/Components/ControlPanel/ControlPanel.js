/* eslint-disable no-undef */

import PropTypes from 'prop-types'
import React, {Component} from 'react'
import './ControlPanel.css'

const INITIAL_STATE = {
	name: '',
	notes: '',
	hours: 0,
	minutes: 0,
  rest_length: 5,
  position: null
}

class ControlPanel extends Component {
	state = INITIAL_STATE

	_onChange = (e, value = e.target.value, name = e.target.name) => {
		let updater = {
			[name]: value
		}
		this.setState(updater)
	}

	_initState = () => {
		this.setState(INITIAL_STATE, () => {
			console.log('ControlPanel state RE-INITIALIZED...')
		})
	}

	render() {
		return (
			<div className="ControlPanel">
				<form
					className="create-task-form container-fluid"
					name="create-task"
					id="create-task-form-id"
          onSubmit={ (e) => {
						e.preventDefault()
            this.props.addTaskToList(this.state)
						this._initState()
					}}
				>
					{/* INFO INFO INFO */}
					<div className="task-info-input-group row no-gutters">
						<div className="col-12 row task-row task-name no-gutters">
							<div className="col-12">
								<input
									name="name"
									label="Task Name"
									type="text"
									placeholder="Enter a descriptive nickname for your task..."
									value={this.state.name}
									onChange={this._onChange}
									id="task-name"
									required
								/>
							</div>
						</div>
						<div className="col-12 row task-row task-notes no-gutters">
							<div className="col-12">
								<textarea
									name="notes"
									label="Task Notes"
									type="text"
									rows="3"
									placeholder="Add info, notes, ideas, instructions, etc..."
									value={this.state.notes}
									onChange={this._onChange}
									id="task-notes"
								/>
							</div>
						</div>
					</div>
					{/* TIME TIME TIME */}
					<div className="task-time-inputs row no-gutters task-row">
						<div className="col-8 row work-control no-gutters">
							<div className="col-12 row no-gutters input-section-title-wrap">
								<p className="input-section work title hours col-6">
									<label htmlFor="task-hours" className="label label-task-hours">
										Hours
									</label>
								</p>
								<p className="input-section work title minutes col-6">
									<label htmlFor="task-minutes" className="label label-task-minutes">
										Minutes
									</label>
								</p>
							</div>
							<div className="col-12 row no-gutters">
								<div className="col-6">
									<input
										className="time-input"
										name="hours"
										type="number"
										placeholder="00"
										value={ (this.state.hours < 10) ? `0${this.state.hours}` : this.state.hours }
										onChange={this._onChange}
										id="task-hours"
										min="0"
										max="10"
									/>
								</div>
								<div className="col-6">
									<input
										className="time-input"
										name="minutes"
										type="number"
										placeholder="00"
										value={(this.state.minutes < 10) ? `0${this.state.minutes}` : this.state.minutes}
										onChange={this._onChange}
										id="task-minutes"
										min="0"
										max="59"
									/>
								</div>
							</div>
						</div>
						<div className="col-4 rest-control row no-gutters">
							<div className="col-12 rest-control no-gutters">
								<p className="input-section rest title">
									<label htmlFor="rest-length" className="label label-task-minutes">
										Break
									</label>
								</p>
							</div>
							<div className="col-12">
								<input
									className="rest-input"
									name="rest_length"
									type="number"
									placeholder=""
									value={
										(this.state.rest_length < 10)
											? `0${this.state.rest_length}`
											: this.state.rest_length
									}
									onChange={this._onChange}
									id="rest-length"
									min="0"
									max="60"
									step="5"
								/>
							</div>
						</div>
					</div>
					<div className="input-group submit">
						<input
							type="submit"
							value="SUBMIT TASK"
							className="button-create-task btn btn-block"
							id="create-task"
						/>
					</div>
				</form>
			</div>
		)
	}
}

ControlPanel.propTypes = {
	isRunning: PropTypes.bool.isRequired,
	onBreak: PropTypes.bool.isRequired,
	timerSetter: PropTypes.func.isRequired,
	addTaskToList: PropTypes.func.isRequired
}

ControlPanel.defaultProps = {}

export default ControlPanel
