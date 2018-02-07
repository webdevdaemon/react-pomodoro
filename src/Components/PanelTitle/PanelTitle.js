import React from 'react'
import PropTypes from 'prop-types'

const PanelTitle = ({dashedClassPrefix, title}) => (
  <div className={`PanelTitle ${dashedClassPrefix}-title`}>
    <p className={`panel-title-text ${dashedClassPrefix}-title-text`}>
      {title}
    </p>
  </div>
)

PanelTitle.propTypes = {
  dashedClassPrefix: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

PanelTitle.defaultProps = {
  title: 'pomo.js',
  dashedClassTitle: 'pomo-js',
}

export default PanelTitle
