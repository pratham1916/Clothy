import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { addToCart, addToWhiteList } from '../Redux/action';
import "../style/ProductCard.css"
import StarRating from './StarRating';

function ProductCard({ele,ShowButton}) {
  const {category,color,currency,description,id,imageURL,name,price,rating,size,stock}=ele;
  let user = JSON.parse(localStorage.getItem("Users"))||{};
  const login = useSelector(state=>state.login);
  const dispatch = useDispatch()
      const location = useLocation();
      console.log(location)
    const navigate = useNavigate();
      function handleClick(){
        navigate(`${location.pathname}/${+ele.id}`,{
          state:{data:{...ele,userId:user.id},pathname:location.pathname,user}
        })
      }

      function handleAddToCart(){
           if(!login.isAuth){
             alert("you need to login first");
             navigate("/login");
             return;
           }
         
        let obj={
          userId:+id,
          price,
          color,
          currency,
          category,
          description,
          name,
          rating,
          size,
          stock
        }
           dispatch(addToCart(obj,user.id));

      }

      function handleWhishList(){
        if(!login.isAuth){
          alert("you need to login first");
          return;
        }
      
     let obj={
       userId:id,
       price,
       color,
       currency,
       category,
       description,
       name,
       rating,
       size,
       stock
     } 

       dispatch(addToWhiteList(obj,user.id))
      }
  return (
    <div onClick={handleClick}  className="product-card">
      <img src={imageURL} alt="" />
      <h1 className="product-detail">{name}</h1>
      <p className="product-detail">{description}</p>
      <div className="category-rating">
        <p className="product-detail"><b>Category:</b> {category}</p>
        <p className="product-detail"><StarRating rating={rating} /></p>
      </div>
      <div className="price-button">
        <p className="product-detail"><b>Price:</b> ${price}</p>
        <div className="button-container">
        { ShowButton=="default"||ShowButton=="whishlist"?(<button className="action-button"  onClick={(e) => { e.stopPropagation(); handleAddToCart() }}><i class="fa-solid fa-cart-shopping"></i></button>):""}
        {  ShowButton=="default"||ShowButton=="cart"? (<button className="action-button"   onClick={(e) => { e.stopPropagation(); handleWhishList() }}><i class="fa-solid fa-heart"></i></button>):""}
         </div>
        </div>

        </div>
     
   
  )
}

export default ProductCard;

 