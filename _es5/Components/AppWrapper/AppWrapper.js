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

var AppWrapper = function AppWrapper(props) {
    return _react2.default.createElement(
        'div',
        { className: 'AppWrapper wrapper' },
        props.children
    );
};
AppWrapper.propTypes = {
    children: _propTypes2.default.any
};
AppWrapper.defaultProps = {};

exports.default = AppWrapper;
//# sourceMappingURL=/Users/cm/Desktop/git-main/freeCodeCampProjects/pomoJS/_es5/maps/Components/AppWrapper/AppWrapper.js.map