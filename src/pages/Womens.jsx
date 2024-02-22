import { useEffect, useState,  } from 'react'
import {  getWoMensData } from '../Redux/action';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard';

function Womens() {
  const {totalWoMens} = useSelector((state) => state.womens);
  const[page,setPage] = useState(1);
  const array = new Array(Math.ceil(+totalWoMens/10)).fill(0);
  const {womensData} = useSelector((state) => state.womens);
  const {isloading} = useSelector((state) => state.womens);
  const {isError} = useSelector((state) => state.womens);
  const dispatch = useDispatch()
  console.log(totalWoMens,"line 16")
  console.log(womensData,"line 14")
  console.log(array.length,"line 17")
    // const [data,setData] = useState([]);
    useEffect(()=>{
        dispatch(getWoMensData(page));
    },[page]);

    if(isloading){
      return <h1>loading</h1>
    }
    if(isError){
      return <h1>Error</h1>
    }
    if(womensData.length==0){
      return <h1 style={{margin:"auto",textAlign:"center"}}>no data found</h1>
    }
  return (
    <div style={{width:"100%"}}>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px",width:"100%",backgroundColor:"red"}}>
    {womensData.map((ele)=> <ProductCard key={ele.id} {...ele}/>)}
    
    </div>
    <div style={{width:"100%",display:'flex',justifyContent:"center",alignItems:"center",gap:"20px"}}>
        {array.map((e,ind)=>{
          return(
            <button  key={ind+1} onClick={()=> setPage(ind+1)} >{ind+1}</button>
          )
        })}
    </div>
    </div>
  )
}

export default Womens;


