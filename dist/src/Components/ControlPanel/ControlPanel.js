'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./ControlPanel.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ControlPanel = function ControlPanel(props) {
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
					props.methods.addTaskToList(props.controlState);
					setTimeout(function () {
						props.methods.controlPanelInit();
					}, 100);
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
						_react2.default.createElement('input', {
							name: 'name',
							label: 'Task Name',
							type: 'text',
							placeholder: 'Enter a descriptive nickname for your task...',
							value: props.controlState.name,
							onChange: props.methods.onControlPanelChange,
							id: 'task-name'
						})
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'col-12 row task-row task-notes no-gutters' },
					_react2.default.createElement(
						'div',
						{ className: 'col-12' },
						_react2.default.createElement('textarea', {
							name: 'notes',
							label: 'Task Notes',
							type: 'text',
							rows: '3',
							placeholder: 'Add info, notes, ideas, instructions, etc...',
							value: props.controlState.notes,
							onChange: props.methods.onControlPanelChange,
							id: 'task-notes'
						})
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
								value: props.controlState.hours < 10 ? '0' + props.controlState.hours : props.controlState.hours,
								onChange: props.methods.onControlPanelChange,
								id: 'task-hours',
								min: '0',
								max: '10'
							})
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-6' },
							_react2.default.createElement('input', {
								className: 'time-input',
								name: 'minutes',
								type: 'number',
								placeholder: '00',
								value: props.controlState.minutes < 10 ? '0' + props.controlState.minutes : props.controlState.minutes,
								onChange: props.methods.onControlPanelChange,
								id: 'task-minutes',
								min: '0',
								max: '59'
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
						_react2.default.createElement('input', {
							className: 'rest-input',
							name: 'rest_length',
							type: 'number',
							placeholder: '',
							value: props.controlState.rest_length < 10 ? '0' + props.controlState.rest_length : props.controlState.rest_length,
							onChange: props.methods.onControlPanelChange,
							id: 'rest-length',
							min: '0',
							max: '60',
							step: '5'
						})
					)
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'input-group submit' },
				_react2.default.createElement('input', {
					type: 'submit',
					value: 'SUBMIT TASK',
					className: 'button-create-task btn btn-block',
					id: 'create-task'
				})
			)
		)
	);
};
ControlPanel.propTypes = {
	controlState: _propTypes2.default.object.isRequired,
	methods: _propTypes2.default.object.isRequired,
	isRunning: _propTypes2.default.bool.isRequired,
	onBreak: _propTypes2.default.bool.isRequired
};

ControlPanel.defaultProps = {};

exports.default = ControlPanel;

//# sourceMappingURL=ControlPanel.js.map