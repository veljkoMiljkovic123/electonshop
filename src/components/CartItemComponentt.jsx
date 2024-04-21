import React from 'react'
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { deleteItemCartAction, setPriceHandler } from '../store/cartSlice';
function CartItemComponentt({item,index}) {
    const dispatch = useDispatch()

    function removeItemHandler(){
        dispatch(deleteItemCartAction(item))
    }
  return (
    <div className='grid grid-cols-4 place-items-center mt-5 relative border-b-2 pb-[10px]'>
        <div className='flex gap-3 items-center '>
            <img src={item.thumbnail} alt={item.title} className='hidden lg:flex w-[100px] h-[100px] object-cover rounded-2xl' />

        <div>
             <h2>{item.title}</h2>
             <p>{item.category}</p>
             <p>{item.stock}</p>
        </div>
    </div>
    <div>
        <p>${item.price}</p>
    </div>
    <div className='flex items-center'>
        <button className='px-2 py-1 bg-slate-300 text-[18px]'
        onClick={() => dispatch(setPriceHandler({increment:1, index}))}>+</button>
        <span className='px-2 py-1 bg-slate-300 text-[18px]'>{item.count}</span>
        <button className='px-2 py-1 bg-slate-300 text-[18px]'
        onClick={()=>item.count > 0 && dispatch(setPriceHandler({increment:-1,index}))}>-</button>
    </div>
    <div>
        {/* cartTotal */}
        ${item.cartTotal}
    </div>
    <div>
        <ImCross color='red' className='absolute right-5 top-10 cursor-pointer' onClick={removeItemHandler}/>
    </div>
        
</div>
  )
}

export default CartItemComponentt