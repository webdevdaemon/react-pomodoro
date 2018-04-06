'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('./TaskListItem.css');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _close = require('../../fa/close');

var _close2 = _interopRequireDefault(_close);

var _angleDoubleUp = require('../../fa/angle-double-up');

var _angleDoubleUp2 = _interopRequireDefault(_angleDoubleUp);

var _reactHtmlParser = require('react-html-parser');

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  OPEN: { height: '100%', maxHeight: '140px', overflow: 'scroll' },
  CLOSED: { height: '0', maxHeight: '0', overflow: 'hidden', padding: '0', border: 'none' },
  BUTTON_DOWN: { background: '#a5acaf', border: 'inset 5px #666 ', color: 'black' }
};

var TaskListItem = function TaskListItem(props) {
  return _react2.default.createElement(
    'li',
    { className: 'TaskListItem container-fluid' },
    _react2.default.createElement(
      'div',
      { className: 'task-list-item-top-row row no-gutters' },
      _react2.default.createElement(
        'div',
        { className: 'item-text col-4' },
        _react2.default.createElement(
          'div',
          { className: 'item-name' },
          _react2.default.createElement(
            'p',
            null,
            props.taskItem.name
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'item-notes-toggle-wrapper col-3' },
        _react2.default.createElement(
          'button',
          {
            className: 'item-notes-toggle btn btn-danger btn-block',
            style: props.notesOpen ? styles.BUTTON_DOWN : null,
            onClick: function onClick(e) {
              props.notesToggler(e, props.position);
            }
          },
          props.notesOpen ? 'Hide Notes' : 'View Notes'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'item-time col-2' },
        _react2.default.createElement(
          'div',
          { className: 'item-hours' },
          _react2.default.createElement(
            'p',
            null,
            props.taskItem.hours + ' h'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'item-minutes' },
          _react2.default.createElement(
            'p',
            null,
            props.taskItem.minutes + ' m'
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'item-break col-1' },
        _react2.default.createElement(
          'p',
          { className: '' },
          props.taskItem.rest_length + ' m'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'item-promote col-1' },
        _react2.default.createElement(
          'button',
          { className: 'promote', onClick: function onClick() {
              props.promoteTask(props.taskItem);
            } },
          _react2.default.createElement(_angleDoubleUp2.default, null)
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'item-delete col-1' },
        _react2.default.createElement(
          'button',
          { className: 'delete', onClick: function onClick() {
              props.deleteTask(props.taskItem);
            } },
          _react2.default.createElement(_close2.default, null)
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'task-list-item-bottom-row row no-gutters' },
      _react2.default.createElement(
        'div',
        {
          className: 'item-notes',
          style: props.notesOpen ? styles.OPEN : styles.CLOSED
        },
        _react2.default.createElement(
          'p',
          null,
          (0, _reactHtmlParser2.default)(props.taskItem.notes.replace(/\n/gi, '<br />'))
        )
      )
    )
  );
};

TaskListItem.propTypes = {
  taskItem: _propTypes2.default.object.isRequired,
  position: _propTypes2.default.number.isRequired,
  promoteTask: _propTypes2.default.func.isRequired,
  deleteTask: _propTypes2.default.func.isRequired,
  notesToggler: _propTypes2.default.func.isRequired,
  notesOpen: _propTypes2.default.bool.isRequired
};

TaskListItem.defaultProps = {};

exports.default = TaskListItem;

//# sourceMappingURL=TaskListItem.js.map