import React from 'react'
import Container from '../../component/Container'
import BannerImg from '../../assets/header.png'
import Image from '../../component/Image'
import { Link } from 'react-router-dom'
const Banner = () => {
  return (
    // <section>
    //   <Container className='bg-primary-light grid-cols-2 flex items-center justify-center'>
    //     {/* <h1 className='bg-primary-light'>kkkkkkkkkk</h1> */}
    //     {/* <Image src={BannerImg}/> */}
    // <div  className='w-[600px] mr-auto '>
    //       <h4 className='text-2xl font-medium'>UP TO 20% Discount on</h4>
    //     <h1 className='text-4xl font-bold py-2'> Girl's Fashion</h1>
    //     <p className='text-xl font-normal pb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia praesentium quidem sed, eius repudiandae ex illum rerum tenetur ipsam consectetur quaerat deleniti, aperiam et, excepturi nisi ducimus laudantium in corrupti.</p>
    //     <button className='py-2 px-4 bg-red-600 rounded-2xl text-white text-2xl'><Link to='/shop'>EXPLORE NOW</Link></button>
    // </div>
    // <div className="relative h-full">

    //   <Image src={BannerImg}/> 
    // </div>
    //   </Container>
    // </section>
    <section>
  <Container className="bg-primary-light grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 py-10 md:py-20">

    {/* Left Content */}
    <div className="max-w-[600px] mx-auto md:mx-0 text-center md:text-left ">
      <h4 className="text-lg sm:text-xl md:text-2xl font-medium text-red-400">
        UP TO 20% Discount on
      </h4>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold py-2">
        Girl's Fashion
      </h1>

      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal pb-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo recusandae accusamus deserunt accusantium ipsum, obcaecati error sequi ad eveniet quisquam, perferendis laborum ducimus enim corrupti quibusdam dolores rerum. Nesciunt?
      </p>
<Link to="/shop">
<button  className="inline-block py-2 px-5 bg-red-600 hover:bg-red-700 transition rounded-2xl text-white text-sm sm:text-base md:text-lg">EXPLORE NOW</button>
</Link>
      {/* <Link
  
        className="inline-block py-2 px-5 bg-red-600 hover:bg-red-700 transition rounded-2xl text-white text-sm sm:text-base md:text-lg"
      >
        EXPLORE NOW
      </Link> */}
    </div>

    {/* Right Image */}
    <div className="relative flex justify-center">
      <Image
        src={BannerImg}
        className="w-[250px] sm:w-[350px] md:w-full max-w-[500px]"
      />
    </div>

  </Container>



  
</section>
  )
}

export default Banner