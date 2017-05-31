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
				seconds: 5,
			},
			on_break: false,
			break_length: 5,
			is_running: false,
			task_list: [],
			task_current: {},
		}
	}

	_timeKiller = (past = this.state.timer) => {
		if ( past.seconds > 0 ) 	{
			return {
				timer: {
					hours: past.hours,
					minutes: past.minutes,
					seconds: past.seconds-1,
				}
			}
		}
		else if ( past.minutes > 0 && past.seconds === 0 ) 	{
			return {
				timer: {
					hours: past.hours,
					minutes: past.minutes-1,
					seconds: 59,
				}
			}
		}
		else if ( past.hours > 0 && (past.minutes === 0 && past.seconds === 0) ) {
			return {
				timer: {
					hours: past.hours-1,
					minutes: 59,
					seconds: 59,
				}
			}
		}
		else if ( past.seconds === 0 && past.minutes === 0 && past.hours === 0 ) {
			return (!this.state.on_break) ? {
				is_running: true,
			}
		}
		else {
			return {
				timer: {
					hours: 0,
					minutes: 0,
					seconds: 0,
				}
			}
		}
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

	_timerSetter = (timer_setup_obj) => {
		this.setState({
			timer: timer_setup_obj
		})
	}

	_addTaskToList = (task_object) => {
		this.setState((prevState, props) => {
			console.log('Added Task to TaskList:', task_object)
			return { task_list: prevState.task_list.concat(task_object) }
		})
	}

	_getNextTaskFromList = (task_list = this.state.task_list) => {
		this.setState({
			task_list: task_list.slice(1),
			current_task: task_list.slice(0, 1),
		},	() => {
			if (!this.state.current_task) {
				this._timerSetter({
					timer: {hours: 0, minutes: 0, seconds: 0},
					is_running: false,
					task_list: [],
					current_task: {},
				})
				return
			}
			this._timerSetter(this.state.current_task)
		})
	}

	render() {
		return (
			<div className="App">
				<AppWrapper>
					<ClockWrapper stateObject={this.state} />
					<ControlWrapper stateObject={this.state} timerToggler={this._timerToggler} timerSetter={this._timerSetter} addTaskToList={this._addTaskToList} />
					<TaskListWrapper stateObject={this.state} />
				</AppWrapper>
			</div>
		)
	}
}

export default App
