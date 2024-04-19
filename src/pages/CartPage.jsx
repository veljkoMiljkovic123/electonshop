import React from "react";
import { useSelector } from "react-redux";
import CartItemComponentt from "../components/CartItemComponentt";

function CartPage() {
  const { cart, totalPrice } = useSelector((state) => state.cartStore);
  console.log(cart);

  return (
    <div>
      {cart.length > 0 ? (
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
                {cart.map((item, index) => {
                  return <CartItemComponentt key={index} item={item}/>
                })}
              </div>
            </div>
            {/* right side */}

            <div></div>
          </div>
        </div>
      ) : (
        <div>Nema proizvoda</div>
      )}
    </div>
  );
}

export default CartPage;
