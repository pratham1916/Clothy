import { useEffect, useState, } from 'react'
import { getWoMensData, getWomansData } from '../Redux/action';
import { getData, } from '../Redux/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard';
import "../style/Womens.css"

function Womens() {
  const dispatch = useDispatch();
  const { totalWoMens } = useSelector(state => state.womens);
  const [page, setPage] = useState(1);
  const array = new Array(Math.ceil(+totalWoMens / 12)).fill(0);
  const { womensData } = useSelector(state => state.womens);
  const { isloading } = useSelector(state => state.womens);
  const { isError } = useSelector(state => state.womens);
  useEffect(() => {
    dispatch(getWomansData(page));
  }, [page]);

  if (isloading) {
    return <h1>loading</h1>
  }
  if (isError) {
    return <h1>Error</h1>
  }
  return (
    <div className="womens-container">
      <div className="products-grid">
        {womensData.map((ele) => <ProductCard key={ele.id} ele={ele} ShowButton={"default"} />)}
      </div>
      <div className="pagination">
        {array.map((e, ind) => {
          return (
            <button className={`page-button ${page === ind + 1 ? 'active' : ''}`} key={ind + 1} onClick={() => setPage(ind + 1)}>{ind + 1}</button>
          )
        })}
      </div>
    </div>
  )
}

export default Womens;


