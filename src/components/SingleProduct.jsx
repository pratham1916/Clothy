
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
function SingleProduct() {


    const params = useParams();
    const location = useLocation();
    
    console.log(params)
    console.log(location.state.data)
    console.log(location.state.user)
    // useEffect(() => {
    //   axios
    //     .get(`https://clothy-api.onrender.com/womens/${params.id}`)
    //     .then((res) => setUser(res.data))
    //     .catch((err) => {
    //       console.log("error here");
    //     });
    // }, []);

      async function buyProduct(){
        let res = await axios.post(`https://clothy-api.onrender.com/ordered`,{...location.state.data,...location.state.user});
        console.log(res.data,"ordered")
      }

  return (
    <div>
    <p>"category":{location.state.data.category}</p>
        <p>"color":{location.state.data.color}</p>
        <p>"currency":{location.state.data.currency}</p>
        <p>"id":{location.state.data.id}</p>
        <p>"name":{location.state.data.name}</p>
        <p>"price":{location.state.data.price}</p>
        <p>"rating":{location.state.data.rating}</p>
        <p>"size":{location.state.data.size}</p>
        <p>"stock":{location.state.data.stock}</p>
        <p>"userId":{location.state.data.userId}</p>
        <button onClick={buyProduct}> buy product</button>
    </div>
  )
}

export default SingleProduct