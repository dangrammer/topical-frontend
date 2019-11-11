import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import ArticleFeed from './ArticleFeed';

export class MainContainer extends Component {
    render() {
        return (
            <div>
                <h2>Main Container</h2>
              <NavBar />  
              <ArticleFeed />
            </div>
        )
    }
}

export default MainContainer
