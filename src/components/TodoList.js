import React from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      searchWord: ''
    }
  }
  removeItem (index) {
    const list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
  setList (e) {
    if (e.keyCode === 13) {
      let value = e.target.value
      const list = this.state.list
      list.push(value)
      this.setState({
        list: list,
        searchWord: ''
      })
      e.target.value = ''
    }
  }
  setSearchWord (e) {
    this.setState({
      searchWord: e.target.value
    })
  }
  getList (list) {
    return (
      <div className='list'>
        { list.map((item, index) => {
          return <TodoItem key={index} item={item} index={index} removeItem={this.removeItem.bind(this)}></TodoItem>
        }) }
      </div>
    )
  }
  render() {
    const filterList = this.state.list.filter(item => {
      return item.includes(this.state.searchWord)
    })
    const showList = filterList.length ? filterList : this.state.list
    return (
      <div className="todo-list margin-top12">
        <div className="title margin-bottom12">TodoList</div>
        <input type="text" onKeyDown={this.setList.bind(this)} onChange={this.setSearchWord.bind(this)} className='margin-bottom12'/>
        {this.getList(showList)}
      </div>
    )
  }
}
