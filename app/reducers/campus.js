import axios from 'axios'

const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_CAMPUS = 'GET_CAMPUS'
const AUGMENT_CAMPUS = 'AUGMENT_CAMPUS'

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

// reducer
export default function campusReducer (state = [], action) {
  if (action.type === GET_CAMPUSES) {
      return action.campuses
  }  // case GET_CAMPUS:
    //   return Object.assign({}, state, { currentCampus: action.campus })
  else { return state }
}
