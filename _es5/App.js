'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./App.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./Components/AppTitle/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./Components/AppWrapper/index');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('./Components/ClockWrapper/index');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('./Components/ControlWrapper/index');

var _index8 = _interopRequireDefault(_index7);

var _index9 = require('./Components/TaskListWrapper/index');

var _index10 = _interopRequireDefault(_index9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var INITIAL_STATE = {
    timer: { hours: 0, minutes: 0, seconds: 5 },
    rest: false,
    rest_length: 1,
    is_running: false,
    task_list: [],
    task_current: null
};

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, App);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = INITIAL_STATE, _this._reInitializeAppState = function () {
            _this.setState(INITIAL_STATE);
        }, _this._timeKiller = function (_ref2) {
            var hours = _ref2.hours,
                minutes = _ref2.minutes,
                seconds = _ref2.seconds;

            var new_timer_obj = {};

            if (seconds > 0) {
                new_timer_obj = {
                    timer: {
                        hours: hours,
                        minutes: minutes,
                        seconds: seconds - 1
                    }
                };
            } else if (minutes > 0 && seconds === 0) {
                new_timer_obj = {
                    timer: {
                        hours: hours,
                        minutes: minutes - 1,
                        seconds: 59
                    }
                };
            } else if (hours > 0 && minutes === 0 && seconds === 0) {
                new_timer_obj = {
                    timer: {
                        hours: hours - 1,
                        minutes: 59,
                        seconds: 59
                    }
                };
            } else if (seconds === 0 && minutes === 0 && hours === 0) {
                new_timer_obj = !_this.state.rest ? {
                    is_running: true,
                    rest: true,
                    timer: { seconds: 0, minutes: _this.state.rest_length, hours: 0 }
                } : {
                    is_running: false,
                    rest: false,
                    timer: { seconds: 0, minutes: 0, hours: 0 }
                };
            } else {
                return;
            }
            return new_timer_obj;
        }, _this._ticker = function () {
            var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (start) {
                window.interval = setInterval(function () {
                    if (_this.state.is_running) {
                        var future = _this._timeKiller(_this.state.timer);
                        _this.setState(future, function () {
                            console.log('tick');
                        });
                    } else {
                        clearInterval(window.interval);
                    }
                }, 1000);
            } else {
                console.log('TIMER STOP');
                clearInterval(window.interval);
                _this.setState({
                    is_running: false
                });
            }
        }, _this._timerToggler = function () {
            _this.setState(function (prevState, props) {
                _this._ticker(!prevState.is_running);
                return {
                    is_running: !prevState.is_running
                };
            });
        }, _this._timerSetter = function (_ref3) {
            var hours = _ref3.hours,
                minutes = _ref3.minutes,
                rest_length = _ref3.rest_length;

            _this.setState({
                timer: { hours: hours, minutes: minutes, seconds: 0 },
                rest_length: rest_length
            });
        }, _this._addTaskToList = function (task_obj) {
            _this.setState(function (state) {
                console.log('Added Task to TaskList:', task_obj);
                return {
                    task_list: state.task_list.concat([task_obj])
                };
            });
        }, _this._getNextTaskFromList = function () {
            var task_list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.task_list;

            var current = task_list[0] ? task_list.slice(0, 1) : null;

            _this.setState({
                task_list: task_list.slice(1),
                task_current: current
            }, function () {
                _this._timerSetter(_this.state.task_list.length === 0 ? {
                    timer: { hours: 0, minutes: 0, seconds: 0 },
                    is_running: false,
                    task_list: [],
                    task_current: {}
                } : _this.state.task_current);
            });
        }, _this._setTimerFromRest = function () {
            _this.setState(function (state, props) {
                return {
                    timer: {
                        hours: 0,
                        minutes: state.rest_length,
                        seconds: 0
                    }
                };
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'App' },
                _react2.default.createElement(
                    _index4.default,
                    null,
                    _react2.default.createElement(_index2.default, null),
                    _react2.default.createElement(_index6.default, { stateObject: this.state, timerToggler: this._timerToggler }),
                    _react2.default.createElement(_index8.default, { stateObject: this.state, timerSetter: this._timerSetter, addTaskToList: this._addTaskToList, setTimerFromRest: this._setTimerFromRest }),
                    _react2.default.createElement(_index10.default, { stateObject: this.state })
                )
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=/Users/cm/Desktop/git-main/freeCodeCampProjects/pomoJS/_es5/maps/App.js.map