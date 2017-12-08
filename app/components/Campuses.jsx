import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// *** ADD a 'Students at this campus' counter

export class Campuses extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render () {
    const { campuses } = this.props;
    console.log('Campuses props: ', this.props)
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

function mapStateToProps(state) {
  return {
    campuses: state.campuses,
    students: state.students
  }
}

const CampusesContainer = connect(mapStateToProps)(Campuses)
export default CampusesContainer
