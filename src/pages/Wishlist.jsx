
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faArrowLeft, faCartShopping, faHeart,faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/slice/wishlistSlice';
import { addtoCartList } from '../redux/slice/cartSlice';


function Wishlist() {
  const wishListArray = useSelector((state)=>state.wishlistReducer);
  console.log(wishListArray);
  const dispatch = useDispatch()

  // For making functions easier we combine the function
  // Clicking on cart button will remove items from wishlist and add to cart

  const handleDispatch = (item)=>{
      dispatch(removeFromWishlist(item.id))
      dispatch(addtoCartList(item))
  }

  return (
    <>
    
      { wishListArray?.length>0?
              <Row className='w-100 p-5 my-5'>
             {wishListArray?.map((item)=>(
                <Col sm={12} md={4} lg={3} className='mt-3 d-flex justify-content-center' >
                <Card style={{ width: '100%' }} className='border shadow rounded'>
                <Card.Img variant="top" className='w-100' style={{height:'300px'}} src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                  {item.price}$
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button onClick={()=>dispatch(removeFromWishlist(item.id))} className='border rounded-5' variant="warning"><FontAwesomeIcon icon={faTrash}  /></Button>
                    <Button onClick={()=>(handleDispatch(item))} className='border rounded-5' variant="success"><FontAwesomeIcon icon={faCartShopping} /></Button>
                  </div>
                </Card.Body>
              </Card>
                </Col>
             ))
                 
             }
            </Row>
            :
            <div style={{width:'100%',height:'80vh',flexDirection:'column'}} className='d-flex justify-content-center align-items-center'>
            <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="" />
    
            <Link to="/">
            <Button className='btn rounded bg-danger mt-4'><FontAwesomeIcon icon={faArrowLeft} className='me-2' style={{flexDirection:'column'}} shake size='lg' />Back to Home </Button>
            </Link>
          </div>

      }
  
  
    
    
    <p></p>
   

  
    
    </>
  )
}

export default Wishlist
           
           




           
    