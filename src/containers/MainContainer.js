import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import ArticleFeed from './ArticleFeed';

export class MainContainer extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/articles', {
            headers: {
                'Authorization': `Bearer ${this.props.token}`
            }
        })
        .then(resp => resp.json())
        .then(data => {
            console.log('getfetch data', data)
            this.setState({
                articles: data
            })
        })
    }


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
