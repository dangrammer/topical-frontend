import React from 'react'
import {Form} from 'react-bootstrap'

function SignIn(props) {
  return (
    <Form onSubmit={props.loginSubmitted}>
      <input 
        type="text" 
        name="loginUsername" 
        placeholder='Username' 
        value={props.loginUsername}
        onChange={props.handleChange}
      />
      <input 
        type="password"
        name="loginPassword" 
        placeholder='Password' 
        value={props.loginPassword}
        onChange={props.handleChange}
      />
      <input type="submit" value="Log In"/>
    </Form>
  )
}

export default SignIn

