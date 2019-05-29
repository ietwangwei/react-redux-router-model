import React from 'react'
import connect from '../utils/connect'
import LoginForm from '../components/LoginForm'
import { users } from '../services/queryService'
import storage from '../services/storage'
import { message } from 'antd'

@connect
export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false
    }
  }
  login (formData) {
    this.setState({
      isLoading: true
    })
    users.login(formData).then(res => {
      if (res.errorCode === 0) {
        message.success('登录成功')
        storage.setItem('userInfo', res.data)
        this.props.history.push('/home')
      } else {
        message.error(res.message)
      }
    })
  }
  render() {
    return (
      <div className='login'>
        <LoginForm login={this.login.bind(this)} isLoading={this.state.isLoading}></LoginForm>
      </div>
    )
  }
}
