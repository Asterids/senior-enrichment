import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'
import Home from './Home'
import Campuses from './Campuses'
import Students from './Students'
import SingleStudent from './SingleStudent'
import SingleCampus from './SingleCampus'

export default class Main extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <Router>
        <div>
          <Header />
          <Navbar />
          <main>
            {/* Switch: If I hit a route that matches, stop! Only render one route. */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/students" component={Students} />
              <Route path="/students/:studentId" component={SingleStudent} />
              <Route exact path="/campuses" component={Campuses} />
              <Route path="/campuses/:campusId" component={SingleCampus} />
              <Redirect to="/" />
            </Switch>
          </main>
        </div>
    </Router>
    )
  }
}
