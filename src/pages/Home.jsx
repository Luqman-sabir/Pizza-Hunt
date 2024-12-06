import React from 'react'
import Navbar from '../components/Navbar'
import Categorymenue from '../components/Categorymenue'
import Fooditems from '../components/Fooditems'
import Cart from '../components/Cart'



const Home = () => {
  return (
    <div className='p-5'>
    <Navbar/>
    <Categorymenue/>
    <Fooditems/>
    <Cart/>
    </div>
  )
}

export default Home