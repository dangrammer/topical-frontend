import React, {Component} from 'react'
import {Form} from 'react-bootstrap'
import SignUp from './SignUp'

export class Login extends Component {

  state = {
    signupName: '',
    signupUsername: '',
    signupPassword: '',
    loginUsername: '',
    loginPassword: '',
    errors: []
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    }) //, () => console.log(this.state)
  }

  SignUpSubmitted = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          name: this.state.signupName,
          username: this.state.signupUsername, 
          password: this.state.signupPassword
        }
      })
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.errors) {
        this.setState({
          errors: data.errors
        })
      } else {
        this.props.gotToken(data.jwt, data.user.id)
      }
    })
  }

  loginSubmitted = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: this.state.loginUsername, 
          password: this.state.loginPassword
        }
      })
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.errors) {
        this.setState({
          errors: data.message
        })
      } else {
        console.log(data)
        this.props.gotToken(data.jwt, data.user.id)
      }
    })
  }

  render() {
    return (
      <div>
      {/* <ul>
      {
        this.state.errors.map(error => <li>{ error }</li>)
      }
    </ul> */}
        <Form onSubmit={this.loginSubmitted}>
          <input type="text" name="loginUsername" placeholder='Username' value={this.state.loginUsername}
          onChange={this.handleChange}></input>
          <input type="text" name="loginPassword" placeholder='Password' value={this.state.loginPassword}
          onChange={this.handleChange}></input>
          <input type="submit" value="Log In"></input>
          {/* <button>Sign Up</button> */}
        </Form>
        <SignUp name={this.state.signupName} username={this.state.signupUsername} password={this.state.signupPassword}
          handleChange={this.handleChange} SignUpSubmitted={this.SignUpSubmitted}/>
      </div>
    )
  }
}

export default Login

