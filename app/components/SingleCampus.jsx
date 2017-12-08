import React, { Component } from 'react'
import store from '../store'

export default class SingleCampus extends Component {
  constructor (props) {
    super(props)

    this.state = store.getState();
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => {
      const newState = store.getState();
      this.setState(newState);
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const campus = this.state.currentCampus

    const studentsAtCampus = this.state.students
      .filter(student => {
      return student.campus_id === campus.id
    })
      .map(student => {
      return student.lastName + ', ' + student.firstName
    })

    console.log('CAMPUS: ', campus);
    console.log('STUDENTS: ', this.state.students);

    return (
      <div className="campus">
        <h2>{campus.name}</h2>
        <hr />
        <img src={campus.imageUrl} />
        <hr />
        <p>
          {campus.description}
        </p>
        <ul>
          {studentsAtCampus.map(student => {
          return <li key={studentsAtCampus.indexOf(student)}>{student}</li>
        })}
        </ul>
      </div>
    )
  }
}
