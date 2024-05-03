import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getWishlists } from '../Redux/action';
import SingleWishlist from '../components/SingleWishlist';
import cart_banner from "../assets/cart_banner.jpg"

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist.data);
  console.log(wishlist);
  const dispatch = useDispatch()
  const login = useSelector(state => state.login);
  const [toggle, setToggle] = useState(false)
  
  useEffect(() => {
    dispatch(getWishlists(login.users.id));
  }, [toggle]);
  
  return (
    <div className='cart-container'>
      <div className="wishlist-banner"></div>
      {wishlist.length === 0 ? (
        <div className='not-found'><i className="fa-solid fa-heart wishlist-icon"></i><h1>Your Wishlist is Empty</h1></div>
      ) : (<div >
        <section id="cart" class="section-p1">
          <table width="100%" >
            <thead >
              <tr>  
                <td>Remove</td>
                <td>Image</td>
                <td>Product</td>
                <td>Price</td>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((ele) => <SingleWishlist key={ele.id} ele={ele} setToggle={setToggle} state={toggle} />)}
            </tbody>
          </table>
        </section>
      </div>)
      }
    </div>
  )
}

export default Wishlist