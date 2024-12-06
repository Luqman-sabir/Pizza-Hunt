import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { removeFromCart,incrementQty,decrementQty } from "../redux/slices/cardSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const ItemsCard = ({name,id,img,price,rating,qty}) => {
  console.log("id",id);
  
  const dispatch = useDispatch();
  return (
    <div className="flex mt-5 "  >
      <img src={img} alt="" className="w-[80px]" />
      <div className="">
        <h2>{name}</h2>
        
        <div className="flex items-center justify-between ">
          <span> {price}</span>
          <div className="flex items-center gap-4 absolute right-6 ">
            <FaMinus onClick={()=> qty>1 ?dispatch(decrementQty({id})):qty=0}/>
            <span>{qty}</span>
            <FaPlus onClick={()=>dispatch(incrementQty({id}))}/>
            <MdDelete onClick={()=>{
              dispatch(removeFromCart({id}))
              toast(`${name} Removed!`, {
                icon: '👏',
              });
            }}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
