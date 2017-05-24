import './ControlPanel.css'

import Button from '../Button/Button'
import PropTypes from 'prop-types'
import React from 'react'

class ControlPanel extends React.Component {
	constructor() {
		super()
		this.state = {
			task_name: '',
			task_length: '',
			break_length: '',
		}
	}

	_onChange = (e, label = e.target.dataset.label) => {
		this.setState((prevState, props) => {
			let updater = {}
			switch(label) {
			case 'taskname':
				updater = { task_name: e.target.value }
				break
			case 'tasklength':
				updater = { task_length: e.target.value }
				break
			case 'breaklength':
				updater = { task_name: e.target.value }
				break
			default:
				console.log('error')
			}
			return updater
		})
	}

	_createTaskObject = ({task_name, task_length, break_length}) => {
		console.log([...arguments])
	}

	render() {
		return (
			<div className="ControlPanel">
				<form onSubmit={this._createTaskObject(this.state)} >
					<div className="task-inputs">
						<input data-label='taskname' label='Task Name' type='text' placeholder='' value={this.state.task_name} onChange={this._onChange} id='task-name' />
						<input data-label='tasklength' label='Task Length' type='text' placeholder='' value={this.state.task_length} onChange={this._onChange} id='task-length' />
						<input data-label='breaklength' label='Break Length' type='text' placeholder='' value={this.state.break_length} onChange={this._onChange} id='break-length' />
					</div>
					<input type="submit" />
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
					style={{display: 'block'}}
				/>
			</div>
		)
	}
}
ControlPanel.propTypes = {
	isRunning: PropTypes.bool.isRequired,
	onBreak: PropTypes.bool.isRequired,
	timerToggler: PropTypes.func.isRequired,
}

ControlPanel.defaultProps = {

}

export default ControlPanel
