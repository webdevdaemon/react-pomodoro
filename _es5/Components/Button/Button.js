'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./Button.css');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'button',
        { className: 'Button btn', id: 'timer-toggle', onClick: this.props.handler, style: !this.props.toggledOn ? {} : { backgroundColor: 'red' } },
        this.props.toggledOn ? this.props.labelOn : this.props.labelOff
      );
    }
  }]);

  return Button;
}(_react2.default.Component);

Button.propTypes = {
  background: _propTypes2.default.string.isRequired,
  backgroundHover: _propTypes2.default.string,
  color: _propTypes2.default.string.isRequired,
  colorHover: _propTypes2.default.string,
  handler: _propTypes2.default.func.isRequired,
  labelOff: _propTypes2.default.string.isRequired,
  labelOn: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.string,
  style: _propTypes2.default.object,
  toggledOn: _propTypes2.default.bool.isRequired
};

Button.defaultProps = {
  isRunning: false,
  labelOff: 'Do It',
  labelOn: 'Undo It',
  size: 'small',
  background: 'blue',
  backgroundHover: 'white',
  color: 'white',
  colorHover: 'blue'
};

exports.default = Button;
//# sourceMappingURL=/Users/cm/Desktop/git-main/freeCodeCampProjects/pomoJS/_es5/maps/Components/Button/Button.js.map
