import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCarts } from '../Redux/action';
import ProductCard from '../components/ProductCard';
const Cart = () => {
  const {cart} = useSelector(state=>state.cart);
      const dispatch=useDispatch()
    let user = JSON.parse(localStorage.getItem("Users"))||{};
    console.log(user," user data")
     const login = useSelector(state=>state.login);
     console.log(login,"line 7")
       useEffect(()=>{
        
         dispatch(getCarts(user.id));
       },[]);
      
  return (
    <div style={{width:"100%"}}>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px",width:"100%",backgroundColor:"red"}}>
    {cart.map((ele)=> <ProductCard key={ele.id} ele= {ele} ShowButton={"cart"} />)}
    <h1>totoal</h1>
    <div></div>
    </div>
   
    </div>
  )
}

export default Cart
