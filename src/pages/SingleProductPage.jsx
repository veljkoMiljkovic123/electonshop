import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsService from "../services/productsService";
import LoaderComponent from "../components/LoaderComponent";
import { Rating } from "@mui/material";

//icons
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function SingleProductPage() {
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  //1.Uzmi id
  const { productId } = useParams();
  console.log(productId);

  useEffect(() => {
    //2.Poslati Request....Service
    ProductsService.getSingleProduct(productId)
      .then((res) => {
        setSingleProduct(res.data);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCurrentImage(index) {
    setCurrentImage(index);
  }

  return (
    <div className="px-3 my-5">
      {isLoading ? (
        <div className="container mx-auto mt-[50px] flex items-start gap-5 flex-col md:flex-row">
          {/* Left side */}
          <div className="w-full md:w-[50%]">
            <img
              src={singleProduct.images[currentImage]}
              alt={singleProduct.title}
              className=" h-[400px]"
            />
            <div className="flex items-center gap-5 flex-wrap">
              {singleProduct.images.map((imgSrc, index) => {
                return (
                  <img
                    src={imgSrc}
                    key={index}
                    className="w-[100px] h-[100px] object-cover border-2 border-mainBlue rounded-xl mt-[20px]"
                    onClick={() => handleCurrentImage(index)}
                  />
                );
              })}
            </div>
          </div>
          {/* Right side */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl text-mainBlue mb-2">
              {singleProduct.title}
            </h2>
            <span className="text-blueTextColor text-[20px]">${singleProduct.price}</span>
            <p className="flex items-center gap-2">
              <span className="text-blackTextColor text-[20px]">Reviews:</span>
              <Rating
                name="half-rating-read"
                defaultValue={singleProduct.rating}
                precision={0.5}
                readOnly
              />
            </p>
            <p className="flex items-center gap-2 text-[20px]">
              Availibility:
              {singleProduct.stock ? (
                <span className="flex items-center gap-2 text-lightGreen">
                  <FaCheck /> In Stock
                </span>
              ) : (
                <span className="flex items-center gap-2 text-mainRed" >
                  <ImCross /> Out of stock
                </span>
              )}
            </p>
            <p className="text-[18px] text-blackTextColor">
              Hurry up! only {singleProduct.stock} product left in stock!
            </p>
            <p className="text-[20px] text-blackTextColor">Total price:<span className="font-bold"> ${singleProduct.price}</span></p>
          </div>
        </div>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}

export default SingleProductPage;
