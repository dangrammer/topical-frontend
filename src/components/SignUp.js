import React from 'react'
import {Form} from 'react-bootstrap'

function SignUp(props) {
  return (
    <Form onSubmit={props.SignUpSubmitted}>
      <input 
        type="text" 
        name="signupName"
        placeholder='Name' 
        value={props.name}
        onChange={props.handleChange}
      />
      <input 
        type="text" 
        name="signupUsername" 
        placeholder='Username' 
        value={props.username}
        onChange={props.handleChange}
      />
      <input 
        type="password" 
        name="signupPassword" 
        placeholder='Password' 
        value={props.password}
        onChange={props.handleChange}
      />
      <input type="submit" value="Sign Up"/>
    </Form>
  )
}

export default SignUp

