import React, {Component} from 'react'
import CollectionsBox from './CollectionsBox'

export class SideBar extends Component {

  render() {
    return (
      <div>
        <h2>SideBar</h2>
        <CollectionsBox 
          collections={this.props.collections}
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
          collectionName={this.props.collectionName}
          editName={this.props.editName}
          updateCollectionName={this.props.updateCollectionName}
          deleteClipping={this.props.deleteClipping}
        />
      </div>
    )
  }

}

export default SideBar