import axios from 'axios'

const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_CAMPUS = 'GET_CAMPUS'
const REMOVE_CAMPUS = 'REMOVE_CAMPUS'
// const ADD_CAMPUS = 'ADD_CAMPUS'
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

//
// export function addCampus (newCampus) {
//   const action = {
//     type: ADD_CAMPUS,
//     newCampus
//   }
//   return action
// }

export function deleteCampus (campus) {
  const action = {
    type: REMOVE_CAMPUS,
    campus
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

export function removeCampus(campus) {
  return function (dispatch) {
    return axios.delete(`/api/campuses/${campus.id}`)
    .then(res => res.data)
    .then(deletedCampus => {
      const action = deleteCampus(deletedCampus)
      dispatch(action)
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
    // case ADD_CAMPUS:
    //   return [...state, action.newCampus]
    case REMOVE_CAMPUS:
      const newState = [...state]
      const campusId = action.campus.id;
      const campusToRemoveIdx = state.findIndex(campus => campus.id === campusId
      );
      newState.splice(campusToRemoveIdx, 1);
      return newState;
    default:
      return state
  }
}
