'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('./ControlWrapper.css');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ControlPanel = require('../ControlPanel/ControlPanel');

var _ControlPanel2 = _interopRequireDefault(_ControlPanel);

var _PanelTitle = require('../PanelTitle/PanelTitle');

var _PanelTitle2 = _interopRequireDefault(_PanelTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ControlWrapper = function ControlWrapper(_ref) {
  var methods = _ref.methods,
      controlState = _ref.controlState,
      stateObject = _ref.stateObject;
  return _react2.default.createElement(
    'div',
    { className: 'ControlWrapper wrapper col-12' },
    _react2.default.createElement(_PanelTitle2.default, { title: 'Create Task', dashedClassPrefix: 'control-wrapper' }),
    _react2.default.createElement(_ControlPanel2.default, {
      methods: methods,
      controlState: controlState,
      isRunning: stateObject.is_running,
      onBreak: stateObject.rest
    })
  );
};
ControlWrapper.propTypes = {
  controlState: _propTypes2.default.object.isRequired,
  methods: _propTypes2.default.object.isRequired,
  stateObject: _propTypes2.default.object.isRequired
};

ControlWrapper.defaultProps = {};

exports.default = ControlWrapper;

//# sourceMappingURL=ControlWrapper.js.map