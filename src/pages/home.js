import React from 'react'
import connect from '../utils/connect'
import Header from '../components/Header'
import TodoList from '../components/TodoList'


@connect
export default class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <Header></Header>
        <div className="page-wrap">
          <TodoList></TodoList>
        </div>
      </div>
    )
  }
}
