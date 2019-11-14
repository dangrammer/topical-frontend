import React from 'react'
import {Card} from 'react-bootstrap'

function Article(props) {

  const months = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
  ]
  // console.log(daysOfWeek[date.getDay()])
  // let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const date = new Date(props.article.publication_date)
  const publication_date = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`

  return (
    <Card bg="light" style={{width: '17rem'}}>
      <Card.Img style={{height: '182px'}} variant="top" src={props.article.image_url}/>
      <Card.Body style={{overflow: 'scroll', height: '300px'}}>
        <Card.Title><a variant="info" href={props.article.url} >{props.article.title}</a></Card.Title>
        <Card.Text>
          <span>{props.article.author}</span><br/>
          <pre>{publication_date}</pre><br/>
          <span>{props.article.description}</span>
        </Card.Text>
        </Card.Body>
        {props.collections.length > 0 ?
          <form 
            onSubmit={(event) => props.addToCollection(event, props.article.id)} 
            style={{
              display: 'flex', 
              flexDirection: 'row', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '2px',
              borderTop: 'solid 1px gray'
            }}>
            <select name='collection-name'>
              <option value='' disabled selected>Add to Topic</option>
              {props.collections.sort((a, b) => a.name.localeCompare(b.name)).map(c =>
                <option key={c.id} value={c.id}>{c.name}</option>
              )}
            </select>
            <input type='submit' value='+' style={{float: 'right', color: 'white', backgroundColor: '#9baac2'}}/>
          </form> :
            <span><em>*Create a collection in the sidebar to start collecting articles!</em></span>
        }
    </Card>
  )
}

export default Article

// {/* <Dropdown>
//     <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Add to a Collection
//     </Dropdown.Toggle>

//     <Dropdown.Menu>
//         {/* {props.collections.map(c => c.name)} */}
//         {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
//     </Dropdown.Menu>
// </Dropdown> */}