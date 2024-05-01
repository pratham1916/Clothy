import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMensData } from '../Redux/action';
import ProductCard from '../components/ProductCard';
import { Spinner } from '@chakra-ui/react';
import "../style/Mens.css";

function Mens() {
  const dispatch = useDispatch();
  const { totalMens, mensData, isloading, isError } = useSelector(state => state.mens);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const totalPages = Math.ceil(totalMens / 12);
  const array = Array.from({ length: totalPages }, (_, index) => index + 1);

  useEffect(() => {
    dispatch(getMensData(page, filter, sort));
  }, [page, filter, sort, dispatch]);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const handleFilterChange = (e) => setFilter(e.target.value);
  const handleSortChange = (e) => setSort(e.target.value);

  if (isloading) return <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />;
  if (isError) return <h1>Error</h1>;

  return (
    <div className="Mens-container">
      <div className="filter-sort-container">
        <select value={filter} onChange={handleFilterChange}>
          <option value="">All Categories</option>
          <option value="shirts">Shirts</option>
          <option value="pants">Pants</option>
          <option value="accessories">Accessories</option>
        </select>
        <select value={sort} onChange={handleSortChange}>
          <option value="">Default</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
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
