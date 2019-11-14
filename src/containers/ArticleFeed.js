import React, {Component} from 'react'
import Article from '../components/Article'

export class ArticleFeed extends Component {

  render() {
    return (
      <div>
        <h4>(Article Feed)</h4>
        <select onChange={this.props.setSortTerm}>
          <option value=''>{'All'}</option>
          {sections.map(section =>
            <option key={section} value={section}>{section}</option>
          )}
        </select>
        {this.props.articles.map(article =>  
          <Article
            key={article.id} 
            article={article}
            collections={this.props.collections}
            addToCollection={this.props.addToCollection}
          /> 
        )}
      </div>
    )
  }

}

const sections = [
  'World', 
  'U.S.', 
  'New York',
  'Smarter Living', 
  'Arts', 
  'Real Estate', 
  'Business', 
  'Health', 
  'Movies', 
  'Opinion', 
  'Science', 
  'Books', 
  'Magazine', 
  'The Upshot' 
]

export default ArticleFeed
