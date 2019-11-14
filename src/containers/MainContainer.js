import React, {Component} from 'react'
import ArticleFeed from './ArticleFeed'
import SideBar from './SideBar'
import Header from '../components/Header'
import {Jumbotron, Container, Row, Col} from 'react-bootstrap'

class MainContainer extends Component {

  state = {
    articles: [],
    collections: [],
    collectionName: '',
    editName: '',
    sortTerm: '',
    notepad: ''
  }

  componentDidMount() {
    this.fetchArticles()
    this.fetchCollections()
  }

  fetchArticles = () => {
    fetch('http://localhost:3000/articles', {
      headers: {
        'Authorization': `Bearer ${this.props.token}`
      }
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        ...this.state,
        articles: data
      })
    })    
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
  
  articlesProp = () => {
    return this.state.sortTerm ?
      this.state.articles.filter(article => article.section === this.state.sortTerm) :
        this.state.articles     
  }

  handleChange = (event) => {
    event.persist()

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  setSortTerm = (event) => {
    this.setState({
      sortTerm: event.target.value
    })
  }

  createCollection = (event) => {
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
      })
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        // collections: [...this.state.collections, data],
        collectionName: '',
        editName: ''
      })
      this.fetchCollections()
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

  deleteCollection = (collectionId) => {
    fetch(`http://localhost:3000/collections/${collectionId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.props.token}`
      }
    })
    let filteredCollections = this.state.collections.filter(collection => collection.id !== collectionId)

    this.setState({
      ...this.state,  
      collections: filteredCollections
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

  saveNotes = (event, collectionId) => {
    event.preventDefault()
    fetch(`http://localhost:3000/collections/${collectionId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.props.token}`
      },
      body: JSON.stringify({
        notepad: this.state.notepad
      })
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      this.setState({
        ...this.state,
        notepad: data.notepad
      })
      this.fetchCollections()
    })
  }

  render() {
    return (
        <>
        <Jumbotron 
          fluid 
          style={{ 
            backgroundImage: `url(https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-075-clean-mirror.png)`,
            backgroundSize: 'cover', 
            backgroundAttachment: 'fixed'
          }}
        > 
        <Container>
        <Row>
        <Col sm={3}>
        <SideBar 
          collections={this.state.collections} 
          handleChange={this.handleChange}
          notepad={this.state.notepad}
          saveNotes={this.saveNotes}
          createCollection={this.createCollection} 
          collectionName={this.state.collectionName}
          editName={this.state.editName}
          updateCollectionName={this.updateCollectionName}
          deleteCollection={this.deleteCollection}
          deleteClipping={this.deleteClipping}
        />
        </Col>
        <Col sm={9}>
        <ArticleFeed 
          articles={this.articlesProp()} 
          collections={this.state.collections}
          addToCollection={this.addToCollection}
          setSortTerm={this.setSortTerm}
        />
        </Col>
        </Row>
        </Container>
      </Jumbotron>
      </>



    )
  }

}

export default MainContainer