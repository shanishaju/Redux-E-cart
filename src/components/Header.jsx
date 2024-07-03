import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';





function Header() {
  const cartListArray = useSelector((state)=>state.cartlistReducer);
  const wishListArray = useSelector((state)=>state.wishlistReducer);

  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="w-100" style={{top:'0px',position:'fixed',zIndex:'1'}}>
      <Container>
        <Link to={'/'} style={{textDecoration:'none'}}><Navbar.Brand ><FontAwesomeIcon icon={faCartShopping} bounce className='me-3' />E-Cart</Navbar.Brand></Link>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link  className='btn border rounded me-5 mt-2' >
              
              <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}><FontAwesomeIcon icon={faHeart} style={{color: "#ff3d3d",}} /> Wishlist<Badge bg="info" className='rounded ms-2'>{wishListArray?.length}</Badge></Link>
              
            </Nav.Link>

            <Nav.Link className='btn border rounded me-5 mt-2' >
              
              <Link to={'/cart'}  style={{textDecoration:'none',color:'white'}}><FontAwesomeIcon icon={faCartShopping} style={{color: "#FFD43B",}} /> Cart<Badge bg="info" className='rounded ms-2'>{cartListArray?.length}</Badge></Link>
            
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

export default Header