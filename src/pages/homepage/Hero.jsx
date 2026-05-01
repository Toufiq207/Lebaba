import React from 'react'
import Container from '../../component/Container'

import Card1 from '../../assets/card-1.png'
import Card2 from '../../assets/card-2.png'
import Card3 from '../../assets/card-3.png'
import Image from '../../component/Image'

let cards=[
    {
        id: 1,
        img:Card1,
        trend:"2024 Trend",
        title:"Wemans Shirt"
    },
    {
        id: 2,
        img:Card2,
        trend:"2024 Trend",
        title:"Wemans Dress"
    },
    {
        id: 3,
        img:Card3,
        trend:"2024 Trend",
        title:"Wemans Casual"
    },
]
const Hero = () => {
  return (
    <section className='pt-20'>
        <Container>
          <div className='flex flex-wrap gap-2 justify-center'>
             {
            cards.map((item)=>(
            <div className='relative'>
                  <div key={item.id}>
                    <Image className="w-[400px]" src={item.img}/>

                    <div className='absolute z-30 bottom-12 left-45'>
                        <p className='text-sm text-red-500 font-semibold pb-3'>{item.trend}</p>
                        <h4 className='text-xl text-black font-bold pb-2'>{item.title}</h4>
                        <a className='text-sm text-blue-500 font-normal ' href="#">Dicover More</a>
                    </div>
            </div>
                </div>
                
            ))
           }
          </div>
        </Container>
    </section>
  )
}

export default Hero