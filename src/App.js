import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import SideBar from './containers/SideBar'
import MainContainer from './containers/MainContainer'
import Login from './components/Login'
import {Jumbotron} from 'react-bootstrap'

export default class App extends Component {

  state = {
    articles: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/articles')
    .then(resp => resp.json())
    .then(data => this.setState({
      articles: data
    }))
  }
  
  render() {
    console.log(this.state.articles)
    return (
      <Jumbotron fluid >
        <div>
          <Header />
          <Login />
          <SideBar />
          <MainContainer />
        </div>
      </Jumbotron>
    )
  }
}

