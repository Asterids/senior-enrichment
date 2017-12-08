import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SingleCampus extends Component {

  render () {
    const { campuses } = this.props

    const id = this.props.match.params.campusId
    const campus = campuses && campuses.find(oneCampus => +oneCampus.id === +id)

    const studentsAtCampusSorted = this.props.students
      .filter(student => {
      return student.campus_id === campus.id
    })
      .map(student => {
      return student.lastName + ', ' + student.firstName
    })
      .sort((nameA, nameB) => {
        return nameA > nameB
      })

    // console.log('CAMPUS: ', campus);
    // console.log('STUDENTS: ', this.state.students);

    return (
      <div className="campus">
        <h2>{campus.name}</h2>
        <hr />
        <img src={campus.imageUrl} />
        <hr />
        <p>
          {campus.description}
        </p>
        <ul>
          {studentsAtCampusSorted.map(student => {
          return <li key={studentsAtCampusSorted.indexOf(student)}>{student}</li>
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
