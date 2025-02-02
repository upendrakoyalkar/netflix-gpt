import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
  const [siginform, setsiginform] = useState(false)
  
  const togglesinform = () => {
    setsiginform(!siginform)
  };
  return (
    <div>
          <div className='relative'>

      <Header />

    <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_medium.jpg" className='w-full h-auto'/>
    
    <form className='w-3/9  text-white p-5  text-center absolute top-1/3 left-1/2  -translate-x-1/2 -translate-y-1/4 bg-black/80 backdrop-invert backdrop-opacity-80 rounded-lg'>
    <h6 className = "w-21 font-bold my-2 p-2 text-white text-left">{siginform?"sing In" : "Sing Out"}</h6>
      {siginform && (<div><label className = " float-left px-1.5">Email</label>
      <input className=' border 1px solid m-2  py-1 p-2' type = "text" placeholder="Enter your Email" />
      </div>)}
      <label className = " float-left px-1.5">Name</label>
      <input className=' border 1px solid m-2  py-1 p-2' type = "text" placeholder="Enter Name" />
      
      
      <p className = " float-left px-1.5">Password</p>
      <input className=' border 1px solid m-2 py-1 p-2 px-2' type = "password" placeholder="Enter Password" />
      <button className='bg-blue-300 text-black p-1 border 1px solid rounded-sm'>{siginform?"sing In" : "Sing out"}</button>
      
      <p className='py-4 cursor-pointer' onClick={togglesinform}>New to Netfix? sing Up Now</p>

    </form>
    
   
    </div>
    </div>
    
  )
}

export default Login