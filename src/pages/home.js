import React from 'react'
import { connect } from 'react-redux'


@connect(state => {
  return {
    count: state.counter.count
  }
}, diapatch => {
  return {
    increment: () => {
      diapatch({
        type: 'INCREMENT'
      })
    }
  }
})
export default class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        This is Home
        <span onClick={this.props.increment}>{this.props.count}</span>
      </div>
    )
  }
}
