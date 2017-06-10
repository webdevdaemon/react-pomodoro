'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('./TaskListItem.css');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TaskListItem = function TaskListItem(_ref) {
    var taskItem = _ref.taskItem;
    return _react2.default.createElement(
        'li',
        { className: 'TaskListItem' },
        _react2.default.createElement(
            'div',
            { className: 'item-text' },
            _react2.default.createElement(
                'div',
                { className: 'item-name' },
                _react2.default.createElement(
                    'p',
                    null,
                    taskItem.name
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'item-notes' },
                _react2.default.createElement(
                    'p',
                    null,
                    taskItem.notes
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'item-time' },
            _react2.default.createElement(
                'div',
                { className: 'item-hours' },
                _react2.default.createElement(
                    'p',
                    null,
                    taskItem.hours
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'item-minutes' },
                _react2.default.createElement(
                    'p',
                    null,
                    taskItem.minutes
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'item-break' },
            _react2.default.createElement(
                'p',
                { className: 'label label-break' },
                'Break'
            ),
            _react2.default.createElement(
                'p',
                { className: 'break break-value' },
                taskItem.break
            )
        )
    );
};
TaskListItem.propTypes = {
    taskItem: _propTypes2.default.object.isRequired
};
TaskListItem.defaultProps = {};

exports.default = TaskListItem;
//# sourceMappingURL=/Users/cm/Desktop/git-main/freeCodeCampProjects/pomoJS/_es5/maps/Components/TaskListItem/TaskListItem.js.map