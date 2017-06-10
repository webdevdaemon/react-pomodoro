'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('./ClockWrapper.css');

var _index = require('../DigitalClockDisplay/index');

var _index2 = _interopRequireDefault(_index);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    stopped: { color: 'orangered' },
    chillin: { color: 'cornflowerblue' },
    werkin: { color: 'greenyellow' }
};

var ClockWrapper = function ClockWrapper(_ref) {
    var stateObject = _ref.stateObject,
        timerToggler = _ref.timerToggler;
    return _react2.default.createElement(
        'div',
        { className: 'ClockWrapper wrapper' },
        _react2.default.createElement(
            'div',
            { className: 'work-rest-alert' },
            _react2.default.createElement(
                'p',
                { style: !stateObject.is_running ? styles.stopped : stateObject.rest ? styles.chillin : styles.werkin },
                !stateObject.is_running ? 'STOPPED' : stateObject.rest ? "CHILLIN'" : "WERKIN'"
            )
        ),
        _react2.default.createElement(_index2.default, { timer: stateObject.timer, is_running: stateObject.is_running, seperatorFlash: stateObject.seperator_flash }),
        _react2.default.createElement(
            'div',
            { className: 'timer-toggle container-fluid' },
            _react2.default.createElement(
                'div',
                { className: 'row col-12 no-gutters timer-toggle-wrap' },
                _react2.default.createElement(_Button2.default, { className: 'button-timer-toggle btn btn-success btn-block', toggledOn: stateObject.is_running, labelOff: 'START', labelOn: 'STOP', size: 'large', background: 'green', backgroundHover: 'white', color: 'white', colorHover: 'black', handler: timerToggler })
            )
        )
    );
};

ClockWrapper.propTypes = {
    stateObject: _propTypes2.default.object.isRequired,
    timerToggler: _propTypes2.default.func.isRequired
};
ClockWrapper.default = {};

exports.default = ClockWrapper;
//# sourceMappingURL=/Users/cm/Desktop/git-main/freeCodeCampProjects/pomoJS/_es5/maps/Components/ClockWrapper/ClockWrapper.js.map