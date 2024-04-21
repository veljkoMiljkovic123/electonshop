import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import { useDispatch } from "react-redux";
import { saveInCartAction } from "../store/cartSlice";
import {motion} from "framer-motion"

function CardProductComponent({ product,activeView }) {
  const dispatch = useDispatch()
  function handleAddToCart() {
    dispatch(saveInCartAction(product))
  }

  return (
    <motion.div
    whileHover={{scale:1.05}}
    whileTap={{scale:1.1}}>
    <div className={activeView==="listView" ? "w-full  flex flex-row items-center justify-between border-mainBlue border-b pb-3" : "w-[300px] h-full border border-mainBlue rounded-lg flex flex-col items-center gap-3 cursor-pointer"}>
      <div className={activeView === 'listView'?'relative w-[100px] h-[100px]':'relative w-full'}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className={activeView==="listView" ? "w-[100px] h-[100px] object-cover rounded-md":"w-full h-[200px] object-cover rounded-md"}
        />
        <div className="absolute inset-0 bg-black/45 hover:bg-transparent transition-all rounded-lg"></div>
      </div>
      <h2 className="font-bold text-xl text-mainBlue">{product.title}</h2>
      <span className="text-mainYellow text-lg">${product.price}</span>
      {/* Rating===zvezdiice */}
      <div className="hidden lg:block">
      <Rating
        name="half-rating-read"
        defaultValue={product.rating}
        precision={0.5}
        readOnly
      />
      </div>
      <div className="py-5 flex gap-3 items-center justify-center">
      <Link
        to={`/singleProduct/${product.id}`}
        className="bg-mainBlue px-4  text-whiteTextColor py-2 rounded-lg hover:bg-mainYellow transition-all mb-3"
      >
        View Detail
      </Link>

      <Link to='/cart'  className="bg-mainBlue px-4  text-whiteTextColor py-2 rounded-lg hover:bg-mainYellow transition-all mb-3" onClick={handleAddToCart}>Add to Cart</Link>
      </div>
     

    </div>
    </motion.div>);
}

export default CardProductComponent;
