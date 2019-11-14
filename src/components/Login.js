import React, {Component} from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'

export class Login extends Component {

  state = {
    signupName: '',
    signupUsername: '',
    signupPassword: '',
    loginUsername: '',
    loginPassword: '',
    newUser: false,
    errors: []
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  toggleLogin = () => {
    this.setState({
      newUser: !this.state.newUser
    })
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
        this.props.gotToken(data.jwt, data.user.id, data.user.name)
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
        this.props.gotToken(data.jwt, data.user.id, data.user.name)
      }
    })
  }

  render() {
    return (
      <>
        {this.state.newUser ?
          <>
            <SignUp 
              name={this.state.signupName} 
              username={this.state.signupUsername}
              password={this.state.signupPassword}
              handleChange={this.handleChange} 
              SignUpSubmitted={this.SignUpSubmitted}
            />
            <br/>
            <pre>Already have an account?  <button onClick={this.toggleLogin}>Log In</button></pre> 
          </> :
            <>
              <SignIn 
                username={this.state.loginUsername}
                password={this.state.loginPassword}
                handleChange={this.handleChange} 
                loginSubmitted={this.loginSubmitted}
              />
              <br/>
              <pre>New User? <button onClick={this.toggleLogin}>Sign Up</button></pre>
            </>
        } 
      </>
    )
  }

}

export default Login

