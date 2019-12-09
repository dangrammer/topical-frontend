import React, {Component} from 'react'

export default class Collection extends Component {

  state = {
    articleToggle: false,
    toggleButton: false
  }

  showArticles = () => {
    this.setState({
      articleToggle: !this.state.articleToggle
    })
  }  

  editCollection = () => {
    this.setState({
      buttonToggle: !this.state.buttonToggle
    })
  }

  render() {
    return (
      <div>
        {this.state.articleToggle ? 
          <>
            <>
              <strong onClick={this.showArticles} style={{cursor: 'pointer'}}>{this.props.collection.name}</strong>
              {this.state.buttonToggle ?
                <>
                  <button name='editButton' onClick={this.editCollection}>Done</button>
                  <form onSubmit={(event) => this.props.updateCollectionName(event, this.props.collection.id)}>
                    <input 
                      onChange={this.props.handleChange} 
                      type='text' 
                      name='editName' 
                      value={this.props.editName} 
                      placeholder={this.props.collection.name}
                    />
                    <input type='submit' value='Edit Collection Name'/>
                  </form> 
                </> :
                  <>
                    <button name='editButton' onClick={this.editCollection}>Edit</button>
                    <button onClick={() => this.props.deleteCollection(this.props.collection.id)}>Delete</button>
                  </>
              } 
            </>
            <ul>
              {this.props.collection.articles.map(a => {
                
                let articleClipping = this.props.collection.clippings.find(clipping =>
                  clipping.article_id === a.id)

                return <li key={a.id}>
                  <a href={a.url} target="_blank" rel="noopener noreferrer">{a.title} </a>
                  {this.state.buttonToggle ?
                    <button onClick={() => this.props.deleteClipping(articleClipping.id)}>&times;</button> :
                      null
                  }
                </li>
                }
              )}
            </ul>
            {this.state.buttonToggle ?
              <form onSubmit={(event) => this.props.saveNotes(event, this.props.collection.id)}> 
                <label htmlFor='notepad'>
                  <pre>{this.props.collection.name} Note Pad</pre>
                </label><br/>
                <input type='submit' value='Save'/><br/>
                <textarea 
                  onChange={this.props.handleChange}
                  type='text' 
                  name='notepad'
                  value={this.props.notepad} 
                  placeholder={this.props.collection.notepad}
                  rows="5" 
                  cols="33.5"
                />
              </form> :
                <>
                  <p>{this.props.collection.name} Note Pad</p>
                  <pre>{this.props.collection.notepad}</pre>
                </>
            }
            
          </> : 
            <p onClick={this.showArticles} style={{cursor: 'pointer'}}><strong>{this.props.collection.name}</strong></p>
        }
      </div>
    )
  }
}