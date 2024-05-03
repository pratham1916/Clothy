import { useEffect, useState, } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard';
import { getAllWomensData, getWomensData } from '../Redux/action';

function Womens() {
  const dispatch = useDispatch();
  const { totalWoMens, womensData, AllData} = useSelector(state => state.womens);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(totalWoMens / 12);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const array = Array.from({ length: totalPages }, (_, index) => index + 1);
  
  useEffect(() => {
    dispatch(getWomensData(page,filter,sort));
  }, [page,dispatch,filter, sort]);

  useEffect(() => {
    dispatch(getAllWomensData())
  }, []);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const uniqueCategories = [...new Set(AllData.map(item => item.category))]
  
  const handleFilterChange = (e) => setFilter(e.target.value);
  const handleSortChange = (e) => setSort(e.target.value);

  return (
    <div className="womens-container">
      <div className="filter-sort-container">
        <select value={filter} onChange={handleFilterChange}>
          <option value="">All Categories</option>
          {uniqueCategories.map(category => <option key={category} value={category}>{category}</option> )}
        </select>
        <select value={sort} onChange={handleSortChange}>
          <option value="">Default</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
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


