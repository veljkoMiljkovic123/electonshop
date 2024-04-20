import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

function CardProductComponent({ product,activeView }) {
  return (
    <div className={activeView==="listView" ? "w-full  flex flex-row items-center justify-between border-mainBlue border-b pb-3" : "w-[300px] h-full border border-mainBlue rounded-lg flex flex-col items-center gap-3 cursor-pointer"}>
      <div className={activeView === 'listView'?'relative w-[100px] h-[100px]':'relative w-full'}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className={activeView==="listView" ? "w-[100px] h-[100px] object-cover":"w-full h-[200px] object-cover"}
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
      <Link
        to={`/singleProduct/${product.id}`}
        className="bg-mainBlue px-4  text-whiteTextColor py-2 rounded-lg hover:bg-mainYellow transition-all mb-3"
      >
        View Detail
      </Link>
    </div>
  );
}

export default CardProductComponent;
