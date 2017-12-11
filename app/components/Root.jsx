import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import store from '../store'
import Header from './Header'
import Navbar from './Navbar'
import Home from './Home'
import Campuses from './Campuses'
import Students from './Students'
import SingleStudent from './SingleStudent'
import SingleCampus from './SingleCampus'
// import AddStudent from './AddStudent'
import { fetchStudents, fetchCampuses } from '../reducers'

export class Main extends Component {

  componentDidMount () {
    const campusesThunk = fetchCampuses()
    store.dispatch(campusesThunk)

    const studentsThunk = fetchStudents();
    store.dispatch(studentsThunk);
  }

  render () {
    return (
      <Router>
        <div>
          <Header />
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/students" component={Students} />
              <Route path="/students/:studentId" component={SingleStudent} />
              {/* <Route path="/newStudent" render={() => <AddStudent history={this.props.history} campuses={this.props.campuses} />} /> */}
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

const mapStateToProps = (state, ownProps) => {
  return {
    campuses: state.campuses,
    students: state.students,
    // history: ownProps.history
  }
}

export default connect(mapStateToProps)(Main)
