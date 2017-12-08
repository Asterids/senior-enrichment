import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// *** ADD a 'Total enrolled students' counter

export class Students extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render () {
    const { students } = this.props

    const studentNameArray = students && students.map(student => student.lastName + ', ' + student.firstName)

    const orderedStudents = studentNameArray && studentNameArray.sort((a, b) => {
      let nameA = a.toLowerCase();
      let nameB = b.toLowerCase();
      return nameA > nameB;
    })

    return (
      <div>
        <h2>Students</h2>
        <ul>
          {orderedStudents && orderedStudents.map(student => {
            return <li key={orderedStudents.indexOf(student)}><Link to={`/students/${student.id}`}>{student}</Link></li>
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    students: state.students
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//
//   }
// }

const StudentsContainer = connect(mapStateToProps)(Students)
export default StudentsContainer
