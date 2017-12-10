const WRITE_NEW_CAMPUS = 'WRITE_NEW_CAMPUS'

export function writeNewCampus (newCampusEntry) {
  const action = {
    type: WRITE_NEW_CAMPUS,
    newCampusEntry
  }
  return action;
}

export default function newCampusReducer(state = '', action) {
  if (action.type === WRITE_NEW_CAMPUS) {
    return action.newCampusEntry
  } else {
    return state
  }
}
