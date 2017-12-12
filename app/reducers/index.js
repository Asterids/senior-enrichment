import { combineReducers } from 'redux'
import campuses from './campus'
import students from './student'
import newCampusEntry from './newCampusEntry'
import newStudentEntry from './newStudentEntry'

const rootReducer = combineReducers({
  campuses,
  students,
  newCampusEntry,
  newStudentEntry
})

export default rootReducer
export * from './student'
export * from './campus'
export * from './newCampusEntry'
export * from './newStudentEntry'
