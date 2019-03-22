import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TodoList from '../../components/TodoList'
import TodoFooter from '../../components/TodoFooter'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/TodoFilters'

export default class MainSection extends Component {
	static propTypes = {
		todos: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			completed: PropTypes.bool.isRequired,
			text: PropTypes.string.isRequired,
		}).isRequired).isRequired,
		todosCount: PropTypes.number.isRequired,
		completedCount: PropTypes.number.isRequired,
		onCompleteAllTodos: PropTypes.func.isRequired,
		onEditTodo: PropTypes.func.isRequired,
		onDeleteTodo: PropTypes.func.isRequired,
		onCompleteTodo: PropTypes.func.isRequired,
		onClearCompleted: PropTypes.func.isRequired,
	}

	constructor (props) {
		super(props)

		this.state = {
			currentFilter: SHOW_ALL,
		}
	}

	handleChangeFilter = (filter) => {
		this.setState({
			currentFilter: filter,
		})
	}

	filteredTodos () {
		switch (this.state.currentFilter) {
			case SHOW_ALL:
				return this.props.todos
			case SHOW_COMPLETED:
				return this.props.todos.filter((t) => t.completed)
			case SHOW_ACTIVE:
				return this.props.todos.filter((t) => !t.completed)
			default:
				throw new Error(`Unknown filter: ${this.state.currentFilter}`)
		}
	}

	render () {
		return (
			<section className="main">
				{
					!!this.props.todosCount
						&& <span>
							<input
								className="toggle-all"
								type="checkbox"
								checked={this.props.completedCount === this.props.todosCount}
								readOnly={true}
							/>
							<label onClick={this.props.onCompleteAllTodos} />
						</span>
				}
				<TodoList
					filteredTodos={this.filteredTodos()}
					onEditTodo={this.props.onEditTodo}
					onDeleteTodo={this.props.onDeleteTodo}
					onCompleteTodo={this.props.onCompleteTodo}
				/>
				{
				!!this.props.todosCount
					&& <TodoFooter
						completedCount={this.props.completedCount}
						activeCount={this.props.todosCount - this.props.completedCount}
						currentFilter={this.state.currentFilter}
						onChangeFilter={this.handleChangeFilter}
						onClearCompleted={this.props.onClearCompleted}
					/>
			}
			</section>
		)
	}
}
