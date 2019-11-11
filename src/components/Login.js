import React, { Component } from 'react'
import {Form} from 'react-bootstrap'
import SignUp from './SignUp'

export class Login extends Component {

  state = {
    SignupName: '',
    SignupUsername: '',
    SignupPassword: '',
    LoginUsername: '',
    LoginPassword: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    }, console.log(event.target.value))
  }

  SignUpSubmitted = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.SignupName,
        username: this.state.SignupUsername, 
        password: this.state.SignupPassword
      })
    }).then(resp => resp.json())
  }

  render() {
    return (
      <div>
        <Form >
          <input type="text" name="LoginUsername" placeholder='Username' value={this.state.LoginUsername}
          onChange={this.handleChange}></input>
          <input type="text" name="LoginPassword" placeholder='Password' value={this.state.LoginPassword}
          onChange={this.handleChange}></input>
          <input type="submit" value="Log In" ></input>
          {/* <button>Sign Up</button> */}
        </Form>
        <SignUp name={this.state.SignupName} username={this.state.SignupUsername} password={this.state.SignupPassword}
          handleChange={this.handleChange} SignUpSubmitted={this.SignUpSubmitted}/>
      </div>
    )
  }
}

export default Login

