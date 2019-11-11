import React from 'react'

function SignUp(props) {
    return (
        <form onSubmit={props.SignUpSubmitted}>
     
      <input type="text" name="name" placeholder='Name' value={props.name}
        onChange={props.handleChange}></input>
     
      <input type="text" name="username" placeholder='Username' value={props.username}
        onChange={props.handleChange}></input>
     
      <input type="text" name="password" placeholder='Password' value={props.password}
        onChange={props.handleChange}></input>
        {/* <button onClick={props.SignUpSubmitted}> Sign Up</button> */}

      <input type="submit" value="Sign Up" onSubmit={props.SignUpSubmitted}></input>
    </form>
    )
}

export default SignUp

