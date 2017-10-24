var React = require('react')
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import TodoApp from 'TodoApp'
import Login from 'Login'
import firebase from 'app/firebase/'

// configure middleware and routes
var requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/')
  }
  next()
}

var redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/todos')
  }
  next()
}

export default (
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp} onEnter={requireLogin} />
        <IndexRoute component={Login} onEnter={redirectIfLoggedIn} />
      </Route>
    </Router>
)