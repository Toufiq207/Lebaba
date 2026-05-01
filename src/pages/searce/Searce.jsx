import React, { useState } from 'react'
import Container from '../../component/Container'
import products from '../../data/products.json'
import ProductCart from '../../shop/ProductCart'
const Searce = () => {
const [searchQuery,setSearchQuery]=useState('')
      const [fillterproduct,setFillterproduct]=useState(products);

      const handleSearch=(e)=>{
const query=searchQuery.toLowerCase();


const fillter=products.filter(product=>product.name.toLowerCase().includes(query) ||
product.category.toLowerCase().includes(query) ||
product.description.toLowerCase().includes(query) 

) 
setFillterproduct(fillter)
      }
  return (
    <section>
        <Container>
            <div className='w-full py-[100px] bg-primary-light'>
      <h2 className=' font-bold text-4xl text-center capitalize'>Search Products</h2>
    <p className='text-center text-2xl w-full md:w-[600px] mx-auto pt-2'>Browse a diverse range of categories, from chic dresses to versatile accessories. Elevate your style today!</p>

</div>
<div className='pt-2 flex flex-wrap justify-center gap-2'>
    <input type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className='w-full max-w-4xl border border-black py-2 rounded-2xl' placeholder='Searce for Product.....'/>
<button onClick={handleSearch} className="inline-block py-2 px-5 bg-red-600 hover:bg-red-700 transition rounded-2xl text-white text-sm sm:text-base md:text-lg">Search</button>
</div>
<div className='pt-4'>
    <ProductCart products={fillterproduct}/>
</div>
        </Container>
    </section>
  )
}

export default Searce