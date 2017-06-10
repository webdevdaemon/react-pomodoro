import './AppWrapper.css'

import PropTypes from 'prop-types'
import React from 'react'

const AppWrapper = (props) => (
    <div className="AppWrapper wrapper">
        { props.children }
    </div>
)
AppWrapper.propTypes = {
    children: PropTypes.any,
}
AppWrapper.defaultProps = {}

export default AppWrapper
