'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('./Hero.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hero = function Hero(props) {
  return _react2.default.createElement(
    'div',
    { className: 'Hero container-fluid' },
    props.children
  );
};

Hero.propTypes = {
  children: _propTypes2.default.node.isRequired
};

Hero.defaultProps = {};

exports.default = Hero;

//# sourceMappingURL=Hero.js.map