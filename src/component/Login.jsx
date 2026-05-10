import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
const Login = () => {
 const auth = getAuth();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()

 
    const handleEmail=(e)=>{
    setEmail(e.target.value);
      
    }
    const handlePassword=(e)=>{
      setPassword(e.target.value);
      
    }





    const handleLogin=()=>{
   signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    toast.success("Login done");

  setTimeout(()=>{ navigate("/")},2000)
  })
  .catch((error) => {
    const errorCode = error.code;
    toast.error( errorCode);
  });
    
    
      
    }

  return (
    <section className='flex items-center justify-center h-screen'>
            <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
        <div className='max-w-sm border shadow-2xl bg-white mx-auto p-8'>
          <h2 className='text-2xl font-semibold pt-5'>Please Login</h2>
          <div  className='pt-8 flex  flex-col gap-y-2'>
             <input onChange={handleEmail}   type="email" name='email' id='email' placeholder='Enter email' required
             className="w-full bg-gray-100 focus:outline-none px-5 py-3"  />
             <input onChange={handlePassword}    type="password" name='password' id='password' placeholder='Enter password' required
             className="w-full bg-gray-100 focus:outline-none px-5 py-3"  />
         

           <button onClick={handleLogin} className="inline-block py-2 px-5 mt-5 bg-red-500 hover:bg-blue-500 transition rounded-2xl text-white text-sm sm:text-base md:text-lg">Login</button>
          </div>
          <p className='my-5 italic text-sm text-center '>Don't have an account? <Link  to="/register" className='text-red-600 hover:text-blue-600 underline '>Register </Link> here.</p>
        </div>
    </section>
  )
}

export default Login