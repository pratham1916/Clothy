import { useEffect, useState,  } from 'react'
import {  getWoMensData, getWomansData } from '../Redux/action';
import { getData, } from '../Redux/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard';

function Womens() {
  // womensData: [],
  // isLoading: false,
  // isError: false,
  // totalWoMens:0
  //womens:womensReducer,
  // const {totalMens} = useSelector((state) => state.mens);
  // const[page,setPage] = useState(1);
  // const array = new Array(Math.ceil(+totalMens/10)).fill(0);
  // const {mensData} = useSelector((state) => state.mens);
  // const {isloading} = useSelector((state) => state.mens);
  // const {isError} = useSelector((state) => state.mens);
  const dispatch = useDispatch();
     const{totalWoMens} = useSelector(state=>state.womens);
     const[page,setPage] = useState(1);
     const array = new Array(Math.ceil(+totalWoMens/12)).fill(0);
     const{womensData} = useSelector(state=>state.womens);
     const{isloading} = useSelector(state=>state.womens);
     const {isError} = useSelector(state=>state.womens);
    useEffect(()=>{
        dispatch( getWomansData(page));
    },[page]);

    if(isloading){
      return <h1>loading</h1>
    }
    if(isError){
      return <h1>Error</h1>
    }
  return (
    <div style={{width:"100%"}}>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px",width:"100%",backgroundColor:"red"}}>
    {womensData.map((ele)=> <ProductCard key={ele.id} ele= {ele}  ShowButton={"default"}/>)}
    
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


