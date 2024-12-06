import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between'>
      <div>
        <h3 className='text-2xl font-bold text-gray-700'>{new Date().toUTCString().slice(0,16)}  </h3>
        <h2  className='text-2xl font-bold text-gray-700'>Flavoro</h2>
      </div>
      <div >
        <input type="text" placeholder='Serach here' autoComplete='off' className='border border-gray-400 rounded-md p-2 outline-none ' /></div>
    </nav>
  )
}

export default Navbar