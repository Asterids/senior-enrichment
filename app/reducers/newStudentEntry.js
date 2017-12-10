const WRITE_NEW_STUDENT = 'WRITE_NEW_STUDENT'

export function writeNewStudent (newStudentEntry) {
  const action = {
    type: WRITE_NEW_STUDENT,
    newStudentEntry
  }
  return action
}

export default function newStudentReducer(state = '', action) {
  if (action.type === WRITE_NEW_STUDENT) {
    return action.newStudentEntry
  } else {
    return state
  }
}
