'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('./Button.css');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  TASK_TIMER_ON: { backgroundColor: 'red' },
  TASK_TIMER_OFF: { backgroundColor: 'limegreen' },
  REST_TIMER_ON: { backgroundColor: 'darkslateblue' },
  REST_TIMER_OFF: { backgroundColor: 'cornflowerblue' }
};

var Button = function Button(props) {
  return _react2.default.createElement(
    'button',
    {
      style: props.rest ? props.toggledOn ? styles.REST_TIMER_ON : styles.REST_TIMER_OFF : props.toggledOn ? styles.TASK_TIMER_ON : styles.TASK_TIMER_OFF,
      className: (!props.toggledOn && 'timer-toggle-animated') + ' Button btn timer-toggle',
      onClick: props.handler
    },
    _react2.default.createElement(
      'p',
      null,
      props.done ? props.labelNext : props.rest ? props.labelRest : props.toggledOn ? props.labelOn : props.labelOff
    )
  );
};

Button.propTypes = {
  background: _propTypes2.default.string.isRequired,
  backgroundHover: _propTypes2.default.string,
  color: _propTypes2.default.string.isRequired,
  colorHover: _propTypes2.default.string,
  handler: _propTypes2.default.func.isRequired,
  labelOff: _propTypes2.default.string,
  labelOn: _propTypes2.default.string,
  labelRest: _propTypes2.default.string,
  size: _propTypes2.default.string,
  style: _propTypes2.default.object,
  toggledOn: _propTypes2.default.bool.isRequired,
  rest: _propTypes2.default.bool.isRequired
};

Button.defaultProps = {
  isRunning: false,
  labelOff: 'Do It',
  labelOn: 'Stop It',
  size: 'small',
  background: 'blue',
  backgroundHover: 'white',
  color: 'white',
  colorHover: 'blue'
};

exports.default = Button;

//# sourceMappingURL=Button.js.map