import React, { useEffect } from 'react'
import Container from "../../component/Container"
import { Link, useParams } from 'react-router-dom'
import ProductData from '../../data/products.json'
import Image from '../../component/Image'
import RatingStar from '../../component/RatingStar'
import Avatar from '../../assets/avatar.png'
import { useDispatch } from 'react-redux'
import { cart } from '../../slice/cartSlice'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react'
import { getDatabase, ref, set, push, onValue } from "firebase/database";
const SingleProduct = () => {
  const auth = getAuth();
    const db = getDatabase();
const [comment,setComment]=useState("")
const [allcomment,setAllcomment]=useState([])

const [user, setUser] = useState(null);

 const dispatch=useDispatch()
  let SingleProduct=useParams()

// console.log(SingleProduct);

// console.log(ProductData);

  useEffect(()=>{
window.scrollTo({top:0})

  },[])
  
    const handleaddToCart=(product)=>{
  
   
   dispatch(cart({
      name: product.name,
      price: product.price,
      image: product.image,
      quantity:1
    }));
  
    }
    const handleComent=(e)=>{
    setComment(e.target.value);
      
    }
    const handleSubmit=()=>{

 if(!comment){
  alert("Please enter comment ");
  
 }else{
   set(push(ref(db, `allcomment/${SingleProduct.id}`)), {
     name:comment
  }).then(()=>{
    // console.log("data gese");
    setComment("")
    
  })
 }
}

    

    useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return () => unsubscribe();
}, []);
   

useEffect(() => {
  const starCountRef = ref(db, `allcomment/${SingleProduct.id}`);

  onValue(starCountRef, (snapshot) => {
    const arr = [];

    snapshot.forEach(item => {
      arr.push(item.val());
    });

    setAllcomment([...arr].reverse());

  });

}, [SingleProduct.id]);
  
  return (
    <div>
      <Container>
        {
           ProductData.map(item=>{
            if(item.id==SingleProduct.id){
              return(
                <>
                     <div className='w-full py-[100px] bg-primary-light'>
          <h2 className='font-bold text-4xl text-center'>Single Product Page</h2>
          <div  className='flex justify-center pt-2 space-x-2'>

            <span className='hover:text-red-500'><Link to="/">Home</Link></span>
            <i className="ri-arrow-right-s-line"></i>
            <span className='hover:text-red-500'><Link to="/shop">Shop</Link></span>
            <i className="ri-arrow-right-s-line"></i>
            <span className='hover:text-red-500'>{item.name}</span>
          </div>
          
        </div>

        <div className='flex flex-col md:flex-row items-center gap-8 pt-[100px]'>
          <div className='w-full md:w-1/2'><Image className='rounded-md w-full' src={item.image}/></div>
          <div className='w-full md:w-1/2'>
            <h4 className='text-2xl  font-bold'>{item.name}</h4>

                  <p   className='text-xl text-gray-400 mb-4 font-medium'>{item.description}</p> 
                 
                 <p   className='text-xl font-medium'>${item.price}</p>

                 {/* {item.oldPrice ?  <p><span className='font-medium text-xl'>$</span><del   className='text-xl font-medium'>{item.oldPrice}</del></p>:null} */}
          
                 
             
                  
                    <div className='mb-6'>

                      <p><strong >Catagory:</strong >  {item.category}</p>
                      <p><strong >Color:</strong >  {item.color}</p>
                      {/* <p><strong >Rating:</strong > {item.rating}</p> */}
                      <div className='flex items-center gap-2'>
                        <strong >Rating:</strong >   
                        <RatingStar rating={item.rating}/>
                        </div>
                     
                    </div>

                    <button onClick={()=>handleaddToCart(item)} className="inline-block py-2 px-5 bg-red-600 hover:bg-red-700 transition rounded-2xl text-white text-sm sm:text-base md:text-lg"> Add To Cart</button>
             
          </div>
        </div>
                 
              
{
    user &&
    <div className='pt-[50px] pl-4'>
  <h1 className='text-4xl text-2xl-black font-bold pb-2'>All Comment</h1>

  <textarea value={comment} onChange={handleComent}  className='md:w-1/4 w-full border py-2 'placeholder='Write your comment'></textarea> <br />
  <button onClick={handleSubmit} className="inline-block py-2  px-5 bg-red-600 hover:bg-red-700 transition rounded-2xl text-white text-sm sm:text-base md:text-lg"><i className="ri-pencil-fill"></i> Add a new comment</button>
  {/* {
    arr.map((item,index)=>(
      <li key={index}>{item.name}</li>
    ))
  } */}
 <div className='flex flex-col gap-3 pt-5'>
   {
    allcomment.map((item,index)=>(
      <div  key={index}  className='flex items-center gap-2'>
        <Image className='w-[40px]' src={Avatar }/>
        <p className='text-xl font-semibold'>{item.name}</p>
      </div>
    ))
  }
 </div>
</div>
}
               
                </>
               
                
              )
            }
})
        }
      </Container>
    </div>
  )
}

export default SingleProduct