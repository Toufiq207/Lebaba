import React from 'react'
import Container from './Container'
import instagram1 from '../assets/instagram-1.jpg'
import instagram2 from '../assets/instagram-2.jpg'
import instagram3 from '../assets/instagram-3.jpg'
import instagram4 from '../assets/instagram-4.jpg'
import instagram5 from '../assets/instagram-5.jpg'
import instagram6 from '../assets/instagram-6.jpg'
import Image from './Image'
const Footer = () => {
  return (
    <footer className='pt-[100px] px-2'>
        <Container >
     <div className='flex flex-wrap justify-between w-full'>
           <div className='flex flex-col gap-2'>
            <h4 className='text-xl font-bold'>CONTACT INFO</h4>
            <p className='text-xl font-normal '> <span><i className="ri-map-pin-2-fill text-red-500 mr-2"></i></span>123,London Bridge Streed,London</p>
            <p className='text-xl font-normal '><span><i className="ri-mail-fill  text-red-500 mr-2"></i></span>sport@lebaba.com</p>
            <p className='text-xl font-normal '><span><i class="ri-phone-fill text-red-500 mr-2"></i></span>01609697207</p>
        </div>
        <div className='flex flex-col gap-2'>
            <h4 className='text-xl font-bold'>COMPANY</h4>
            {/* <p className='text-xl font-normal '> <span><i className="ri-map-pin-2-fill text-red-500 mr-2"></i></span>123,London Bridge Streed,Londo</p>
            <p className='text-xl font-normal '><span><i className="ri-mail-fill  text-red-500 mr-2"></i></span>sport@lebaba.com</p>
            <p className='text-xl font-normal '><span><i class="ri-phone-fill text-red-500 mr-2"></i></span>01609697207</p> */}
            <a href="/">Home</a>
            <a href="/">About Us</a>
            <a href="/">Work With Us</a>
            <a href="/">Our Blogs</a>
            <a href="/">Tearm & Condition</a>
        </div>
        <div className='flex flex-col gap-2'>
            <h4 className='text-xl font-bold'>USEFULL LINK</h4>
            {/* <p className='text-xl font-normal '> <span><i className="ri-map-pin-2-fill text-red-500 mr-2"></i></span>123,London Bridge Streed,Londo</p>
            <p className='text-xl font-normal '><span><i className="ri-mail-fill  text-red-500 mr-2"></i></span>sport@lebaba.com</p>
            <p className='text-xl font-normal '><span><i class="ri-phone-fill text-red-500 mr-2"></i></span>01609697207</p> */}
            <a href="/">Help</a>
            <a href="/">Track your order</a>
            <a href="/">Men</a>
            <a href="/">Wemen</a>
            <a href="/">Dresses</a>
        </div>
        <div className='flex flex-col gap-2'>
            <h4 className='text-xl font-bold pb-2'>INTAGRAM</h4>
            {/* <p className='text-xl font-normal '> <span><i className="ri-map-pin-2-fill text-red-500 mr-2"></i></span>123,London Bridge Streed,Londo</p>
            <p className='text-xl font-normal '><span><i className="ri-mail-fill  text-red-500 mr-2"></i></span>sport@lebaba.com</p>
            <p className='text-xl font-normal '><span><i class="ri-phone-fill text-red-500 mr-2"></i></span>01609697207</p> */}
            {/* <a href="/">Help</a>
            <a href="/">Track your order</a>
            <a href="/">Men</a>
            <a href="/">Wemen</a>
            <a href="/">Dresses</a> */}
            <div className='grid grid-cols-3 gap-4'>
                <Image src={instagram1} className='w-[70px]'/>
                <Image src={instagram2} className='w-[70px]'/>
                <Image src={instagram3} className='w-[70px]'/>
                <Image src={instagram4} className='w-[70px]'/>
                <Image src={instagram5} className='w-[70px]'/>
                <Image src={instagram6} className='w-[70px]'/>
            </div>
        </div>
     </div>
        <div className='pt-8'>
            <p className='text-center'>Copyright © 2025 by Lebaba. All rights reserved. </p>
        </div>
        </Container>
    </footer>
  )
}

export default Footer