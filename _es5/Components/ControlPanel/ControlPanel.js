'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./ControlPanel.css');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var INIT_CONTROL_PANEL_STATE = {
  name: '',
  notes: '',
  hours: 0,
  minutes: 0,
  rest_length: 5
};

var ControlPanel = function (_React$Component) {
  _inherits(ControlPanel, _React$Component);

  function ControlPanel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ControlPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ControlPanel.__proto__ || Object.getPrototypeOf(ControlPanel)).call.apply(_ref, [this].concat(args))), _this), _this.state = INIT_CONTROL_PANEL_STATE, _this._onChange = function (e) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e.target.value;
      var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e.target.name;

      var updater = _defineProperty({}, name, value);
      _this.setState(updater);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ControlPanel, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'ControlPanel' },
        _react2.default.createElement(
          'form',
          {
            className: 'create-task-form container-fluid',
            name: 'create-task',
            id: 'create-task-form-id',
            onSubmit: function onSubmit(e) {
              e.preventDefault();
              var _state = _this2.state,
                name = _state.name,
                notes = _state.notes,
                hours = _state.hours,
                minutes = _state.minutes,
                rest_length = _state.rest_length;
              _this2.props.addTaskToList(_this2.state); // SEND TO TASK LIST
              // this.props.timerSetter(this.state) // SEND DIRECT TO TIMER FOR TESTING
              _this2.setState({});
            }
          },
          _react2.default.createElement(
            'div',
            { className: 'task-info-input-group row no-gutters' },
            _react2.default.createElement(
              'div',
              { className: 'col-12 row task-row task-name no-gutters' },
              _react2.default.createElement(
                'div',
                { className: 'col-12' },
                _react2.default.createElement('input', { name: 'name', label: 'Task Name', type: 'text', placeholder: 'A nickname for your task...', value: this.state.name, onChange: this._onChange, id: 'task-name' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-12 row task-row task-notes no-gutters' },
              _react2.default.createElement(
                'div',
                { className: 'col-12' },
                _react2.default.createElement('textarea', { name: 'notes', label: 'Task Notes', type: 'text', rows: '3', placeholder: 'Any info, notes, ideas, or instructions...', value: this.state.notes, onChange: this._onChange, id: 'task-notes' })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'task-time-inputs row no-gutters task-row' },
            _react2.default.createElement(
              'div',
              { className: 'col-8 row work-control no-gutters' },
              _react2.default.createElement(
                'div',
                { className: 'col-12 row no-gutters input-section-title-wrap' },
                _react2.default.createElement(
                  'p',
                  { className: 'input-section work title hours col-6' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'task-hours', className: 'label label-task-hours' },
                    'Hours'
                  )
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'input-section work title minutes col-6' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'task-minutes', className: 'label label-task-minutes' },
                    'Minutes'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-12 row no-gutters' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-6' },
                  _react2.default.createElement('input', {
                    className: 'time-input',
                    name: 'hours',
                    type: 'number',
                    placeholder: '00',
                    value: this.state.hours < 10 ? '0' + this.state.hours : this.state.hours,
                    onChange: this._onChange, id: 'task-hours', min: '0', max: '10'
                  })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-6' },
                  _react2.default.createElement('input', { className: 'time-input', name: 'minutes', type: 'number', placeholder: '00',
                    value: this.state.minutes < 10 ? '0' + this.state.minutes : this.state.minutes,
                    onChange: this._onChange, id: 'task-minutes', min: '0', max: '59'
                  })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-4 rest-control row no-gutters' },
              _react2.default.createElement(
                'div',
                { className: 'col-12 rest-control no-gutters' },
                _react2.default.createElement(
                  'p',
                  { className: 'input-section rest title' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'rest-length', className: 'label label-task-minutes' },
                    'Break'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-12' },
                _react2.default.createElement('input', { className: 'rest-input', name: 'rest_length', type: 'number', placeholder: '',
                  value: this.state.rest_length < 10 ? '0' + this.state.rest_length : this.state.rest_length,
                  onChange: this._onChange, id: 'rest-length', min: '0', max: '60', step: '5'
                })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'input-group' },
            _react2.default.createElement('input', { type: 'submit', value: 'Submit Task', className: 'button-create-task btn btn-block', id: 'create-task' })
          )
        )
      );
    }
  }]);

  return ControlPanel;
}(_react2.default.Component);

ControlPanel.propTypes = {
  isRunning: _propTypes2.default.bool.isRequired,
  onBreak: _propTypes2.default.bool.isRequired,
  timerSetter: _propTypes2.default.func.isRequired,
  addTaskToList: _propTypes2.default.func.isRequired
};

ControlPanel.defaultProps = {};

exports.default = ControlPanel;
//# sourceMappingURL=/Users/cm/Desktop/git-main/freeCodeCampProjects/pomoJS/_es5/maps/Components/ControlPanel/ControlPanel.js.map
