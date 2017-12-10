import axios from 'axios'

const GET_STUDENTS = 'GET_STUDENTS'
const GET_STUDENT = 'GET_STUDENT'
// const UPDATE_STUDENT = 'UPDATE_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'

// action creators
export function getStudents (students) {
  const action = {
    type: GET_STUDENTS,
    students
  }
  return action
}

export function getStudent (student) {
  const action = {
    type: GET_STUDENT,
    student
  }
  return action
}

export function deleteStudent (studentId) {
  const action = {
    type: DELETE_STUDENT,
    studentId
  }
  return action
}

// export function updateStudent (student) {
//   const action = {
//     type: UPDATE_STUDENT,
//     student
//   }
//   return action
// }

// thunk creators
export function fetchStudents() {
  return function (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action);
      })
      .catch(console.error.bind(console));
  }
}

export function postStudent(newStudent, history) {
  return function (dispatch) {
    return axios.post('/api/students', newStudent)
      .then(res => res.data)
      .then(addedStudent => {
        const action = getStudent(addedStudent)
        dispatch(action)
        history.push(`/students/${addedStudent.id}`)
        .catch(console.error.bind(console))
      })
  }
}

export function updateStudentThunkCreator(id, newStudentData) {
  return function (dispatch) {
    axios.post(`/students/${id}`, newStudentData)
      .then(res => res.data)
      .then(updatedStudent => {
        const action = getStudent(updatedStudent)
        dispatch(action)
        .catch(console.error.bind(console))
      })
  }
}

export function removeStudent(studentId, history) {
  return function (dispatch) {
    axios.delete(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(deletedStudent => {
        const action = deleteStudent(deletedStudent)
        dispatch(action)
        history.push('/students')
      })
      .catch(console.error.bind(console))
  }
}

// reducer
export default function studentReducer (state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students
    case GET_STUDENT:
      return [...state, action.student]
    // case UPDATE_STUDENT:
    //   return [...state, action.student]
    case DELETE_STUDENT:
      console.log('Action.student: ', action.studentId)
      return [...state.filter(student => +student.id !== +action.studentId)]
    default:
      return state;
  }
}
