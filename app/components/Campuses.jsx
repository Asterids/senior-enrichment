import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import AddCampus from './AddCampus'

// *** ADD a 'Students at this campus' counter

function Campuses (props){
    const { campuses } = props

    return (
      <div>
        <h2>Campuses</h2>
        <ul>
          {campuses.map(campus => {
            return <li key={campus.id}><Link to={`/campuses/${campus.id}`}>{campus.name}</Link></li>
          })}
        </ul>
        <AddCampus history={props.history} />
      </div>
    )
  }

function mapStateToProps(state) {
  return {
    campuses: state.campuses,
    students: state.students
  }
}
//
// function mapDispatchToProps(dispatch) {
//   return {
//     addNewCampus: function (newCampusObj) {
//       dispatch(postCampus(newCampusObj))
//     }
//   }
// }

const CampusesContainer = connect(mapStateToProps)(Campuses)
export default CampusesContainer
