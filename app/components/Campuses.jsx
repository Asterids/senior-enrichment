import React, {Component} from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import store from '../store'
// import { getCampuses } from '../reducers'
import { fetchCampuses } from '../reducers'

// *** ADD a 'Students at this campus' counter

export default class Campuses extends Component {
  constructor(props) {
    super(props)

    this.state = store.getState()
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => { // when store.subscribe runs, the local
      this.setState(store.getState()) // state will be updated with the latest from the store
    })
    const campusesThunk = fetchCampuses()
    store.dispatch(campusesThunk)
    // axios.get('/api/campuses')
    // .then(res => res.data)
    // .then(campuses => {
    //   const campusesReceived = getCampuses(campuses) // invoking our getCampuses action creator
    //   store.dispatch(campusesReceived) // this will cause our store to invoke its reducer with our current state
    // }) // this is how we update our state! also invokes any actions that have been subscribed (top of this func)
  }  // re-renders component

  componentWillUnmount () {
    this.unsubscribe();
  }

  render () {
    const campuses = this.state.campuses;
    return (
      <div>
        <h2>Campuses</h2>
        <ul>
          {campuses.map(campus => {
            return <li key={campus.id}><Link to={`/campuses/${campus.id}`}>{campus.name}</Link></li>
          })}
        </ul>
      </div>
    )
  }
}
