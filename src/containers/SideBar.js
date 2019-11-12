import React, { Component } from 'react';
import CollectionsBox from './CollectionsBox'
import Collection from './Collection'

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
                    clippings={this.props.clippings}
                    articles={this.props.articles}
                />
            </div>
        )
    }
}

export default SideBar
{/* conditional statement to render CollectionsBox or Collection */}
