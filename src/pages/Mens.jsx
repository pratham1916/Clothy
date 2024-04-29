import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMensData } from '../Redux/action';
import ProductCard from '../components/ProductCard';
import "../style/Mens.css";
import { Spinner } from '@chakra-ui/react';

function Mens() {
  const dispatch = useDispatch();
  const { totalMens, mensData, isloading, isError } = useSelector(state => state.mens);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(totalMens / 12);
  const array = Array.from({ length: totalPages }, (_, index) => index + 1);

  useEffect(() => {
    dispatch(getMensData(page));
  }, [page, dispatch]);

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
    <div className="Mens-container">
      <div className="hero-image">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="filter-button">Filter</button>
        <select className="sort-select">
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
        </select>
      </div>
      <div className="products-grid">
        {mensData.map(ele => (
          <ProductCard key={ele.id} ele={ele} ShowButton="default" />
        ))}
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
  );
}

export default Mens;
