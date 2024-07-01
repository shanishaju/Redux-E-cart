import './bootstrap.min.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
   <Footer/>
   </>
  )
}

export default App
