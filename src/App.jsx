import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Layout } from './components/Layout'
import { NotFound } from './components/NotFound'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { PrivateRoute } from './components/PrivateRoute'
import { PrivateComponent } from './components/PrivateComponent'

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/private">
          <PrivateComponent />
        </PrivateRoute>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
