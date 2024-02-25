import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCarts } from '../Redux/action';
import "../style/Cart.css"


import cart_banner from "../assets/cart_banner.jpg"
import SingleCart from '../components/SingleCart';
const Cart = () => {

  const { cart } = useSelector(state => state.cart);
  // console.log(cart);
  const [subtotals, setSubtotals] = useState({});
  const dispatch = useDispatch()
  let user = JSON.parse(localStorage.getItem("Users")) || {};
  const login = useSelector(state => state.login);



  useEffect(() => {

    dispatch(getCarts(user.id));
  }, []);

  const updateSubtotal = useCallback((id, subtotal) => {
    setSubtotals((prevSubtotals) => ({
      ...prevSubtotals,
      [id]: subtotal,
    }));
  }, []);

  const total = Object.values(subtotals).reduce((acc, curr) => acc + curr, 0);

  return (
    <div className='cart-container'>
      <img src={cart_banner} />
      {cart.length === 0 ? (
        <div className='not-found'><i className="fa-solid fa-cart-shopping"></i><h1>Your Cart is Empty</h1></div>
      ) : (<div >
        <section id="cart" class="section-p1">
          <table width="100%" >
            <thead >
              <tr>
                <td>Remove</td>
                <td>Image</td>
                <td>Product</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Subtotal</td>
              </tr>
            </thead>
            <tbody>
              {cart.map((ele) => <SingleCart key={ele.id} ele={ele} updateSubtotal={updateSubtotal} />)}
            </tbody>
          </table>
        </section>
        <section id="cart-add" class="section-p1">
          <div id="coupon">
            <h3>Apply Coupon</h3>
            <div>
              <input type="text" placeholder="Enter Your Coupon" />
              <button class="normal">Apply</button>
            </div>
          </div>

          <div id="subtotal">
            <h3>Cart Totals</h3>
            <table>
              <tbody>
                <tr>
                  <td>Cart Subtotal</td>
                  <td>${total.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <td><strong>Total</strong></td>
                  <td><strong>${total.toFixed(2)}</strong></td>
                </tr>
              </tbody>
            </table>
            <button className="normal">Proceed to checkout</button>
          </div>
        </section>

      </div>)
      }


    </div>
  )
}

export default Cart
