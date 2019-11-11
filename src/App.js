import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import SideBar from './containers/SideBar'
import MainContainer from './containers/MainContainer'
import Login from './components/Login'
import {Jumbotron} from 'react-bootstrap'

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
    console.log(localStorage)
    return (
      <Jumbotron fluid >
        <Header/>
        {this.state.token ? 
          <div>
            <button onClick={this.logOutClicked}>Log Out</button>
            <MainContainer token={this.state.token}/>
            {/* token={this.state.token} 
            loggedInUserId={this.state.loggedInUserId} */}
          </div> : 
          <Login 
            gotToken={this.gotToken} 
          />
        }
        {/* <SideBar /> */}
      </Jumbotron>
    )
  }
}

