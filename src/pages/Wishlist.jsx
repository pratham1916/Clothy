import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { getWishlists } from '../Redux/action';

const Wishlist = () => {
  const { wishlist } = useSelector(state => state.wishlist);
  console.log(wishlist);
  const dispatch = useDispatch()
  const login = useSelector(state => state.login);
  
  useEffect(() => {
    dispatch(getWishlists(login.users.id));
  }, []);
  
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px", width: "100%" }}>
        {wishlist.map((ele) => <ProductCard key={ele.id} ele={ele} ShowButton={"whishlist"} />)}

      </div>
    </div>
  )
}

export default Wishlist