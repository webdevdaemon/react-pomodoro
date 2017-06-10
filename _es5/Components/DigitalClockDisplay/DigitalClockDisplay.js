'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./DigitalClockDisplay.css');

var _index = require('../DigitalClockColumn/index');

var _index2 = _interopRequireDefault(_index);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index3 = require('../Seperator/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DigitalClockDisplay = function (_React$Component) {
    _inherits(DigitalClockDisplay, _React$Component);

    function DigitalClockDisplay() {
        _classCallCheck(this, DigitalClockDisplay);

        var _this = _possibleConstructorReturn(this, (DigitalClockDisplay.__proto__ || Object.getPrototypeOf(DigitalClockDisplay)).call(this));

        _this.state = {
            seconds_remaining: 0,
            minutes_remaining: 0,
            hours_remaining: 0
        };
        return _this;
    }

    _createClass(DigitalClockDisplay, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'DigitalClockDisplay' },
                _react2.default.createElement(_index2.default, { sectionLabel: 'hours', timeValue: this.props.timer.hours }),
                _react2.default.createElement(_index4.default, null),
                _react2.default.createElement(_index2.default, { sectionLabel: 'minutes', timeValue: this.props.timer.minutes }),
                _react2.default.createElement(_index4.default, null),
                _react2.default.createElement(_index2.default, { sectionLabel: 'seconds', timeValue: this.props.timer.seconds })
            );
        }
    }]);

    return DigitalClockDisplay;
}(_react2.default.Component);

DigitalClockDisplay.propTypes = {
    timer: _propTypes2.default.object,
    is_running: _propTypes2.default.bool
};
DigitalClockDisplay.defaultProps = {
    timer: { hours: 1, minutes: 25, seconds: 0 },
    is_running: false
};

exports.default = DigitalClockDisplay;
//# sourceMappingURL=/Users/cm/Desktop/git-main/freeCodeCampProjects/pomoJS/_es5/maps/Components/DigitalClockDisplay/DigitalClockDisplay.js.map