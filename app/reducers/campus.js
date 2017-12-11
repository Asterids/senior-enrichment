import axios from 'axios'

const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_CAMPUS = 'GET_CAMPUS'
const DELETE_CAMPUS = 'DELETE_CAMPUS'
// const EDIT_CAMPUS = 'EDIT_CAMPUS'

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

export function deleteCampus (campusId) {
  const action = {
    type: DELETE_CAMPUS,
    campusId
  }
  return action
}

// thunk creators
export function fetchCampuses() {
  return function (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action);
      })
      .catch(console.error.bind(console));
  }
}

export function postCampus(newCampus, history) {
  return function (dispatch) {
    return axios.post('/api/campuses', newCampus)
      .then(res => res.data)
      .then(addedCampus => {
        const action = getCampus(addedCampus)
        dispatch(action);
        history.push(`/campuses/${addedCampus.id}`)
      })
      .catch(console.error.bind(console));
  }
}

export function removeCampus(campusId, history) {
  return function (dispatch) {
    axios.delete(`/api/campuses/${campusId}`)
    .then(res => res.data)
    .then(deletedCampus => {
      const action = deleteCampus(deletedCampus)
      dispatch(action)
      history.push('/campuses')
    })
    .catch(console.error.bind(console));
  }
}

// reducer
export default function campusReducer (state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses
    case GET_CAMPUS:
      return [...state, action.campus]
    case DELETE_CAMPUS:
      return [...state.filter(campus => +campus.id !== +action.campusId)]
    default:
      return state
  }
}
