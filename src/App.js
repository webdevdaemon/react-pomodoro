import './App.css'

import React, { Component } from 'react'

import AppWrapper from './Components/AppWrapper/AppWrapper'
import ClockWrapper from './Components/ClockWrapper/index'
import ControlWrapper from './Components/ControlWrapper/ControlWrapper'
import TaskListWrapper from './Components/TaskListWrapper/TaskListWrapper'

class App extends Component {
	constructor() {
		super()
		this.state = {
			timer: { hours: 0, minutes: 0, seconds: 0 },
			on_break: false,
			is_running: false,
			task_list: [],
		}
	}

	_timerToggler = (is_run = this.state.is_running) => {
		this.setState({
			is_running: !is_run
		}, () => {
			let countdown
			if (this.state.is_running) {
				countdown = setInterval(() => {
					console.log('beep')
				}, 1000)
			} else {
				clearInterval(countdown)
			}
		})
		console.log('Timer Toggled', is_run, 'changed to:', this.state.is_running)
	}

	_timerSetter = (timer_setup_obj) => {
		this.setState({
			timer: Object.assign(this.state.timer, timer_setup_obj)
		})
	}

	// _createNewTask = (e) => {
	// 		this.setState({
	// 		})
	// }
	// _deleteSelectedTask = (e) => {
	// }

	_addTaskToList = (task_object) => {
		this.setState((prevState, props) => {
			console.log('Added Task to TaskList:', task_object)
			return {
				task_list: prevState.task_list.concat(task_object)
			}
		})
	}

	render() {
		return (
			<div className="App">
				<AppWrapper>
					<ClockWrapper stateObject={this.state} />
					<ControlWrapper
						stateObject={this.state}
						timerToggler={this._timerToggler}
						timerSetter={this._timerSetter}
						addTaskToList={this._addTaskToList}
					/>
					<TaskListWrapper stateObject={this.state} />
				</AppWrapper>
			</div>
		)
	}
}

export default App
