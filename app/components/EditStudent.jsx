import React from 'react'
import { connect } from 'react-redux'
import { updateStudent } from '../reducers'

function EditStudent (props) {
  console.log(props);
  return (
    <div>
      <hr />
      <h3>Edit This Student's Info:</h3>
      <form onSubmit={props.handleSubmit}>
        First Name: <input value={props.newStudentData} name="firstName" placeholder="First name" onChange={props.handleChange} />
        <br />
        Last Name: <input value={props.newStudentData} name="lastName" placeholder="Last name" onChange={props.handleChange} />
        <br />
        E-mail: <input value={props.newStudentData} name="email" placeholder="E-mail" onChange={props.handleChange} />
        <br />
        Campus assignment: <input value={props.newStudentData} name="campus_id" placeholder={`Currently #${props.student.campus_id}`} onChange={props.handleChange} />
        <br />
        <button type="submit">Submit Changes</button>
      </form>
      <br />
      Campus Key:
      <ul>
        {props.campuses.map(campus => {
          return <li key={campus.id}>ID # {campus.id} - {campus.name}</li>
        })}
      </ul>
    </div>
  )
}

function mapStateToProps (state, ownProps) {
  return {
    campuses: state.campuses,
    student: state.students.find(student => +student.id === +ownProps.id),
    newStudentData: state.newStudentData,
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    handleChange (evt) {
      console.log(evt.target.value)
      console.log(ownProps.newStudentData)
    },
    handleSubmit (evt) {
      evt.preventDefault();
      const firstName = evt.target.firstName.value
      const lastName = evt.target.lastName.value
      const email = evt.target.email.value
      const campus_id = +evt.target.campus_id.value
      dispatch(updateStudent(ownProps.id, {firstName, lastName, email, campus_id}))
    }
  }
}

const EditStudentContainer = connect(mapStateToProps, mapDispatchToProps)(EditStudent)
export default EditStudentContainer
