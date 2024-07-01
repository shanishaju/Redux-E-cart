import { faArrowLeft, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Wishlist() {
  return (
    <>
     <Row className='w-100 p-3 my-5'>
    <Col sm={12} md={4} lg={3} className='mt-3 d-flex justify-content-center p-3'> 
    <Card style={{ width: '18rem' }} className='border shadow rounded'>
      <Card.Img variant="top" src="holder.js/100px180" className='w-100 ' style={{height:'300px'}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='d-flex justify-content-between'>

        <Button variant="dander"><FontAwesomeIcon icon={faCartShopping} style={{color: "#FFD43B",}} /></Button>
        <Button variant="success"><FontAwesomeIcon icon={faHeart} style={{color: "#ff3d3d",}} /></Button>
        </div>

      </Card.Body>
    </Card>
    </Col>
  </Row>
    

    <div style={{width:"100%", height:"70vh", display:'flex', justifyContent:'center', alignItems:"center", flexDirection:'column' }}>
      <img src="https://i.pinimg.com/564x/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.jpg" alt="" />
    <button className='btn btn-primary mt-4'> <FontAwesomeIcon icon={faArrowLeft} className='me-2'/>  Back to home</button>
    </div>
    
    </>
  )
}

export default Wishlist