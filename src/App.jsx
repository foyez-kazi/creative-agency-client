import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Layout } from './components/Layout'
import { NotFound } from './components/NotFound'
import { Home } from './components/Home/Home'
import { Login } from './components/Login'
import { PrivateRoute } from './components/PrivateRoute'
import { Order } from './components/Order/Order'
import { ServiceList } from './components/Order/ServiceList'
import { Review } from './components/Order/Review'
import { AddService } from './components/Order/AddService'
import { AdminServiceList } from './components/Order/AdminServiceList'
import { MakeAdmin } from './components/Order/MakeAdmin'

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/orders">
          <Order />
        </PrivateRoute>
        <PrivateRoute path="/service-list">
          <ServiceList />
        </PrivateRoute>
        <PrivateRoute path="/admin-service-list">
          <AdminServiceList />
        </PrivateRoute>
        <PrivateRoute path="/review">
          <Review />
        </PrivateRoute>
        <PrivateRoute path="/add-service">
          <AddService />
        </PrivateRoute>
        <PrivateRoute path="/make-admin">
          <MakeAdmin />
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
