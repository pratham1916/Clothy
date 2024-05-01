import { useEffect, useState, } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard';
import "../style/Womens.css"
import { getWomensData } from '../Redux/action';

function Womens() {
  const dispatch = useDispatch();
  const { totalWoMens, womensData,isloading,isError} = useSelector(state => state.womens);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(totalWoMens / 12);
  const array = Array.from({ length: totalPages }, (_, index) => index + 1);
  
  useEffect(() => {
    dispatch(getWomensData(page));
  }, [page]);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  if (isloading) return <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />;
  if (isError) return <h1>Error</h1>;

  return (
    <div className="womens-container">
      <div className="products-grid">
        {womensData.map((ele) => <ProductCard key={ele.id} ele={ele} ShowButton={"default"} />)}
      </div>
      <div className="pagination">
        {array.map(number => (
          <button
            className={`page-button ${page === number ? 'active' : ''}`}
            key={number}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Womens;


