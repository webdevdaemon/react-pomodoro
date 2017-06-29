import './Button.css'

import PropTypes from 'prop-types'
import React from 'react'

const styles = {
  TASK_TIMER_ON:  {backgroundColor: 'red'},
  TASK_TIMER_OFF: {backgroundColor: 'limegreen'},
  REST_TIMER_ON:  {backgroundColor: 'darkslateblue'},
  REST_TIMER_OFF: {backgroundColor: 'cornflowerblue'}
}

const Button = props => (
	<button
    style={
      props.rest
        ? (props.toggledOn ? styles.REST_TIMER_ON : styles.REST_TIMER_OFF)
        : (props.toggledOn ? styles.TASK_TIMER_ON : styles.TASK_TIMER_OFF)
    }
    className={`${!props.toggledOn && `timer-toggle-animated`} Button btn timer-toggle`}
		onClick={props.handler}
	><p>
    {
      props.done
        ? props.labelNext
        : (
          props.rest
            ? props.labelRest
            : (props.toggledOn ? props.labelOn : props.labelOff)
        )
      }
    </p>
  </button>
)

Button.propTypes = {
	background: PropTypes.string.isRequired,
	backgroundHover: PropTypes.string,
	color: PropTypes.string.isRequired,
	colorHover: PropTypes.string,
	handler: PropTypes.func.isRequired,
	labelOff: PropTypes.string,
  labelOn: PropTypes.string,
  labelRest: PropTypes.string,
	size: PropTypes.string,
	style: PropTypes.object,
  toggledOn: PropTypes.bool.isRequired,
  rest: PropTypes.bool.isRequired,
}

Button.defaultProps = {
	isRunning: false,
	labelOff: 'Do It',
	labelOn: 'Stop It',
	size: 'small',
	background: 'blue',
	backgroundHover: 'white',
	color: 'white',
	colorHover: 'blue'
}

export default Button
