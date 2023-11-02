import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Play.css';
function Player({el}) {
  return (
//     <Card style={{ width: '18rem' }}>
//     <Card.Img variant="top" src={el.image} />
//     <Card.Body>
//       <Card.Title>{el.name}</Card.Title>
//       <Card.Text>
//       Nationalty : {el.nationalty}
      
       
//       </Card.Text>
//       <Card.Text>
     
//       JurseyNumber : {el.jurseynumber}

       
//       </Card.Text>
//       <Card.Text>
     
//       Age : {el.age}
       
//       </Card.Text>
     
//     </Card.Body>
//   </Card>
<div className="container">
<div className="card">
  <div className="image">
    <img href="#" src={el.image} />
  </div>
  <div className="content">
    <h3>{el.name}</h3>
    <p> Nationalty : {el.nationalty}</p>
    <p>  JurseyNumber : {el.jurseynumber}</p>
    <p> Age : {el.age}</p>
  </div>
</div>    
</div>
  )
}

export default Player