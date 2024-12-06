import React from 'react'
import { IoStar } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cardSlice';
const FoodCard = ({id,image,name,price,desc,rating,handleToast}) => {
  const dispatch = useDispatch();
  function handlecart() {
    dispatch(addToCart({id,  name,image,price,qty:1,rating}))
    handleToast(name);
  }

  return (
    <div className='w-[250px] font-bold bg-gray-200 rounded-lg p-5 mt-5'>
        <img src={image} alt="" className='hover:scale-110 w-auto h-[130px] transition-all duration-500 cursor-pointer' />
        <div className='flex justify-between mt-2'>
            <h2 className=''>{name}</h2>
            <span className='text-green-500'>{price}</span>
        </div>
            <p className='text-sm my-2' > {desc}...</p>
            <div className='flex justify-between items-center my-2'>
                <span className='flex items-center gap-1'>
                    <IoStar className='text-yellow-300' />{rating}</span>
                <button onClick={handlecart} className='text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm p-1'>Add to cart</button>
            </div>
    </div>
  )
}

export default FoodCard