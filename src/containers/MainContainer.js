import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import ArticleFeed from './ArticleFeed';

class MainContainer extends Component {

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
        console.log("HI OMG IM HERE")
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
