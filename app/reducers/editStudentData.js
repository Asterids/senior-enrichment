const EDIT_STUDENT = 'EDIT_STUDENT'

export function editStudent (newStudentData) {
  const action = {
    type: EDIT_STUDENT,
    newStudentData
  }
  return action
}

export default function editStudentReducer (state = '', action) {
  if (action.type === EDIT_STUDENT) {
    return action.newStudentData
  } else {
    return state
  }
}
