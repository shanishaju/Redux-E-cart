import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slice/wishlistSlice';


function Home() {
    const data = useFetch('https://fakestoreapi.com/products')
    console.log(data);
  const dispatch = useDispatch()
  return (
    <>
  <Row className='w-100 p-3 my-5'>
  {data?.length>0?
  data?.map((item)=>(


    <Col sm={12} md={4} lg={3} className='mt-3 d-flex justify-content-center p-3'> 
    <Card style={{ width: '18rem' }} className='border shadow rounded'>
      <Card.Img variant="top" src={item.image} className='w-100 ' style={{height:'300px'}} />
      <Card.Body>
        <Card.Title>{item.title.slice(0,20)}</Card.Title>
        <Card.Text>
          <p className='text-center text-primary' >$
            {item.price}
          </p>
        </Card.Text>
        <div className='d-flex justify-content-between'>

        <Button variant="dander" onClick={()=>dispatch(addToWishlist(item))}><FontAwesomeIcon icon={faCartShopping} style={{color: "#FFD43B",}} /></Button>
        <Button variant="success"><FontAwesomeIcon icon={faHeart} style={{color: "#ff3d3d",}} /></Button>
        </div>

      </Card.Body>
    </Card>
    </Col>
     ))


     : 
     <p>nothing </p>
    }
  </Row>
    
    
    
    </>
  )
}

export default Home