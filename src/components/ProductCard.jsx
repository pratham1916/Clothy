import React from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { addToCart } from '../Redux/action';

function ProductCard({category,color,currency,description,id,imageURL,name,price,rating,size,stock}) {
    const dispatch = useDispatch()
      const location = useLocation();
    const navigate = useNavigate();
      function handleClick(){
        navigate(`${location.pathname}/${id}`,{
          state:location.pathname
        })
      }

      function handleAddToCart(){
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
           dispatch(addToCart(obj));

      }
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"start",gap:"10px",backgroundColor:"black",zIndex:"0"}}
      onClick={handleClick}
    >
        <p>"category":{category}</p>
        <p>"color":{color}</p>
        <p>"currency":{currency}</p>
        <p>"id":{id}</p>
        <p>"name":{name}</p>
        <p>"price":{price}</p>
        <p>"rating":{rating}</p>
        <p>"size":{size}</p>
        <p>"stock":{stock}</p>
        <div style={{display:"flex",justifyContent:'center',alignItems:"center",gap:"10px",alignSelf:"center"}}>
        <button style={{zIndex:"2"}}  onClick={handleAddToCart}>Add to Cart</button>
        <button style={{zIndex:"2"}}>Add to while list</button>
        </div>
    </div>
  )
}

export default ProductCard;

 // const {mensData} = useSelector((state) => state.mens);
  //const{category,color,currency,description,id,imageURL,name,price,rating,size,stock}=data;
  //  const navigate = useNavigation();
  //  const params = useParams();
  //  console.log(params)
  //  console.log(location,"line 8")
  //  function handleNavigate(){
    //   navigate(`${location}/${id}`,{
      //     state:location
      //   })
      //  }
      //navigate("/new-route", { state: { key: "value" } });
// category
// : 
// "T-Shirts"
// color
// : 
// (3) ['Black', 'White', 'Grey']
// currency
// : 
// "USD"
// description
// : 
// "A classic cotton t-shirt perfect for everyday wear."
// id
// : 
// 1
// imageURL
// : 
// "https://placeholder.com/images/menswear/tshirt1.jpg"
// name
// : 
// "Classic Cotton T-Shirt"
// price
// : 
// 19.99
// rating
// : 
// 4.5
// size
// : 
// (4) ['S', 'M', 'L', 'XL']
// stock
// : 
// 100