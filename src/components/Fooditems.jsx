import React from 'react'
import FoodCard from './FoodCard'
import { FoodData } from '../data/FoodData'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const Fooditems = () => {
  const category = useSelector((state)=>state.category.category)
  const handleToast = (name)=>toast.success(`Added  ${name}`)
  
  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <div className='flex flex-wrap gap-7 '>
      {
         FoodData.filter((food)=>{
          if (category==="All") {
           return food
          }
          else{
            return category === food.category
          }
        }).map((food)=>(
          <FoodCard 
          key={food.id}
          id={food.id}
          name={food.name}
          image={food.Image}
          desc={food.desc}
          rating={food.rating}
          price={food.price}
          handleToast={handleToast}
/>
        ))
}
     
    
    </div>
    </>
  )
}

export default Fooditems