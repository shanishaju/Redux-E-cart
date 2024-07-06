
    
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeFromCartList } from '../redux/slice/cartSlice';
function Cart() {
  const cartListArray = useSelector((state)=>state.cartlistReducer)
  console.log(cartListArray);
 const dispatch = useDispatch()
 
  // For naviagation to other pages
  const navigate = useNavigate()

 const [total, setTotal] = useState(0);
 
//  To find the total sum of price in cart
const getTotal = () => {
  if(cartListArray.length>0){
    setTotal(cartListArray.map((item)=>item.price).reduce((n1,n2)=>n1+n2))
  }
  else{
    setTotal(0)
    }
}

// function when check button pressed
// alert for order placed successfully
// jump to home page and make cart state empty

const handleCheckOut = ()=>{
  alert("Order Placed Successfully")
  dispatch(emptyCart())
  navigate('/')
  // window.location = "/"
}

useEffect(()=>{
  getTotal()
},[cartListArray])

  return (
    <>
    <Row className='my-5 w-100 '>
      <Col md={1}>
        
      </Col >
      <Col md={6}>
      <Table className='m-5 p-3' striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Image</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      {
        cartListArray?.length>0? 
        <tbody>
          {cartListArray?.map((item,index)=>(
            <tr>
            <td>{index+1}</td>
            <td>{item.title}</td>
            <td><img style={{width:'150px',height:'150px'}} src={item.image} alt="" /></td>
            <td>${item.price}</td>
            <td><Button onClick={()=>dispatch(removeFromCartList(item.id))} variant="outline-danger" className=''><FontAwesomeIcon icon={faTrash} style={{color: "#ff0000",}} /></Button></td>
          </tr>
          ))
                
          }
           </tbody>
        :
        <div style={{width:'100%',height:'80vh',flexDirection:'column'}} className='d-flex justify-content-center align-items-center'>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png" alt="" />

        <Link to="/">
        <Button className='btn rounded bg-danger mt-4'><FontAwesomeIcon icon={faArrowLeft} className='me-2' style={{flexDirection:'column'}} shake size='lg' />Back to Home </Button>
        </Link>
      </div>
      }
     
      
     
     </Table>
     </Col>
      <Col md={4} className='d-flex justify-content-center'>
      <Card style={{ width: '450px' ,height:'200px'}} className='border shadow p-3 my-5'>
      <Card.Body>
        <Card.Title><h3>Cart Summary</h3> </Card.Title>
        <Card.Text>
          <h5>Total Number of Products: <span className='text-warning'>{cartListArray.length}</span></h5>
          <h5>Total Price: $<span className='text-warning'>{total}</span></h5>
          
        </Card.Text>
        <Button onClick={handleCheckOut}  className='border rounded d-fle' variant="success">CheckOut</Button>
      </Card.Body>
    </Card>
      </Col>
      <Col Col md={1}>
        
      </Col>
    </Row>

    
    
    </>
  )
}

export default Cart

    