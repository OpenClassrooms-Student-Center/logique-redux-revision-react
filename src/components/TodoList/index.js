import React from 'react'
import PropTypes from 'prop-types'

import TodoItem from '../TodoItem'

const TodoList = (props) => (
	<ul className="todo-list">
		{
			props.filteredTodos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					onEditTodo={props.onEditTodo}
					onDeleteTodo={props.onDeleteTodo}
					onCompleteTodo={props.onCompleteTodo}
				/>
			))
		}
	</ul>
)

TodoList.propTypes = {
	filteredTodos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired,
	}).isRequired).isRequired,
	onEditTodo: PropTypes.func.isRequired,
	onDeleteTodo: PropTypes.func.isRequired,
	onCompleteTodo: PropTypes.func.isRequired,
}

export default TodoList
