'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('./DisplayTaskTitle.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DisplayTaskTitle = function DisplayTaskTitle(_ref) {
  var taskTitle = _ref.taskTitle;
  return _react2.default.createElement(
    'div',
    { className: 'DisplayTaskTitle' },
    _react2.default.createElement(
      'p',
      { className: 'task-title' },
      taskTitle
    )
  );
};

DisplayTaskTitle.propTypes = {
  taskTitle: _propTypes2.default.string.isRequired
};

DisplayTaskTitle.defaultProps = {};

exports.default = DisplayTaskTitle;

//# sourceMappingURL=DisplayTaskTitle.js.map