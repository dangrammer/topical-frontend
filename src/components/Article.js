import React from 'react'
import {Card} from 'react-bootstrap'

function Article(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.article.image_url} />
            <Card.Body>
                <Card.Title><a href={props.article.url}>{props.article.title}</a></Card.Title>
                <Card.Text>
                    <span>{props.article.author}</span><br/>
                    <span>{props.article.publication_date}</span><br/>
                    <br/>
                    {props.article.description}
                </Card.Text>
                <form onSubmit={(event) => props.addToCollection(event, props.article.id)}>
                    <select name='collection-name'>
                        {props.collections.map(c =>
                            <option key={c.id} value={c.id}>{c.name}</option>
                        )}
                    </select>
                    <input type='submit' value='Add to Collection'/>
                </form>
            </Card.Body>
        </Card>
    )
}

export default Article

// onChange={props.clippingOnChange}

        // <div>
        //     <img src={props.article.image_url} alt={props.article.title}/>
        //     <h1>{props.article.title}</h1>
        //     <span>{props.article.publication_date}</span>
        //     <p>{props.article.description}</p>
        //     <span>{props.article.author}</span><br/>
        //     <a href={props.article.url}>Link to Article</a><br/>
        //     <br/>
        // </div>


        // <Dropdown>
        //             <Dropdown.Toggle variant="success" id="dropdown-basic">
        //                 Add to a Collection
        //             </Dropdown.Toggle>

        //             <Dropdown.Menu>
        //                 {props.collections.map(c => )}
        //                 {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        //                 <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        //                 <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
        //             </Dropdown.Menu>
        //         </Dropdown>