import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { getWishlists } from '../Redux/action';

const Wishlist = () => {

  const {whitelist} = useSelector(state=>state.whitelist);
  const {isloading} = useSelector(state=>state.whitelist);
  const {isError} = useSelector(state=>state.whitelist);
  const dispatch=useDispatch()
let user = JSON.parse(localStorage.getItem("Users"))||{};
console.log(user," user data")
 const login = useSelector(state=>state.login);
 console.log(login,"line 7")
   useEffect(()=>{
    
     dispatch(getWishlists(user.id));
   },[]);
   if (isloading) {
    return <h1>loading</h1>
  }
  if (isError) {
    return <h1>Error</h1>
  }
  return (
    <div style={{width:"100%"}}>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px",width:"100%"}}>
    {whitelist.map((ele)=> <ProductCard key={ele.id} ele= {ele} ShowButton={"whishlist"} />)}
    
    </div>
   
    </div>
  )
}

export default Wishlist

// <div>
// {JSON.stringify(whitelist.whitelist)}
// </div>
