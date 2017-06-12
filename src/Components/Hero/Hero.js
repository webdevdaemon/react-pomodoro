import './Hero.css'

import React from 'react'
import PropTypes from 'prop-types'

const Hero = props => (
  <div className="Hero container-fluid">
    {props.children}
  </div>
)

Hero.propTypes = {
  children: PropTypes.node.isRequired
}

Hero.defaultProps = {}

export default Hero
