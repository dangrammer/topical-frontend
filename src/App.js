import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
import Login from './components/Login'
import {Jumbotron} from 'react-bootstrap'
// import {Switch, Route, Redirect} from 'react-router-dom'

export default class App extends Component {

  state = {
    loggedInUserId: null,
    token: null
  }

  componentDidMount(){
    if (localStorage.token) {
      this.setState({
        token: localStorage.token,
        loggedInUserId: localStorage.loggedInUserId
      })
    }
  }
  
  gotToken = (token, loggedInUserId) => {
    localStorage.token = token
    localStorage.loggedInUserId = loggedInUserId

    this.setState({
      token,
      loggedInUserId
    })
  }

  logOutClicked = () => {
    localStorage.clear()

    this.setState({
      token: null,
      loggedInUserId: null
    })
  }

  render() {
    // localStorage.clear()
    return (
      <Jumbotron fluid >
      <Header/>
      {this.state.token ? 
        <div>
          <button onClick={this.logOutClicked}>Log Out</button>
          <MainContainer 
            token={this.state.token}
            loggedInUserId={this.state.loggedInUserId}
          />
        </div> : 
        <Login gotToken={this.gotToken}/>
      }
      </Jumbotron>
      )
    }
  }
    
    // {/* {this.state.token ?
    //   <Route path="/home"  component={MainContainer} />
    //   :
    // <Route path="/login" component={Login} />} */}

    
     

      // BOTCHED SWITCH STATEMENT
      // <div>
      // <Switch>
      //   {this.state.token ?
      //     <Route exact path='/home' component={MainContainer}/> :
      //       <Route exact path="/" render={(props) => <Login {...props} gotToken={this.gotToken}/>}
      //     />
      //   }
      //   {/* <Redirect to='/'/> */}
      // </Switch>
      // </div>  