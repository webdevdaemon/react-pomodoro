'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./App.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppWrapper = require('./Components/AppWrapper/AppWrapper');

var _AppWrapper2 = _interopRequireDefault(_AppWrapper);

var _index = require('./Components/ClockWrapper/index');

var _index2 = _interopRequireDefault(_index);

var _ControlWrapper = require('./Components/ControlWrapper/ControlWrapper');

var _ControlWrapper2 = _interopRequireDefault(_ControlWrapper);

var _TaskListWrapper = require('./Components/TaskListWrapper/TaskListWrapper');

var _TaskListWrapper2 = _interopRequireDefault(_TaskListWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
	_inherits(App, _Component);

	function App() {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

		_this._timeKiller = function () {
			var past = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.timer;

			if (past.seconds > 0) {
				return { timer: { seconds: past.seconds - 1 } };
			} else if (past.minutes > 0) {
				return { timer: { seconds: 59, minutes: past.minutes - 1 } };
			} else if (past.hours > 0) {
				return { timer: { seconds: 59, minutes: 59, hours: past.hours - 1 } };
			} else {
				return { is_running: false };
			}
		};

		_this._ticker = function () {
			var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

			if (start) {
				console.log('TIMER START');

				window.interval = setInterval(function () {

					var future = _this._timeKiller();
					_this.setState(future, function () {
						console.log('[[[ ', _this.state.hours, ' ||| ', _this.state.minutes, ' ||| ', _this.state.seconds, ' ]]]');
					});
				}, 1000);
			} else {
				console.log('TIMER STOP');
				clearInterval(window.interval);
			}
		};

		_this._timerToggler = function () {
			_this.setState(function (prevState, props) {
				_this._ticker(!prevState.is_running);
				return {
					is_running: !prevState.is_running
				};
			});
		};

		_this._timerSetter = function (timer_setup_obj) {
			_this.setState({
				timer: timer_setup_obj
			});
		};

		_this._addTaskToList = function (task_object) {
			_this.setState(function (prevState, props) {
				console.log('Added Task to TaskList:', task_object);
				return { task_list: prevState.task_list.concat(task_object) };
			});
		};

		_this._getNextTaskFromList = function () {
			var task_list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.task_list;

			_this.setState({
				task_list: task_list.slice(1),
				current_task: task_list.slice(0, 1)
			}, function () {
				if (!_this.state.current_task) {
					_this._timerSetter({
						timer: { hours: 0, minutes: 0, seconds: 0 },
						is_running: false,
						task_list: [],
						current_task: {}
					});
					return;
				}
				_this._timerSetter(_this.state.current_task);
			});
		};

		_this.state = {
			timer: {
				hours: 0,
				minutes: 2,
				seconds: 5
			},
			on_break: false,
			is_running: false,
			task_list: [],
			task_current: {}
		};
		return _this;
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'App' },
				_react2.default.createElement(
					_AppWrapper2.default,
					null,
					_react2.default.createElement(_index2.default, { stateObject: this.state }),
					_react2.default.createElement(_ControlWrapper2.default, { stateObject: this.state, timerToggler: this._timerToggler, timerSetter: this._timerSetter, addTaskToList: this._addTaskToList }),
					_react2.default.createElement(_TaskListWrapper2.default, { stateObject: this.state })
				)
			);
		}
	}]);

	return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=/Users/cm/Desktop/git-main/freeCodeCampProjects/pomoJS/_es5/maps/App.js.map