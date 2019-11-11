import React from 'react'

function SignUp(props) {
    return (
        <form onSubmit={props.SignUpSubmitted}>
     
      <input type="text" name="signupName" placeholder='Name' value={props.name}
        onChange={props.handleChange}></input>
     
      <input type="text" name="signupUsername" placeholder='Username' value={props.username}
        onChange={props.handleChange}></input>
     
      <input type="text" name="signupPassword" placeholder='Password' value={props.password}
        onChange={props.handleChange}></input>
        {/* <button onClick={props.SignUpSubmitted}> Sign Up</button> */}

      <input type="submit" value="Sign Up"></input>
    </form>
    )
}

export default SignUp

