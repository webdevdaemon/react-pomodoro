/* eslint-disable no-undef */
import "./App.css"

import React, { Component } from "react"

import AppTitle from "./Components/AppTitle/index"
import AppWrapper from "./Components/AppWrapper/index"
import DigitalClockWrapper from "./Components/DigitalClockWrapper/index"
import ControlWrapper from "./Components/ControlWrapper/index"
import Hero from "./Components/Hero/index"
import TaskListWrapper from "./Components/TaskListWrapper/index"

import tasks from './helpers/tasks'

// STATE INITIALIZER OBJECTS

const control_panel_init = {
    TASK: {
      name: "",
      notes: "",
      hours: 0,
      minutes: 0,
      rest_length: 5,
      notes_open: false,
      position: null
    }
  },
  app_state_init = {
    timer: {
      hours: 0,
      minutes: 0,
      seconds: 5
    },
    rest: false,
    rest_length: 1,
    is_running: false,
    task_done: false,
    task_list: tasks, 
  },
  source_of_truth = Object.assign(
    {current_task_name: app_state_init.task_list.name},
    control_panel_init,
    app_state_init
  )

// MAIN APP COMPONENT

class App extends Component {
  state = source_of_truth

  _onControlPanelChange = (e, value = e.target.value, name = e.target.name) => {
    let updater = {
      TASK: Object.assign({}, this.state.TASK, { [name]: value })
    }
    this.setState(updater, () => console.log("RE-RENDERED: FORM INPUT"))
  }

  _controlPanelInit = () => {
    this.setState(Object.assign({}, this.state, control_panel_init))
  }

  _timeKiller = ({ hours, minutes, seconds }) => {
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
            task_done: true,
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
          if (this.state.task_done) {
            console.log("top")
            this._getNextTaskFromList()
          }
        }
      }, 1000)
    } else {
      clearInterval(window.interval)
      this.setState({
        is_running: false
      }, () => {
        if (this.state.task_done) {
          console.log("bottom")
            this._getNextTaskFromList()
          }
        }
      )
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

  _timerSetter = ({ hours, minutes, rest_length }) => {
    this.setState({
      timer: {
        hours: hours,
        minutes: minutes,
        seconds: 0
      },
      rest_length: rest_length,
      task_done: false
    })
  }

  _addTaskToList = task_item => {
    let t_l = this.state.task_list,
      new_list = [...t_l, task_item]
    new_list = new_list.map((item, dex) =>
      Object.assign({}, item, { position: dex })
    )
    this.setState(
      {
        task_list: new_list
      },
      () => {
        console.log(t_l)
        console.log(new_list)
      }
    )
  }

  _getNextTaskFromList = (task_list = this.state.task_list.slice()) => {
    let current = task_list[0] || null
    this.setState(
      {
        task_list: task_list.slice(1),
        current_task_name: current
      },
      () => {
        console.log(
          `old_task_list:   ${task_list}\nnew.task_list:   ${this.state
            .task_list}\ncurrent:   ${current}`
        )
        this._timerSetter(
          this.state.task_list.length === 0
            ? app_state_init
            : this.state.current_task_name
        )
      }
    )
  }

  _setTimerFromRest = () => {
    this.setState((prevState, props) => ({
      timer: {
        hours: 0,
        minutes: prevState.rest_length,
        seconds: 0
      }
    }))
  }

  _promoteTask = alpha_task => {
    let new_list = this.state.task_list.reduce((acc, item) => {
      return item.position !== alpha_task.position
        ? acc.concat(item)
        : [item].concat(acc)
    }, [])
    this.setState({
      task_list: new_list
    }, () => { console.log("TASK PROMOTED") }
    )
  }

  _deleteTask = omega_task => {
    let new_list = this.state.task_list.filter(
      item => item.position !== omega_task.position
    )
    this.setState(
      { task_list: new_list },
      () => {
        console.log("TASK DELETED")
      }
    )
  }

  _notesToggler = (e, target_pos) => {
    let task_list = this.state.task_list.map(
      item =>
        item.position === target_pos
          ? Object.assign({}, item, {
              notes_open: !item.notes_open
            })
          : item
    )
    this.setState(
      {
        task_list
      },
      () => {
        console.log("NOTES TOGGLED!!!")
      }
    )
  }

  render() {
    // Bundle ALL METHODS to easily pass to CHILDREN as a single PROP
    const methods = {
      onControlPanelChange: this._onControlPanelChange,
      controlPanelInit: this._controlPanelInit,
      timeKiller: this._timeKiller,
      ticker: this._ticker,
      timerToggler: this._timerToggler,
      timerSetter: this._timerSetter,
      addTaskToList: this._addTaskToList,
      getNextTaskFromList: this._getNextTaskFromList,
      setTimerFromRest: this._setTimerFromRest,
      promoteTask: this._promoteTask,
      deleteTask: this._deleteTask,
      notesToggler: this._notesToggler
    }

    return (
      <div className="App container-fluid">
        <AppTitle className="row no-gutters" stateObject={this.state} />

        <Hero className="row no-gutters">
          <DigitalClockWrapper
            methods={methods}
            stateObject={this.state}
            timerToggler={this._timerToggler}
          />
        </Hero>

        <AppWrapper className="row no-gutters d-xs-flex-column d-sm-flex-row">
          <ControlWrapper
            methods={methods}
            controlState={this.state.TASK}
            taskList={this.state.task_list}
            stateObject={this.state}
          />

          <TaskListWrapper
            methods={methods}
            className="col-12"
            stateObject={this.state}
            taskList={this.state.task_list}
          />
        </AppWrapper>
      </div>
    )
  }
}

export default App
