import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import store from '../store'
// import { postStudent } from '../reducers'
import AddStudent from './AddStudent'

// *** ADD a 'Total enrolled students' counter

export function alphabetizeStudents(studentsArr) {
   for (let i = studentsArr.length - 1; i >= 0; i--){
     for (let j = 1; j <= i; j++){
       if (studentsArr[j - 1].lastName > studentsArr[j].lastName){
           let swapVal = studentsArr[j - 1];
           studentsArr[j - 1] = studentsArr[j];
           studentsArr[j] = swapVal;
        }
     }
   }
   return studentsArr;
}

function Students (props) {
  const { students } = props
  const orderedStudents = alphabetizeStudents(students)

  return (
    <div>
      <h2>Students</h2>
      <ul>
        {orderedStudents
          .map(student => {
          return <li key={student.id}><Link to={`/students/${student.id}`}>{student.lastNameFirst}</Link></li>
        })}
      </ul>
      <AddStudent history={props.history} campuses={props.campuses} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    campuses: state.campuses,
    students: state.students
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     addNewStudent: function (newStudentObj) {
//       dispatch(postStudent(newStudentObj))
//     }
//   }
// }

const StudentsContainer = connect(mapStateToProps)(Students)
export default StudentsContainer
