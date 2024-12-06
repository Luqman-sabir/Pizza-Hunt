import React,{useState} from 'react'
import { FoodData } from '../data/FoodData'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/CategorySlice';
const Categorymenue = () => {
const [categories, setCategories] = useState([])
const listUniqueCatgories = ()=>{
  const uniqueCategories = [...new Set(FoodData.map((food)=>food.category))];
  setCategories(uniqueCategories);
  console.log("uniqueCategory",uniqueCategories);
  
};
useEffect(()=>{
listUniqueCatgories();
},[]);
const dispatch = useDispatch();
const selectedCategories = useSelector((state)=>state.category.category)
  return (
    <div>
        <h3 className='font-bold text-2xl mt-3'>Find the best food</h3>
        <div className='mt-3 flex gap-3'>
        <button onClick={()=>{dispatch(setCategory("All"))}}  className='text-xl font-semibold hover:text-white hover:bg-green-500 px-3 py-2 rounded-lg  '>All </button>

       {categories.map((category,i)=>(
        <button onClick={()=>{dispatch(setCategory(category))}} key={i} className='text-xl font-semibold hover:text-white hover:bg-green-500 px-3 py-2 rounded-lg '>{category} </button>

       ))}
        </div>
    </div>
  )
}

export default Categorymenue