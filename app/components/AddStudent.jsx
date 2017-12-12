import React from 'react'
import { connect } from 'react-redux'
import { writeNewStudent, postStudent } from '../reducers'

function AddStudent (props) {
  return (
    <div>
      <hr />
      <h3>Add a New Student</h3>
      <form onSubmit={props.handleSubmit}>
        First Name: <input value={props.newStudentEntry.firstName} name="firstName" placeholder="First name" onChange={props.handleChange} />
        <br />Last Name: <input value={props.newStudentEntry.lastName} name="lastName" placeholder="Last name" onChange={props.handleChange} />
        <br />E-mail: <input value={props.newStudentEntry.email} name="email" placeholder="E-mail" onChange={props.handleChange} />
        <br />GPA: <input value={props.newStudentEntry.gpa} name="gpa" placeholder="GPA" onChange={props.handleChange} />
        <br />Campus Assignment: <input value={props.newStudentEntry.campus_id} name="campus_id" placeholder="ID # (see below)" onChange={props.handleChange} />
        <br /><br />
        <button type="submit">Save New Student</button>
      </form>
      <br />
      Campus Key:
      <ul>
        {props.campuses.map(campus => {
          return <li key={campus.id}>ID # {campus.id} - {campus.name}</li>
        })}
      </ul>
      <hr />
    </div>
  )
}

function mapStateToProps (state, ownProps) {
  return {
    newStudentEntry: state.newStudentEntry,
    history: ownProps.history,
    campuses: state.campuses
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    handleChange (evt) {
      const studentValues = evt.target.value
      const action = writeNewStudent(studentValues)
      dispatch(action)
    },
    handleSubmit (evt) {
      evt.preventDefault();
      const firstName = evt.target.firstName.value
      const lastName = evt.target.lastName.value
      const email = evt.target.email.value
      const gpa = evt.target.gpa.value
      const campus_id = +evt.target.campus_id.value
      dispatch(postStudent({firstName, lastName, email, gpa, campus_id}, ownProps.history))
      dispatch(writeNewStudent(''))
    }
  }
}

const AddStudentContainer = connect(mapStateToProps, mapDispatchToProps)(AddStudent)
export default AddStudentContainer
