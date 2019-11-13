import React, {Component} from 'react'
import NavBar from '../components/NavBar'
import ArticleFeed from './ArticleFeed'
import SideBar from './SideBar'

class MainContainer extends Component {

  state = {
    articles: [],
    collections: [],
    collectionName: '',
    editName: ''
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
    
    fetch('http://localhost:3000/collections', {
        headers: {
            'Authorization': `Bearer ${this.props.token}`
        }
    })
    .then(resp => resp.json())
    .then(data => {
      const userCollections = data.filter(collection =>
        collection.user_id === parseInt(this.props.loggedInUserId, 10))
      this.setState({
        collections: userCollections
      })
    })
  }

  handleChange = (event) => {
    event.persist()

    this.setState({
      [event.target.name]: event.target.value
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

  updateCollectionName = (event, collectionId) => {
    event.preventDefault()
    
    fetch(`http://localhost:3000/collections/${collectionId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.props.token}`
      },
      body: JSON.stringify({
        name: this.state.editName
        // user_id: this.props.loggedInUserId
      })
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
      this.setState({
        collections: [...this.state.collections, data],
        collectionName: '',
        editName: ''
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
     let filteredCollection = this.state.collections.find(collection => {
          return collection.id === data.collection.id
      })
    let updateCollection =  () => {
        return filteredCollection.articles.push(data.article)}
    updateCollection()
    // this.setState({
    //   collections: this.state.collections   
    // })
    this.fetchCollections() 
    })
    event.target.reset()
  }

  fetchCollections = () => {
    fetch('http://localhost:3000/collections', {
        headers: {
            'Authorization': `Bearer ${this.props.token}`
        }
    })
    .then(resp => resp.json())
    .then(data => {
      const userCollections = data.filter(collection =>
        collection.user_id === parseInt(this.props.loggedInUserId, 10))
      this.setState({
        ...this.state,  
        collections: userCollections
      })
    })
  }    
  

  deleteClipping = (clippingId) => {
      fetch(`http://localhost:3000/clippings/${clippingId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${this.props.token}`
          }
      })
      this.fetchCollections()  
  }

  render() {
      console.log(this.state.editName)
    return (
      <div>
        <h2>Main Container</h2>
        <NavBar/>  
        <SideBar 
          collections={this.state.collections} 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} 
          collectionName={this.state.collectionName}
          editName={this.state.editName}
          updateCollectionName={this.updateCollectionName}
          deleteClipping={this.deleteClipping}
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