'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

require('./Seperator.css');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Seperator = function Seperator(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'Seperator seperator-wrapper' },
		_react2.default.createElement(
			'p',
			{ className: 'seperator' },
			'|'
		)
	);
};
Seperator.propTypes = {
	displayState: _propTypes2.default.bool
};
Seperator.defaultProps = {};

exports.default = Seperator;

//# sourceMappingURL=Seperator.js.map