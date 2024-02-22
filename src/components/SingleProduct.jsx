
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
function SingleProduct() {
    const [user, setUser] = useState({});

    const params = useParams();
    const location = useLocation();
    useEffect(() => {
      axios
        .get(`https://clothy-api.onrender.com/womens/${params.id}`)
        .then((res) => setUser(res.data))
        .catch((err) => {
          console.log("error here");
        });
    }, []);
  return (
    <div>
    <p>{params.id}</p>
    <p>{location.state}</p>
    <p>{location.pathname}</p>
    {JSON.stringify(user)}
    </div>
  )
}

export default SingleProduct