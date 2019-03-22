import React from 'react'
import PropTypes from 'prop-types'

import TodoTextInput from '../../components/TodoTextInput'

const Header = (props) => (
	<header className="header">
		<h1>
			Todo
		</h1>
		<TodoTextInput
			newTodo
			placeholder="Que faut-il faire ?"
			onSave={
				(text) => {
					if (text.length !== 0) {
						props.onAddTodo(text)
					}
				}
			}
		/>
	</header>
)

Header.propTypes = {
	onAddTodo: PropTypes.func.isRequired,
}

export default Header
