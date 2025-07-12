import { useEffect, useState } from 'react'
import './Products.css'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'
import LoadingBar from './LoadingBar'
import {authFetch} from '../CommonFunctions/authFetch';

function Products() {
  const [result ,setResult] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading , setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() =>{
     let progressInterval;
    //Progress bar
    progressInterval = setInterval(() => {
        setProgress((prev) =>{
          if (prev >= 90) return prev;
          return prev + 5;
        })
      }, 100);

    authFetch('https://localhost:7239/api/Auth/get-products')
    .then(async (res)=>{
      debugger
       var productResult = await res.json();
       return productResult;
    })
    .then((data)=>{
      debugger
      setResult(data.products);
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    })
    .catch((err)=>{
      console.log(err);
      setLoading(false)
    })

    return () => clearInterval(progressInterval);

  },[])

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
    {isLoading && <LoadingBar progress={progress}/>}
    <div className='Card-Container' style={{marginTop: "50px"}}>
      {result && result.map((data)=>{
        return(
          <ProductCard 
          product={data}
          handleCardClick={handleCardClick}
          key={data.id}
          />
        )
      })}
    </div>
    <ProductModal
      show={showModal}
      onHide={handleCloseModal}
      product={selectedProduct}
    />
    </>
  )
}

export default Products
