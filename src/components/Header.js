import React from 'react'
import { Menu, Dropdown, Icon } from 'antd'
import storage from '../services/storage'

export default class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menus: [
        {
          name: '我的信息'
        }
      ],
      isOpen: false
    }
  }
  setOpen (isOpen) {
    this.setState({
      isOpen: isOpen
    })
  }
  generateMenus (menus) {
    return (
      <Menu>
        {
          menus.map((menu, index) => {
            return (
              <Menu.Item key={index}>
                <span>{menu.name}</span>
              </Menu.Item>
            )
          })
        }
      </Menu>
    )
  }
  render() {
    const userInfo = storage.getItem('userInfo') ? JSON.parse(storage.getItem('userInfo')) : {}
    return (
      <div className="header">
        <div className="header-title">Title</div>
        <div className="user-center">
          {userInfo.realName}
          <Dropdown overlay={this.generateMenus(this.state.menus)} trigger={['click']} className='header-menu'>
            {
              this.state.isOpen ? <Icon type='up' onClick={this.setOpen.bind(this)}/> : <Icon type='down' onClick={this.setOpen.bind(this)}/>
            }
          </Dropdown>
        </div>
      </div>
    )
  }
}
