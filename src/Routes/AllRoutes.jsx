import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Mens from '../pages/Mens'
import Womens from '../pages/Womens'
import Accessories from '../pages/Accessories'
import Wishlist from '../pages/Wishlist'
import Cart from '../pages/Cart'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/mens' element={<Mens/>}></Route>
        <Route path='/womens' element={<Womens/>}></Route>
        <Route path='/accessories' element={<Accessories/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}></Route>
    </Routes>
  )
}

export default AllRoutes
