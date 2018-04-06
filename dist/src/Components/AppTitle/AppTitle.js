'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('./AppTitle.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  stop: { color: 'orangered' },
  chill: { color: 'cornflowerblue' },
  work: { color: 'greenyellow' }
};

var AppTitle = function AppTitle(_ref) {
  var stateObject = _ref.stateObject;
  return _react2.default.createElement(
    'div',
    { className: 'AppTitle' },
    _react2.default.createElement(
      'div',
      { className: 'app-title-main' },
      _react2.default.createElement(
        'h2',
        null,
        'PoMotiv8r'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'work-rest-alert' },
      _react2.default.createElement(
        'p',
        {
          className: 'work-rest-alert-p',
          style: !stateObject.is_running ? styles.stop : stateObject.rest ? styles.chill : styles.work
        },
        !stateObject.is_running ? 'STOPPED' : stateObject.rest ? 'CHILLIN\'' : 'WERKIN\''
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'app-title-sub' },
      _react2.default.createElement(
        'p',
        null,
        'A Task-Based, Pomodoro App'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'small',
          null,
          'Powered by ReactJS & Bootstrap 4'
        )
      )
    )
  );
};

exports.default = AppTitle;

//# sourceMappingURL=AppTitle.js.map