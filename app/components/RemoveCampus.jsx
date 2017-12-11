import React from 'react'
import {connect} from 'react-redux'
import { removeCampus } from '../reducers'

function RemoveCampus (props) {
  return (
    <div>
      <h3>Remove Campus</h3>
      <h4>WARNING: Removing a campus will also delete all associated students. If this is not your intention, please move them to another campus first.</h4>
      <form onSubmit={props.handleSubmit}>
        <button type="submit">Delete Campus</button>
      </form>
    </div>
  )
}

function mapStateToProps (state, ownProps) {
  return {
    campus: state.campuses.find(campus => +campus.id === +ownProps.id),
    history: ownProps.history
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    handleSubmit (evt) {
      evt.preventDefault();
      const campusId = ownProps.id
      dispatch(removeCampus(campusId, ownProps.history))
    }
  }
}

const RemoveCampusContainer = connect(mapStateToProps, mapDispatchToProps)(RemoveCampus)
export default RemoveCampusContainer
