import './Button.css'

import PropTypes from 'prop-types'
import React from 'react'

class Button extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <button className='Button btn' id='timer-toggle' onClick={ this.props.handler } style={ (!this.props.toggledOn) ? {} : { backgroundColor: 'red' } }>
                {
                    (this.props.toggledOn) ? this.props.labelOn : this.props.labelOff
                }
            </button>
        )
    }
}

Button.propTypes = {
    background: PropTypes.string.isRequired,
    backgroundHover: PropTypes.string,
    color: PropTypes.string.isRequired,
    colorHover: PropTypes.string,
    handler: PropTypes.func.isRequired,
    labelOff: PropTypes.string.isRequired,
    labelOn: PropTypes.string.isRequired,
    size: PropTypes.string,
    style: PropTypes.object,
    toggledOn: PropTypes.bool.isRequired
}

Button.defaultProps = {
    isRunning: false,
    labelOff: 'Do It',
    labelOn: 'Undo It',
    size: 'small',
    background: 'blue',
    backgroundHover: 'white',
    color: 'white',
    colorHover: 'blue',
}

export default Button
