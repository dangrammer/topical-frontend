import React, { Component } from 'react'
import {Form} from 'react-bootstrap'
import SignUp from './SignUp'

export class Login extends Component {

  state = {
    signupName: '',
    signupUsername: '',
    signupPassword: '',
    loginUsername: '',
    loginPassword: ''
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
        name: this.state.signupName,
        username: this.state.signupUsername, 
        password: this.state.signupPassword
      })
    }).then(resp => resp.json())
  }

  render() {
    return (
      <div>
        <Form >
          <input type="text" name="loginUsername" placeholder='Username' value={this.state.loginUsername}
          onChange={this.handleChange}></input>
          <input type="text" name="loginPassword" placeholder='Password' value={this.state.loginPassword}
          onChange={this.handleChange}></input>
          <input type="submit" value="Log In" ></input>
          {/* <button>Sign Up</button> */}
        </Form>
        <SignUp name={this.state.signupName} username={this.state.signupUsername} password={this.state.signupPassword}
          handleChange={this.handleChange} SignUpSubmitted={this.SignUpSubmitted}/>
      </div>
    )
  }
}

export default Login

