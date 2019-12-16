import React, {Component} from 'react'
import './App.css'
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
import Login from './components/Login'
import {Jumbotron} from 'react-bootstrap'
// import {Switch, Route, Redirect} from 'react-router-dom'

export default class App extends Component {

  state = {
    token: null,
    loggedInUserId: null,
    userName: null
  }

  componentDidMount(){
    if (localStorage.token) {
      this.setState({
        token: localStorage.token,
        loggedInUserId: localStorage.loggedInUserId,
        userName: localStorage.userName
      })
    }
  }
  
  gotToken = (token, loggedInUserId, userName) => {
    localStorage.token = token
    localStorage.loggedInUserId = loggedInUserId
    localStorage.userName = userName

    this.setState({
      token,
      loggedInUserId,
      userName
    })
  }

  logOutClicked = () => {
    localStorage.clear()

    this.setState({
      token: null,
      loggedInUserId: null,
      userName: null
    })
  }

  render() {
    // localStorage.clear()
    return (
      // <Jumbotron fluid>
      <>
        <Header 
          userName={this.state.userName} 
          logOutClicked={this.logOutClicked}
          token={this.state.token}
        />
        {this.state.token != null ? 
          <>
            <MainContainer 
              token={this.state.token}
              loggedInUserId={this.state.loggedInUserId}
            />
          </> : 
            <>
              <pre>
                Topical is the premiere website for scanning the New York Times,<br/>
                creating customized collections of articles, and keeping notes on<br/>
                your topics of interest. Hot off the press, just as you want it.
              </pre>
              <Login gotToken={this.gotToken}/>
              <pre>
                Disclaimer: The New York Times has a paywall on their website.<br/>
                Topical allows for collecting articles with photo, title, byline,<br/> 
                publication date, abstract, and weblink, however, access to full<br/>
                article content will require users to engage said paywall. It's cheap!
              </pre>
            </>
        }
      </>
      // </Jumbotron>
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