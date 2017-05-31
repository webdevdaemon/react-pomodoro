'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

require('./ControlWrapper.css');

var _index = require('../ControlPanel/index');

var _index2 = _interopRequireDefault(_index);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ControlWrapper = function ControlWrapper(_ref) {
	var timerSetter = _ref.timerSetter,
	    timerToggler = _ref.timerToggler,
	    addTaskToList = _ref.addTaskToList,
	    stateObject = _ref.stateObject;
	return _react2.default.createElement(
		'div',
		{ className: 'ControlWrapper' },
		_react2.default.createElement(_index2.default, {
			isRunning: stateObject.is_running,
			onBreak: stateObject.on_break,
			timerToggler: timerToggler,
			timerSetter: timerSetter,
			addTaskToList: addTaskToList
		})
	);
};
ControlWrapper.propTypes = {
	stateObject: _propTypes2.default.object,
	timerToggler: _propTypes2.default.func.isRequired,
	timerSetter: _propTypes2.default.func.isRequired,
	addTaskToList: _propTypes2.default.func.isRequired
};
ControlWrapper.defaultProps = {};

exports.default = ControlWrapper;
//# sourceMappingURL=/Users/cm/Desktop/git-main/freeCodeCampProjects/pomoJS/_es5/maps/Components/ControlWrapper/ControlWrapper.js.map