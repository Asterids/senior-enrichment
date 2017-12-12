import React from 'react'
import {connect} from 'react-redux'
import { removeStudent } from '../reducers'

function RemoveStudent (props) {
  return (
    <div>
      <h3>Remove Student</h3>
      <form onSubmit={props.handleSubmit}>
        <button type="submit">Delete Student</button>
      </form>
      <br />
    </div>
  )
}

function mapStateToProps (state, ownProps) {
  return {
    student: state.students.find(student => +student.id === +ownProps.id),
    history: ownProps.history
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    handleSubmit (evt) {
      evt.preventDefault();
      const studentId = ownProps.id
      dispatch(removeStudent(studentId, ownProps.history))
    }
  }
}

const RemoveStudentContainer = connect(mapStateToProps, mapDispatchToProps)(RemoveStudent)
export default RemoveStudentContainer
