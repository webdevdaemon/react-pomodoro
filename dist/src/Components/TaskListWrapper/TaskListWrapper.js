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

var _TaskListItem = require('../TaskListItem/TaskListItem');

var _TaskListItem2 = _interopRequireDefault(_TaskListItem);

var _PanelTitle = require('../PanelTitle/PanelTitle');

var _PanelTitle2 = _interopRequireDefault(_PanelTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TaskListWrapper = function TaskListWrapper(props) {
  return _react2.default.createElement(
    'div',
    { className: 'TaskListWrapper wrapper ' + props.className },
    _react2.default.createElement(_PanelTitle2.default, { dashedClassPrefix: 'task-list', title: 'My Tasks' }),
    _react2.default.createElement(
      _index2.default,
      { taskList: props.taskList },
      props.taskList.length > 0 ? props.taskList.map(function (item, dex) {
        return _react2.default.createElement(_TaskListItem2.default, {
          position: dex,
          key: 'T' + dex,
          taskItem: item,
          promoteTask: props.methods.promoteTask,
          deleteTask: props.methods.deleteTask,
          notesToggler: props.methods.notesToggler,
          notesOpen: item.notes_open
        });
      }) : _react2.default.createElement(
        'p',
        { className: 'no-tasks-msg' },
        'No Tasks in Queue...'
      )
    )
  );
};

TaskListWrapper.propTypes = {
  className: _propTypes2.default.string.isRequired,
  methods: _propTypes2.default.object.isRequired,
  taskList: _propTypes2.default.array
};

TaskListWrapper.defaultProps = {};

exports.default = TaskListWrapper;

//# sourceMappingURL=TaskListWrapper.js.map