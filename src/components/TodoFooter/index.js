import React from 'react'
import PropTypes from 'prop-types'

import TodoFooterLink from '../TodoFooterLink'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/TodoFilters'

const FILTER_TITLES = {
	[SHOW_ALL]: 'Toutes',
	[SHOW_ACTIVE]: 'En cours',
	[SHOW_COMPLETED]: 'Terminés',
}

const Footer = (props) => {
	// Créez votre constante permettant de récupère tous nos props via le `destructuring assigment`.
	// Créez votre constante `itemWord` permettant d'afficher les tâches restantes.

	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>
					{activeCount || 'Aucune'}
				</strong> {itemWord}
			</span>
			<ul className="filters">
				{
					Object.keys(FILTER_TITLES).map((filter) =>
						(
							<li key={filter}>
								<TodoFooterLink
									active={currentFilter === filter}
									onChangeFilter={onChangeFilter}
									filter={filter}
								>
									{ FILTER_TITLES[filter] }
								</TodoFooterLink>
							</li>
						))
				}
			</ul>
			{
				!!completedCount
					&& <button
						type="button"
						className="clear-completed"
						onClick={onClearCompleted}
					>Effacer les terminés</button>
			}
		</footer>
	)
}

// Codez le propTypes du footer ici.

export default Footer
