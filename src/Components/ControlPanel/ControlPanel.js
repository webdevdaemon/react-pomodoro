import PropTypes from 'prop-types'
import React from 'react'
import './ControlPanel.css'

const ControlPanel = (props) => (
	<div className="ControlPanel">
		<form
			className="create-task-form container-fluid"
			name="create-task"
			id="create-task-form-id"
			onSubmit={e => {
				e.preventDefault()
				props.methods.addTaskToList(props.controlState)
				setTimeout(() => {
					props.methods.controlPanelInit()
				}, 100)
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
							value={props.controlState.name}
							onChange={props.methods.onControlPanelChange}
							id="task-name"
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
							value={props.controlState.notes}
							onChange={props.methods.onControlPanelChange}
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
								value={
									props.controlState.hours < 10
										? `0${props.controlState.hours}`
										: props.controlState.hours
								}
								onChange={props.methods.onControlPanelChange}
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
								value={
									props.controlState.minutes < 10
										? `0${props.controlState.minutes}`
										: props.controlState.minutes
								}
								onChange={props.methods.onControlPanelChange}
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
								props.controlState.rest_length < 10
									? `0${props.controlState.rest_length}`
									: props.controlState.rest_length
							}
							onChange={props.methods.onControlPanelChange}
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
ControlPanel.propTypes = {
	controlState: PropTypes.object.isRequired,
	methods: PropTypes.object.isRequired,
	isRunning: PropTypes.bool.isRequired,
	onBreak: PropTypes.bool.isRequired
}

ControlPanel.defaultProps = {}

export default ControlPanel
