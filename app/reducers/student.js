import axios from 'axios'

const GET_STUDENTS = 'GET_STUDENTS'
// const GET_STUDENT = 'GET_STUDENT'
const ADD_STUDENT = 'ADD_STUDENT'
// const EDIT_STUDENT = 'EDIT_STUDENT'

// action creators
export function getStudents (students) {
  const action = {
    type: GET_STUDENTS,
    students
  }
  return action
}

// export function getStudent (student) {
//   const action = {
//     type: GET_STUDENT,
//     student
//   }
//   return action
// }

export function addStudent (newStudent) {
  const action = {
    type: ADD_STUDENT,
    newStudent
  }
  return action
}

// thunk creators
export function fetchStudents() {
  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action);
      })
  }
}

export function postStudent(newStudent) {
  return function thunk (dispatch) {
    return axios.post('/api/students', newStudent)
      .then(res => res.data)
      .then(addedStudent => {
        const action = addStudent(addedStudent)
        dispatch(action)
      })
  }
}

// reducer
export default function studentReducer (state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students
    // case GET_STUDENT:
    //   return Object.assign({}, state, {  })
    case ADD_STUDENT:
      return [...state.students, action.student]
    default:
      return state;
  }
}
