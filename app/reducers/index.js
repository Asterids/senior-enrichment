/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import axios from 'axios'

const initialState = {
  campuses: [],
  currentCampus: {},
  students: [],
  currentStudent: {}
}

// action types
const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_CAMPUS = 'GET_CAMPUS'
const AUGMENT_CAMPUS = 'AUGMENT_CAMPUS'

const GET_STUDENTS = 'GET_STUDENTS'
const GET_STUDENT = 'GET_STUDENT'
const AUGMENT_STUDENT = 'AUGMENT_STUDENT'

const ADD_STUDENT_TO_CAMPUS = 'ADD_STUDENT_TO_CAMPUS'


// action creators
export function getCampuses (campuses) {
  const action = {
    type: GET_CAMPUSES,
    campuses
  }
  return action
}

export function getCampus (campus) {
  const action = {
    type: GET_CAMPUS,
    campus
  }
  return action
}

// re: "getCampus", "getStudent" -- Our store already gives us an array of our campuses, and AJAX requests can be costly...
// i.e. No thunk necessary

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


// thunk creators

export function fetchCampuses() {
  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action);
      })
  }
}

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


// reducer
const rootReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return Object.assign({}, state, { campuses: action.campuses })
    case GET_CAMPUS:
      return Object.assign({}, state, { currentCampus: action.campus })
    case GET_STUDENTS:
      return Object.assign({}, state, { students: action.students })
    case GET_STUDENT:
      return Object.assign({}, state, { currentStudent: action.student })
    default:
      return state
  }
};

export default rootReducer
