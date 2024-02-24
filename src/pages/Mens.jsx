import { useEffect, useState,  } from 'react'
import { getData, } from '../Redux/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard';

function Mens() {
  const {totalMens} = useSelector((state) => state.mens);
  const[page,setPage] = useState(1);
  const array = new Array(Math.ceil(+totalMens/12)).fill(0);
  const {mensData} = useSelector((state) => state.mens);
  const {isloading} = useSelector((state) => state.mens);
  const {isError} = useSelector((state) => state.mens);
  const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getData(page));
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
    {mensData.map((ele)=> <ProductCard key={ele.id} ele= {ele}  ShowButton={"default"}   />)}
    
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

export default Mens

