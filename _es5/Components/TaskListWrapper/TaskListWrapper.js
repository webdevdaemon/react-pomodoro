'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

require('./TaskListWrapper.css');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../TaskList/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TaskListWrapper = function TaskListWrapper(_ref) {
	var stateObject = _ref.stateObject;
	return _react2.default.createElement(
		'div',
		{ className: 'TaskListWrapper wrapper' },
		_react2.default.createElement(
			'div',
			{ className: 'task-list-title' },
			_react2.default.createElement(
				'p',
				null,
				'My Tasks'
			)
		),
		_react2.default.createElement(_index2.default, { task_list: stateObject.task_list })
	);
};

TaskListWrapper.propTypes = {
	stateObject: _propTypes2.default.object
};
TaskListWrapper.defaultProps = {};

exports.default = TaskListWrapper;
//# sourceMappingURL=/Users/cm/Desktop/git-main/freeCodeCampProjects/pomoJS/_es5/maps/Components/TaskListWrapper/TaskListWrapper.js.map