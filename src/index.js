import React from 'react'
import { render } from 'react-dom'

import App from './containers/App'
import 'todomvc-app-css/index.css'
import registerServiceWorker from './registerServiceWorker'

render(
	<App />,
	document.getElementById('root'),
)
registerServiceWorker()
