import React, {Component} from 'react'
import Collection from './Collection'

export class CollectionsBox extends Component {

  render() {
    return (
      <div>
        Collections Box
        <form onSubmit={this.props.handleSubmit}>
          <input 
            type="text" 
            name="collectionName" 
            placeholder='Create a New Collection'
            value={this.props.collectionName}
            onChange={this.props.handleChange}
          />
          <input type="submit" value="submit"/>
        </form>
        {this.props.collections.sort((a, b) => a.name.localeCompare(b.name)).map(c =>
          <Collection 
            key={c.id} 
            collection={c}
            deleteClipping={this.props.deleteClipping}
            handleChange={this.props.handleChange}
            collectionName={this.props.collectionName}
            editName={this.props.editName}
            updateCollectionName={this.props.updateCollectionName}
          />
        )} 
      </div>
    )
  }

}

export default CollectionsBox
