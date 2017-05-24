import './DigitalClockColumn.css'

import PropTypes from 'prop-types'
import React from 'react'

const DigitalClockColumn = ({timeValue, sectionLabel}) => (
	<div className="DigitalClockColumn">
		<p className={`clock-display-label ${sectionLabel}`}>
			{
				sectionLabel
			}
		</p>
		<p className={`clock-display ${sectionLabel}`}>
			{
				( timeValue < 10  ) ?
				( `0${timeValue}` ) :
				( `${timeValue}`  )
			}
		</p>
	</div>
)

DigitalClockColumn.propTypes = {
	timeValue: PropTypes.number,
	sectionLabel: PropTypes.string,
}
DigitalClockColumn.defaultProps = {
	timeValue: 0,
}

export default DigitalClockColumn
