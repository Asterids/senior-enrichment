import React from 'react'
import { connect } from 'react-redux'
import { writeNewCampus, postCampus } from '../reducers'

function AddCampus (props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input value={props.newCampusEntry.name} name="name" placeholder="New campus name..." onChange={props.handleChange} />
        <input value={props.newCampusEntry.description} name="description" placeholder="Enter a description..." onChange={props.handleChange} />
        <button type="submit">Add New Campus</button>
      </form>
    </div>
  )
}

function mapStateToProps (state, ownProps) {
  return {
    newCampusEntry: state.newCampusEntry,
    history: ownProps.history
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    handleChange (evt) {
      const campusName = evt.target.value
      const action = writeNewCampus(campusName)
      dispatch(action)
    },
    handleSubmit (evt) {
      evt.preventDefault();
      const name = evt.target.name.value;
      const description = evt.target.description.value;
      dispatch(postCampus({name, description}, ownProps.history))
      dispatch(writeNewCampus(''))
    }
  }
}

const AddCampusContainer = connect(mapStateToProps, mapDispatchToProps)(AddCampus)
export default AddCampusContainer
