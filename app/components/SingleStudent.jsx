import React, { Component } from 'react'
import store from '../store'

export default class SingleStudent extends Component {
  constructor(props) {
    super(props)

    this.state = store.getState();
  }

  // instead of interacting with the backend below, can we access a particular
  // student from our store's state's students object, to be specified in our render?

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
    console.log(this.props)
    // console.log('StudentID: ', this.props.match.params.studentId)
    // const studentId = +this.props.match.params.studentId
    const student = this.state.currentStudent
    const fullName = student.firstName + ' ' + student.lastName

    return (
      <div className="student">
        <h2>{fullName}</h2>
        <ul>
          <li>Campus: {student.campus_id}</li>
          <li>GPA: {student.gpa}</li>
          <li>Current Standing: Good</li>
        </ul>
      </div>
    )
  }
}
