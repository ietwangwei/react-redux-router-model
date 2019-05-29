import React from 'react'
import { connect } from 'react-redux'

class Counter extends React.Component {
  render() {
    return (
      <div onClick={this.props.inrement}>{this.props.count}</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    inrement: () => {
      dispatch({
        type: 'INCREMENT'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
