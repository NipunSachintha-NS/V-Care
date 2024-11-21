import React from 'react'

export default function Login() {
  return (
    
    <div className="flex items-center justify-center h-screen bg-gray-100">
        <form className="bg-white p-6 rounded shadow-md w-96 h-80 ">

          <div className='flex items-center justify-center mb-8'>
            <span className='text-3xl font-semibold '>V-Care</span>
          </div>

          <div className= "input-box mb-8">
             <input type='Email'placeholder='Enter your User Name' className= "w-full py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 "/>
          </div>

          <div className="input-box mb-8">
             <input type='Password' placeholder='Enter Your Password' className= "w-full py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 "/>
          </div>

          <button type='submit'  className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Login</button>
          
        </form>
    </div>
  )
}
