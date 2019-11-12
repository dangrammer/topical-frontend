import React, { Component } from 'react';


export default class Collection extends Component {

    // articleIdsFromClippings = () => {
    //     return this.props.clippings.map(clipping => clipping.article_id)
    // }

    // collectionIdsFromClippings = () => {
    //     return this.props.clippings.map(clipping => clipping.collection_id)
    // }

    // collectionArticles = () => {
    //     return this.props.articles.filter(a => {
    //         return this.articleIdsFromClippings().includes(a.id) && 
    //             this.collectionIdsFromClippings().includes(this.props.collection.id)
    //         }
    //       )
    // }
    
    render() {
        // console.log(this.props.collection.name, this.props.collection.id)
        // console.log(this.props.clippings)
        // console.log(this.articleIdsFromClippings())
        // console.log(this.collectionIdsFromClippings())
        // console.log(this.collectionArticles())
        return (
            <div>
              <p>{this.props.collection.name}</p>
              {/* <ul>
                {this.collectionArticles().map(article => <li key={article.id}><a href={article.url}>{article.title}</a></li>)}
              </ul> */}
            </div>
        )
    }
}


