import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { addToCart, addToWhiteList } from '../Redux/action';

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
      { ShowButton=="default"||ShowButton=="whishlist"?(<button  onClick={(e) => { e.stopPropagation(); handleAddToCart() }}>Add to Cart</button>):""}
       {  ShowButton=="default"||ShowButton=="cart"? (<button  onClick={(e) => { e.stopPropagation(); handleWhishList() }}>Add to while list</button>):""}
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