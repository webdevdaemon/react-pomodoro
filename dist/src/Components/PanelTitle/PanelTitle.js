'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PanelTitle = function PanelTitle(_ref) {
  var dashedClassPrefix = _ref.dashedClassPrefix,
      title = _ref.title;
  return _react2.default.createElement(
    'div',
    { className: 'PanelTitle ' + dashedClassPrefix + '-title' },
    _react2.default.createElement(
      'p',
      { className: 'panel-title-text ' + dashedClassPrefix + '-title-text' },
      title
    )
  );
};

PanelTitle.propTypes = {
  dashedClassPrefix: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string.isRequired
};

PanelTitle.defaultProps = {
  title: 'pomo.js',
  dashedClassTitle: 'pomo-js'
};

exports.default = PanelTitle;

//# sourceMappingURL=PanelTitle.js.map