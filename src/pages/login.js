import React from 'react'
import connect from '../utils/connect'

@connect
export default class Login extends React.Component {
  render() {
    const store = this.props.state.counter
    return (
      <div className='login'>
        This is Login
        <span onClick={this.props.increment}>{store.count}</span>
      </div>
    )
  }
}
