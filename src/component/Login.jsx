import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [massege,setMassege]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const handleLogin=async(e)=>{
e.preventDefault()
const data={
  email,
  password
}
console.log(data);

  }
  return (
    <section className='flex items-center justify-center h-screen'>
        <div className='max-w-sm border shadow-2xl bg-white mx-auto p-8'>
          <h2 className='text-2xl font-semibold pt-5'>Please Login</h2>
          <form onSubmit={handleLogin} className='pt-8 flex  flex-col gap-y-2'>
             <input onChange={(e)=>setEmail(e.target.value)} type="email" name='email' id='email' placeholder='Enter email' required
             className="w-full bg-gray-100 focus:outline-none px-5 py-3"  />
             <input onChange={(e)=>setPassword(e.target.value)}  type="password" name='password' id='password' placeholder='Enter password' required
             className="w-full bg-gray-100 focus:outline-none px-5 py-3"  />
            
           {
            massege && <p className='text-red-500'>{massege}</p>
           }

           <button  className="inline-block py-2 px-5 mt-5 bg-red-500 hover:bg-blue-500 transition rounded-2xl text-white text-sm sm:text-base md:text-lg">Login</button>
          </form>
          <p className='my-5 italic text-sm text-center '>Don't have an account? <Link  to="/register" className='text-red-600 hover:text-blue-600 underline '>Register </Link> here.</p>
        </div>
    </section>
  )
}

export default Login