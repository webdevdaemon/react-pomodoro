'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('./ControlWrapper.css');

var _index = require('../ControlPanel/index');

var _index2 = _interopRequireDefault(_index);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ControlWrapper = function ControlWrapper(_ref) {
    var timerSetter = _ref.timerSetter,
        addTaskToList = _ref.addTaskToList,
        stateObject = _ref.stateObject,
        setTimerFromRest = _ref.setTimerFromRest;
    return _react2.default.createElement(
        'div',
        { className: 'ControlWrapper wrapper' },
        _react2.default.createElement(
            'div',
            { className: 'control-panel-title' },
            _react2.default.createElement(
                'p',
                null,
                'Add New Task'
            )
        ),
        _react2.default.createElement(_index2.default, { isRunning: stateObject.is_running, onBreak: stateObject.rest, timerSetter: timerSetter, addTaskToList: addTaskToList, setTimerFromRest: setTimerFromRest })
    );
};

ControlWrapper.propTypes = {
    stateObject: _propTypes2.default.object,
    timerSetter: _propTypes2.default.func.isRequired,
    addTaskToList: _propTypes2.default.func.isRequired,
    setTimerFromRest: _propTypes2.default.func.isRequired
};

ControlWrapper.defaultProps = {};

exports.default = ControlWrapper;
//# sourceMappingURL=/Users/cm/Desktop/git-main/freeCodeCampProjects/pomoJS/_es5/maps/Components/ControlWrapper/ControlWrapper.js.map