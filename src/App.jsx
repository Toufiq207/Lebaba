
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from './component/Navber'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>
 <Navber/>
<div className='pt-[30px]'>
  <Outlet/>
</div>
      

    <Footer/>
    </div>
  )
}

export default App
