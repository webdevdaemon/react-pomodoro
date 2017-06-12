'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('./AppTitle.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppTitle = function AppTitle() {
  return _react2.default.createElement(
    'div',
    { className: 'AppTitle' },
    _react2.default.createElement(
      'h2',
      null,
      'pomoJS'
    ),
    _react2.default.createElement(
      'p',
      null,
      'A Task-Based, GTD-inspired, Pomodoro Timer'
    ),
    _react2.default.createElement(
      'small',
      null,
      'Powered by ReactJS & Bootstrap 4'
    )
  );
};

exports.default = AppTitle;
//# sourceMappingURL=/Users/cm/Desktop/git-main/freeCodeCampProjects/pomoJS/_es5/maps/Components/AppTitle/AppTitle.js.map
