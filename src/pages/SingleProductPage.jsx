import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import ProductsService from "../services/productsService";
import LoaderComponent from "../components/LoaderComponent";
import { Rating } from "@mui/material";
import { useSelector } from 'react-redux';

//icons
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { saveInCartAction } from "../store/cartSlice";
import { saveFavoriteAction } from "../store/FavoriteSlice";

import {motion} from "framer-motion"

function SingleProductPage() {
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [favoriteIdIcon, setFavoriteIdIcon] = useState(null)

  const {allFavorite} = useSelector(state => state.favoriteStore)

  //dispatch
  const dispatch = useDispatch();

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
  //handleAddToCart
  function handleAddToCart(){
    dispatch(saveInCartAction(singleProduct))
  }
  function handleAddToFavorite(){
      dispatch(saveFavoriteAction(singleProduct))
  }

  useEffect(()=>{
    allFavorite.find((item)=>{
        if(item.id === parseInt(productId)){
          setFavoriteIdIcon(item.id)
          return;
        }
    },[allFavorite])
  })

  console.log(favoriteIdIcon);

  const fadeInAnimationVariantsLeft = {
    initial: {
        opacity:0,
        x:-100,
    },
    animate:{
        opacity:1,
        x:0,
        transition:{
            delay:0.1,
            duration:1,
        },
    },
    
};
  const fadeInAnimationVariantsRifgt = {
    initial: {
        opacity:0,
        x:100,
    },
    animate:{
        opacity:1,
        x:0,
        transition:{
            delay:0.1,
            duration:1,
        },
    },
    
};

  return (
    <div className="px-3 my-5">
      {isLoading ? (
        <div className="container mx-auto mt-[50px] flex items-start gap-5 flex-col md:flex-row">
          {/* Left side */}
          <motion.div 
             variants={fadeInAnimationVariantsLeft}
             initial='initial'
             whileInView='animate' 
             className="w-full md:w-[50%]">
          
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
          </motion.div>
          {/* Right side */}
          <motion.div variants={fadeInAnimationVariantsRifgt}
             initial='initial'
             whileInView='animate' 
             className="w-full md:w-[50%]">
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
            <p className="text-[20px] te xt-blackTextColor">Total price:<span className="font-bold"> ${singleProduct.price}</span></p>
            {/* Add favorite button */}
              <div className="flex items-center mt-12 gap-5">
                <Link to='/cart' className="bg-mainYellow text-white px-6 py-3 rounded-xl shadow-lg text-[20px]" onClick={handleAddToCart}>Add to Cart</Link>
                <Link to='/favorite' className="bg-lightBlue px-6 py-3 rounded-xl shadow-lg border border-black" onClick={handleAddToFavorite} >
                 
                 {favoriteIdIcon === parseInt(productId)?<CiHeart size={28} color="red" />:<CiHeart size={28} /> }
                  
                  
                </Link>
              </div>
          </motion.div>
        </div>
      ) : (
        <div className="flex"><LoaderComponent /></div>
      )}
    </div>
  );
}

export default SingleProductPage;
