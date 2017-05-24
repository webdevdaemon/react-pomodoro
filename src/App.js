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

	_timerToggler = () => {
		this.setState((prevState, props) => {
			console.log('Timer Toggled', prevState.is_running, 'changed to:', this.state.is_running)
			return {
				is_running: (prevState.is_running) ? false : true
			}
		})
	}

	_createNewTask = (e) => {

		this.setState({

		})
	}

	_deleteSelectedTask = (e) => {

	}

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
						addTaskToList={this.state._addTaskToList}
					/>
					<TaskListWrapper stateObject={this.state} />
				</AppWrapper>
			</div>
		)
	}
}

export default App
