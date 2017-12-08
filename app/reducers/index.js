import { combineReducers } from 'redux'
import campuses from './campus'
import students from './student'

// action types
// const ADD_STUDENT_TO_CAMPUS = 'ADD_STUDENT_TO_CAMPUS'


const rootReducer = combineReducers({
  campuses,
  students
})

export default rootReducer
export * from './student'
export * from './campus'
