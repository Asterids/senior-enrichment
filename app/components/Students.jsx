import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import store from '../store'
// import { fetchStudents } from '../reducers'
import { getStudents } from '../reducers'

// *** ADD a 'Total enrolled students' counter

export default class Students extends Component {
  constructor () {
    super()

    this.state = store.getState()
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState())
    })
    // const studentsThunk = fetchStudents();
    // store.dispatch(studentsThunk)
    axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const studentsReceived = getStudents(students)
        store.dispatch(studentsReceived)
      })
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  // componentWillRecieveProps() {
  //   const
  // }

  render () {
    // make a helper function for alphabetizing the students
    // instead of housing them here inside the render
    const { students } = this.state
    console.log(this.props);

    const studentNameArray = students.map(student => {
      return student.lastName + ', ' + student.firstName
    })

    const orderedStudents = studentNameArray.sort((a, b) => {
      let nameA = a.toLowerCase();
      let nameB = b.toLowerCase();
      return nameA > nameB;
    })

    return (
      <div>
        <h2>Students</h2>
        <ul>
          {orderedStudents.map(student => {
            return <li key={orderedStudents.indexOf(student)}><Link to={`/students/${student.id}`}>{student}</Link></li>
          })}
        </ul>
      </div>
    )
  }
}
