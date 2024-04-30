import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMensData } from '../Redux/action';
import ProductCard from '../components/ProductCard';
import { Spinner } from '@chakra-ui/react';
import "../style/Mens.css";
import image1 from "../assets/image4.jpg"
import image2 from "../assets/image3.jpg"
import image3 from "../assets/image2.jpg"

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
