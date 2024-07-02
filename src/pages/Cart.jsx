import React from 'react';
import { Table } from 'react-bootstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';


function Cart() {
  return (
    <>
    <div className="row w-100 ">
    
    <div className="col-md-1"></div>
    <div className="col-md-6">
    <Table striped bordered hover className="table mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Image</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dress</td>
            <td><img src=""/></td>
            <td>1999</td>
            <td><button style={{ border: '1px solid #f42710' }}><FontAwesomeIcon icon={faTrash } style={{color: "#f42710"}}  /></button></td>
            
          </tr>
          <tr>
            <td>2</td>
            <td>Dress</td>
            <td><img src=""  /></td>
            <td>1999</td>
            <td><button style={{ border: '1px solid #f42710' }}><FontAwesomeIcon icon={faTrash } style={{color: "#f42710"}}  /></button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Dress</td>
            <td><img src="" alt="" /></td>
            <td>1999</td>
            <td><button style={{ border: '1px solid #f42710' }}><FontAwesomeIcon icon={faTrash } style={{color: "#f42710"}}  /></button></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Dress</td>
            <td><img src="" alt="" /></td>
            <td>$199</td>
            <td><button style={{ border: '1px solid #f42710' }}><FontAwesomeIcon icon={faTrash } style={{color: "#f42710"}}  /></button></td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="col-md-4 d-flex justify-content-center">
      <div className="border shadow p-4 mt-5">
        <h3 className="text-primary text-center">Cart Summary</h3>
        <h4 className='mt-3'>Total Number of items : 3</h4>
        <h4>Total Price :$ 800</h4>
        <button className='btn btn-success w-100 mt-3'> CheckOut</button>
      </div>
    </div>
    <div className="col-md-1"></div>

    

    </div>
    <div style={{width:"100%", height:"70vh", display:'flex', justifyContent:'center', alignItems:"center", flexDirection:'column' }}>
    <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png" alt="" />
    <button className='btn btn-primary mt-4'> <FontAwesomeIcon icon={faArrowLeft} className='me-2'/>  Back to home</button>
    </div>
    </>
  );
}

export default Cart;  
