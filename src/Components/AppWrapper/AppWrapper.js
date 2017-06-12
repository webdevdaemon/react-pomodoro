import './AppWrapper.css'

import PropTypes from 'prop-types'
import React from 'react'

const AppWrapper = ({children, className}) => (
  <div className={`AppWrapper wrapper ${className}`}>
    { children }
  </div>
)
AppWrapper.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string.isRequired
}
AppWrapper.defaultProps = {}

export default AppWrapper
