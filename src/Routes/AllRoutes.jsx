import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Mens from '../pages/Mens'
import Womens from '../pages/Womens'
import Accessories from '../pages/Accessories'
import Wishlist from '../pages/Wishlist'
import Cart from '../pages/Cart'
import Login from '../components/Login'
import Register from '../components/Register'

const AllRoutes = () => {
  return (
    <div style={{marginTop:"80px"}}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/mens' element={<Mens />}></Route>
        <Route path='/womens' element={<Womens />}></Route>
        <Route path='/accessories' element={<Accessories />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/wishlist' element={<Wishlist />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
