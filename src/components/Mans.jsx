import React, { useEffect, useState } from 'react'
import { getData } from '../Redux/action';

function Mans() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        getData().then((res)=> setData(res));
    },[]);
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default Mans