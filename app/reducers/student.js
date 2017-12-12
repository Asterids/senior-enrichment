import axios from 'axios'

const GET_STUDENTS = 'GET_STUDENTS'
const ADD_STUDENT = 'ADD_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'

// action creators
export function getStudents (students) {
  const action = {
    type: GET_STUDENTS,
    students
  }
  return action
}

export function addStudent (student) {
  const action = {
    type: ADD_STUDENT,
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

export function updateStudent (student) {
  const action = {
    type: UPDATE_STUDENT,
    student
  }
  return action
}

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
        const action = addStudent(addedStudent)
        dispatch(action)
        history.push(`/students/${addedStudent.id}`)
      })
      .catch(console.error.bind(console))
  }
}

export function updateStudentThunkCreator(id, newStudentData) {
  return function (dispatch) {
    axios.put(`/students/${id}`, newStudentData)
      .then(res => res.data)
      .then(updatedStudent => {
        const action = addStudent(updatedStudent)
        dispatch(action)
      })
      .catch(console.error.bind(console))
  }
}

export function removeStudent(studentId, history) {
  return function (dispatch) {
    axios.delete(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(deletedStudentId => {
        history.push('/students')
        const action = deleteStudent(+deletedStudentId)
        dispatch(action)
      })
      .catch(console.error.bind(console))
  }
}

// reducer
export default function studentReducer (state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students
    case ADD_STUDENT:
      return [...state, action.student]
    case UPDATE_STUDENT:
      return [...state, state[action.student]]
    case DELETE_STUDENT:
      return [...state.filter(student => +student.id !== +action.studentId)]
    default:
      return state;
  }
}
