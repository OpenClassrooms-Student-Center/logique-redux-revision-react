import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import TodoTextInput from '../TodoTextInput'

export default class TodoItem extends Component {
	static propTypes = {
		todo: PropTypes.object.isRequired,
		onEditTodo: PropTypes.func.isRequired,
		onDeleteTodo: PropTypes.func.isRequired,
		onCompleteTodo: PropTypes.func.isRequired,
	}

	constructor (props) {
		super(props)
		this.state = {
			editing: false,
		}
	}

	handleDoubleClick = () => {
		this.setState({ editing: true })
	}

	handleSave = (id, text) => {
		if (text.length === 0) {
			this.props.onDeleteTodo(id)
		} else {
			this.props.onEditTodo(id, text)
		}
		this.setState({ editing: false })
	}

	render () {
		const { todo, onCompleteTodo, onDeleteTodo } = this.props
		let element

		if (this.state.editing) {
			element = (
				<TodoTextInput
					text={todo.text}
					editing={this.state.editing}
					onSave={(text) => this.handleSave(todo.id, text)}
				/>
			)
		} else {
			element = (
				<div className="view">
					<input
						className="toggle"
						type="checkbox"
						checked={todo.completed}
						onChange={() => onCompleteTodo(todo.id)}
					/>
					<label onDoubleClick={this.handleDoubleClick}>
						{todo.text}
					</label>
					<button
						type="button"
						className="destroy"
						onClick={() => onDeleteTodo(todo.id)}
					/>
				</div>
			)
		}

		return (
			<li className={classnames({
				completed: todo.completed,
				editing: this.state.editing,
			})}>
				{element}
			</li>
		)
	}
}
