'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

require('./TaskList.css');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// import TaskListItem from '../TaskListItem/TaskListItem'

var TaskList = function TaskList(_ref) {
	var taskList = _ref.taskList,
	    props = _objectWithoutProperties(_ref, ['taskList']);

	return _react2.default.createElement(
		'div',
		{ className: 'TaskList' },
		_react2.default.createElement(
			'div',
			{ className: 'row no-gutters column-headers' },
			_react2.default.createElement(
				'div',
				{ className: 'col-4 column-header-name' },
				_react2.default.createElement(
					'p',
					null,
					'Task name'
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'col-3 column-header-notes' },
				_react2.default.createElement(
					'p',
					null,
					'Task Notes'
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'col-2 column-header-work' },
				_react2.default.createElement(
					'p',
					null,
					'Work'
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'col-1 column-header-rest' },
				_react2.default.createElement(
					'p',
					null,
					'Rest'
				)
			),
			_react2.default.createElement('div', { className: 'col-2 column-header-spacer' })
		),
		_react2.default.createElement(
			'ul',
			{ className: 'task-list-ul' },
			props.children
		)
	);
};

TaskList.propTypes = {
	children: _propTypes2.default.any
};

exports.default = TaskList;

//# sourceMappingURL=TaskList.js.map