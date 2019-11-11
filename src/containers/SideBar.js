import React, { Component } from 'react';
import CollectionsBox from './CollectionsBox'
import Collection from './Collection'

export class SideBar extends Component {
    render() {
        return (
            <div>
                <h2>SideBar</h2>
                <CollectionsBox />
                {/* conditional statement to render CollectionsBox or Collection */}
            </div>
        )
    }
}

export default SideBar
