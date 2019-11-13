import React, {Component} from 'react'


export default class Collection extends Component {

  state = {
    articleToggle: false,
    toggleButton: false,
  }

  handleClick = () => {
    this.setState({
      articleToggle: !this.state.articleToggle
    })
  }  

  editCollection = (event) => {
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
            <strong onClick={this.handleClick}>{this.props.collection.name}</strong>
            {this.state.buttonToggle ?
            <>
              <button name='editButton' onClick={this.editCollection}>Back</button>
              <form onSubmit={(event) => this.props.updateCollectionName(event, this.props.collection.id)}>
                <input onChange={this.props.handleChange} type='text' name='editName' value={this.props.editName} placeholder={this.props.collection.name}/>
                <input type='submit' value='Edit Collection Name'/>
              </form> 
            </> :
            <button name='editButton' onClick={this.editCollection}>Edit</button>
          } 
          </>
          <ul>
            {this.props.collection.articles.map(a => {

              let articleClipping = this.props.collection.clippings.find(clipping =>
                clipping.article_id === a.id)

              return <li key={a.id}><a href={a.url} target="_blank">{a.title}</a>

                {this.state.buttonToggle ?
                  <>
                    <button onClick={() => this.props.deleteClipping(articleClipping.id)}>x</button>
                    
                  </> :
                  null
                }
              </li>
                }
            )}
          </ul>
        </>

          : 
          <p onClick={this.handleClick}><strong>{this.props.collection.name}</strong></p>
        }
      </div>
    )
  }
}