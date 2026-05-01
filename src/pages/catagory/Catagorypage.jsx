import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../../data/products.json'
import Container from '../../component/Container'
import ProductCart from '../../shop/ProductCart'
const Catagorypage = () => {
    const {catagorieName}=useParams()
    // console.log(catagorieName);
    const [fillterproduct,setFillterproduct]=useState([]);
    useEffect(()=>{
      const filtred=products.filter((product)=>product.category===catagorieName.toLocaleLowerCase());

      setFillterproduct(filtred)
    },[catagorieName]);
    


    useEffect(()=>{
  window.scrollTo({top:0})
    })
  return (
    <section>
      <Container >
<div className='w-full py-[100px] bg-primary-light'>
      <h2 className=' font-bold text-4xl text-center capitalize'>{catagorieName}</h2>
    <p className='text-center text-2xl w-full md:w-[600px] mx-auto pt-2'>Browse a diverse range of categories, from chic dresses to versatile accessories. Elevate your style today!</p>

</div>

<div className='pt-10'>

  <ProductCart products={fillterproduct}/>
</div>
      </Container>
    </section>
  )
}

export default Catagorypage