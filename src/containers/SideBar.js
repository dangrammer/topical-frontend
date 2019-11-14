import React, {Component} from 'react'
import CollectionsBox from './CollectionsBox'

export class SideBar extends Component {

  render() {
    return (
      <div>
        {/* <h2>SideBar</h2> */}
        <CollectionsBox 
          collections={this.props.collections}
          handleChange={this.props.handleChange}
          notepad={this.props.notepad}
          saveNotes={this.props.saveNotes}
          createCollection={this.props.createCollection}
          collectionName={this.props.collectionName}
          editName={this.props.editName}
          updateCollectionName={this.props.updateCollectionName}
          deleteCollection={this.props.deleteCollection}
          deleteClipping={this.props.deleteClipping}
        />
      </div>
    )
  }

}

export default SideBar