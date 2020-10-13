import { CssBaseline } from '@material-ui/core'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import { UserProvider } from './context/UserProvider'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <CssBaseline />
        <App />
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
