import React from 'react'
import Container from '../../component/Container'
import Catagorie1 from '../../assets/category-1.jpg'
import Catagorie2 from '../../assets/category-2.jpg'
import Catagorie3 from '../../assets/category-3.jpg'
import Catagorie4 from '../../assets/category-4.jpg'
import { Link } from 'react-router-dom'
import Image from '../../component/Image'
const Catagories = () => {
    let catagories=[
        {
            name:"Accessories",
            path:"accessories",
            img:Catagorie1
        },
        {
            name:"Dress" ,
            path:"dress",
            img:Catagorie2
        },
        {
            name:"Jewellery",
            path:"jewellery",
            img:Catagorie3
        },
        {
            name:"Cosmetics",
            path:"cosmetics",
            img:Catagorie4
        },
    ]
  return (
    <section className='pt-20'>
        <Container>
            <div className='flex flex-wrap gap-10 justify-center'>
                {
                    catagories.map(item=>(
                        <Link to={`/catagorie/${item.path}`}>
                           
                            <Image className='w-40 rounded-full' src={item.img}/>
                             <h1 className='text-center text-2xl font-bold'>{item.name}</h1>
                        </Link>
                    ))
                }
            </div>
        </Container>
    </section>
  )
}

export default Catagories