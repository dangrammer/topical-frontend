import React, {Component} from 'react'
import Article from '../components/Article'
import {Container, Row, Col} from 'react-bootstrap'

export class ArticleFeed extends Component {

  render() {
    return (
      <div>
        <span 
          style={{
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'left'  
          }}>
          <h4>Today's Top Stories</h4>
          <select onChange={this.props.setSortTerm}>
            <option value=''>{'All'}</option>
            {sections.map(section =>
              <option key={section} value={section}>{section}</option>
            )}
          </select>
        </span>
        <br/>
          <Container>
          <Row>
        {this.props.articles.map(article =>  
          <Col xs={4}>
          <Article
            key={article.id} 
            article={article}
            collections={this.props.collections}
            addToCollection={this.props.addToCollection}
          /> 
          </Col>
        )}
        </Row>
        </Container>
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
