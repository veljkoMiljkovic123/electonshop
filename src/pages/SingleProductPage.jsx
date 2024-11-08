<<<<<<< HEAD
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { saveInCartAction } from "../store/cartSlice";
import Rating from "@mui/material/Rating";
import ProductsService from "../services/productsService";
import Loader from "../components/LoaderComponent";

// icons
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";
import { saveFavoriteAction } from "../store/favoriteSlice";
=======
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
>>>>>>> c683fde2d71bb2d1353d798a1229566d6a152c5c

function SingleProductPage() {
  const [product, setProduct] = useState({});
  const [currentImage, setCurrentImage] = useState(0);
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(false);
  const [favoriteIdIcon, setFavoriteIdIcon] = useState(null);
=======
  const [favoriteIdIcon, setFavoriteIdIcon] = useState(null)

  const {allFavorite} = useSelector(state => state.favoriteStore)
>>>>>>> c683fde2d71bb2d1353d798a1229566d6a152c5c

  const { allFavorite } = useSelector((state) => state.favoriteStore);

  // dispatch
  const dispatch = useDispatch();
  // 1. uzmi ID
  const { productId } = useParams();

  useEffect(() => {
    // 2. Poslati request.. Service
    ProductsService.getSingleProduct(productId)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, [productId]);

  function handleCurrentImage(index) {
    setCurrentImage(index);
  }

  function handleAddToCart() {
    dispatch(saveInCartAction(product));
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

  function handleAddFavorite() {
    dispatch(saveFavoriteAction(product));
  }

  // Framer animtion
  const fadeInAnimationVariantsLeft = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    },
  };

  // Framer animtion
  const fadeInAnimationVariantsRight = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="mt-[50px] px-[10px] py-5">
      {isLoading ? (
        <div className="container mx-auto flex items-start gap-5 flex-col md:flex-row">
          {/* Left side */}
<<<<<<< HEAD
          <motion.div
            variants={fadeInAnimationVariantsLeft}
            initial="initial"
            whileInView="animate"
            className="w-full md:w-[50%]"
          >
=======
          <motion.div 
             variants={fadeInAnimationVariantsLeft}
             initial='initial'
             whileInView='animate' 
             className="w-full md:w-[50%]">
          
>>>>>>> c683fde2d71bb2d1353d798a1229566d6a152c5c
            <img
              className="h-[400px]"
              src={product.images[currentImage]}
              alt={product.title}
            />
            <div className="flex items-center gap-5 flex-wrap mt-[20px]">
              {product.images.map((imgSrc, index) => {
                return (
                  <img
                    className="w-[100px] h-[100px] object-cover border-2 border-mainBlue rounded-xl mt-5"
                    src={imgSrc}
                    key={index}
                    onClick={() => handleCurrentImage(index)}
                  />
                );
              })}
            </div>
          </motion.div>
          {/* Right side */}
<<<<<<< HEAD
          <motion.div
            variants={fadeInAnimationVariantsRight}
            initial="initial"
            whileInView="animate"
            className="w-full md:w-[50%] flex flex-col justify-center items-start gap-4 pl-5 pr-5"
          >
            <h2 className="font-extrabold text-2xl text-mainBlue">
              {product.title}
=======
          <motion.div variants={fadeInAnimationVariantsRifgt}
             initial='initial'
             whileInView='animate' 
             className="w-full md:w-[50%]">
            <h2 className="font-bold text-2xl text-mainBlue mb-2">
              {singleProduct.title}
>>>>>>> c683fde2d71bb2d1353d798a1229566d6a152c5c
            </h2>
            <span className="text-blueTextColor text-[20px]">
              $ {product.price}
            </span>
            <p className="flex-start gap-[10px] mt-3">
              <span className="text-balckTextColor  text-[20px]">Reviews:</span>
              <Rating
                name="half-rating-read"
                defaultValue={product.rating}
                precision={0.5}
                readOnly
              />
            </p>
            <p className="flex items-center gap-[10px] text-[20px] text-blackTextColor mt-3">
              Availability:
              {product.stock ? (
                <span className="flex-center text-lightGreen gap-[5px]">
                  <FaCheck /> In stock
                </span>
              ) : (
                <span className="flex-center text-mainRed gap-[5px]">
                  <RxCross2 size={24} /> Out of stock
                </span>
              )}
            </p>
            <p className="text-[20px] text-blackTextColor mt-3">
              Hurry up! only <span className="font-bold">{product.stock}</span>{" "}
              product left in stock!
            </p>
<<<<<<< HEAD
            <p className="text-[20px] text-blackTextColor mt-3">
              Total price:{" "}
              <span className="text-blueTextColor text-[20px]">
                {" "}
                ${product.price}
              </span>
            </p>
            {/* ADD / Favorite Button */}
            <div className="flex-center mt-8 gap-5">
              <Link
                className="bg-mainYellow text-whiteTextColor px-6 py-3 rounded-xl shadow-lg text-[20px]"
                to="/cart"
                onClick={handleAddToCart}
              >
                Add To Cart
              </Link>
              <Link
                className="bg-lightBlue px-6 py-3 rounded-xl shadow-lg border-2 border-blackTextColor"
                to="/favorites"
                onClick={handleAddFavorite}
              >
                <CiHeart size={28} />
              </Link>
            </div>
=======
            <p className="text-[20px] te xt-blackTextColor">Total price:<span className="font-bold"> ${singleProduct.price}</span></p>
            {/* Add favorite button */}
              <div className="flex items-center mt-12 gap-5">
                <Link to='/cart' className="bg-mainYellow text-white px-6 py-3 rounded-xl shadow-lg text-[20px]" onClick={handleAddToCart}>Add to Cart</Link>
                <Link to='/favorite' className="bg-lightBlue px-6 py-3 rounded-xl shadow-lg border border-black" onClick={handleAddToFavorite} >
                 
                 {favoriteIdIcon === parseInt(productId)?<CiHeart size={28} color="red" />:<CiHeart size={28} /> }
                  
                  
                </Link>
              </div>
>>>>>>> c683fde2d71bb2d1353d798a1229566d6a152c5c
          </motion.div>
        </div>
      ) : (
        <div className="flex">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default SingleProductPage;
