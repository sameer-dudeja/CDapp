import React from 'react'
import Modal from './components/Modal'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Posts from './pages/Posts'
import Error from './pages/Error'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
            <Modal />
          </Route>
          <Route path='/posts'>
            <Posts />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
