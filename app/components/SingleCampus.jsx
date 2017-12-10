import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { alphabetizeStudents } from './Students'

export class SingleCampus extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render () {
    const { campuses } = this.props

    const id = this.props.match.params.campusId
    const campus = campuses && campuses.find(oneCampus => +oneCampus.id === +id)
    const studentsAtCampus = this.props.students.filter(student => {
      return student.campus_id === campus.id
    })

    const studentsAtCampusSorted = alphabetizeStudents(studentsAtCampus)

    return (
      <div className="campus">
        <h2>{campus.name}</h2>
        <img className="campus-image" src={campus.imageUrl} />
        <p>
          {campus.description}
        </p>
        <h3>Current Students at this Campus:</h3>
        <ul>
          {studentsAtCampusSorted.map(student => {
          return <li key={student.id}><Link to={`/students/${student.id}`}>{student.lastNameFirst}</Link></li>
        })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    campuses: state.campuses,
    students: state.students
  }
}

const SingleCampusContainer = connect(mapStateToProps)(SingleCampus)
export default SingleCampusContainer
