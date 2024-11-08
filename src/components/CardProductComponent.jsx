import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

function CardProductComponentt({ product }) {
  return (
    <div className="flex flex-col items-center border-2 border-mainYellow gap-2 w-[300px] h-full rounded-lg cursor-pointer">
      <div className="relative w-full">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-[150px] w-full object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 bg-black/45 hover:bg-transparent transition-all rounded-lg"></div>
      </div>
      <h2 className="font-bold text-xl text-mainBlue">{product.title}</h2>
      <span className="text-mainYellow text-lg">${product.price}</span>
      <Rating
        name="half-rating-read"
        defaultValue={product.rating}
        precision={0.5}
        readOnly
      />
      <Link
        to={`/singleProduct/${product.id}`}
        className="bg-mainBlue px-4 text-whiteTextColor py-2 rounded-lg hover:bg-mainYellow transition-all mb-3"
      >
        View Detail
      </Link>
    </div>
  );
}

export default CardProductComponentt;
