'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('./DigitalClockWrapper.css');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../DigitalClockDisplay/index');

var _index2 = _interopRequireDefault(_index);

var _DisplayTaskTitle = require('../DisplayTaskTitle/DisplayTaskTitle');

var _DisplayTaskTitle2 = _interopRequireDefault(_DisplayTaskTitle);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DigitalClockWrapper = function DigitalClockWrapper(_ref) {
  var stateObject = _ref.stateObject,
      timerToggler = _ref.timerToggler;
  return _react2.default.createElement(
    'div',
    { className: 'DigitalClockWrapper wrapper' },
    _react2.default.createElement(_index2.default, {
      timer: stateObject.timer,
      is_running: stateObject.is_running
    }),
    _react2.default.createElement('div', { className: 'row col-12 no-gutters timer-task-title-wrap' }),
    _react2.default.createElement(
      'div',
      { className: 'row col-12 no-gutters timer-toggle-wrap' },
      _react2.default.createElement(
        _Button2.default,
        {
          className: 'button-timer-toggle btn btn-success btn-block',
          toggledOn: stateObject.is_running,
          rest: stateObject.rest,
          done: stateObject.task_done,
          labelOff: 'START: ' + (stateObject.task_current.name || 'Get Things Done'),
          labelOn: 'PAUSE: ' + (stateObject.task_current.name || 'Get Things Done'),
          labelRest: stateObject.is_running ? 'PAUSE BREAK ' : 'START BREAK ',
          labelNext: stateObject.task_list[0] ? 'UP NEXT: ' + stateObject.task_list[0].name : 'NO MORE THINGS',
          size: 'large',
          background: 'green',
          backgroundHover: 'white',
          color: 'white',
          colorHover: 'black',
          handler: timerToggler
        },
        _react2.default.createElement(_DisplayTaskTitle2.default, { taskTitle: stateObject.task_current.name })
      )
    )
  );
};
DigitalClockWrapper.propTypes = {
  stateObject: _propTypes2.default.object.isRequired,
  timerToggler: _propTypes2.default.func.isRequired
};

exports.default = DigitalClockWrapper;

//# sourceMappingURL=DigitalClockWrapper.js.map