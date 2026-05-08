import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import CartModel from '../shop/CartModel'
import Container from '../component/Container'
import { decrement, increment, removeAll, removeItem } from '../slice/cartSlice'

// import productData from '../../src/data/products.json'
// import Image from '../component/Image'
const Navber = () => {

const dispatch= useDispatch()
const [total,setTotal]=useState(0)
const [products,setProducts]=useState(0)
    const [iscartOpen, setIscartOpen]=useState(false)
    const [ismenu,setIsmenu]=useState(false)

    const data=useSelector((state)=>state.cart.value)
    // console.log(data);
    

     const {  grandTotal,  taxRate,  tax } = useSelector(
    (state) => state.addToCart
  );

// console.log(selectedItems);


const handleOpen=()=>{
    setIscartOpen(!iscartOpen)
}
const handleIncrement=(item)=>{
    // setIscartOpen(!iscartOpen)
    dispatch(increment(item))
    
}
const handleDecrement=(item)=>{
    // setIscartOpen(!iscartOpen)
    dispatch(decrement(item))
    
}
const handleRemoveAll=()=>{

    dispatch(removeAll())
}


useEffect(()=>{
       let total=0
data.map(item=>{
     total+=item.price*item.quantity

    
    
})
   setTotal(total);
},[data])

useEffect(()=>{
       let products=0
data.map(item=>{
     products+=item.quantity

    
    
})
   setProducts(products);
   
},[data])

const handleRemoveItem=(item)=>{
    dispatch(removeItem(item))
    
}
const handelemenu=()=>{
    setIsmenu(!ismenu)
}

  return (

  <section className='fixed py-[20px] w-full z-50'>
     <Container >
        <header className=' relative'>
<nav className='max-w-screen-2xl  mx-auto px-4 flex items-center justify-between '>
    <div className='md:block hidden'>
        <ul className='flex items-center  gap-2'>
        <Link to="/"><li className='hover:text-primary'>Home</li></Link>
       <Link to="/shop"> <li className='hover:text-primary'>Shop</li></Link>
       <Link to="/pages"> <li className='hover:text-primary'>Page</li></Link>
        <Link to="/contact"><li className='hover:text-primary'>Contact</li></Link>
    </ul>
    </div>
<div className='block md:hidden' >
    
    {
ismenu ?<i onClick={ handelemenu} className="ri-close-large-fill"></i>: <i onClick={ handelemenu} className="ri-bar-chart-horizontal-fill">
        
        
        </i>
    }

    {
ismenu &&
<div className='flex justify-center items-center bg-white py-4 px-4 gap-2 rounded-md absolute left-7 top-16'>
<ul className='flex flex-col items-center  gap-2'>
        <Link to="/"><li className='hover:text-primary'>Home</li></Link>
       <Link to="/shop"> <li className='hover:text-primary'>Shop</li></Link>
       <Link to="/pages"> <li className='hover:text-primary'>Page</li></Link>
        <Link to="/contact"><li className='hover:text-primary'>Contact</li></Link>
    </ul>

</div>
}
   </div >

 
    {/* logo */}
    <div className="text-2xl hover:text-primary font-extrabold text-[var(--text-dark)] font-[var(--header-font)]">
        <Link to="/">Lebaba <span>.</span></Link>
    </div>
    {/* nav Icon */}
    <div className='flex items-center justify-end gap-2 relative'>
        <span className=' hover:text-primary '><Link to='/search'><i className="ri-search-line"></i></Link></span>
        <span>
            <button onClick={handleOpen} className='hover:text-primary'><i className="ri-shopping-bag-line"></i></button>
            <sup className='text-sm text-white inline-block px-1.5 rounded-full bg-primary text-center'>{products}</sup>
        </span>
        <span className='hover:text-primary'>
            <Link to='login'><i className="ri-user-line"></i></Link>
        </span>
    </div>
</nav>
{
    iscartOpen &&
  
      <div className='z-30 h-screen md:w-1/3 w-full    bg-amber-800 pr-0 absolute right-0 '>

<div className='flex justify-between items-center'>

    <h4 className='pl-4 mt-4 text-xl font-semibold'>Your Cart</h4>
<div className='mr-2'>
    <button onClick={handleOpen} className='text-gray-600 hover:text-gray-900 bg-black'><i className="ri-close-large-line text-white py-2 px-3 "></i></button>
</div>

</div>

<div>



    <ul className='flex justify-between px-3 py-3 border border-black text-xl font-semibold'>
    <li>Action:</li>
        <li>Product:</li>
        <li>Price:</li>
        <li>Quantity:</li>
        <li>Subtotal:</li>
    </ul>
       
          <div className='flex flex-col gap-2'>

               {
               data.length>0 ?

               <>
               {
                 data.map(item=>(
                    <ul className='flex justify-between items-center px-3 py-3 border border-black cursor-pointer'>
                   <li><button className='text-red-400 hover:text-red-700 text-sm' onClick={()=>handleRemoveItem(item)}>Remove</button></li>
                    <li>{item.name}</li>

                    {/* <Image className='w-[40px]' src={item.image}/> */}
                  
                    <li className='flex border border-black py-2 px-8 gap-x-3'>
                        <span onClick={()=>handleDecrement(item)}>-</span>
                         <span>{item.quantity}</span>
                        <span onClick={()=>handleIncrement(item)}>+</span>
                    </li>
                      <li>${item.price}</li>
                      <li>${item.price*item.quantity}</li>
                    </ul>
                ))
               }

               {/* <div className='flex justify-center gap-2 pt-4'>

                <button  className="inline-block py-2 px-5 bg-red-600 hover:bg-red-700 transition rounded-2xl text-white text-sm sm:text-base md:text-lg">Clear Cart</button>
                <button  className="inline-block py-2 px-5 bg-red-600 hover:bg-red-700 transition rounded-2xl text-white text-sm sm:text-base md:text-lg">Checkout</button>
               </div> */}
               </>
               :
               <h1 className='text-4xl font-bold text-black text-center pt-[20px]'>Card is Empty</h1>
                
             }
          </div>

         <div className='bg-primary-light flex flex-col gap-3 py-4 mt-4'>
            <h4 className='text-xl font-semibold'>OrderSummary</h4>
               <p className='text-xl font-normal'>SelectItem :{products}</p>
              <p className='font-bold  text-xl'>Total:${total}</p>

              {/* <p className='text-xl font-normal'>Tax ({taxRate * 100}%): ${tax.toFixed(2)}</p>
              <h3 className='font-bold text-xl'>GrandTotal: ${grandTotal.toFixed(2)}</h3> */}

     
                <div className="flex flex-col gap-3 items-start ">
  <button onClick={handleRemoveAll} className="py-2 px-5 bg-red-600 hover:bg-red-700 transition rounded-2xl text-white text-sm sm:text-base md:text-lg">
<span className='mr-2'> Clear Cart</span> <i className="ri-delete-bin-line"></i>
  </button>

  <button className="py-2 px-5 bg-green-600 hover:bg-green-700 transition rounded-2xl text-white text-sm sm:text-base md:text-lg">
 <span className='mr-2'>  Proceed Checkout </span><i class="ri-bank-card-2-line"></i>
  </button>
     </div>
         </div>
</div>
  
        
    </div>
 
}
    </header>
</Container>
  </section>

   

  )
}

export default Navber