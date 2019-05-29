import React from 'react'

export default class TodoItem extends React.Component {
  render() {
    return (
      <div className="todo-item">
        <span>{this.props.item}</span>
        <span className='pointer' onClick={() => this.props.removeItem(this.props.index)}>X</span>
      </div>
    )
  }
}
