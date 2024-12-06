import React from 'react'
import { IoClose } from "react-icons/io5";
import ItemsCard from './ItemsCard';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
const Cart = () => {
  const [activecart, setActivecart] = useState(true)
  const cartItems = useSelector((state)=>state.cart.cart)
  console.log("cart items",cartItems);
  const totalQty = cartItems.reduce((totalQty,item)=>totalQty + item.qty,0);
  const totalPrice = cartItems.reduce((totalPrice,item)=>totalPrice + item.qty * item.price,0);

  return (
    <div>
     <div className={`fixed right-0 z-10 top-0 w-[20vw] bg-slate-200 h-full p-5 ${activecart?"translate-x-0":"translate-x-full"}`}>
         <div className='flex items-center justify-between '>
            <span>My Orders</span>
            <IoClose className='cursor-pointer' onClick={()=>setActivecart(!activecart)} />
         </div>
         {cartItems.length > 0 ?cartItems.map((food)=>(
            <ItemsCard key={food.id} id={food.id}
            name={food.name}
            price={food.price}
            img={food.image}
            qty={food.qty}
            
            />
            ))
            : <h2 className='text-center text-2xl mt-56'> Your Card is Empty</h2>
         }
         
         
         <div className='absolute bottom-0'>
            <h3>Items:  {totalQty} </h3>
            <h3 className='my-4'>Total Amount: {totalPrice} </h3>
            <hr />
            <button className='bg-green-500 p-2 rounded-lg w-[18vw]'>Checkout</button>
         </div>
        </div>
        <FaShoppingCart className={`text-3xl fixed bottom-10 right-7 ${totalQty>0 && "animate-bounce delay-500 transition-all"}`} onClick={()=>setActivecart(!activecart)} />
    </div>
  )
}

export default Cart
