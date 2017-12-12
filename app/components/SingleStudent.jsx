import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import EditStudent from './EditStudent'
import RemoveStudent from './RemoveStudent'

export class SingleStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    const id = +this.props.match.params.studentId
    const student = this.props.students.find(oneStudent => {
      return +oneStudent.id === +id
    })

    const campus = this.props.campuses.find(oneCampus => {
      return +oneCampus.id === +student.campus_id
    })

    return (
      <div className="student">
        <h2>{student.name}</h2>
        <ul>
          <li>GPA: {student.gpa.toFixed(1)}</li>
          <li>Email: {student.email}</li>
          <li>Campus: <Link to={`/campuses/${campus.id}`}>{campus.name}</Link></li>
          <li>Current Standing: Good</li>
        </ul>
        <EditStudent id={id} />
        <hr />
        <RemoveStudent id={id} history={this.props.history} />
        <br />
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

const SingleStudentContainer = connect(mapStateToProps)(SingleStudent)
export default SingleStudentContainer
