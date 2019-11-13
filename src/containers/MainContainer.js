import React, {Component} from 'react'
import NavBar from '../components/NavBar'
import ArticleFeed from './ArticleFeed'
import SideBar from './SideBar'

class MainContainer extends Component {

  state = {
    articles: [],
    collections: [],
    clippings: [],
    collectionName: ''
  }

  componentDidMount() {
       
    fetch('http://localhost:3000/articles', {
      headers: {
        'Authorization': `Bearer ${this.props.token}`
      }
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        articles: data
      })
    })

    fetch(`http://localhost:3000/users/${this.props.loggedInUserId}`, {
      headers: {
        'Authorization': `Bearer ${this.props.token}`
      }
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        collections: data.collections
      })
    })

    fetch('http://localhost:3000/clippings', {
      headers: {
        'Authorization': `Bearer ${this.props.token}`
      }
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        clippings: data
      })
    })
  }

  handleChange = (event) => {
    event.persist()

    this.setState({
      collectionName: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch('http://localhost:3000/collections', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.props.token}`
      },
      body: JSON.stringify({
        name: this.state.collectionName,
        user_id: this.props.loggedInUserId
      })
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        collections: [...this.state.collections, data],
        collectionName: ''
      })
    })
  }

  addToCollection = (event, articleId) => {
    event.preventDefault()
    let collectionId = parseInt(event.target['collection-name'].value, 10)

    fetch('http://localhost:3000/clippings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.props.token}`
      },
      body: JSON.stringify({
        collection_id: collectionId,
        article_id: articleId
      })
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        clippings: [...this.state.clippings, data]
      })
    })
    event.target.reset()
  }

  render() {
    return (
      <div>
        <h2>Main Container</h2>
        <NavBar/>  
        <SideBar 
          collections={this.state.collections} 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} 
          collectionName={this.state.collectionName}
          clippings={this.state.clippings}
          articles={this.state.articles}
        />
        <ArticleFeed 
          articles={this.state.articles} 
          collections={this.state.collections}
          addToCollection={this.addToCollection}
        />
      </div>
    )
  }

}

export default MainContainer