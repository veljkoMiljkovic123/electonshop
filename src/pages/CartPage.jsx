<<<<<<< HEAD
// CartPage.jsx

import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import CartItemComponent from "../components/CartItemComponent";
import country from "../constants/country";

function CartPage() {
  const [currentCoupon, setCurrentCoupon] = useState(null);

  const coupon = useRef();
=======
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import CartItemComponentt from "../components/CartItemComponentt";
import country from "../constants/country";

function CartPage() {
  //valid coupon is alphacode
  const [currentCoupon, setCurrentCoupon] = useState(null)

  //coupon
  const coupon = useRef()
>>>>>>> c683fde2d71bb2d1353d798a1229566d6a152c5c
  const { cart, totalPrice } = useSelector((state) => state.cartStore);

  function handleCoupon() {
    if (coupon.current.value === "alphacode") {
      setCurrentCoupon("alphacode");
    } else {
      setCurrentCoupon(null);
    }

    coupon.current.value = "";
  }

  function handleCoupon(){
    setCurrentCoupon(coupon.current.value)

    //reset input
    coupon.current.value=''
  }
  return (
    <div className="px-4 lg:px-0">
<<<<<<< HEAD
      <div className="mt-[20px] lg:mt-[50px]">
        <div className="container mx-auto flex flex-col lg:flex-row gap-3">
          {/* Left side */}
          <div className="w-full lg:w-[70%]">
            <div className="grid grid-cols-4 bg-lightBlue h-[60px] place-items-center">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>SubTotal</p>
            </div>

            <div>
              {cart.length > 0 ? (
                cart.map((item, index) => (
                  <CartItemComponent key={index} item={item} index={index} />
                ))
              ) : (
                <p className="text-center text-2xl font-bold mt-12">
                  Cart is empty
                </p>
              )}
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col">
            <div className="bg-lightBlue">
              <h1 className="text-center text-2xl font-bold">Total Price:</h1>
              <p className="text-3xl text-center">
                $
                {currentCoupon === "alphacode"
                  ? (totalPrice / 2).toFixed(2)
                  : totalPrice.toFixed(2)}
              </p>
            </div>

            {/* Coupons */}
            <div className="flex flex-col gap-3 mt-10">
              <label>Insert coupon "alphacode" for 50%</label>
              <input
                type="text"
                placeholder="Insert coupon"
                className="p-3 border rounded-lg"
                ref={coupon}
              />
              <button
                className="bg-mainBlue text-whiteTextColor px-5 py-3 rounded-lg"
                onClick={handleCoupon}
              >
                Apply
              </button>
            </div>

            {/* Country selector/options */}
            <div>
              <select className="w-full px-2 py-1 border border-slate-500 rounded-full bg-whiteTextColor mt-4">
                {country.map((el, index) => (
                  <option key={index} value={el.code}>
                    {el.name}
                  </option>
                ))}
              </select>
            </div>

            <button className="bg-mainYellow text-whiteTextColor px-[20px] py-[10px] rounded-lg mt-[20px]">
              Checkout
            </button>
          </div>
        </div>
      </div>
=======
      {(
        <div className="mt-[20px] lg:mt-[50px]">
          <div className="container mx-auto flex flex-col lg:flex-row gap-3">
            {/* left side */}
            <div className="w-full lg:w-[70%]">
              <div className="grid grid-cols-4 bg-lightBlue h-[60px] place-items-center">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>SubTotal</p>
              </div>

              {/* body content */}
              <div>
                {cart.length > 0?(cart.map((item, index) => {
                  return (
                    <CartItemComponentt key={index} item={item} index={index} />
                  );
                })):(<p className="text-center text-2xl font-bold mt-12">Cart is empty</p>)}
              </div>
            </div>
            {/* right side */}
            <div className="flex flex-col">
              <div className="bg-lightBlue">
                <h1 className="text-center text-2xl font-bold">Total Price:</h1>
                <p className="text-3xl text-center">${currentCoupon === 'alphacode'? totalPrice/2 : totalPrice}</p>
              </div>

              {/* coupons */}
              <div className="flex flex-col gap-3 mt-10">
                <label>Insert coupon "alphacode" for 50%</label>
                <input
                  type="text"
                  placeholder="Insert coupon"
                  className="p-3 border rounded-lg"
                  ref={coupon}
                />
                <button className="bg-mainBlue text-whiteTextColor  px-5 py-3 rounded-lg" onClick={handleCoupon}>
                  Apply
                </button>
              </div>

              {/* TODO country selector/options */}
              <div>
                <select className="w-full px-2 py-1 border border-slate-500 rounded-full bg-whiteTextColor mt-4">
                  {country.map((el,index)=>{
                    return <option key={index} value={el.code}>{el.name}</option>
                  })}
                </select>
              </div>

              <button className="bg-mainYellow  text-whiteTextColor px-[20px] py-[10px] rounded-lg mt-[20px]">Checkout</button>
            </div>
          </div>
        </div>
      ) }
>>>>>>> c683fde2d71bb2d1353d798a1229566d6a152c5c
    </div>
  );
}

export default CartPage;
