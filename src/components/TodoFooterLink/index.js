import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Link = ({
	active, children, filter, onChangeFilter,
}) => (
	<a
		className={classnames({ selected: active })}
		style={{ cursor: 'pointer' }}
		onClick={() => onChangeFilter(filter)}
	>
		{children}
	</a>
)


Link.propTypes = {
	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	filter: PropTypes.string.isRequired,
	onChangeFilter: PropTypes.func.isRequired,
}

export default Link
