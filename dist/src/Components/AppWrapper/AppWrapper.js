'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('./AppWrapper.css');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppWrapper = function AppWrapper(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return _react2.default.createElement(
    'div',
    { className: 'AppWrapper ' + className },
    children
  );
};
AppWrapper.propTypes = {
  children: _propTypes2.default.any.isRequired,
  className: _propTypes2.default.string.isRequired
};
AppWrapper.defaultProps = {};

exports.default = AppWrapper;

//# sourceMappingURL=AppWrapper.js.map