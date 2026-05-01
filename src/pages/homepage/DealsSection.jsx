import React from 'react'
import Container from '../../component/Container'
import DealsImg from '../../assets/deals.png'
import Image from '../../component/Image'
const DealsSection = () => {
  return (
      <section className='py-10 md:py-16 lg:py-20'>
      <Container className='bg-primary-light py-6 md:py-10 px-4 rounded-xl'>
        
        <div className='flex flex-col lg:flex-row items-center gap-8'>
          
          {/* Image */}
          <div className='w-full lg:w-1/2'>
            <Image src={DealsImg} className='w-full h-auto object-cover' />
          </div>

          {/* Content */}
          <div className='w-full lg:w-1/2 text-center lg:text-left'>
            
            <h4 className="text-base sm:text-lg md:text-xl font-medium text-red-400">
              Get UP TO 20% Discount
            </h4>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold py-2">
              Deals of this Month
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal pb-4">
              Our Women's Fashion Deals of the Month are here to make your style dreams a reality without breaking the bank. Discover a curated collection of exquisite clothing, accessories, and footwear, all handpicked to elevate your wardrobe.
            </p>

            {/* Timer */}
            <div className='flex flex-wrap justify-center lg:justify-start gap-3 pt-4'>
              
              <div className='bg-white rounded-full flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-[100px] md:h-[100px]'>
                <h4 className="text-lg md:text-xl font-bold">14</h4>
                <p className="text-xs md:text-sm">Days</p>
              </div>

              <div className='bg-white rounded-full flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-[100px] md:h-[100px]'>
                <h4 className="text-lg md:text-xl font-bold">20</h4>
                <p className="text-xs md:text-sm">Hours</p>
              </div>

              <div className='bg-white rounded-full flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-[100px] md:h-[100px]'>
                <h4 className="text-lg md:text-xl font-bold">15</h4>
                <p className="text-xs md:text-sm">Mins</p>
              </div>

              <div className='bg-white rounded-full flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-[100px] md:h-[100px]'>
                <h4 className="text-lg md:text-xl font-bold">05</h4>
                <p className="text-xs md:text-sm">Secs</p>
              </div>

            </div>

          </div>
        </div>

      </Container>
    </section>
  )
}

export default DealsSection