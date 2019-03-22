import React, { Component } from 'react'

import Header from '../Header'
import MainSection from '../MainSection'

export default class App extends Component {
	constructor (props) {
		super(props)

		this.state = {
			todos: [
				{
					text: 'Apprendre Redux',
					completed: false,
					id: 0,
				},
				{
					text: 'Intégrer l\'API dans le projet Redux',
					completed: false,
					id: 1,
				},
			],
			todosCount: 0,
			completedCount: 0,
		}
	}

	componentDidMount () {
		this.updateState()
	}

	updateState () {
		this.setState((prevState) => {
			return {
				todosCount: prevState.todos.length,
				completedCount: prevState.todos.reduce(
					(count, todo) =>
						(todo.completed ? count + 1 : count),
					0,
				),
			}
		})
	}

	handleAddTodo = (todoText) => {
		this.setState((prevState) => {
			return {
				todos: [
					...prevState.todos,
					{
						id: prevState.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
						completed: false,
						text: todoText,
					},
				],
			}
		})

		this.updateState()
	}

	handleDeleteTodo = (todoId) => {
		this.setState((prevState) => {
			return {
				todos: prevState.todos.filter((todo) => todo.id !== todoId),
			}
		})

		this.updateState()
	}

	handleEditTodo = (todoId, todoText) => {
		this.setState((prevState) => {
			return {
				todos: prevState.todos.map((todo) => {
					return todo.id === todoId ? {
						...todo,
						text: todoText,
					} : todo
				}),
			}
		})

		this.updateState()
	}

	handleCompleteTodo = (todoId) => {
		this.setState((prevState) => {
			return {
				todos: prevState.todos.map((todo) => {
					return todo.id === todoId ? {
						...todo,
						completed: !todo.completed,
					} : todo
				}),
			}
		})

		this.updateState()
	}

	handleCompleteAllTodos = () => {
		const areAllMarked = this.state.todos.every((todo) => todo.completed)

		this.setState((prevState) => {
			return {
				todos: prevState.todos.map((todo) => ({
					...todo,
					completed: !areAllMarked,
				})),
			}
		})

		this.updateState()
	}

	handleClearCompletedTodos = () => {
		this.setState((prevState) => {
			return {
				todos: prevState.todos.filter((todo) => todo.completed === false),
			}
		})

		this.updateState()
	}

	render () {
		return (
			<div>
				<Header
					onAddTodo={this.handleAddTodo}
				/>
				<MainSection
					todos={this.state.todos}
					todosCount={this.state.todosCount}
					completedCount={this.state.completedCount}
					onCompleteAllTodos={this.handleCompleteAllTodos}
					onEditTodo={this.handleEditTodo}
					onDeleteTodo={this.handleDeleteTodo}
					onCompleteTodo={this.handleCompleteTodo}
					onClearCompleted={this.handleClearCompletedTodos}
				/>
			</div>
		)
	}
}
