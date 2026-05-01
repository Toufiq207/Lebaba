import React from 'react'
import Container from '../component/Container'

import { Link } from 'react-router-dom'
import Image from '../component/Image'
import RatingStar from '../component/RatingStar'
import { useDispatch } from 'react-redux'

import { cart } from '../slice/cartSlice'

const ProductCart = ({products}) => {

  const dispatch=useDispatch()


  const handleaddToCart=(product)=>{

 
 dispatch(cart({
    name: product.name,
    price: product.price,
    image: product.image,
    quantity:1
  }));

  }


  return (
    <div>
           <Container>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        
        {products.map((item) => (
          <div className=' relative' key={item.id}>
            <Link to={`/shop/${item.id}`}>
              <Image
                className='max-h-96 md:h-64 w-full hover:scale-105 duration-300'
                src={item.image}
              />
            </Link>
            <div className='absolute top-3 right-3'>
                <button onClick={(e)=>{ e.stopPropagation(); handleaddToCart(item)}} className='bg-'><i className="ri-shopping-cart-2-line bg-primary-dark text-white hover:bg-red-700 p-2"></i></button>
            </div>
            <div >
                <h4 className='text-xl text-center font-bold'>{item.name}</h4>
                <p  className='text-xl text-center font-medium'>${item.price} {item.oldPrice ? <del><span>$</span>{item.oldPrice} </del>:null}</p>
            </div>
            <RatingStar rating={item.rating}/>
            
          </div>
        ))}

      </div>
    </Container>
        </div>
  )
}

export default ProductCart