import React, { Component } from 'react'
import Article from '../components/Article'

export class ArticleFeed extends Component {
    render() {
        return (
            <div>
                <h4>Article Feed</h4>
                <Article />
            </div>
        )
    }
}

export default ArticleFeed
