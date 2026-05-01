import React from 'react'
import Container from '../../component/Container'

const PromoBanner = () => {
  return (
    <section>
        <Container >
           <div className='flex flex-wrap justify-center gap-3 '>
            <div className=' w-[350px]'>
                <span  className="flex items-center justify-center"><i className="ri-truck-line text-red-500 text-5xl  py-2"></i></span>
                
                  <h4 className='text-center text-xl  font-bold'>Free Delivery</h4>
                 <p className='text-center text-xl text-sm font-semibold'>Offers convenience and the ability to shop from anywhere, anytime.</p>
            </div> 
            <div className=' w-[350px]'>
                     <span className="flex items-center justify-center"><i className='ri-money-dollar-circle-line  text-red-500 text-5xl py-2'></i></span>
                      <h4 className='text-center text-xl font-bold'>100% Money Back Guaranty</h4>
                        <p className='text-center text-xl font-semibold'>E-commerce have a review system where customers can share feedback.</p>
            </div> 
            <div className='w-[350px]'>
                <span  className="flex items-center justify-center"><i className='ri-user-voice-fill  text-red-500 text-5xl py-2'></i></span>
                 <h4 className='text-center text-xl font-bold'>Strong Support</h4>
                <p className='text-center text-xl font-semibold'>Offer customer support services to assist customers with queries and issues.</p>
            </div> 
           </div>
        </Container>
    </section>
  )
}

export default PromoBanner