import React, { Component } from 'react'
import {Form} from 'react-bootstrap'
import SignUp from './SignUp'

export class Login extends Component {

  state = {
    name: '',
    username: '',
    password: ''
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
        name: this.state.name,
        username: this.state.username, 
        password: this.state.password
      })
    }).then(resp => resp.json())
  }

  render() {
    return (
      <div>
        <Form >
          <input type="text" name="username" placeholder='Username' value={this.state.username}
          onChange={this.handleChange}></input>
          <input type="text" name="password" placeholder='Password' value={this.state.password}
          onChange={this.handleChange}></input>
          <input type="submit" value="Log In" ></input>
          {/* <button>Sign Up</button> */}
        </Form>
        <SignUp name={this.state.name} username={this.state.username} password={this.state.password}
          handleChange={this.handleChange} SignUpSubmitted={this.SignUpSubmitted}/>
      </div>
    )
  }
}

export default Login

