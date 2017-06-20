import './App.css'

import React, {Component} from 'react'

import AppTitle from './Components/AppTitle/index'
import AppWrapper from './Components/AppWrapper/index'
import ClockWrapper from './Components/ClockWrapper/index'
import ControlWrapper from './Components/ControlWrapper/index'
import Hero from './Components/Hero/index'
import TaskListWrapper from './Components/TaskListWrapper/index'

const INITIAL_STATE = {
	timer: {
		hours: 0,
		minutes: 0,
		seconds: 5
	},
	rest: false,
	rest_length: 1,
	is_running: false,
	task_list: [
		// testing purposes only
		{
			hours: 0,
			minutes: 1,
			name: 'Test Task Item 1',
			notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo qui, repudiandae e' +
				'x sunt ducimus voluptate odio ipsum officia rerum dolor?',
			rest_length: 5,
			item_ID: 0
		},
		{
			hours: 1,
			minutes: 2,
			name: 'Test Task Item 2',
			notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo qui, repudiandae e' +
				'x sunt ducimus voluptate odio ipsum officia rerum dolor? Lorem ipsum dolor sit a' +
				'met consectetur adipisicing elit. Illo qui, repudiandae ex sunt ducimus voluptat' +
				'e odio ipsum officia rerum dolor?',
			rest_length: 15,
			item_ID: 1
		},
		{
			hours: 0,
			minutes: 30,
			name: 'Test Task Item 3',
			notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo qui, repudiandae e' +
				'x sunt ducimus voluptate odio ipsum officia rerum dolor? Lorem ipsum dolor sit a' +
				'met consectetur adipisicing elit. Illo qui, repudiandae ex sunt ducimus voluptat' +
				'e odio ipsum officia rerum dolor?',
			rest_length: 60,
			item_ID: 2
		}
	],
	task_current: null
}

class App extends Component {
	state = INITIAL_STATE

	_timeKiller = ({hours, minutes, seconds}) => {
		let new_timer_obj = {}
		if (seconds > 0) {
			new_timer_obj = {
				timer: {
					hours: hours,
					minutes: minutes,
					seconds: seconds - 1
				}
			}
		} else if (minutes > 0 && seconds === 0) {
			new_timer_obj = {
				timer: {
					hours: hours,
					minutes: minutes - 1,
					seconds: 59
				}
			}
		} else if (hours > 0 && (minutes === 0 && seconds === 0)) {
			new_timer_obj = {
				timer: {
					hours: hours - 1,
					minutes: 59,
					seconds: 59
				}
			}
		} else if (seconds === 0 && minutes === 0 && hours === 0) {
			new_timer_obj = !this.state.rest
				? {
						is_running: true,
						rest: true,
						timer: {
							seconds: 0,
							minutes: this.state.rest_length,
							hours: 0
						}
					}
				: {
						is_running: false,
						rest: false,
						timer: {
							seconds: 0,
							minutes: 0,
							hours: 0
						}
					}
		} else {
			return
		}
		return new_timer_obj
	}

	_ticker = start => {
		if (start) {
			window.interval = setInterval(() => {
				if (this.state.is_running) {
					let future = this._timeKiller(this.state.timer)
					this.setState(future)
				} else {
					clearInterval(window.interval)
				}
			}, 1000)
		} else {
			clearInterval(window.interval)
			this.setState({is_running: false})
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

	_timerSetter = ({hours, minutes, rest_length}) => {
		this.setState({
			timer: {
				hours: hours,
				minutes: minutes,
				seconds: 0
			},
			rest_length: rest_length
		})
	}

	_addTaskToList = task_obj => {
		this.setState((prevState, props) => {
			console.log('TASK ADDED')
			return {
				task_list: prevState.task_list.concat([task_obj])
			}
		})
	}

	_getNextTaskFromList = (task_list = this.state.task_list) => {
		let current = task_list[0] ? task_list.slice(0, 1) : null
		this.setState(
			{
				task_list: task_list.slice(1),
				task_current: current
			},
			() => {
				this._timerSetter(
					this.state.task_list.length === 0
						? {
								timer: {
									hours: 0,
									minutes: 0,
									seconds: 0
								},
								is_running: false,
								task_list: [],
								task_current: {}
							}
						: this.state.task_current
				)
			}
		)
	}

	_setTimerFromRest = () => {
		this.setState((prevState, props) => {
			return {
				timer: {
					hours: 0,
					minutes: prevState.rest_length,
					seconds: 0
				}
			}
		})
	}

	render() {
		return (
			<div className="App container-fluid">
				<AppTitle className="row no-gutters" stateObject={this.state} />
				<Hero className="row no-gutters">
					<ClockWrapper
						className="col-12"
						stateObject={this.state}
						timerToggler={this._timerToggler}
					/>
				</Hero>
				<AppWrapper className="row no-gutters d-xs-flex-column d-sm-flex-row">
					<ControlWrapper
						className="col-12"
						stateObject={this.state}
						timerSetter={this._timerSetter}
						addTaskToList={this._addTaskToList}
						setTimerFromRest={this._setTimerFromRest}
					/>
					<TaskListWrapper className="col-12" stateObject={this.state} />
				</AppWrapper>
			</div>
		)
	}
}

export default App
