import React from 'react'
import PropTypes from 'prop-types'

class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loginFailed: false,
      fields: {
        username: '',
        password: ''
      }
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onInputChange (event) {
    const fields = this.state.fields
    fields[event.target.name] = event.target.value
    this.setState({ fields })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.login(this.state.fields.username, this.state.fields.password)
        .catch(err => {
          console.log(err)
          this.loginFailed()
        })
  }

  loginFailed () {
    this.setState({
      loginFailed: true,
      fields: {
        username: '',
        password: ''
      }
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            Логин:<br />
          <input onChange={this.onInputChange} placeholder='Введите логин' name='username' value={this.state.fields.username} type='text' />
            Пароль:<br />
          <input onChange={this.onInputChange} placeholder='Введите пароль' name='password' value={this.state.fields.password} type='password' />
          <input type='submit' value='Войти' />
        </form>

        { this.state.loginFailed && <h3>Логин или пароль неверны</h3> }


      </div>
    )
  };
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

export default LoginForm
