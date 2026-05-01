import React, { useState } from 'react'
import Container from '../component/Container'
import  ProductCart  from './ProductCart'
import products from '../data/products.json'
// import { Link } from 'react-router-dom';
// import products from '../data/products.json'
const TrendingProduct = () => {
    const [visibleProducts, setVisibleProducts]=useState(8);
    let loadMoreProducts=()=>{
        setVisibleProducts(products.length)
    }
    let Products=()=>{
        setVisibleProducts(8)
    }
    
  return (
    <div>
        <Container className="pt-20">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold py-2 text-center">
        Trending Products
      </h1>
<p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal pb-4 text-center w-full md:w-[600px] mx-auto ">Discover the Hottest Picks: Elevate Your Style with Our Curated Collection of Trending Women's Fashion Products.</p>
       
       <ProductCart products={products.slice(0,visibleProducts)}/> 

       <div className='text-center'>
        {/* <Link to="/shop">
<button  className="inline-block py-2 px-5 bg-red-600 hover:bg-red-700 transition rounded-2xl text-white text-sm sm:text-base md:text-lg">EXPLORE NOW</button>
</Link> */}
{
  visibleProducts <  products .length ?
  
<button  onClick={loadMoreProducts}  className="inline-block py-2 px-5 bg-red-600 hover:bg-red-700 transition rounded-2xl text-white text-sm sm:text-base md:text-lg">Load More</button>

:
<button  onClick={Products}  className="inline-block py-2 px-5 bg-red-600 hover:bg-red-700 transition rounded-2xl text-white text-sm sm:text-base md:text-lg">back</button>
}

       </div>
        </Container> 
    </div>
  )
}

export default TrendingProduct

