import './App.css'

import React, { Component } from 'react'

import AppWrapper from './Components/AppWrapper/index'
import ClockWrapper from './Components/ClockWrapper/index'
import ControlWrapper from './Components/ControlWrapper/index'
import TaskListWrapper from './Components/TaskListWrapper/index'

class App extends Component {
	constructor() {
		super()
		this.state = {
			timer: {
				hours: 0,
				minutes: 2,
				seconds: 5
			},
			on_break: false,
			break_length: 5,
			is_running: false,
			task_list: [],
			task_current: null
		}
	}

	_timeKiller = ({hours, minutes, seconds}) => {
		let new_timer_obj = {}

		if (seconds > 0) {
			new_timer_obj = {
				timer: {
					hours: hours,
					minutes: minutes,
					seconds: seconds - 1,
				}
			}
		} else if (minutes > 0 && seconds === 0) {
			new_timer_obj = {
				timer: {
					hours: hours,
					minutes: minutes - 1,
					seconds: 59,
				}
			}
		} else if (hours > 0 && (minutes === 0 && seconds === 0)) {
			new_timer_obj = {
				timer: {
					hours: hours - 1,
					minutes: 59,
					seconds: 59,
				}
			}
		} else if (seconds === 0 && minutes === 0 && hours === 0) {
			new_timer_obj = (!this.state.on_break) ?
				{
					is_running: true,
					on_break: true,
					timer: {
						seconds: 0,
						minutes: this.state.timer.minutes,
						hours: 0
					}
				} : {
					is_running: false,
					on_break: false,
					timer: {
						seconds: 0,
						minutes: 0,
						hours: 0
					}
				}
		} else { new_timer_obj = { is_running: false, on_break: false, timer: { hours: 0, minutes: 0, seconds: 0 } }
			return
		}
		return new_timer_obj
	}

	_ticker = (start = false) => {
		if (start) {
			console.log('TIMER START')
			window.interval = setInterval(() => {
				let future = this._timeKiller(this.state.timer)
				this.setState(future, () => {
					console.log('[[[ ', this.state.timer.hours, ' ||| ', this.state.timer.minutes, ' ||| ', this.state.timer.seconds, ' ]]]')
				})
			}, 1000)
		} else {
			console.log('TIMER STOP')
			clearInterval(window.interval)
		}
	}

	_timerToggler = () => {
		this.setState((prevState, props) => {
			this._ticker(!prevState.is_running)
			return {
				is_running: !prevState.is_running
			}
		})
	}

	_timerSetter = (timer_obj) => {
		this.setState({
			timer: timer_obj
		})
	}

	_addTaskToList = (task_obj) => {
		this.setState((prevState, props) => {
			console.log('Added Task to TaskList:', task_obj)
			return {
				task_list: prevState.task_list.concat(task_obj)
			}
		})
	}

	_getNextTaskFromList = (task_list = this.state.task_list) => {
		this.setState({
			task_list: task_list.slice(1),
			task_current: task_list.slice(0, 1)
		}, () => {
			if (this.state.task_list === []) {
				this._timerSetter({
					timer: {
						hours: 0,
						minutes: 0,
						seconds: 0
					},
					is_running: false,
					task_list: [],
					task_current: {}
				})
				return
			}
			this._timerSetter(this.state.task_current)
		})
	}

	render() {
		return (
			<div className="App">
		<AppWrapper>
			<ClockWrapper stateObject={ this.state } />
			<ControlWrapper stateObject={ this.state }
				timerToggler={ this._timerToggler }
				timerSetter={ this._timerSetter }
				addTaskToList={ this._addTaskToList }
			/>
			<TaskListWrapper stateObject={ this.state } />
		</AppWrapper>
	</div>
		)
	}
}

export default App
