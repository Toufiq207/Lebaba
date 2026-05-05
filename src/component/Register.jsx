import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

    
  return (
       <section className='flex items-center justify-center h-screen'>
        <div className='max-w-sm border shadow-2xl bg-white mx-auto p-8'>
          <h2 className='text-2xl font-semibold pt-5'>Please Register</h2>
          <form  className='pt-8 flex  flex-col gap-y-2'>

 <input  type="text" name='username' id='username' placeholder='Enter Username' required
             className="w-full bg-gray-100 focus:outline-none px-5 py-3"  />


             <input  type="email" name='email' id='email' placeholder='Enter email' required
             className="w-full bg-gray-100 focus:outline-none px-5 py-3"  />
             <input   type="password" name='password' id='password' placeholder='Enter password' required
             className="w-full bg-gray-100 focus:outline-none px-5 py-3"  />
            
          

           <button  className="inline-block py-2 px-5 mt-5 bg-red-500 hover:bg-blue-500 transition rounded-2xl text-white text-sm sm:text-base md:text-lg">Register</button>
          </form>
          <p className='my-5 italic text-sm text-center '>Have an account? Please <Link  to="/login" className='text-red-600 hover:text-blue-600 underline '>Login </Link> here.</p>
        </div>
    </section>
  )
}

export default Register