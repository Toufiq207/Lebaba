import React from 'react'
import Container from '../../component/Container'
import blogData from '../../data/blogs.json'
import Image from '../../component/Image';
const Blog = () => {
    // console.log(blogData);
    
  return (
    <section className='pt-[100px]'>
        <Container>
               <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold py-2  text-center">
        Latest From Blog
      </h1>
<p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal py-4 text-center w-full md:w-[600px] mx-auto"> Elevate your wardrobe with our freshest style tips, trends,
  and inspiration on our blog.</p>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12'>
    {
        blogData.map((item ,index)=>(
            // item.title
            <div key={index} className='cursor-pointer hover:scale-105 duration-300 '>
                <Image src={item.imageUrl}/>
                <h6 className='text-center text-red-400 text-base font-normal'>{item.subtitle}</h6>
                <h4 className='text-center text-black text-base font-bold
                '>{item.title}</h4>
                <p className='text-center text-black' text-base font-normal>{item.date}</p>
            </div>
        ))
    }
  </div>
        </Container>
    </section>
  )
}

export default Blog