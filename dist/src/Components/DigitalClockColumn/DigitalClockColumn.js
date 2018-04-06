'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

require('./DigitalClockColumn.css');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DigitalClockColumn = function DigitalClockColumn(_ref) {
	var timeValue = _ref.timeValue,
	    sectionLabel = _ref.sectionLabel;
	return _react2.default.createElement(
		'div',
		{ className: 'DigitalClockColumn' },
		_react2.default.createElement(
			'p',
			{ className: 'clock-display-label ' + sectionLabel },
			sectionLabel
		),
		_react2.default.createElement(
			'p',
			{ className: 'clock-display ' + sectionLabel },
			timeValue < 10 ? '0' + timeValue : '' + timeValue
		)
	);
};

DigitalClockColumn.propTypes = {
	timeValue: _propTypes2.default.node,
	sectionLabel: _propTypes2.default.string
};
DigitalClockColumn.defaultProps = {
	timeValue: 0
};

exports.default = DigitalClockColumn;

//# sourceMappingURL=DigitalClockColumn.js.map