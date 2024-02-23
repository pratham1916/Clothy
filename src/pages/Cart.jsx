import React, { useEffect } from 'react'

import { useSelector } from 'react-redux';
const Cart = () => {
    let user = JSON.parse(localStorage.getItem("Users"))||[];
     const{isAuth} = useSelector(state=>state.login);
     console.log(isAuth,"line 7")
       useEffect(()=>{
           
       },[]);
    
  return (
    <div>
      
    </div>
  )
}

export default Cart
